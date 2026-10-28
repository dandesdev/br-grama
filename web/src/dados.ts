// Carrega grafo.json (gerado por scripts/build-dados.ts) e oferece consultas sobre as entidades.
import { vigenteEm } from "../../scripts/lib/vigencia.ts";

export interface Vigencia { de: string | null; ate: string | null; incerta?: boolean; nota?: string }
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
  campos?: Record<string, { fontes?: FonteRef[]; confianca?: string; nota?: string }>;
  confianca: string;
  mais_informacoes?: Link[];
  [campo: string]: unknown;
}

export interface Etapa {
  id: string;
  atores: string[];
  /** Pasta de cada ator que é cargo agregado (D42), preenchida pelo build. */
  atores_exercicio?: Record<string, string>;
  acao: string;
  detalhes?: string;
  tipo_etapa?: string;
  prazo?: Prazo;
  quorum?: Quorum;
  fontes: FonteRef[];
  remete_a?: string;
  seguintes: { para: string; quando?: string | null }[];
}

export interface Regime {
  id: string;
  nome: string;
  resumo: string;
  detalhes?: string;
  quem_aciona?: string[];
  fontes: FonteRef[];
  efeitos: { etapa: string; prazo?: Prazo; nota?: string }[];
}

export interface Termo { nome: string; definicao: string }
export interface Quorum { regra: string; votacao?: string; nota?: string }
export interface Prazo { texto: string; valor?: number; unidade?: string; conta_de?: string; efeito?: string }

export interface Caixa { x: number; y: number; w: number; h: number }

export interface Grafo {
  data_referencia: string;
  vocabularios: {
    relacoes: Record<string, Termo & { grupo: string }>;
    tipos_orgao: Record<string, Termo>;
    gerais: Record<string, Record<string, Termo>>;
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
  competencias: "Competências",
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
  objeto: "Objeto de competência",
  aviso: "Aviso",
  variacao: "Variação",
  metrica: "Métrica",
  fluxo: "Fluxo de recursos",
};

export interface ValoresOrcamento {
  pagamentos_totais: number;
  despesas_pagas?: number;
  restos_a_pagar_pagos?: number;
  pagamentos_primarios?: number;
  pagamentos_financeiros?: number;
  dotacao_inicial?: number;
  dotacao_atualizada?: number;
}

export class Dados {
  readonly data: string;
  private porAlvo = new Map<string, Entidade[]>();
  private porOrigem = new Map<string, Entidade[]>();
  private orcamentos = new Map<string, Entidade>();
  private fluxos = new Map<string, Entidade>();
  /** Último exercício fechado antes da data de referência (D26). */
  readonly exercicio: number | null;

  constructor(readonly grafo: Grafo) {
    this.data = grafo.data_referencia;
    // Métricas e fluxos valem para o ano medido, não para a data de referência: o retrato usa o
    // último ano fechado (D26, D45).
    const ano = Number(this.data.slice(0, 4));
    const ultimo = (mapa: Map<string, Entidade>, chave: string, e: Entidade) => {
      const atual = mapa.get(chave);
      if ((e.exercicio as number) < ano && (!atual || (atual.exercicio as number) < (e.exercicio as number))) mapa.set(chave, e);
    };
    for (const e of Object.values(grafo.entidades)) {
      if (e.tipo === "metrica" && e.medida === "orcamento-executado") ultimo(this.orcamentos, e.de as string, e);
      if (e.tipo === "fluxo") ultimo(this.fluxos, e.repasse as string, e);
    }
    this.exercicio = Math.max(0, ...[...this.orcamentos.values()].map((m) => m.exercicio as number)) || null;
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

  vigente(x: { vigencia?: Vigencia }): boolean {
    return vigenteEm(x, this.data);
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
  ocupantes(cargoId: string): { pessoa: Entidade; partido?: Entidade; orgao?: Entidade; interino: boolean }[] {
    return this.relacoesChegando(cargoId)
      .filter((r) => r.relacao === "ocupa")
      .map((r) => ({ pessoa: this.get(r.de as string), orgao: r.orgao_exercicio ? this.get(r.orgao_exercicio as string) : undefined, interino: r.interino === true }))
      .filter((o): o is { pessoa: Entidade; orgao: Entidade | undefined; interino: boolean } => !!o.pessoa)
      .map(({ pessoa, orgao, interino }) => {
        const filiacoes = (pessoa.filiacoes as { partido: string; vigencia: Vigencia }[] | undefined) ?? [];
        const f = filiacoes.find((x) => vigenteEm(x, this.data));
        return { pessoa, partido: f ? this.get(f.partido) : undefined, orgao, interino };
      });
  }

  /** Quem exerce um cargo agregado neste órgão (ex.: o ministro de uma pasta). */
  titularesEm(orgaoId: string): { pessoa: Entidade; cargo: Entidade }[] {
    return this.todas("relacao")
      .filter((r) => r.relacao === "ocupa" && r.orgao_exercicio === orgaoId)
      .map((r) => ({ pessoa: this.get(r.de as string), cargo: this.get(r.para as string) }))
      .filter((t): t is { pessoa: Entidade; cargo: Entidade } => !!t.pessoa && !!t.cargo);
  }

  /** Orçamento executado da entidade no último ano fechado, se ela tiver unidade orçamentária própria. */
  orcamentoDe(id: string): Entidade | undefined {
    return this.orcamentos.get(id);
  }

  todosOrcamentos(): Entidade[] {
    return [...this.orcamentos.values()];
  }

  /** Valores pagos no último ano fechado por uma relação repassa-recursos. */
  fluxoDe(relacaoId: string): Entidade | undefined {
    return this.fluxos.get(relacaoId);
  }

  todosFluxos(): Entidade[] {
    return [...this.fluxos.values()];
  }

  /** Avisos (lacunas e divergências das fontes) que apontam para a entidade. */
  avisosDe(id: string): Entidade[] {
    return this.todas("aviso").filter((a) => (a.afeta as string[]).includes(id));
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

  termo(vocab: string, valor: string): Termo | undefined {
    if (vocab === "relacao") return this.grafo.vocabularios.relacoes[valor];
    if (vocab === "tipo_orgao") return this.grafo.vocabularios.tipos_orgao[valor];
    return this.grafo.vocabularios.gerais[vocab]?.[valor];
  }

  definicao(vocab: string, valor: string): string | undefined {
    return this.termo(vocab, valor)?.definicao;
  }

  /** Nome legível de um termo de vocabulário (com acentos); cai no próprio valor se não houver. */
  nomeDe(vocab: string, valor: string): string {
    return this.termo(vocab, valor)?.nome ?? valor;
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

/** Valor em reais, abreviado: "R$ 251,8 bilhões" (ou "R$ 251,8 bi" com curto). */
export function reais(x: number, curto = false): string {
  const [n, longo, abrev] = Math.abs(x) >= 1e12 ? [x / 1e12, "trilh", "tri"] : Math.abs(x) >= 1e9 ? [x / 1e9, "bilh", "bi"] : [x / 1e6, "milh", "mi"];
  // "1,8 bilhão", "2,0 bilhões": o plural começa em 2.
  const unidade = curto ? abrev : `${longo}${Math.abs(n as number) < 2 ? "ão" : "ões"}`;
  return `R$ ${(n as number).toLocaleString("pt-BR", { maximumFractionDigits: 1, minimumFractionDigits: 1 })} ${unidade}`;
}

/** Remove acentos e caixa, para busca. */
export const normalizar = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export function formatarData(d: string | null): string {
  if (!d) return "—";
  const [a, m, dia] = d.split("-");
  return [dia, m, a].filter(Boolean).join("/");
}
