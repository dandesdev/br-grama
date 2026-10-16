// Valida todos os arquivos de dados/: esquema, vocabulários, ids e referências.
// Uso: npm run validar
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { TIPOS, PADRAO_ID, lerArquivos, lerJson, lerVocabularios, type Entidade, type Tipo } from "./lib/dados.ts";

const erros: string[] = [];
const avisos: string[] = [];
const erro = (caminho: string, msg: string) => erros.push(`${caminho}: ${msg}`);

// Esquemas
const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats.default(ajv);
ajv.addSchema(lerJson("esquema/comum.schema.json"));
ajv.addSchema(lerJson("esquema/entidades.schema.json"));
const validador = (tipo: Tipo) => ajv.getSchema(`https://br-grama.local/esquema/entidades.schema.json#/$defs/${tipo}`)!;

const vocab = lerVocabularios();
// Campo da entidade → vocabulário que define seus valores válidos
const CAMPOS_COM_VOCABULARIO: Record<string, string> = {
  tipo_orgao: "tipo_orgao",
  poder: "poder",
  esfera: "esfera",
  tipo_ente: "tipo_ente",
  provimento: "provimento",
  relacao: "relacao",
  tipo_achado: "tipo_achado",
  tipo_norma: "tipo_norma",
  tipo_fonte: "tipo_fonte",
};

// 1. Leitura, esquema, id e vocabulários
const arquivos = lerArquivos();
const entidades = new Map<string, { entidade: Entidade; caminho: string }>();

for (const arq of arquivos) {
  if (arq.erroDeLeitura) {
    erro(arq.caminho, `JSON inválido: ${arq.erroDeLeitura}`);
    continue;
  }
  const ent = arq.conteudo as Entidade;
  const validar = validador(arq.tipoPelaPasta);
  if (!validar(ent)) {
    for (const e of validar.errors ?? []) {
      const extra = e.keyword === "unevaluatedProperties" ? ` (${(e.params as { unevaluatedProperty: string }).unevaluatedProperty})` : "";
      erro(arq.caminho, `${e.instancePath || "/"} ${e.message}${extra}`);
    }
  }
  if (typeof ent?.id !== "string") continue;

  const { prefixo } = TIPOS[arq.tipoPelaPasta];
  const esperado = `${prefixo}:${arq.caminho.split("/").pop()!.replace(/\.json$/, "")}`;
  if (ent.id !== esperado) erro(arq.caminho, `id "${ent.id}" não corresponde ao arquivo (esperado "${esperado}")`);
  if (entidades.has(ent.id)) erro(arq.caminho, `id duplicado: ${ent.id}`);
  entidades.set(ent.id, { entidade: ent, caminho: arq.caminho });

  for (const [campo, nomeVocab] of Object.entries(CAMPOS_COM_VOCABULARIO)) {
    const valor = ent[campo];
    if (typeof valor === "string" && !vocab[nomeVocab]?.has(valor)) {
      erro(arq.caminho, `${campo}: "${valor}" não está em esquema/vocabularios (${nomeVocab})`);
    }
  }
  if (ent.confianca === "indisponivel" && ent.tipo !== "achado") {
    avisos.push(`${arq.caminho}: confiança "indisponivel"; confira se há um achado apontando para ${ent.id}`);
  }
}

// 2. Referências: toda string com formato de id precisa existir
function referencias(valor: unknown, caminho = ""): [string, string][] {
  if (typeof valor === "string") return PADRAO_ID.test(valor) ? [[caminho, valor]] : [];
  if (Array.isArray(valor)) return valor.flatMap((v, i) => referencias(v, `${caminho}/${i}`));
  if (valor && typeof valor === "object") {
    return Object.entries(valor).flatMap(([k, v]) => (k === "id" ? [] : referencias(v, `${caminho}/${k}`)));
  }
  return [];
}

for (const { entidade, caminho } of entidades.values()) {
  for (const [onde, ref] of referencias(entidade)) {
    if (!entidades.has(ref)) erro(caminho, `${onde}: referência inexistente ${ref}`);
  }
  for (const f of [...((entidade.fontes as { ref: string }[]) ?? [])]) {
    const alvo = entidades.get(f.ref)?.entidade;
    if (alvo && alvo.tipo !== "norma" && alvo.tipo !== "fonte") {
      erro(caminho, `fonte ${f.ref} deveria ser norma: ou fonte:`);
    }
  }
}

// 3. Processos: etapas com ids únicos e ligações válidas
for (const { entidade, caminho } of entidades.values()) {
  if (entidade.tipo !== "processo") continue;
  const etapas = (entidade.etapas as { id: string; seguintes: { para: string }[]; final?: boolean }[]) ?? [];
  const ids = new Set<string>();
  for (const etapa of etapas) {
    if (ids.has(etapa.id)) erro(caminho, `etapa duplicada: ${etapa.id}`);
    ids.add(etapa.id);
  }
  for (const etapa of etapas) {
    for (const s of etapa.seguintes ?? []) {
      if (!ids.has(s.para)) erro(caminho, `etapa ${etapa.id}: seguinte inexistente "${s.para}"`);
    }
    if (!etapa.final && (etapa.seguintes ?? []).length === 0) {
      erro(caminho, `etapa ${etapa.id}: sem seguintes e sem "final": true`);
    }
  }
}

// Relatório
const contagem = (campo: string) => {
  const c: Record<string, number> = {};
  for (const { entidade } of entidades.values()) {
    const v = String((entidade as Record<string, unknown>)[campo] ?? "?");
    c[v] = (c[v] ?? 0) + 1;
  }
  return Object.entries(c).map(([k, n]) => `${k}: ${n}`).join(", ");
};
const status: Record<string, number> = {};
for (const { entidade } of entidades.values()) {
  const s = (entidade.verificacao as { status?: string })?.status ?? "?";
  status[s] = (status[s] ?? 0) + 1;
}

console.log(`Entidades: ${entidades.size} (${contagem("tipo")})`);
console.log(`Confiança: ${contagem("confianca")}`);
console.log(`Verificação: ${Object.entries(status).map(([k, n]) => `${k}: ${n}`).join(", ")}`);
for (const a of avisos) console.log(`aviso  ${a}`);
for (const e of erros) console.log(`ERRO   ${e}`);
console.log(erros.length ? `\n${erros.length} erro(s).` : "\nNenhum erro.");
process.exit(erros.length ? 1 : 0);
