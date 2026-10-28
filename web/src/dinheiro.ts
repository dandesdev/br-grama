// Aba "Dinheiro" (D48): quanto a União pagou no último ano fechado, por Poder e por órgão, e quanto
// repassou a estados, municípios e outros pelas relações repassa-recursos (D24 c). Barras em HTML,
// uma série por bloco, com o valor escrito ao lado de cada barra e o detalhe no título (hover).
import { Dados, normalizar, reais, type Entidade, type ValoresOrcamento } from "./dados.ts";

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const PODERES = [
  { id: "org:poder-executivo-federal", nome: "Executivo" },
  { id: "org:poder-judiciario", nome: "Judiciário" },
  { id: "org:poder-legislativo-federal", nome: "Legislativo" },
  { id: "org:ministerio-publico-da-uniao", nome: "Ministério Público da União" },
  { id: "org:dpu", nome: "Defensoria Pública da União" },
  { id: "org:cnmp", nome: "Conselho Nacional do Ministério Público" },
];
const AGREGADOS = new Set(["ente:uniao", ...PODERES.slice(0, 3).map((p) => p.id), "org:justica-federal", "org:justica-do-trabalho", "org:justica-eleitoral", "org:ministerio-publico-da-uniao"]);

interface Barra { id: string; rotulo: string; valor: number; titulo: string; sub?: string }

export class Dinheiro {
  private filtroPoder = "";
  private busca = "";

  constructor(private el: HTMLElement, private dados: Dados, private aoEscolher: (id: string) => void) {
    el.addEventListener("click", (ev) => {
      const b = (ev.target as HTMLElement).closest<HTMLElement>("[data-id]");
      if (b) this.aoEscolher(b.dataset.id!);
    });
    el.addEventListener("input", (ev) => {
      const alvo = ev.target as HTMLInputElement | HTMLSelectElement;
      if (alvo.id === "dinheiro-poder") this.filtroPoder = alvo.value;
      else if (alvo.id === "dinheiro-busca") this.busca = normalizar(alvo.value.trim());
      else return;
      this.el.querySelector("#dinheiro-orgaos")!.innerHTML = this.listaOrgaos();
    });
  }

  private barras(itens: Barra[], max = Math.max(...itens.map((i) => i.valor))): string {
    if (!itens.length) return `<p class="intro">Nada a mostrar com esse filtro.</p>`;
    return `<table class="barras"><tbody>${itens
      .map(
        (i) => `<tr title="${esc(i.titulo)}">
          <th scope="row"><button class="link" data-id="${esc(i.id)}">${esc(i.rotulo)}</button>${i.sub ? `<div class="sub">${esc(i.sub)}</div>` : ""}</th>
          <td class="trilho"><span class="barra-valor" style="width:${Math.max(0.3, (100 * i.valor) / max)}%"></span></td>
          <td class="valor">${reais(i.valor, true)}</td>
        </tr>`,
      )
      .join("")}</tbody></table>`;
  }

  private titulo(m: Entidade): string {
    const v = m.valores as ValoresOrcamento;
    return [`Pago em ${m.exercicio}: ${reais(v.pagamentos_totais)}`, v.dotacao_atualizada !== undefined ? `Dotação atualizada: ${reais(v.dotacao_atualizada)}` : "", v.restos_a_pagar_pagos ? `Inclui ${reais(v.restos_a_pagar_pagos)} de restos a pagar de anos anteriores` : ""]
      .filter(Boolean)
      .join("\n");
  }

  private poderDe(e: Entidade | undefined): string {
    if (!e) return "";
    if (["ministerio-publico", "defensoria-publica", "ministerio-publico-orgao-de-controle"].includes(e.tipo_orgao as string)) return "funcoes";
    return (e.poder as string) === "funcoes-essenciais-a-justica" ? "funcoes" : ((e.poder as string) ?? "");
  }

  private listaOrgaos(): string {
    const itens = this.dados
      .todosOrcamentos()
      .filter((m) => !AGREGADOS.has(m.de as string))
      .map((m) => ({ m, e: this.dados.get(m.de as string) }))
      .filter(({ e }) => !this.filtroPoder || this.poderDe(e) === this.filtroPoder)
      .filter(({ e }) => !this.busca || normalizar(`${e?.nome ?? ""} ${e?.sigla ?? ""}`).includes(this.busca))
      .sort((a, b) => (b.m.valores as ValoresOrcamento).pagamentos_totais - (a.m.valores as ValoresOrcamento).pagamentos_totais)
      .map(({ m, e }) => ({
        id: m.de as string,
        rotulo: e?.nome ?? (m.de as string),
        valor: (m.valores as ValoresOrcamento).pagamentos_totais,
        titulo: this.titulo(m),
        sub: e?.contido_em ? this.dados.get(e.contido_em as string)?.nome : undefined,
      }));
    return this.barras(itens);
  }

  mostrar() {
    const d = this.dados;
    const uniao = d.orcamentoDe("ente:uniao");
    if (!uniao) {
      this.el.innerHTML = `<p class="intro">Ainda não há dados de orçamento.</p>`;
      return;
    }
    const ano = uniao.exercicio as number;
    const vu = uniao.valores as ValoresOrcamento;
    const supU = (uniao.sob_supervisao as { valores: ValoresOrcamento } | undefined)?.valores.pagamentos_totais ?? 0;

    const poderes: Barra[] = PODERES.map((p) => ({ p, m: d.orcamentoDe(p.id) }))
      .filter((x): x is { p: (typeof PODERES)[number]; m: Entidade } => !!x.m)
      .map(({ p, m }) => ({ id: p.id, rotulo: p.nome, valor: (m.valores as ValoresOrcamento).pagamentos_totais, titulo: this.titulo(m) }));

    const supervisao: Barra[] = d
      .todosOrcamentos()
      .filter((m) => m.sob_supervisao && !AGREGADOS.has(m.de as string) && !(m.de as string).startsWith("org:poder"))
      .map((m) => ({ m, s: (m.sob_supervisao as { valores: ValoresOrcamento }).valores }))
      .filter(({ s }) => s.pagamentos_totais > 1e8)
      .sort((a, b) => b.s.pagamentos_totais - a.s.pagamentos_totais)
      .map(({ m, s }) => ({ id: m.de as string, rotulo: d.get(m.de as string)?.nome ?? (m.de as string), valor: s.pagamentos_totais, titulo: `Recursos sob supervisão pagos em ${ano}: ${reais(s.pagamentos_totais)}` }));

    const destino = (r: Entidade | undefined) => {
      const para = (r?.para as string) ?? "";
      return para === "ente:arquetipo-estadual" ? "Estados e DF" : para === "ente:arquetipo-municipal" ? "Municípios" : "Fundos, bancos e partidos";
    };
    const grupos = new Map<string, Barra[]>();
    for (const f of d.todosFluxos()) {
      const r = d.get(f.repasse as string);
      const g = destino(r);
      grupos.set(g, [
        ...(grupos.get(g) ?? []),
        { id: f.repasse as string, rotulo: (r?.nome as string) ?? (f.repasse as string), valor: (f.valores as ValoresOrcamento).pagamentos_totais, titulo: `${reais((f.valores as ValoresOrcamento).pagamentos_totais)} pagos em ${ano}` },
      ]);
    }
    const maxFluxo = Math.max(...[...grupos.values()].flat().map((b) => b.valor));
    const repasses = ["Estados e DF", "Municípios", "Fundos, bancos e partidos"]
      .filter((g) => grupos.has(g))
      .map((g) => {
        const itens = grupos.get(g)!.sort((a, b) => b.valor - a.valor);
        const total = itens.reduce((s, b) => s + b.valor, 0);
        return `<h3>${esc(g)} <span class="sub">${reais(total, true)}</span></h3>${this.barras(itens, maxFluxo)}`;
      })
      .join("");

    this.el.innerHTML = `
      <div class="dinheiro-topo">
        <h2>Dinheiro da União em ${ano}</h2>
        <p class="intro">Quanto cada parte do Estado federal pagou no último ano fechado e quanto a União repassou a estados, municípios e outros. Valores pagos no ano, inclusive restos a pagar de anos anteriores; a dotação aprovada aparece ao passar o mouse e no painel. Fonte: Tesouro Nacional.</p>
        <div class="numeros">
          <div class="numero"><span class="rotulo">Pago pelos órgãos</span><strong>${reais(vu.pagamentos_totais)}</strong></div>
          <div class="numero"><span class="rotulo">Encargos financeiros, dívida, transferências e operações de crédito</span><strong>${reais(supU)}</strong></div>
        </div>
      </div>
      <section>
        <h3>Por Poder</h3>
        ${this.barras(poderes)}
      </section>
      <section>
        <h3>Repasses pagos em ${ano}, pela relação que os prevê</h3>
        <p class="intro">Cada barra é uma relação "repassa recursos" do mapa. Os repasses aos estados e municípios saem, em boa parte, dos recursos sob supervisão do Ministério da Fazenda.</p>
        ${repasses}
      </section>
      <section>
        <h3>Órgãos com orçamento próprio</h3>
        <p class="intro">Ministérios incluem as entidades vinculadas a eles (a Anvisa entra no Ministério da Saúde e aparece também sozinha). Órgãos sem unidade orçamentária própria, como as secretarias da Presidência e as estatais que não dependem do Tesouro, não aparecem.</p>
        <div class="matriz-filtros">
          <select id="dinheiro-poder" aria-label="Filtrar por Poder">
            <option value="">Todos os Poderes</option>
            <option value="executivo">Executivo</option>
            <option value="judiciario">Judiciário</option>
            <option value="legislativo">Legislativo</option>
            <option value="funcoes">Funções essenciais à Justiça</option>
          </select>
          <input id="dinheiro-busca" type="search" placeholder="Filtrar pelo nome…" aria-label="Filtrar órgãos pelo nome" />
        </div>
        <div id="dinheiro-orgaos">${this.listaOrgaos()}</div>
      </section>
      <section>
        <h3>Recursos sob supervisão</h3>
        <p class="intro">Na lei orçamentária, encargos financeiros, dívida pública, transferências constitucionais e operações oficiais de crédito são órgãos próprios, supervisionados por um ministério. Ficam fora do valor do ministério para não parecer que o Ministério da Fazenda gasta trilhões consigo mesmo.</p>
        ${this.barras(supervisao)}
      </section>`;
  }
}
