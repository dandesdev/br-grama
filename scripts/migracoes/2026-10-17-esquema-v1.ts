// Migração única dos dados do piloto para o esquema v1 (2026-10-17).
// Fica no repositório como registro do que mudou; não rode de novo.
//
// Parte 1, mecânica (todos os arquivos): fontes_por_campo → campos; quantidade → vagas;
// provimento_condicao → provimento_nota; requisitos em texto → { texto, fontes }; prazo em texto →
// { texto }; final → tipo_etapa "fim"; abrangência das variações; município contido no estado;
// relações de normas passam a apontar para obj:lei-ordinaria.
// Parte 2, caso a caso: ver a seção "Ajustes específicos".
import { readFileSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

type Obj = Record<string, any>;
const DADOS = join(import.meta.dirname, "..", "..", "dados");
const ler = (p: string): Obj => JSON.parse(readFileSync(join(DADOS, p), "utf8"));
const gravar = (p: string, o: Obj) => writeFileSync(join(DADOS, p), JSON.stringify(o, null, 2) + "\n");
const remover = (p: string) => unlinkSync(join(DADOS, p));
const arquivoDe = (id: string) => {
  const [prefixo, slug] = id.split(":");
  const pasta = { ente: "entes", org: "orgaos", cargo: "cargos", pessoa: "pessoas", norma: "normas", fonte: "fontes", rel: "relacoes", proc: "processos", obj: "objetos", achado: "achados", var: "variacoes" }[prefixo]!;
  return `${pasta}/${slug}.json`;
};
/** Troca o nome de uma chave mantendo a posição dela no objeto. */
const renomear = (o: Obj, de: string, para: string): Obj =>
  Object.fromEntries(Object.entries(o).map(([k, v]) => [k === de ? para : k, v]));
/** Insere uma chave logo depois de outra. */
const inserirDepois = (o: Obj, depoisDe: string, chave: string, valor: unknown): Obj => {
  const r: Obj = {};
  for (const [k, v] of Object.entries(o)) {
    if (k !== chave) r[k] = v;
    if (k === depoisDe) r[chave] = valor;
  }
  if (!(chave in r)) r[chave] = valor;
  return r;
};

const todos: string[] = [];
for (const pasta of readdirSync(DADOS)) {
  for (const nome of readdirSync(join(DADOS, pasta))) if (nome.endsWith(".json")) todos.push(`${pasta}/${nome}`);
}
const fontesNaoOficiais = new Set(
  todos.filter((p) => p.startsWith("fontes/")).map(ler).filter((f) => f.oficial === false).map((f) => f.id),
);

// Siglas usadas nos requisitos → norma
const SIGLAS: Record<string, string> = { CF: "norma:cf-1988", RICD: "norma:ricd", RISF: "norma:risf", RISTF: "norma:ristf" };

function requisito(texto: string): Obj {
  const m = texto.match(/^(.*) \(([^()]+)\)$/);
  if (!m) return { texto, fontes: [] };
  const fontes = m[2].split(";").map((trecho) => {
    const t = trecho.trim();
    const [sigla, ...resto] = t.split(", ");
    return SIGLAS[sigla] ? { ref: SIGLAS[sigla], dispositivo: resto.join(", ") } : null;
  });
  if (fontes.some((f) => !f)) return { texto, fontes: [] };
  return { texto: m[1], fontes };
}

// ---------- Parte 1: mecânica ----------
for (const p of todos) {
  let e = ler(p);

  if (e.fontes_por_campo) {
    const campos: Obj = {};
    for (const [campo, fontes] of Object.entries<Obj[]>(e.fontes_por_campo)) {
      const c: Obj = { fontes };
      if (fontes.some((f) => fontesNaoOficiais.has(f.ref))) c.confianca = "secundario";
      if (fontes.some((f) => /inferid/i.test(f.nota ?? ""))) c.confianca = "inferido";
      campos[campo === "quantidade" ? "vagas" : campo] = c;
    }
    e = renomear(e, "fontes_por_campo", "campos");
    e.campos = campos;
  }

  if (e.tipo === "cargo") {
    e = renomear(e, "quantidade", "vagas");
    if ("quantidade_nota" in e) e = renomear(e, "quantidade_nota", "vagas_nota");
    if ("provimento_condicao" in e) e = renomear(e, "provimento_condicao", "provimento_nota");
    if (e.requisitos) e.requisitos = e.requisitos.map(requisito);
  }

  if (e.tipo === "variacao") {
    const estadual = e.entes.every((id: string) => ler(arquivoDe(id)).tipo_ente === "estado");
    e = inserirDepois(e, "entes", "abrangencia", estadual ? "municipios-do-estado" : "ente");
  }

  if (e.tipo === "ente" && e.tipo_ente === "municipio" && e.uf) {
    e = inserirDepois(e, "uf", "contido_em", `ente:${e.uf.toLowerCase()}`);
  }

  if (e.tipo === "relacao" && e.para === "proc:lei-ordinaria") e.para = "obj:lei-ordinaria";

  if (e.tipo === "processo") {
    e.etapas = e.etapas.map((etapa: Obj) => {
      let et = { ...etapa };
      if (typeof et.prazo === "string") et.prazo = { texto: et.prazo };
      else if (et.prazo === null) delete et.prazo;
      if (et.final) {
        delete et.final;
        et = inserirDepois(et, "id", "tipo_etapa", "fim");
      }
      return et;
    });
  }

  gravar(p, e);
}

// ---------- Parte 2: ajustes específicos ----------
const editar = (id: string, f: (e: Obj) => Obj | void) => {
  const p = arquivoDe(id);
  const e = ler(p);
  gravar(p, f(e) ?? e);
};

// 2.1 "integra" que repete o contido_em: a fonte vai para campos.contido_em do órgão e a relação sai.
for (const rel of [
  "camara-integra-congresso",
  "senado-integra-congresso",
  "mesa-da-camara-integra-camara",
  "mesa-do-senado-integra-senado",
  "mesa-do-congresso-integra-congresso",
  "stf-integra-poder-judiciario",
  "vice-presidencia-integra-poder-executivo",
]) {
  const r = ler(`relacoes/${rel}.json`);
  editar(r.de, (o) => {
    if (o.contido_em !== r.para) throw new Error(`${rel}: contido_em diferente`);
    o.campos = { ...(o.campos ?? {}), contido_em: { fontes: r.fontes } };
  });
  remover(`relacoes/${rel}.json`);
}

// 2.2 "O Poder X é exercido por..." (CF, arts. 44 e 76) vira a relação "exerce".
{
  const r = ler("relacoes/congresso-integra-poder-legislativo.json");
  gravar("relacoes/congresso-exerce-poder-legislativo.json", {
    ...r,
    id: "rel:congresso-exerce-poder-legislativo",
    nome: "O Congresso Nacional exerce o Poder Legislativo",
    relacao: "exerce",
  });
  remover("relacoes/congresso-integra-poder-legislativo.json");
  editar("org:congresso-nacional", (o) => {
    o.campos = { ...(o.campos ?? {}), contido_em: { fontes: r.fontes } };
  });

  const p = ler("relacoes/presidencia-integra-poder-executivo.json");
  gravar("relacoes/presidente-exerce-poder-executivo.json", {
    ...p,
    id: "rel:presidente-exerce-poder-executivo",
    nome: "O Presidente da República exerce o Poder Executivo",
    relacao: "exerce",
    de: "cargo:presidente-da-republica",
    condicao: "Auxiliado pelos Ministros de Estado.",
  });
  remover("relacoes/presidencia-integra-poder-executivo.json");
}

// 2.3 Linha de substituição: ordem explícita no lugar do depende_de.
const linha = [
  "vice-substitui-presidente",
  "presidente-da-camara-substitui-presidente-da-republica",
  "presidente-do-senado-substitui-presidente-da-republica",
  "presidente-do-stf-substitui-presidente-da-republica",
];
linha.forEach((rel, i) =>
  editar(`rel:${rel}`, (r) => {
    delete r.depende_de;
    return inserirDepois(r, "para", "ordem", i + 1);
  }),
);

// 2.4 Quórum estruturado, transcrito da condição já registrada em cada relação.
const quoruns: Record<string, Obj> = {
  "camara-autoriza-processo-presidente": { regra: "dois-tercos" },
  "camara-autoriza-processo-vice-presidente": { regra: "dois-tercos" },
  "senado-julga-presidente-crime-de-responsabilidade": { regra: "dois-tercos", nota: "Para condenar." },
  "senado-julga-ministro-do-stf": { regra: "dois-tercos", nota: "Para condenar." },
  "senado-aprova-indicacao-ministro-do-stf": { regra: "maioria-absoluta", votacao: "secreta" },
  "camara-municipal-julga-contas-prefeito": { regra: "dois-tercos", nota: "Necessário para afastar o parecer prévio do tribunal de contas." },
  "deputados-elegem-presidente-da-camara": { regra: "maioria-absoluta", votacao: "secreta", nota: "No primeiro escrutínio; no segundo, maioria simples." },
  "senadores-elegem-presidente-do-senado": { regra: "maioria-simples", votacao: "secreta", nota: "Presente a maioria da composição do Senado." },
  "ministros-do-stf-elegem-presidente-do-stf": { regra: "outro", votacao: "secreta", nota: "Ver RISTF, art. 12." },
  "plenario-camara-delibera-lei-ordinaria": { regra: "maioria-simples", nota: "Presente a maioria absoluta dos deputados." },
  "plenario-senado-delibera-lei-ordinaria": { regra: "maioria-simples", nota: "Presente a maioria absoluta dos senadores." },
  "congresso-nacional-aprecia-veto-lei-ordinaria": { regra: "maioria-absoluta", nota: "Para derrubar o veto: maioria absoluta dos deputados e dos senadores, contadas separadamente." },
};
for (const [rel, quorum] of Object.entries(quoruns)) {
  editar(`rel:${rel}`, (r) => inserirDepois(r, "para", "quorum", quorum));
}

// 2.5 Contas: as relações passam a apontar para o objeto "contas anuais".
const CONTAS_PR = "obj:contas-anuais-do-presidente-da-republica";
editar("rel:congresso-julga-contas-presidente", (r) => { r.para = CONTAS_PR; });
editar("rel:tcu-emite-parecer-contas-presidente", (r) => { r.relacao = "emite-parecer-previo"; r.para = CONTAS_PR; });
editar("rel:camara-toma-contas-presidente", (r) => { r.relacao = "toma-contas"; r.para = CONTAS_PR; });
editar("rel:tce-parecer-previo-contas-prefeito", (r) => { r.relacao = "emite-parecer-previo"; r.para = "obj:contas-anuais-do-prefeito"; });
editar("rel:camara-municipal-julga-contas-prefeito", (r) => { r.para = "obj:contas-anuais-do-prefeito"; });

// 2.6 Controle de constitucionalidade: uma relação só, cujo alvo são as leis e atos normativos.
{
  const leg = ler("relacoes/stf-controla-constitucionalidade-legislativo.json");
  const exe = ler("relacoes/stf-controla-constitucionalidade-executivo.json");
  gravar("relacoes/stf-controla-constitucionalidade-leis-e-atos.json", {
    id: "rel:stf-controla-constitucionalidade-leis-e-atos",
    tipo: "relacao",
    nome: "Controle de constitucionalidade de leis e atos normativos",
    relacao: "controla-constitucionalidade",
    de: "org:stf",
    para: "obj:lei-ou-ato-normativo-federal-ou-estadual",
    condicao: leg.condicao,
    vigencia: leg.vigencia,
    fontes: [...leg.fontes, ...exe.fontes],
    confianca: "oficial",
    verificacao: leg.verificacao,
  });
  remover("relacoes/stf-controla-constitucionalidade-legislativo.json");
  remover("relacoes/stf-controla-constitucionalidade-executivo.json");
}

// 2.7 Vaga no STF: é um fato do cargo, não um achado de auditoria.
{
  const a = ler("achados/stf-vaga-de-barroso-nao-preenchida.json");
  editar("cargo:ministro-do-stf", (c) => {
    c.vacancias = [
      {
        vagas: 1,
        vigencia: { de: "2025-10-18", ate: null, incerta: true, nota: "Início da composição oficial sem o Ministro Barroso; a data da aposentadoria no DOU não foi conferida." },
        fontes: a.fontes,
        nota: a.detalhes,
      },
    ];
    c.vagas_nota = "Onze cadeiras (art. 101).";
  });
  remover("achados/stf-vaga-de-barroso-nao-preenchida.json");
}

// 2.8 Mandatos: campos estruturados a partir das notas já registradas.
editar("cargo:ministro-do-stf", (c) => {
  c.mandato = { anos: null, vitalicio: true, limite: "aposentadoria compulsória aos 75 anos", nota: c.mandato.nota };
});
editar("cargo:ministro-do-tcu", (c) => {
  c.mandato = { anos: null, vitalicio: true, limite: "aposentadoria compulsória aos 75 anos", nota: c.mandato.nota };
});
editar("cargo:presidente-da-republica", (c) => {
  c.mandato = { ...c.mandato, inicio: "5 de janeiro do ano seguinte ao da eleição, a partir da eleição de 2026" };
});
editar("cargo:arquetipo-municipal-prefeito", (c) => {
  c.mandato = { ...c.mandato, inicio: "1º de janeiro do ano seguinte ao da eleição" };
});

// 2.9 Provimento variável: casos estruturados.
editar("cargo:arquetipo-municipal-prefeito", (c) =>
  inserirDepois(c, "provimento", "provimento_casos", [
    { quando: "Município com mais de 200 mil eleitores", provimento: "eleicao-majoritaria-maioria-absoluta", fontes: [{ ref: "norma:cf-1988", dispositivo: "art. 29, II" }] },
    { quando: "Município com até 200 mil eleitores", provimento: "eleicao-majoritaria-maioria-simples", fontes: [{ ref: "norma:cf-1988", dispositivo: "art. 29, II" }] },
  ]),
);
editar("cargo:ministro-do-tcu", (c) =>
  inserirDepois(c, "provimento", "provimento_casos", [
    { quando: "Seis das nove vagas (dois terços)", provimento: "escolha-pelo-legislativo", fontes: ler("relacoes/congresso-elege-ministro-do-tcu.json").fontes },
    { quando: "Três das nove vagas (um terço)", provimento: "nomeacao-com-aprovacao-do-senado", fontes: ler("relacoes/presidente-indica-ministro-do-tcu.json").fontes },
  ]),
);

// 2.10 Processo da lei ordinária: produz o objeto; urgência vira regime; tipos de etapa, prazos e quóruns.
editar("proc:lei-ordinaria", (p) => {
  const porId = (id: string) => p.etapas.find((e: Obj) => e.id === id);
  const urg = porId("pedido-de-urgencia");
  p.etapas = p.etapas.filter((e: Obj) => e.id !== "pedido-de-urgencia");
  porId("iniciativa").seguintes = porId("iniciativa").seguintes.filter((s: Obj) => s.para !== "pedido-de-urgencia");

  const efeito = (etapa: string) => {
    const e = porId(etapa);
    const prazo = e.prazo;
    delete e.prazo;
    return { etapa, prazo };
  };
  p.regimes = [
    {
      id: "urgencia-constitucional",
      nome: "Urgência pedida pelo Presidente",
      resumo: urg.acao,
      quem_aciona: urg.atores,
      fontes: urg.fontes,
      efeitos: [efeito("camara-plenario"), efeito("senado-plenario"), efeito("camara-aprecia-emendas-do-senado")],
    },
  ];
  const detalhes = [urg.detalhes, urg.prazo?.texto].filter(Boolean).join(" ");
  if (detalhes) p.regimes[0] = inserirDepois(p.regimes[0], "resumo", "detalhes", detalhes);

  for (const id of ["camara-comissoes", "senado-comissoes", "camara-plenario", "senado-plenario", "apreciacao-do-veto", "envio-a-sancao"]) {
    Object.assign(porId(id), { tipo_etapa: "decisao" });
  }
  Object.assign(porId("sancao-tacita"), { tipo_etapa: "decurso-de-prazo" });
  const vig = porId("vigencia");
  vig.tipo_etapa = "fim";
  vig.atores = [];

  porId("camara-plenario").quorum = { regra: "maioria-simples", nota: "Presente a maioria absoluta dos deputados." };
  porId("senado-plenario").quorum = { regra: "maioria-simples", nota: "Presente a maioria absoluta dos senadores." };
  porId("apreciacao-do-veto").quorum = { regra: "maioria-absoluta", nota: "Para derrubar: maioria absoluta dos deputados e dos senadores, contadas separadamente." };
  porId("camara-prazo-de-recurso").quorum = { regra: "um-decimo", nota: "Para apresentar recurso ao Plenário." };
  porId("senado-prazo-de-recurso").quorum = { regra: "um-decimo", nota: "Para apresentar recurso ao Plenário." };

  Object.assign(porId("sancao").prazo, { valor: 15, unidade: "dias-uteis", conta_de: "recebimento do projeto", efeito: "o silêncio vale como sanção" });
  Object.assign(porId("veto").prazo, { valor: 15, unidade: "dias-uteis", conta_de: "recebimento do projeto" });
  Object.assign(porId("apreciacao-do-veto").prazo, { valor: 30, unidade: "dias", conta_de: "protocolo do veto na Presidência do Senado", efeito: "o veto tranca a pauta da sessão conjunta" });
  Object.assign(porId("promulgacao").prazo, { valor: 48, unidade: "horas" });
  Object.assign(porId("camara-prazo-de-recurso").prazo, { valor: 5, unidade: "sessoes", conta_de: "publicação do anúncio" });
  Object.assign(porId("senado-prazo-de-recurso").prazo, { valor: 5, unidade: "dias-uteis", conta_de: "publicação da comunicação na Ordem do Dia" });

  // Ordem das etapas no tipo de etapa: tipo_etapa logo depois do id.
  p.etapas = p.etapas.map((e: Obj) => (e.tipo_etapa ? inserirDepois(e, "id", "tipo_etapa", e.tipo_etapa) : e));
  return inserirDepois(p, "forma", "produz", "obj:lei-ordinaria");
});

console.log("Migração para o esquema v1 concluída.");
