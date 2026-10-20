---
id: f0-tipicos
escopo: "Fatia 0: estado típico e município típico completos (CF, arts. 18, 25 a 33), com as atipicidades reais (D06)"
status: pendente
depende_de: []
iniciada_em: null
concluida_em: null
---

## Entregáveis

Estado típico:
- [ ] Poder Executivo estadual: `org:arquetipo-estadual-governo` (ou nome coerente com os ids existentes), `cargo:arquetipo-estadual-governador`, `cargo:arquetipo-estadual-vice-governador`, secretarias como conjunto (`org:arquetipo-estadual-secretarias`), eleição e mandato (art. 28), perda do mandato (art. 28, § 1º).
- [ ] Poder Legislativo estadual: complete `org:arquetipo-estadual-assembleia-legislativa` (já existe; não desfaça), `cargo:arquetipo-estadual-deputado-estadual` (número de deputados pela regra do art. 27, caput), constituição estadual (`obj:constituicao-estadual`, art. 25) e o processo legislativo estadual por simetria, como nota e `remete_a` ao processo federal, com fonte de que a simetria se aplica (STF, se usada, como fonte de interpretação).
- [ ] Poder Judiciário estadual: arquétipo `org:arquetipo-estadual-tribunal-de-justica`, ligado aos 27 TJs reais (que já existem) por nota ou variação, e a competência do art. 125.
- [ ] Ligações com os arquétipos que outras tarefas criam (MP, Defensoria, Procuradoria, polícias, TCE): só relações, sem recriar.
- [ ] Os 27 governadores em 2026-10-01: `pessoa:` + `ocupa`, com partido. Fonte oficial de cada estado ou do TSE. Quem assumiu porque o titular saiu em abril de 2026 (desincompatibilização) precisa aparecer corretamente.

Município típico:
- [ ] Completar o que o piloto criou (prefeitura, câmara, prefeito, vice e vereador já existem): lei orgânica (art. 29, `obj:lei-organica-municipal`), número de vereadores pela faixa populacional (art. 29, IV), limites de despesa da Câmara (art. 29-A), fiscalização (art. 31), secretarias como conjunto.
- [ ] Criação, incorporação, fusão e desmembramento de municípios (art. 18, § 4º) como processo curto, indicando se a lei complementar federal exigida existe em 2026-10-01. A falta dela é um fato com fonte, não aviso, a menos que as fontes oficiais se contradigam.
- [ ] Regiões metropolitanas e consórcios públicos (art. 25, § 3º; Lei 11.107/2005; Lei 13.089/2015): objeto ou órgão mínimo.

Atipicidades (D06), cada uma como `variacao:` com fonte:
- [ ] DF (art. 32): sem municípios, Câmara Legislativa, polícias organizadas e mantidas pela União (art. 21, XIV).
- [ ] Fernando de Noronha (distrito estadual de Pernambuco) e outros casos semelhantes, se houver.
- [ ] Territórios federais (art. 33): nenhum existe em 2026-10-01; registre como fato com fonte.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-competencias: `ente:arquetipo-estadual`, `ente:arquetipo-municipal`
- f0-funcoes-essenciais: `org:arquetipo-estadual-ministerio-publico`, `org:arquetipo-estadual-procuradoria-geral`, `org:arquetipo-estadual-defensoria-publica`
- f0-defesa-seguranca: `org:arquetipo-estadual-policia-civil`, `org:arquetipo-estadual-policia-militar`, `org:arquetipo-estadual-corpo-de-bombeiros-militar`, `org:arquetipo-municipal-guarda-municipal`
- f0-judiciario: `org:tj-<uf>`
- Já existem: `ente:<uf>`, `ente:df`, os 5.570 entes municipais, `org:arquetipo-estadual-tce`, `org:arquetipo-estadual-assembleia-legislativa`, `org:arquetipo-municipal-*`, `cargo:arquetipo-municipal-*`, `proc:lei-ordinaria`

## Diário
