// Aba "Sobre" (D59): o que é o site, a data do retrato, de onde vêm os dados, até onde a pesquisa
// foi e como conferir. Os números saem do próprio grafo e dos relatórios de cobertura (build).
import { formatarData, numero as n, type Dados } from "./dados.ts";
import { emIngles, t } from "./i18n.ts";

const REPO = "https://github.com/dandesdev/br-grama";

/** Porcentagens dos relatórios vêm com vírgula ("97,3%"); em inglês, ponto. */
const pctTexto = (s: string) => (emIngles ? s.replace(",", ".") : s);

export function mostrarSobre(el: HTMLElement, dados: Dados) {
  const todas = Object.values(dados.grafo.entidades);
  const conta = (tipo: string) => todas.filter((e) => e.tipo === tipo).length;
  const verificadas = todas.filter((e) => (e.verificacao as { status?: string } | undefined)?.status === "verificado").length;
  const pct = todas.length ? pctTexto(((100 * verificadas) / todas.length).toFixed(1).replace(".", ",")) : "—";
  const cob = (dados.grafo as unknown as { cobertura?: { cf: string | null; adct: string | null; leis: number; artigos_leis: number | null; leis_pct: string | null } }).cobertura;
  el.innerHTML = `<article>
    <h2>${t("Sobre o br-grama")}</h2>
    <p>${t("Um mapa de como funciona o Estado brasileiro: órgãos, cargos, relações e processos, cada um com a base legal. O retrato é de <strong>{data}</strong>: o que vale nessa data, com quem ocupava os cargos de cúpula nesse dia.", { data: formatarData(dados.data) })}</p>
    <div class="numeros">
      <div class="numero"><span class="rotulo">${t("Órgãos")}</span><strong>${n(conta("orgao"))}</strong></div>
      <div class="numero"><span class="rotulo">${t("Cargos")}</span><strong>${n(conta("cargo"))}</strong></div>
      <div class="numero"><span class="rotulo">${t("Relações")}</span><strong>${n(conta("relacao"))}</strong></div>
      <div class="numero"><span class="rotulo">${t("Processos")}</span><strong>${n(conta("processo"))}</strong></div>
      <div class="numero"><span class="rotulo">${t("Normas citadas")}</span><strong>${n(conta("norma"))}</strong></div>
    </div>
    <h3>${t("Até onde a pesquisa foi")}</h3>
    <ul>
      ${cob?.cf ? `<li>${t("Constituição: {cf} dos artigos cobertos ou fora do escopo de estrutura do Estado; ADCT: {adct}.", { cf: pctTexto(cob.cf), adct: pctTexto(cob.adct ?? "—") })}</li>` : ""}
      ${cob?.leis_pct ? `<li>${t("Leis estruturantes e regimentos: {leis} normas, {artigos} artigos classificados um a um, {pct} cobertos ou fora do escopo.", { leis: cob.leis, artigos: n(cob.artigos_leis ?? 0), pct: pctTexto(cob.leis_pct) })}</li>` : ""}
      <li>${t("{pct}% das {total} entidades foram conferidas por um segundo agente contra a fonte primária; o resto aparece com a etiqueta de coletado.", { pct, total: n(todas.length) })}</li>
      <li>${t("Orçamento executado da União de 2023 a 2025, pela base \"Despesas e Transferências Totais da União\" do Tesouro Nacional.")}</li>
    </ul>
    <h3>${t("Como ler")}</h3>
    <p>${t("Cada informação traz a fonte e o dispositivo (botão <span class=\"i\">i</span>). A borda dos nós diz a confiança: fonte oficial, fonte não oficial ou inferência, fontes que divergem, ou sem fonte disponível. Onde as fontes faltam ou se contradizem, a camada \"Avisos\" mostra o que procuramos e não achamos.")}</p>
    ${emIngles ? `<p>${t("Os detalhes, as notas, as fontes, os nomes das normas, as pessoas e os avisos ficam em português; foram traduzidos a interface, os vocabulários e o nome e o resumo dos órgãos, cargos, processos e objetos.")}</p>` : ""}
    <h3>${t("De onde vêm os dados")}</h3>
    <p>${t("Constituição, leis e decretos no Planalto; regimentos nos sites da Câmara, do Senado, do Congresso e dos tribunais; ocupantes no Diário Oficial e nas páginas oficiais; números no Tesouro Nacional. Os textos são escritos por nós, curtos, sem copiar obras protegidas.")}</p>
    <h3>${t("Método e código")}</h3>
    <p>${t("A pesquisa foi feita por agentes de IA em tarefas com diário, cada uma revista por outro agente, e coordenada por um agente que registra as decisões de escopo. Dados, decisões, diários e código estão abertos em {repo} (código MIT, dados CC-BY 4.0). Não use como referência oficial: confira sempre a fonte citada.", { repo: `<a href="${REPO}">${REPO.replace("https://", "")}</a>` })}</p>
  </article>`;
}
