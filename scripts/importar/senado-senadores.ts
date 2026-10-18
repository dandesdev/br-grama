// Importa os senadores em exercício na data de referência, com o partido, pelos dados abertos do
// Senado. Duas etapas:
//   npx tsx scripts/importar/senado-senadores.ts baixar   → grava as respostas em pesquisa/brutos/
//   npx tsx scripts/importar/senado-senadores.ts gerar    → cria pessoas, partidos e relações em dados/
//
// Diferente da Câmara, o Senado informa cada período de exercício e cada filiação com datas. Por
// isso a data de início do exercício e o partido na data de referência vêm direto da fonte.
// Não guardamos foto, e-mail, telefone nem dados pessoais (D12).
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RAIZ = join(import.meta.dirname, "..", "..");
const DATA_REF = JSON.parse(readFileSync(join(RAIZ, "br-grama.config.json"), "utf8")).data_referencia as string;
const API = "https://legis.senado.leg.br/dadosabertos";
const LEGISLATURA = 57;
const BRUTO = join(RAIZ, "pesquisa", "brutos", "senado-dados-abertos", "2026-10-18", `senadores-legislatura-${LEGISLATURA}.json`);
const HOJE = new Date().toISOString().slice(0, 10);
const TAREFA = "importacao-senado-senadores";

interface Exercicio { inicio: string; fim: string | null }
interface Filiacao { sigla: string; nome: string; de: string; ate: string | null }
interface Senador { codigo: string; nome: string; nomeCompleto: string; uf: string; participacao: string; exercicios: Exercicio[]; filiacoes: Filiacao[] }

const lista = <T>(x: T | T[] | undefined): T[] => (x === undefined ? [] : Array.isArray(x) ? x : [x]);

const pegar = async (url: string) => {
  for (let tentativa = 1; ; tentativa++) {
    const r = await fetch(url, { headers: { Accept: "application/json" } });
    if (r.ok) return r.json();
    if (tentativa === 3) throw new Error(`${r.status} em ${url}`);
    await new Promise((ok) => setTimeout(ok, 2000 * tentativa));
  }
};

async function baixar() {
  const leg = await pegar(`${API}/senador/lista/legislatura/${LEGISLATURA}.json`);
  const parlamentares = lista(leg.ListaParlamentarLegislatura.Parlamentares.Parlamentar);
  const senadores: Senador[] = [];
  for (const p of parlamentares) {
    const id = p.IdentificacaoParlamentar;
    const mand = await pegar(`${API}/senador/${id.CodigoParlamentar}/mandatos.json`);
    const fil = await pegar(`${API}/senador/${id.CodigoParlamentar}/filiacoes.json`);
    const mandatos = lista(mand.MandatoParlamentar.Parlamentar.Mandatos?.Mandato);
    // Só os mandatos que abrangem a legislatura atual
    const atuais = mandatos.filter((m: any) =>
      [m.PrimeiraLegislaturaDoMandato?.NumeroLegislatura, m.SegundaLegislaturaDoMandato?.NumeroLegislatura].includes(String(LEGISLATURA)),
    );
    for (const m of atuais) {
      senadores.push({
        codigo: id.CodigoParlamentar,
        nome: id.NomeParlamentar,
        nomeCompleto: id.NomeCompletoParlamentar,
        uf: m.UfParlamentar,
        participacao: m.DescricaoParticipacao,
        exercicios: lista(m.Exercicios?.Exercicio).map((e: any) => ({ inicio: e.DataInicio, fim: e.DataFim ?? null })),
        filiacoes: lista(fil.FiliacaoParlamentar.Parlamentar.Filiacoes?.Filiacao).map((f: any) => ({
          sigla: f.Partido.SiglaPartido,
          nome: f.Partido.NomePartido,
          de: f.DataFiliacao,
          ate: f.DataDesfiliacao ?? null,
        })),
      });
    }
    await new Promise((ok) => setTimeout(ok, 150));
  }
  mkdirSync(join(BRUTO, ".."), { recursive: true });
  writeFileSync(BRUTO, JSON.stringify({ consultado_em: HOJE, legislatura: LEGISLATURA, senadores }, null, 1));
  console.log(`Baixados ${parlamentares.length} parlamentares da legislatura ${LEGISLATURA} (${senadores.length} mandatos).`);
}

const slug = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const emVigor = (de: string, ate: string | null) => de <= DATA_REF && (!ate || ate >= DATA_REF);

function gerar() {
  const { senadores } = JSON.parse(readFileSync(BRUTO, "utf8")) as { senadores: Senador[] };
  const emExercicio = senadores
    .map((s) => ({ s, exercicio: s.exercicios.find((e) => emVigor(e.inicio, e.fim)) }))
    .filter((x): x is { s: Senador; exercicio: Exercicio } => !!x.exercicio);
  if (emExercicio.length !== 81) throw new Error(`Esperados 81 senadores em exercício, vieram ${emExercicio.length}`);
  const porUf = new Map<string, number>();
  for (const { s } of emExercicio) porUf.set(s.uf, (porUf.get(s.uf) ?? 0) + 1);
  if (porUf.size !== 27 || [...porUf.values()].some((n) => n !== 3)) throw new Error("Esperados 3 senadores por UF");

  const dados = (pasta: string) => join(RAIZ, "dados", pasta);
  const lerTodos = (pasta: string) => readdirSync(dados(pasta)).map((n) => JSON.parse(readFileSync(join(dados(pasta), n), "utf8")));
  const NOTA = "Importação automática dos dados abertos do Senado (scripts/importar/senado-senadores.ts), conferida pelo script: 81 senadores em exercício na data de referência, 3 por UF.";
  const verificacao = { status: "verificado", em: HOJE, tarefa: TAREFA, notas: NOTA };

  const FONTE = "fonte:senado-api-senadores";
  if (!existsSync(join(dados("fontes"), "senado-api-senadores.json"))) {
    writeFileSync(
      join(dados("fontes"), "senado-api-senadores.json"),
      JSON.stringify(
        {
          id: FONTE,
          tipo: "fonte",
          nome: "Dados abertos do Senado: senadores, mandatos e filiações",
          resumo: "Dados oficiais dos senadores da legislatura, com os períodos de exercício e as filiações partidárias.",
          tipo_fonte: "dados-abertos",
          publicador: "Senado Federal",
          url: `${API}/senador/lista/legislatura/${LEGISLATURA}`,
          acesso_em: HOJE,
          arquivo: null,
          oficial: true,
          vigencia: { de: null, ate: null },
          confianca: "oficial",
          verificacao,
          notas: "Também consultados, para cada senador, /senador/{codigo}/mandatos e /senador/{codigo}/filiacoes. Respostas resumidas em pesquisa/brutos/senado-dados-abertos/2026-10-18/.",
        },
        null,
        2,
      ) + "\n",
    );
  }

  // Partidos: reaproveita os existentes pelo nome, porque as siglas da Câmara e do Senado podem diferir.
  const normal = (s: string) => slug(s).replace(/-/g, "");
  const partidoPorNome = new Map<string, string>();
  for (const o of lerTodos("orgaos").filter((o) => o.tipo_orgao === "partido-politico")) partidoPorNome.set(normal(o.nome), o.id);
  const idPartido = (f: Filiacao) => {
    const existente = partidoPorNome.get(normal(f.nome));
    if (existente) return existente;
    const id = `org:partido-${slug(f.sigla)}`;
    const arq = join(dados("orgaos"), `partido-${slug(f.sigla)}.json`);
    if (existsSync(arq)) throw new Error(`${id} já existe com outro nome; conferir manualmente (${f.nome})`);
    writeFileSync(
      arq,
      JSON.stringify(
        {
          id,
          tipo: "orgao",
          nome: f.nome,
          sigla: f.sigla,
          resumo: "Partido político com representação no Senado Federal na data de referência.",
          tipo_orgao: "partido-politico",
          poder: "nao-estatal",
          esfera: "nacional",
          vigencia: { de: null, ate: null },
          fontes: [{ ref: FONTE, dispositivo: "filiações" }],
          confianca: "oficial",
          verificacao,
          mais_informacoes: [{ titulo: "Partidos registrados no TSE", url: "https://www.tse.jus.br/partidos/partidos-registrados-no-tse" }],
        },
        null,
        2,
      ) + "\n",
    );
    partidoPorNome.set(normal(f.nome), id);
    return id;
  };

  const existentes = new Map<string, string>();
  for (const p of lerTodos("pessoas")) {
    for (const l of p.mais_informacoes ?? []) {
      const m = String(l.url).match(/senado\.leg\.br\/.*senador\/(?:-\/perfil\/)?(\d+)/);
      if (m) existentes.set(m[1], p.id);
    }
    for (const f of p.fontes ?? []) {
      const m = String(f.dispositivo ?? "").match(/senador (\d+)/);
      if (m && f.ref.startsWith("fonte:senado")) existentes.set(m[1], p.id);
    }
  }
  const ocupaSenador = new Set(lerTodos("relacoes").filter((r) => r.relacao === "ocupa" && r.para === "cargo:senador").map((r) => r.de));
  const slugsUsados = new Set(readdirSync(dados("pessoas")).map((n) => n.replace(/\.json$/, "")));

  let pessoas = 0;
  let relacoes = 0;
  const semPartido: string[] = [];
  for (const { s, exercicio } of emExercicio) {
    // O Senado registra "Sem Partido" (S/Partido) como se fosse uma filiação; não é partido.
    const filiacao = s.filiacoes.find((f) => emVigor(f.de, f.ate) && !/^sem partido$/i.test(f.nome));
    if (!filiacao) semPartido.push(`${s.nome} (${s.codigo})`);

    let idPessoa = existentes.get(s.codigo);
    if (!idPessoa) {
      let sl = slug(s.nome);
      if (slugsUsados.has(sl)) sl = `${sl}-senador-${s.codigo}`;
      slugsUsados.add(sl);
      idPessoa = `pessoa:${sl}`;
      writeFileSync(
        join(dados("pessoas"), `${sl}.json`),
        JSON.stringify(
          {
            id: idPessoa,
            tipo: "pessoa",
            nome: s.nome,
            ...(s.nomeCompleto && s.nomeCompleto !== s.nome ? { nome_civil: s.nomeCompleto } : {}),
            ...(filiacao
              ? {
                  filiacoes: [
                    {
                      partido: idPartido(filiacao),
                      vigencia: { de: filiacao.de, ate: filiacao.ate },
                      fontes: [{ ref: FONTE, dispositivo: `senador ${s.codigo}, filiações` }],
                    },
                  ],
                }
              : {}),
            vigencia: { de: null, ate: null },
            fontes: [{ ref: FONTE, dispositivo: `senador ${s.codigo}` }],
            confianca: "oficial",
            verificacao,
            mais_informacoes: [{ titulo: "Página no Senado Federal", url: `https://www25.senado.leg.br/web/senadores/senador/-/perfil/${s.codigo}` }],
          },
          null,
          2,
        ) + "\n",
      );
      pessoas++;
    }

    if (!ocupaSenador.has(idPessoa)) {
      const sl = idPessoa.split(":")[1];
      const suplente = !/titular/i.test(s.participacao);
      writeFileSync(
        join(dados("relacoes"), `${sl}-ocupa-senador.json`),
        JSON.stringify(
          {
            id: `rel:${sl}-ocupa-senador`,
            tipo: "relacao",
            nome: `${s.nome} é senador`,
            relacao: "ocupa",
            de: idPessoa,
            para: "cargo:senador",
            condicao: `Pela unidade da federação ${s.uf}${suplente ? `, como ${s.participacao.toLowerCase()} em exercício` : ""}.`,
            vigencia: { de: exercicio.inicio, ate: exercicio.fim },
            fontes: [{ ref: FONTE, dispositivo: `senador ${s.codigo}, mandatos e exercícios` }],
            confianca: "oficial",
            verificacao,
          },
          null,
          2,
        ) + "\n",
      );
      relacoes++;
    }
  }
  console.log(`Pessoas criadas: ${pessoas}; relações "ocupa" criadas: ${relacoes}.`);
  if (semPartido.length) console.log(`Sem filiação na data de referência: ${semPartido.join(", ")}`);
}

const etapa = process.argv[2];
if (etapa === "baixar") await baixar();
else if (etapa === "gerar") gerar();
else console.log("Uso: senado-senadores.ts baixar | gerar");
