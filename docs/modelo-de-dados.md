# Modelo de dados (esquema v1)

O esquema formal está em `esquema/` (JSON Schema). Os vocabulários controlados estão em `esquema/vocabularios/`. Este documento explica o modelo para quem vai ler ou editar os dados. `npm run validar` confere tudo o que está descrito aqui.

Histórico: o v0 foi testado no piloto (out/2026). O v1 incorpora os problemas apontados pelos agentes de pesquisa; a migração está em `scripts/migracoes/2026-10-17-esquema-v1.ts`.

## Princípios

1. **Uma entidade por arquivo** JSON em `dados/<pasta>/<slug>.json`.
2. **IDs legíveis e estáveis**: `<prefixo>:<slug>`, ex.: `org:stf`. O slug não codifica hierarquia, porque órgãos mudam de lugar.
3. **Toda afirmação tem fonte.** `fontes` vale para a entidade inteira. Um campo com fonte ou confiança diferente usa `campos.<campo>`.
4. **Tudo tem vigência.** `vigencia.de: null` significa início desconhecido; `vigencia.ate: null` significa em vigor. Datas aproximadas levam `incerta: true` e uma `nota`.
5. **Vocabulários controlados.** Cada termo tem `nome` (exibido no site) e `definicao` (exibida no "i"). Não invente termos: proponha no diário da tarefa.
6. **Texto em português** nos próprios arquivos. As traduções futuras sobrepõem por id + campo em `i18n/<idioma>/`.

## Tipos de entidade

| Tipo | Prefixo | Pasta | O que é |
|---|---|---|---|
| ente | `ente:` | `entes/` | Ente federativo: União, estados, DF, municípios. Município tem `contido_em` apontando para o estado |
| órgão | `org:` | `orgaos/` | Unidade organizacional, de um Poder a uma coordenação; inclui tribunais, colegiados, partidos e conjuntos (ex.: "comissões da Câmara") |
| cargo | `cargo:` | `cargos/` | Posição ocupada por pessoas |
| pessoa | `pessoa:` | `pessoas/` | Só cúpula (D11): nome de uso, nome civil e filiações |
| objeto | `obj:` | `objetos/` | **Objeto de competência**: o ato, a norma, as contas ou a ação sobre os quais órgãos e cargos agem (D32) |
| norma | `norma:` | `normas/` | Ato normativo usado como fonte |
| fonte | `fonte:` | `fontes/` | Fonte não normativa: dataset, página, relatório, doutrina |
| relação | `rel:` | `relacoes/` | Aresta tipada entre duas entidades |
| processo | `proc:` | `processos/` | Sequência de etapas, com regimes (variantes) |
| achado | `achado:` | `achados/` | Lacuna, contradição, sigilo ou baixa transparência |
| variação | `var:` | `variacoes/` | Atipicidade de um ente em relação ao arquétipo |

## Campos comuns

| Campo | Descrição |
|---|---|
| `id`, `tipo`, `nome` | Obrigatórios |
| `sigla`, `resumo` (até 200 caracteres), `detalhes` | `resumo` é o que aparece no mapa; `detalhes`, no "i" |
| `vigencia` | `{ de, ate, incerta?, nota? }` |
| `fontes` | `[{ ref: "norma:…" \| "fonte:…", dispositivo, nota? }]` |
| `campos` | `{ "<campo>": { fontes?, confianca?, nota? } }`: quando um campo tem fonte ou confiança próprias. Ex.: um cargo oficial cujo número de vagas é inferido |
| `confianca` | `oficial` · `oficial-contraditorio` · `secundario` · `inferido` · `indisponivel` |
| `verificacao` | `{ status: "coletado" \| "verificado", em, tarefa, notas? }` |
| `mais_informacoes` | Links externos |
| `notas` | Notas internas; não aparecem no site |

## Regras por tipo

**Órgão.** `contido_em` diz onde o órgão aparece no organograma. A fonte que justifica essa posição vai em `campos.contido_em.fontes`. **Não crie uma relação `integra` que repita o `contido_em`.** Use `integra` só quando a pertença não é hierárquica (ex.: um Poder integra a União) e `exerce` quando a norma diz "o Poder X é exercido por Y".

**Cargo.**
- `vagas`: número de cadeiras (null se variável, com `vagas_nota`).
- `vacancias`: cadeiras vagas num período, com fonte (ex.: a vaga no STF desde out/2025).
- `provimento`: termo do vocabulário. Se depender de uma condição, use `"variavel"` e liste `provimento_casos: [{ quando, provimento, fontes }]`.
- `provimento_nota`: o passo a passo da escolha.
- `mandato`: `{ anos, vitalicio, limite, inicio, reconducao, nota }`.
- `requisitos`: `[{ texto, fontes }]`; `fontes: []` remete às fontes do cargo.

**Pessoa.** `nome` é o nome de uso; `nome_civil`, o completo. Cada período **contínuo** de exercício de um cargo é **uma** relação `ocupa`. Cada filiação tem vigência e pode ter `confianca` própria.

**Objeto.** `tipo_objeto` (ato normativo, contas, ação judicial, decisão, documento), `esfera` e `relativo_a` (de quem é: as contas do Presidente são `relativo_a: ["cargo:presidente-da-republica"]`). Relações como `sanciona`, `promulga`, `julga` (contas) e `controla-constitucionalidade` apontam para objetos.

**Relação.** `relacao`, `de`, `para`, `condicao`, mais:
- `ordem`: posição numa sequência de relações do mesmo tipo e alvo (ex.: a linha de substituição do Presidente: Vice = 1, Presidente da Câmara = 2…);
- `quorum`: `{ regra, votacao?, nota? }`, com `regra` do vocabulário `quorum` (maioria simples, absoluta, 2/3…);
- `depende_de`: relações que precisam acontecer antes;
- `restrita_a`: entes onde a relação vale, quando liga órgãos de arquétipo.

**Processo.** `forma`, `produz` (objeto), `etapas` e `regimes`.
- **Etapa:** `id`, `tipo_etapa` (`acao` por padrão, `decisao`, `decurso-de-prazo`, `fim`), `atores` (pode ser vazio só em decurso de prazo e fim), `acao` (até 120 caracteres), `detalhes`, `prazo`, `quorum`, `fontes`, `seguintes: [{ para, quando }]`.
- **Prazo:** `{ texto, valor?, unidade?, conta_de?, efeito? }`. `texto` sempre presente; os demais quando a norma permitir estruturar.
- **Regime:** variante que muda várias etapas, como a urgência constitucional: `{ id, nome, resumo, detalhes?, quem_aciona, fontes, efeitos: [{ etapa, prazo?, nota? }] }`.

**Achado.** `tipo_achado`, `afeta`, `gravidade` e `onde_procuramos` (onde a informação foi buscada sem sucesso). Um fato com fonte (ex.: uma cadeira vaga) **não** é achado: registre no próprio cargo.

**Variação.** `entes`, `abrangencia` (`ente` ou `municipios-do-estado`), `difere_de` (órgão do arquétipo), `instancia` (órgão real), `substitui_relacoes` e `porque`.

**Norma.** `tipo_norma`, `numero`, `data`, `publicacao`, `url`, `acesso_em`, `arquivo` (Wayback), `compilacao_ate` (última alteração incorporada no texto consultado) e `redacao_conferida_em`.

## Exemplo: cargo

```json
{
  "id": "cargo:ministro-do-stf",
  "tipo": "cargo",
  "nome": "Ministro do Supremo Tribunal Federal",
  "orgao": "org:stf",
  "provimento": "nomeacao-com-aprovacao-do-senado",
  "vagas": 11,
  "vacancias": [{ "vagas": 1, "vigencia": { "de": "2025-10-18", "ate": null, "incerta": true }, "fontes": ["…"] }],
  "mandato": { "anos": null, "vitalicio": true, "limite": "aposentadoria compulsória aos 75 anos" },
  "requisitos": [{ "texto": "brasileiro nato", "fontes": [{ "ref": "norma:cf-1988", "dispositivo": "art. 12, § 3º, IV" }] }],
  "…": "campos comuns"
}
```

## Exemplo: relação com objeto e quórum

```json
{
  "id": "rel:congresso-julga-contas-presidente",
  "tipo": "relacao",
  "relacao": "julga",
  "de": "org:congresso-nacional",
  "para": "obj:contas-anuais-do-presidente-da-republica",
  "depende_de": ["rel:tcu-emite-parecer-contas-presidente"],
  "fontes": [{ "ref": "norma:cf-1988", "dispositivo": "art. 49, IX" }],
  "…": "campos comuns"
}
```
