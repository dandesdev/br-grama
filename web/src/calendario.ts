// Aba "Calendário" (D55, D56): os ciclos no tempo (D24 d). Duas linhas do tempo em HTML:
// 1) as etapas datadas dos processos (campo `datas` da etapa), de 1º/1/2026 a 31/12/2027;
// 2) os mandatos de quem ocupa um cargo, do início ao fim (ou ao fim previsto pelo mandato do cargo).
// Uma linha vertical marca a data de referência. Abaixo da primeira, a mesma informação em lista,
// ordenada por data, para quem não enxerga a linha do tempo.
import { Dados, formatarData, type Entidade, type Etapa } from "./dados.ts";

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const dia = (d: string) => Date.UTC(Number(d.slice(0, 4)), Number(d.slice(5, 7)) - 1, Number(d.slice(8, 10)));
const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

interface Ocorrencia { processo: Entidade; etapa: Etapa; de: string; ate?: string; nota?: string }

/** Eixo de tempo: converte data em porcentagem da largura. */
class Eixo {
  readonly ini: number;
  readonly fim: number;
  constructor(de: string, ate: string) {
    this.ini = dia(de);
    this.fim = dia(ate);
  }
  pct(d: string): number {
    return Math.min(100, Math.max(0, (100 * (dia(d) - this.ini)) / (this.fim - this.ini)));
  }
}

export class Calendario {
  private cargo = "";

  constructor(
    private el: HTMLElement,
    private dados: Dados,
    private aoEscolherEtapa: (processoId: string, etapaId: string) => void,
    private aoEscolher: (id: string) => void,
  ) {
    el.addEventListener("click", (ev) => {
      const alvo = (ev.target as HTMLElement).closest<HTMLElement>("[data-etapa], [data-id]");
      if (!alvo) return;
      if (alvo.dataset.etapa) this.aoEscolherEtapa(alvo.dataset.processo!, alvo.dataset.etapa);
      else this.aoEscolher(alvo.dataset.id!);
    });
    el.addEventListener("change", (ev) => {
      const s = ev.target as HTMLSelectElement;
      if (s.id !== "calendario-cargo") return;
      this.cargo = s.value;
      this.el.querySelector("#calendario-mandatos")!.innerHTML = this.mandatos();
    });
  }

  private ocorrencias(): Ocorrencia[] {
    const lista: Ocorrencia[] = [];
    for (const p of this.dados.todas("processo"))
      for (const e of p.etapas as Etapa[]) for (const d of e.datas ?? []) lista.push({ processo: p, etapa: e, ...d });
    return lista.sort((a, b) => a.de.localeCompare(b.de));
  }

  private reguaMeses(eixo: Eixo, de: number, ate: number, passo: number, rotulo: (ano: number, mes: number) => string): string {
    const marcas: string[] = [];
    for (let ano = de; ano <= ate; ano++)
      for (let mes = 0; mes < 12; mes += passo) {
        const d = `${ano}-${String(mes + 1).padStart(2, "0")}-01`;
        marcas.push(`<span class="marca${mes === 0 ? " ano" : ""}" style="left:${eixo.pct(d)}%">${esc(rotulo(ano, mes))}</span>`);
      }
    return `<div class="regua">${marcas.join("")}</div>`;
  }

  private hoje(eixo: Eixo): string {
    return `<span class="hoje" style="left:${eixo.pct(this.dados.data)}%" title="Data do retrato: ${formatarData(this.dados.data)}"></span>`;
  }

  private ciclos(): string {
    const eixo = new Eixo("2026-01-01", "2028-01-01");
    const oc = this.ocorrencias();
    if (!oc.length) return `<p class="intro">Ainda não há etapas com data.</p>`;
    const porProcesso = new Map<string, Ocorrencia[]>();
    for (const o of oc) porProcesso.set(o.processo.id, [...(porProcesso.get(o.processo.id) ?? []), o]);
    const linhas = [...porProcesso.values()]
      .map((os) => {
        const p = os[0].processo;
        const marcas = os
          .map((o) => {
            const titulo = `${o.etapa.acao}\n${formatarData(o.de)}${o.ate ? ` a ${formatarData(o.ate)}` : ""}${o.nota ? `\n${o.nota}` : ""}`;
            const esquerda = eixo.pct(o.de);
            const largura = o.ate ? Math.max(0.4, eixo.pct(o.ate) - esquerda) : 0;
            const classe = o.ate ? "faixa" : "ponto";
            return `<button class="${classe}" style="left:${esquerda}%;${o.ate ? `width:${largura}%` : ""}" data-processo="${esc(p.id)}" data-etapa="${esc(o.etapa.id)}" title="${esc(titulo)}" aria-label="${esc(`${o.etapa.acao}, ${formatarData(o.de)}`)}"></button>`;
          })
          .join("");
        return `<div class="linha-tempo"><div class="rotulo"><button class="link" data-id="${esc(p.id)}">${esc(p.nome)}</button></div><div class="trilho-tempo">${marcas}${this.hoje(eixo)}</div></div>`;
      })
      .join("");
    const regua = this.reguaMeses(eixo, 2026, 2027, 1, (ano, mes) => (mes === 0 ? String(ano) : MESES[mes]));
    const ref = dia(this.dados.data);
    const perto = oc.filter((o) => Math.abs(dia(o.de) - ref) <= 75 * 864e5 || (o.ate && dia(o.de) <= ref && dia(o.ate) >= ref));
    const lista = perto
      .map(
        (o) =>
          `<li><span class="data">${formatarData(o.de)}${o.ate ? ` a ${formatarData(o.ate)}` : ""}</span> <button class="link" data-processo="${esc(o.processo.id)}" data-etapa="${esc(o.etapa.id)}">${esc(o.etapa.acao)}</button> <span class="sub">(${esc(o.processo.nome)})</span></li>`,
      )
      .join("");
    return `<div class="tempo"><div class="linha-tempo cabeca"><div class="rotulo"></div>${regua}</div>${linhas}</div>
      <h3>Em volta de ${formatarData(this.dados.data)}</h3>
      <ul class="agenda">${lista || "<li>Nada datado nesse intervalo.</li>"}</ul>`;
  }

  /** Cargos com ocupante na data, para o seletor de mandatos. */
  private cargosComOcupante(): Entidade[] {
    const ids = new Set(this.dados.todas("relacao").filter((r) => r.relacao === "ocupa").map((r) => r.para as string));
    return [...ids]
      .map((id) => this.dados.get(id))
      .filter((c): c is Entidade => !!c && c.tipo === "cargo")
      .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  }

  private mandatos(): string {
    const cargo = this.dados.get(this.cargo);
    if (!cargo) return "";
    const anos = (cargo.mandato as { anos?: number } | null | undefined)?.anos;
    const rels = this.dados.relacoesChegando(cargo.id).filter((r) => r.relacao === "ocupa");
    if (!rels.length) return `<p class="intro">Ninguém ocupa esse cargo no retrato.</p>`;
    const itens = rels.map((r) => {
      const de = r.vigencia?.de ?? null;
      let fim = r.vigencia?.ate ?? null;
      let previsto = false;
      if (!fim && de && anos) {
        fim = `${Number(de.slice(0, 4)) + anos}${de.slice(4)}`;
        previsto = true;
      }
      return { r, de, fim, previsto, pessoa: this.dados.get(r.de as string) };
    });
    const datas = itens.flatMap((i) => [i.de, i.fim]).filter((d): d is string => !!d);
    const anoIni = Math.min(2026, ...datas.map((d) => Number(d.slice(0, 4))));
    const anoFim = Math.max(2027, ...datas.map((d) => Number(d.slice(0, 4))));
    const eixo = new Eixo(`${anoIni}-01-01`, `${anoFim + 1}-01-01`);
    const passo = anoFim - anoIni > 8 ? 12 : 6;
    const regua = this.reguaMeses(eixo, anoIni, anoFim, passo, (ano, mes) => (mes === 0 ? String(ano) : MESES[mes]));
    const linhas = itens
      .sort((a, b) => (a.de ?? "9").localeCompare(b.de ?? "9"))
      .map((i) => {
        const nome = i.pessoa?.nome ?? (i.r.de as string);
        const pasta = i.r.orgao_exercicio ? this.dados.get(i.r.orgao_exercicio as string)?.nome : undefined;
        if (!i.de) return `<div class="linha-tempo"><div class="rotulo"><button class="link" data-id="${esc(i.r.de)}">${esc(nome)}</button>${pasta ? `<div class="sub">${esc(pasta)}</div>` : ""}</div><div class="trilho-tempo"><span class="sem-data">início não registrado</span>${this.hoje(eixo)}</div></div>`;
        const esquerda = eixo.pct(i.de);
        const direita = i.fim ? eixo.pct(i.fim) : 100;
        const titulo = `${nome}: desde ${formatarData(i.de)}${i.fim ? `${i.previsto ? ", fim previsto em " : " até "}${formatarData(i.fim)}` : ", sem fim definido"}${i.r.interino ? " (em exercício)" : ""}`;
        return `<div class="linha-tempo"><div class="rotulo"><button class="link" data-id="${esc(i.r.de)}">${esc(nome)}</button>${pasta ? `<div class="sub">${esc(pasta)}</div>` : ""}</div><div class="trilho-tempo"><span class="mandato${i.previsto || !i.fim ? " previsto" : ""}" style="left:${esquerda}%;width:${Math.max(0.4, direita - esquerda)}%" title="${esc(titulo)}"></span>${this.hoje(eixo)}</div></div>`;
      })
      .join("");
    const nota = anos ? `Mandato de ${anos} ano${anos > 1 ? "s" : ""}. Barra tracejada: fim previsto pelo mandato, sem data registrada.` : "Cargo sem mandato fixo: a barra vai até o fim do eixo.";
    return `<p class="intro">${esc(nota)}</p><div class="tempo"><div class="linha-tempo cabeca"><div class="rotulo"></div>${regua}</div>${linhas}</div>`;
  }

  mostrar() {
    const cargos = this.cargosComOcupante();
    if (!this.cargo) this.cargo = cargos.find((c) => c.id === "cargo:presidente-da-republica")?.id ?? cargos[0]?.id ?? "";
    this.el.innerHTML = `
      <div class="dinheiro-topo">
        <h2>Calendário</h2>
        <p class="intro">O que o Estado faz em datas certas: o ciclo do orçamento, a sessão legislativa, as eleições, os relatórios fiscais. Cada ponto é uma etapa de um processo, na data que a norma fixa para 2026 e 2027; faixas são períodos. A linha vertical marca a data do retrato. Clique numa etapa para ver o processo.</p>
      </div>
      <section>${this.ciclos()}</section>
      <section>
        <h3>Mandatos</h3>
        <p class="intro">Quem ocupa o cargo na data do retrato, desde quando e até quando.</p>
        <select id="calendario-cargo" aria-label="Escolha o cargo">${cargos.map((c) => `<option value="${esc(c.id)}"${c.id === this.cargo ? " selected" : ""}>${esc(c.nome)}</option>`).join("")}</select>
        <div id="calendario-mandatos">${this.mandatos()}</div>
      </section>`;
  }
}
