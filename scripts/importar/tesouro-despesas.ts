// Importa o orçamento executado da União (D44 a D47) da base "Despesas e Transferências Totais da
// União" do Tesouro Nacional (critério valor pago). Três etapas:
//   npx tsx scripts/importar/tesouro-despesas.ts baixar    → baixa a planilha do ano e grava um resumo em pesquisa/brutos/
//   npx tsx scripts/importar/tesouro-despesas.ts conferir  → compara o Executivo com o Portal da Transparência
//   npx tsx scripts/importar/tesouro-despesas.ts gerar     → cria as métricas (met:) e os fluxos (fluxo:) em dados/
//
// A planilha tem 34 MB (uma linha por mês, órgão, unidade orçamentária, ação, fonte e natureza da
// despesa); guardamos só a soma do ano por Poder, unidade orçamentária, ação, modalidade e
// primária/financeira, que basta para refazer todas as contas (D17).
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { strFromU8, unzipSync } from "fflate";

const RAIZ = join(import.meta.dirname, "..", "..");
const EXERCICIO = 2025;
const HOJE = new Date().toISOString().slice(0, 10);
const TAREFA = "importacao-tesouro-despesas";
const DATASET = "https://www.tesourotransparente.gov.br/ckan/dataset/despesas-e-transferencias-totais";
const API_CKAN = "https://www.tesourotransparente.gov.br/ckan/api/3/action/package_show?id=despesas-e-transferencias-totais";
const PORTAL = `https://portaldatransparencia.gov.br/download-de-dados/orcamento-despesa/${EXERCICIO}`;
const DIR_BRUTO = join(RAIZ, "pesquisa", "brutos", "tesouro-transparente");
const FONTE = "fonte:tesouro-despesas-transferencias-uniao";
const FONTE_PORTAL = "fonte:portal-transparencia-orcamento-despesa";

const VALORES = ["DOTACAO_INICIAL", "DOTACAO_ATUALIZADA", "DESPESAS_EMPENHADAS", "DESPESAS_LIQUIDADAS", "DESPESAS_PAGAS", "RESTOS_A_PAGAR_PAGOS", "PAGAMENTOS_TOTAIS"] as const;
const CHAVES = ["PODER", "ORGAO_CODIGO", "UNIDADE_ORCAMENTARIA_CODIGO", "UNIDADE_ORCAMENTARIA_DESCRICAO", "ACAO", "NO_ACAO", "CO_MOAP_NADE", "PRIMARIA_FINANCEIRA"] as const;

// ---------------------------------------------------------------- leitura de xlsx

const entidadesXml = (s: string) =>
  s.replace(/&(lt|gt|quot|apos|amp|#\d+);/g, (_, e: string) =>
    e === "lt" ? "<" : e === "gt" ? ">" : e === "quot" ? '"' : e === "apos" ? "'" : e === "amp" ? "&" : String.fromCharCode(Number(e.slice(1))),
  );
const coluna = (ref: string) => [...ref.replace(/\d+/g, "")].reduce((n, c) => n * 26 + c.charCodeAt(0) - 64, 0) - 1;

/** Lê uma aba de um xlsx e chama linha() com os valores de cada linha (strings ou números). */
function lerAba(xlsx: Uint8Array, nomeAba: string, linha: (valores: (string | number | null)[]) => void) {
  const arquivos = unzipSync(xlsx, { filter: (f) => f.name === "xl/workbook.xml" || f.name === "xl/_rels/workbook.xml.rels" || f.name === "xl/sharedStrings.xml" || f.name.startsWith("xl/worksheets/sheet") });
  const livro = strFromU8(arquivos["xl/workbook.xml"]);
  const aba = [...livro.matchAll(/<sheet [^>]*name="([^"]+)"[^>]*r:id="([^"]+)"/g)].find((m) => entidadesXml(m[1]) === nomeAba);
  if (!aba) throw new Error(`aba "${nomeAba}" não encontrada`);
  const rels = strFromU8(arquivos["xl/_rels/workbook.xml.rels"]);
  const alvo = rels.match(new RegExp(`Id="${aba[2]}"[^>]*Target="([^"]+)"|Target="([^"]+)"[^>]*Id="${aba[2]}"`))!;
  const caminho = `xl/${(alvo[1] ?? alvo[2]).replace(/^\/?xl\//, "")}`;
  const compartilhadas = [...strFromU8(arquivos["xl/sharedStrings.xml"]).matchAll(/<si>([\s\S]*?)<\/si>/g)].map((m) =>
    entidadesXml([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((t) => t[1]).join("")),
  );
  const xml = strFromU8(arquivos[caminho]);
  for (const r of xml.matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)) {
    const valores: (string | number | null)[] = [];
    for (const c of r[1].matchAll(/<c r="([A-Z]+)\d+"([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
      const tipo = c[2].match(/t="([^"]+)"/)?.[1];
      const v = c[3]?.match(/<v>([\s\S]*?)<\/v>/)?.[1];
      const i = coluna(c[1]);
      if (tipo === "s") valores[i] = compartilhadas[Number(v)];
      else if (tipo === "str") valores[i] = v === undefined ? null : entidadesXml(v);
      else if (tipo === "inlineStr") valores[i] = entidadesXml(c[3]?.match(/<t[^>]*>([\s\S]*?)<\/t>/)?.[1] ?? "");
      else valores[i] = v === undefined ? null : Number(v);
    }
    linha(valores);
  }
}

// ---------------------------------------------------------------- baixar

const pegar = async (url: string) => {
  for (let tentativa = 1; ; tentativa++) {
    const r = await fetch(url, { headers: { "User-Agent": "br-grama (https://github.com/dandesdev/br-grama)" } });
    if (r.ok) return r;
    if (tentativa === 3) throw new Error(`${r.status} em ${url}`);
    await new Promise((ok) => setTimeout(ok, 2000 * tentativa));
  }
};

const arquivoBruto = () => {
  const datas = existsSync(DIR_BRUTO) ? readdirSync(DIR_BRUTO).sort() : [];
  if (!datas.length) throw new Error("rode a etapa baixar antes");
  return join(DIR_BRUTO, datas.at(-1)!, `despesas-transferencias-${EXERCICIO}-agregado.csv`);
};

async function baixar() {
  const pacote = (await (await pegar(API_CKAN)).json()).result as { resources: { name: string; url: string; last_modified: string }[] };
  const recurso = pacote.resources.find((r) => r.name === `Despesas e Transferências da União - ${EXERCICIO}`);
  if (!recurso) throw new Error(`recurso de ${EXERCICIO} não encontrado no CKAN do Tesouro`);
  const xlsx = new Uint8Array(await (await pegar(recurso.url)).arrayBuffer());
  writeFileSync(join(tmpdir(), "br-grama-tesouro.xlsx"), xlsx);

  let cabecalho: string[] | null = null;
  const soma = new Map<string, number[]>();
  let linhas = 0;
  lerAba(xlsx, String(EXERCICIO), (v) => {
    if (!cabecalho) {
      cabecalho = v.map(String);
      return;
    }
    const ix = (c: string) => cabecalho!.indexOf(c);
    if (v[ix("ID_ANO")] !== EXERCICIO) return;
    linhas++;
    const chave = CHAVES.map((c) => String(v[ix(c)] ?? "")).join("\t");
    const s = soma.get(chave) ?? VALORES.map(() => 0);
    VALORES.forEach((c, j) => (s[j] += Number(v[ix(c)] ?? 0)));
    soma.set(chave, s);
  });
  const dir = join(DIR_BRUTO, HOJE);
  mkdirSync(dir, { recursive: true });
  const csv = [
    `# Soma de ${EXERCICIO} da aba "${EXERCICIO}" de ${recurso.url.split("/").pop()} (atualizado em ${recurso.last_modified.slice(0, 10)}), ${linhas} linhas mensais. Fonte: ${DATASET}`,
    [...CHAVES, ...VALORES].join(";"),
    ...[...soma].sort(([a], [b]) => a.localeCompare(b)).map(([k, s]) => [...k.split("\t").map((x) => x.replaceAll(";", ",")), ...s.map((x) => x.toFixed(2))].join(";")),
  ].join("\n");
  writeFileSync(join(dir, `despesas-transferencias-${EXERCICIO}-agregado.csv`), csv + "\n");
  console.log(`${linhas} linhas de ${EXERCICIO} somadas em ${soma.size} combinações. Arquivo: ${recurso.url}`);
}

// ---------------------------------------------------------------- leitura do resumo

interface Linha {
  poder: string;
  orgao: string;
  uo: string;
  nomeUo: string;
  acao: string;
  nomeAcao: string;
  modalidade: string;
  primaria: boolean;
  financeira: boolean;
  v: Record<(typeof VALORES)[number], number>;
}

function lerBruto(): { linhas: Linha[]; cabecalho: string } {
  const [comentario, cab, ...resto] = readFileSync(arquivoBruto(), "utf8").trim().split("\n");
  const colunas = cab.split(";");
  const linhas = resto.map((l) => {
    const c = l.split(";");
    const g = (k: string) => c[colunas.indexOf(k)];
    return {
      poder: g("PODER"),
      orgao: g("ORGAO_CODIGO"),
      uo: g("UNIDADE_ORCAMENTARIA_CODIGO"),
      nomeUo: g("UNIDADE_ORCAMENTARIA_DESCRICAO"),
      acao: g("ACAO"),
      nomeAcao: g("NO_ACAO"),
      modalidade: g("CO_MOAP_NADE"),
      primaria: g("PRIMARIA_FINANCEIRA") === "Primária",
      financeira: g("PRIMARIA_FINANCEIRA") === "Despesa Financeira",
      v: Object.fromEntries(VALORES.map((k) => [k, Number(g(k))])) as Linha["v"],
    };
  });
  return { linhas, cabecalho: comentario };
}

// ---------------------------------------------------------------- conferir

/** O Portal da Transparência traz só o Executivo; "Orçamento Realizado" é o valor pago do próprio ano. */
async function conferir() {
  const zip = new Uint8Array(await (await pegar(PORTAL)).arrayBuffer());
  const csv = Object.values(unzipSync(zip))[0];
  const texto = new TextDecoder("latin1").decode(csv);
  const [cab, ...ls] = texto.trim().split(/\r?\n/).map((l) => l.split(";").map((c) => c.replace(/^"|"$/g, "")));
  const ix = (nome: RegExp) => cab.findIndex((c) => nome.test(c));
  const iUo = ix(/^CÓDIGO UNIDADE ORÇAMENTÁRIA$/);
  const iPago = ix(/^ORÇAMENTO REALIZADO/);
  const iAtual = ix(/^ORÇAMENTO ATUALIZADO/);
  const num = (s: string) => Number(s.replace(/\./g, "").replace(",", "."));
  const portal = new Map<string, { pago: number; atual: number }>();
  for (const l of ls) {
    const p = portal.get(l[iUo]) ?? { pago: 0, atual: 0 };
    p.pago += num(l[iPago]);
    p.atual += num(l[iAtual]);
    portal.set(l[iUo], p);
  }
  const { linhas } = lerBruto();
  const tesouro = new Map<string, { pago: number; atual: number }>();
  for (const l of linhas.filter((l) => l.poder === "EXE")) {
    const t = tesouro.get(l.uo) ?? { pago: 0, atual: 0 };
    t.pago += l.v.DESPESAS_PAGAS;
    t.atual += l.v.DOTACAO_ATUALIZADA;
    tesouro.set(l.uo, t);
  }
  const usadas = new Set(METRICAS.flatMap((m) => m.recorte.uos ?? []));
  const linhasRel: string[] = [];
  let maior = 0;
  for (const uo of [...usadas].sort()) {
    const t = tesouro.get(uo);
    const p = portal.get(uo);
    if (!t || !p) {
      if (t && linhas.some((l) => l.uo === uo && l.poder === "EXE")) linhasRel.push(`${uo}: só no Tesouro`);
      continue;
    }
    const dif = p.pago ? (t.pago - p.pago) / p.pago : 0;
    maior = Math.max(maior, Math.abs(dif));
    linhasRel.push(`${uo}: pago Tesouro ${(t.pago / 1e6).toFixed(1)} mi, Portal ${(p.pago / 1e6).toFixed(1)} mi (${(100 * dif).toFixed(2)}%)`);
  }
  const totT = [...tesouro.values()].reduce((s, x) => s + x.pago, 0);
  const totP = [...portal.values()].reduce((s, x) => s + x.pago, 0);
  console.log(linhasRel.join("\n"));
  console.log(`\nExecutivo inteiro: Tesouro ${(totT / 1e9).toFixed(2)} bi, Portal ${(totP / 1e9).toFixed(2)} bi (${((100 * (totT - totP)) / totP).toFixed(2)}%).`);
  console.log(`Maior diferença numa unidade usada: ${(100 * maior).toFixed(2)}%.`);
}

// ---------------------------------------------------------------- o que vira métrica e fluxo

interface Recorte {
  poderes?: string[];
  orgao?: string;
  uos?: string[];
  acoes?: string[];
  modalidades?: string[];
  /** Agregados de vários órgãos (União, Poderes) tiram as aplicações intraorçamentárias (modalidade 91), que um órgão federal paga a outro e seriam contadas duas vezes. */
  semIntra?: boolean;
  /** Outros recortes somados a este (ex.: ações de outra unidade que pagam o mesmo repasse). */
  tambem?: Recorte[];
}
interface DefMetrica { de: string; recorte: Recorte; nota?: string }
interface DefFluxo { relacao: string; recorte: Recorte; nota?: string }

const JUDICIARIO = ["STF", "STJ", "JF", "JM", "JE", "JT", "JDFT", "CNJ"];
export const DESCRICAO_SUPERVISAO =
  "encargos financeiros da União (inclusive sentenças judiciais), aposentadorias e pensões civis, transferências a estados, DF e municípios (inclusive o Fundo Constitucional do DF), operações oficiais de crédito e refinanciamento da dívida";
const NOTA_SUPERVISAO = `Na lei orçamentária, os recursos sob supervisão (unidades 71xxx a 75xxx: ${DESCRICAO_SUPERVISAO}) são órgãos próprios; ficam fora do número principal e aparecem à parte (D47).`;
const NOTA_AGREGADO = "Sem as aplicações intraorçamentárias (modalidade 91), pagas de um órgão federal a outro, que seriam contadas duas vezes.";

const ministerio = (de: string, orgao: string, nota?: string): DefMetrica => ({ de, recorte: { orgao }, nota });
const unidade = (de: string, uo: string, nota?: string): DefMetrica => ({ de, recorte: { uos: [uo] }, nota });
const UFS_TRE = ["ac", "al", "am", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pr", "pe", "pi", "rj", "rn", "rs", "ro", "sc", "sp", "se", "to", "rr", "ap"];

export const METRICAS: DefMetrica[] = [
  { de: "ente:uniao", recorte: { semIntra: true }, nota: "Todos os Poderes, o MPU e a DPU." },
  { de: "org:poder-executivo-federal", recorte: { poderes: ["EXE"], semIntra: true } },
  { de: "org:poder-legislativo-federal", recorte: { poderes: ["CD", "SF", "TCU"], semIntra: true }, nota: "Câmara dos Deputados, Senado Federal e Tribunal de Contas da União, como na lei orçamentária." },
  { de: "org:poder-judiciario", recorte: { poderes: JUDICIARIO, semIntra: true }, nota: "Só o Judiciário da União (inclui o TJDFT, que a União mantém: CF, art. 21, XIII); os tribunais estaduais têm orçamento dos estados." },
  { de: "org:camara-dos-deputados", recorte: { poderes: ["CD"] } },
  { de: "org:senado-federal", recorte: { poderes: ["SF"] } },
  { de: "org:tcu", recorte: { poderes: ["TCU"] } },
  { de: "org:stf", recorte: { poderes: ["STF"] } },
  { de: "org:stj", recorte: { poderes: ["STJ"] } },
  { de: "org:cnj", recorte: { poderes: ["CNJ"] } },
  { de: "org:justica-federal", recorte: { poderes: ["JF"] }, nota: "Inclui a primeira instância (unidade 12101) e os seis TRFs." },
  { de: "org:justica-do-trabalho", recorte: { poderes: ["JT"] }, nota: "Inclui o TST, os 24 TRTs e o CSJT (unidade 15126, que em 2025 só teve dotação de reserva)." },
  { de: "org:justica-eleitoral", recorte: { poderes: ["JE"] }, nota: "Inclui o TSE, os 27 TREs e o Fundo Partidário (unidade 14901), que fica no orçamento da Justiça Eleitoral." },
  { de: "org:justica-militar-da-uniao", recorte: { poderes: ["JM"] }, nota: "Uma só unidade orçamentária (13101) para o STM e as auditorias militares." },
  { de: "org:tj-df", recorte: { poderes: ["JDFT"] } },
  { de: "org:tse", recorte: { uos: ["14101"] } },
  ...UFS_TRE.map((uf, i) => unidade(`org:tre-${uf}`, String(14102 + i))),
  { de: "org:tst", recorte: { uos: ["15101"] } },
  ...Array.from({ length: 24 }, (_, i) => unidade(`org:trt-${i + 1}`, String(15102 + i))),
  ...Array.from({ length: 6 }, (_, i) => unidade(`org:trf-${i + 1}`, String(12102 + i))),
  { de: "org:ministerio-publico-da-uniao", recorte: { poderes: ["MPU"] }, nota: "Inclui os quatro ramos e a Escola Superior do MPU (unidade 34105)." },
  unidade("org:mpf", "34101"),
  unidade("org:mpm", "34102"),
  unidade("org:mpdft", "34103"),
  unidade("org:mpt", "34104"),
  { de: "org:cnmp", recorte: { poderes: ["CNMP"] } },
  { de: "org:dpu", recorte: { poderes: ["DPU"] } },
  ministerio("org:presidencia-da-republica", "20000", "Inclui a Abin e a EBC, que têm unidade orçamentária própria no órgão orçamentário da Presidência."),
  ministerio("org:agu", "63000", "A AGU é função essencial à Justiça, mas o orçamento dela fica no Executivo."),
  ministerio("org:cgu", "37000"),
  ministerio("org:ministerio-da-agricultura-e-pecuaria", "22000"),
  ministerio("org:ministerio-da-ciencia-tecnologia-e-inovacao", "24000"),
  ministerio("org:ministerio-da-fazenda", "25000"),
  ministerio("org:ministerio-da-educacao", "26000"),
  ministerio("org:ministerio-do-desenvolvimento-industria-comercio-e-servicos", "28000"),
  ministerio("org:ministerio-da-justica-e-seguranca-publica", "30000"),
  ministerio("org:ministerio-de-minas-e-energia", "32000"),
  ministerio("org:ministerio-da-previdencia-social", "33000"),
  ministerio("org:ministerio-das-relacoes-exteriores", "35000"),
  ministerio("org:ministerio-da-saude", "36000"),
  ministerio("org:ministerio-dos-transportes", "39000"),
  ministerio("org:ministerio-do-trabalho-e-emprego", "40000"),
  ministerio("org:ministerio-das-comunicacoes", "41000"),
  ministerio("org:ministerio-da-cultura", "42000"),
  ministerio("org:ministerio-do-meio-ambiente-e-mudanca-do-clima", "44000"),
  ministerio("org:ministerio-da-gestao-e-da-inovacao-em-servicos-publicos", "46000"),
  ministerio("org:ministerio-do-planejamento-e-orcamento", "47000"),
  ministerio("org:ministerio-do-desenvolvimento-agrario-e-agricultura-familiar", "49000"),
  ministerio("org:ministerio-do-esporte", "51000"),
  ministerio("org:ministerio-da-defesa", "52000", "Inclui os comandos da Marinha, do Exército e da Aeronáutica e seus fundos."),
  ministerio("org:ministerio-da-integracao-e-do-desenvolvimento-regional", "53000"),
  ministerio("org:ministerio-do-turismo", "54000"),
  ministerio("org:ministerio-do-desenvolvimento-e-assistencia-social", "55000"),
  ministerio("org:ministerio-das-cidades", "56000"),
  ministerio("org:ministerio-da-pesca-e-aquicultura", "58000"),
  ministerio("org:ministerio-das-mulheres", "65000"),
  ministerio("org:ministerio-da-igualdade-racial", "67000"),
  ministerio("org:ministerio-de-portos-e-aeroportos", "68000"),
  ministerio("org:ministerio-do-empreendedorismo", "69000"),
  ministerio("org:ministerio-dos-direitos-humanos-e-da-cidadania", "81000"),
  ministerio("org:ministerio-dos-povos-indigenas", "84000"),
  unidade("org:banco-central", "83201", "Só as despesas do Banco Central que a LRF manda incluir na lei orçamentária da União: pessoal e encargos, custeio administrativo e investimentos (LRF, art. 5º, § 6º)."),
  unidade("org:vice-presidencia-da-republica", "60101", "Gabinete da Vice-Presidência, unidade do órgão orçamentário da Presidência."),
  unidade("org:abin", "20118"),
  unidade("org:receita-federal", "25103"),
  unidade("org:pgfn", "25104"),
  unidade("org:colegio-pedro-ii", "26201"),
  unidade("org:inep", "26290"),
  unidade("org:fnde", "26298", "As cotas do salário-educação que o FNDE entrega a estados e municípios são pagas pela unidade 73107 (recursos sob supervisão do MEC) e não entram aqui."),
  { de: "org:suframa", recorte: { uos: ["28233", "25298"] }, nota: "A unidade 25298 é o código antigo da Suframa, com restos a pagar." },
  unidade("org:policia-rodoviaria-federal", "30107"),
  unidade("org:policia-federal", "30108"),
  unidade("org:cade", "30211"),
  unidade("org:anp", "32265", "Os royalties e a participação especial que a ANP distribui a estados e municípios são pagos pela unidade 73116 (recursos sob supervisão da ANP) e não entram aqui."),
  unidade("org:anm", "32396"),
  { de: "org:inss", recorte: { uos: ["33201", "25303", "40201"] }, nota: "Custeio e pessoal do INSS. Os benefícios do regime geral são pagos pelo Fundo do Regime Geral de Previdência Social (unidade 33904), que aparece no Ministério da Previdência Social e no próprio fundo. As unidades 25303 e 40201 são códigos antigos do INSS, com restos a pagar." },
  unidade("org:previc", "33206"),
  unidade("org:anvisa", "36212"),
  unidade("org:ibama", "44201"),
  unidade("org:icmbio", "44207"),
  { de: "org:enap", recorte: { uos: ["46201", "25302"] }, nota: "A unidade 25302 é o código antigo da Enap, com restos a pagar." },
  { de: "org:ibge", recorte: { uos: ["47205", "25301"] }, nota: "A unidade 25301 é o código antigo do IBGE, com restos a pagar." },
  { de: "org:incra", recorte: { uos: ["49201", "22201"] }, nota: "A unidade 22201 é o código antigo do Incra, com restos a pagar." },
  { de: "org:aeronautica", recorte: { uos: ["52111", "52911"] }, nota: "Comando da Aeronáutica (52111) e Fundo Aeronáutico (52911)." },
  { de: "org:exercito", recorte: { uos: ["52121", "52921"] }, nota: "Comando do Exército (52121) e Fundo do Exército (52921)." },
  { de: "org:marinha", recorte: { uos: ["52131", "52931", "52932"] }, nota: "Comando da Marinha (52131), Fundo Naval (52931) e Fundo de Desenvolvimento do Ensino Profissional Marítimo (52932)." },
  unidade("org:sudam", "53202"),
  unidade("org:sudene", "53203"),
  unidade("org:sudeco", "53207"),
  { de: "org:funai", recorte: { uos: ["84201", "30202"] }, nota: "A unidade 30202 é o código antigo da Funai, com restos a pagar." },
  // Fundos que são objetos de competência no mapa e têm unidade orçamentária própria.
  unidade("obj:fundo-do-regime-geral-de-previdencia-social", "33904", "Paga os benefícios do regime geral de previdência (aposentadorias, pensões, auxílios)."),
  unidade("obj:fundo-nacional-de-saude", "36901"),
  unidade("obj:fundo-de-amparo-ao-trabalhador", "40901"),
  unidade("obj:fundo-nacional-de-assistencia-social", "55901"),
  unidade("obj:fundo-partidario", "14901"),
];

const NOTA_FUNDEB_RETIDO = "A parcela destinada ao Fundeb (CF, art. 212-A, II) é paga na ação 0C33, que reúne a retenção de várias transferências, e não entra aqui.";
export const FLUXOS: DefFluxo[] = [
  { relacao: "rel:uniao-repassa-fpm-municipios", recorte: { uos: ["73108"], acoes: ["0045"] }, nota: NOTA_FUNDEB_RETIDO },
  { relacao: "rel:uniao-repassa-fpe-estados", recorte: { uos: ["73108"], acoes: ["0044"] }, nota: NOTA_FUNDEB_RETIDO },
  { relacao: "rel:uniao-repassa-ipi-exportacao-estados", recorte: { uos: ["73108"], acoes: ["0046"] }, nota: NOTA_FUNDEB_RETIDO },
  { relacao: "rel:uniao-repassa-itr-municipios", recorte: { uos: ["73108"], acoes: ["006M"] }, nota: NOTA_FUNDEB_RETIDO },
  { relacao: "rel:uniao-repassa-iof-ouro-estados", recorte: { uos: ["73108"], acoes: ["00H6"], modalidades: ["30"] } },
  { relacao: "rel:uniao-repassa-iof-ouro-municipios", recorte: { uos: ["73108"], acoes: ["00H6"], modalidades: ["40"] } },
  { relacao: "rel:uniao-repassa-cide-estados", recorte: { uos: ["73108"], acoes: ["0999"] } },
  { relacao: "rel:uniao-repassa-complementacao-fundeb", recorte: { uos: ["26298"], acoes: ["00SB"] } },
  { relacao: "rel:fnde-repassa-cotas-salario-educacao-estados", recorte: { uos: ["73107"], acoes: ["0369"], modalidades: ["30"] }, nota: "A ação fica na unidade 73107 (recursos sob supervisão do MEC)." },
  { relacao: "rel:fnde-repassa-cotas-salario-educacao-municipios", recorte: { uos: ["73107"], acoes: ["0369"], modalidades: ["40"] }, nota: "A ação fica na unidade 73107 (recursos sob supervisão do MEC)." },
  { relacao: "rel:uniao-repassa-recursos-saude-estados", recorte: { uos: ["36901"], modalidades: ["30", "31", "32", "35", "36"] }, nota: "Tudo o que o Fundo Nacional de Saúde pagou a estados e ao DF, em todas as modalidades de transferência a estados (30, 31, 32, 35 e 36)." },
  { relacao: "rel:uniao-repassa-recursos-saude-municipios", recorte: { uos: ["36901"], modalidades: ["40", "41", "42", "45", "46"] }, nota: "Tudo o que o Fundo Nacional de Saúde pagou a municípios, em todas as modalidades de transferência a municípios (40, 41, 42, 45 e 46)." },
  { relacao: "rel:uniao-repassa-recursos-assistencia-social-estados", recorte: { uos: ["55901"], modalidades: ["30", "31", "32", "35", "36"], tambem: [{ uos: ["55101"], acoes: ["00US", "6414", "217M"], modalidades: ["30", "31", "32", "35", "36"] }] }, nota: "O que o Fundo Nacional de Assistência Social pagou a estados e ao DF, mais as ações de apoio à gestão (IGD, Cadastro Único, Criança Feliz) pagas pelo MDS (unidade 55101)." },
  { relacao: "rel:uniao-repassa-recursos-assistencia-social-municipios", recorte: { uos: ["55901"], modalidades: ["40", "41", "42", "45", "46"], tambem: [{ uos: ["55101"], acoes: ["00US", "6414", "217M"], modalidades: ["40", "41", "42", "45", "46"] }] }, nota: "O que o Fundo Nacional de Assistência Social pagou a municípios, mais as ações de apoio à gestão (IGD, Cadastro Único, Criança Feliz) pagas pelo MDS (unidade 55101)." },
  { relacao: "rel:anp-repassa-royalties-do-petroleo-estados", recorte: { uos: ["73116"], acoes: ["0A53"], modalidades: ["30"] }, nota: "Royalties e participação especial (ação 0A53, unidade 73116, recursos sob supervisão da ANP). A ação não separa as parcelas por critério de distribuição." },
  { relacao: "rel:anp-repassa-royalties-do-petroleo-municipios", recorte: { uos: ["73116"], acoes: ["0A53"], modalidades: ["40"] }, nota: "Royalties e participação especial (ação 0A53, unidade 73116, recursos sob supervisão da ANP). A ação não separa as parcelas por critério de distribuição." },
  { relacao: "rel:fat-repassa-recursos-bndes", recorte: { uos: ["40901"], acoes: ["0158"] } },
  { relacao: "rel:tse-repassa-fundo-partidario-partidos", recorte: { uos: ["14901"] } },
];

// ---------------------------------------------------------------- gerar

// A reserva de contingência (90000) é um órgão orçamentário à parte, só com dotação; a planilha a
// põe sob o Ministério da Fazenda.
const RESERVA = "90000";
const ehSupervisao = (uo: string) => /^7[1-5]\d{3}$/.test(uo);
// As ações 0Z* são reserva de contingência dentro das unidades: só dotação, nenhum pagamento; ficam
// fora para não inflar a dotação (em 2025, R$ 34,8 bilhões).
const ehReserva = (l: Linha) => l.uo === RESERVA || l.acao.startsWith("0Z");
const casa = (r: Recorte, l: Linha) =>
  (!r.poderes || r.poderes.includes(l.poder)) &&
  (!r.orgao || l.orgao === r.orgao) &&
  (!r.uos || r.uos.includes(l.uo)) &&
  (!r.acoes || r.acoes.includes(l.acao)) &&
  (!r.modalidades || r.modalidades.includes(l.modalidade)) &&
  (!r.semIntra || l.modalidade !== "91");
const filtra = (r: Recorte) => (l: Linha) => l.uo !== "N/A" && !ehReserva(l) && (casa(r, l) || (r.tambem ?? []).some((t) => casa(t, l)));
/** Ajustes "Extra-SIAFI" sem unidade orçamentária no recorte de Poderes: ficam fora, mas a nota diz quanto. */
const extraSiafi = (r: Recorte) => (l: Linha) => l.uo === "N/A" && !r.uos && !r.orgao && (!r.poderes || r.poderes.includes(l.poder));

const centavos = (x: number) => Math.round(x * 100) / 100;
function somar(ls: Linha[]) {
  const t = (k: (typeof VALORES)[number]) => centavos(ls.reduce((s, l) => s + l.v[k], 0));
  const valores = {
    pagamentos_totais: t("PAGAMENTOS_TOTAIS"),
    despesas_pagas: t("DESPESAS_PAGAS"),
    restos_a_pagar_pagos: t("RESTOS_A_PAGAR_PAGOS"),
    pagamentos_primarios: centavos(ls.filter((l) => l.primaria).reduce((s, l) => s + l.v.PAGAMENTOS_TOTAIS, 0)),
    pagamentos_financeiros: centavos(ls.filter((l) => l.financeira).reduce((s, l) => s + l.v.PAGAMENTOS_TOTAIS, 0)),
    dotacao_inicial: t("DOTACAO_INICIAL"),
    dotacao_atualizada: t("DOTACAO_ATUALIZADA"),
    despesas_empenhadas: t("DESPESAS_EMPENHADAS"),
    despesas_liquidadas: t("DESPESAS_LIQUIDADAS"),
  };
  // A planilha arredonda cada linha; a soma das partes pode diferir do total em centavos.
  valores.pagamentos_totais = centavos(valores.despesas_pagas + valores.restos_a_pagar_pagos);
  return valores;
}

export const reais = (x: number) => {
  const [n, raiz] = Math.abs(x) >= 1e12 ? [x / 1e12, "trilh"] : Math.abs(x) >= 1e9 ? [x / 1e9, "bilh"] : [x / 1e6, "milh"];
  return `R$ ${n.toLocaleString("pt-BR", { maximumFractionDigits: 1, minimumFractionDigits: 1 })} ${raiz}${Math.abs(n) < 2 ? "ão" : "ões"}`;
};

function gerar(verificacaoNotas?: string) {
  const { linhas } = lerBruto();
  const dados = (pasta: string) => join(RAIZ, "dados", pasta);
  const ler = (id: string) => {
    const [prefixo, slug] = id.split(":");
    const pasta = { ente: "entes", org: "orgaos", rel: "relacoes", obj: "objetos" }[prefixo]!;
    return JSON.parse(readFileSync(join(dados(pasta), `${slug}.json`), "utf8"));
  };
  const verificacao = verificacaoNotas
    ? { status: "verificado", em: HOJE, tarefa: "verificacao-f1-orcamento", notas: verificacaoNotas }
    : { status: "coletado", em: HOJE, tarefa: TAREFA, notas: "Gerado por scripts/importar/tesouro-despesas.ts a partir do resumo em pesquisa/brutos/tesouro-transparente/." };
  const vigencia = { de: `${EXERCICIO}-01-01`, ate: `${EXERCICIO}-12-31` };

  for (const pasta of ["metricas", "fluxos"]) {
    mkdirSync(dados(pasta), { recursive: true });
    for (const n of readdirSync(dados(pasta))) {
      const e = JSON.parse(readFileSync(join(dados(pasta), n), "utf8"));
      if (e.exercicio === EXERCICIO && [TAREFA, "verificacao-f1-orcamento"].includes(e.verificacao?.tarefa)) rmSync(join(dados(pasta), n));
    }
  }

  const recorteJson = (r: Recorte, nota?: string): Record<string, unknown> => ({
    ...(r.poderes ? { poderes: r.poderes } : {}),
    ...(r.orgao ? { orgao_orcamentario: r.orgao } : {}),
    ...(r.uos ? { unidades_orcamentarias: r.uos } : {}),
    ...(r.acoes ? { acoes: r.acoes } : {}),
    ...(r.modalidades ? { modalidades: r.modalidades } : {}),
    ...(r.semIntra ? { modalidades_excluidas: ["91"] } : {}),
    ...(r.tambem ? { tambem: r.tambem.map((t) => recorteJson(t)) } : {}),
    ...(nota ? { nota } : {}),
  });
  const dispositivo = `planilha de ${EXERCICIO}, aba "${EXERCICIO}", coluna PAGAMENTOS_TOTAIS e vizinhas; recorte no campo "recorte"`;

  let nMetricas = 0;
  for (const m of METRICAS) {
    const alvo = ler(m.de);
    const ls = linhas.filter(filtra(m.recorte));
    if (!ls.length) throw new Error(`nenhuma linha para ${m.de}`);
    const proprias = ls.filter((l) => !ehSupervisao(l.uo));
    const supervisao = ls.filter((l) => ehSupervisao(l.uo));
    const valores = somar(proprias);
    const slug = m.de.split(":")[1];
    const uosProprias = [...new Set(proprias.map((l) => l.uo))].sort();
    const ajuste = linhas.filter(extraSiafi(m.recorte)).reduce((s, l) => s + l.v.PAGAMENTOS_TOTAIS, 0);
    const nota = [
      m.nota,
      m.recorte.semIntra ? NOTA_AGREGADO : null,
      supervisao.length ? NOTA_SUPERVISAO : null,
      Math.abs(ajuste) > 1e6 ? `Ajustes "Extra-SIAFI" sem unidade orçamentária (${reais(ajuste)} no saldo) ficam de fora.` : null,
      "A reserva de contingência (ações 0Z* e unidade 90000), só com dotação, fica de fora.",
      m.recorte.orgao ? `Unidades orçamentárias somadas: ${uosProprias.join(", ")}.` : null,
    ]
      .filter(Boolean)
      .join(" ");
    const entidade = {
      id: `met:orcamento-${EXERCICIO}-${slug}`,
      tipo: "metrica",
      nome: `Orçamento executado em ${EXERCICIO}: ${alvo.nome}`,
      resumo: `Pagou ${reais(valores.pagamentos_totais)} em ${EXERCICIO}; dotação atualizada de ${reais(valores.dotacao_atualizada)}.`,
      de: m.de,
      medida: "orcamento-executado",
      exercicio: EXERCICIO,
      moeda: "BRL",
      valores,
      ...(supervisao.length
        ? {
            sob_supervisao: {
              valores: somar(supervisao),
              unidades_orcamentarias: [...new Set(supervisao.map((l) => l.uo))].sort(),
              nota: `Recursos sob supervisão deste órgão (D47): ${DESCRICAO_SUPERVISAO}.`,
            },
          }
        : {}),
      recorte: recorteJson(m.recorte, nota),
      vigencia,
      fontes: [{ ref: FONTE, dispositivo }],
      confianca: "oficial",
      verificacao,
    };
    writeFileSync(join(dados("metricas"), `orcamento-${EXERCICIO}-${slug}.json`), JSON.stringify(entidade, null, 2) + "\n");
    nMetricas++;
  }

  let nFluxos = 0;
  for (const f of FLUXOS) {
    const rel = ler(f.relacao);
    if (rel.relacao !== "repassa-recursos") throw new Error(`${f.relacao} não é repassa-recursos`);
    const ls = linhas.filter(filtra(f.recorte));
    if (!ls.length) throw new Error(`nenhuma linha para ${f.relacao}`);
    const valores = somar(ls);
    const acoes = [...new Set(ls.map((l) => `${l.acao} (${l.nomeAcao})`))].sort();
    const slug = f.relacao.split(":")[1];
    const entidade = {
      id: `fluxo:${slug}-${EXERCICIO}`,
      tipo: "fluxo",
      nome: `${rel.nome}: valores de ${EXERCICIO}`,
      resumo: `Pagamentos de ${reais(valores.pagamentos_totais)} em ${EXERCICIO}.`,
      repasse: f.relacao,
      exercicio: EXERCICIO,
      moeda: "BRL",
      valores,
      recorte: recorteJson(f.recorte, [f.nota, `Ações somadas: ${acoes.join("; ")}.`].filter(Boolean).join(" ")),
      vigencia,
      fontes: [{ ref: FONTE, dispositivo }],
      confianca: "oficial",
      verificacao,
    };
    writeFileSync(join(dados("fluxos"), `${slug}-${EXERCICIO}.json`), JSON.stringify(entidade, null, 2) + "\n");
    nFluxos++;
  }
  console.log(`${nMetricas} métricas e ${nFluxos} fluxos de ${EXERCICIO} gravados.`);
}

const etapa = process.argv[2];
if (etapa === "baixar") await baixar();
else if (etapa === "conferir") await conferir();
else if (etapa === "gerar") gerar(process.argv[3]);
else console.log("Uso: npx tsx scripts/importar/tesouro-despesas.ts baixar | conferir | gerar [notas da verificação]");
