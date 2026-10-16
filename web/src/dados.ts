// Carrega grafo.json (gerado por scripts/build-dados.ts) e oferece consultas sobre as entidades.
import { vigenteEm } from "../../scripts/lib/vigencia.ts";

export interface Vigencia { de: string | null; ate: string | null }
export interface FonteRef { ref: string; dispositivo?: string | null; nota?: string }
export interface Link { titulo: string; url: string }

export interface Entidade {
  id: string;
  tipo: string;
  nome: string;
  sigla?: string;
  resumo?: string;
  detalhes?: string;
  vigencia: Vigencia;
  fontes?: FonteRef[];
  fontes_por_campo?: Record<string, FonteRef[]>;
  confianca: string;
  mais_informacoes?: Link[];
  [campo: string]: unknown;
}

export interface Etapa {
  id: string;
  atores: string[];
  acao: string;
  detalhes?: string;
  prazo?: string | null;
  fontes: FonteRef[];
  seguintes: { para: string; quando?: string | null }[];
  final?: boolean;
}

export interface Caixa { x: number; y: number; w: number; h: number }

export interface Grafo {
  data_referencia: string;
  vocabularios: {
    relacoes: Record<string, { grupo: string; definicao: string }>;
    tipos_orgao: Record<string, { definicao: string }>;
    gerais: Record<string, Record<string, string>>;
  };
  regioes: Record<string, Caixa>;
  regiao_de: Record<string, string>;
  layout: Record<string, Caixa>;
  entidades: Record<string, Entidade>;
}

export const GRUPOS_RELACAO: Record<string, string> = {
  estrutura: "Estrutura",
  pessoas: "Escolha de pessoas",
  normas: "Normas",
  controle: "Controle",
  "poderes-administrativos": "Poderes administrativos",
  recursos: "Recursos",
  representacao: "Representação",
};

export const NOMES_TIPO: Record<string, string> = {
  ente: "Ente federativo",
  orgao: "Órgão",
  cargo: "Cargo",
  pessoa: "Pessoa",
  norma: "Norma",
  fonte: "Fonte",
  relacao: "Relação",
  processo: "Processo",
  achado: "Achado",
  variacao: "Variação",
};

export class Dados {
  readonly data: string;
  private porAlvo = new Map<string, Entidade[]>();
  private porOrigem = new Map<string, Entidade[]>();

  constructor(readonly grafo: Grafo) {
    this.data = grafo.data_referencia;
    for (const e of this.todas("relacao")) {
      this.porOrigem.set(e.de as string, [...(this.porOrigem.get(e.de as string) ?? []), e]);
      this.porAlvo.set(e.para as string, [...(this.porAlvo.get(e.para as string) ?? []), e]);
    }
  }

  get(id: string): Entidade | undefined {
    return this.grafo.entidades[id];
  }

  /** Entidades de um tipo, em vigor na data de referência. */
  todas(tipo?: string): Entidade[] {
    return Object.values(this.grafo.entidades).filter((e) => (!tipo || e.tipo === tipo) && vigenteEm(e, this.data));
  }

  ehNo(id: string): boolean {
    return id in this.grafo.layout && !!this.grafo.regiao_de[id];
  }

  relacoesSaindo(id: string): Entidade[] {
    return (this.porOrigem.get(id) ?? []).filter((r) => vigenteEm(r, this.data));
  }

  relacoesChegando(id: string): Entidade[] {
    return (this.porAlvo.get(id) ?? []).filter((r) => vigenteEm(r, this.data));
  }

  /** Quem ocupa o cargo na data de referência, com o partido vigente. */
  ocupantes(cargoId: string): { pessoa: Entidade; partido?: Entidade }[] {
    return this.relacoesChegando(cargoId)
      .filter((r) => r.relacao === "ocupa")
      .map((r) => this.get(r.de as string))
      .filter((p): p is Entidade => !!p)
      .map((pessoa) => {
        const filiacoes = (pessoa.filiacoes as { partido: string; vigencia: Vigencia }[] | undefined) ?? [];
        const f = filiacoes.find((x) => vigenteEm(x, this.data));
        return { pessoa, partido: f ? this.get(f.partido) : undefined };
      });
  }

  /** Achados que apontam para a entidade. */
  achadosDe(id: string): Entidade[] {
    return this.todas("achado").filter((a) => (a.afeta as string[]).includes(id));
  }

  /** Nó do mapa que melhor representa uma entidade (pessoa → cargo que ocupa; relação → origem). */
  noDe(id: string): string | undefined {
    if (this.ehNo(id)) return id;
    const e = this.get(id);
    if (!e) return undefined;
    if (e.tipo === "pessoa") {
      const ocupa = this.relacoesSaindo(id).find((r) => r.relacao === "ocupa");
      return ocupa ? this.noDe(ocupa.para as string) : undefined;
    }
    if (e.tipo === "relacao") return this.noDe(e.de as string);
    if (e.tipo === "variacao") return this.noDe((e.instancia as string) ?? (e.difere_de as string));
    return undefined;
  }

  definicao(vocab: string, termo: string): string | undefined {
    if (vocab === "relacao") return this.grafo.vocabularios.relacoes[termo]?.definicao;
    if (vocab === "tipo_orgao") return this.grafo.vocabularios.tipos_orgao[termo]?.definicao;
    return this.grafo.vocabularios.gerais[vocab]?.[termo];
  }

  grupoDe(relacao: string): string {
    return this.grafo.vocabularios.relacoes[relacao]?.grupo ?? "estrutura";
  }
}

export async function carregar(): Promise<Dados> {
  const resp = await fetch("./dados/grafo.json");
  if (!resp.ok) throw new Error(`Não foi possível carregar os dados (${resp.status}).`);
  return new Dados(await resp.json());
}

/** Remove acentos e caixa, para busca. */
export const normalizar = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export function formatarData(d: string | null): string {
  if (!d) return "—";
  const [a, m, dia] = d.split("-");
  return [dia, m, a].filter(Boolean).join("/");
}
