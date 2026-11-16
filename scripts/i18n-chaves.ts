// Confere as chaves da interface traduzida (D66): acha as chamadas t("...") em web/src e os
// textos marcados com data-t e data-t-attr em web/index.html, e compara com i18n/<idioma>/interface.json.
// Lista as chaves que faltam, as que sobram e as traduções cujas variáveis ({nome}) não batem
// com as do texto original. Sai com erro se faltar alguma chave ou se alguma variável não bater.
// Uso: npm run i18n:chaves [-- en] [-- --json]   (--json imprime as que faltam, prontas para colar)
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { RAIZ } from "./lib/dados.ts";

const args = process.argv.slice(2);
const idioma = args.find((a) => !a.startsWith("--")) ?? "en";
const comoJson = args.includes("--json");

const usadas = new Map<string, string>(); // chave → primeiro arquivo onde aparece
const usar = (chave: string, onde: string) => {
  if (chave && !usadas.has(chave)) usadas.set(chave, onde);
};

// Chamadas t("...") com texto literal entre aspas duplas.
const dirSrc = join(RAIZ, "web", "src");
for (const arq of readdirSync(dirSrc).filter((a) => a.endsWith(".ts"))) {
  const texto = readFileSync(join(dirSrc, arq), "utf8");
  for (const m of texto.matchAll(/(?<![\w.$])t\(\s*"((?:[^"\\\n]|\\.)*)"/g)) usar(JSON.parse(`"${m[1]}"`) as string, `web/src/${arq}`);
}

// index.html: data-t (texto do elemento, sem marcação dentro) e data-t-attr="atributo outro".
const decodificar = (s: string) => s.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const html = readFileSync(join(RAIZ, "web", "index.html"), "utf8");
for (const m of html.matchAll(/<([a-z][a-z0-9]*)\b([^>]*)>([^<]*)/g)) {
  const [, , atributos, texto] = m;
  if (/\sdata-t(?=[\s>/]|$)/.test(atributos)) usar(decodificar(texto.trim()), "web/index.html");
  const lista = atributos.match(/\sdata-t-attr="([^"]*)"/)?.[1];
  for (const nome of lista?.split(" ").filter(Boolean) ?? []) {
    const valor = atributos.match(new RegExp(`\\s${nome}="([^"]*)"`))?.[1];
    if (valor) usar(decodificar(valor), "web/index.html");
    else console.log(`aviso: index.html marca ${nome} para traduzir, mas o atributo não existe: <${m[1]}${atributos}>`);
  }
}

const arqInterface = join(RAIZ, "i18n", idioma, "interface.json");
const traducoes: Record<string, string> = existsSync(arqInterface) ? JSON.parse(readFileSync(arqInterface, "utf8")) : {};

const variaveis = (s: string) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",");
const faltam = [...usadas.keys()].filter((k) => !traducoes[k]);
const sobram = Object.keys(traducoes).filter((k) => !usadas.has(k));
const naoBatem = Object.entries(traducoes).filter(([k, v]) => usadas.has(k) && v && variaveis(k) !== variaveis(v));

if (comoJson) {
  console.log(JSON.stringify(Object.fromEntries(faltam.map((k) => [k, ""])), null, 2));
} else {
  console.log(`${usadas.size} chaves usadas na interface; ${Object.keys(traducoes).length} em i18n/${idioma}/interface.json.`);
  if (faltam.length) console.log(`\nFaltam ${faltam.length}:\n${faltam.map((k) => `  ${JSON.stringify(k)}  (${usadas.get(k)})`).join("\n")}`);
  if (sobram.length) console.log(`\nSobram ${sobram.length} (não usadas no código):\n${sobram.map((k) => `  ${JSON.stringify(k)}`).join("\n")}`);
  if (naoBatem.length) console.log(`\nVariáveis diferentes do original em ${naoBatem.length}:\n${naoBatem.map(([k, v]) => `  ${JSON.stringify(k)} → ${JSON.stringify(v)}`).join("\n")}`);
  if (!faltam.length && !sobram.length && !naoBatem.length) console.log("Tudo certo.");
}
if (faltam.length || naoBatem.length) process.exitCode = 1;
