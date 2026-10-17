import { carregar, formatarData, normalizar, GRUPOS_RELACAO, type Entidade } from "./dados.ts";
import { Mapa } from "./mapa.ts";
import { Painel, amostraTraco } from "./painel.ts";

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

const dados = await carregar();
$("data-referencia").textContent = `Retrato de ${formatarData(dados.data)}`;

const mapa = new Mapa($("mapa"), dados);
const painel = new Painel(
  $("painel"),
  dados,
  (id) => selecionar(id, true),
  (etapa) => mapa.focarEtapa(etapa),
);
painel.mostrarLegenda();

function selecionar(id: string | null, centralizar = false) {
  if (!id) {
    mapa.selecionar(null);
    if (processoAtual) painel.mostrarProcesso(processoAtual);
    else painel.mostrarLegenda();
    return;
  }
  const e = dados.get(id);
  if (e?.tipo === "processo") {
    escolherProcesso(id);
    return;
  }
  mapa.selecionar(dados.noDe(id) ?? null, centralizar);
  painel.mostrar(id);
}

mapa.cy.on("tap", "node", (ev) => selecionar(ev.target.id()));
mapa.cy.on("tap", (ev) => {
  if (ev.target === mapa.cy) selecionar(null);
});
mapa.cy.on("tap", "edge.rel, edge.variacao", (ev) => selecionar(ev.target.id()));

// Filtro por grupo de relação
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

// Processos ("linhas de metrô")
let processoAtual: Entidade | null = null;
const seletor = $<HTMLSelectElement>("processo");
seletor.innerHTML = `<option value="">Nenhum</option>${dados
  .todas("processo")
  .map((p) => `<option value="${p.id}">${p.nome}</option>`)
  .join("")}`;
function escolherProcesso(id: string) {
  seletor.value = id;
  processoAtual = id ? dados.get(id)! : null;
  mapa.mostrarProcesso(processoAtual);
  if (processoAtual) painel.mostrarProcesso(processoAtual);
  else painel.mostrarLegenda();
}
seletor.addEventListener("change", () => escolherProcesso(seletor.value));

// Achados
$<HTMLInputElement>("achados").addEventListener("change", (ev) => {
  const ligado = (ev.target as HTMLInputElement).checked;
  mapa.mostrarAchados(ligado);
  if (ligado) painel.mostrarAchados();
  else painel.mostrarLegenda();
});

// Busca
const busca = $<HTMLInputElement>("busca");
const resultados = $<HTMLUListElement>("busca-resultados");
const buscaveis = dados
  .todas()
  .filter((e) => ["orgao", "cargo", "pessoa", "processo"].includes(e.tipo))
  .map((e) => ({ e, chave: normalizar(`${e.nome} ${e.sigla ?? ""}`) }));
busca.addEventListener("input", () => {
  const q = normalizar(busca.value.trim());
  if (!q) {
    resultados.hidden = true;
    return;
  }
  const achados = buscaveis.filter((b) => b.chave.includes(q)).slice(0, 8);
  resultados.innerHTML = achados
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

// Tema claro/escuro: as cores do mapa vêm das variáveis CSS, então reaplicamos o estilo.
$("tema").addEventListener("click", () => {
  const raiz = document.documentElement;
  const escuroAgora = getComputedStyle(raiz).colorScheme === "dark";
  raiz.dataset.tema = escuroAgora ? "claro" : "escuro";
  mapa.reaplicarEstilo();
});
