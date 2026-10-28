// Cobertura da Constituição (D04): para cada artigo da CF e do ADCT, quantas entidades o citam em fontes.
// Citar não é cobrir: o relatório só mostra onde olhar. Uso: npx tsx scripts/cobertura-cf.ts
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { RAIZ, lerArquivos, type Entidade } from "./lib/dados.ts";

const COPIA_CF = "pesquisa/brutos/planalto-cf/2026-10-16/cf.htm";
const SAIDA = "pesquisa/cobertura-cf.md";

// 1. Artigos do texto vigente (o Planalto mostra o texto revogado riscado, em <strike>).
const html = new TextDecoder("latin1").decode(readFileSync(join(RAIZ, COPIA_CF)));
const texto = html
  .replace(/<strike>[\s\S]*?<\/strike>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&nbsp;/g, " ")
  .replace(/\s+/g, " ");
const inicioAdct = texto.search(/ATO DAS DISPOSIÇÕES CONSTITUCIONAIS TRANSITÓRIAS/);
if (inicioAdct < 0) throw new Error("início do ADCT não encontrado na cópia da CF");

interface Artigo { chave: string; trecho: string; revogado: boolean }
function artigos(parte: string, prefixo: string): Artigo[] {
  const lista: Artigo[] = [];
  const vistos = new Set<string>();
  const re = /Art\. (\d+)(?:º|°)?(?:-([A-Z]))?\.? /g;
  const marcas = [...parte.matchAll(re)];
  marcas.forEach((m, i) => {
    const chave = `${prefixo}${m[1]}${m[2] ? `-${m[2]}` : ""}`;
    if (vistos.has(chave)) return;
    vistos.add(chave);
    const fim = marcas[i + 1]?.index ?? parte.length;
    const corpo = parte.slice(m.index! + m[0].length, fim).trim();
    lista.push({ chave, trecho: corpo.slice(0, 110), revogado: /^\(?Revogad/i.test(corpo) });
  });
  return lista;
}
const todos = [...artigos(texto.slice(0, inicioAdct), "art. "), ...artigos(texto.slice(inicioAdct), "ADCT, art. ")];

// 2. Citações nas fontes das entidades.
const citacoes = new Map<string, Set<string>>();
// (?!\d) impede que o número encolha ("89, I" virar 8) quando o lookahead de inciso força o recuo.
const NUM = String.raw`\d+(?!\d)(?:º|°)?(?:-[A-Z])?`;
function chavesDe(dispositivo: string): string[] {
  const chaves: string[] = [];
  for (const segmento of dispositivo.split(";")) {
    const adct = /ADCT/.test(segmento);
    const prefixo = adct ? "ADCT, art. " : "art. ";
    for (const m of segmento.matchAll(new RegExp(String.raw`\barts?\.\s*(${NUM}(?:\s*(?:,|e|a)\s*${NUM}(?![º°]?\s*[,;]?\s*[IVXLC]+\b))*)`, "gi"))) {
      const nums = m[1].split(/\s*(?:,|\be\b)\s*/);
      for (const parte of nums) {
        // Faixa de artigos com letra do mesmo número (ex.: "167-B a 167-G").
        const letras = parte.match(/^(\d+)-([A-Z])\s+a\s+\1-([A-Z])/);
        const faixa = parte.match(new RegExp(String.raw`^(\d+)(?:º|°)?\s+a\s+(\d+)`));
        if (letras) {
          for (let c = letras[2].charCodeAt(0); c <= letras[3].charCodeAt(0); c++) chaves.push(`${prefixo}${letras[1]}-${String.fromCharCode(c)}`);
        } else if (faixa) {
          for (let n = Number(faixa[1]); n <= Number(faixa[2]); n++) chaves.push(`${prefixo}${n}`);
        } else {
          const um = parte.match(/^(\d+)(?:º|°)?(-[A-Z])?/);
          if (um) chaves.push(`${prefixo}${um[1]}${um[2] ?? ""}`);
        }
      }
    }
  }
  return chaves;
}
function percorrer(valor: unknown, visitar: (o: Record<string, unknown>) => void) {
  if (Array.isArray(valor)) valor.forEach((v) => percorrer(v, visitar));
  else if (valor && typeof valor === "object") {
    visitar(valor as Record<string, unknown>);
    Object.values(valor).forEach((v) => percorrer(v, visitar));
  }
}
for (const arq of lerArquivos()) {
  const ent = arq.conteudo as Entidade | null;
  if (!ent?.id || ent.tipo === "ente") continue;
  percorrer(ent, (o) => {
    if (o.ref !== "norma:cf-1988" || typeof o.dispositivo !== "string") return;
    for (const chave of chavesDe(o.dispositivo)) {
      if (!citacoes.has(chave)) citacoes.set(chave, new Set());
      citacoes.get(chave)!.add(ent.id);
    }
  });
}

// 3. Relatório.
const vigentes = todos.filter((a) => !a.revogado);
const citados = vigentes.filter((a) => citacoes.has(a.chave));
const semCitacao = vigentes.filter((a) => !citacoes.has(a.chave));
const pct = (n: number, d: number) => `${((100 * n) / d).toFixed(1).replace(".", ",")}%`;
const linhas = [
  "# Cobertura da Constituição por citação",
  "",
  `Gerado por \`scripts/cobertura-cf.ts\` a partir de \`${COPIA_CF}\` e das fontes em \`dados/\`. Citar não é cobrir: um artigo pode ser citado sem que o mapa tenha a entidade que ele prevê, e muitos artigos (direitos, princípios, ordem social) podem estar fora do escopo de estrutura do Estado. Use a lista para decidir, artigo por artigo.`,
  "",
  `- Artigos vigentes: ${vigentes.length} (CF e ADCT; os revogados, riscados no Planalto, ficam de fora)`,
  `- Citados em alguma fonte: ${citados.length} (${pct(citados.length, vigentes.length)})`,
  `- CF: ${citados.filter((a) => !a.chave.startsWith("ADCT")).length} de ${vigentes.filter((a) => !a.chave.startsWith("ADCT")).length}; ADCT: ${citados.filter((a) => a.chave.startsWith("ADCT")).length} de ${vigentes.filter((a) => a.chave.startsWith("ADCT")).length}`,
  "",
  "## Sem citação",
  "",
  ...semCitacao.map((a) => `- ${a.chave}: ${a.trecho}…`),
  "",
  "## Citados (número de entidades)",
  "",
  citados.map((a) => `${a.chave} (${citacoes.get(a.chave)!.size})`).join(" · "),
  "",
];
const desconhecidas = [...citacoes.keys()].filter((k) => !todos.some((a) => a.chave === k));
if (desconhecidas.length) {
  linhas.push("## Citações que não batem com nenhum artigo", "", "Podem ser erro de dispositivo ou do leitor deste script.", "");
  for (const k of desconhecidas.sort()) linhas.push(`- ${k}: ${[...citacoes.get(k)!].slice(0, 5).join(", ")}`);
  linhas.push("");
}
writeFileSync(join(RAIZ, SAIDA), linhas.join("\n"));
console.log(`${citados.length} de ${vigentes.length} artigos vigentes citados (${pct(citados.length, vigentes.length)}). Relatório: ${SAIDA}`);
