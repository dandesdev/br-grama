import { carregar, formatarData, normalizar, GRUPOS_RELACAO, type Entidade, type Etapa, type Regime } from "./dados.ts";
import { Mapa } from "./mapa.ts";
import { Fluxo } from "./fluxo.ts";
import { Painel, amostraTraco } from "./painel.ts";

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

const dados = await carregar();
$("data-referencia").textContent = `Retrato de ${formatarData(dados.data)}`;

// Estado da interface
let processoAtual: Entidade | null = null;
let regimeAtual: string | null = null;

const mapa = new Mapa($("mapa"), dados);
const fluxo = new Fluxo($("fluxo"), dados, (etapaId) => selecionarEtapa(etapaId));
const painel = new Painel($("painel"), dados, {
  selecionar: (id) => selecionar(id, true),
  selecionarEtapa: (_processo, etapaId) => selecionarEtapa(etapaId),
  alternarRegime: (_processo, regimeId) => alternarRegime(regimeId),
});
painel.mostrarLegenda();

// ---------- Abas: mapa e fluxo do processo ----------
const abaFluxo = $<HTMLButtonElement>("aba-fluxo");
function mostrarAba(aba: "mapa" | "fluxo") {
  $("mapa").hidden = aba !== "mapa";
  $("fluxo").hidden = aba !== "fluxo";
  for (const b of document.querySelectorAll<HTMLButtonElement>(".abas button")) {
    b.setAttribute("aria-selected", String(b.dataset.aba === aba));
  }
  if (aba === "mapa") mapa.cy.resize();
  else fluxo.enquadrar();
}
for (const b of document.querySelectorAll<HTMLButtonElement>(".abas button")) {
  b.addEventListener("click", () => mostrarAba(b.dataset.aba as "mapa" | "fluxo"));
}

// ---------- Seleção ----------
function selecionar(id: string | null, centralizar = false) {
  if (!id) {
    mapa.selecionar(null);
    if (processoAtual) painel.mostrarProcesso(processoAtual, regimeAtual);
    else painel.mostrarLegenda();
    return;
  }
  if (dados.get(id)?.tipo === "processo") {
    escolherProcesso(id);
    return;
  }
  mapa.selecionar(dados.noDe(id) ?? null, centralizar);
  painel.mostrar(id);
  if (!$("fluxo").hidden && dados.noDe(id)) mostrarAba("mapa");
}

function selecionarEtapa(etapaId: string) {
  if (!processoAtual) return;
  const etapa = (processoAtual.etapas as Etapa[]).find((e) => e.id === etapaId)!;
  painel.mostrarEtapa(processoAtual, etapaId, regimeAtual);
  fluxo.focarEtapa(etapaId);
  mapa.focarEtapa(etapa);
}

mapa.cy.on("tap", "node", (ev) => selecionar(ev.target.id()));
mapa.cy.on("tap", (ev) => {
  if (ev.target === mapa.cy) selecionar(null);
});
mapa.cy.on("tap", "edge.rel, edge.variacao", (ev) => selecionar(ev.target.id()));
fluxo.cy.on("tap", (ev) => {
  if (ev.target === fluxo.cy && processoAtual) {
    fluxo.focarEtapa(null);
    painel.mostrarProcesso(processoAtual, regimeAtual);
  }
});

// ---------- Relações ----------
const filtros = $("filtro-grupos");
for (const [grupo, nome] of Object.entries(GRUPOS_RELACAO)) {
  const label = document.createElement("label");
  label.innerHTML = `<input type="checkbox" checked data-grupo="${grupo}">${amostraTraco(grupo)}${nome}`;
  filtros.append(label);
}
filtros.addEventListener("change", (ev) => {
  const input = ev.target as HTMLInputElement;
  mapa.mostrarGrupo(input.dataset.grupo!, input.checked);
});
$<HTMLInputElement>("todas-relacoes").addEventListener("change", (ev) => {
  mapa.mostrarTodasRelacoes((ev.target as HTMLInputElement).checked);
});

// ---------- Processos ----------
const seletor = $<HTMLSelectElement>("processo");
seletor.innerHTML = `<option value="">Nenhum</option>${dados
  .todas("processo")
  .map((p) => `<option value="${p.id}">${p.nome}</option>`)
  .join("")}`;

function escolherProcesso(id: string) {
  seletor.value = id;
  processoAtual = id ? dados.get(id)! : null;
  regimeAtual = null;
  mapa.mostrarProcesso(processoAtual);
  abaFluxo.disabled = !processoAtual;
  if (processoAtual) {
    fluxo.mostrar(processoAtual);
    painel.mostrarProcesso(processoAtual);
    mostrarAba("fluxo");
  } else {
    painel.mostrarLegenda();
    mostrarAba("mapa");
  }
}
seletor.addEventListener("change", () => escolherProcesso(seletor.value));

function alternarRegime(regimeId: string | null) {
  if (!processoAtual) return;
  regimeAtual = regimeId;
  const regime = ((processoAtual.regimes as Regime[] | undefined) ?? []).find((r) => r.id === regimeId) ?? null;
  fluxo.destacarRegime(regime);
  painel.mostrarProcesso(processoAtual, regimeAtual);
}

// ---------- Achados ----------
$<HTMLInputElement>("achados").addEventListener("change", (ev) => {
  const ligado = (ev.target as HTMLInputElement).checked;
  mapa.mostrarAchados(ligado);
  if (ligado) {
    painel.mostrarAchados();
    mostrarAba("mapa");
  } else painel.mostrarLegenda();
});

// ---------- Busca ----------
const busca = $<HTMLInputElement>("busca");
const resultados = $<HTMLUListElement>("busca-resultados");
const buscaveis = dados
  .todas()
  .filter((e) => ["orgao", "cargo", "pessoa", "processo", "objeto"].includes(e.tipo))
  .map((e) => ({ e, chave: normalizar(`${e.nome} ${e.sigla ?? ""}`) }));
busca.addEventListener("input", () => {
  const q = normalizar(busca.value.trim());
  if (!q) {
    resultados.hidden = true;
    return;
  }
  const achados = buscaveis.filter((b) => b.chave.includes(q)).slice(0, 8);
  resultados.innerHTML =
    achados
      .map(({ e }) => `<li role="option" data-id="${e.id}">${e.nome}${e.sigla ? ` (${e.sigla})` : ""}<div class="tipo">${e.tipo}</div></li>`)
      .join("") || `<li>Nada encontrado</li>`;
  resultados.hidden = false;
});
resultados.addEventListener("click", (ev) => {
  const li = (ev.target as HTMLElement).closest<HTMLElement>("li[data-id]");
  if (!li) return;
  resultados.hidden = true;
  busca.value = "";
  selecionar(li.dataset.id!, true);
});
busca.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") resultados.querySelector<HTMLElement>("li[data-id]")?.click();
  if (ev.key === "Escape") resultados.hidden = true;
});

// ---------- Tema claro/escuro: as cores dos mapas vêm das variáveis CSS ----------
$("tema").addEventListener("click", () => {
  const raiz = document.documentElement;
  raiz.dataset.tema = getComputedStyle(raiz).colorScheme === "dark" ? "claro" : "escuro";
  mapa.reaplicarEstilo();
  fluxo.reaplicarEstilo();
});
