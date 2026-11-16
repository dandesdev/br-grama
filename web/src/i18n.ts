// Idioma da interface (D27, D66). O português é o texto original; o inglês vem das sobreposições
// em i18n/en/, que o build junta em web/public/dados/en.json.
//
// Escolha do idioma: ?lang=en ou ?lang=pt na URL > escolha guardada no navegador > português.
// t(textoEmPortugues, { variavel }) devolve a tradução de interface.json, ou o próprio texto
// quando não há tradução (ou quando o idioma é o português). Variáveis vão entre chaves: {nome}.
// As chamadas de t precisam de texto literal entre aspas duplas: scripts/i18n-chaves.ts procura essas chamadas
// e lista as chaves que faltam em i18n/en/interface.json.

export type Idioma = "pt" | "en";

interface Termo { nome?: string; definicao?: string }

export interface PacoteIdioma {
  interface: Record<string, string>;
  vocabularios: {
    relacoes?: Record<string, Termo>;
    tipos_orgao?: Record<string, Termo>;
    gerais?: Record<string, Record<string, Termo>>;
  };
  entidades: Record<string, { nome?: string; resumo?: string; etapas?: Record<string, string> }>;
}

const CHAVE_GUARDADA = "br-grama:idioma";
const ehIdioma = (x: unknown): x is Idioma => x === "pt" || x === "en";

function escolherIdioma(): Idioma {
  const daUrl = new URLSearchParams(location.search).get("lang");
  if (ehIdioma(daUrl)) return daUrl;
  try {
    const guardado = localStorage.getItem(CHAVE_GUARDADA);
    if (ehIdioma(guardado)) return guardado;
  } catch {
    // Navegador sem armazenamento (janela privada, bloqueio): fica o português.
  }
  return "pt";
}

async function carregarPacote(pedido: Idioma): Promise<PacoteIdioma | null> {
  if (pedido === "pt") return null;
  try {
    const resp = await fetch(`./dados/${pedido}.json`);
    return resp.ok ? ((await resp.json()) as PacoteIdioma) : null;
  } catch {
    return null;
  }
}

/** Traduções do idioma escolhido; null em português. Se en.json não carregar, o site fica todo em português. */
export const pacote = await carregarPacote(escolherIdioma());
export const idioma: Idioma = pacote ? "en" : "pt";
export const emIngles = idioma === "en";
/** Localidade para números e datas. */
export const LOCALE = emIngles ? "en-GB" : "pt-BR";
if (emIngles) document.documentElement.lang = "en";

export function t(texto: string, variaveis?: Record<string, string | number>): string {
  const traduzido = pacote?.interface?.[texto] || texto;
  if (!variaveis) return traduzido;
  return traduzido.replace(/\{(\w+)\}/g, (marca, nome: string) => (nome in variaveis ? String(variaveis[nome]) : marca));
}

/** Guarda o outro idioma e recarrega a página com ?lang=. */
export function trocarIdioma() {
  const novo: Idioma = idioma === "en" ? "pt" : "en";
  try {
    localStorage.setItem(CHAVE_GUARDADA, novo);
  } catch {
    // A URL basta para esta visita.
  }
  const url = new URL(location.href);
  url.searchParams.set("lang", novo);
  location.assign(url.toString());
}

/** Traduz os textos fixos de index.html: [data-t] troca o texto do elemento; [data-t-attr="title aria-label"] troca esses atributos. */
export function traduzirHtml(raiz: ParentNode = document) {
  if (!pacote) return;
  for (const el of raiz.querySelectorAll<HTMLElement>("[data-t]")) el.textContent = t((el.textContent ?? "").trim());
  for (const el of raiz.querySelectorAll<HTMLElement>("[data-t-attr]")) {
    for (const atributo of el.dataset.tAttr!.split(" ")) {
      const valor = el.getAttribute(atributo);
      if (valor) el.setAttribute(atributo, t(valor));
    }
  }
}
