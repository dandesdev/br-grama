// Importa do SIORG a estrutura interna dos órgãos do Executivo federal (D62). Duas etapas:
//   npx tsx scripts/importar/siorg.ts baixar  → baixa a estrutura resumida (cerca de 96 MB) e grava em
//                                              pesquisa/brutos/siorg/<data>/ só o que interessa: as unidades
//                                              criadas por lei ou decreto e a contagem das de ato interno
//   npx tsx scripts/importar/siorg.ts gerar [notas] → cria as estruturas (est:) em dados/estruturas/
//
// A árvore vai até as unidades que o SIORG registra com nível "LEI_DECRETO" (a estrutura regimental);
// abaixo disso, as unidades de ato interno (portarias, regimentos) só são contadas.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RAIZ = join(import.meta.dirname, "..", "..");
const HOJE = new Date().toISOString().slice(0, 10);
const URL_RESUMIDA = "https://estruturaorganizacional.dados.gov.br/doc/estrutura-organizacional/resumida?codigoPoder=1&codigoEsfera=1&tipo=JSON";
const DIR_BRUTO = join(RAIZ, "pesquisa", "brutos", "siorg");
const FONTE = "fonte:siorg-estrutura-resumida";
const TAREFA = "importacao-siorg";

interface UnidadeBruta {
  codigoUnidade: string;
  codigoUnidadePai: string | null;
  codigoOrgaoEntidade: string;
  codigoTipoUnidade: string;
  nome: string;
  sigla: string | null;
  nivelNormatizacao: string;
}
interface Unidade { codigo: string; pai: string; orgao: string; tipo: string; nome: string; sigla: string; nivel: string }

const cod = (u: string | null) => (u ?? "").split("/").pop() ?? "";

// Raízes: código SIORG → órgão do mapa. Órgãos e entidades do SIORG com o mesmo nome ou sigla de um órgão do
// mapa, mais unidades internas que o mapa trata como órgão (Receita, PF, comandos militares...).
const RAIZES: Record<string, string> = {
  "2": "org:bndes", "3": "org:ibge", "26": "org:presidencia-da-republica", "27": "org:gabinete-de-seguranca-institucional",
  "46": "org:agu", "74": "org:correios", "89": "org:banco-central", "91": "org:caixa-economica-federal", "93": "org:banco-do-brasil",
  "166": "org:suframa", "173": "org:funai", "224": "org:petrobras", "244": "org:ministerio-da-educacao", "249": "org:inep",
  "253": "org:fnde", "256": "org:colegio-pedro-ii", "263": "org:ministerio-das-relacoes-exteriores", "304": "org:ministerio-da-saude",
  "322": "org:cade", "956": "org:enap", "1408": "org:vice-presidencia-da-republica", "1799": "org:incra", "1812": "org:ibama",
  "1927": "org:ministerio-do-meio-ambiente-e-mudanca-do-clima", "1934": "org:inss", "1949": "org:gabinete-pessoal-do-presidente",
  "2837": "org:casa-civil", "2852": "org:ministerio-de-minas-e-energia", "21089": "org:aneel", "25064": "org:anatel", "25281": "org:anp",
  "36687": "org:anvisa", "41066": "org:ministerio-da-defesa", "42673": "org:secretaria-de-relacoes-institucionais", "45013": "org:ans",
  "46876": "org:ana", "54793": "org:antt", "54843": "org:antaq", "57682": "org:ancine", "72080": "org:assessoria-especial-do-presidente",
  "72084": "org:ministerio-do-turismo", "86144": "org:anac", "91138": "org:sudam", "91144": "org:sudene", "91842": "org:icmbio",
  "100113": "org:sudeco", "105915": "org:previc", "120397": "org:funpresp-exe", "214460": "org:cgu", "219924": "org:secretaria-geral-da-presidencia",
  "222120": "org:anm", "235881": "org:ministerio-da-justica-e-seguranca-publica", "235884": "org:anpd", "260668": "org:dpu",
  "264359": "org:ministerio-das-comunicacoes", "267175": "org:ministerio-da-ciencia-tecnologia-e-inovacao",
  "308793": "org:ministerio-da-agricultura-e-pecuaria", "308794": "org:ministerio-do-desenvolvimento-agrario-e-agricultura-familiar",
  "308795": "org:ministerio-da-pesca-e-aquicultura", "308796": "org:ministerio-do-desenvolvimento-e-assistencia-social",
  "308797": "org:ministerio-do-esporte", "308798": "org:ministerio-das-cidades", "308799": "org:ministerio-da-integracao-e-do-desenvolvimento-regional",
  "308800": "org:ministerio-da-fazenda", "308803": "org:ministerio-da-gestao-e-da-inovacao-em-servicos-publicos",
  "308804": "org:ministerio-do-planejamento-e-orcamento", "308814": "org:ministerio-do-desenvolvimento-industria-comercio-e-servicos",
  "308815": "org:ministerio-das-mulheres", "308816": "org:ministerio-dos-direitos-humanos-e-da-cidadania", "308817": "org:ministerio-de-portos-e-aeroportos",
  "308818": "org:ministerio-dos-transportes", "308819": "org:ministerio-da-previdencia-social", "308820": "org:ministerio-do-trabalho-e-emprego",
  "308821": "org:ministerio-da-cultura", "308822": "org:secretaria-de-comunicacao-social", "308823": "org:ministerio-da-igualdade-racial",
  "308824": "org:ministerio-dos-povos-indigenas", "330683": "org:ministerio-do-empreendedorismo",
  // Unidades internas que o mapa trata como órgão.
  "45104": "org:abin", "332": "org:imprensa-nacional", "48": "org:aeronautica", "94": "org:exercito", "185": "org:marinha",
  "41110": "org:estado-maior-conjunto-das-forcas-armadas", "4328": "org:secretaria-federal-de-controle-interno", "324": "org:policia-federal",
  "315287": "org:secretaria-nacional-de-politicas-penais", "704": "org:policia-rodoviaria-federal", "77": "org:receita-federal",
  "1696": "org:secretaria-do-tesouro-nacional", "2032": "org:secretaria-de-orcamento-federal",
};

// Unidades da árvore que correspondem a órgãos do mapa (conferidas na revisão verificacao-f4-siorg).
const MAPA_UNIDADES: Record<string, string> = { "1023": "org:conama", "321": "org:contran", "3319": "org:conanda", "320": "org:cnpcp", "229": "org:cnsp", "1463": "org:crsfn", "101068": "org:carf", "32061": "org:coaf", "87": "org:confaz", "2259": "org:conselho-curador-do-fgts", "319": "org:cndh", "75168": "org:ctnbio", "105921": "org:camara-de-recursos-da-previdencia-complementar", "220": "org:tribunal-maritimo", "1942": "org:conselho-nacional-de-politica-cultural", "55959": "org:cgen", "82": "org:cmn", "25276": "org:cnpe", "2761": "org:codefat", "44701": "org:comissao-de-coordenacao-de-controle-interno", "316201": "org:comissao-de-etica-publica", "121080": "org:comissao-mista-de-reavaliacao-de-informacoes", "91843": "org:comite-gestor-do-simples-nacional", "117268": "org:conitec", "309010": "org:consea", "1931": "org:conselho-da-republica", "1933": "org:conselho-de-defesa-nacional", "309008": "org:conselho-de-desenvolvimento-economico-social-sustentavel", "1932": "org:conselho-de-governo", "236348": "org:conselho-de-recursos-da-previdencia-social", "214326": "org:conselho-do-programa-de-parcerias-de-investimentos", "41926": "org:conselho-militar-de-defesa", "4402": "org:conselho-nacional-de-assistencia-social", "248": "org:conselho-nacional-de-educacao", "2042": "org:conselho-nacional-de-previdencia-complementar", "2764": "org:conselho-nacional-de-previdencia-social", "23448": "org:conselho-nacional-de-recursos-hidricos", "306": "org:conselho-nacional-de-saude", "241963": "org:conselho-nacional-de-seguranca-publica-e-defesa-social", "3623": "org:conselho-superior-da-agu", "3620": "org:consultoria-geral-da-uniao", "3621": "org:corregedoria-geral-da-agu", "16478": "org:creden", "308878": "org:ouvidoria-geral-da-previdencia-social", "78": "org:pgfn", "3619": "org:procuradoria-geral-da-uniao", "69685": "org:procuradoria-geral-federal", "266735": "org:conselho-superior-da-dpu", "266734": "org:corregedoria-geral-da-dpu" };

// Raízes que usam os dois níveis de ato interno mesmo tendo unidades de lei ou decreto (o SIORG marca como ato
// interno órgãos que a lei cria, ex.: o Conselho Superior da DPU).
const SEMPRE_ATO_INTERNO = new Set(["260668", "2"]);

// Unidades criadas depois de 1º/10/2026 (D14), que o SIORG já traz e o retrato não deve mostrar.
const POSTERIORES: Record<string, string> = {
  "676756": "Decreto 13.139/2026 (DOU de 19/10/2026)",
  "676776": "Decreto 13.139/2026 (DOU de 19/10/2026)",
  "676796": "Decreto 13.139/2026 (DOU de 19/10/2026)",
  "676816": "Decreto 13.139/2026 (DOU de 19/10/2026)",
};

async function baixar() {
  const r = await fetch(URL_RESUMIDA, { headers: { "User-Agent": "Mozilla/5.0 (br-grama)" } });
  if (!r.ok) throw new Error(`${r.status} em ${URL_RESUMIDA}`);
  const brutas = ((await r.json()) as { unidades: UnidadeBruta[] }).unidades;
  const unidades: Unidade[] = brutas.map((u) => ({
    codigo: cod(u.codigoUnidade),
    pai: cod(u.codigoUnidadePai),
    orgao: cod(u.codigoOrgaoEntidade),
    tipo: cod(u.codigoTipoUnidade),
    nome: u.nome.trim(),
    sigla: (u.sigla ?? "").trim(),
    nivel: u.nivelNormatizacao,
  }));
  // Também os dois primeiros níveis de ato interno abaixo de cada raiz: agências e autarquias têm a estrutura toda
  // em regimento interno, e sem isso a árvore delas ficaria vazia.
  const paiDe = new Map(unidades.map((u) => [u.codigo, u.pai]));
  const perto = (u: Unidade) => !!RAIZES[u.pai] || !!RAIZES[paiDe.get(u.pai) ?? ""];
  const guardar = unidades.filter((u) => u.nivel === "LEI_DECRETO" || u.tipo === "orgao" || u.tipo === "entidade" || u.tipo === "ente" || perto(u));
  // Para cada raiz, quantas unidades de ato interno há abaixo dela, sem atravessar entidades e órgãos.
  const filhosDe = new Map<string, Unidade[]>();
  for (const u of unidades) filhosDe.set(u.pai, [...(filhosDe.get(u.pai) ?? []), u]);
  const atoInterno: Record<string, number> = {};
  for (const raiz of Object.keys(RAIZES)) {
    let n = 0;
    const pilha = [...(filhosDe.get(raiz) ?? [])];
    while (pilha.length) {
      const u = pilha.pop()!;
      if (u.tipo === "entidade" || u.tipo === "orgao") continue;
      if (u.nivel !== "LEI_DECRETO") n++;
      pilha.push(...(filhosDe.get(u.codigo) ?? []));
    }
    atoInterno[raiz] = n;
  }
  const dir = join(DIR_BRUTO, HOJE);
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, "estrutura-lei-decreto.json"),
    JSON.stringify({ fonte: URL_RESUMIDA, baixado_em: HOJE, total_unidades: unidades.length, unidades: guardar, ato_interno_abaixo: atoInterno }),
  );
  console.log(`${unidades.length} unidades no SIORG; ${guardar.length} guardadas (lei ou decreto, órgãos e entidades).`);
}

function lerBruto() {
  const datas = (existsSync(DIR_BRUTO) ? readdirSync(DIR_BRUTO).sort() : []).filter((d) => existsSync(join(DIR_BRUTO, d, "estrutura-lei-decreto.json")));
  if (!datas.length) throw new Error("rode a etapa baixar antes");
  const data = datas.at(-1)!;
  return { data, ...(JSON.parse(readFileSync(join(DIR_BRUTO, data, "estrutura-lei-decreto.json"), "utf8")) as { unidades: Unidade[]; ato_interno_abaixo: Record<string, number> }) };
}

function gerar(notas?: string) {
  const { data, unidades, ato_interno_abaixo } = lerBruto();
  const porCodigo = new Map(unidades.map((u) => [u.codigo, u]));
  const filhos = new Map<string, Unidade[]>();
  for (const u of unidades) filhos.set(u.pai, [...(filhos.get(u.pai) ?? []), u]);
  const pasta = join(RAIZ, "dados", "estruturas");
  mkdirSync(pasta, { recursive: true });
  for (const n of readdirSync(pasta)) rmSync(join(pasta, n));
  const nomeDe = (id: string) => {
    const [, slug] = id.split(":");
    return (JSON.parse(readFileSync(join(RAIZ, "dados", "orgaos", `${slug}.json`), "utf8")) as { nome: string }).nome;
  };
  const verificacao = notas
    ? { status: "verificado", em: HOJE, tarefa: "verificacao-f4-siorg", notas }
    : { status: "coletado", em: HOJE, tarefa: TAREFA, notas: "Gerado por scripts/importar/siorg.ts a partir do resumo em pesquisa/brutos/siorg/." };
  let n = 0;
  for (const [raiz, de] of Object.entries(RAIZES)) {
    const r = porCodigo.get(raiz);
    if (!r) {
      console.log(`  ${raiz} (${de}) não está no SIORG de ${data}`);
      continue;
    }
    // Desce pela árvore só por unidades de lei ou decreto do mesmo órgão; entidades vinculadas ficam à parte.
    const arvore: Unidade[] = [];
    const vinculadas: Unidade[] = [];
    const atoInterno = ato_interno_abaixo[raiz] ?? 0;
    const pilha = [...(filhos.get(raiz) ?? [])];
    while (pilha.length) {
      const u = pilha.shift()!;
      if (u.tipo === "entidade" || u.tipo === "orgao") {
        if (u.tipo === "entidade") vinculadas.push(u);
        continue;
      }
      if (u.nivel !== "LEI_DECRETO" || POSTERIORES[u.codigo]) continue;
      arvore.push(u);
      pilha.push(...(filhos.get(u.codigo) ?? []));
    }
    // Sem nada por lei ou decreto (agências, autarquias): os dois primeiros níveis de ato interno.
    // Também quando a árvore só tem colegiados (ANM, ANPD, Correios) ou a raiz está na lista explícita.
    const soAtoInterno = !arvore.some((u) => u.tipo === "unidade-administrativa") || SEMPRE_ATO_INTERNO.has(raiz);
    if (soAtoInterno) {
      const nivel1 = (filhos.get(raiz) ?? []).filter((u) => u.nivel !== "LEI_DECRETO" && u.tipo !== "entidade" && u.tipo !== "orgao");
      const nivel2 = nivel1.flatMap((u) => (filhos.get(u.codigo) ?? []).filter((f) => f.tipo !== "entidade" && f.tipo !== "orgao"));
      const ja = new Set(arvore.map((u) => u.codigo));
      arvore.push(...[...nivel1, ...nivel2].filter((u) => !ja.has(u.codigo) && !POSTERIORES[u.codigo]));
    }
    if (!arvore.length) {
      console.log(`  ${raiz} (${de}): sem unidades, sem estrutura`);
      continue;
    }
    const mapaDe = (c: string) => {
      const alvo = RAIZES[c] ?? MAPA_UNIDADES[c];
      return alvo && alvo !== de ? { mapa: alvo } : {};
    };
    const slug = de.split(":")[1];
    const entidade = {
      id: `est:${slug}`,
      tipo: "estrutura",
      nome: `Estrutura de ${nomeDe(de)} no SIORG`,
      resumo: `${arvore.length} unidades ${soAtoInterno ? "criadas por lei ou decreto ou nos dois primeiros níveis de ato interno" : "criadas por lei ou decreto"}${vinculadas.length ? ` e ${vinculadas.length} entidades vinculadas` : ""}, segundo o SIORG em ${data.split("-").reverse().join("/")}.`,
      de,
      siorg: raiz,
      consulta: data,
      unidades: arvore.map((u) => ({ codigo: u.codigo, nome: u.nome, ...(u.sigla ? { sigla: u.sigla } : {}), pai: u.pai, ...(u.tipo === "unidade-colegiada" ? { colegiada: true } : {}), ...mapaDe(u.codigo) })),
      ...(vinculadas.length ? { vinculadas: vinculadas.map((u) => ({ codigo: u.codigo, nome: u.nome, ...(u.sigla ? { sigla: u.sigla } : {}), ...mapaDe(u.codigo) })) } : {}),
      ato_interno: Math.max(0, atoInterno - arvore.filter((u) => u.nivel !== "LEI_DECRETO").length),
      ...(soAtoInterno ? { so_ato_interno: true } : {}),
      vigencia: { de: null, ate: null },
      fontes: [{ ref: FONTE, dispositivo: `estrutura resumida baixada em ${data}, unidade ${raiz} e descendentes com nível "LEI_DECRETO"` }],
      confianca: "oficial",
      verificacao,
      notas: `Retrato do SIORG na data da consulta (${data}), não em 1º/10/2026: mudanças de estrutura feitas entre as duas datas podem aparecer. O SIORG registra o nível de normatização de cada unidade; as de ato interno (portarias, regimentos internos) só entram na contagem.`,
    };
    writeFileSync(join(pasta, `${slug}.json`), JSON.stringify(entidade, null, 2) + "\n");
    n++;
  }
  console.log(`${n} estruturas gravadas em dados/estruturas/.`);
}

const etapa = process.argv[2];
if (etapa === "baixar") await baixar();
else if (etapa === "gerar") gerar(process.argv[3]);
else console.log("uso: npx tsx scripts/importar/siorg.ts baixar|gerar [notas]");
