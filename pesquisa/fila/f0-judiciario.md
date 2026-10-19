---
id: f0-judiciario
escopo: "Fatia 0: o Poder Judiciário completo no nível da CF (arts. 92 a 126), com todos os tribunais reais"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-17
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
- 2026-10-17 22:14 — iniciada; lidos instruções, decisões, modelo de dados, protocolo, vocabulários e exemplos do piloto
- 2026-10-17 22:19 — gravados org:justica-federal, org:justica-do-trabalho, org:justica-eleitoral, org:justica-militar-da-uniao, org:justica-estadual (CF, texto de pesquisa/brutos/planalto-cf/2026-10-16; EC 140 e 141 não tocam os arts. 92 a 126)
- 2026-10-18 08:23 — retomada após renovação da cota; gravados fonte:cnj-tribunais (lista oficial e subpáginas, brutos em pesquisa/brutos/cnj/2026-10-17/) e norma:lei-14226-2021
- 2026-10-18 08:25 — gravados org:trf-1 a org:trf-6 (fonte:cnj-tribunais: estados na lista, sede pelo endereço da subpágina; TRF6 também pela Lei 14.226/2021)
- 2026-10-18 08:26 — gravados org:trt-1 a org:trt-24 (fonte:cnj-tribunais; TRT2 e TRT15 dividem SP; endereço do TRT5 no CNJ sem formato Cidade/UF, cidade Salvador)
- 2026-10-18 08:26 — gravados os 27 org:tre-<uf> (nome e site pela lista do CNJ; sede pela regra do art. 120 da CF; sigla inferida do domínio do site)
- 2026-10-18 08:27 — gravados os 27 org:tj-<uf> (org:tj-df = TJDFT, ente:uniao; nome, sigla, sede e site pelo CNJ)
- 2026-10-18 08:27 — gravados org:tjm-mg, org:tjm-rs, org:tjm-sp (CNJ; CF art. 125, §§ 3º a 5º)
- 2026-10-18 08:29 — gravadas norma:lei-13105-2015 (CPC), norma:lei-15484-2026 (relevância no REsp, vigente desde 3/9/2026), norma:lei-8457-1992, norma:decreto-lei-5452-1943 (CLT)
- 2026-10-18 08:30 — reescrito org:stj (composição, escolha, competências principais; esta tarefa passa a ser dona)
- 2026-10-18 08:30 — reescritos org:tst, org:tse, org:stm (contido_em nos ramos; composição, escolha e competências)
- 2026-10-18 08:31 — gravados fonte:stf-adi-3367 e org:cnj
- 2026-10-18 08:32 — gravada norma:ec-45-2004; org:cnj com vigência pela EC 45
- 2026-10-18 08:34 — gravados cargo:ministro-do-stj, cargo:ministro-do-tst, cargo:ministro-do-stm, cargo:ministro-do-tse, cargo:conselheiro-do-cnj
- 2026-10-18 08:35 — gravados cargo:juiz-de-trf, cargo:juiz-de-trt, cargo:desembargador, cargo:juiz-federal, cargo:juiz-do-trabalho, cargo:juiz-de-direito, cargo:juiz-federal-da-justica-militar (provimento com termos aproximados; ver notas)
