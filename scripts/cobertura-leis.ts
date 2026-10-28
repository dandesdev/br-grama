// Cobertura das leis estruturantes (D04, D49): soma os quadros "Cobertura" das tarefas da fase 2
// (pesquisa/fila/f2-*.md). Cada quadro é uma tabela por lei, com uma linha por artigo ou faixa de
// artigos e a classe (coberto, parcial, lacuna, fora). Uso: npx tsx scripts/cobertura-leis.ts
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { RAIZ } from "./lib/dados.ts";

const SAIDA = "pesquisa/cobertura-leis.md";
const CLASSES = ["coberto", "parcial", "lacuna", "fora"] as const;
type Classe = (typeof CLASSES)[number];

/** Quantos artigos uma célula descreve: "art. 5º" = 1; "arts. 10 a 19" = 10; "arts. 1º, 3º e 7º" = 3. */
export function contarArtigos(celula: string): number {
  const texto = celula.replace(/[º°ª]/g, "").replace(/\s+/g, " ");
  let total = 0;
  // Faixas primeiro ("10 a 19", "10-A a 10-F" conta pelas letras).
  const semFaixas = texto.replace(/(\d+)(?:-([A-Z]))?\s+a\s+(\d+)(?:-([A-Z]))?/g, (_, a, la, b, lb) => {
    if (a === b && la && lb) total += lb.charCodeAt(0) - la.charCodeAt(0) + 1;
    else total += Math.max(1, Number(b) - Number(a) + 1);
    return " ";
  });
  // Números soltos que sobraram depois de "art."/"arts." (ignora incisos romanos e parágrafos).
  const soltos = semFaixas.replace(/§+\s*\d+/g, " ").match(/\b\d+(?:-[A-Z])?\b/g) ?? [];
  return total + soltos.length;
}

interface Quadro { lei: string; tarefa: string; contagem: Record<Classe, number> }

const quadros: Quadro[] = [];
for (const nome of readdirSync(join(RAIZ, "pesquisa", "fila")).filter((n) => /^f2-.*\.md$/.test(n)).sort()) {
  const texto = readFileSync(join(RAIZ, "pesquisa", "fila", nome), "utf8");
  const inicio = texto.search(/^## Cobertura\s*$/m);
  if (inicio < 0) continue;
  const fim = texto.slice(inicio + 1).search(/^## /m);
  const secao = texto.slice(inicio, fim < 0 ? undefined : inicio + 1 + fim);
  let atual: Quadro | null = null;
  for (const linha of secao.split("\n")) {
    const titulo = linha.match(/^#{3,4}\s+(.+)$/) ?? linha.match(/^\*\*(.+?)\*\*\s*$/);
    if (titulo) {
      atual = { lei: titulo[1].trim(), tarefa: nome.replace(/\.md$/, ""), contagem: { coberto: 0, parcial: 0, lacuna: 0, fora: 0 } };
      quadros.push(atual);
      continue;
    }
    if (!atual || !linha.startsWith("|")) continue;
    const celulas = linha.split("|").slice(1, -1).map((c) => c.trim());
    if (celulas.length < 2) continue;
    const classe = celulas[1].toLowerCase().replace(/[`*]/g, "") as Classe;
    if (!CLASSES.includes(classe)) continue;
    atual.contagem[classe] += contarArtigos(celulas[0]);
  }
}

const pct = (n: number, d: number) => (d ? `${((100 * n) / d).toFixed(1).replace(".", ",")}%` : "—");
const comDados = quadros.filter((q) => CLASSES.some((c) => q.contagem[c]));
const linhas = [
  "# Cobertura das leis estruturantes",
  "",
  "Gerado por `scripts/cobertura-leis.ts` a partir dos quadros \"Cobertura\" das tarefas `pesquisa/fila/f2-*.md` (D49). Percentual = (coberto + fora do escopo) / artigos classificados.",
  "",
  "| Lei | Tarefa | Coberto | Parcial | Lacuna | Fora | Total | Cobertura |",
  "|---|---|---:|---:|---:|---:|---:|---:|",
  ...comDados.map((q) => {
    const t = CLASSES.reduce((s, c) => s + q.contagem[c], 0);
    return `| ${q.lei} | ${q.tarefa} | ${q.contagem.coberto} | ${q.contagem.parcial} | ${q.contagem.lacuna} | ${q.contagem.fora} | ${t} | ${pct(q.contagem.coberto + q.contagem.fora, t)} |`;
  }),
  "",
];
const soma = (c: Classe) => comDados.reduce((s, q) => s + q.contagem[c], 0);
const total = CLASSES.reduce((s, c) => s + soma(c), 0);
linhas.push(`Total: ${total} artigos classificados; cobertura ${pct(soma("coberto") + soma("fora"), total)} (${soma("lacuna")} em lacuna, ${soma("parcial")} parciais).`, "");
writeFileSync(join(RAIZ, SAIDA), linhas.join("\n"));
console.log(`${comDados.length} leis, ${total} artigos classificados, cobertura ${pct(soma("coberto") + soma("fora"), total)}. Relatório: ${SAIDA}`);
