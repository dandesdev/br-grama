// Desenho do mapa com Cytoscape. As posições vêm prontas do build (D29); aqui só aplicamos
// estilo, camadas e destaques.
import cytoscape, { type Core, type ElementDefinition, type StylesheetJson } from "cytoscape";
import { Dados, GRUPOS_RELACAO, type Etapa, type Entidade } from "./dados.ts";

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
  if (ocup.length === 1) {
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
        width: "data(w)",
        height: "data(h)",
        shape: "round-rectangle",
        "background-color": superficie,
        "border-width": 2,
        "border-color": "data(cor)",
        "border-style": "data(borda)" as never,
      },
    },
    { selector: "node.cargo", style: { "corner-radius": "999" } },
    {
      selector: "node.contem",
      style: {
        "text-valign": "top",
        "text-halign": "center",
        "text-margin-y": -4,
        "font-weight": 600,
        "background-color": "data(cor)",
        "background-opacity": 0.06,
        "border-width": 1.5,
        padding: "16px",
        "text-max-width": "400px",
      },
    },
    { selector: "node.poder", style: { "font-size": 15, "background-opacity": 0.03, "border-width": 1 } },
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
        "font-size": 15,
        "font-weight": 600,
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
    { selector: "edge.vizinho", style: { opacity: 1, width: 2, "line-color": tinta, "target-arrow-color": tinta, label: "data(verbo)" } },
    { selector: "node:selected", style: { "border-width": 4, "border-color": destaque } },
    { selector: "node.contem:selected", style: { "border-width": 3 } },

    // Achados (cor de status + ícone no rótulo: nunca só cor)
    { selector: "node.com-achado", style: { "border-color": alerta, "border-width": 3.5 } },

    // Linha de processo ("metrô")
    {
      selector: "edge.metro",
      style: {
        width: 5,
        "line-color": destaque,
        "target-arrow-color": destaque,
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
        opacity: 0.85,
        "line-style": "solid",
      },
    },
    { selector: "edge.metro.ativo", style: { opacity: 1, width: 7, label: "data(quando)" } },
    { selector: "edge.metro.inativo", style: { opacity: 0.25 } },
    { selector: "node.estacao", style: { "border-color": destaque, "border-width": 4, opacity: 1 } },
  ];
}

export class Mapa {
  readonly cy: Core;
  private gruposVisiveis = new Set(Object.keys(GRUPOS_RELACAO));
  private processoAtivo = false;

  constructor(container: HTMLElement, private dados: Dados) {
    this.cy = cytoscape({
      container,
      elements: elementos(dados),
      style: estilo(),
      layout: { name: "preset" },
      minZoom: 0.08,
      maxZoom: 3,
      wheelSensitivity: 0.3,
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
    if (visivel) this.gruposVisiveis.add(grupo);
    else this.gruposVisiveis.delete(grupo);
    this.cy.edges(`.grupo-${grupo}`).style("display", visivel ? "element" : "none");
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
    const arestas = no.connectedEdges(".rel, .variacao").filter((a) => a.style("display") !== "none");
    const vizinhos = arestas.connectedNodes().union(no).union(no.ancestors()).union(arestas.connectedNodes().ancestors());
    cy.elements().not(vizinhos).not(arestas).not(".regiao").not(".metro").addClass("apagado");
    arestas.addClass("vizinho");
  }

  /** Camada de achados: borda de alerta e ícone ⚠ no rótulo dos nós afetados. */
  mostrarAchados(visivel: boolean) {
    this.cy.nodes(".com-achado").forEach((n) => {
      n.removeClass("com-achado");
      n.data("rotulo", n.data("rotuloBase"));
    });
    if (!visivel) return;
    for (const a of this.dados.todas("achado")) {
      for (const alvo of a.afeta as string[]) {
        const id = this.dados.noDe(alvo);
        if (!id) continue;
        const n = this.cy.getElementById(id);
        if (!n.hasClass("com-achado")) n.data("rotulo", `⚠ ${n.data("rotuloBase")}`);
        n.addClass("com-achado");
      }
    }
  }

  /** Camada de processo: liga os atores de cada etapa aos da etapa seguinte. */
  mostrarProcesso(processo: Entidade | null) {
    const cy = this.cy;
    cy.remove(".metro");
    cy.nodes(".estacao").removeClass("estacao");
    cy.elements().removeClass("apagado vizinho");
    this.processoAtivo = !!processo;
    if (!processo) return;
    const etapas = processo.etapas as Etapa[];
    const porId = new Map(etapas.map((e) => [e.id, e]));
    const visto = new Set<string>();
    etapas.forEach((etapa) => {
      for (const s of etapa.seguintes) {
        const prox = porId.get(s.para);
        if (!prox) continue;
        for (const a of etapa.atores) for (const b of prox.atores) {
          const de = this.dados.noDe(a);
          const para = this.dados.noDe(b);
          if (!de || !para || de === para) continue;
          const id = `metro:${etapa.id}:${s.para}:${de}:${para}`;
          if (visto.has(id)) continue;
          visto.add(id);
          cy.add({
            group: "edges",
            data: { id, source: de, target: para, etapa: etapa.id, quando: s.quando ?? "" },
            classes: "metro",
          });
        }
      }
      for (const a of etapa.atores) {
        const id = this.dados.noDe(a);
        if (id) cy.getElementById(id).addClass("estacao");
      }
    });
    const estacoes = cy.nodes(".estacao");
    cy.elements().not(estacoes).not(estacoes.ancestors()).not(".metro").not(".regiao").addClass("apagado");
    cy.animate({ fit: { eles: estacoes, padding: 60 } }, { duration: 400 });
  }

  /** Destaca uma etapa do processo ativo. */
  focarEtapa(etapa: Etapa | null) {
    const metro = this.cy.edges(".metro");
    metro.removeClass("ativo inativo");
    if (!etapa) return;
    metro.forEach((a) => {
      a.addClass(a.data("etapa") === etapa.id ? "ativo" : "inativo");
    });
    const atores = this.cy.collection();
    for (const a of etapa.atores) {
      const id = this.dados.noDe(a);
      if (id) atores.merge(this.cy.getElementById(id));
    }
    if (atores.nonempty()) this.cy.animate({ fit: { eles: atores.union(metro.filter(".ativo").connectedNodes()), padding: 80 } }, { duration: 300 });
  }
}
