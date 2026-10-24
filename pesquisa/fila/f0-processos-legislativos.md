---
id: f0-processos-legislativos
escopo: "Fatia 0, lacunas da varredura: processos políticos do Legislativo, CF arts. 14, 49, 52, 53, 55, 59, 84, VII, 86, 89, 188, 224, 231, § 3º; ADCT, arts. 113 e 130"
status: em-andamento
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: null
---

## Entregáveis

- [ ] `proc:crime-de-responsabilidade-do-presidente` (impeachment; arts. 51, I, 52, I, 85 e 86; Lei 1.079/1950), em raias, com o rito do crime comum (STF) como variante.
- [ ] `proc:perda-de-mandato-parlamentar` (art. 55) e sustação de ação penal contra parlamentar (art. 53, §§ 3º a 5º).
- [ ] Plebiscito e referendo (art. 14, I e II; art. 49, XV; Lei 9.709/1998): `obj:plebiscito-e-referendo` e `rel:congresso-convoca-plebiscito-e-referendo`.
- [ ] `proc:decreto-legislativo` e `proc:resolucao` (art. 59, VI e VII), com `remete_a` onde o rito for o da lei ordinária.
- [ ] Competências do art. 49 que faltam (XIV a XVIII: atividades nucleares, mineração e recursos hídricos em terras indígenas, terras públicas acima de 2.500 ha) e do art. 52 (julgamento dos Comandantes; `cargo:chefe-de-missao-diplomatica-permanente` com aprovação do Senado).
- [ ] Líderes da maioria e da minoria (art. 89, IV e V) e membros cidadãos do Conselho da República (art. 89, VII), pendência de f0-executivo.
- [ ] `org:conselho-de-comunicacao-social` (art. 224; Lei 8.389/1991), órgão auxiliar do Congresso.
- [ ] Estimativa de impacto orçamentário no processo legislativo (ADCT, art. 113) e o papel do Senado nas alíquotas de referência do IBS e da CBS (ADCT, art. 130).
- [ ] Verbo para "convoca reunião de colegiado" (hoje `preside`): proponha no relatório se fizer falta.
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
- 2026-10-23 23:15 — iniciada; lendo instruções, modelo, processos existentes e quadro de cobertura
- 2026-10-23 23:25 — gravados norma:lei-8389-1991, org:conselho-de-comunicacao-social
- 2026-10-23 23:30 — gravados cargo:conselheiro-do-conselho-de-comunicacao-social, rel:congresso-elege-conselheiro-do-ccs, rel:ccs-auxilia-congresso (art. 224 coberto)
- 2026-10-23 23:40 — gravados fonte:senado-api-composicao-lideranca, 4 cargos de líder da maioria/minoria (Câmara e Senado), 4 relações integra com org:conselho-da-republica e 4 ocupa (Silvio Costa Filho, Gustavo Gayer, Veneziano Vital do Rêgo, Ciro Nogueira), pelos dados abertos do Senado com designações anteriores a 2026-10-01 ainda vigentes em 2026-10-23
- 2026-10-23 23:47 — gravado cargo:membro-cidadao-do-conselho-da-republica sem ocupantes (nenhum ato oficial encontrado); descartada a relação integra que repetiria o campo orgao (D34). Art. 89 coberto
- 2026-10-23 23:58 — gravados norma:lei-11440-2006, cargo:chefe-de-missao-diplomatica-permanente, rel:presidente-indica-/senado-aprova-indicacao-/presidente-nomeia-chefe-de-missao-diplomatica-permanente, rel:senado-julga-comandante-da-marinha/-do-exercito/-da-aeronautica (art. 52, I e IV cobertos; XV continua lacuna)
- 2026-10-24 00:05 — gravados rel:congresso-autoriza-atividades-nucleares, rel:congresso-autoriza-exploracao-em-terras-indigenas, rel:congresso-autoriza-alienacao-de-terras-publicas (art. 49, XIV, XVI e XVII; art. 188, § 1º; art. 231, § 3º)
- 2026-10-24 00:12 — gravados obj:plebiscito-e-referendo, rel:congresso-convoca-plebiscito-e-referendo (relacao 'autoriza'; 'convoca' não serve), rel:deputados-propoem- e rel:senadores-propoem-plebiscito-e-referendo, rel:eleitorado-nacional-delibera-plebiscito-e-referendo, rel:tse-homologa-plebiscito-e-referendo (art. 14, I e II; art. 49, XV)
- 2026-10-24 00:22 — gravados rel:senado-fixa-aliquotas-de-referencia-ibs/-cbs (relacao 'edita') e rel:tcu-calcula-aliquotas-de-referencia-ibs/-cbs (ADCT, art. 130; LC 214/2025, arts. 18 e 19)
- 2026-10-24 00:35 — gravadas fonte:stf-constituicao-e-o-supremo-art-51, -52, -53 e -55 (ADPF 378, ADI 5.526, AP 2.668 QO, AP 694); a página do STF para o ADCT, art. 113, devolve 404
- 2026-10-24 00:55 — gravado proc:crime-de-responsabilidade-do-presidente (19 etapas; regime 'infracao-penal-comum' com as etapas do STF; rito do Senado pela ADPF 378). Art. 86 coberto
