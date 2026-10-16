# Modelo de dados (rascunho v0)

> Rascunho a ser testado na fatia piloto. Deve mudar depois do piloto.

## Princípios

1. **Uma entidade por arquivo** JSON em `dados/<pasta>/<slug>.json`.
2. **IDs legíveis e estáveis**: `<prefixo>:<slug>`, ex.: `org:stf`, `cargo:presidente-da-republica`. O slug não codifica hierarquia, porque órgãos mudam de lugar a cada reforma.
3. **Toda afirmação tem fonte.** `fontes` vale para a entidade inteira; um campo com fonte diferente usa `fontes_por_campo`.
4. **Tudo tem vigência** (`vigencia.de` / `vigencia.ate`); `null` em `ate` significa "em vigor".
5. **Vocabulários controlados** (tipos de órgão, de relação, de provimento etc.) ficam em `esquema/vocabularios/`. Cada termo tem definição curta, e essa mesma definição aparece no "i" da interface.
6. **Texto em português** nos próprios arquivos. As traduções futuras sobrepõem por id + campo em `i18n/<idioma>/`.

## Tipos de entidade

| Tipo | Prefixo | Pasta | O que é | Exemplo |
|---|---|---|---|---|
| ente | `ente:` | `entes/` | Ente federativo: União, estados, DF, municípios | `ente:sp-sao-paulo` |
| órgão | `org:` | `orgaos/` | Unidade organizacional, de um Poder inteiro a uma coordenação; inclui tribunais, casas legislativas, colegiados e entidades não estatais | `org:stf` |
| cargo | `cargo:` | `cargos/` | Posição ocupada por pessoas; individual ou agregada | `cargo:deputado-federal` (× 513) |
| pessoa | `pessoa:` | `pessoas/` | Só cúpula (D11); nome e partido | |
| norma | `norma:` | `normas/` | Ato normativo usado como base legal | `norma:cf-1988` |
| fonte | `fonte:` | `fontes/` | Fonte não normativa: dataset, página, relatório, doutrina | `fonte:siorg` |
| relação | `rel:` | `relacoes/` | Aresta tipada entre duas entidades | `rel:presidente-nomeia-ministro-stf` |
| processo | `proc:` | `processos/` | Sequência de etapas ("linha de metrô") ou ciclo | `proc:lei-ordinaria` |
| fluxo | `fluxo:` | `fluxos/` | Grandeza que circula entre entidades num período (R$, processos, pessoas) | `fluxo:fpm-2025` |
| métrica | `met:` | `metricas/` | Número de uma entidade num período (orçamento, servidores) | |
| achado | `achado:` | `achados/` | Lacuna, contradição, sigilo, baixa transparência | |
| variação | `var:` | `variacoes/` | Atipicidade de um ente em relação ao arquétipo | `var:sp-capital-tcm` |

## Campos comuns (todas as entidades)

| Campo | Obrigatório | Descrição |
|---|---|---|
| `id` | sim | Igual ao nome do arquivo com prefixo |
| `tipo` | sim | Um dos tipos acima |
| `nome` | sim | Nome oficial |
| `sigla` | não | |
| `resumo` | sim* | Uma linha. É o que aparece no mapa (*exceto relação e fluxo) |
| `detalhes` | não | Texto curto do botão "i" |
| `vigencia` | sim | `{ "de": "AAAA-MM-DD" \| null, "ate": "AAAA-MM-DD" \| null }` |
| `fontes` | sim | Lista de `{ "ref": "norma:… \| fonte:…", "dispositivo": "art. 84, XIV" }` |
| `fontes_por_campo` | não | `{ "<campo>": [fontes] }` quando um campo tem fonte própria |
| `confianca` | sim | `oficial` · `oficial-contraditorio` · `secundario` · `inferido` · `indisponivel` |
| `verificacao` | sim | `{ "status": "coletado" \| "verificado", "em": "AAAA-MM-DD", "tarefa": "<id da tarefa>" }` |
| `mais_informacoes` | não | Links externos para aprofundar |
| `notas` | não | Notas internas para mantenedores; não aparecem no site |

## Exemplos

Cargo (`dados/cargos/presidente-da-republica.json`):

```json
{
  "id": "cargo:presidente-da-republica",
  "tipo": "cargo",
  "nome": "Presidente da República",
  "resumo": "Chefe de Estado e Chefe de Governo; chefia o Poder Executivo federal.",
  "orgao": "org:presidencia-da-republica",
  "provimento": "eleicao-majoritaria-dois-turnos",
  "mandato": { "anos": 4, "reconducao": "uma-reeleicao-consecutiva" },
  "quantidade": 1,
  "vigencia": { "de": "1988-10-05", "ate": null },
  "fontes": [{ "ref": "norma:cf-1988", "dispositivo": "arts. 76, 77, 82 e 84" }],
  "fontes_por_campo": {
    "resumo": [{ "ref": "fonte:doutrina-chefe-estado-governo", "dispositivo": null }]
  },
  "confianca": "oficial",
  "verificacao": { "status": "coletado", "em": "2026-10-16", "tarefa": "piloto" }
}
```

O exemplo mostra por que existe `fontes_por_campo`: a CF não usa as expressões "Chefe de Estado" e "Chefe de Governo". Elas vêm da doutrina, que lê assim as competências do art. 84. Por isso o resumo tem fonte própria, de outra natureza.

Relação (`dados/relacoes/presidente-nomeia-ministro-stf.json`):

```json
{
  "id": "rel:presidente-nomeia-ministro-stf",
  "tipo": "relacao",
  "nome": "Nomeação de ministro do STF",
  "relacao": "nomeia",
  "de": "cargo:presidente-da-republica",
  "para": "cargo:ministro-do-stf",
  "condicao": "Depois de aprovação do Senado Federal por maioria absoluta",
  "depende_de": ["rel:senado-aprova-indicacao-ministro-stf"],
  "vigencia": { "de": "1988-10-05", "ate": null },
  "fontes": [{ "ref": "norma:cf-1988", "dispositivo": "art. 84, XIV; art. 101, parágrafo único" }],
  "confianca": "oficial",
  "verificacao": { "status": "coletado", "em": "2026-10-16", "tarefa": "piloto" }
}
```

A ocupação também é uma relação: `pessoa:… —ocupa→ cargo:…`, com vigência. O partido é um campo da pessoa (`filiacoes`, com vigência) que aponta para um `org:` de tipo partido.

Processo (forma geral):

```json
{
  "id": "proc:lei-ordinaria",
  "tipo": "processo",
  "forma": "linha",
  "etapas": [
    {
      "id": "iniciativa",
      "ator": "cargo:…",
      "acao": "apresenta projeto",
      "prazo": null,
      "fontes": [],
      "seguintes": [{ "para": "camara-comissoes", "quando": null }]
    }
  ]
}
```

As etapas podem se ramificar (`seguintes` com `quando`: "aprovado", "rejeitado", "emendado"). Assim um fluxograma cabe dentro de uma linha.

## Vocabulário inicial de relações (vai crescer)

| Grupo | Relações |
|---|---|
| Estrutura | `integra` (é parte de) · `subordina-se` (hierarquia) · `vincula-se` (supervisão ministerial, sem hierarquia) |
| Pessoas | `ocupa` · `elege` · `indica` · `aprova-indicacao` · `nomeia` · `exonera` · `substitui` (linha sucessória) |
| Normas | `propoe` · `legisla-sobre` · `sanciona` · `veta` · `promulga` · `regulamenta` |
| Controle | `fiscaliza` (externo) · `controla-internamente` · `audita` · `corrige` (corregedoria) · `presta-contas-a` · `julga` · `processa` |
| Poderes administrativos | `exerce-poder-de-policia-sobre` · `regula` · `exerce-poder-disciplinar-sobre` |
| Recursos | `arrecada` · `repassa-recursos` |
| Representação | `representa-judicialmente` · `assessora` · `defende` |

## Arquétipos e variações

O arquétipo é um conjunto de `org:` e `cargo:` com `"arquetipo": "estadual"` ou `"municipal"`. Uma variação aponta para o arquétipo, para os entes onde ela ocorre e para a base legal:

```json
{
  "id": "var:sp-capital-tcm",
  "tipo": "variacao",
  "nome": "Tribunal de Contas do Município de São Paulo",
  "resumo": "A capital paulista tem tribunal de contas próprio; a regra é o TCE fiscalizar os municípios.",
  "entes": ["ente:sp-sao-paulo"],
  "difere_de": "org:arquetipo-municipal-controle-externo",
  "porque": "Tribunal anterior à CF/1988, mantido; o art. 31, §4º proíbe criar novos.",
  "...": "campos comuns"
}
```
