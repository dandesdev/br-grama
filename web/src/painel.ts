// Painel lateral: legenda, ficha da entidade selecionada, etapas do processo e lista de achados.
// Os textos longos ficam atrás do botão "i" (D25).
import { Dados, GRUPOS_RELACAO, NOMES_TIPO, formatarData, type Entidade, type Etapa, type FonteRef } from "./dados.ts";
import { TRACO_GRUPO } from "./mapa.ts";

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Amostra SVG do traço de um grupo de relação (também usada na barra de filtros). */
export function amostraTraco(grupo: string): string {
  const t = TRACO_GRUPO[grupo];
  const dash = t.estilo === "dotted" ? "1.5 3" : t.dash ? t.dash.join(" ") : "";
  return `<svg width="28" height="10" aria-hidden="true"><line x1="1" y1="5" x2="27" y2="5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" ${dash ? `stroke-dasharray="${dash}"` : ""}/></svg>`;
}

const NOMES_CONFIANCA: Record<string, string> = {
  oficial: "Fonte oficial",
  "oficial-contraditorio": "Fontes oficiais divergem",
  secundario: "Fonte não oficial",
  inferido: "Inferido",
  indisponivel: "Sem fonte disponível",
};

export class Painel {
  private aberto = new Set<string>(); // ids com o "i" expandido

  constructor(
    private el: HTMLElement,
    private dados: Dados,
    private aoSelecionar: (id: string) => void,
    private aoFocarEtapa: (etapa: Etapa) => void,
  ) {
    el.addEventListener("click", (ev) => {
      const alvo = (ev.target as HTMLElement).closest<HTMLElement>("[data-id],[data-mais],[data-etapa]");
      if (!alvo) return;
      if (alvo.dataset.mais) {
        const id = alvo.dataset.mais;
        if (this.aberto.has(id)) this.aberto.delete(id);
        else this.aberto.add(id);
        alvo.setAttribute("aria-expanded", String(this.aberto.has(id)));
        alvo.nextElementSibling?.toggleAttribute("hidden");
      } else if (alvo.dataset.id) {
        this.aoSelecionar(alvo.dataset.id);
      } else if (alvo.dataset.etapa) {
        this.el.querySelectorAll(".etapas li").forEach((li) => li.classList.toggle("ativa", li === alvo));
        const proc = this.dados.get(alvo.dataset.processo!)!;
        this.aoFocarEtapa((proc.etapas as Etapa[]).find((e) => e.id === alvo.dataset.etapa)!);
      }
    });
  }

  private link(id: string): string {
    const e = this.dados.get(id);
    return e ? `<button class="link" data-id="${esc(id)}">${esc(e.nome)}</button>` : esc(id);
  }

  private fontes(fontes: FonteRef[] | undefined): string {
    if (!fontes?.length) return "";
    return `<ul>${fontes
      .map((f) => {
        const e = this.dados.get(f.ref);
        const url = (e?.url as string | null | undefined) ?? null;
        const nome = esc(e?.sigla ?? e?.nome ?? f.ref);
        const naoOficial = e?.tipo === "fonte" && e.oficial === false ? ` <span class="etiqueta">não oficial</span>` : "";
        return `<li class="fonte">${url ? `<a class="link" href="${esc(url)}" target="_blank" rel="noopener">${nome}</a>` : nome}${
          f.dispositivo ? ` <span class="dispositivo">${esc(f.dispositivo)}</span>` : ""
        }${naoOficial}${f.nota ? `<br><span class="dispositivo">${esc(f.nota)}</span>` : ""}</li>`;
      })
      .join("")}</ul>`;
  }

  /** Bloco "i": detalhes, fontes, vigência e links externos. */
  private blocoMais(e: Entidade): string {
    const aberto = this.aberto.has(e.id);
    const porCampo = Object.entries(e.fontes_por_campo ?? {})
      .map(([campo, fs]) => `<h3>Fonte de "${esc(campo)}"</h3>${this.fontes(fs)}`)
      .join("");
    const mais = e.mais_informacoes?.length
      ? `<h3>Mais informações</h3><ul>${e.mais_informacoes
          .map((l) => `<li><a class="link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.titulo)}</a></li>`)
          .join("")}</ul>`
      : "";
    return `
      <button class="mais" data-mais="${esc(e.id)}" aria-expanded="${aberto}"><span class="i">i</span> Detalhes e fontes</button>
      <div class="detalhes" ${aberto ? "" : "hidden"}>
        ${e.detalhes ? `<p>${esc(e.detalhes)}</p>` : ""}
        <h3>Fontes</h3>${this.fontes(e.fontes) || "<p>—</p>"}
        ${porCampo}
        <dl class="ficha"><dt>Em vigor</dt><dd>${formatarData(e.vigencia.de)} a ${e.vigencia.ate ? formatarData(e.vigencia.ate) : "hoje"}</dd></dl>
        ${mais}
      </div>`;
  }

  private etiquetas(e: Entidade): string {
    const tipo = e.tipo === "orgao" && e.tipo_orgao ? this.termo(e.tipo_orgao as string) : NOMES_TIPO[e.tipo];
    const conf = e.confianca !== "oficial"
      ? `<span class="etiqueta" title="${esc(this.dados.definicao("confianca", e.confianca))}">${esc(NOMES_CONFIANCA[e.confianca])}</span>`
      : "";
    return `<div class="etiquetas"><span class="etiqueta">${esc(tipo)}</span>${conf}</div>`;
  }

  private termo(valor: string): string {
    return valor.replaceAll("-", " ").replace(/^./, (c) => c.toUpperCase());
  }

  private termoComDefinicao(vocab: string, valor: string): string {
    const def = this.dados.definicao(vocab, valor);
    return `<span title="${esc(def)}">${esc(this.termo(valor))}</span>`;
  }

  private relacoes(id: string): string {
    const linha = (r: Entidade, outro: string, saindo: boolean) => {
      const verbo = `<span class="relacao-verbo" title="${esc(this.dados.definicao("relacao", r.relacao as string))}">${esc((r.relacao as string).replaceAll("-", " "))}</span>`;
      const cond = r.condicao ? `<br><span class="dispositivo">${esc(r.condicao)}</span>` : "";
      return `<li>${saindo ? `${verbo} ${this.link(outro)}` : `${this.link(outro)} ${verbo}`}${cond}</li>`;
    };
    const saindo = this.dados.relacoesSaindo(id).filter((r) => r.relacao !== "ocupa");
    const chegando = this.dados.relacoesChegando(id).filter((r) => r.relacao !== "ocupa");
    const blocos: string[] = [];
    for (const [grupo, nome] of Object.entries(GRUPOS_RELACAO)) {
      const s = saindo.filter((r) => this.dados.grupoDe(r.relacao as string) === grupo);
      const c = chegando.filter((r) => this.dados.grupoDe(r.relacao as string) === grupo);
      if (!s.length && !c.length) continue;
      blocos.push(`<h3>${esc(nome)}</h3><ul>${s.map((r) => linha(r, r.para as string, true)).join("")}${c
        .map((r) => linha(r, r.de as string, false))
        .join("")}</ul>`);
    }
    return blocos.join("");
  }

  private processosDe(id: string): string {
    const itens: string[] = [];
    for (const p of this.dados.todas("processo")) {
      const etapas = (p.etapas as Etapa[]).filter((et) => et.atores.some((a) => this.dados.noDe(a) === id || a === id));
      if (etapas.length) itens.push(`<li>${this.link(p.id)}: ${etapas.map((et) => esc(et.acao)).join("; ")}</li>`);
    }
    return itens.length ? `<h3>Participa de</h3><ul>${itens.join("")}</ul>` : "";
  }

  mostrar(id: string) {
    const e = this.dados.get(id);
    if (!e) return;
    if (e.tipo === "processo") return this.mostrarProcesso(e);

    const partes: string[] = [this.etiquetas(e), `<h2>${esc(e.nome)}${e.sigla ? ` <span class="sub">(${esc(e.sigla)})</span>` : ""}</h2>`];
    if (e.resumo) partes.push(`<p class="resumo">${esc(e.resumo)}</p>`);

    for (const a of this.dados.achadosDe(id)) {
      partes.push(`<div class="aviso"><span class="icone">⚠</span><div>${this.link(a.id)}<br>${esc(a.resumo)}</div></div>`);
    }

    if (e.tipo === "cargo") {
      const ocup = this.dados.ocupantes(id);
      if (ocup.length) {
        partes.push(`<h3>Ocupante em ${formatarData(this.dados.data)}</h3>${ocup
          .map(({ pessoa, partido }) => `<div class="ocupante">${this.link(pessoa.id)}${partido ? ` <span class="partido">${esc(partido.sigla ?? partido.nome)}</span>` : ""}</div>`)
          .join("")}`);
      }
      const mandato = e.mandato as { anos?: number | null; reconducao?: string; nota?: string } | null;
      partes.push(`<dl class="ficha">
        <dt>Como se chega</dt><dd>${this.termoComDefinicao("provimento", e.provimento as string)}${e.provimento_condicao ? `<br>${esc(e.provimento_condicao)}` : ""}</dd>
        ${mandato ? `<dt>Mandato</dt><dd>${mandato.anos ? `${mandato.anos} anos` : ""}${mandato.reconducao ? `; ${esc(mandato.reconducao.replaceAll("-", " "))}` : ""}${mandato.nota ? `<br>${esc(mandato.nota)}` : ""}</dd>` : ""}
        <dt>Vagas</dt><dd>${e.quantidade ?? "variável"}${e.quantidade_nota ? `<br>${esc(e.quantidade_nota)}` : ""}</dd>
        ${(e.requisitos as string[] | undefined)?.length ? `<dt>Requisitos</dt><dd>${(e.requisitos as string[]).map(esc).join("; ")}</dd>` : ""}
        <dt>Órgão</dt><dd>${this.link(e.orgao as string)}</dd>
      </dl>`);
    }
    if (e.tipo === "orgao") {
      partes.push(`<dl class="ficha">
        <dt>Poder</dt><dd>${this.termoComDefinicao("poder", e.poder as string)}</dd>
        <dt>Esfera</dt><dd>${this.termoComDefinicao("esfera", e.esfera as string)}${e.arquetipo ? " (estrutura típica)" : ""}</dd>
        ${e.contido_em ? `<dt>Parte de</dt><dd>${this.link(e.contido_em as string)}</dd>` : ""}
      </dl>`);
      const cargos = this.dados.todas("cargo").filter((c) => c.orgao === id);
      if (cargos.length) partes.push(`<h3>Cargos</h3><ul>${cargos.map((c) => `<li>${this.link(c.id)}</li>`).join("")}</ul>`);
      if (e.estrutura_continua) partes.push(`<h3>A estrutura continua</h3>${this.fontes(e.estrutura_continua as FonteRef[])}`);
    }
    if (e.tipo === "pessoa") {
      const cargos = this.dados.relacoesSaindo(id).filter((r) => r.relacao === "ocupa");
      partes.push(`<h3>Cargos em ${formatarData(this.dados.data)}</h3><ul>${cargos.map((r) => `<li>${this.link(r.para as string)} desde ${formatarData(r.vigencia.de)}</li>`).join("")}</ul>`);
    }
    if (e.tipo === "relacao") {
      partes.push(`<p>${this.link(e.de as string)} <span class="relacao-verbo">${esc((e.relacao as string).replaceAll("-", " "))}</span> ${this.link(e.para as string)}</p>`);
      if (e.condicao) partes.push(`<p>${esc(e.condicao)}</p>`);
    }
    if (e.tipo === "achado") {
      partes.push(`<dl class="ficha"><dt>Tipo</dt><dd>${this.termoComDefinicao("tipo_achado", e.tipo_achado as string)}</dd>${e.gravidade ? `<dt>Gravidade</dt><dd>${esc(e.gravidade)}</dd>` : ""}</dl>`);
      partes.push(`<h3>Afeta</h3><ul>${(e.afeta as string[]).map((a) => `<li>${this.link(a)}</li>`).join("")}</ul>`);
    }
    if (e.tipo === "variacao") {
      partes.push(`<dl class="ficha"><dt>Onde</dt><dd>${(e.entes as string[]).map((x) => this.link(x)).join(", ")}</dd><dt>Exceção a</dt><dd>${this.link(e.difere_de as string)}</dd><dt>Por quê</dt><dd>${esc(e.porque)}</dd></dl>`);
    }

    partes.push(this.blocoMais(e));
    if (e.tipo === "orgao" || e.tipo === "cargo") {
      partes.push(this.relacoes(id));
      const variacoes = this.dados.todas("variacao").filter((v) => v.difere_de === id || v.instancia === id);
      if (variacoes.length) partes.push(`<h3>Exceções</h3><ul>${variacoes.map((v) => `<li>${this.link(v.id)}</li>`).join("")}</ul>`);
      partes.push(this.processosDe(id));
    }
    this.el.innerHTML = partes.join("");
    this.el.scrollTop = 0;
  }

  mostrarProcesso(p: Entidade) {
    const etapas = p.etapas as Etapa[];
    const numero = new Map(etapas.map((e, i) => [e.id, i + 1]));
    this.el.innerHTML = `
      ${this.etiquetas(p)}
      <h2>${esc(p.nome)}</h2>
      <p class="resumo">${esc(p.resumo)}</p>
      ${this.blocoMais(p)}
      <h3>Etapas</h3>
      <ol class="etapas">${etapas
        .map((et, i) => {
          const atores = et.atores.map((a) => esc(this.dados.get(a)?.sigla ?? this.dados.get(a)?.nome ?? a)).join(", ");
          const ramos = et.seguintes
            .map((s) => `→ ${numero.get(s.para) ?? "?"}${s.quando ? ` se ${esc(s.quando)}` : ""}`)
            .join(" · ");
          return `<li data-etapa="${esc(et.id)}" data-processo="${esc(p.id)}">
            <span class="n">${i + 1}</span>
            <div><div>${esc(et.acao)}</div>
            <div class="atores">${atores}${et.prazo ? ` · prazo: ${esc(et.prazo)}` : ""}</div>
            ${ramos ? `<div class="ramos">${ramos}</div>` : ""}
            ${et.fontes.length ? `<div class="atores">${et.fontes.map((f) => esc(`${this.dados.get(f.ref)?.sigla ?? this.dados.get(f.ref)?.nome ?? f.ref}${f.dispositivo ? `, ${f.dispositivo}` : ""}`)).join("; ")}</div>` : ""}
            </div></li>`;
        })
        .join("")}</ol>`;
    this.el.scrollTop = 0;
  }

  mostrarAchados() {
    const achados = this.dados.todas("achado");
    this.el.innerHTML = `
      <h2>Achados de auditoria</h2>
      <p class="intro">Lacunas, contradições entre fontes oficiais, sigilo e baixa transparência encontrados durante a pesquisa.</p>
      <ul>${achados
        .map((a) => `<li class="aviso"><span class="icone">⚠</span><div>${this.link(a.id)}<br>${esc(a.resumo)}</div></li>`)
        .join("") || "<li>Nenhum achado registrado.</li>"}</ul>`;
  }

  mostrarLegenda() {
    const poderes = [
      ["executivo", "Executivo"],
      ["legislativo", "Legislativo"],
      ["judiciario", "Judiciário"],
      ["neutro", "Povo, funções essenciais e outros"],
    ];
    this.el.innerHTML = `
      <h2>Como funciona o Estado brasileiro</h2>
      <p class="intro">Retrato de ${formatarData(this.dados.data)}. Clique em um órgão ou cargo para ver o que ele faz, com quem se relaciona e a base legal de cada informação.</p>
      <h3>Cores: Poder</h3>
      ${poderes.map(([v, n]) => `<div class="legenda-item"><span class="amostra" style="border-color:var(--${v});background:color-mix(in srgb, var(--${v}) 8%, transparent)"></span>${n}</div>`).join("")}
      <h3>Formas</h3>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2)"></span>Órgão</div>
      <div class="legenda-item"><span class="amostra cargo" style="border-color:var(--tinta-2)"></span>Cargo</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);clip-path:polygon(25% 0,75% 0,100% 30%,100% 70%,75% 100%,25% 100%,0 70%,0 30%)"></span>Tribunal</div>
      <h3>Linhas: tipo de relação</h3>
      ${Object.entries(GRUPOS_RELACAO).map(([g, n]) => `<div class="legenda-item">${amostraTraco(g)}${esc(n)}</div>`).join("")}
      <h3>Borda: confiança da informação</h3>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2)"></span>Fonte oficial</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:dashed"></span>Fonte não oficial ou inferido</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:double;border-width:4px"></span>Fontes oficiais divergem</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:dotted"></span>Sem fonte disponível</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--alerta)"></span>⚠ Achado de auditoria (camada "Achados")</div>`;
  }
}
