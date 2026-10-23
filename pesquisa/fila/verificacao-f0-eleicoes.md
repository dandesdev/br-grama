---
id: verificacao-f0-eleicoes
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-eleicoes\""
status: pendente
depende_de: [f0-eleicoes]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-eleicoes"` conferidas contra a fonte: 8 órgãos (conjunto dos partidos, 5 federações, juntas eleitorais, Ministério Público Eleitoral), 5 cargos, 23 relações, 8 normas, 3 fontes, 7 objetos e 2 processos (etapa por etapa, com as datas de 2026 contra a Resolução TSE 23.760/2026).
- [ ] Federações em 2026-10-01: as 5 e os 11 partidos que as compõem, contra a página do TSE (o site devolve 403 para acesso automático; o coletor usou o Wayback de 1º/10/2026). Confira se alguma federação foi registrada ou desfeita perto da data.
- [ ] Cláusula de desempenho: 2% (1% por estado) ou 11 deputados em 2026-10-01; 2,5% ou 13 para medir o resultado de 2026; 3% ou 15 a partir de 2030 (EC 97/2017, art. 3º). Confira os números e a leitura do que "vale" em cada momento.
- [ ] Termos criados depois da coleta (aplique):
  - relação `designa`: `rel:procurador-geral-eleitoral-nomeia-procurador-regional-eleitoral` passa a `designa` (troque verbo e id; LC 75/1993, art. 76). Veja se o promotor eleitoral também é designado e por quem (art. 79).
  - provimento `designacao`: `cargo:procurador-regional-eleitoral`, hoje `nomeacao-livre`; e `cargo:promotor-eleitoral`, se couber.
  - provimento `eleicao-por-tribunal`: `cargo:juiz-de-tre`, hoje `eleicao-pelos-pares` (art. 120, § 1º, I). O coordenador já aplicou o termo em `cargo:ministro-do-tse`.
  - As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-eleicoes"`.
- [ ] Mudança do coordenador a conferir: os 22 `org:partido-*` ganharam `contido_em: "org:partidos-politicos"` (CF, art. 17). As federações ficaram fora do conjunto e se ligam aos partidos por `integra`. Diga no diário se algum partido com representação na Câmara não deveria estar ali.
- [ ] Pontos do coletor a conferir:
  - leituras nossas sem decisão que as confirme: a LC 219/2025 vale para 2026 pela regra da anualidade (art. 16); sem diploma não há posse. Estão marcadas como leitura nossa?
  - `vagas` de `cargo:juiz-eleitoral` (2.641) e `cargo:juiz-de-tre` (189), `inferido` por conta nossa: a conta está certa? Há número oficial?
  - sobras eleitorais (Informativo 1126 do STF): a regra registrada é a que vale para 2026?
  - repasse dos fundos: o objeto transferido só está no nome e na condição da relação; está claro?
  - os fundos (`obj:fundo-partidario`, `obj:fefc`) passaram de `documento` para o termo novo `tipo_objeto: "fundo"`, aplicado pelo coordenador; só confira.
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
