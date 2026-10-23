---
id: f0-funcoes-essenciais
escopo: "Fatia 0: funções essenciais à Justiça (CF, arts. 127 a 135): Ministério Público, Advocacia Pública, Advocacia e Defensoria Pública"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-22
concluida_em: null
---

## Entregáveis

- [ ] Ministério Público da União completo: `org:ministerio-publico-da-uniao` já existe (esboço; esta tarefa passa a ser dona dele), mais os ramos `org:mpf`, `org:mpt`, `org:mpm`, `org:mpdft` (art. 128, I). Chefia, forma de escolha e mandato do PGR (`cargo:procurador-geral-da-republica` já existe; complete-o), destituição (art. 128, § 2º), garantias e vedações.
- [ ] `org:cnmp` (art. 130-A): composição e competências
- [ ] Ministério Público dos estados: arquétipo `org:arquetipo-estadual-ministerio-publico` com `cargo:arquetipo-estadual-procurador-geral-de-justica` (art. 128, § 3º: lista tríplice, nomeação pelo governador, mandato)
- [ ] Ministério Público junto aos tribunais de contas (art. 130), como nota ou órgão mínimo
- [ ] Advocacia-Geral da União (`org:agu`, art. 131): chefia (`cargo:advogado-geral-da-uniao`), Procuradoria-Geral da Fazenda Nacional (art. 131, § 3º)
- [ ] Procuradorias dos estados e do DF (art. 132): arquétipo `org:arquetipo-estadual-procuradoria-geral`
- [ ] Advocacia (art. 133) e a OAB, como entidade (`org:oab`) com a natureza jurídica conforme a fonte oficial e a jurisprudência do STF
- [ ] Defensoria Pública: `org:dpu` (art. 134), `cargo:defensor-publico-geral-federal`, arquétipo estadual `org:arquetipo-estadual-defensoria-publica`; autonomia (art. 134, §§ 2º e 3º)
- [ ] Membros do CNJ indicados pelo MP e pela OAB (art. 103-B, X a XII): relações de indicação para `org:cnj` (sugestão da revisão do Judiciário)
- [ ] Relações principais: quem nomeia, quem fiscaliza, quem representa quem judicialmente, quem pode propor ação de controle de constitucionalidade (art. 103, VI e VII)

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
