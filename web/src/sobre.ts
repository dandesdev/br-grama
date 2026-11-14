// Aba "Sobre" (D59): o que é o site, a data do retrato, de onde vêm os dados, até onde a pesquisa
// foi e como conferir. Os números saem do próprio grafo e dos relatórios de cobertura (build).
import { formatarData, type Dados } from "./dados.ts";

const REPO = "https://github.com/dandesdev/br-grama";

export function mostrarSobre(el: HTMLElement, dados: Dados) {
  const todas = Object.values(dados.grafo.entidades);
  const conta = (tipo: string) => todas.filter((e) => e.tipo === tipo).length;
  const verificadas = todas.filter((e) => (e.verificacao as { status?: string } | undefined)?.status === "verificado").length;
  const pct = todas.length ? ((100 * verificadas) / todas.length).toFixed(1).replace(".", ",") : "—";
  const cob = (dados.grafo as unknown as { cobertura?: { cf: string | null; adct: string | null; leis: number; artigos_leis: number | null; leis_pct: string | null } }).cobertura;
  const n = (x: number) => x.toLocaleString("pt-BR");
  el.innerHTML = `<article>
    <h2>Sobre o br-grama</h2>
    <p>Um mapa de como funciona o Estado brasileiro: órgãos, cargos, relações e processos, cada um com a base legal. O retrato é de <strong>${formatarData(dados.data)}</strong>: o que vale nessa data, com quem ocupava os cargos de cúpula nesse dia.</p>
    <div class="numeros">
      <div class="numero"><span class="rotulo">Órgãos</span><strong>${n(conta("orgao"))}</strong></div>
      <div class="numero"><span class="rotulo">Cargos</span><strong>${n(conta("cargo"))}</strong></div>
      <div class="numero"><span class="rotulo">Relações</span><strong>${n(conta("relacao"))}</strong></div>
      <div class="numero"><span class="rotulo">Processos</span><strong>${n(conta("processo"))}</strong></div>
      <div class="numero"><span class="rotulo">Normas citadas</span><strong>${n(conta("norma"))}</strong></div>
    </div>
    <h3>Até onde a pesquisa foi</h3>
    <ul>
      ${cob?.cf ? `<li>Constituição: ${cob.cf} dos artigos cobertos ou fora do escopo de estrutura do Estado; ADCT: ${cob.adct ?? "—"}.</li>` : ""}
      ${cob?.leis_pct ? `<li>Leis estruturantes e regimentos: ${cob.leis} normas, ${n(cob.artigos_leis ?? 0)} artigos classificados um a um, ${cob.leis_pct} cobertos ou fora do escopo.</li>` : ""}
      <li>${pct}% das ${n(todas.length)} entidades foram conferidas por um segundo agente contra a fonte primária; o resto aparece com a etiqueta de coletado.</li>
      <li>Orçamento executado da União de 2023 a 2025, pela base "Despesas e Transferências Totais da União" do Tesouro Nacional.</li>
    </ul>
    <h3>Como ler</h3>
    <p>Cada informação traz a fonte e o dispositivo (botão <span class="i">i</span>). A borda dos nós diz a confiança: fonte oficial, fonte não oficial ou inferência, fontes que divergem, ou sem fonte disponível. Onde as fontes faltam ou se contradizem, a camada "Avisos" mostra o que procuramos e não achamos.</p>
    <h3>De onde vêm os dados</h3>
    <p>Constituição, leis e decretos no Planalto; regimentos nos sites da Câmara, do Senado, do Congresso e dos tribunais; ocupantes no Diário Oficial e nas páginas oficiais; números no Tesouro Nacional. Os textos são escritos por nós, curtos, sem copiar obras protegidas.</p>
    <h3>Método e código</h3>
    <p>A pesquisa foi feita por agentes de IA em tarefas com diário, cada uma revista por outro agente, e coordenada por um agente que registra as decisões de escopo. Dados, decisões, diários e código estão abertos em <a href="${REPO}">${REPO.replace("https://", "")}</a> (código MIT, dados CC-BY 4.0). Não use como referência oficial: confira sempre a fonte citada.</p>
  </article>`;
}
