// Importa os deputados federais em exercício na data de referência, com o partido, a partir dos
// dados abertos da Câmara. Duas etapas:
//   npx tsx scripts/importar/camara-deputados.ts baixar   → grava as respostas em pesquisa/brutos/
//   npx tsx scripts/importar/camara-deputados.ts gerar    → cria pessoas, partidos e relações em dados/
//
// Partido na data de referência: a lista da Câmara traz o partido atual. Para cada deputado,
// o "último status" informa a data da última mudança (de partido ou de situação). Se ela é
// anterior ou igual à data de referência, o partido atual é o da data de referência. Se é
// posterior, o deputado é listado para conferência manual e não recebe filiação automática.
//
// Não guardamos CPF, data de nascimento, foto nem e-mail (D12).
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RAIZ = join(import.meta.dirname, "..", "..");
const DATA_REF = JSON.parse(readFileSync(join(RAIZ, "br-grama.config.json"), "utf8")).data_referencia as string;
const API = "https://dadosabertos.camara.leg.br/api/v2";
const BRUTO = join(RAIZ, "pesquisa", "brutos", "camara-dados-abertos", "2026-10-17", `deputados-em-exercicio-${DATA_REF}.json`);
const HOJE = new Date().toISOString().slice(0, 10);
const TAREFA = "importacao-camara-deputados";

interface Deputado {
  id: number;
  nome: string;
  nomeCivil: string;
  siglaPartido: string;
  siglaUf: string;
  ultimoStatus: { data: string; situacao: string; siglaPartido: string; condicaoEleitoral: string | null };
}
interface Partido { id: number; sigla: string; nome: string }

const pegar = async (url: string) => {
  for (let tentativa = 1; ; tentativa++) {
    const r = await fetch(url, { headers: { Accept: "application/json" } });
    if (r.ok) return (await r.json()).dados;
    if (tentativa === 3) throw new Error(`${r.status} em ${url}`);
    await new Promise((ok) => setTimeout(ok, 2000 * tentativa));
  }
};

async function baixar() {
  const lista = await pegar(`${API}/deputados?dataInicio=${DATA_REF}&dataFim=${DATA_REF}&itens=1000&ordem=ASC&ordenarPor=nome`);
  const deputados: Deputado[] = [];
  for (const d of lista) {
    const det = await pegar(`${API}/deputados/${d.id}`);
    const s = det.ultimoStatus;
    deputados.push({
      id: d.id,
      nome: d.nome,
      nomeCivil: det.nomeCivil,
      siglaPartido: d.siglaPartido,
      siglaUf: d.siglaUf,
      ultimoStatus: { data: s.data, situacao: s.situacao, siglaPartido: s.siglaPartido, condicaoEleitoral: s.condicaoEleitoral },
    });
    await new Promise((ok) => setTimeout(ok, 150));
  }
  const siglas = [...new Set(deputados.map((d) => d.siglaPartido))];
  const partidosApi: Partido[] = await pegar(`${API}/partidos?itens=100&dataInicio=${DATA_REF}&dataFim=${DATA_REF}`);
  const partidos = partidosApi.filter((p) => siglas.includes(p.sigla)).map((p) => ({ id: p.id, sigla: p.sigla, nome: p.nome }));
  mkdirSync(join(BRUTO, ".."), { recursive: true });
  writeFileSync(BRUTO, JSON.stringify({ consultado_em: HOJE, data_referencia: DATA_REF, deputados, partidos }, null, 1));
  console.log(`Baixados ${deputados.length} deputados e ${partidos.length} partidos.`);
}

const slug = (s: string) =>
  s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function gerar() {
  const { deputados, partidos } = JSON.parse(readFileSync(BRUTO, "utf8")) as { deputados: Deputado[]; partidos: Partido[] };
  if (deputados.length !== 513) throw new Error(`Esperados 513 deputados em exercício, vieram ${deputados.length}`);
  if (new Set(deputados.map((d) => d.id)).size !== deputados.length) throw new Error("Ids repetidos");

  const dados = (pasta: string) => join(RAIZ, "dados", pasta);
  const lerTodos = (pasta: string) =>
    readdirSync(dados(pasta)).map((n) => JSON.parse(readFileSync(join(dados(pasta), n), "utf8")));
  const verificacao = (nota: string) => ({ status: "verificado", em: HOJE, tarefa: TAREFA, notas: nota });
  const NOTA = "Importação automática dos dados abertos da Câmara (scripts/importar/camara-deputados.ts), conferida pelo script: 513 deputados em exercício na data de referência, ids únicos.";

  // Fonte única para toda a importação
  const FONTE = "fonte:camara-api-deputados-em-exercicio";
  if (!existsSync(join(dados("fontes"), "camara-api-deputados-em-exercicio.json"))) {
    writeFileSync(
      join(dados("fontes"), "camara-api-deputados-em-exercicio.json"),
      JSON.stringify(
        {
          id: FONTE,
          tipo: "fonte",
          nome: "Dados abertos da Câmara: deputados em exercício",
          resumo: "Lista oficial dos deputados em exercício num período, com partido e unidade da federação.",
          tipo_fonte: "dados-abertos",
          publicador: "Câmara dos Deputados",
          url: `${API}/deputados?dataInicio=${DATA_REF}&dataFim=${DATA_REF}&itens=1000`,
          acesso_em: HOJE,
          arquivo: null,
          oficial: true,
          vigencia: { de: null, ate: null },
          confianca: "oficial",
          verificacao: verificacao(NOTA),
          notas: "Respostas brutas (sem CPF, nascimento, foto ou e-mail) em pesquisa/brutos/camara-dados-abertos/2026-10-17/.",
        },
        null,
        2,
      ) + "\n",
    );
  }

  // Partidos que faltam
  const idPartido = (sigla: string) => `org:partido-${slug(sigla)}`;
  for (const p of partidos) {
    const arq = join(dados("orgaos"), `partido-${slug(p.sigla)}.json`);
    if (existsSync(arq)) continue;
    writeFileSync(
      arq,
      JSON.stringify(
        {
          id: idPartido(p.sigla),
          tipo: "orgao",
          nome: p.nome,
          sigla: p.sigla,
          resumo: `Partido político com representação na Câmara dos Deputados em ${DATA_REF.split("-").reverse().join("/")}.`,
          tipo_orgao: "partido-politico",
          poder: "nao-estatal",
          esfera: "nacional",
          contido_em: "org:partidos-politicos",
          vigencia: { de: null, ate: null },
          fontes: [{ ref: FONTE, dispositivo: "endpoint /partidos" }],
          campos: { contido_em: { fontes: [{ ref: "norma:cf-1988", dispositivo: "art. 17" }] } },
          confianca: "oficial",
          verificacao: verificacao(NOTA),
          mais_informacoes: [{ titulo: "Partidos registrados no TSE", url: "https://www.tse.jus.br/partidos/partidos-registrados-no-tse" }],
        },
        null,
        2,
      ) + "\n",
    );
  }

  // Pessoas já existentes, achadas pelo link da Câmara
  const existentes = new Map<number, string>();
  for (const p of lerTodos("pessoas")) {
    for (const l of p.mais_informacoes ?? []) {
      const m = String(l.url).match(/camara\.leg\.br\/deputados\/(\d+)/);
      if (m) existentes.set(Number(m[1]), p.id);
    }
  }
  const relacoesOcupa = new Set(lerTodos("relacoes").filter((r) => r.relacao === "ocupa" && r.para === "cargo:deputado-federal").map((r) => r.de));

  const conferirManualmente: string[] = [];
  let pessoasCriadas = 0;
  let relacoesCriadas = 0;
  const slugsUsados = new Set(readdirSync(dados("pessoas")).map((n) => n.replace(/\.json$/, "")));

  for (const d of deputados) {
    const partidoConfirmado = d.ultimoStatus.data.slice(0, 10) <= DATA_REF && d.ultimoStatus.siglaPartido === d.siglaPartido;
    if (!partidoConfirmado) conferirManualmente.push(`${d.nome} (${d.id}): último status em ${d.ultimoStatus.data}`);

    let idPessoa = existentes.get(d.id);
    if (!idPessoa) {
      let s = slug(d.nome);
      if (slugsUsados.has(s)) s = `${s}-${d.id}`;
      slugsUsados.add(s);
      idPessoa = `pessoa:${s}`;
      const pessoa: Record<string, unknown> = {
        id: idPessoa,
        tipo: "pessoa",
        nome: d.nome,
        ...(d.nomeCivil && d.nomeCivil.toLowerCase() !== d.nome.toLowerCase() ? { nome_civil: d.nomeCivil } : {}),
        vigencia: { de: null, ate: null },
        fontes: [{ ref: FONTE, dispositivo: `deputado ${d.id}` }],
        confianca: "oficial",
        verificacao: verificacao(NOTA),
        mais_informacoes: [{ titulo: "Página na Câmara dos Deputados", url: `https://www.camara.leg.br/deputados/${d.id}` }],
      };
      if (partidoConfirmado) {
        pessoa.filiacoes = [
          {
            partido: idPartido(d.siglaPartido),
            vigencia: { de: null, ate: null, nota: `Partido na data de referência (a última mudança de status registrada pela Câmara é de ${d.ultimoStatus.data.slice(0, 10)}). A data de filiação não foi importada.` },
            fontes: [{ ref: FONTE, dispositivo: `deputado ${d.id}, ultimoStatus` }],
          },
        ];
      }
      writeFileSync(join(dados("pessoas"), `${s}.json`), JSON.stringify(pessoa, null, 2) + "\n");
      pessoasCriadas++;
    }

    if (!relacoesOcupa.has(idPessoa)) {
      const s = idPessoa.split(":")[1];
      writeFileSync(
        join(dados("relacoes"), `${s}-ocupa-deputado-federal.json`),
        JSON.stringify(
          {
            id: `rel:${s}-ocupa-deputado-federal`,
            tipo: "relacao",
            nome: `${d.nome} é deputado federal`,
            relacao: "ocupa",
            de: idPessoa,
            para: "cargo:deputado-federal",
            condicao: `Pela unidade da federação ${d.siglaUf}${d.ultimoStatus.condicaoEleitoral ? `, como ${d.ultimoStatus.condicaoEleitoral.toLowerCase()}` : ""}.`,
            vigencia: { de: null, ate: null, nota: `Em exercício em ${DATA_REF} segundo a Câmara. A data de início do exercício não foi importada.` },
            fontes: [{ ref: FONTE, dispositivo: `deputado ${d.id}` }],
            confianca: "oficial",
            verificacao: verificacao(NOTA),
          },
          null,
          2,
        ) + "\n",
      );
      relacoesCriadas++;
    }
  }

  console.log(`Pessoas criadas: ${pessoasCriadas}; relações "ocupa" criadas: ${relacoesCriadas}.`);
  console.log(`Partido a conferir manualmente (mudança depois de ${DATA_REF}): ${conferirManualmente.length}`);
  for (const c of conferirManualmente) console.log(`  - ${c}`);
}

const etapa = process.argv[2];
if (etapa === "baixar") await baixar();
else if (etapa === "gerar") gerar();
else console.log("Uso: camara-deputados.ts baixar | gerar");
