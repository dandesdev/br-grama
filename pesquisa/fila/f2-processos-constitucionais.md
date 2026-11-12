---
id: f2-processos-constitucionais
escopo: "Fase 2 (D49): leis do controle concentrado, da súmula vinculante, dos remédios constitucionais e do impeachment"
status: coletada
depende_de: [f0-controle-constitucionalidade]
iniciada_em: 2026-11-11
concluida_em: 2026-11-12
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 9.868/1999 (ADI, ADC e ADO) e Lei 9.882/1999 (ADPF): `norma:lei-9882-1999`; a 9.868, procure
- Lei 11.417/2006 (súmula vinculante): `norma:lei-11417-2006`
- Lei 12.016/2009 (mandado de segurança), Lei 13.300/2016 (mandado de injunção), Lei 9.507/1997 (habeas data): crie as que faltarem
- Lei 8.038/1990 (processos nos tribunais superiores: ação penal originária, reclamação)
- Lei 1.079/1950 (crimes de responsabilidade e o processo de impeachment): `norma:lei-1079-1950`

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [x] Etapas que faltam nos processos de controle de constitucionalidade e de súmula vinculante já existentes (Grep em `dados/processos/`), com prazo e quórum da lei.
- [x] Processos novos onde a lei descreve a sequência: mandado de segurança, mandado de injunção, reclamação constitucional, ação penal originária no STF e no STJ.
- [x] Impeachment (Lei 1.079): confira as etapas de `proc:` de impeachment existentes contra a lei (o STF, na ADPF 378, ajustou o rito; a fonte `fonte:stf-adpf-378`, se existir, deve ser usada) e o processo para ministros do STF e o PGR julgados pelo Senado (arts. 39 a 73).

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `proc:adi`, `proc:adpf`, `proc:sumula-vinculante`, `proc:impeachment` (confira os ids), `obj:` das ações e das decisões.
- Em paralelo: `f2-administracao` e `f2-defesa-seguranca`.

## Cobertura

Classificação por artigo vigente (D49); artigos vetados por inteiro ficam fora da conta. Cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-processos-constitucionais/`. "Coberto" quer dizer que o artigo é citado nas fontes de uma entidade ou etapa (instruções, Fase 2, item 8).

### Lei 9.868/1999 (ADI, ADC e ADO)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 12 | coberto | proc:adi (propositura, admissibilidade, medida cautelar, informações, AGU e PGR, relatório; regime rito-abreviado do art. 12) |
| arts. 12-A a 12-H | coberto | proc:ado |
| arts. 13 a 16 | coberto | proc:adc (o rol de legitimados do art. 13 foi superado pela EC 45/2004, CF, art. 103) |
| arts. 18 a 21 | coberto | proc:adc (PGR, relatório, cautelar com prazo de 180 dias) |
| arts. 22 a 28 | coberto | proc:adi, proc:adc e proc:ado (quórum de presença e de votação, efeitos, irrecorribilidade, modulação por dois terços, publicação) |
| art. 29 | fora | alterou o art. 482 do CPC de 1973, revogado |
| art. 30 | fora | superado: alterou a Lei 8.185/1991 (ADI no TJDFT), revogada pela Lei 11.697/2008 (art. 91) |
| art. 31 | fora | vigência |

Art. 17 vetado. Total: 38 artigos vigentes; 35 cobertos e 3 fora: 100%.

### Lei 9.882/1999 (ADPF)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 8º | coberto | proc:adpf (representação ao PGR, propositura, indeferimento, liminar, informações, vista ao MP, quórum de presença) |
| arts. 10 a 13 | coberto | proc:adpf (cumprimento imediato, efeito vinculante, modulação, irrecorribilidade); art. 13 também em proc:reclamacao |
| art. 14 | fora | vigência |

Art. 9º vetado. Total: 13 artigos vigentes; 12 cobertos e 1 fora: 100%.

### Lei 11.417/2006 (súmula vinculante)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | fora | objeto da lei, sem regra própria |
| arts. 2º a 7º | coberto | proc:sumula-vinculante (proposta, legitimados, PGR, quórum de dois terços, modulação, publicação); art. 7º também em proc:reclamacao |
| arts. 8º e 9º | coberto | proc:reclamacao (explicação da súmula no recurso administrativo e dever de adequar decisões futuras, pelos dispositivos que incluem na Lei 9.784) |
| art. 10 | coberto | proc:sumula-vinculante (RISTF subsidiário) |
| art. 11 | fora | vigência |

Total: 11 artigos; 9 cobertos e 2 fora: 100%.

### Lei 12.016/2009 (mandado de segurança)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 23 | coberto | proc:mandado-de-seguranca (impetração em 120 dias, liminar, informações, MP, sentença, suspensão de segurança, recursos, competência originária, mandado coletivo); dois parágrafos declarados inconstitucionais na ADI 4296 (fonte:stf-adi-4296) não entraram nas etapas |
| art. 24 | fora | remete a artigos do CPC de 1973, revogado |
| arts. 25 e 26 | coberto | proc:mandado-de-seguranca (sem embargos infringentes nem honorários; desobediência) |
| art. 27 | fora | transição esgotada (adaptação dos regimentos em 180 dias) |
| arts. 28 e 29 | fora | vigência e revogações |

Total: 29 artigos; 25 cobertos e 4 fora: 100%.

### Lei 13.300/2016 (mandado de injunção)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | fora | objeto da lei, sem regra própria |
| arts. 2º a 14 | coberto | proc:mandado-de-injuncao (impetração, informações, MP, decisão com prazo para a norma, eficácia, revisão, norma superveniente, regime coletivo, aplicação subsidiária) |
| art. 15 | fora | vigência |

Total: 15 artigos; 13 cobertos e 2 fora: 100%.

### Lei 9.507/1997 (habeas data)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 4º | coberto | proc:habeas-data (registro de caráter público e pedido administrativo, no detalhe da primeira etapa; o caput do art. 1º foi vetado e o parágrafo único vale) |
| arts. 7º a 21 | coberto | proc:habeas-data (cabimento, petição com prova da recusa, informações, MP, sentença, apelação, suspensão pelo presidente do tribunal, competência, gratuidade) |
| arts. 22 e 23 | fora | vigência e revogações |

Arts. 5º e 6º vetados. Total: 21 artigos vigentes; 19 cobertos e 2 fora: 100%.

### Lei 8.038/1990 (processos no STF e no STJ)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 12 | coberto | proc:acao-penal-originaria |
| arts. 19 a 22 | coberto | proc:intervencao-federal (etapa solicitacao-ou-requisicao: requisição no STJ); o inciso III do art. 19 está superado, porque a EC 45/2004 levou ao STF a representação do PGR por recusa à execução de lei federal |
| art. 23 | fora | habeas corpus no STJ: remete ao Código de Processo Penal (detalhe de processo) |
| art. 24 | fora | remissões à legislação processual |
| art. 25 | coberto | proc:mandado-de-seguranca (suspensão de segurança pelo Presidente do STJ) |
| arts. 30 a 32 | fora | recurso ordinário em habeas corpus (detalhe de recurso) |
| arts. 33 a 35 | coberto | proc:mandado-de-seguranca (recurso ordinário ao STJ) |
| arts. 36 e 37 | fora | apelação e agravo nas causas com Estado estrangeiro (detalhe de recurso; a competência está na CF) |
| art. 39 | fora | agravo interno (detalhe de recurso) |
| art. 40 | coberto | proc:acao-penal-originaria (revisor no STJ) |
| art. 41 | fora | convocação de substituto para ministro do STJ (detalhe, como em f2-judiciario) |
| art. 41-A | coberto | proc:acao-penal-originaria (maioria absoluta nas Turmas e empate a favor do acusado) |
| art. 41-B | fora | despesas de porte de remessa |
| art. 42 | fora | alterou o CPC de 1973, revogado |
| arts. 43 e 44 | fora | vigência e revogações |

Os capítulos de reclamação, de recurso extraordinário e especial e o art. 38 foram revogados pelo CPC (art. 1.072, IV); a reclamação está em proc:reclamacao, pelos arts. 988 a 993 do CPC. Total: 35 artigos vigentes; 22 cobertos e 13 fora: 100%.

### Lei 1.079/1950 (crimes de responsabilidade)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 13 | fora | crimes e penas (definições e lista dos crimes do Presidente e dos ministros de Estado); o prazo de inabilitação do art. 2º foi superado pela CF |
| arts. 14 a 16 | coberto | proc:crime-de-responsabilidade-do-presidente (denúncia); rel:camara-autoriza-processo-presidente |
| arts. 17 e 18 | fora | escrivão e notificação de testemunhas (detalhe de processo) |
| arts. 19 a 21 | coberto | proc:crime-de-responsabilidade-do-presidente (recebimento, comissão especial, discussão do parecer; recepcionados pela ADPF 378) |
| arts. 22 e 23 | fora | superados: a Câmara delibera uma só vez e não decreta a acusação; parágrafos do art. 23 não recepcionados (ADPF 378) |
| arts. 24 a 35 | parcial | julgamento do Presidente no Senado: a etapa 'julgamento' de proc:crime-de-responsabilidade-do-presidente cita o rito de ministros do STF, e a ADPF 378 fala em estender "o rito relativamente abreviado da Lei 1.079/1950 para julgamento do impeachment pelo Senado"; falta conferir se a etapa deve citar também estes artigos (libelo, sessão presidida pelo Presidente do STF, sentença) |
| arts. 36 e 37 | fora | impedimentos de parlamentares e convocação extraordinária (detalhe de processo) |
| art. 38 | coberto | proc:crime-de-responsabilidade-do-presidente (regimentos subsidiários, com a interpretação conforme da ADPF 378) |
| arts. 39, 39-A, 40, 40-A, 41, 41-A, 42 e 43 | coberto | proc:crime-de-responsabilidade-de-ministro-do-stf-e-pgr (denúncia); 41-A também em proc:acao-penal-originaria |
| arts. 44 a 73 | coberto | proc:crime-de-responsabilidade-de-ministro-do-stf-e-pgr; rel:senado-julga-ministro-do-stf; aviso:lei-1079-adpf-1259-1260 (quóruns, afastamento e absolvição) |
| arts. 74 a 79 | coberto | proc:crime-de-responsabilidade-do-governador; cargo:arquetipo-estadual-governador; org:arquetipo-estadual-secretarias |
| arts. 79-A e 79-B | coberto | rel:senado-julga-presidente-do-cgibs |
| art. 80 | coberto | proc:crime-de-responsabilidade-de-ministro-do-stf-e-pgr; rel:senado-julga-presidente-do-cgibs (a primeira parte, Câmara como tribunal de pronúncia, não foi recepcionada para o Presidente, ADPF 378) |
| art. 81 | fora | não recepcionado (ADPF 378, fonte:stf-constituicao-e-o-supremo-art-51) |
| art. 82 | coberto | proc:crime-de-responsabilidade-de-ministro-do-stf-e-pgr (prazo de 120 dias, no detalhe da etapa 'afastamento') |

Total: 87 artigos; 55 cobertos, 12 parciais e 20 fora: 86,2%.

## Diário

- 2026-11-11 — iniciada; lidos CLAUDE.md, decisões, modelo de dados, protocolo e instruções (fase 2)
- 2026-11-11 23:20 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-processos-constitucionais/ (Invoke-WebRequest com TLS 1.2; o curl teve a conexão resetada): l9868.htm (última alteração: Lei 12.063/2009), l9882.htm (sem alteração; "Vide" ADI 2.231 e ADPF 774), l11417.htm (sem alteração), l12016.htm (Lei 13.676/2018, art. 16; "Vide" ADI 4296), l13300.htm (sem alteração), l9507.htm (sem alteração), l8038.htm (Lei 14.836/2024, art. 41-A), l1079.htm (LC 227/2026; "Vide" ADPFs 1259 e 1260). Nada entre 2026-10-01 e hoje
- 2026-11-11 23:25 — processos existentes: não há proc: de ADI, ADC, ADO, ADPF nem súmula vinculante (Grep em dados/processos/); serão criados. Impeachment: proc:crime-de-responsabilidade-do-presidente. Não existia fonte:stf-adpf-378; páginas da ADPF 378 baixadas do portal do STF (incidente 4899156) em pesquisa/brutos/stf/2026-11-11-f2-processos-constitucionais/
- 2026-11-11 23:30 — gravados norma:lei-8038-1990 e fonte:stf-adpf-378
- 2026-11-11 23:45 — gravado proc:adi (Lei 9.868, arts. 2º a 12 e 22 a 28; cautelar como etapa opcional; regime rito-abreviado do art. 12)
- 2026-11-11 23:55 — gravados proc:adc (Lei 9.868, arts. 13 a 28; legitimados do art. 13 superados pela EC 45/2004) e proc:ado (arts. 12-A a 12-H; vigência pela Lei 12.063/2009, baixada em l12063.htm)
- 2026-11-12 00:05 — gravado proc:adpf (Lei 9.882, arts. 1º a 13; representação ao PGR como etapa facultativa; quórum de presença de 2/3, sem quórum de votação na lei)
- 2026-11-12 00:15 — gravado proc:sumula-vinculante (Lei 11.417, arts. 2º a 7º e 10; RISTF, arts. 354-A a 354-G, edição até a ER 58/2022; regime repercussao-geral do art. 354-E)
- 2026-11-12 00:25 — gravado proc:reclamacao (CPC, arts. 988 a 993; Lei 11.417, arts. 7º a 9º; Lei 9.882, art. 13; os arts. 13 a 18 da Lei 8.038 foram revogados pelo CPC, art. 1.072, IV)
- 2026-11-12 00:35 — gravado fonte:stf-adi-4296 (decisão de 9/6/2021: inconstitucionais o art. 7º, § 2º, e o art. 22, § 2º, da Lei 12.016; abas salvas em pesquisa/brutos/stf/2026-11-11-f2-processos-constitucionais/)
- 2026-11-12 00:50 — gravado proc:mandado-de-seguranca (Lei 12.016, arts. 1º a 26; regimes competencia-originaria e coletivo; suspensão de segurança com a Lei 8.038, art. 25; recurso remete a proc:caminho-de-um-processo)
- 2026-11-12 01:00 — gravado proc:mandado-de-injuncao (Lei 13.300, arts. 2º a 14; regime coletivo; etapa de decurso do prazo fixado para a norma)
- 2026-11-12 01:10 — gravado proc:habeas-data (Lei 9.507, arts. 1º a 4º e 7º a 21; fase administrativa no detalhe da primeira etapa; regime competencia-originaria)
- 2026-11-12 01:25 — gravado proc:acao-penal-originaria (Lei 8.038, arts. 1º a 12, 40 e 41-A; LC 75, arts. 46 a 48 para o PGR e subprocuradores; Corte Especial do STJ pelo RISTJ, art. 11, I; no STF o ator é org:stf por causa da ER 59/2023 não conferida). Em proc:reclamacao e proc:mandado-de-injuncao, etapa do MP ganhou cargo:subprocurador-geral-da-republica (LC 75, art. 47, § 1º)
- 2026-11-12 01:45 — gravado proc:crime-de-responsabilidade-de-ministro-do-stf-e-pgr (Lei 1.079, arts. 39 a 73 e 80; quóruns da lei com a ressalva da liminar das ADPFs 1259 e 1260; regime presidente-do-stf-acusado). Editado aviso:lei-1079-adpf-1259-1260: afeta + o novo processo
- 2026-11-12 01:55 — gravado rel:senado-julga-presidente-do-cgibs (Lei 1.079, arts. 79-A, 79-B e 80, incluídos pela LC 227/2026)
- 2026-11-12 02:10 — conferido proc:crime-de-responsabilidade-do-presidente contra a Lei 1.079 e a ADPF 378: etapas coerentes; acrescentadas às fontes fonte:stf-adpf-378 e Lei 1.079, arts. 21 e 38 (verificacao volta a coletado). Na etapa 'afastamento' do processo de ministros do STF e PGR entrou o prazo de 120 dias do art. 82; em proc:acao-penal-originaria, o art. 41-A da Lei 1.079 (crimes do art. 10 por presidentes de tribunais e chefias do MP e da advocacia pública seguem a Lei 8.038)
- 2026-11-12 02:15 — gravado proc:crime-de-responsabilidade-do-governador (Lei 1.079, arts. 74 a 79; tribunal de cinco deputados e cinco desembargadores, sem criar órgão; jurisprudência do STF sobre a competência da União não lida)
- 2026-11-12 02:25 — editado proc:intervencao-federal (etapa solicitacao-ou-requisicao: + Lei 8.038, art. 19, I e II, e arts. 20 a 22; o art. 19, III, representação do PGR ao STJ por lei federal, ficou superado pela EC 45/2004, que passou o caso ao STF no art. 36, III, da CF)
- 2026-11-12 02:40 — quadro de cobertura gravado e conferido com `npm run -s cobertura:leis`: Lei 9.868 (38 artigos, 100%), Lei 9.882 (13, 100%), Lei 11.417 (11, 100%), Lei 12.016 (29, 100%), Lei 13.300 (15, 100%), Lei 9.507 (21, 100%), Lei 8.038 (35, 100%), Lei 1.079 (87, 86,2%; arts. 24 a 35 parciais). Para restringir o "coberto" ao que de fato está nas etapas, as fontes gerais de proc:crime-de-responsabilidade-do-presidente passaram de "arts. 14 a 24" para "arts. 14 a 16, 19, 20" (arts. 22 a 24 superados pela ADPF 378) e as de proc:mandado-de-seguranca de "arts. 1º a 26" para "arts. 1º a 23, 25 e 26"
- 2026-11-12 02:45 — propostas ao modelo (sem editar esquema/): (1) quórum de presença separado do de votação: Lei 9.868, art. 22 (oito ministros), e Lei 9.882, art. 8º (dois terços presentes), hoje só na nota, e a ADPF usa `regra: "outro"`; (2) um cargo agregado de relator, ou um modo de dizer "relator" na etapa sem usar o cargo de ministro; (3) um ator genérico para "a parte" ou "qualquer pessoa" (usamos org:eleitorado-nacional para o cidadão e, quando não cabia, os tribunais que recebem o pedido); (4) `produz` aponta para o objeto da ação (obj:adi-e-adc etc.), como em proc:acao-de-investigacao-judicial-eleitoral, embora o processo produza uma decisão
- 2026-11-12 02:50 — pontos para o revisor: (a) Lei 1.079, arts. 24 a 35: conferir se a etapa 'julgamento' do processo do Presidente deve citá-los (ficaram parciais); (b) RISTF consultado até a ER 58/2022: conferir se a ER 59/2023 mudou os arts. 354-A a 354-G (súmula vinculante) e quem julga a ação penal originária no STF (ator ficou org:stf); (c) rel:senado-julga-presidente-do-cgibs segue o texto dos arts. 79-B e 80; a CF manda os crimes não conexos de ministros de Estado ao STF, e a LC 227/2026 não diz se o Presidente do CGIBS segue essa divisão; (d) proc:crime-de-responsabilidade-do-governador segue a Lei 1.079 sem a jurisprudência do STF sobre a competência da União (não lida); (e) vigência de proc:reclamacao ficou null (data de início do CPC não conferida); a de proc:sumula-vinculante (2007-03-20) foi calculada por nós; (f) ADI 4296: o Planalto só anota "Vide"; a decisão de 9/6/2021 está em fonte:stf-adi-4296
- 2026-11-12 02:55 — concluída; status coletada. Criados: norma:lei-8038-1990; fonte:stf-adpf-378, fonte:stf-adi-4296; proc:adi, proc:adc, proc:ado, proc:adpf, proc:sumula-vinculante, proc:reclamacao, proc:mandado-de-seguranca, proc:mandado-de-injuncao, proc:habeas-data, proc:acao-penal-originaria, proc:crime-de-responsabilidade-de-ministro-do-stf-e-pgr, proc:crime-de-responsabilidade-do-governador; rel:senado-julga-presidente-do-cgibs. Editados: proc:crime-de-responsabilidade-do-presidente, proc:intervencao-federal, aviso:lei-1079-adpf-1259-1260. Nenhum aviso novo
