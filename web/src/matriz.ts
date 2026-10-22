// Matriz de competências (D38): matérias nas linhas; União, estados e municípios nas colunas; em
// cada célula, o tipo de competência e se ela é para legislar ou para executar.
// É uma tabela HTML, não um grafo: assim continua legível com centenas de matérias.
import { Dados, normalizar, type Entidade } from "./dados.ts";

const COLUNAS = [
  { ente: "ente:uniao", nome: "União" },
  { ente: "ente:arquetipo-estadual", nome: "Estados" },
  { ente: "ente:arquetipo-municipal", nome: "Municípios" },
];

interface Competencia { tipo: string; natureza: string; nota?: string }

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Ordena pelo dispositivo da primeira fonte ("art. 22, XI" → 22, 11), para seguir a ordem da CF. */
function chaveDispositivo(rels: Entidade[]): [number, number] {
  const romano = (r: string) => {
    const v: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100 };
    let total = 0;
    for (let i = 0; i < r.length; i++) {
      const atual = v[r[i]] ?? 0;
      total += atual < (v[r[i + 1]] ?? 0) ? -atual : atual;
    }
    return total;
  };
  let melhor: [number, number] = [999, 999];
  for (const r of rels) {
    for (const f of r.fontes ?? []) {
      // Depois do artigo: inciso romano ("XI"), parágrafo ("§ 2º") ou "parágrafo único".
      // Parágrafos vêm depois de todos os incisos, como na CF.
      const m = String(f.dispositivo ?? "").match(/art\.\s*(\d+)[^,]*(?:,\s*(?:([IVXLC]+)\b|§\s*(\d+)|(par[aá]grafo [uú]nico)))?/i);
      if (m) {
        const sub = m[2] ? romano(m[2]) : m[3] ? 900 + Number(m[3]) : m[4] ? 900 : 0;
        const k: [number, number] = [Number(m[1]), sub];
        if (k[0] < melhor[0] || (k[0] === melhor[0] && k[1] < melhor[1])) melhor = k;
      }
    }
  }
  return melhor;
}

export class Matriz {
  private filtroTexto = "";
  private filtroNatureza = "";

  constructor(private el: HTMLElement, private dados: Dados, private aoSelecionar: (id: string) => void) {
    el.addEventListener("click", (ev) => {
      const linha = (ev.target as HTMLElement).closest<HTMLElement>("[data-id]");
      if (linha) this.aoSelecionar(linha.dataset.id!);
    });
    el.addEventListener("input", (ev) => {
      const alvo = ev.target as HTMLInputElement | HTMLSelectElement;
      if (alvo.name === "busca-materia") this.filtroTexto = normalizar(alvo.value.trim());
      if (alvo.name === "natureza") this.filtroNatureza = alvo.value;
      this.desenharLinhas();
    });
  }

  mostrar() {
    this.el.innerHTML = `
      <div class="matriz-topo">
        <h2>Quem cuida de quê</h2>
        <p class="intro">Competências que a Constituição dá à União, aos estados e aos municípios. O Distrito Federal legisla sobre o que cabe a estados e municípios (art. 32, § 1º) e aparece ao lado dos estados nas competências comuns e concorrentes (arts. 23 e 24). Clique numa linha para ver os detalhes e a base legal.</p>
        <div class="matriz-filtros">
          <input type="search" name="busca-materia" placeholder="Filtrar matérias…" aria-label="Filtrar matérias" />
          <select name="natureza" aria-label="Natureza da competência">
            <option value="">Legislar e executar</option>
            <option value="legislativa">Só legislar</option>
            <option value="material">Só executar</option>
          </select>
        </div>
      </div>
      <table class="matriz">
        <thead><tr><th scope="col">Matéria</th>${COLUNAS.map((c) => `<th scope="col">${c.nome}</th>`).join("")}</tr></thead>
        <tbody></tbody>
      </table>`;
    this.desenharLinhas();
  }

  private desenharLinhas() {
    const corpo = this.el.querySelector("tbody");
    if (!corpo) return;
    const materias = this.dados.todas("objeto").filter((o) => o.tipo_objeto === "materia");
    if (!materias.length) {
      corpo.innerHTML = `<tr><td colspan="${COLUNAS.length + 1}" class="intro">As competências ainda estão sendo pesquisadas.</td></tr>`;
      return;
    }
    const linhas = materias
      .map((m) => {
        const rels = this.dados.relacoesChegando(m.id).filter((r) => r.relacao === "tem-competencia");
        return { m, rels, chave: chaveDispositivo(rels) };
      })
      .filter(({ m, rels }) => {
        if (this.filtroTexto && !normalizar(`${m.nome} ${m.resumo ?? ""}`).includes(this.filtroTexto)) return false;
        if (this.filtroNatureza && !rels.some((r) => (r.competencia as Competencia).natureza === this.filtroNatureza)) return false;
        return true;
      })
      .sort((a, b) => a.chave[0] - b.chave[0] || a.chave[1] - b.chave[1] || a.m.nome.localeCompare(b.m.nome, "pt-BR"));

    corpo.innerHTML = linhas
      .map(({ m, rels }) => {
        const celulas = COLUNAS.map(({ ente }) => {
          const doEnte = rels.filter((r) => r.de === ente && (!this.filtroNatureza || (r.competencia as Competencia).natureza === this.filtroNatureza));
          return `<td>${doEnte
            .map((r) => {
              const c = r.competencia as Competencia;
              const dispositivo = (r.fontes ?? []).map((f) => f.dispositivo).filter(Boolean).join("; ");
              return `<span class="competencia ${esc(c.natureza)}" title="${esc(this.dados.definicao("tipo_competencia", c.tipo))} ${esc(dispositivo)}">${esc(this.dados.nomeDe("tipo_competencia", c.tipo))} · ${esc(this.dados.nomeDe("natureza_competencia", c.natureza).toLowerCase())}</span>`;
            })
            .join("")}</td>`;
        }).join("");
        return `<tr data-id="${esc(m.id)}"><th scope="row">${esc(m.nome)}</th>${celulas}</tr>`;
      })
      .join("");
  }
}
