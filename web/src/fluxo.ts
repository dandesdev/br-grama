// Vista de processo em raias (D33): uma faixa por ator, etapas da esquerda para a direita.
// Raia: atores do Legislativo ficam na raia da sua Casa (ou do parlamento, nas sessões
// conjuntas); os demais, na raia do seu Poder. Etapas com atores de raias diferentes vão para
// a raia "Vários atores", no topo.
import cytoscape, { type Core, type ElementDefinition, type StylesheetJson } from "cytoscape";
import { Dados, type Entidade, type Etapa, type Regime } from "./dados.ts";

const LARGURA_ETAPA = 190;
const ALTURA_ETAPA = 92;
const PASSO_X = LARGURA_ETAPA + 70;
const ESPACO_Y = 18;
const MARGEM_RAIA = 22;
const LARGURA_ROTULO = 170;

interface Raia { chave: string; nome: string; poder: string }

const cor = (v: string) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const corDoPoder = (poder: string) =>
  ["executivo", "legislativo", "judiciario"].includes(poder) ? cor(`--${poder}`) : cor("--neutro");

function raiaDe(dados: Dados, atorId: string): Raia {
  const ator = dados.get(atorId);
  if (!ator) return { chave: atorId, nome: atorId, poder: "" };
  // Sobe a cadeia cargo → órgão → órgão que o contém.
  const cadeia: Entidade[] = [];
  let atual: Entidade | undefined = ator.tipo === "cargo" ? dados.get(ator.orgao as string) : ator;
  while (atual && !cadeia.includes(atual)) {
    cadeia.push(atual);
    atual = atual.contido_em ? dados.get(atual.contido_em as string) : undefined;
  }
  const poder = (cadeia.find((o) => o.poder)?.poder as string) ?? "";
  const casa = cadeia.find((o) => o.tipo_orgao === "legislativo-casa") ?? cadeia.find((o) => o.tipo_orgao === "legislativo-parlamento");
  if (casa) return { chave: casa.id, nome: casa.nome, poder };
  return { chave: `poder:${poder}`, nome: poder === "povo" ? "Povo" : `${dados.nomeDe("poder", poder)}`, poder };
}

function estilo(): StylesheetJson {
  const tinta = cor("--tinta");
  const tinta2 = cor("--tinta-2");
  const tinta3 = cor("--tinta-3");
  const superficie = cor("--superficie");
  const plano = cor("--plano");
  const destaque = cor("--destaque");
  const fonte = 'system-ui, -apple-system, "Segoe UI", sans-serif';
  return [
    {
      selector: "node.raia",
      style: {
        shape: "rectangle",
        width: "data(w)",
        height: "data(h)",
        "background-color": plano,
        "border-width": 1,
        "border-color": cor("--linha"),
        events: "no",
        // As faixas ficam atrás das setas: por padrão o Cytoscape desenha nós sobre arestas.
        "z-index-compare": "manual",
        "z-index": 0,
      },
    },
    {
      selector: "node.raia-rotulo",
      style: {
        label: "data(rotulo)",
        width: 1,
        height: 1,
        "background-opacity": 0,
        "border-width": 0,
        "font-family": fonte,
        "font-size": 13,
        "font-weight": 600,
        color: tinta2,
        "text-wrap": "wrap",
        "text-max-width": `${LARGURA_ROTULO - 24}px`,
        events: "no",
      },
    },
    {
      selector: "node.etapa",
      style: {
        label: "data(rotulo)",
        shape: "round-rectangle",
        width: LARGURA_ETAPA,
        height: ALTURA_ETAPA,
        "background-color": superficie,
        "border-width": 2,
        "border-color": "data(cor)",
        "font-family": fonte,
        "font-size": 11.5,
        color: tinta,
        "text-wrap": "wrap",
        "text-max-width": `${LARGURA_ETAPA - 18}px`,
        "text-valign": "center",
        "min-zoomed-font-size": 6,
        "z-index-compare": "manual",
        "z-index": 20,
      },
    },
    { selector: "node.etapa.fim", style: { "corner-radius": "999", "background-color": tinta3, "background-opacity": 0.15 } },
    { selector: "node.etapa:selected", style: { "border-width": 5, "border-color": destaque } },
    { selector: "node.etapa.regime", style: { "border-width": 4, "border-style": "double" } },
    {
      selector: "edge",
      style: {
        width: 1.5,
        "curve-style": "taxi",
        "taxi-direction": "horizontal",
        "taxi-turn": "50%",
        "line-color": tinta3,
        "target-arrow-color": tinta3,
        "target-arrow-shape": "triangle",
        "arrow-scale": 0.9,
        "font-family": fonte,
        "font-size": 11,
        color: tinta,
        "text-background-color": superficie,
        "text-background-opacity": 1,
        "text-background-padding": "2px",
        "text-wrap": "wrap",
        "text-max-width": "160px",
        "z-index-compare": "manual",
        "z-index": 10,
      },
    },
    // Voltas (para uma etapa anterior, como Senado → Câmara) em curva, para não cruzar as colunas.
    { selector: "edge.volta", style: { "curve-style": "unbundled-bezier", "control-point-distances": [-90], "line-style": "dashed" } },
    { selector: "edge.saindo", style: { width: 3, "line-color": destaque, "target-arrow-color": destaque, label: "data(quando)", "z-index": 10 } },
    { selector: ".apagado", style: { opacity: 0.25 } },
  ];
}

export class Fluxo {
  readonly cy: Core;
  private processo: Entidade | null = null;

  constructor(container: HTMLElement, private dados: Dados, aoTocarEtapa: (etapaId: string) => void) {
    this.cy = cytoscape({ container, style: estilo(), minZoom: 0.15, maxZoom: 2.5, autoungrabify: true, boxSelectionEnabled: false });
    this.cy.on("tap", "node.etapa", (ev) => aoTocarEtapa(ev.target.data("etapa")));
  }

  reaplicarEstilo() {
    this.cy.style(estilo());
    if (this.processo) this.mostrar(this.processo);
  }

  mostrar(processo: Entidade) {
    this.processo = processo;
    const etapas = processo.etapas as Etapa[];
    const indice = new Map(etapas.map((e, i) => [e.id, i]));

    // Coluna: maior caminho desde o início, considerando só ligações para etapas posteriores.
    const coluna = etapas.map(() => 0);
    etapas.forEach((e, i) => {
      for (const s of e.seguintes) {
        const j = indice.get(s.para)!;
        if (j > i) coluna[j] = Math.max(coluna[j], coluna[i] + 1);
      }
    });

    // Raias, na ordem em que aparecem; "Vários atores" sempre no topo.
    const VARIOS: Raia = { chave: "varios", nome: "Vários atores", poder: "" };
    const raias: Raia[] = [];
    const raiaDaEtapa = etapas.map((e) => {
      const rs = [...new Map(e.atores.map((a) => raiaDe(this.dados, a)).map((r) => [r.chave, r])).values()];
      const r = rs.length === 1 ? rs[0] : rs.length === 0 ? raias[raias.length - 1] ?? VARIOS : VARIOS;
      if (!raias.some((x) => x.chave === r.chave)) raias.push(r);
      return r;
    });
    raias.sort((a, b) => (a === VARIOS ? -1 : b === VARIOS ? 1 : 0));

    // Empilha etapas que caem na mesma raia e coluna.
    const pilha = new Map<string, number>();
    const posicao = etapas.map((_, i) => {
      const chave = `${raiaDaEtapa[i].chave}|${coluna[i]}`;
      const n = pilha.get(chave) ?? 0;
      pilha.set(chave, n + 1);
      return n;
    });
    const altura = new Map(raias.map((r) => [r.chave, 1]));
    for (const [chave, n] of pilha) {
      const raia = chave.split("|")[0];
      altura.set(raia, Math.max(altura.get(raia)!, n));
    }

    const larguraTotal = LARGURA_ROTULO + (Math.max(...coluna) + 1) * PASSO_X;
    const topo = new Map<string, number>();
    let y = 0;
    const els: ElementDefinition[] = [];
    for (const r of raias) {
      const h = altura.get(r.chave)! * (ALTURA_ETAPA + ESPACO_Y) - ESPACO_Y + 2 * MARGEM_RAIA;
      topo.set(r.chave, y);
      els.push({ data: { id: `raia:${r.chave}`, w: larguraTotal, h }, position: { x: larguraTotal / 2 - LARGURA_ROTULO, y: y + h / 2 }, classes: "raia" });
      els.push({ data: { id: `rotulo:${r.chave}`, rotulo: r.nome }, position: { x: -LARGURA_ROTULO / 2, y: y + h / 2 }, classes: "raia-rotulo" });
      y += h;
    }

    etapas.forEach((e, i) => {
      const r = raiaDaEtapa[i];
      const cores = e.atores.map((a) => raiaDe(this.dados, a).poder);
      const marca = e.tipo_etapa === "decisao" ? "◆ " : e.tipo_etapa === "decurso-de-prazo" ? "⏳ " : "";
      els.push({
        data: {
          id: `etapa:${e.id}`,
          etapa: e.id,
          rotulo: `${i + 1}. ${marca}${e.acao}`,
          rotuloBase: `${i + 1}. ${marca}${e.acao}`,
          cor: corDoPoder(cores.length && cores.every((c) => c === cores[0]) ? cores[0] : ""),
        },
        position: {
          x: coluna[i] * PASSO_X + LARGURA_ETAPA / 2,
          y: topo.get(r.chave)! + MARGEM_RAIA + posicao[i] * (ALTURA_ETAPA + ESPACO_Y) + ALTURA_ETAPA / 2,
        },
        classes: `etapa ${e.tipo_etapa === "fim" ? "fim" : ""}`,
      });
    });

    etapas.forEach((e, i) => {
      for (const s of e.seguintes) {
        const j = indice.get(s.para)!;
        const quando = s.quando ? (s.quando.length > 70 ? `${s.quando.slice(0, 68)}…` : s.quando) : "";
        els.push({
          data: { id: `liga:${e.id}:${s.para}`, source: `etapa:${e.id}`, target: `etapa:${s.para}`, quando },
          classes: coluna[j] <= coluna[i] ? "volta" : "",
        });
      }
    });

    this.cy.elements().remove();
    this.cy.add(els);
    this.enquadrar();
  }

  /** Mostra o fluxo inteiro se couber legível; senão, começa pela esquerda num zoom de leitura. */
  enquadrar() {
    const cy = this.cy;
    cy.resize();
    cy.fit(undefined, 20);
    const ZOOM_LEITURA = 0.75;
    if (cy.zoom() < ZOOM_LEITURA) {
      cy.zoom(ZOOM_LEITURA);
      cy.pan({ x: 16 + LARGURA_ROTULO * ZOOM_LEITURA, y: 16 });
    }
  }

  focarEtapa(etapaId: string | null) {
    const cy = this.cy;
    cy.elements().removeClass("saindo apagado");
    cy.nodes().unselect();
    if (!etapaId) return;
    const no = cy.getElementById(`etapa:${etapaId}`);
    no.select();
    const saindo = no.outgoers("edge");
    saindo.addClass("saindo");
    const visiveis = no.union(saindo).union(saindo.targets()).union(no.incomers());
    cy.elements(".etapa, edge").not(visiveis).addClass("apagado");
    cy.animate({ center: { eles: no } }, { duration: 250 });
  }

  /** Destaca as etapas afetadas por um regime (ex.: urgência). */
  destacarRegime(regime: Regime | null) {
    this.cy.nodes(".etapa").forEach((n) => {
      n.removeClass("regime");
      n.data("rotulo", n.data("rotuloBase"));
    });
    for (const ef of regime?.efeitos ?? []) {
      const n = this.cy.getElementById(`etapa:${ef.etapa}`);
      n.addClass("regime");
      n.data("rotulo", `⏱ ${n.data("rotuloBase")}`);
    }
  }
}
