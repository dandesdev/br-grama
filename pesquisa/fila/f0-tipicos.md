---
id: f0-tipicos
escopo: "Fatia 0: estado típico e município típico completos (CF, arts. 18, 25 a 33), com as atipicidades reais (D06)"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-23
concluida_em: null
---

## Entregáveis

Estado típico:
- [ ] Poder Executivo estadual: `org:arquetipo-estadual-governo` (ou nome coerente com os ids existentes), `cargo:arquetipo-estadual-governador`, `cargo:arquetipo-estadual-vice-governador`, secretarias como conjunto (`org:arquetipo-estadual-secretarias`), eleição e mandato (art. 28), perda do mandato (art. 28, § 1º).
- [ ] Poder Legislativo estadual: complete `org:arquetipo-estadual-assembleia-legislativa` (já existe; não desfaça), `cargo:arquetipo-estadual-deputado-estadual` (número de deputados pela regra do art. 27, caput), constituição estadual (`obj:constituicao-estadual`, art. 25) e o processo legislativo estadual por simetria, como nota e `remete_a` ao processo federal, com fonte de que a simetria se aplica (STF, se usada, como fonte de interpretação).
- [ ] Poder Judiciário estadual: arquétipo `org:arquetipo-estadual-tribunal-de-justica`, ligado aos 27 TJs reais (que já existem) por nota ou variação, e a competência do art. 125.
- [ ] Ligações com os arquétipos que outras tarefas criam (MP, Defensoria, Procuradoria, polícias, TCE): só relações, sem recriar.
  - pendentes das tarefas já coletadas: Governador nomeia o procurador-geral de justiça (art. 128, § 3º) e o defensor público-geral do estado (LC 80/1994); TJ julga membros do MP estadual (art. 96, III); `contido_em` de `org:arquetipo-estadual-tce` no Poder Legislativo estadual, se você criar o nó desse Poder (o TCU fica em `org:poder-legislativo-federal`); em `cargo:arquetipo-estadual-conselheiro-do-tce`, as 3 vagas do Governador estão como `nomeacao-livre`: troque por `nomeacao-com-aprovacao-do-legislativo` se houver fonte (Constituições estaduais ou STF) de que a Assembleia aprova
- [ ] Os 27 governadores em 2026-10-01: `pessoa:` + `ocupa`, com partido. Fonte oficial de cada estado ou do TSE. Quem assumiu porque o titular saiu em abril de 2026 (desincompatibilização) precisa aparecer corretamente.

Município típico:
- [ ] Completar o que o piloto criou (prefeitura, câmara, prefeito, vice e vereador já existem): lei orgânica (art. 29, `obj:lei-organica-municipal`), número de vereadores pela faixa populacional (art. 29, IV), limites de despesa da Câmara (art. 29-A), fiscalização (art. 31), secretarias como conjunto.
- [ ] Criação, incorporação, fusão e desmembramento de municípios (art. 18, § 4º) como processo curto, indicando se a lei complementar federal exigida existe em 2026-10-01. A falta dela é um fato com fonte, não aviso, a menos que as fontes oficiais se contradigam.
- [ ] Regiões metropolitanas e consórcios públicos (art. 25, § 3º; Lei 11.107/2005; Lei 13.089/2015): objeto ou órgão mínimo.

Atipicidades (D06), cada uma como `variacao:` com fonte:
- [ ] DF (art. 32): sem municípios, Câmara Legislativa, polícias organizadas e mantidas pela União (art. 21, XIV). Com a Câmara Legislativa criada, ligue `org:tc-df` a ela (`auxilia`, art. 75).
- [ ] Fernando de Noronha (distrito estadual de Pernambuco) e outros casos semelhantes, se houver.
- [ ] Territórios federais (art. 33): nenhum existe em 2026-10-01; registre como fato com fonte.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-competencias: `ente:arquetipo-estadual`, `ente:arquetipo-municipal`
- f0-funcoes-essenciais: `org:arquetipo-estadual-ministerio-publico`, `org:arquetipo-estadual-procuradoria-geral`, `org:arquetipo-estadual-defensoria-publica`
- f0-defesa-seguranca: `org:arquetipo-estadual-policia-civil`, `org:arquetipo-estadual-policia-militar`, `org:arquetipo-estadual-corpo-de-bombeiros-militar`, `org:arquetipo-municipal-guarda-municipal`
- f0-judiciario: `org:tj-<uf>`
- Já existem: `ente:<uf>`, `ente:df`, os 5.570 entes municipais, `org:arquetipo-estadual-tce`, `org:arquetipo-estadual-assembleia-legislativa`, `org:arquetipo-municipal-*`, `cargo:arquetipo-municipal-*`, `proc:lei-ordinaria`

## Diário
- 2026-10-23 10:00 — iniciada; lidos CLAUDE.md, instruções, modelo, protocolo e decisões
- 2026-10-23 20:20 — gravado org:arquetipo-estadual-poder-executivo
- 2026-10-23 20:35 — gravados org:arquetipo-estadual-governadoria, cargo:arquetipo-estadual-governador, cargo:arquetipo-estadual-vice-governador (Lei 1.079/1950 copiada em brutos/planalto-leis/2026-10-23/l1079.htm)
- 2026-10-23 20:50 — gravados fonte:stf-constituicao-e-o-supremo-art-25 e fonte:stf-constituicao-e-o-supremo-art-61 (cópias em brutos/stf/2026-10-23; também baixadas as compilações dos arts. 27 e 28)
- 2026-10-23 21:05 — gravados org:arquetipo-estadual-secretarias, org:arquetipo-estadual-poder-legislativo, org:arquetipo-estadual-eleitorado, cargo:arquetipo-estadual-deputado-estadual, obj:constituicao-estadual, rel:eleitorado-estadual-elege-governador, rel:eleitorado-estadual-elege-vice-governador, rel:eleitorado-estadual-elege-deputado-estadual
- 2026-10-23 21:10 — completados org:arquetipo-estadual-assembleia-legislativa e org:arquetipo-estadual-tce: contido_em org:arquetipo-estadual-poder-legislativo, com fonte em campos.contido_em; frases das notas que diziam faltar o nó foram atualizadas
- 2026-10-23 21:25 — completado cargo:arquetipo-estadual-conselheiro-do-tce: caso de livre escolha do Governador passou a nomeacao-com-aprovacao-do-legislativo (CE-SP art. 20, XII; CE-BA art. 94, caput); compilações do STF dos arts. 73 e 75 lidas sem achar regra geral de aprovação
- 2026-10-23 21:45 — gravados fonte:stf-constituicao-e-o-supremo-art-125, fonte:stf-constituicao-e-o-supremo-art-75 (sem Wayback: 429), org:arquetipo-estadual-tribunal-de-justica, obj:lei-ou-ato-normativo-estadual-ou-municipal, rel:arquetipo-estadual-tj-controla-constitucionalidade-leis-estaduais-e-municipais, rel:arquetipo-estadual-tj-julga-membro-do-ministerio-publico, rel:arquetipo-estadual-tj-julga-juiz-de-direito, rel:arquetipo-estadual-tj-julga-prefeito, rel:stj-julga-governador, rel:governador-nomeia-procurador-geral-de-justica, rel:governador-nomeia-defensor-publico-geral, rel:governador-nomeia-desembargador, rel:assembleia-legislativa-elege-conselheiro-do-tce, rel:governador-nomeia-conselheiro-do-tce, rel:assembleia-legislativa-aprova-indicacao-conselheiro-do-tce
- 2026-10-23 22:00 — gravados obj:lei-estadual, obj:contas-anuais-do-governador, rel:governador-presta-contas-assembleia-legislativa, rel:tce-emite-parecer-previo-contas-governador, rel:assembleia-legislativa-julga-contas-governador, rel:governador-propoe-lei-estadual, rel:arquetipo-estadual-assembleia-legislativa-delibera-lei-estadual, rel:governador-sanciona-lei-estadual, rel:governador-veta-lei-estadual, rel:arquetipo-estadual-assembleia-legislativa-aprecia-veto-lei-estadual, rel:eleitorado-estadual-propoe-lei-estadual, rel:arquetipo-estadual-tj-propoe-lei-estadual, rel:arquetipo-estadual-procurador-geral-de-justica-propoe-lei-estadual, rel:arquetipo-estadual-deputado-estadual-propoe-lei-estadual, proc:lei-estadual
