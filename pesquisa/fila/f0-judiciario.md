---
id: f0-judiciario
escopo: "Fatia 0: o Poder Judiciário completo no nível da CF (arts. 92 a 126), com todos os tribunais reais"
status: coletada
depende_de: []
iniciada_em: 2026-10-17
concluida_em: 2026-10-19
---

## Entregáveis

Estrutura (todos `contido_em` o ramo da Justiça a que pertencem; os ramos ficam dentro de `org:poder-judiciario`):
- [x] Os ramos: Justiça Federal, do Trabalho, Eleitoral, Militar da União e Justiça dos Estados e do DF (`org:justica-federal`, `org:justica-do-trabalho`, `org:justica-eleitoral`, `org:justica-militar-da-uniao`, `org:justica-estadual`)
- [x] Completar os tribunais superiores que hoje são esboços: `org:stj`, `org:tst`, `org:tse`, `org:stm`. Eles vieram de outra tarefa; esta tarefa passa a ser dona deles. Inclua composição, forma de escolha e competências principais.
- [x] `org:cnj` (art. 103-B): composição (relações `integra`), quem indica cada membro, competências de controle
- [x] Cargos: `cargo:ministro-do-stj`, `cargo:ministro-do-tst`, `cargo:ministro-do-tse`, `cargo:ministro-do-stm`, `cargo:juiz-de-trf`, `cargo:desembargador`, `cargo:juiz-federal`, `cargo:juiz-de-direito` e outros indispensáveis, com provimento (inclusive o quinto constitucional, art. 94), requisitos e garantias
- [x] Tribunais reais, com o nome oficial, a sede e os estados que cada um abrange, conforme a fonte oficial (CNJ ou o próprio tribunal):
  - os 6 TRFs (`org:trf-1` a `org:trf-6`)
  - os 24 TRTs (`org:trt-1` a `org:trt-24`)
  - os 27 TREs (`org:tre-<uf>`)
  - os 27 TJs (`org:tj-<uf>`, com o TJDFT como `org:tj-df`)
  - os 3 TJMs (MG, RS, SP)

  São entidades simples: nome, sigla, sede, abrangência (em `detalhes`), `contido_em`, fonte e um link para o site oficial em `mais_informacoes`. O TJ do arquétipo estadual não é necessário, porque existem todos os reais.
- [x] Relações principais entre os tribunais: quem julga recurso de quem, só no nível da CF (ex.: STJ julga recurso especial contra decisões dos TRFs e TJs, art. 105, III). O alvo pode ser o ramo ou o conjunto de tribunais.

Processo:
- [x] `proc:caminho-de-um-processo` (forma "linha"): do juiz de primeira instância até o STF, nas Justiças comum (estadual e federal), com recursos de apelação, especial e extraordinário. Mantenha no nível da CF e cite o CPC só para o nome dos recursos e os prazos principais.

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
- 2026-10-19 07:42 — retomada (cota renovada); fonte:stf-adi-3367, org:cnj e cargo:conselheiro-do-cnj já estavam gravados e no commit ef216a9; seguem as relações e o processo
- 2026-10-19 07:43 — org:tse e cargo:ministro-do-tse: eleição dos ministros do STF pelo Plenário conferida no RISTF (art. 7º, II; art. 143, parágrafo único; PDF consolidado até a ER 59/2023)
- 2026-10-19 07:44 — gravadas 46 relações: escolha (STJ, TST, TSE, TRT), composição e competências do CNJ, recursos entre tribunais no nível da CF e foro dos magistrados: rel:stj-indica-ministro-do-stj rel:tst-indica-ministro-do-tst rel:stf-elege-ministro-do-tse rel:stj-elege-ministro-do-tse rel:stf-indica-ministro-do-tse rel:presidente-nomeia-ministro-do-tse rel:presidente-nomeia-juiz-de-trt rel:presidente-do-stf-integra-cnj rel:ministro-do-stj-integra-cnj rel:ministro-do-tst-integra-cnj rel:desembargador-integra-cnj rel:juiz-de-direito-integra-cnj rel:juiz-de-trf-integra-cnj rel:juiz-federal-integra-cnj rel:juiz-de-trt-integra-cnj rel:juiz-do-trabalho-integra-cnj rel:mpu-integra-cnj rel:presidente-do-stf-preside-cnj rel:stj-indica-conselheiro-do-cnj rel:tst-indica-conselheiro-do-cnj rel:stf-indica-conselheiro-do-cnj rel:pgr-indica-conselheiro-do-cnj rel:camara-indica-conselheiro-do-cnj rel:senado-indica-conselheiro-do-cnj rel:senado-aprova-indicacao-conselheiro-do-cnj rel:presidente-nomeia-conselheiro-do-cnj rel:cnj-controla-internamente-poder-judiciario rel:cnj-corrige-poder-judiciario rel:stf-julga-cnj rel:stf-julga-recurso-extraordinario rel:stf-julga-recursos-do-stj rel:stf-julga-recursos-do-tst rel:stf-julga-recursos-do-tse rel:stf-julga-recursos-do-stm rel:stj-julga-recursos-da-justica-federal rel:stj-julga-recursos-da-justica-estadual rel:tst-julga-recursos-da-justica-do-trabalho rel:tse-julga-recursos-da-justica-eleitoral rel:stm-julga-recursos-da-justica-militar-da-uniao rel:stf-julga-ministro-do-stj rel:stf-julga-ministro-do-tst rel:stf-julga-ministro-do-tse rel:stf-julga-ministro-do-stm rel:stj-julga-desembargador rel:stj-julga-juiz-de-trf rel:stj-julga-juiz-de-trt 
- 2026-10-19 07:45 — gravado proc:caminho-de-um-processo (6 etapas: sentença, apelação, admissão do REsp/RE, REsp no STJ, RE no STF, trânsito em julgado; CF + CPC com redação da Lei 15.484/2026)
- 2026-10-19 07:46 — vocabulário: faltam tipo_orgao para ramo da Justiça (usado "conjunto"), provimento para promoção na carreira (usado "concurso-publico") e para nomeação dentre lista (usado "nomeacao-livre", com aviso no "quando"); relações de recurso usam "julga" com alvo no ramo
- 2026-10-19 07:46 — não criados, para não duplicar: Presidente nomeia ministros do STJ, TST e STM e juízes de TRF (reservado à f0-executivo) e Senado aprova ministros do STJ, TST e STM (art. 52, III, a; provável f0-legislativo); OAB indica conselheiros do CNJ (org:oab é da f0-funcoes-essenciais)
- 2026-10-19 07:46 — pendências: ementa da ADI 3367 (CNJ sem competência sobre o STF) não acessada; quem elege os ministros do STJ no TSE não conferido no RISTJ (rel:stj-elege-ministro-do-tse inferida); nomes dos TREs MT, MS e TO como no CNJ ("do Mato Grosso", "de Tocantins"), sem conferir no site dos tribunais (bloqueado)
- 2026-10-19 07:46 — validação sem erros nos arquivos da tarefa; status coletada
