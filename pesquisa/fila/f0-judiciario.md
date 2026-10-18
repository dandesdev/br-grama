---
id: f0-judiciario
escopo: "Fatia 0: o Poder Judiciário completo no nível da CF (arts. 92 a 126), com todos os tribunais reais"
status: pendente
depende_de: []
iniciada_em: null
concluida_em: null
---

## Entregáveis

Estrutura (todos `contido_em` o ramo da Justiça a que pertencem; os ramos ficam dentro de `org:poder-judiciario`):
- [ ] Os ramos: Justiça Federal, do Trabalho, Eleitoral, Militar da União e Justiça dos Estados e do DF (`org:justica-federal`, `org:justica-do-trabalho`, `org:justica-eleitoral`, `org:justica-militar-da-uniao`, `org:justica-estadual`)
- [ ] Completar os tribunais superiores que hoje são esboços: `org:stj`, `org:tst`, `org:tse`, `org:stm`. Eles vieram de outra tarefa; esta tarefa passa a ser dona deles. Inclua composição, forma de escolha e competências principais.
- [ ] `org:cnj` (art. 103-B): composição (relações `integra`), quem indica cada membro, competências de controle
- [ ] Cargos: `cargo:ministro-do-stj`, `cargo:ministro-do-tst`, `cargo:ministro-do-tse`, `cargo:ministro-do-stm`, `cargo:juiz-de-trf`, `cargo:desembargador`, `cargo:juiz-federal`, `cargo:juiz-de-direito` e outros indispensáveis, com provimento (inclusive o quinto constitucional, art. 94), requisitos e garantias
- [ ] Tribunais reais, com o nome oficial, a sede e os estados que cada um abrange, conforme a fonte oficial (CNJ ou o próprio tribunal):
  - os 6 TRFs (`org:trf-1` a `org:trf-6`)
  - os 24 TRTs (`org:trt-1` a `org:trt-24`)
  - os 27 TREs (`org:tre-<uf>`)
  - os 27 TJs (`org:tj-<uf>`, com o TJDFT como `org:tj-df`)
  - os 3 TJMs (MG, RS, SP)

  São entidades simples: nome, sigla, sede, abrangência (em `detalhes`), `contido_em`, fonte e um link para o site oficial em `mais_informacoes`. O TJ do arquétipo estadual não é necessário, porque existem todos os reais.
- [ ] Relações principais entre os tribunais: quem julga recurso de quem, só no nível da CF (ex.: STJ julga recurso especial contra decisões dos TRFs e TJs, art. 105, III). O alvo pode ser o ramo ou o conjunto de tribunais.

Processo:
- [ ] `proc:caminho-de-um-processo` (forma "linha"): do juiz de primeira instância até o STF, nas Justiças comum (estadual e federal), com recursos de apelação, especial e extraordinário. Mantenha no nível da CF e cite o CPC só para o nome dos recursos e os prazos principais.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-executivo: `org:casa-civil` e os ministérios, `obj:decreto`
- f0-legislativo: `obj:emenda-constitucional`, `obj:lei-complementar`

## Diário
