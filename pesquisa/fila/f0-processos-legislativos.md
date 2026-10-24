---
id: f0-processos-legislativos
escopo: "Fatia 0, lacunas da varredura: processos políticos do Legislativo, CF arts. 14, 49, 52, 53, 55, 59, 84, VII, 86, 89, 188, 224, 231, § 3º; ADCT, arts. 113 e 130"
status: coletada
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: 2026-10-24
---

## Entregáveis

- [x] `proc:crime-de-responsabilidade-do-presidente` (impeachment; arts. 51, I, 52, I, 85 e 86; Lei 1.079/1950), em raias, com o rito do crime comum (STF) como variante.
- [x] `proc:perda-de-mandato-parlamentar` (art. 55) e sustação de ação penal contra parlamentar (art. 53, §§ 3º a 5º).
- [x] Plebiscito e referendo (art. 14, I e II; art. 49, XV; Lei 9.709/1998): `obj:plebiscito-e-referendo` e `rel:congresso-convoca-plebiscito-e-referendo`.
- [x] `proc:decreto-legislativo` e `proc:resolucao` (art. 59, VI e VII), com `remete_a` onde o rito for o da lei ordinária.
- [x] Competências do art. 49 que faltam (XIV a XVIII: atividades nucleares, mineração e recursos hídricos em terras indígenas, terras públicas acima de 2.500 ha) e do art. 52 (julgamento dos Comandantes; `cargo:chefe-de-missao-diplomatica-permanente` com aprovação do Senado).
- [x] Líderes da maioria e da minoria (art. 89, IV e V) e membros cidadãos do Conselho da República (art. 89, VII), pendência de f0-executivo.
- [x] `org:conselho-de-comunicacao-social` (art. 224; Lei 8.389/1991), órgão auxiliar do Congresso.
- [x] Estimativa de impacto orçamentário no processo legislativo (ADCT, art. 113) e o papel do Senado nas alíquotas de referência do IBS e da CBS (ADCT, art. 130).
- [x] Verbo para "convoca reunião de colegiado" (hoje `preside`): proponha no relatório se fizer falta.
- [x] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

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
- 2026-10-24 16:29 — retomada (cota anterior acabou); gravado proc:decreto-legislativo (9 etapas, regimes 'radiodifusao' e 'tratado-de-direitos-humanos'; remete_a proc:lei-ordinaria nas etapas das Casas). Art. 59, VI coberto. RICD, RISF e RCCN lidos nas cópias locais de pesquisa/brutos
- 2026-10-24 16:33 — gravados norma:senado-resolucao-20-1993 (Código de Ética do Senado, compilação multivigente do portal do Senado; Res. 21/2016 não conferida), org:conselho-de-etica-da-camara (RICD, art. 21-E, e Código de Ética da Câmara, que integra o RICD) e org:conselho-de-etica-do-senado
- 2026-10-24 16:36 — gravados proc:perda-de-mandato-parlamentar (10 etapas; Câmara pelo Código de Ética que integra o RICD, Senado pela Res. 20/1993; produz obj:resolucao) e aviso:perda-de-mandato-senado-risf-e-codigo-de-etica (RISF arts. 32-35 x Res. 20/1993). Art. 55 coberto. A seguir: sustação de ação penal (art. 53, §§ 3º a 5º) e proc:resolucao
- 2026-10-24 16:36 — gravados rel:camara-susta-acao-penal-contra-deputado e rel:senado-susta-acao-penal-contra-senador (relacao 'susta' para obj:acao-penal-publica; art. 53, §§ 3º a 5º; EC 35/2001). Art. 53, § 2º (prisão em flagrante) e § 8º (suspensão de imunidades no sítio) não modelados: proposta no relatório
- 2026-10-24 16:38 — gravado proc:resolucao (9 etapas; Câmara, Senado e Congresso; remete_a proc:lei-ordinaria e proc:lei-delegada). Art. 59, VII coberto
- 2026-10-24 16:39 — cobertura por artigo: art. 14, I e II coberto (plebiscito e referendo; o III já estava em proc:lei-ordinaria); art. 49, XIV a XVII coberto, XVIII já existia (proc:calamidade-publica-nacional); art. 52, I e IV coberto, XV (avaliação do Sistema Tributário) continua lacuna: falta objeto e verbo adequados, vai como proposta; art. 53, §§ 3º a 5º coberto, §§ 2º (Casa resolve sobre a prisão em flagrante) e 8º (suspensão de imunidades no estado de sítio) não modelados, proposta; art. 55 coberto; art. 59, VI e VII coberto; art. 84, VII (manter relações com Estados estrangeiros e acreditar diplomatas) não coberto: falta verbo ('acredita'), proposta; art. 86 coberto; art. 89 coberto; art. 188, § 1º, e art. 231, § 3º, coberto; art. 224 coberto; ADCT, art. 130 coberto; ADCT, art. 113 só como proposta: é requisito de toda proposição que crie despesa obrigatória ou renúncia de receita e caberia na etapa 'iniciativa' de proc:lei-ordinaria e proc:lei-complementar (f0-legislativo), que não editei
- 2026-10-24 16:39 — fora do escopo, para o coordenador: proc:calamidade-publica-nacional (nota da etapa 'decretacao') pode agora ligar remete_a a proc:decreto-legislativo. Validação sem erros nos meus arquivos. Tarefa coletada
