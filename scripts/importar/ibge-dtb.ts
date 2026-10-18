// Importa estados, DF e municípios da Divisão Territorial Brasileira (DTB) do IBGE.
// Uso: npx tsx scripts/importar/ibge-dtb.ts <caminho do DTB_AAAA.zip>
//
// Fonte: https://geoftp.ibge.gov.br/organizacao_do_territorio/estrutura_territorial/divisao_territorial/
// Lê a planilha RELATORIO_DTB_BRASIL_AAAA_MUNICIPIOS.ods. Não sobrescreve entes já existentes
// (que podem ter sido pesquisados e revisados à mão); só confere o código IBGE deles.
//
// O IBGE lista Brasília como município para fins estatísticos, mas o DF não pode ser dividido
// em municípios (CF, art. 32): o DF entra como ente distrital, e Brasília não entra.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { unzipSync, strFromU8 } from "fflate";

const [arquivoZip] = process.argv.slice(2);
if (!arquivoZip) throw new Error("Informe o caminho do DTB_AAAA.zip");

const DADOS = join(import.meta.dirname, "..", "..", "dados", "entes");
const HOJE = new Date().toISOString().slice(0, 10);
const FONTE = "fonte:ibge-dtb-2025";

// Códigos IBGE das unidades da federação → sigla.
const UF: Record<string, string> = {
  "11": "RO", "12": "AC", "13": "AM", "14": "RR", "15": "PA", "16": "AP", "17": "TO",
  "21": "MA", "22": "PI", "23": "CE", "24": "RN", "25": "PB", "26": "PE", "27": "AL", "28": "SE", "29": "BA",
  "31": "MG", "32": "ES", "33": "RJ", "35": "SP",
  "41": "PR", "42": "SC", "43": "RS",
  "50": "MS", "51": "MT", "52": "GO", "53": "DF",
};

const slug = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const entidadesXml = (s: string) =>
  s.replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

// Leitura mínima de ODS: linhas e células de texto (a planilha do IBGE não tem células mescladas nos dados).
function linhasOds(conteudo: string): string[][] {
  return [...conteudo.matchAll(/<table:table-row.*?<\/table:table-row>/gs)].map(([linha]) =>
    [...linha.matchAll(/<table:table-cell[^>]*?(?:\/>|>(.*?)<\/table:table-cell>)/gs)].map(([, c]) =>
      entidadesXml((c ?? "").replace(/<[^>]+>/g, "")).trim(),
    ),
  );
}

const zip = unzipSync(readFileSync(arquivoZip));
const nomeOds = Object.keys(zip).find((n) => /RELATORIO_DTB_BRASIL_\d{4}_MUNICIPIOS\.ods$/.test(n));
if (!nomeOds) throw new Error("Planilha de municípios não encontrada no zip");
const ods = unzipSync(zip[nomeOds]);
const linhas = linhasOds(strFromU8(ods["content.xml"]));

const cabecalho = linhas.findIndex((l) => l[0] === "UF" && l.includes("Código Município Completo"));
const col = (nome: string) => linhas[cabecalho].indexOf(nome);
const [cUF, cNomeUF, cCodigo, cNome] = [col("UF"), col("Nome_UF"), col("Código Município Completo"), col("Nome_Município")];
const dados = linhas.slice(cabecalho + 1).filter((l) => /^\d{7}$/.test(l[cCodigo] ?? ""));

// Conferências: códigos únicos, toda UF conhecida, nenhum nome vazio.
const codigos = new Set(dados.map((l) => l[cCodigo]));
if (codigos.size !== dados.length) throw new Error("Códigos de município repetidos");
for (const l of dados) {
  if (!UF[l[cUF]] || !l[cNome] || !l[cCodigo].startsWith(l[cUF])) throw new Error(`Linha inesperada: ${l.join(" | ")}`);
}

const base = () => ({
  vigencia: { de: null, ate: null, nota: "Data de criação não importada; o ente existia na data-base da DTB (31/12/2025)." },
  fontes: [{ ref: FONTE, dispositivo: null }],
  confianca: "oficial",
  verificacao: {
    status: "verificado",
    em: HOJE,
    tarefa: "importacao-ibge-dtb",
    notas: "Importação automática da DTB 2025 do IBGE (scripts/importar/ibge-dtb.ts), conferida pelo script: códigos únicos de 7 dígitos, prefixo da UF e contagem.",
  },
});

let criados = 0;
let existentes = 0;
const gravar = (slugArquivo: string, entidade: Record<string, unknown>) => {
  const caminho = join(DADOS, `${slugArquivo}.json`);
  if (existsSync(caminho)) {
    const atual = JSON.parse(readFileSync(caminho, "utf8"));
    if (atual.codigo_ibge && atual.codigo_ibge !== entidade.codigo_ibge) {
      throw new Error(`${slugArquivo}: código IBGE diverge (${atual.codigo_ibge} × ${entidade.codigo_ibge})`);
    }
    existentes++;
    return;
  }
  writeFileSync(caminho, JSON.stringify(entidade, null, 2) + "\n");
  criados++;
};

// Estados e DF
const ufs = new Map(dados.map((l) => [l[cUF], l[cNomeUF]]));
for (const [codigo, nome] of ufs) {
  const sigla = UF[codigo];
  const df = sigla === "DF";
  gravar(sigla.toLowerCase(), {
    id: `ente:${sigla.toLowerCase()}`,
    tipo: "ente",
    nome,
    sigla,
    resumo: df
      ? "Ente federativo com competências de estado e de município; não se divide em municípios."
      : `Estado da federação (${sigla}).`,
    tipo_ente: df ? "distrito-federal" : "estado",
    uf: sigla,
    codigo_ibge: codigo,
    ...base(),
    ...(df ? { fontes: [{ ref: FONTE, dispositivo: null }, { ref: "norma:cf-1988", dispositivo: "art. 32, caput" }] } : {}),
  });
}

// Municípios (Brasília fica de fora: ver o comentário no topo)
let municipios = 0;
for (const l of dados) {
  const sigla = UF[l[cUF]];
  if (sigla === "DF") continue;
  municipios++;
  const nome = l[cNome];
  gravar(`${sigla.toLowerCase()}-${slug(nome)}`, {
    id: `ente:${sigla.toLowerCase()}-${slug(nome)}`,
    tipo: "ente",
    nome,
    resumo: `Município de ${sigla}.`,
    tipo_ente: "municipio",
    uf: sigla,
    contido_em: `ente:${sigla.toLowerCase()}`,
    codigo_ibge: l[cCodigo],
    ...base(),
  });
}

console.log(`DTB: ${ufs.size} UFs, ${dados.length} linhas de município (${municipios} municípios + Brasília, no DF).`);
console.log(`Entes criados: ${criados}; já existentes (mantidos): ${existentes}.`);
