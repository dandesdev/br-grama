// Painel lateral: legenda, ficha da entidade selecionada, processo e etapas, lista de avisos.
// Os textos longos ficam atrás do botão "i" (D25).
import { Dados, GRUPOS_RELACAO, NOMES_TIPO, formatarData, type Entidade, type Etapa, type FonteRef, type Prazo, type Quorum, type Regime } from "./dados.ts";
import { TRACO_GRUPO } from "./mapa.ts";

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Amostra SVG do traço de um grupo de relação (também usada na barra de filtros). */
export function amostraTraco(grupo: string): string {
  const t = TRACO_GRUPO[grupo];
  const dash = t.estilo === "dotted" ? "1.5 3" : t.dash ? t.dash.join(" ") : "";
  return `<svg width="28" height="10" aria-hidden="true"><line x1="1" y1="5" x2="27" y2="5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" ${dash ? `stroke-dasharray="${dash}"` : ""}/></svg>`;
}

interface Eventos {
  selecionar: (id: string) => void;
  selecionarEtapa: (processoId: string, etapaId: string) => void;
  alternarRegime: (processoId: string, regimeId: string | null) => void;
}

export class Painel {
  private aberto = new Set<string>(); // blocos "i" expandidos

  constructor(private el: HTMLElement, private dados: Dados, private eventos: Eventos) {
    el.addEventListener("click", (ev) => {
      const alvo = (ev.target as HTMLElement).closest<HTMLElement>("[data-id],[data-mais],[data-etapa],[data-regime]");
      if (!alvo) return;
      const d = alvo.dataset;
      if (d.mais) {
        if (this.aberto.has(d.mais)) this.aberto.delete(d.mais);
        else this.aberto.add(d.mais);
        alvo.setAttribute("aria-expanded", String(this.aberto.has(d.mais)));
        alvo.nextElementSibling?.toggleAttribute("hidden");
      } else if (d.etapa) this.eventos.selecionarEtapa(d.processo!, d.etapa);
      else if (d.regime !== undefined) this.eventos.alternarRegime(d.processo!, alvo.getAttribute("aria-pressed") === "true" ? null : d.regime);
      else if (d.id) this.eventos.selecionar(d.id);
    });
  }

  // ---------- Peças reutilizadas ----------

  private link(id: string): string {
    const e = this.dados.get(id);
    return e ? `<button class="link" data-id="${esc(id)}">${esc(e.nome)}</button>` : esc(id);
  }

  private nomeCurto(id: string): string {
    const e = this.dados.get(id);
    return esc(e?.sigla ?? e?.nome ?? id);
  }

  /** Termo de vocabulário com a definição no título (passe o mouse para ler). */
  private termo(vocab: string, valor: string): string {
    return `<span class="termo" title="${esc(this.dados.definicao(vocab, valor))}">${esc(this.dados.nomeDe(vocab, valor))}</span>`;
  }

  private fontes(fontes: FonteRef[] | undefined): string {
    if (!fontes?.length) return "";
    return `<ul class="fontes">${fontes
      .map((f) => {
        const e = this.dados.get(f.ref);
        const url = (e?.url as string | null | undefined) ?? null;
        const nome = this.nomeCurto(f.ref);
        const naoOficial = e?.tipo === "fonte" && e.oficial === false ? ` <span class="etiqueta">não oficial</span>` : "";
        return `<li class="fonte">${url ? `<a class="link" href="${esc(url)}" target="_blank" rel="noopener">${nome}</a>` : nome}${
          f.dispositivo ? ` <span class="dispositivo">${esc(f.dispositivo)}</span>` : ""
        }${naoOficial}${f.nota ? `<br><span class="dispositivo">${esc(f.nota)}</span>` : ""}</li>`;
      })
      .join("")}</ul>`;
  }

  private quorum(q: Quorum | undefined): string {
    if (!q) return "";
    const votacao = q.votacao ? `, votação ${this.termo("votacao", q.votacao).toLowerCase()}` : "";
    return `<span class="quorum">Quórum: ${this.termo("quorum", q.regra)}${votacao}${q.nota ? `. ${esc(q.nota)}` : ""}</span>`;
  }

  private prazo(p: Prazo | undefined): string {
    if (!p) return "";
    const efeito = p.efeito ? ` <span class="dispositivo">Se acabar: ${esc(p.efeito)}.</span>` : "";
    return `<span class="prazo">Prazo: ${esc(p.texto)}${efeito}</span>`;
  }

  private etiquetas(e: Entidade): string {
    const tipo =
      e.tipo === "orgao" ? this.dados.nomeDe("tipo_orgao", e.tipo_orgao as string)
      : e.tipo === "objeto" ? this.dados.nomeDe("tipo_objeto", e.tipo_objeto as string)
      : NOMES_TIPO[e.tipo];
    const conf = e.confianca !== "oficial" ? `<span class="etiqueta">${this.termo("confianca", e.confianca)}</span>` : "";
    // Campos com confiança própria, diferente da entidade (ex.: um número inferido).
    const campos = Object.entries(e.campos ?? {})
      .filter(([, c]) => c.confianca && c.confianca !== e.confianca)
      .map(([campo, c]) => `<span class="etiqueta" title="${esc(this.dados.definicao("confianca", c.confianca!))}">${esc(campo)}: ${esc(this.dados.nomeDe("confianca", c.confianca!).toLowerCase())}</span>`)
      .join("");
    return `<div class="etiquetas"><span class="etiqueta">${esc(tipo)}</span>${conf}${campos}</div>`;
  }

  /** Bloco "i": detalhes, fontes (gerais e por campo), vigência e links externos. */
  private blocoMais(e: Entidade): string {
    const aberto = this.aberto.has(e.id);
    const porCampo = Object.entries(e.campos ?? {})
      .filter(([, c]) => c.fontes?.length || c.nota)
      .map(([campo, c]) => `<h3>Fonte de "${esc(campo)}"</h3>${this.fontes(c.fontes)}${c.nota ? `<p class="dispositivo">${esc(c.nota)}</p>` : ""}`)
      .join("");
    const mais = e.mais_informacoes?.length
      ? `<h3>Mais informações</h3><ul>${e.mais_informacoes
          .map((l) => `<li><a class="link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.titulo)}</a></li>`)
          .join("")}</ul>`
      : "";
    const vig = e.vigencia;
    return `
      <button class="mais" data-mais="${esc(e.id)}" aria-expanded="${aberto}"><span class="i">i</span> Detalhes e fontes</button>
      <div class="detalhes" ${aberto ? "" : "hidden"}>
        ${e.detalhes ? `<p>${esc(e.detalhes)}</p>` : ""}
        <h3>Fontes</h3>${this.fontes(e.fontes) || "<p>—</p>"}
        ${porCampo}
        <dl class="ficha"><dt>Em vigor</dt><dd>${vig.de ? formatarData(vig.de) : "início desconhecido"} a ${vig.ate ? formatarData(vig.ate) : "hoje"}${vig.incerta ? " (datas aproximadas)" : ""}${vig.nota ? `<br>${esc(vig.nota)}` : ""}</dd></dl>
        ${mais}
      </div>`;
  }

  private relacoes(id: string): string {
    const linha = (r: Entidade, outro: string, saindo: boolean) => {
      const verbo = this.termo("relacao", r.relacao as string);
      const ordem = r.ordem ? `<span class="ordem">${r.ordem}º</span> ` : "";
      const comp = r.competencia as { tipo: string; natureza: string } | undefined;
      const competencia = comp ? `${esc(this.dados.nomeDe("tipo_competencia", comp.tipo))}, para ${esc(this.dados.nomeDe("natureza_competencia", comp.natureza).toLowerCase())}` : "";
      const extra = [competencia, r.condicao ? esc(r.condicao) : "", this.quorum(r.quorum as Quorum | undefined)].filter(Boolean).join("<br>");
      return `<li>${ordem}${saindo ? `${verbo} ${this.link(outro)}` : `${this.link(outro)} ${verbo}`}${extra ? `<br><span class="dispositivo">${extra}</span>` : ""}</li>`;
    };
    const saindo = this.dados.relacoesSaindo(id).filter((r) => r.relacao !== "ocupa");
    const chegando = this.dados.relacoesChegando(id).filter((r) => r.relacao !== "ocupa");
    const porOrdem = (a: Entidade, b: Entidade) => ((a.ordem as number) ?? 0) - ((b.ordem as number) ?? 0);
    const blocos: string[] = [];
    for (const [grupo, nome] of Object.entries(GRUPOS_RELACAO)) {
      const s = saindo.filter((r) => this.dados.grupoDe(r.relacao as string) === grupo).sort(porOrdem);
      const c = chegando.filter((r) => this.dados.grupoDe(r.relacao as string) === grupo).sort(porOrdem);
      if (!s.length && !c.length) continue;
      blocos.push(`<h3>${esc(nome)}</h3><ul class="relacoes">${s.map((r) => linha(r, r.para as string, true)).join("")}${c
        .map((r) => linha(r, r.de as string, false))
        .join("")}</ul>`);
    }
    return blocos.join("");
  }

  private processosDe(id: string): string {
    const itens: string[] = [];
    for (const p of this.dados.todas("processo")) {
      const etapas = (p.etapas as Etapa[]).filter((et) => et.atores.some((a) => a === id || this.dados.noDe(a) === id));
      if (etapas.length) itens.push(`<li>${this.link(p.id)}: ${etapas.length} etapa${etapas.length > 1 ? "s" : ""}</li>`);
      else if (p.produz === id) itens.push(`<li>Produzido por ${this.link(p.id)}</li>`);
    }
    return itens.length ? `<h3>Processos</h3><ul>${itens.join("")}</ul>` : "";
  }

  // ---------- Fichas por tipo ----------

  private fichaCargo(e: Entidade): string {
    const partes: string[] = [];
    const vagas = e.vagas as number | null;
    const ocup = this.dados.ocupantes(e.id);
    const vacancias = ((e.vacancias as { vagas: number; vigencia: Entidade["vigencia"]; nota?: string }[]) ?? []).filter((v) =>
      this.dados.vigente(v),
    );
    if (ocup.length || vacancias.length) {
      const titulo = vagas === 1 ? "Ocupante" : `Ocupantes registrados (${ocup.length}${vagas ? ` de ${vagas}` : ""})`;
      partes.push(`<h3>${titulo} em ${formatarData(this.dados.data)}</h3>`);
      const linhaOcupante = ({ pessoa, partido }: (typeof ocup)[number]) =>
        `<div class="ocupante">${this.link(pessoa.id)}${partido ? ` <span class="partido">${esc(partido.sigla ?? partido.nome)}</span>` : ""}</div>`;
      if (ocup.some((o) => o.orgao)) {
        // Cargo agregado exercido em órgãos diferentes (ex.: Ministro de Estado): um titular por órgão.
        const porOrgao = [...ocup].sort((x, y) => (x.orgao?.nome ?? "~").localeCompare(y.orgao?.nome ?? "~", "pt-BR"));
        partes.push(`<table class="titulares">${porOrgao
          .map((o) => `<tr><th scope="row">${o.orgao ? this.link(o.orgao.id) : "—"}</th><td>${linhaOcupante(o)}</td></tr>`)
          .join("")}</table>`);
      } else if (ocup.length <= 12) partes.push(ocup.map(linhaOcupante).join(""));
      else {
        // Muitos ocupantes (ex.: 513 deputados): composição por partido e a lista recolhida.
        const porPartido = new Map<string, number>();
        for (const o of ocup) {
          const sigla = o.partido?.sigla ?? o.partido?.nome ?? "sem partido registrado";
          porPartido.set(sigla, (porPartido.get(sigla) ?? 0) + 1);
        }
        const bancadas = [...porPartido].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]));
        partes.push(`<table class="bancadas"><caption>Por partido</caption>${bancadas
          .map(([sigla, n]) => `<tr><th scope="row">${esc(sigla)}</th><td><span class="barra-bancada" style="width:${(100 * n) / bancadas[0][1]}%"></span></td><td>${n}</td></tr>`)
          .join("")}</table>`);
        const ordenados = [...ocup].sort((x, y) => x.pessoa.nome.localeCompare(y.pessoa.nome, "pt-BR"));
        partes.push(`<details class="lista-ocupantes"><summary>Ver os ${ocup.length} nomes</summary>${ordenados.map(linhaOcupante).join("")}</details>`);
      }
      for (const v of vacancias) {
        partes.push(`<div class="ocupante vaga">${v.vagas} cadeira${v.vagas > 1 ? "s" : ""} vaga${v.vagas > 1 ? "s" : ""} desde ${formatarData(v.vigencia.de)}${v.vigencia.incerta ? " (data aproximada)" : ""}</div>`);
      }
    }

    const casos = (e.provimento_casos as { quando: string; provimento: string }[] | undefined) ?? [];
    const comoSeChega = casos.length
      ? `<ul>${casos.map((c) => `<li>${esc(c.quando)}: ${this.termo("provimento", c.provimento)}</li>`).join("")}</ul>`
      : this.termo("provimento", e.provimento as string);
    const m = e.mandato as { anos?: number | null; vitalicio?: boolean; limite?: string; inicio?: string; reconducao?: string } | null;
    const mandato = !m ? "" : m.vitalicio
      ? `Vitalício${m.limite ? `, até ${esc(m.limite)}` : ""}`
      : [m.anos ? `${m.anos} anos` : "", m.inicio ? `começa em ${esc(m.inicio)}` : "", m.reconducao ? esc(m.reconducao.replaceAll("-", " ")) : ""].filter(Boolean).join("; ");
    const requisitos = (e.requisitos as { texto: string; fontes: FonteRef[] }[] | undefined) ?? [];

    partes.push(`<dl class="ficha">
      <dt>Como se chega</dt><dd>${comoSeChega}</dd>
      ${mandato ? `<dt>Mandato</dt><dd>${mandato}</dd>` : ""}
      <dt>Vagas</dt><dd>${vagas ?? "variável"}</dd>
      ${requisitos.length ? `<dt>Requisitos</dt><dd><ul>${requisitos.map((r) => `<li title="${esc(r.fontes.map((f) => `${this.dados.get(f.ref)?.sigla ?? ""} ${f.dispositivo ?? ""}`).join("; "))}">${esc(r.texto)}</li>`).join("")}</ul></dd>` : ""}
      <dt>Órgão</dt><dd>${this.link(e.orgao as string)}</dd>
    </dl>`);
    return partes.join("");
  }

  private fichaOrgao(e: Entidade): string {
    const partes = [`<dl class="ficha">
      <dt>Poder</dt><dd>${this.termo("poder", e.poder as string)}</dd>
      <dt>Esfera</dt><dd>${this.termo("esfera", e.esfera as string)}${e.arquetipo ? " (estrutura típica)" : ""}</dd>
      ${e.contido_em ? `<dt>Parte de</dt><dd>${this.link(e.contido_em as string)}</dd>` : ""}
    </dl>`];
    const cargos = this.dados.todas("cargo").filter((c) => c.orgao === e.id);
    const titulares = this.dados.titularesEm(e.id);
    if (titulares.length) {
      partes.push(`<h3>Titular em ${formatarData(this.dados.data)}</h3>${titulares
        .map((t) => `<div class="ocupante">${this.link(t.pessoa.id)} <span class="dispositivo">${esc(t.cargo.nome)}</span></div>`)
        .join("")}`);
    }
    if (cargos.length) partes.push(`<h3>Cargos</h3><ul>${cargos.map((c) => `<li>${this.link(c.id)}</li>`).join("")}</ul>`);
    if (e.estrutura_continua) partes.push(`<h3>A estrutura continua</h3>${this.fontes(e.estrutura_continua as FonteRef[])}`);
    return partes.join("");
  }

  private fichaObjeto(e: Entidade): string {
    const de = (e.relativo_a as string[] | undefined) ?? [];
    return `<dl class="ficha">
      <dt>Tipo</dt><dd>${this.termo("tipo_objeto", e.tipo_objeto as string)}</dd>
      ${e.esfera ? `<dt>Esfera</dt><dd>${this.termo("esfera", e.esfera as string)}</dd>` : ""}
      ${de.length ? `<dt>De quem</dt><dd>${de.map((x) => this.link(x)).join(", ")}</dd>` : ""}
    </dl>`;
  }

  // ---------- Telas ----------

  mostrar(id: string) {
    const e = this.dados.get(id);
    if (!e) return;
    const partes: string[] = [this.etiquetas(e), `<h2>${esc(e.nome)}${e.sigla ? ` <span class="sub">(${esc(e.sigla)})</span>` : ""}</h2>`];
    if (e.resumo) partes.push(`<p class="resumo">${esc(e.resumo)}</p>`);
    for (const a of this.dados.avisosDe(id)) {
      partes.push(`<div class="aviso"><span class="icone" aria-hidden="true">⚠</span><div>${this.link(a.id)}<br>${esc(a.resumo)}</div></div>`);
    }

    if (e.tipo === "cargo") partes.push(this.fichaCargo(e));
    if (e.tipo === "orgao") partes.push(this.fichaOrgao(e));
    if (e.tipo === "objeto") partes.push(this.fichaObjeto(e));
    if (e.tipo === "pessoa") {
      const cargos = this.dados.relacoesSaindo(id).filter((r) => r.relacao === "ocupa");
      partes.push(`<h3>Cargos em ${formatarData(this.dados.data)}</h3><ul>${cargos.map((r) => `<li>${this.link(r.para as string)} desde ${formatarData(r.vigencia.de)}</li>`).join("")}</ul>`);
    }
    if (e.tipo === "relacao") {
      partes.push(`<p>${this.link(e.de as string)} ${this.termo("relacao", e.relacao as string)} ${this.link(e.para as string)}</p>`);
      if (e.condicao) partes.push(`<p>${esc(e.condicao)}</p>`);
      if (e.quorum) partes.push(`<p>${this.quorum(e.quorum as Quorum)}</p>`);
    }
    if (e.tipo === "aviso") {
      partes.push(`<dl class="ficha"><dt>Tipo</dt><dd>${this.termo("tipo_aviso", e.tipo_aviso as string)}</dd>${e.gravidade ? `<dt>Gravidade</dt><dd>${esc(e.gravidade)}</dd>` : ""}</dl>`);
      partes.push(`<h3>Afeta</h3><ul>${(e.afeta as string[]).map((a) => `<li>${this.link(a)}</li>`).join("")}</ul>`);
      const onde = (e.onde_procuramos as string[] | undefined) ?? [];
      if (onde.length) partes.push(`<h3>Onde procuramos</h3><ul>${onde.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>`);
    }
    if (e.tipo === "variacao") {
      partes.push(`<dl class="ficha"><dt>Onde</dt><dd>${(e.entes as string[]).map((x) => this.link(x)).join(", ")} (${esc(this.dados.nomeDe("abrangencia", e.abrangencia as string).toLowerCase())})</dd><dt>Exceção a</dt><dd>${this.link(e.difere_de as string)}</dd><dt>Por quê</dt><dd>${esc(e.porque)}</dd></dl>`);
    }

    partes.push(this.blocoMais(e));
    if (["orgao", "cargo", "objeto"].includes(e.tipo)) {
      partes.push(this.relacoes(id));
      const variacoes = this.dados.todas("variacao").filter((v) => v.difere_de === id || v.instancia === id);
      if (variacoes.length) partes.push(`<h3>Exceções</h3><ul>${variacoes.map((v) => `<li>${this.link(v.id)}</li>`).join("")}</ul>`);
      partes.push(this.processosDe(id));
    }
    this.el.innerHTML = partes.join("");
    this.el.scrollTop = 0;
  }

  mostrarProcesso(p: Entidade, regimeAtivo: string | null = null) {
    const etapas = p.etapas as Etapa[];
    const regimes = (p.regimes as Regime[] | undefined) ?? [];
    this.el.innerHTML = `
      ${this.etiquetas(p)}
      <h2>${esc(p.nome)}</h2>
      <p class="resumo">${esc(p.resumo)}</p>
      ${p.produz ? `<dl class="ficha"><dt>Produz</dt><dd>${this.link(p.produz as string)}</dd></dl>` : ""}
      ${this.blocoMais(p)}
      ${regimes.length ? `<h3>Variantes</h3>${regimes
        .map((r) => `<button class="mais" data-regime="${esc(r.id)}" data-processo="${esc(p.id)}" aria-pressed="${regimeAtivo === r.id}">${regimeAtivo === r.id ? "✓ " : ""}${esc(r.nome)}</button>
          ${regimeAtivo === r.id ? `<p class="dispositivo">${esc(r.resumo)}. ${esc(r.detalhes ?? "")}</p>` : ""}`)
        .join("")}` : ""}
      <h3>Etapas</h3>
      <p class="intro">Clique numa etapa, aqui ou no fluxo, para ver quem age, o prazo e a base legal.</p>
      <ol class="etapas">${etapas
        .map((et, i) => `<li data-etapa="${esc(et.id)}" data-processo="${esc(p.id)}"><span class="n">${i + 1}</span><div>${esc(et.acao)}<div class="atores">${et.atores.map((a) => this.nomeCurto(a)).join(", ")}</div></div></li>`)
        .join("")}</ol>`;
    this.el.scrollTop = 0;
  }

  mostrarEtapa(p: Entidade, etapaId: string, regimeAtivo: string | null = null) {
    const etapas = p.etapas as Etapa[];
    const i = etapas.findIndex((e) => e.id === etapaId);
    const et = etapas[i];
    const numero = new Map(etapas.map((e, j) => [e.id, j + 1]));
    const regime = ((p.regimes as Regime[] | undefined) ?? []).find((r) => r.id === regimeAtivo);
    const efeito = regime?.efeitos.find((ef) => ef.etapa === etapaId);
    this.el.innerHTML = `
      <button class="link voltar" data-id="${esc(p.id)}">← ${esc(p.nome)}</button>
      <div class="etiquetas"><span class="etiqueta">Etapa ${i + 1} de ${etapas.length}</span>${et.tipo_etapa && et.tipo_etapa !== "acao" ? `<span class="etiqueta">${this.termo("tipo_etapa", et.tipo_etapa)}</span>` : ""}</div>
      <h2>${esc(et.acao)}</h2>
      ${et.detalhes ? `<p>${esc(et.detalhes)}</p>` : ""}
      ${et.atores.length ? `<h3>Quem age</h3><ul>${et.atores.map((a) => `<li>${this.link(a)}</li>`).join("")}</ul>` : ""}
      ${et.prazo || et.quorum ? `<h3>Regras</h3><p>${[this.prazo(et.prazo), this.quorum(et.quorum)].filter(Boolean).join("<br>")}</p>` : ""}
      ${et.remete_a ? `<p>Segue o rito de: ${this.link(et.remete_a)}</p>` : ""}
      ${efeito ? `<div class="aviso"><span class="icone" aria-hidden="true">⏱</span><div>${esc(regime!.nome)}: ${esc(efeito.prazo?.texto ?? efeito.nota ?? "")}</div></div>` : ""}
      <h3>Base legal</h3>${this.fontes(et.fontes) || "<p>—</p>"}
      ${et.seguintes.length ? `<h3>Depois</h3><ul class="seguintes">${et.seguintes
        .map((s) => `<li><button class="link" data-etapa="${esc(s.para)}" data-processo="${esc(p.id)}">→ ${numero.get(s.para)}. ${esc(etapas.find((e) => e.id === s.para)?.acao)}</button>${s.quando ? `<br><span class="dispositivo">se ${esc(s.quando)}</span>` : ""}</li>`)
        .join("")}</ul>` : `<p class="intro">Fim do processo.</p>`}`;
    this.el.scrollTop = 0;
  }

  mostrarAvisos() {
    const avisos = this.dados.todas("aviso");
    this.el.innerHTML = `
      <h2>Avisos sobre as fontes</h2>
      <p class="intro">Onde as fontes oficiais falham: informação que não encontramos, fontes que se contradizem, sigilo e textos desatualizados.</p>
      <ul>${avisos
        .map((a) => `<li class="aviso"><span class="icone" aria-hidden="true">⚠</span><div>${this.link(a.id)}<br>${esc(a.resumo)}</div></li>`)
        .join("") || "<li>Nenhum aviso registrado.</li>"}</ul>`;
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
      <div class="legenda-item"><span class="amostra objeto"></span>Objeto de competência: o ato, a lei ou as contas sobre os quais os órgãos agem</div>
      <h3>Linhas: tipo de relação</h3>
      ${Object.entries(GRUPOS_RELACAO).map(([g, n]) => `<div class="legenda-item">${amostraTraco(g)}${esc(n)}</div>`).join("")}
      <h3>Borda: confiança da informação</h3>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2)"></span>Fonte oficial</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:dashed"></span>Fonte não oficial ou inferido</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:double;border-width:4px"></span>Fontes oficiais divergem</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--tinta-2);border-style:dotted"></span>Sem fonte disponível</div>
      <div class="legenda-item"><span class="amostra" style="border-color:var(--alerta)"></span>⚠ Aviso: lacuna ou divergência nas fontes (camada "Avisos")</div>`;
  }
}
