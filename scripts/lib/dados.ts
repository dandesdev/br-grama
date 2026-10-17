// Leitura dos arquivos de dados/ e dos vocabulários. Usado pela validação e pelo build.
import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
export { vigenteEm } from "./vigencia.ts";

export const RAIZ = join(import.meta.dirname, "..", "..");

/** Pasta de cada tipo de entidade e prefixo do seu id. */
export const TIPOS = {
  ente: { pasta: "entes", prefixo: "ente" },
  orgao: { pasta: "orgaos", prefixo: "org" },
  cargo: { pasta: "cargos", prefixo: "cargo" },
  pessoa: { pasta: "pessoas", prefixo: "pessoa" },
  norma: { pasta: "normas", prefixo: "norma" },
  fonte: { pasta: "fontes", prefixo: "fonte" },
  relacao: { pasta: "relacoes", prefixo: "rel" },
  processo: { pasta: "processos", prefixo: "proc" },
  objeto: { pasta: "objetos", prefixo: "obj" },
  achado: { pasta: "achados", prefixo: "achado" },
  variacao: { pasta: "variacoes", prefixo: "var" },
} as const;

export type Tipo = keyof typeof TIPOS;

export interface Entidade {
  id: string;
  tipo: Tipo;
  nome: string;
  [campo: string]: unknown;
}

export interface Arquivo {
  caminho: string; // relativo à raiz do projeto
  tipoPelaPasta: Tipo;
  conteudo: unknown;
  erroDeLeitura?: string;
}

export function lerArquivos(): Arquivo[] {
  const arquivos: Arquivo[] = [];
  for (const [tipo, { pasta }] of Object.entries(TIPOS) as [Tipo, (typeof TIPOS)[Tipo]][]) {
    const dir = join(RAIZ, "dados", pasta);
    let nomes: string[];
    try {
      nomes = readdirSync(dir).filter((n) => n.endsWith(".json"));
    } catch {
      continue;
    }
    for (const nome of nomes.sort()) {
      const caminhoAbs = join(dir, nome);
      const caminho = relative(RAIZ, caminhoAbs).replaceAll("\\", "/");
      try {
        arquivos.push({ caminho, tipoPelaPasta: tipo, conteudo: JSON.parse(readFileSync(caminhoAbs, "utf8")) });
      } catch (e) {
        arquivos.push({ caminho, tipoPelaPasta: tipo, conteudo: null, erroDeLeitura: String(e) });
      }
    }
  }
  return arquivos;
}

export function lerJson<T = unknown>(caminhoRelativo: string): T {
  return JSON.parse(readFileSync(join(RAIZ, caminhoRelativo), "utf8")) as T;
}

/** Vocabulários: nome do vocabulário → termo → { nome, definicao, ... }. */
export type Vocabulario = Record<string, { nome: string; definicao: string; grupo?: string }>;

export function lerVocabularios(): Record<string, Vocabulario> {
  const semMeta = <T extends object>(obj: T) => Object.fromEntries(Object.entries(obj).filter(([k]) => !k.startsWith("_")));
  const gerais = semMeta(lerJson<Record<string, Vocabulario>>("esquema/vocabularios/gerais.json"));
  return {
    relacao: semMeta(lerJson<Vocabulario>("esquema/vocabularios/relacoes.json")),
    tipo_orgao: semMeta(lerJson<Vocabulario>("esquema/vocabularios/tipos-orgao.json")),
    ...gerais,
  } as Record<string, Vocabulario>;
}

export const PADRAO_ID = /^(ente|org|cargo|pessoa|norma|fonte|rel|proc|obj|fluxo|met|achado|var):[a-z0-9]+(-[a-z0-9]+)*$/;
