import { carregar, formatarData, normalizar, GRUPOS_RELACAO, type Entidade, type Etapa, type Regime } from "./dados.ts";
import { Mapa } from "./mapa.ts";
import { Fluxo } from "./fluxo.ts";
import { Matriz } from "./matriz.ts";
import { Dinheiro } from "./dinheiro.ts";
import { Calendario } from "./calendario.ts";
import { mostrarSobre } from "./sobre.ts";
import { Painel, amostraTraco } from "./painel.ts";

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

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
const matriz = new Matriz($("matriz"), dados, (id) => painel.mostrar(id));
const dinheiro = new Dinheiro($("dinheiro"), dados, (id) => {
  painel.mostrar(id);
  mapa.selecionar(dados.noDe(id) ?? null);
});

const calendario = new Calendario(
  $("calendario"),
  dados,
  (processoId, etapaId) => {
    escolherProcesso(processoId);
    selecionarEtapa(etapaId);
  },
  (id) => selecionar(id, true),
);

// ---------- Abas: mapa e fluxo do processo ----------
const abaFluxo = $<HTMLButtonElement>("aba-fluxo");
type Aba = "mapa" | "fluxo" | "matriz" | "dinheiro" | "calendario" | "sobre";
function mostrarAba(aba: Aba) {
  for (const id of ["mapa", "fluxo", "matriz", "dinheiro", "calendario", "sobre"]) $(id).hidden = id !== aba;
  for (const b of document.querySelectorAll<HTMLButtonElement>(".abas button")) {
    b.setAttribute("aria-selected", String(b.dataset.aba === aba));
  }
  if (aba === "mapa") mapa.cy.resize();
  else if (aba === "fluxo") fluxo.enquadrar();
  else if (aba === "matriz") matriz.mostrar();
  else if (aba === "calendario") calendario.mostrar();
  else if (aba === "sobre") mostrarSobre($("sobre"), dados);
  else dinheiro.mostrar();
}
for (const b of document.querySelectorAll<HTMLButtonElement>(".abas button")) {
  b.addEventListener("click", () => mostrarAba(b.dataset.aba as Aba));
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

// ---------- Avisos ----------
$<HTMLInputElement>("avisos").addEventListener("change", (ev) => {
  const ligado = (ev.target as HTMLInputElement).checked;
  mapa.mostrarAvisos(ligado);
  if (ligado) {
    painel.mostrarAvisos();
    mostrarAba("mapa");
  } else painel.mostrarLegenda();
});

// ---------- Orçamento (D48) ----------
$<HTMLInputElement>("orcamento").addEventListener("change", (ev) => {
  const ligado = (ev.target as HTMLInputElement).checked;
  mapa.mostrarOrcamento(ligado);
  if (ligado) {
    painel.mostrarLegendaOrcamento();
    mostrarAba("mapa");
  } else painel.mostrarLegenda();
});

// ---------- Busca ----------
const busca = $<HTMLInputElement>("busca");
const resultados = $<HTMLUListElement>("busca-resultados");
type Buscavel = { id: string; rotulo: string; tipo: string; chave: string; unidade?: { est: string; codigo: string } };
const NOME_TIPO_BUSCA: Record<string, string> = { orgao: "órgão", cargo: "cargo", pessoa: "pessoa", processo: "processo", objeto: "objeto" };
const buscaveis: Buscavel[] = dados
  .todas()
  .filter((e) => e.tipo in NOME_TIPO_BUSCA)
  .map((e) => ({ id: e.id, rotulo: `${e.nome}${e.sigla ? ` (${e.sigla})` : ""}`, tipo: NOME_TIPO_BUSCA[e.tipo], chave: normalizar(`${e.nome} ${e.sigla ?? ""}`) }));
// Unidades internas do SIORG (D63): levam ao órgão, com a árvore aberta na unidade. As que já são nós do mapa ficam de fora.
for (const est of dados.todas().filter((e) => e.tipo === "estrutura")) {
  const dono = dados.get(est.de as string);
  if (!dono) continue;
  for (const u of est.unidades as { codigo: string; nome: string; sigla?: string; colegiada?: boolean; mapa?: string }[]) {
    if (u.mapa) continue;
    buscaveis.push({
      id: dono.id,
      rotulo: `${u.nome}${u.sigla ? ` (${u.sigla})` : ""}`,
      tipo: `${u.colegiada ? "colegiado" : "unidade"} em ${dono.sigla ?? dono.nome}`,
      chave: normalizar(`${u.nome} ${u.sigla ?? ""}`),
      unidade: { est: est.id, codigo: u.codigo },
    });
  }
}
busca.addEventListener("input", () => {
  const q = normalizar(busca.value.trim());
  if (!q) {
    resultados.hidden = true;
    return;
  }
  // Entidades do mapa primeiro, depois as unidades do SIORG.
  const achados = buscaveis.filter((b) => b.chave.includes(q));
  const encontrados = [...achados.filter((b) => !b.unidade), ...achados.filter((b) => b.unidade)].slice(0, 10);
  resultados.innerHTML =
    encontrados
      .map((b) => {
        const i = buscaveis.indexOf(b);
        return `<li role="option" data-id="${esc(b.id)}" data-i="${i}">${esc(b.rotulo)}<div class="tipo">${esc(b.tipo)}</div></li>`;
      })
      .join("") || `<li>Nada encontrado</li>`;
  resultados.hidden = false;
});
resultados.addEventListener("click", (ev) => {
  const li = (ev.target as HTMLElement).closest<HTMLElement>("li[data-id]");
  if (!li) return;
  resultados.hidden = true;
  busca.value = "";
  const unidade = buscaveis[Number(li.dataset.i)]?.unidade;
  if (unidade) painel.destacarUnidade(unidade.est, unidade.codigo);
  selecionar(li.dataset.id!, true);
});
busca.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") resultados.querySelector<HTMLElement>("li[data-id]")?.click();
  if (ev.key === "Escape") resultados.hidden = true;
});

// ---------- Celular (D65): filtros recolhíveis e painel como folha que sobe da base ----------
const celular = matchMedia("(max-width: 760px)");
const botaoFiltros = $<HTMLButtonElement>("filtros");
botaoFiltros.addEventListener("click", () => {
  const aberto = document.body.classList.toggle("filtros-abertos");
  botaoFiltros.setAttribute("aria-expanded", String(aberto));
});
// Escolher um processo ou uma camada fecha os filtros, para o mapa aparecer.
$("camadas").addEventListener("change", () => {
  if (!celular.matches) return;
  document.body.classList.remove("filtros-abertos");
  botaoFiltros.setAttribute("aria-expanded", "false");
});
type EstadoFolha = "recolhida" | "meia" | "cheia";
const folha = $("folha");
const alca = $<HTMLButtonElement>("alca");
function estadoFolha(estado: EstadoFolha) {
  folha.dataset.estado = estado;
  alca.setAttribute("aria-expanded", String(estado !== "recolhida"));
}
alca.addEventListener("click", () => {
  const ordem: EstadoFolha[] = ["recolhida", "meia", "cheia"];
  estadoFolha(ordem[(ordem.indexOf(folha.dataset.estado as EstadoFolha) + 1) % ordem.length]);
});
// Cada vez que o painel muda de conteúdo (a legenda inicial já está lá), o título vai para a alça e a folha sobe até a metade.
const tituloAlca = () => ($("alca-titulo").textContent = $("painel").querySelector("h2")?.textContent ?? "Detalhes");
tituloAlca();
new MutationObserver(() => {
  tituloAlca();
  if (celular.matches && folha.dataset.estado === "recolhida") estadoFolha("meia");
}).observe($("painel"), { childList: true });

// ---------- Tema claro/escuro: as cores dos mapas vêm das variáveis CSS ----------
$("tema").addEventListener("click", () => {
  const raiz = document.documentElement;
  raiz.dataset.tema = getComputedStyle(raiz).colorScheme === "dark" ? "claro" : "escuro";
  mapa.reaplicarEstilo();
  fluxo.reaplicarEstilo();
});

// Acesso para testes automáticos no navegador (scripts de conferência visual).
(globalThis as Record<string, unknown>).brGrama = { dados, mapa };
