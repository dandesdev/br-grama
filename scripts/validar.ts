// Valida todos os arquivos de dados/: esquema, vocabulários, ids, referências e regras de processo.
// Uso: npm run validar
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { TIPOS, PADRAO_ID, lerArquivos, lerJson, lerVocabularios, type Entidade, type Tipo } from "./lib/dados.ts";

const erros: string[] = [];
const avisos: string[] = [];
const erro = (caminho: string, msg: string) => erros.push(`${caminho}: ${msg}`);
const aviso = (caminho: string, msg: string) => avisos.push(`${caminho}: ${msg}`);

// Esquemas
const ajv = new Ajv2020({ allErrors: true, strict: false });
addFormats.default(ajv);
ajv.addSchema(lerJson("esquema/comum.schema.json"));
ajv.addSchema(lerJson("esquema/entidades.schema.json"));
const validador = (tipo: Tipo) => ajv.getSchema(`https://br-grama.local/esquema/entidades.schema.json#/$defs/${tipo}`)!;

const vocab = lerVocabularios();
// Chave (em qualquer nível do arquivo) → vocabulário que define seus valores válidos.
const CHAVES_COM_VOCABULARIO: Record<string, string> = {
  tipo_orgao: "tipo_orgao",
  poder: "poder",
  esfera: "esfera",
  tipo_ente: "tipo_ente",
  provimento: "provimento",
  relacao: "relacao",
  tipo_aviso: "tipo_aviso",
  tipo_norma: "tipo_norma",
  tipo_fonte: "tipo_fonte",
  tipo_objeto: "tipo_objeto",
  tipo_etapa: "tipo_etapa",
  abrangencia: "abrangencia",
  regra: "quorum",
  votacao: "votacao",
  unidade: "unidade_prazo",
  natureza: "natureza_competencia",
};

/** Percorre o arquivo inteiro chamando visitar(chave, valor, caminho) em cada propriedade. */
function percorrer(valor: unknown, visitar: (chave: string, v: unknown, caminho: string) => void, caminho = "") {
  if (Array.isArray(valor)) valor.forEach((v, i) => percorrer(v, visitar, `${caminho}/${i}`));
  else if (valor && typeof valor === "object") {
    for (const [k, v] of Object.entries(valor)) {
      visitar(k, v, `${caminho}/${k}`);
      percorrer(v, visitar, `${caminho}/${k}`);
    }
  }
}

// 1. Leitura, esquema, id e vocabulários
const entidades = new Map<string, { entidade: Entidade; caminho: string }>();

for (const arq of lerArquivos()) {
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

  percorrer(ent, (chave, valor, onde) => {
    const nomeVocab = CHAVES_COM_VOCABULARIO[chave];
    if (nomeVocab && typeof valor === "string" && !vocab[nomeVocab]?.[valor]) {
      erro(arq.caminho, `${onde}: "${valor}" não está no vocabulário ${nomeVocab}`);
    }
  });

  if (ent.tipo === "relacao" && ent.relacao === "tem-competencia") {
    const c = ent.competencia as { tipo?: string } | undefined;
    if (!c) erro(arq.caminho, `relação "tem-competencia" exige o campo competencia`);
    else if (c.tipo && !vocab.tipo_competencia?.[c.tipo]) erro(arq.caminho, `competencia.tipo "${c.tipo}" não está no vocabulário tipo_competencia`);
  }
  if (ent.tipo === "cargo" && ent.provimento === "variavel" && !(ent.provimento_casos as unknown[])?.length) {
    erro(arq.caminho, `provimento "variavel" exige provimento_casos`);
  }
  if (ent.tipo === "relacao" && ent.interino !== undefined && ent.relacao !== "ocupa") {
    erro(arq.caminho, `o campo interino só vale na relação "ocupa" (D40)`);
  }
  if (ent.confianca === "indisponivel" && ent.tipo !== "aviso") {
    aviso(arq.caminho, `confiança "indisponivel"; confira se há um aviso apontando para ${ent.id}`);
  }
}

// 2. Referências: toda string com formato de id precisa existir; refs de fonte apontam para norma/fonte.
const PADRAO_ID_NO_TEXTO = /\b(?:ente|org|cargo|pessoa|norma|fonte|rel|proc|obj|aviso|var):[a-z0-9]+(?:-[a-z0-9]+)*/g;
const CAMPOS_DE_TEXTO = new Set(["resumo", "detalhes", "notas", "nota", "condicao", "porque", "quando", "texto", "vagas_nota", "provimento_nota"]);

for (const { entidade, caminho } of entidades.values()) {
  percorrer(entidade, (chave, valor, onde) => {
    if (typeof valor !== "string" || chave === "id") return;
    if (PADRAO_ID.test(valor)) {
      const alvo = entidades.get(valor)?.entidade;
      if (!alvo) erro(caminho, `${onde}: referência inexistente ${valor}`);
      else if (chave === "ref" && alvo.tipo !== "norma" && alvo.tipo !== "fonte") {
        erro(caminho, `${onde}: fonte ${valor} deveria ser norma: ou fonte:`);
      }
    } else if (CAMPOS_DE_TEXTO.has(chave)) {
      for (const ref of valor.match(PADRAO_ID_NO_TEXTO) ?? []) {
        if (!entidades.has(ref)) aviso(caminho, `${onde}: o texto cita ${ref}, que não existe`);
      }
    }
  });
}

// 3. Processos: etapas com ids únicos, ligações válidas, atores coerentes com o tipo da etapa
interface Etapa { id: string; tipo_etapa?: string; atores: (string | { ator: string; orgao_exercicio: string })[]; seguintes: { para: string }[] }
for (const { entidade, caminho } of entidades.values()) {
  if (entidade.tipo !== "processo") continue;
  const etapas = (entidade.etapas as Etapa[]) ?? [];
  const ids = new Set<string>();
  for (const etapa of etapas) {
    if (ids.has(etapa.id)) erro(caminho, `etapa duplicada: ${etapa.id}`);
    ids.add(etapa.id);
  }
  for (const etapa of etapas) {
    const tipo = etapa.tipo_etapa ?? "acao";
    for (const s of etapa.seguintes ?? []) {
      if (!ids.has(s.para)) erro(caminho, `etapa ${etapa.id}: seguinte inexistente "${s.para}"`);
    }
    if (tipo === "fim" && etapa.seguintes.length) erro(caminho, `etapa ${etapa.id}: etapa "fim" não pode ter seguintes`);
    if (tipo !== "fim" && !etapa.seguintes.length) erro(caminho, `etapa ${etapa.id}: sem seguintes; use tipo_etapa "fim"`);
    if (tipo !== "decurso-de-prazo" && tipo !== "fim" && !etapa.atores.length) {
      erro(caminho, `etapa ${etapa.id}: sem atores; só etapas de decurso de prazo ou fim podem não ter`);
    }
    for (const a of etapa.atores) {
      if (typeof a === "object" && !a.ator.startsWith("cargo:")) erro(caminho, `etapa ${etapa.id}: orgao_exercicio só vale para ator do tipo cargo (${a.ator})`);
    }
  }
  for (const regime of (entidade.regimes as { id: string; efeitos: { etapa: string }[] }[]) ?? []) {
    for (const ef of regime.efeitos) {
      if (!ids.has(ef.etapa)) erro(caminho, `regime ${regime.id}: etapa inexistente "${ef.etapa}"`);
    }
  }
}

// Relatório
const conta = (f: (e: Entidade) => string) => {
  const c: Record<string, number> = {};
  for (const { entidade } of entidades.values()) c[f(entidade)] = (c[f(entidade)] ?? 0) + 1;
  return Object.entries(c).map(([k, n]) => `${k}: ${n}`).join(", ");
};
console.log(`Entidades: ${entidades.size} (${conta((e) => e.tipo)})`);
console.log(`Confiança: ${conta((e) => String(e.confianca))}`);
console.log(`Verificação: ${conta((e) => (e.verificacao as { status?: string })?.status ?? "?")}`);
for (const a of avisos) console.log(`aviso  ${a}`);
for (const e of erros) console.log(`ERRO   ${e}`);
console.log(erros.length ? `\n${erros.length} erro(s).` : "\nNenhum erro.");
process.exit(erros.length ? 1 : 0);
