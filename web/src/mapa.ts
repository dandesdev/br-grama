// Desenho do mapa com Cytoscape. As posições vêm prontas do build (D29); aqui só aplicamos
// estilo, camadas e destaques.
import cytoscape, { type Core, type ElementDefinition, type StylesheetJson } from "cytoscape";
import { Dados, type Etapa, type Entidade } from "./dados.ts";

const NOMES_REGIAO: Record<string, string> = {
  povo: "Povo",
  legislativo: "Poder Legislativo",
  executivo: "Poder Executivo",
  judiciario: "Poder Judiciário",
  funcoes: "Funções essenciais e outros",
  entes: "Estados e municípios: estrutura típica e exceções",
};

// Estilo de linha por grupo de relação (D23). A cor das linhas é neutra; o grupo se lê pelo traço.
export const TRACO_GRUPO: Record<string, { estilo: "solid" | "dashed" | "dotted"; seta: string; dash?: number[] }> = {
  estrutura: { estilo: "solid", seta: "none" },
  pessoas: { estilo: "solid", seta: "triangle" },
  normas: { estilo: "dashed", seta: "triangle", dash: [6, 4] },
  controle: { estilo: "dotted", seta: "diamond" },
  "poderes-administrativos": { estilo: "dotted", seta: "tee" },
  recursos: { estilo: "dashed", seta: "triangle-backcurve", dash: [2, 6] },
  representacao: { estilo: "dashed", seta: "circle", dash: [10, 4] },
};

const BORDA_CONFIANCA: Record<string, string> = {
  oficial: "solid",
  "oficial-contraditorio": "double",
  secundario: "dashed",
  inferido: "dashed",
  indisponivel: "dotted",
};

const cor = (v: string) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

function corDoPoder(poder: string | undefined): string {
  if (poder === "executivo" || poder === "legislativo" || poder === "judiciario") return cor(`--${poder}`);
  return cor("--neutro");
}

/** Poder do nó: o do próprio órgão ou, para cargos, o do órgão onde está. */
function poderDe(dados: Dados, e: Entidade): string | undefined {
  if (e.tipo === "orgao") return e.poder as string;
  const orgao = dados.get(e.orgao as string);
  return orgao ? poderDe(dados, orgao) : undefined;
}

function rotulo(dados: Dados, e: Entidade): string {
  const nome = e.sigla && e.nome.length > 28 ? e.sigla : e.nome;
  if (e.tipo !== "cargo") return nome;
  const q = e.quantidade as number | null;
  const nomeCargo = q && q > 1 ? `${nome} × ${q}` : nome;
  const ocup = dados.ocupantes(e.id);
  if (q === 1 && ocup.length === 1) {
    const { pessoa, partido } = ocup[0];
    return `${nomeCargo}\n${pessoa.nome}${partido?.sigla ? ` (${partido.sigla})` : ""}`;
  }
  return nomeCargo;
}

function elementos(dados: Dados): ElementDefinition[] {
  const { layout, regioes, regiao_de } = dados.grafo;
  const els: ElementDefinition[] = [];

  // Títulos das regiões que não têm um "Poder" como contêiner próprio.
  for (const [regiao, caixa] of Object.entries(regioes)) {
    const temPoder = Object.keys(regiao_de).some(
      (id) => regiao_de[id] === regiao && dados.get(id)?.tipo_orgao === "poder",
    );
    if (temPoder) continue;
    els.push({
      group: "nodes",
      data: { id: `regiao:${regiao}`, rotulo: NOMES_REGIAO[regiao] ?? regiao },
      position: { x: caixa.x + caixa.w / 2, y: caixa.y - 24 },
      classes: "regiao",
      selectable: false,
      grabbable: false,
    });
  }

  for (const id of Object.keys(regiao_de)) {
    const e = dados.get(id)!;
    const caixa = layout[id];
    const pai = (e.tipo === "cargo" ? e.orgao : e.contido_em) as string | undefined;
    const ehPai = Object.keys(regiao_de).some((outro) => {
      const o = dados.get(outro)!;
      return (o.tipo === "cargo" ? o.orgao : o.contido_em) === id;
    });
    els.push({
      group: "nodes",
      data: {
        id,
        parent: pai && dados.ehNo(pai) ? pai : undefined,
        rotulo: rotulo(dados, e),
        rotuloBase: rotulo(dados, e),
        cor: corDoPoder(poderDe(dados, e)),
        borda: BORDA_CONFIANCA[e.confianca] ?? "solid",
        w: caixa.w,
        h: caixa.h,
      },
      position: { x: caixa.x + caixa.w / 2, y: caixa.y + caixa.h / 2 },
      classes: [e.tipo, ehPai ? "contem" : "", e.tipo_orgao === "poder" ? "poder" : "", e.tipo_orgao as string].join(" "),
      grabbable: false,
    });
  }

  for (const r of dados.todas("relacao")) {
    if (r.relacao === "ocupa" || !dados.ehNo(r.de as string) || !dados.ehNo(r.para as string)) continue;
    const grupo = dados.grupoDe(r.relacao as string);
    els.push({
      group: "edges",
      data: { id: r.id, source: r.de, target: r.para, verbo: (r.relacao as string).replaceAll("-", " "), grupo },
      classes: `rel grupo-${grupo}`,
    });
  }

  // Variações: liga a instância real (ex.: TCM-SP) ao órgão do arquétipo que ela substitui.
  for (const v of dados.todas("variacao")) {
    const de = v.instancia as string | undefined;
    const para = v.difere_de as string;
    if (de && dados.ehNo(de) && dados.ehNo(para)) {
      els.push({ group: "edges", data: { id: v.id, source: de, target: para, verbo: "exceção a" }, classes: "variacao" });
    }
  }
  return els;
}

function estilo(): StylesheetJson {
  const tinta = cor("--tinta");
  const tinta2 = cor("--tinta-2");
  const tinta3 = cor("--tinta-3");
  const superficie = cor("--superficie");
  const destaque = cor("--destaque");
  const alerta = cor("--alerta");
  const fonte = 'system-ui, -apple-system, "Segoe UI", sans-serif';

  const porGrupo: StylesheetJson = Object.entries(TRACO_GRUPO).map(([grupo, t]) => ({
    selector: `edge.grupo-${grupo}`,
    style: {
      "line-style": t.estilo,
      ...(t.dash ? { "line-dash-pattern": t.dash } : {}),
      "target-arrow-shape": t.seta as cytoscape.Css.ArrowShape,
    },
  }));

  return [
    {
      selector: "node",
      style: {
        label: "data(rotulo)",
        "font-family": fonte,
        "font-size": 12,
        color: tinta,
        "text-wrap": "wrap",
        "text-max-width": "200px",
        "text-valign": "center",
        "text-halign": "center",
        "min-zoomed-font-size": 7,
        shape: "round-rectangle",
        "background-color": superficie,
        "border-width": 2,
      },
    },
    { selector: "node[w]", style: { width: "data(w)", height: "data(h)" } },
    { selector: "node[cor]", style: { "border-color": "data(cor)" } },
    { selector: "node[borda]", style: { "border-style": "data(borda)" as never } },
    { selector: "node.cargo", style: { "corner-radius": "999" } },
    {
      selector: "node.contem",
      style: {
        "text-valign": "top",
        "text-halign": "center",
        "text-margin-y": -4,
        "font-weight": 600,
        "background-opacity": 0.06,
        "border-width": 1.5,
        padding: "16px",
        "text-max-width": "400px",
      },
    },
    { selector: "node.contem[cor]", style: { "background-color": "data(cor)" } },
    // Rótulos grandes para os Poderes e regiões: continuam legíveis na visão geral (zoom semântico).
    { selector: "node.poder", style: { "font-size": 36, "text-margin-y": -8, "background-opacity": 0.03, "border-width": 1, "text-max-width": "1200px" } },
    { selector: "node.judiciario-tribunal, node.tribunal-de-contas", style: { shape: "cut-rectangle" } },
    { selector: "node.corpo-eleitoral", style: { shape: "barrel" } },
    {
      selector: "node.regiao",
      style: {
        label: "data(rotulo)",
        width: 1,
        height: 1,
        "background-opacity": 0,
        "border-width": 0,
        "font-size": 36,
        "font-weight": 600,
        "text-max-width": "1600px",
        color: tinta2,
        events: "no",
      },
    },
    {
      selector: "edge",
      style: {
        width: 1.25,
        "line-color": tinta3,
        "target-arrow-color": tinta3,
        "curve-style": "bezier",
        "arrow-scale": 0.8,
        opacity: 0.55,
        "font-family": fonte,
        "font-size": 11,
        color: tinta,
        "text-background-color": superficie,
        "text-background-opacity": 1,
        "text-background-padding": "2px",
        "text-rotation": "autorotate",
        "min-zoomed-font-size": 8,
      },
    },
    ...porGrupo,
    { selector: "edge.variacao", style: { "line-style": "dashed", "target-arrow-shape": "triangle", "line-color": tinta2, "target-arrow-color": tinta2 } },

    // Seleção e vizinhança
    { selector: ".apagado", style: { opacity: 0.15 } },
    // Relações ficam ocultas até que um nó seja selecionado ou que "Todas" seja ligada.
    { selector: "edge.rel", style: { display: "none" } },
    { selector: "edge.rel.todas, edge.rel.vizinho", style: { display: "element" } },
    { selector: "edge.vizinho", style: { opacity: 1, width: 2, "line-color": tinta, "target-arrow-color": tinta, label: "data(verbo)" } },
    { selector: "edge.rel.grupo-oculto", style: { display: "none" } },
    { selector: "node:selected", style: { "border-width": 4, "border-color": destaque } },
    { selector: "node.contem:selected", style: { "border-width": 3 } },

    // Avisos (cor de status + ícone no rótulo: nunca só cor)
    { selector: "node.com-aviso", style: { "border-color": alerta, "border-width": 3.5 } },

    // Processo ativo: os atores ("estações") ganham borda forte e os números das etapas no rótulo.
    { selector: "node.estacao", style: { "border-color": destaque, "border-width": 3, opacity: 1 } },
    { selector: "node.estacao-ativa", style: { "border-width": 6 } },

    // Objetos de competência: forma de etiqueta, fundo neutro e rótulo em itálico, para não se
    // confundirem com órgãos e cargos.
    {
      selector: "node.objeto",
      style: {
        shape: "round-tag",
        "background-color": tinta3,
        "background-opacity": 0.18,
        "border-width": 0,
        "font-style": "italic",
        "padding-left": "14px",
      },
    },
  ];
}

export class Mapa {
  readonly cy: Core;
  private processoAtivo = false;

  constructor(container: HTMLElement, private dados: Dados) {
    this.cy = cytoscape({
      container,
      elements: elementos(dados),
      style: estilo(),
      layout: { name: "preset" },
      minZoom: 0.08,
      maxZoom: 3,
      autoungrabify: true,
      boxSelectionEnabled: false,
    });
    this.cy.fit(undefined, 40);
  }

  reaplicarEstilo() {
    this.cy.style(estilo());
    this.cy.nodes().not(".regiao").forEach((n) => {
      const e = this.dados.get(n.id());
      if (e) n.data("cor", corDoPoder(poderDe(this.dados, e)));
    });
  }

  mostrarGrupo(grupo: string, visivel: boolean) {
    this.cy.edges(`.grupo-${grupo}`).toggleClass("grupo-oculto", !visivel);
  }

  mostrarTodasRelacoes(visivel: boolean) {
    this.cy.edges(".rel").toggleClass("todas", visivel);
  }

  /** Destaca um nó e suas relações. */
  selecionar(id: string | null, centralizar = false) {
    const cy = this.cy;
    cy.elements().removeClass("apagado vizinho");
    cy.nodes().unselect();
    if (!id) return;
    const no = cy.getElementById(id);
    if (no.empty()) return;
    no.select();
    if (centralizar) cy.animate({ center: { eles: no }, zoom: Math.max(cy.zoom(), 0.9) }, { duration: 300 });
    if (this.processoAtivo) return; // o processo já controla o que fica apagado
    // Num contêiner (ex.: Senado), mostra também as relações de tudo o que está dentro dele.
    const arestas = no.union(no.descendants()).connectedEdges(".rel, .variacao").not(".grupo-oculto");
    const vizinhos = arestas.connectedNodes().union(no).union(no.descendants()).union(no.ancestors()).union(arestas.connectedNodes().ancestors());
    cy.elements().not(vizinhos).not(arestas).not(".regiao").addClass("apagado");
    arestas.addClass("vizinho");
  }

  /** Camada de avisos: borda de alerta e ícone ⚠ no rótulo dos nós afetados. */
  mostrarAvisos(visivel: boolean) {
    this.cy.nodes(".com-aviso").forEach((n) => {
      n.removeClass("com-aviso");
      n.data("rotulo", n.data("rotuloBase"));
    });
    if (!visivel) return;
    for (const a of this.dados.todas("aviso")) {
      for (const alvo of a.afeta as string[]) {
        const id = this.dados.noDe(alvo);
        if (!id) continue;
        const n = this.cy.getElementById(id);
        if (!n.hasClass("com-aviso")) n.data("rotulo", `⚠ ${n.data("rotuloBase")}`);
        n.addClass("com-aviso");
      }
    }
  }

  /** Processo ativo: destaca os atores e põe no rótulo os números das etapas de que participam. */
  mostrarProcesso(processo: Entidade | null) {
    const cy = this.cy;
    cy.nodes(".estacao").forEach((n) => {
      n.removeClass("estacao estacao-ativa");
      n.data("rotulo", n.data("rotuloBase"));
    });
    cy.elements().removeClass("apagado vizinho");
    this.processoAtivo = !!processo;
    if (!processo) return;
    const etapasPorNo = new Map<string, number[]>();
    (processo.etapas as Etapa[]).forEach((etapa, i) => {
      for (const ator of etapa.atores) {
        const id = this.dados.noDe(ator);
        if (id) etapasPorNo.set(id, [...new Set([...(etapasPorNo.get(id) ?? []), i + 1])]);
      }
    });
    for (const [id, numeros] of etapasPorNo) {
      const n = cy.getElementById(id);
      n.addClass("estacao");
      n.data("rotulo", `(${numeros.join(", ")}) ${n.data("rotuloBase")}`);
    }
    const estacoes = cy.nodes(".estacao");
    cy.elements().not(estacoes).not(estacoes.ancestors()).not(".regiao").addClass("apagado");
  }

  /** Destaca os atores de uma etapa do processo ativo. */
  focarEtapa(etapa: Etapa | null) {
    const cy = this.cy;
    cy.nodes(".estacao-ativa").removeClass("estacao-ativa");
    if (!etapa) return;
    const atores = cy.collection();
    for (const a of etapa.atores) {
      const id = this.dados.noDe(a);
      if (id) atores.merge(cy.getElementById(id));
    }
    atores.addClass("estacao-ativa");
    if (atores.nonempty()) cy.animate({ fit: { eles: atores, padding: 120 } }, { duration: 300 });
  }
}
