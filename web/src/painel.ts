// Painel lateral: legenda, ficha da entidade selecionada, processo e etapas, lista de avisos.
// Os textos longos ficam atrás do botão "i" (D25).
import { Dados, GRUPOS_RELACAO, NOMES_TIPO, formatarData, reais, type Entidade, type Etapa, type FonteRef, type Prazo, type Quorum, type Regime, type ValoresOrcamento } from "./dados.ts";
import { TRACO_GRUPO, diametro } from "./mapa.ts";
import { LOCALE, emIngles, t } from "./i18n.ts";

/** Em inglês, o painel avisa que detalhes e fontes ficam em português (D66). */
const avisoIdioma = () => (emIngles ? `<p class="aviso-idioma">${t("Os detalhes e as fontes legais estão em português.")}</p>` : "");

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

// Nomes legíveis dos campos que têm fonte própria (`campos`), em vez do nome interno.
const ROTULO_CAMPO: Record<string, string> = { contido_em: "Parte de", sigla: "Sigla", detalhes: "Detalhes", poder: "Poder", esfera: "Esfera", tipo_orgao: "Tipo", vigencia: "Vigência", resumo: "Resumo", nome: "Nome" };

/** Amostra SVG do traço de um grupo de relação (também usada na barra de filtros). */
export function amostraTraco(grupo: string): string {
  const t = TRACO_GRUPO[grupo];
  const dash = t.estilo === "dotted" ? "1.5 3" : t.dash ? t.dash.join(" ") : "";
  return `<svg width="28" height="10" aria-hidden="true"><line x1="1" y1="5" x2="27" y2="5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" ${dash ? `stroke-dasharray="${dash}"` : ""}/></svg>`;
}

interface Eventos {
  selecionar: (id: string) => void;
  selecionarEtapa: (processoId: string, etapaId: string) => void;
  alternarRegime: (processoId: string, regimeId: string | null) => void;
}

export class Painel {
  private aberto = new Set<string>(); // blocos "i" expandidos
  private realce: string | null = null; // unidade do SIORG achada pela busca (D63)

  constructor(private el: HTMLElement, private dados: Dados, private eventos: Eventos) {
    el.addEventListener("click", (ev) => {
      const alvo = (ev.target as HTMLElement).closest<HTMLElement>("[data-id],[data-mais],[data-etapa],[data-regime]");
      if (!alvo) return;
      const d = alvo.dataset;
      if (d.mais) {
        if (this.aberto.has(d.mais)) this.aberto.delete(d.mais);
        else this.aberto.add(d.mais);
        alvo.setAttribute("aria-expanded", String(this.aberto.has(d.mais)));
        alvo.nextElementSibling?.toggleAttribute("hidden");
      } else if (d.etapa) this.eventos.selecionarEtapa(d.processo!, d.etapa);
      else if (d.regime !== undefined) this.eventos.alternarRegime(d.processo!, alvo.getAttribute("aria-pressed") === "true" ? null : d.regime);
      else if (d.id) this.eventos.selecionar(d.id);
    });
  }

  // ---------- Peças reutilizadas ----------

  private link(id: string): string {
    const e = this.dados.get(id);
    return e ? `<button class="link" data-id="${esc(id)}">${esc(e.nome)}</button>` : esc(id);
  }

  private nomeCurto(id: string): string {
    const e = this.dados.get(id);
    return esc(e?.sigla ?? e?.nome ?? id);
  }

  /** Termo de vocabulário com a definição no título (passe o mouse para ler). */
  private termo(vocab: string, valor: string): string {
    return `<span class="termo" title="${esc(this.dados.definicao(vocab, valor))}">${esc(this.dados.nomeDe(vocab, valor))}</span>`;
  }

  private fontes(fontes: FonteRef[] | undefined): string {
    if (!fontes?.length) return "";
    return `<ul class="fontes">${fontes
      .map((f) => {
        const e = this.dados.get(f.ref);
        const url = (e?.url as string | null | undefined) ?? null;
        const nome = this.nomeCurto(f.ref);
        const naoOficial = e?.tipo === "fonte" && e.oficial === false ? ` <span class="etiqueta">${t("não oficial")}</span>` : "";
        return `<li class="fonte">${url ? `<a class="link" href="${esc(url)}" target="_blank" rel="noopener">${nome}</a>` : nome}${
          f.dispositivo ? ` <span class="dispositivo">${esc(f.dispositivo)}</span>` : ""
        }${naoOficial}${f.nota ? `<br><span class="dispositivo">${esc(f.nota)}</span>` : ""}</li>`;
      })
      .join("")}</ul>`;
  }

  private quorum(q: Quorum | undefined): string {
    if (!q) return "";
    const votacao = q.votacao ? `, ${t("votação {tipo}", { tipo: this.termo("votacao", q.votacao).toLowerCase() })}` : "";
    return `<span class="quorum">${t("Quórum: {regra}", { regra: this.termo("quorum", q.regra) })}${votacao}${q.nota ? `. ${esc(q.nota)}` : ""}</span>`;
  }

  private prazo(p: Prazo | undefined): string {
    if (!p) return "";
    const efeito = p.efeito ? ` <span class="dispositivo">${t("Se acabar: {efeito}.", { efeito: esc(p.efeito) })}</span>` : "";
    return `<span class="prazo">${t("Prazo: {texto}", { texto: esc(p.texto) })}${efeito}</span>`;
  }

  private etiquetas(e: Entidade): string {
    const tipo =
      e.tipo === "orgao" ? this.dados.nomeDe("tipo_orgao", e.tipo_orgao as string)
      : e.tipo === "objeto" ? this.dados.nomeDe("tipo_objeto", e.tipo_objeto as string)
      : NOMES_TIPO[e.tipo];
    const conf = e.confianca !== "oficial" ? `<span class="etiqueta">${this.termo("confianca", e.confianca)}</span>` : "";
    // Campos com confiança própria, diferente da entidade (ex.: um número inferido).
    const campos = Object.entries(e.campos ?? {})
      .filter(([, c]) => c.confianca && c.confianca !== e.confianca)
      .map(([campo, c]) => `<span class="etiqueta" title="${esc(this.dados.definicao("confianca", c.confianca!))}">${esc(campo)}: ${esc(this.dados.nomeDe("confianca", c.confianca!).toLowerCase())}</span>`)
      .join("");
    return `<div class="etiquetas"><span class="etiqueta">${esc(tipo)}</span>${conf}${campos}</div>`;
  }

  /** Bloco "i": detalhes, fontes (gerais e por campo), vigência e links externos. */
  private blocoMais(e: Entidade): string {
    const aberto = this.aberto.has(e.id);
    const porCampo = Object.entries(e.campos ?? {})
      .filter(([, c]) => c.fontes?.length || c.nota)
      .map(([campo, c]) => `<h3>${t("Fonte do campo “{campo}”", { campo: esc(t(ROTULO_CAMPO[campo] ?? campo)) })}</h3>${this.fontes(c.fontes)}${c.nota ? `<p class="dispositivo">${esc(c.nota)}</p>` : ""}`)
      .join("");
    const mais = e.mais_informacoes?.length
      ? `<h3>${t("Mais informações")}</h3><ul>${e.mais_informacoes
          .map((l) => `<li><a class="link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.titulo)}</a></li>`)
          .join("")}</ul>`
      : "";
    const vig = e.vigencia;
    const emVigor = t("{de} a {ate}", { de: vig.de ? formatarData(vig.de) : t("início desconhecido"), ate: vig.ate ? formatarData(vig.ate) : t("hoje") });
    return `${avisoIdioma()}
      <button class="mais" data-mais="${esc(e.id)}" aria-expanded="${aberto}"><span class="i">i</span> ${t("Detalhes e fontes")}</button>
      <div class="detalhes" ${aberto ? "" : "hidden"}>
        ${e.detalhes ? `<p>${esc(e.detalhes)}</p>` : ""}
        <h3>${t("Fontes")}</h3>${this.fontes(e.fontes) || "<p>—</p>"}
        ${porCampo}
        <dl class="ficha"><dt>${t("Em vigor")}</dt><dd>${emVigor}${vig.incerta ? ` ${t("(datas aproximadas)")}` : ""}${vig.nota ? `<br>${esc(vig.nota)}` : ""}</dd></dl>
        ${mais}
      </div>`;
  }

  private relacoes(id: string): string {
    const linha = (r: Entidade, outro: string, saindo: boolean) => {
      const verbo = this.termo("relacao", r.relacao as string);
      const ordem = r.ordem ? `<span class="ordem">${r.ordem}${emIngles ? "." : "º"}</span> ` : "";
      const comp = r.competencia as { tipo: string; natureza: string } | undefined;
      const competencia = comp ? t("{tipo}, para {natureza}", { tipo: esc(this.dados.nomeDe("tipo_competencia", comp.tipo)), natureza: esc(this.dados.nomeDe("natureza_competencia", comp.natureza).toLowerCase()) }) : "";
      const pasta = r.orgao_exercicio ? t("No órgão: {orgao}", { orgao: this.link(r.orgao_exercicio as string) }) : "";
      const f = this.dados.fluxoDe(r.id);
      const valor = f ? t("Pagamentos em {ano}: <strong>{valor}</strong>", { ano: f.exercicio as number, valor: reais((f.valores as ValoresOrcamento).pagamentos_totais) }) : "";
      const extra = [valor, competencia, pasta, r.condicao ? esc(r.condicao) : "", this.quorum(r.quorum as Quorum | undefined)].filter(Boolean).join("<br>");
      return `<li>${ordem}${saindo ? `${verbo} ${this.link(outro)}` : `${this.link(outro)} ${verbo}`}${extra ? `<br><span class="dispositivo">${extra}</span>` : ""}</li>`;
    };
    const saindo = this.dados.relacoesSaindo(id).filter((r) => r.relacao !== "ocupa");
    const chegando = this.dados.relacoesChegando(id).filter((r) => r.relacao !== "ocupa");
    const porOrdem = (a: Entidade, b: Entidade) => ((a.ordem as number) ?? 0) - ((b.ordem as number) ?? 0);
    const blocos: string[] = [];
    for (const [grupo, nome] of Object.entries(GRUPOS_RELACAO)) {
      const s = saindo.filter((r) => this.dados.grupoDe(r.relacao as string) === grupo).sort(porOrdem);
      const c = chegando.filter((r) => this.dados.grupoDe(r.relacao as string) === grupo).sort(porOrdem);
      if (!s.length && !c.length) continue;
      blocos.push(`<h3>${esc(nome)}</h3><ul class="relacoes">${s.map((r) => linha(r, r.para as string, true)).join("")}${c
        .map((r) => linha(r, r.de as string, false))
        .join("")}</ul>`);
    }
    return blocos.join("");
  }

  /** Linhas de detalhe de um valor orçamentário (D26: a dotação fica no "i"). */
  private linhasValores(v: ValoresOrcamento): string {
    const linha = (rotulo: string, x: number | undefined) => (x === undefined ? "" : `<dt>${rotulo}</dt><dd>${reais(x)}</dd>`);
    return `<dl class="ficha">
      ${linha(t("Despesas do ano pagas"), v.despesas_pagas)}
      ${linha(t("Restos a pagar pagos"), v.restos_a_pagar_pagos)}
      ${linha(t("Dotação inicial"), v.dotacao_inicial)}
      ${linha(t("Dotação atualizada"), v.dotacao_atualizada)}
      ${v.pagamentos_financeiros !== undefined && v.pagamentos_financeiros > 1e6 ? linha(t("Dos quais, despesa financeira"), v.pagamentos_financeiros) : ""}
    </dl>`;
  }

  /** Unidades internas do órgão no SIORG, em árvore recolhível (D62). */
  private estruturaSiorg(id: string): string {
    const est = this.dados.estruturaDe(id);
    if (!est) return "";
    type U = { codigo: string; nome: string; sigla?: string; pai: string; colegiada?: boolean; mapa?: string };
    const unidades = est.unidades as U[];
    const filhos = new Map<string, U[]>();
    for (const u of unidades) filhos.set(u.pai, [...(filhos.get(u.pai) ?? []), u]);
    // Caminho até a unidade achada pela busca: os níveis de cima ficam abertos.
    const caminho = new Set<string>();
    const realce = this.realce;
    this.realce = null;
    if (realce) {
      const porCodigo = new Map(unidades.map((u) => [u.codigo, u]));
      for (let u = porCodigo.get(realce); u; u = porCodigo.get(u.pai)) caminho.add(u.codigo);
    }
    const item = (u: U): string => {
      const sub = filhos.get(u.codigo) ?? [];
      const rotulo = `${u.mapa ? this.link(u.mapa) : esc(u.nome)}${u.sigla ? ` <span class="sub">${esc(u.sigla)}</span>` : ""}${u.colegiada ? ` <span class="etiqueta">${t("colegiado")}</span>` : ""}`;
      const classe = u.codigo === realce ? ` class="realce"` : "";
      return sub.length
        ? `<li${classe}><details${caminho.has(u.codigo) && u.codigo !== realce ? " open" : ""}><summary>${rotulo} <span class="sub">(${sub.length})</span></summary><ul>${sub.map(item).join("")}</ul></details></li>`
        : `<li${classe}>${rotulo}</li>`;
    };
    const raiz = filhos.get(est.siorg as string) ?? [];
    const vinc = (est.vinculadas as { nome: string; sigla?: string; mapa?: string }[] | undefined) ?? [];
    const consulta = formatarData(est.consulta as string);
    const resto = (est.ato_interno as number) > 0 ? ` ${t("Abaixo delas, o SIORG registra mais {n} unidades criadas por ato interno.", { n: est.ato_interno as number })}` : "";
    const aberto = this.aberto.has(est.id);
    return `<h3>${t("Estrutura interna")}</h3>
      <p class="dispositivo">${est.so_ato_interno ? t("{n} unidades: as criadas por lei ou decreto e os dois primeiros níveis criados por ato interno (no SIORG, a estrutura deste órgão está quase toda em ato interno).", { n: unidades.length }) : t("{n} unidades criadas por lei ou decreto.", { n: unidades.length })}${resto} ${t("Fonte: SIORG, consulta em {data}.", { data: consulta })}</p>
      <button class="mais" data-mais="${esc(est.id)}" aria-expanded="${aberto}"><span class="i">i</span> ${t("Ver a árvore")}</button>
      <div class="detalhes arvore" ${aberto ? "" : "hidden"}>
        <ul>${raiz.map(item).join("")}</ul>
        ${vinc.length ? `<h3>${t("Entidades vinculadas no SIORG")}</h3><ul>${vinc.map((v) => `<li>${v.mapa ? this.link(v.mapa) : esc(v.nome)}${v.sigla ? ` <span class="sub">${esc(v.sigla)}</span>` : ""}</li>`).join("")}</ul>` : ""}
        <p class="dispositivo">${esc(est.notas as string)}</p>
        <h3>${t("Fonte")}</h3>${this.fontes(est.fontes as FonteRef[])}
      </div>`;
  }

  /** Pagamentos de cada exercício da série, em barras (D57). */
  private serie(itens: Entidade[]): string {
    if (itens.length < 2) return "";
    const max = Math.max(...itens.map((m) => (m.valores as ValoresOrcamento).pagamentos_totais));
    return `<table class="barras serie"><tbody>${itens
      .map((m) => {
        const x = (m.valores as ValoresOrcamento).pagamentos_totais;
        return `<tr><th scope="row">${m.exercicio}</th><td class="trilho"><span class="barra-valor" style="width:${Math.max(0.3, (100 * x) / max)}%"></span></td><td class="valor">${reais(x, true)}</td></tr>`;
      })
      .join("")}</tbody></table>`;
  }

  /** Orçamento executado no último ano fechado (D26, D46, D47). */
  private orcamento(id: string): string {
    const m = this.dados.orcamentoDe(id);
    if (!m) return "";
    const v = m.valores as ValoresOrcamento;
    const sup = m.sob_supervisao as { valores: ValoresOrcamento; unidades_orcamentarias: string[] } | undefined;
    const recorte = m.recorte as { nota?: string };
    const aberto = this.aberto.has(m.id);
    return `<h3>${t("Orçamento em {ano}", { ano: m.exercicio as number })}</h3>
      <p class="valor-orcamento">${t("Pagamentos: <strong>{valor}</strong>", { valor: reais(v.pagamentos_totais) })}</p>
      ${sup ? `<p class="dispositivo">${t("Mais {valor} em recursos sob sua supervisão (encargos financeiros, aposentadorias e pensões civis, transferências a estados e municípios, operações de crédito e refinanciamento da dívida), que a lei orçamentária trata à parte.", { valor: reais(sup.valores.pagamentos_totais) })}</p>` : ""}
      ${this.serie(this.dados.serieOrcamento(id))}
      <button class="mais" data-mais="${esc(m.id)}" aria-expanded="${aberto}"><span class="i">i</span> ${t("Como se chega a esse número")}</button>
      <div class="detalhes" ${aberto ? "" : "hidden"}>
        ${this.linhasValores(v)}
        ${recorte.nota ? `<p class="dispositivo">${esc(recorte.nota)}</p>` : ""}
        ${sup ? `<h3>${t("Sob supervisão (unidades {lista})", { lista: esc(sup.unidades_orcamentarias.join(", ")) })}</h3>${this.linhasValores(sup.valores)}` : ""}
        <h3>${t("Fonte")}</h3>${this.fontes(m.fontes)}
      </div>`;
  }

  /** Valores pagos por uma relação repassa-recursos no último ano fechado (D24 c, D45). */
  private fluxo(relId: string): string {
    const f = this.dados.fluxoDe(relId);
    if (!f) return "";
    const v = f.valores as ValoresOrcamento;
    const aberto = this.aberto.has(f.id);
    return `<h3>${t("Quanto passou em {ano}", { ano: f.exercicio as number })}</h3>
      <p class="valor-orcamento">${t("Pagamentos: <strong>{valor}</strong>", { valor: reais(v.pagamentos_totais) })}</p>
      ${this.serie(this.dados.serieFluxo(relId))}
      <button class="mais" data-mais="${esc(f.id)}" aria-expanded="${aberto}"><span class="i">i</span> ${t("Como se chega a esse número")}</button>
      <div class="detalhes" ${aberto ? "" : "hidden"}>
        ${this.linhasValores(v)}
        <p class="dispositivo">${esc((f.recorte as { nota?: string }).nota ?? "")}</p>
        <h3>${t("Fonte")}</h3>${this.fontes(f.fontes)}
      </div>`;
  }

  private processosDe(id: string): string {
    const itens: string[] = [];
    for (const p of this.dados.todas("processo")) {
      const etapas = (p.etapas as Etapa[]).filter((et) => et.atores.some((a) => a === id || this.dados.noDe(a) === id));
      const vars = { processo: this.link(p.id), n: etapas.length };
      if (etapas.length) itens.push(`<li>${etapas.length > 1 ? t("{processo}: {n} etapas", vars) : t("{processo}: {n} etapa", vars)}</li>`);
      else if (p.produz === id) itens.push(`<li>${t("Produzido por {processo}", vars)}</li>`);
    }
    return itens.length ? `<h3>${t("Processos")}</h3><ul>${itens.join("")}</ul>` : "";
  }

  // ---------- Fichas por tipo ----------

  private fichaCargo(e: Entidade): string {
    const partes: string[] = [];
    const vagas = e.vagas as number | null;
    const ocup = this.dados.ocupantes(e.id);
    const vacancias = ((e.vacancias as { vagas: number; vigencia: Entidade["vigencia"]; nota?: string }[]) ?? []).filter((v) =>
      this.dados.vigente(v),
    );
    if (ocup.length || vacancias.length) {
      const titulo = vagas === 1 ? t("Ocupante") : vagas ? t("Ocupantes registrados ({n} de {vagas})", { n: ocup.length, vagas }) : t("Ocupantes registrados ({n})", { n: ocup.length });
      partes.push(`<h3>${t("{titulo} em {data}", { titulo, data: formatarData(this.dados.data) })}</h3>`);
      const linhaOcupante = ({ pessoa, partido, interino }: (typeof ocup)[number]) =>
        `<div class="ocupante">${this.link(pessoa.id)}${partido ? ` <span class="partido">${esc(partido.sigla ?? partido.nome)}</span>` : ""}${interino ? ` <span class="etiqueta">${t("em exercício")}</span>` : ""}</div>`;
      if (ocup.some((o) => o.orgao)) {
        // Cargo agregado exercido em órgãos diferentes (ex.: Ministro de Estado): um titular por órgão.
        const porOrgao = [...ocup].sort((x, y) => (x.orgao?.nome ?? "~").localeCompare(y.orgao?.nome ?? "~", LOCALE));
        partes.push(`<table class="titulares">${porOrgao
          .map((o) => `<tr><th scope="row">${o.orgao ? this.link(o.orgao.id) : "—"}</th><td>${linhaOcupante(o)}</td></tr>`)
          .join("")}</table>`);
      } else if (ocup.length <= 12) partes.push(ocup.map(linhaOcupante).join(""));
      else {
        // Muitos ocupantes (ex.: 513 deputados): composição por partido e a lista recolhida.
        const porPartido = new Map<string, number>();
        for (const o of ocup) {
          const sigla = o.partido?.sigla ?? o.partido?.nome ?? t("sem partido registrado");
          porPartido.set(sigla, (porPartido.get(sigla) ?? 0) + 1);
        }
        const bancadas = [...porPartido].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]));
        partes.push(`<table class="bancadas"><caption>${t("Por partido")}</caption>${bancadas
          .map(([sigla, n]) => `<tr><th scope="row">${esc(sigla)}</th><td><span class="barra-bancada" style="width:${(100 * n) / bancadas[0][1]}%"></span></td><td>${n}</td></tr>`)
          .join("")}</table>`);
        const ordenados = [...ocup].sort((x, y) => x.pessoa.nome.localeCompare(y.pessoa.nome, LOCALE));
        partes.push(`<details class="lista-ocupantes"><summary>${t("Ver os {n} nomes", { n: ocup.length })}</summary>${ordenados.map(linhaOcupante).join("")}</details>`);
      }
      for (const v of vacancias) {
        const vaga = { n: v.vagas, data: formatarData(v.vigencia.de) };
        partes.push(`<div class="ocupante vaga">${v.vagas > 1 ? t("{n} cadeiras vagas desde {data}", vaga) : t("{n} cadeira vaga desde {data}", vaga)}${v.vigencia.incerta ? ` ${t("(data aproximada)")}` : ""}</div>`);
      }
    }

    const casos = (e.provimento_casos as { quando: string; provimento: string; confianca?: string }[] | undefined) ?? [];
    // Confiança própria de um caso (D58), quando difere da do cargo.
    const confCaso = (c: { confianca?: string }) =>
      c.confianca && c.confianca !== e.confianca ? ` <span class="etiqueta" title="${esc(this.dados.definicao("confianca", c.confianca))}">${esc(this.dados.nomeDe("confianca", c.confianca).toLowerCase())}</span>` : "";
    const comoSeChega = casos.length
      ? `<ul>${casos.map((c) => `<li>${esc(c.quando)}: ${this.termo("provimento", c.provimento)}${confCaso(c)}</li>`).join("")}</ul>`
      : this.termo("provimento", e.provimento as string);
    const m = e.mandato as { anos?: number | null; vitalicio?: boolean; limite?: string; inicio?: string; reconducao?: string } | null;
    const mandato = !m ? "" : m.vitalicio
      ? m.limite ? t("Vitalício, até {limite}", { limite: esc(m.limite) }) : t("Vitalício")
      : [m.anos ? (m.anos === 1 ? t("{n} ano", { n: m.anos }) : t("{n} anos", { n: m.anos })) : "", m.inicio ? t("começa em {inicio}", { inicio: esc(m.inicio) }) : "", m.reconducao ? esc(m.reconducao.replaceAll("-", " ")) : ""].filter(Boolean).join("; ");
    const requisitos = (e.requisitos as { texto: string; fontes: FonteRef[] }[] | undefined) ?? [];

    partes.push(`<dl class="ficha">
      <dt>${t("Como se chega")}</dt><dd>${comoSeChega}</dd>
      ${mandato ? `<dt>${t("Mandato")}</dt><dd>${mandato}</dd>` : ""}
      <dt>${t("Vagas")}</dt><dd>${vagas ?? t("variável")}</dd>
      ${requisitos.length ? `<dt>${t("Requisitos")}</dt><dd><ul>${requisitos.map((r) => `<li title="${esc(r.fontes.map((f) => `${this.dados.get(f.ref)?.sigla ?? ""} ${f.dispositivo ?? ""}`).join("; "))}">${esc(r.texto)}</li>`).join("")}</ul></dd>` : ""}
      <dt>${t("Órgão")}</dt><dd>${this.link(e.orgao as string)}</dd>
    </dl>`);
    return partes.join("");
  }

  private fichaOrgao(e: Entidade): string {
    const partes = [`<dl class="ficha">
      <dt>${t("Poder")}</dt><dd>${this.termo("poder", e.poder as string)}</dd>
      <dt>${t("Esfera")}</dt><dd>${this.termo("esfera", e.esfera as string)}${e.arquetipo ? ` ${t("(estrutura típica)")}` : ""}</dd>
      ${e.contido_em ? `<dt>${t("Parte de")}</dt><dd>${this.link(e.contido_em as string)}</dd>` : ""}
    </dl>`];
    const cargos = this.dados.todas("cargo").filter((c) => c.orgao === e.id);
    const titulares = this.dados.titularesEm(e.id);
    if (titulares.length) {
      partes.push(`<h3>${t("Titular em {data}", { data: formatarData(this.dados.data) })}</h3>${titulares
        .map((t) => `<div class="ocupante">${this.link(t.pessoa.id)} <span class="dispositivo">${esc(t.cargo.nome)}</span></div>`)
        .join("")}`);
    }
    if (cargos.length) partes.push(`<h3>${t("Cargos")}</h3><ul>${cargos.map((c) => `<li>${this.link(c.id)}</li>`).join("")}</ul>`);
    if (e.estrutura_continua) partes.push(`<h3>${t("A estrutura continua")}</h3>${this.fontes(e.estrutura_continua as FonteRef[])}`);
    partes.push(this.estruturaSiorg(e.id));
    return partes.join("");
  }

  private fichaObjeto(e: Entidade): string {
    const de = (e.relativo_a as string[] | undefined) ?? [];
    return `<dl class="ficha">
      <dt>${t("Tipo")}</dt><dd>${this.termo("tipo_objeto", e.tipo_objeto as string)}</dd>
      ${e.esfera ? `<dt>${t("Esfera")}</dt><dd>${this.termo("esfera", e.esfera as string)}</dd>` : ""}
      ${de.length ? `<dt>${t("De quem")}</dt><dd>${de.map((x) => this.link(x)).join(", ")}</dd>` : ""}
    </dl>`;
  }

  // ---------- Telas ----------

  /** Abre a árvore do SIORG na próxima exibição do órgão, com a unidade achada pela busca em destaque (D63). */
  destacarUnidade(estId: string, codigo: string) {
    this.aberto.add(estId);
    this.realce = codigo;
  }

  mostrar(id: string) {
    const e = this.dados.get(id);
    if (!e) return;
    const partes: string[] = [this.etiquetas(e), `<h2>${esc(e.nome)}${e.sigla ? ` <span class="sub">(${esc(e.sigla)})</span>` : ""}</h2>`];
    if (e.resumo) partes.push(`<p class="resumo">${esc(e.resumo)}</p>`);
    for (const a of this.dados.avisosDe(id)) {
      partes.push(`<div class="aviso"><span class="icone" aria-hidden="true">⚠</span><div>${this.link(a.id)}<br>${esc(a.resumo)}</div></div>`);
    }

    if (e.tipo === "cargo") partes.push(this.fichaCargo(e));
    if (e.tipo === "orgao") partes.push(this.fichaOrgao(e));
    if (e.tipo === "orgao" || e.tipo === "ente" || e.tipo === "objeto") partes.push(this.orcamento(id));
    if (e.tipo === "objeto") partes.push(this.fichaObjeto(e));
    if (e.tipo === "pessoa") {
      const cargos = this.dados.relacoesSaindo(id).filter((r) => r.relacao === "ocupa");
      partes.push(`<h3>${t("Cargos em {data}", { data: formatarData(this.dados.data) })}</h3><ul>${cargos.map((r) => `<li>${this.link(r.para as string)}${r.orgao_exercicio ? ` (${this.link(r.orgao_exercicio as string)})` : ""}${r.interino ? ` <span class="etiqueta">${t("em exercício")}</span>` : ""} ${t("desde {data}", { data: formatarData(r.vigencia.de) })}</li>`).join("")}</ul>`);
    }
    if (e.tipo === "relacao") {
      partes.push(`<p>${this.link(e.de as string)} ${this.termo("relacao", e.relacao as string)} ${this.link(e.para as string)}</p>`);
      if (e.orgao_exercicio) partes.push(`<p>${t("No órgão: {orgao}", { orgao: this.link(e.orgao_exercicio as string) })}</p>`);
      if (e.condicao) partes.push(`<p>${esc(e.condicao)}</p>`);
      if (e.quorum) partes.push(`<p>${this.quorum(e.quorum as Quorum)}</p>`);
      partes.push(this.fluxo(id));
    }
    if (e.tipo === "aviso") {
      partes.push(`<dl class="ficha"><dt>${t("Tipo")}</dt><dd>${this.termo("tipo_aviso", e.tipo_aviso as string)}</dd>${e.gravidade ? `<dt>${t("Gravidade")}</dt><dd>${esc(e.gravidade)}</dd>` : ""}</dl>`);
      partes.push(`<h3>${t("Afeta")}</h3><ul>${(e.afeta as string[]).map((a) => `<li>${this.link(a)}</li>`).join("")}</ul>`);
      const onde = (e.onde_procuramos as string[] | undefined) ?? [];
      if (onde.length) partes.push(`<h3>${t("Onde procuramos")}</h3><ul>${onde.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>`);
    }
    if (e.tipo === "variacao") {
      partes.push(`<dl class="ficha"><dt>${t("Onde")}</dt><dd>${(e.entes as string[]).map((x) => this.link(x)).join(", ")} (${esc(this.dados.nomeDe("abrangencia", e.abrangencia as string).toLowerCase())})</dd><dt>${t("Exceção a")}</dt><dd>${this.link(e.difere_de as string)}</dd><dt>${t("Por quê")}</dt><dd>${esc(e.porque)}</dd></dl>`);
    }

    partes.push(this.blocoMais(e));
    if (["orgao", "cargo", "objeto"].includes(e.tipo)) {
      partes.push(this.relacoes(id));
      const variacoes = this.dados.todas("variacao").filter((v) => v.difere_de === id || v.instancia === id);
      if (variacoes.length) partes.push(`<h3>${t("Exceções")}</h3><ul>${variacoes.map((v) => `<li>${this.link(v.id)}</li>`).join("")}</ul>`);
      partes.push(this.processosDe(id));
    }
    this.el.innerHTML = partes.join("");
    this.el.scrollTop = 0;
    this.el.querySelector(".arvore .realce")?.scrollIntoView({ block: "center" });
  }

  /** Eleições: os cargos em disputa saem das relações "elege" do eleitorado que vota nas etapas (D41). */
  private cargosEmDisputa(p: Entidade): string {
    if (p.produz !== "obj:diploma-eleitoral") return "";
    const eleitorados = new Set((p.etapas as Etapa[]).flatMap((et) => et.atores).filter((a) => this.dados.get(a)?.tipo_orgao === "corpo-eleitoral"));
    const cargos = new Set([...eleitorados].flatMap((a) => this.dados.relacoesSaindo(a).filter((r) => r.relacao === "elege").map((r) => r.para as string)));
    return cargos.size ? `<h3>${t("Cargos em disputa")}</h3><ul>${[...cargos].map((c) => `<li>${this.link(c)}</li>`).join("")}</ul>` : "";
  }

  mostrarProcesso(p: Entidade, regimeAtivo: string | null = null) {
    const etapas = p.etapas as Etapa[];
    const regimes = (p.regimes as Regime[] | undefined) ?? [];
    this.el.innerHTML = `
      ${this.etiquetas(p)}
      <h2>${esc(p.nome)}</h2>
      <p class="resumo">${esc(p.resumo)}</p>
      ${p.produz ? `<dl class="ficha"><dt>${t("Produz")}</dt><dd>${this.link(p.produz as string)}</dd></dl>` : ""}
      ${this.cargosEmDisputa(p)}
      ${this.blocoMais(p)}
      ${regimes.length ? `<h3>${t("Variantes")}</h3>${regimes
        .map((r) => `<button class="mais" data-regime="${esc(r.id)}" data-processo="${esc(p.id)}" aria-pressed="${regimeAtivo === r.id}">${regimeAtivo === r.id ? "✓ " : ""}${esc(r.nome)}</button>
          ${regimeAtivo === r.id ? `<p class="dispositivo">${esc(r.resumo)}. ${esc(r.detalhes ?? "")}</p>` : ""}`)
        .join("")}` : ""}
      <h3>${t("Etapas")}</h3>
      <p class="intro">${t("Clique numa etapa, aqui ou no fluxo, para ver quem age, o prazo e a base legal.")}</p>
      <ol class="etapas">${etapas
        .map((et, i) => `<li data-etapa="${esc(et.id)}" data-processo="${esc(p.id)}"><span class="n">${i + 1}</span><div>${esc(et.acao)}<div class="atores">${et.atores.map((a) => this.nomeCurto(a)).join(", ")}</div></div></li>`)
        .join("")}</ol>`;
    this.el.scrollTop = 0;
  }

  mostrarEtapa(p: Entidade, etapaId: string, regimeAtivo: string | null = null) {
    const etapas = p.etapas as Etapa[];
    const i = etapas.findIndex((e) => e.id === etapaId);
    const et = etapas[i];
    const numero = new Map(etapas.map((e, j) => [e.id, j + 1]));
    const regime = ((p.regimes as Regime[] | undefined) ?? []).find((r) => r.id === regimeAtivo);
    const efeito = regime?.efeitos.find((ef) => ef.etapa === etapaId);
    this.el.innerHTML = `
      <button class="link voltar" data-id="${esc(p.id)}">← ${esc(p.nome)}</button>
      <div class="etiquetas"><span class="etiqueta">${t("Etapa {n} de {total}", { n: i + 1, total: etapas.length })}</span>${et.tipo_etapa && et.tipo_etapa !== "acao" ? `<span class="etiqueta">${this.termo("tipo_etapa", et.tipo_etapa)}</span>` : ""}</div>
      <h2>${esc(et.acao)}</h2>${avisoIdioma()}
      ${et.detalhes ? `<p>${esc(et.detalhes)}</p>` : ""}
      ${et.atores.length ? `<h3>${t("Quem age")}</h3><ul>${et.atores.map((a) => `<li>${this.link(a)}${et.atores_exercicio?.[a] ? ` (${this.link(et.atores_exercicio[a])})` : ""}</li>`).join("")}</ul>` : ""}
      ${et.prazo || et.quorum ? `<h3>${t("Regras")}</h3><p>${[this.prazo(et.prazo), this.quorum(et.quorum)].filter(Boolean).join("<br>")}</p>` : ""}
      ${et.remete_a ? `<p>${t("Segue o rito de: {processo}", { processo: this.link(et.remete_a) })}</p>` : ""}
      ${efeito ? `<div class="aviso"><span class="icone" aria-hidden="true">⏱</span><div>${esc(regime!.nome)}: ${esc(efeito.prazo?.texto ?? efeito.nota ?? "")}</div></div>` : ""}
      <h3>${t("Base legal")}</h3>${this.fontes(et.fontes) || "<p>—</p>"}
      ${et.seguintes.length ? `<h3>${t("Depois")}</h3><ul class="seguintes">${et.seguintes
        .map((s) => `<li><button class="link" data-etapa="${esc(s.para)}" data-processo="${esc(p.id)}">→ ${numero.get(s.para)}. ${esc(etapas.find((e) => e.id === s.para)?.acao)}</button>${s.quando ? `<br><span class="dispositivo">${t("se {condicao}", { condicao: esc(s.quando) })}</span>` : ""}</li>`)
        .join("")}</ul>` : `<p class="intro">${t("Fim do processo.")}</p>`}`;
    this.el.scrollTop = 0;
  }

  mostrarAvisos() {
    const avisos = this.dados.todas("aviso");
    this.el.innerHTML = `
      <h2>${t("Avisos sobre as fontes")}</h2>
      <p class="intro">${t("Onde as fontes oficiais falham: informação que não encontramos, fontes que se contradizem, sigilo e textos desatualizados.")}</p>${avisoIdioma()}
      <ul>${avisos
        .map((a) => `<li class="aviso"><span class="icone" aria-hidden="true">⚠</span><div>${this.link(a.id)}<br>${esc(a.resumo)}</div></li>`)
        .join("") || `<li>${t("Nenhum aviso registrado.")}</li>`}</ul>`;
  }

  /** Legenda da camada "Orçamento": escala dos círculos e o que fica de fora (D47, D48). */
  mostrarLegendaOrcamento() {
    const ano = this.dados.exercicio;
    const circulo = (valor: number) => {
      const d = diametro(valor) * 0.35;
      return `<div class="legenda-item"><span class="circulo" style="width:${d}px;height:${d}px"></span>${reais(valor)}</div>`;
    };
    this.el.innerHTML = `
      <h2>${t("Orçamento em {ano}", { ano: String(ano) })}</h2>
      <p class="intro">${t("O círculo atrás de cada órgão tem área proporcional ao que ele pagou em {ano}, inclusive restos a pagar de anos anteriores. O valor aparece no rótulo; clique no órgão para ver a dotação e como o número foi calculado.", { ano: String(ano) })}</p>
      <h3>${t("Escala (reduzida aqui; no mapa, com o zoom)")}</h3>
      ${circulo(1e12)}${circulo(1e11)}${circulo(1e10)}
      <h3>${t("O que fica de fora")}</h3>
      <p>${t("Órgãos sem unidade orçamentária própria (secretarias, conselhos, a maior parte dos colegiados) ficam sem círculo. Estatais que não dependem do Tesouro, como Caixa, Banco do Brasil e Petrobras, também: elas entram só no orçamento de investimento (CF, art. 165, § 5º, II), que esta base não traz. Encargos financeiros, aposentadorias e pensões civis, transferências a estados e municípios, operações de crédito e a dívida aparecem à parte, na aba Dinheiro.")}</p>
      <p><span class="dispositivo">${t("Fonte: Tesouro Nacional, Despesas e Transferências Totais da União.")}</span></p>`;
  }

  mostrarLegenda() {
    const poderes = [
      ["executivo", t("Executivo")],
      ["legislativo", t("Legislativo")],
      ["judiciario", t("Judiciário")],
      ["neutro", t("Povo, funções essenciais e outros")],
    ];
    this.el.innerHTML = `
      <h2>${t("Como funciona o Estado brasileiro")}</h2>
      <p class="intro">${t("Retrato de {data}. Clique em um órgão ou cargo para ver o que ele faz, com quem se relaciona e a base legal de cada informação.", { data: formatarData(this.dados.data) })}</p>${avisoIdioma()}
      <h3>${t("Cores: Poder")}</h3>
      ${poderes.map(([v, n]) => `<div class="legenda-item"><span class="amostra" style="border-color:var(--${v});background:color-mix(in srgb, var(--${v}) 8%, transparent)"></span>${n}</div>`).join("")}
      <h3>${t("Formas")}</h3>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2)"></span>${t("Órgão")}</div>
      <div class="legenda-item"><span class="amostra cargo" style="border-color:var(--tinta-2)"></span>${t("Cargo")}</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);clip-path:polygon(25% 0,75% 0,100% 30%,100% 70%,75% 100%,25% 100%,0 70%,0 30%)"></span>${t("Tribunal")}</div>
      <div class="legenda-item"><span class="amostra objeto"></span>${t("Objeto de competência: o ato, a lei ou as contas sobre os quais os órgãos agem")}</div>
      <h3>${t("Linhas: tipo de relação")}</h3>
      ${Object.entries(GRUPOS_RELACAO).map(([g, n]) => `<div class="legenda-item">${amostraTraco(g)}${esc(n)}</div>`).join("")}
      <h3>${t("Borda: confiança da informação")}</h3>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2)"></span>${t("Fonte oficial")}</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:dashed"></span>${t("Fonte não oficial ou inferido")}</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:double;border-width:4px"></span>${t("Fontes oficiais divergem")}</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:dotted"></span>${t("Sem fonte disponível")}</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--alerta)"></span>⚠ ${t("Aviso: lacuna ou divergência nas fontes (camada \"Avisos\")")}</div>`;
  }
}
