// Gera web/public/dados/grafo.json: todas as entidades, vocabulários e o layout pré-calculado (D29).
// Uso: npm run build:dados
//
// O layout tem posições semânticas (D21): cada região (povo, Poderes, objetos de competência,
// entes subnacionais) é diagramada separadamente pelo ELK e depois posicionada numa grade fixa.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import ELK, { type ElkNode, type ElkExtendedEdge } from "elkjs/lib/elk.bundled.js";
import { RAIZ, lerArquivos, lerJson, vigenteEm, type Entidade } from "./lib/dados.ts";

type Regiao = "povo" | "legislativo" | "executivo" | "judiciario" | "funcoes" | "objetos" | "entes";

// Grade de regiões: linhas de cima para baixo, regiões da esquerda para a direita.
const GRADE: Regiao[][] = [["povo"], ["legislativo", "executivo", "judiciario", "funcoes"], ["objetos"], ["entes"]];
const SUBNACIONAIS = new Set(["estadual", "distrital", "municipal"]);
const ESPACO_REGIOES = 120;

const DATA_REFERENCIA = lerJson<{ data_referencia: string }>("br-grama.config.json").data_referencia;

const entidades = new Map<string, Entidade>();
for (const arq of lerArquivos()) {
  const e = arq.conteudo as Entidade | null;
  if (e && typeof e.id === "string") entidades.set(e.id, e);
}
const vocabRelacoes = lerJson<Record<string, { grupo: string }>>("esquema/vocabularios/relacoes.json");

// Nós do mapa, em vigor na data de referência: órgãos (exceto partidos, que aparecem só no
// painel), cargos e objetos de competência.
const ehNo = (e: Entidade | undefined): e is Entidade =>
  !!e &&
  vigenteEm(e as Parameters<typeof vigenteEm>[0], DATA_REFERENCIA) &&
  (e.tipo === "cargo" || e.tipo === "objeto" || (e.tipo === "orgao" && e.tipo_orgao !== "partido-politico"));

const paiDe = (e: Entidade): string | undefined => {
  const pai = (e.tipo === "cargo" ? e.orgao : e.contido_em) as string | undefined;
  return pai && ehNo(entidades.get(pai)) ? pai : undefined;
};

const raizDe = (id: string): Entidade => {
  let e = entidades.get(id)!;
  for (let p = paiDe(e); p; p = paiDe(e)) e = entidades.get(p)!;
  return e;
};

const ancestrais = (id: string): Set<string> => {
  const s = new Set<string>();
  for (let p = paiDe(entidades.get(id)!); p; p = paiDe(entidades.get(p)!)) s.add(p);
  return s;
};

function regiaoDe(id: string): Regiao {
  const r = raizDe(id);
  if (r.arquetipo || SUBNACIONAIS.has(r.esfera as string)) return "entes";
  if (r.tipo === "objeto") return "objetos";
  switch (r.poder) {
    case "povo": return "povo";
    case "legislativo": return "legislativo";
    case "executivo": return "executivo";
    case "judiciario": return "judiciario";
    default: return "funcoes";
  }
}

// Tamanho estimado de um nó folha (o rótulo quebra em linhas no navegador).
function tamanho(e: Entidade, temOcupante: boolean) {
  const largura = Math.min(220, Math.max(120, e.nome.length * 6.4 + 28));
  const linhas = Math.ceil((e.nome.length * 6.4) / (largura - 24));
  return { width: Math.round(largura), height: 22 + linhas * 15 + (temOcupante ? 16 : 0) };
}

const nos = [...entidades.values()].filter(ehNo);
const filhos = new Map<string, Entidade[]>();
for (const n of nos) {
  const p = paiDe(n);
  if (p) filhos.set(p, [...(filhos.get(p) ?? []), n]);
}
const ocupados = new Set(
  [...entidades.values()].filter((e) => e.tipo === "relacao" && e.relacao === "ocupa").map((e) => e.para as string),
);

// Arestas que entram no layout: entre nós da mesma região, sem ligar um nó ao próprio contêiner.
function arestasDaRegiao(regiao: Regiao): ElkExtendedEdge[] {
  return [...entidades.values()]
    .filter((e) => e.tipo === "relacao" && e.relacao !== "ocupa" && vocabRelacoes[e.relacao as string])
    .filter((e) => vigenteEm(e as Parameters<typeof vigenteEm>[0], DATA_REFERENCIA))
    .filter((e) => ehNo(entidades.get(e.de as string)) && ehNo(entidades.get(e.para as string)))
    .filter((e) => regiaoDe(e.de as string) === regiao && regiaoDe(e.para as string) === regiao)
    .filter((e) => !ancestrais(e.de as string).has(e.para as string) && !ancestrais(e.para as string).has(e.de as string))
    .map((e) => ({ id: e.id, sources: [e.de as string], targets: [e.para as string] }));
}

function elkNo(e: Entidade): ElkNode {
  const f = filhos.get(e.id);
  if (!f) return { id: e.id, ...tamanho(e, ocupados.has(e.id)) };
  return {
    id: e.id,
    layoutOptions: { "elk.padding": "[top=36,left=18,bottom=18,right=18]" },
    children: f.map(elkNo),
  };
}

const elk = new ELK();
const layout: Record<string, { x: number; y: number; w: number; h: number }> = {};

function registrar(no: ElkNode, dx: number, dy: number) {
  const x = dx + (no.x ?? 0);
  const y = dy + (no.y ?? 0);
  layout[no.id] = { x, y, w: no.width ?? 0, h: no.height ?? 0 };
  for (const c of no.children ?? []) registrar(c, x, y);
}

const caixas: Partial<Record<Regiao, ElkNode>> = {};
for (const regiao of GRADE.flat()) {
  const raizes = nos.filter((n) => !paiDe(n) && regiaoDe(n.id) === regiao);
  if (!raizes.length) continue;
  caixas[regiao] = await elk.layout({
    id: `regiao:${regiao}`,
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "DOWN",
      "elk.hierarchyHandling": "INCLUDE_CHILDREN",
      "elk.spacing.nodeNode": "28",
      "elk.layered.spacing.nodeNodeBetweenLayers": "48",
      "elk.layered.nodePlacement.strategy": "BRANDES_KOEPF",
    },
    children: raizes.map(elkNo),
    edges: arestasDaRegiao(regiao),
  });
}

// Posiciona as regiões na grade, cada linha centralizada.
const larguraLinha = (linha: Regiao[]) =>
  linha.reduce((s, r) => s + (caixas[r] ? caixas[r]!.width! + ESPACO_REGIOES : 0), -ESPACO_REGIOES);
const larguraTotal = Math.max(...GRADE.map(larguraLinha));
const regioes: Record<string, { x: number; y: number; w: number; h: number }> = {};
let y = 0;
for (const linha of GRADE) {
  let x = (larguraTotal - larguraLinha(linha)) / 2;
  let alturaLinha = 0;
  for (const r of linha) {
    const c = caixas[r];
    if (!c) continue;
    regioes[r] = { x, y, w: c.width!, h: c.height! };
    for (const filho of c.children ?? []) registrar(filho, x, y);
    x += c.width! + ESPACO_REGIOES;
    alturaLinha = Math.max(alturaLinha, c.height!);
  }
  if (alturaLinha) y += alturaLinha + ESPACO_REGIOES;
}

const saida = {
  gerado_em: new Date().toISOString(),
  data_referencia: DATA_REFERENCIA,
  vocabularios: {
    relacoes: vocabRelacoes,
    tipos_orgao: lerJson("esquema/vocabularios/tipos-orgao.json"),
    gerais: lerJson("esquema/vocabularios/gerais.json"),
  },
  regioes,
  regiao_de: Object.fromEntries(nos.map((n) => [n.id, regiaoDe(n.id)])),
  layout,
  entidades: Object.fromEntries(entidades),
};

const dir = join(RAIZ, "web", "public", "dados");
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "grafo.json"), JSON.stringify(saida));
console.log(`grafo.json: ${entidades.size} entidades, ${nos.length} nós no mapa, ${Object.keys(regioes).length} regiões.`);
