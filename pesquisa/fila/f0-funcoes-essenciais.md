---
id: f0-funcoes-essenciais
escopo: "Fatia 0: funções essenciais à Justiça (CF, arts. 127 a 135): Ministério Público, Advocacia Pública, Advocacia e Defensoria Pública"
status: coletada
depende_de: []
iniciada_em: 2026-10-22
concluida_em: 2026-10-23
---

## Entregáveis

- [x] Ministério Público da União completo: `org:ministerio-publico-da-uniao` já existe (esboço; esta tarefa passa a ser dona dele), mais os ramos `org:mpf`, `org:mpt`, `org:mpm`, `org:mpdft` (art. 128, I). Chefia, forma de escolha e mandato do PGR (`cargo:procurador-geral-da-republica` já existe; complete-o), destituição (art. 128, § 2º), garantias e vedações.
- [x] `org:cnmp` (art. 130-A): composição e competências
- [x] Ministério Público dos estados: arquétipo `org:arquetipo-estadual-ministerio-publico` com `cargo:arquetipo-estadual-procurador-geral-de-justica` (art. 128, § 3º: lista tríplice, nomeação pelo governador, mandato)
- [x] Ministério Público junto aos tribunais de contas (art. 130), como nota ou órgão mínimo
- [x] Advocacia-Geral da União (`org:agu`, art. 131): chefia (`cargo:advogado-geral-da-uniao`), Procuradoria-Geral da Fazenda Nacional (art. 131, § 3º)
- [x] Procuradorias dos estados e do DF (art. 132): arquétipo `org:arquetipo-estadual-procuradoria-geral`
- [x] Advocacia (art. 133) e a OAB, como entidade (`org:oab`) com a natureza jurídica conforme a fonte oficial e a jurisprudência do STF
- [x] Defensoria Pública: `org:dpu` (art. 134), `cargo:defensor-publico-geral-federal`, arquétipo estadual `org:arquetipo-estadual-defensoria-publica`; autonomia (art. 134, §§ 2º e 3º)
- [x] Membros do CNJ indicados pelo MP e pela OAB (art. 103-B, X a XII): relações de indicação para `org:cnj` (sugestão da revisão do Judiciário)
- [x] Relações principais: quem nomeia, quem fiscaliza, quem representa quem judicialmente, quem pode propor ação de controle de constitucionalidade (art. 103, VI e VII)

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-judiciario: `org:cnj`, `org:stj`, tribunais `org:trf-*`, `org:tj-*`
- f0-executivo: ministérios `org:ministerio-*`, `org:casa-civil`

## Diário
- 2026-10-22 14:59 — iniciada; lidas instruções, decisões, modelo e protocolo
- 2026-10-22 15:00 — gravados (esboço, só CF) org:mpf, org:mpt, org:mpm, org:mpdft
- 2026-10-22 15:02 — gravado norma:lc-75-1993 (arquivo null: Wayback 429); completados org:mpf, org:mpt, org:mpm, org:mpdft com a LC 75/1993
- 2026-10-22 15:04 — gravados fonte:senado-msf-89-2023, fonte:senado-msf-60-2025, pessoa:paulo-gonet, rel:paulo-gonet-ocupa-procurador-geral-da-republica (falta prova de exercício perto de 2026-10-01)
- 2026-10-22 15:04 — exercício do PGR em 2026-10-01 confirmado no DOU (Portaria PGR/MPF 659, de 1º/10/2026); acrescentado à relação e à pessoa
- 2026-10-22 15:05 — completados cargo:procurador-geral-da-republica e org:ministerio-publico-da-uniao (verificacao volta a coletado, com nota); gravado cargo:membro-do-ministerio-publico-da-uniao
- 2026-10-22 15:07 — gravados norma:lei-11372-2006, org:cnmp, cargo:conselheiro-do-cnmp
- 2026-10-22 15:08 — gravados norma:lei-8625-1993, org:arquetipo-estadual-ministerio-publico, cargo:arquetipo-estadual-procurador-geral-de-justica, cargo:arquetipo-estadual-membro-do-ministerio-publico, aviso:destituicao-procurador-geral-de-justica-quorum
- 2026-10-22 15:10 — gravado obj:adi-e-adc
- 2026-10-23 00:20 — retomada após checkpoint 80e6b93: conferidas em disco e validadas as 24 relações gravadas às 15:11 de 22/10 (sem linha no diário): rel:stf-julga-procurador-geral-da-republica, rel:stj-julga-membro-do-mpu, rel:procurador-geral-da-republica-preside-cnmp, rel:procurador-geral-da-republica-integra-cnmp, rel:mpu-integra-cnmp, rel:arquetipo-estadual-ministerio-publico-integra-cnmp, rel:arquetipo-estadual-ministerio-publico-integra-cnj, rel:arquetipo-estadual-ministerio-publico-indica-conselheiro-do-cnj, rel:mpu-indica-conselheiro-do-cnmp, rel:arquetipo-estadual-procurador-geral-de-justica-indica-conselheiro-do-cnmp, rel:stf-indica-conselheiro-do-cnmp, rel:stj-indica-conselheiro-do-cnmp, rel:camara-indica-conselheiro-do-cnmp, rel:senado-indica-conselheiro-do-cnmp, rel:senado-aprova-indicacao-conselheiro-do-cnmp, rel:presidente-nomeia-conselheiro-do-cnmp, rel:senado-julga-conselheiro-do-cnmp, rel:stf-julga-cnmp, rel:cnmp-controla-internamente-mpu, rel:cnmp-controla-internamente-arquetipo-estadual-ministerio-publico, rel:cnmp-corrige-mpu, rel:cnmp-corrige-arquetipo-estadual-ministerio-publico, rel:pgr-propoe-adi-e-adc, rel:arquetipo-estadual-assembleia-legislativa-exonera-procurador-geral-de-justica
- 2026-10-23 00:20 — não criadas por falta dos ids (f0-tipicos): governador nomeia procurador-geral de justiça; TJ julga membros do MP estadual (art. 96, III); TRF julga membros do MPU (art. 108, I, a) sem nó por TRF adequado (citado na condição de rel:stj-julga-membro-do-mpu)
- 2026-10-23 00:21 — gravados norma:lei-8443-1992 (aviso à f0-controle: reutilizar) e org:mp-junto-ao-tcu (sem contido_em; ADI 789 não consultada)
- 2026-10-23 15:32 — gravado norma:lc-73-1993
- 2026-10-23 15:32 — gravado cargo:advogado-geral-da-uniao
- 2026-10-23 15:33 — gravado rel:jorge-messias-ocupa-advogado-geral-da-uniao. Decisão: Messias ocupa também cargo:advogado-geral-da-uniao, porque o decreto de 1º/1/2023 o nomeia para esse cargo (CF art. 131, § 1º; art. 84, XVI) e a Lei 14.600/2023, art. 18, VII, faz do AGU um Ministro de Estado; a relação ocupa ministro-de-estado (f0-executivo) foi mantida sem edição, com nota cruzada nas duas pontas novas (cargo e relação)
- 2026-10-23 15:36 — gravados org:pgfn (contido_em ministério da Fazenda, LC 73 art. 12) e cargo:membro-da-advocacia-geral-da-uniao; complementado org:agu (detalhes, LC 73/1993)
- 2026-10-23 15:36 — gravados org:arquetipo-estadual-procuradoria-geral e cargo:arquetipo-estadual-procurador-do-estado (sem cargo de chefia: a CF não regula a escolha do procurador-geral do estado)
- 2026-10-23 15:37 — gravadas rel:agu-representa-judicialmente-uniao, rel:pgfn-representa-judicialmente-uniao, rel:pgfn-integra-agu, rel:advogado-geral-da-uniao-assessora-presidente, rel:presidente-nomeia-advogado-geral-da-uniao, rel:presidente-exonera-advogado-geral-da-uniao (inferida), rel:senado-julga-advogado-geral-da-uniao, rel:arquetipo-estadual-procuradoria-geral-representa-judicialmente-estado
- 2026-10-23 15:40 — gravados fonte:stf-adi-3026, fonte:stf-re-1182189, fonte:dizer-o-direito-oab-prestacao-de-contas-2023 (secundária: ementa da ADI 3026 não acessível no STF)
- 2026-10-23 15:40 — gravados norma:lei-8906-1994, org:oab (outro, nao-estatal), org:conselho-federal-da-oab
- 2026-10-23 15:41 — gravados cargo:presidente-do-conselho-federal-da-oab, fonte:oab-diretoria-conselho-federal, fonte:oab-noticia-reeleicao-simonetti-2025, pessoa:beto-simonetti (nome civil secundário), rel:beto-simonetti-ocupa-presidente-do-conselho-federal-da-oab (início 2022 incerto quanto ao dia)
- 2026-10-23 15:41 — gravadas rel:conselho-federal-da-oab-propoe-adi-e-adc, rel:conselho-federal-da-oab-indica-conselheiro-do-cnj, rel:conselho-federal-da-oab-indica-conselheiro-do-cnmp, rel:presidente-do-conselho-federal-da-oab-preside-conselho-federal-da-oab. Sem relação integra para os advogados no CNJ/CNMP (não há cargo de advogado); o presidente do CFOAB 'oficia junto' ao CNJ e ao CNMP, sem termo no vocabulário (fica nos detalhes do cargo)
- 2026-10-23 15:43 — gravados norma:lc-80-1994, org:dpu, cargo:defensor-publico-geral-federal, cargo:defensor-publico-federal
- 2026-10-23 15:43 — gravados fonte:senado-msf-12-2026, pessoa:tarcijany-linhares, rel:tarcijany-linhares-ocupa-defensor-publico-geral-federal (DOU: Portaria 1.389 publicada em 1º/10/2026)
- 2026-10-23 15:44 — gravados org:arquetipo-estadual-defensoria-publica, cargo:arquetipo-estadual-defensor-publico-geral, cargo:arquetipo-estadual-defensor-publico, rel:senado-aprova-indicacao-defensor-publico-geral-federal, rel:presidente-nomeia-defensor-publico-geral-federal. Governador nomeia DPG estadual: não criada (sem cargo de governador; f0-tipicos)
- 2026-10-23 15:45 — preenchido arquivo (Wayback) das 15 normas e fontes desta tarefa que estavam com null
- 2026-10-23 15:46 — coletada; validação sem erros. Termos que faltaram: provimento para lista tríplice + aprovação do Senado (DPGF; usado nomeacao-a-partir-de-lista); relação 'oficia junto a' (PGR no STF, presidente do CFOAB no CNJ/CNMP); 'promove ação penal/ação civil pública'; tipo de órgão para conselho de controle do MP (CNMP ficou colegiado). Pendências: ementa oficial da ADI 3026 (usada fonte secundária); posição do MPTCU (ADI 789 não lida); governador nomeia PGJ e DPG estadual, TJ julga membros do MP estadual e TRF julga membros do MPU dependem de ids da f0-tipicos; legitimados do art. 103, I a V, VIII e IX não ligados a obj:adi-e-adc; MPs de contas estaduais e Defensoria do DF não modelados
