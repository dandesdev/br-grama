---
id: f2-administracao
escopo: "Fase 2 (D49): regime dos servidores, processo administrativo, acesso à informação, estatais e conflito de interesses"
status: coletada
depende_de: [f0-executivo, f0-administracao-indireta]
iniciada_em: 2026-11-11
concluida_em: 2026-11-11
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 8.112/1990 (regime jurídico dos servidores civis da União): crie se não existir
- Lei 9.784/1999 (processo administrativo federal)
- Lei 12.527/2011 (Lei de Acesso à Informação)
- Lei 13.303/2016 (estatuto das empresas estatais)
- Lei 12.813/2013 (conflito de interesses) e a Comissão de Ética Pública (Decreto de 26/5/1999 e Decreto 6.029/2007, só no que a lei remete)

Direitos, deveres e penalidades dos servidores são `fora`; interessam formas de provimento e vacância, quem nomeia, quem julga o processo disciplinar, órgãos e colegiados criados, e procedimentos com etapas.

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [x] Lei 8.112: formas de provimento (art. 8º) e de vacância (art. 33): compare com o vocabulário `provimento` em `esquema/vocabularios/gerais.json`; não edite, proponha termos no relatório. Processo administrativo disciplinar (arts. 143 a 182) como `proc:`, com quem instaura, a comissão e quem julga (art. 141).
- [x] Lei 9.784: processo administrativo como `proc:` (instauração, instrução, decisão, recurso em até três instâncias), com prazos.
- [x] LAI: classificação de informação (quem classifica em cada grau, art. 27), Comissão Mista de Reavaliação de Informações, recurso à CGU; pedido de acesso como `proc:` com prazos (arts. 10 a 20). Sigilo é tema de aviso (D08, D37) só quando houver lacuna real de fonte.
- [x] Lei 13.303: órgãos obrigatórios das estatais (conselho de administração, diretoria, conselho fiscal, comitê de auditoria) como conceito no `detalhes` dos tipos ou das estatais existentes; requisitos de dirigentes.
- [x] Lei 12.813 e Comissão de Ética Pública: o órgão, quem a integra e quem nomeia.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:cgu`, `org:casa-civil`, as estatais (`org:caixa-economica-federal`, `org:banco-do-brasil`, `org:petrobras`, `org:correios`, `org:bndes`).
- Em paralelo: `f2-processos-constitucionais` e `f2-defesa-seguranca`.

## Cobertura

Classes conforme a D49. A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar. Artigos vetados ou revogados por inteiro não entram na conta (nota abaixo de cada quadro); artigo com caput vetado e parágrafo em vigor conta como vigente. Cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-administracao/`.

### Lei 8.112/1990 (regime jurídico dos servidores civis da União)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 3º | coberto | cargo:servidor-publico-civil-federal (alcance, conceitos de servidor e de cargo); proc:processo-administrativo-disciplinar-federal |
| art. 4º | fora | vedação de serviço gratuito (regra individual) |
| arts. 5º a 15 | coberto | cargo:servidor-publico-civil-federal (requisitos, provimento por ato de cada Poder, formas de provimento, nomeação, concurso, posse e exercício) |
| art. 16 | fora | registro no assentamento individual (detalhe) |
| art. 17 | coberto | cargo:servidor-publico-civil-federal (promoção, em provimento_casos) |
| arts. 18 e 19 | fora | prazo de deslocamento e jornada (direitos e deveres individuais) |
| arts. 20 a 22 | coberto | cargo:servidor-publico-civil-federal (estágio probatório, estabilidade, perda do cargo) |
| arts. 24, 25 e 27 a 32 | coberto | cargo:servidor-publico-civil-federal (readaptação, reversão, reintegração, recondução, disponibilidade e aproveitamento pelo órgão central do Sipec) |
| arts. 33 a 35 | coberto | cargo:servidor-publico-civil-federal (vacância e exoneração) |
| art. 36 | fora | remoção (deslocamento do servidor, sem órgão nem etapa) |
| art. 37 | coberto | revisto em f2-fechamento: cargo:servidor-publico-civil-federal (redistribuição com apreciação do órgão central do Sipec, no detalhes) |
| art. 38 | coberto | cargo:servidor-publico-civil-federal (substitutos de chefes e de cargos de natureza especial) |
| art. 39 | fora | extensão do art. 38 às assessorias (detalhe) |
| arts. 40 a 42, 44 a 60, 60-A, 60-B, 60-D, 60-E, 61, 62, 62-A, 63 a 66, 68 a 76, 76-A, 77 a 87, 91 a 96, 96-A, 97 a 115 | fora | vencimento, vantagens, férias, licenças, afastamentos, concessões, tempo de serviço e direito de petição (direitos e deveres individuais) |
| arts. 116 a 126 e 126-A | fora | deveres, proibições, acumulação e responsabilidades (deveres individuais) |
| art. 127 | coberto | proc:processo-administrativo-disciplinar-federal (rol das penas) |
| arts. 128 a 132 | fora | critérios e hipóteses de advertência, suspensão e demissão (penas) |
| art. 133 | coberto | proc:processo-administrativo-disciplinar-federal, regime rito-sumario |
| arts. 134 a 139 | fora | cassação, destituição, efeitos das penas, abandono e inassiduidade (penas) |
| art. 140 | coberto | proc:processo-administrativo-disciplinar-federal, regime rito-sumario |
| art. 141 | coberto | rel:presidente-exerce-poder-disciplinar-sobre-servidor-publico-civil-federal, rel:ministro-de-estado-exerce-poder-disciplinar-sobre-servidor-publico-civil-federal, etapa julgamento do processo |
| art. 142 | fora | prescrição da ação disciplinar (detalhe de processo) |
| arts. 143 a 172 | coberto | proc:processo-administrativo-disciplinar-federal (apuração, sindicância, afastamento preventivo, comissão, inquérito, julgamento) |
| art. 173 | fora | transporte e diárias de quem depõe (direito individual) |
| arts. 174 a 182 | coberto | proc:processo-administrativo-disciplinar-federal (revisão: etapas punicao, revisao-pedido, revisao-comissao, revisao-julgamento, pena-anulada e pena-mantida, criadas em f2-fechamento) |
| arts. 183 a 191, 194 a 206, 206-A, 207 a 215 e 217 a 230 | fora | seguridade social do servidor: aposentadoria, licenças, pensão e auxílios (direitos individuais) |
| arts. 236 a 242 | fora | data comemorativa, incentivos, contagem de prazos, liberdade de crença, direitos sindicais e definições (direitos e detalhes) |
| arts. 243 a 245 e 247 a 250 | fora | enquadramento dos servidores em 1990, transformação de vantagens e regras provisórias (transição esgotada) |
| art. 252 | coberto | norma:lei-8112-1990 (vigência) |
| art. 253 | fora | cláusula revogatória |

Revogados por inteiro (fora da conta): arts. 23, 26, 43, 60-C, 67, 88, 89, 192, 193, 216, 231, 232, 233, 234, 235 e 251. Vetados: arts. 90 e 246. Conta: 245 artigos vigentes; coberto 74, fora 171, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%. Conta revista em f2-fechamento (2026-11-14): art. 37 passa a coberto; coberto 75, fora 170; cobertura = 100,0%.

### Lei 9.784/1999 (processo administrativo federal)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | proc:processo-administrativo-federal (alcance) |
| art. 2º | fora | princípios e critérios gerais (sem órgão, cargo nem etapa) |
| arts. 3º e 4º | fora | direitos e deveres do administrado |
| arts. 5º a 8º | coberto | proc:processo-administrativo-federal, etapa inicio |
| arts. 9º e 10 | fora | legitimidade e capacidade dos interessados (direitos individuais) |
| arts. 11 a 16 | fora | delegação, avocação e divulgação de sedes (detalhe de competência, sem etapa) |
| art. 17 | coberto | proc:processo-administrativo-federal, etapa inicio |
| arts. 18 a 21 | fora | impedimento e suspeição (deveres individuais) |
| arts. 22 e 23 | fora | forma e horário dos atos (detalhe de processo) |
| art. 24 | coberto | proc:processo-administrativo-federal (prazo geral de cinco dias) |
| art. 25 | fora | local dos atos (detalhe) |
| arts. 26 a 47 | coberto | proc:processo-administrativo-federal, etapa instrucao |
| arts. 48 a 50 | coberto | proc:processo-administrativo-federal, etapa decisao |
| arts. 49-A, 49-B, 49-D, 49-E, 49-F e 49-G | coberto | proc:processo-administrativo-federal, regime decisao-coordenada |
| arts. 51 e 52 | coberto | proc:processo-administrativo-federal, etapa extincao |
| arts. 53 a 55 | fora | anulação, revogação, convalidação e decadência do ato (regras de validade, sem etapa) |
| arts. 56 a 64, 64-A e 64-B | coberto | proc:processo-administrativo-federal, etapas reconsideracao e recurso |
| art. 65 | coberto | proc:processo-administrativo-federal, etapa fim (revisão) |
| arts. 66 e 67 | coberto | proc:processo-administrativo-federal (contagem de prazos) |
| art. 68 | fora | natureza das sanções (detalhe) |
| art. 69 | coberto | proc:processo-administrativo-federal (aplicação subsidiária) |
| art. 69-A | fora | prioridade de tramitação (direito individual) |
| art. 70 | coberto | norma:lei-9784-1999 (vigência) |

Vetado (fora da conta): art. 49-C. Conta: 79 artigos vigentes; coberto 56, fora 23, parcial 0, lacuna 0; cobertura = 100,0%.

### Lei 12.527/2011 (Lei de Acesso à Informação)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | norma:lei-12527-2011 (alcance) |
| art. 2º | fora | aplicação a entidades privadas que recebem recursos públicos (alcance, sem órgão nem etapa) |
| arts. 3º a 6º | fora | diretrizes, definições e deveres gerais do Estado |
| art. 7º | coberto | proc:pedido-de-acesso-a-informacao, etapa fim-acesso (acesso parcial) |
| arts. 8º, 8º-A e 8º-B | fora | transparência ativa: o que órgãos, Sistema S e conselhos profissionais devem divulgar (deveres de divulgação, sem etapa) |
| art. 9º | coberto | org:servicos-de-informacao-ao-cidadao |
| arts. 10 a 20 | coberto | proc:pedido-de-acesso-a-informacao; rel:cgu-julga-recursos-contra-poder-executivo-federal-acesso-a-informacao; rel:comissao-mista-de-reavaliacao-de-informacoes-julga-recursos-contra-cgu; rel:ministro-de-estado-julga-recursos-contra-poder-executivo-federal-desclassificacao |
| arts. 21 e 22 | fora | limites ao sigilo e ressalva de outros sigilos legais (regras gerais) |
| arts. 23 e 24 | coberto | obj:informacao-classificada (hipóteses e graus de sigilo) |
| arts. 25 e 26 | fora | dever de proteger a informação sigilosa (deveres) |
| arts. 27 a 30 | coberto | obj:informacao-classificada (quem classifica, decisão, reavaliação, rol anual); rel:ministro-de-estado-homologa-informacao-classificada; relações `classifica` das autoridades do art. 27, I (Presidente, Vice, Ministros, Comandantes, chefes de missão), criadas em f2-fechamento |
| art. 31 | fora | informações pessoais (direitos individuais) |
| arts. 32 a 34 | fora | condutas ilícitas e sanções |
| art. 35 | coberto | org:comissao-mista-de-reavaliacao-de-informacoes (o caput foi vetado; os §§ 1º a 5º instituem a Comissão) |
| art. 36 | fora | sigilo de tratados (remissão) |
| art. 37 | coberto | org:nucleo-de-seguranca-e-credenciamento |
| art. 38 | fora | remissão à lei do habeas data |
| art. 39 | coberto | org:comissao-mista-de-reavaliacao-de-informacoes (§ 2º: revisão da reavaliação) |
| art. 40 | coberto | cargo:autoridade-de-monitoramento-da-lai |
| art. 41 | coberto | org:cgu (designada pelo Decreto 7.724/2012, art. 68) |
| art. 42 | fora | prazo para regulamentar (transição esgotada) |
| arts. 43 e 44 | fora | alterações na Lei 8.112 (deveres do servidor) |
| art. 45 | coberto | proc:pedido-de-acesso-a-informacao (regras próprias dos estados e municípios) |
| art. 46 | fora | cláusula revogatória |
| art. 47 | coberto | norma:lei-12527-2011 (vigência) |

Os arts. 19 (caput e § 1º vetados, § 2º vigente) e 35 (caput vetado, §§ vigentes) contam como vigentes. Conta: 49 artigos vigentes; coberto 27, fora 22, parcial 0, lacuna 0; cobertura = 100,0%.

### Lei 13.303/2016 (estatuto das empresas estatais)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 4º | coberto | org:empresas-estatais-federais; estatais existentes e relações integra |
| art. 5º | fora | forma de sociedade anônima e remissão à Lei 6.404 (regra societária) |
| art. 6º | coberto | org:empresas-estatais-federais (estrutura_continua: estatuto de cada estatal) |
| arts. 7º e 8º | fora | demonstrações financeiras e requisitos de transparência (deveres de divulgação) |
| arts. 9º e 10 | coberto | org:empresas-estatais-federais (auditoria interna, conformidade, comitê de elegibilidade) |
| arts. 11 e 12 | fora | vedações de emissão, divulgação de remuneração e arbitragem (regras societárias) |
| arts. 13 e 14 | coberto | org:empresas-estatais-federais; cargo:administrador-de-empresa-estatal-federal; cargo:conselheiro-fiscal-de-empresa-estatal-federal |
| art. 15 | fora | responsabilidade do acionista controlador (responsabilidade civil) |
| arts. 16 a 19 e 19-A | coberto | cargo:administrador-de-empresa-estatal-federal (administradores, requisitos, representantes dos empregados e minoritários); org:empresas-estatais-federais (conselho de administração, cota de mulheres) |
| art. 20 | fora | limite de participação remunerada em conselhos (regra individual) |
| arts. 22 a 26 | coberto | org:empresas-estatais-federais (membros independentes, diretoria, comitê de auditoria, conselho fiscal); cargos de administrador e de conselheiro fiscal |
| art. 27 | fora | função social (diretriz, sem órgão nem etapa) |
| arts. 28 a 30 | coberto | proc:licitacao-de-empresa-estatal (exigência de licitação, dispensa e inexigibilidade) |
| arts. 31 a 33 | fora | finalidades e diretrizes da licitação (regras gerais) |
| art. 34 | coberto | proc:licitacao-de-empresa-estatal (orçamento sigiloso) |
| arts. 35 a 38 | fora | sigilo das propostas, pré-qualificação, cadastro de sanções e impedimentos (detalhe de contratação) |
| arts. 39 e 40 | coberto | proc:licitacao-de-empresa-estatal (portal e regulamento interno) |
| arts. 41 a 50 | fora | crimes, definições, regimes de obra, aquisição e alienação de bens (crimes e detalhe de contratação) |
| arts. 51 a 62 | coberto | proc:licitacao-de-empresa-estatal (fases, julgamento, negociação, habilitação, recurso, homologação, revogação); a remissão do art. 55, III, à Lei 8.666 (revogada) foi conferida em f2-fechamento na Lei 14.133, arts. 60, § 1º, 189 e 193 (etapa julgamento) |
| arts. 63 a 84 | fora | procedimentos auxiliares, contratos e sanções contratuais (detalhe de contratação) |
| art. 85 | coberto | rel:tcu-fiscaliza-empresas-estatais-federais |
| art. 86 | fora | bancos de dados e atas para os órgãos de controle (dever de informação) |
| art. 87 | coberto | rel:tcu-fiscaliza-empresas-estatais-federais |
| art. 88 | fora | divulgação mensal de contratos e orçamento (dever de divulgação) |
| art. 89 | coberto | org:empresas-estatais-federais (limites da supervisão ministerial) |
| art. 90 | coberto | rel:tcu-fiscaliza-empresas-estatais-federais (controle sem interferir na gestão) |
| art. 91 | fora | adaptação em 24 meses e estratégia inicial (transição esgotada) |
| art. 92 | coberto | revisto em f2-fechamento (D53): o parágrafo único veda transferência voluntária da União ao ente que não informa suas estatais ao Registro de Empresas; está em obj:recursos-federais-repassados-por-convenio, com as demais vedações da LRF. O caput (cadastro público) é dever de informação |
| arts. 93 a 96 | fora | limite de publicidade, sanções da Lei Anticorrupção e revogações |
| art. 97 | coberto | norma:lei-13303-2016 (vigência) |

Vetado (fora da conta): art. 21. Conta: 97 artigos vigentes; coberto 42, fora 55, parcial 0, lacuna 0; cobertura = 100,0%. Conta revista em f2-fechamento (2026-11-14): art. 92 passa a coberto; coberto 43, fora 54; cobertura = 100,0%.

### Lei 12.813/2013 (conflito de interesses)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º e 2º | coberto | norma:lei-12813-2013; rel:comissao-de-etica-publica-fiscaliza-ministro-de-estado (agentes alcançados) |
| art. 3º | fora | definições |
| art. 4º | coberto | org:comissao-de-etica-publica (consulta à CEP ou à CGU) |
| art. 5º | fora | situações de conflito durante o cargo (deveres individuais) |
| art. 6º | coberto | org:comissao-de-etica-publica (quarentena de seis meses e sua dispensa) |
| arts. 8º e 9º | coberto | org:comissao-de-etica-publica, org:cgu, rel:comissao-de-etica-publica-fiscaliza-ministro-de-estado, rel:cgu-fiscaliza-conflito-de-interesses-agentes-do-executivo |
| art. 10 | fora | extensão de deveres a todos os agentes (deveres individuais) |
| art. 11 | coberto | org:comissao-de-etica-publica (agenda pública fiscalizada pela CEP) |
| arts. 12 e 13 | fora | improbidade e pena de demissão (penas) |

Vetados (fora da conta): arts. 7º, 14 e 15. Conta: 12 artigos vigentes; coberto 7, fora 5, parcial 0, lacuna 0; cobertura = 100,0%. Os decretos da Comissão de Ética Pública (Decreto de 26/5/1999 e Decreto 6.029/2007), a Lei 6.404/1976 e o Decreto 7.724/2012 foram usados só no que as leis remetem e ficam sem quadro.

## Diário

- 2026-11-11 — iniciada; lidas as instruções, D08, D11, D14, D36, D37, D49 a D51, modelo de dados e protocolo
- 2026-11-11 23:22 — gravado norma:lei-8112-1990
- 2026-11-11 23:22 — gravado norma:lei-9784-1999
- 2026-11-11 23:22 — gravado norma:lei-12527-2011
- 2026-11-11 23:22 — gravado norma:lei-12813-2013
- 2026-11-11 23:22 — gravado norma:decreto-26-05-1999-comissao-de-etica-publica
- 2026-11-11 23:22 — gravado norma:decreto-6029-2007
- 2026-11-11 23:22 — gravado norma:decreto-7724-2012
- 2026-11-11 23:23 — gravado org:comissao-de-etica-publica
- 2026-11-11 23:23 — gravado cargo:membro-da-comissao-de-etica-publica
- 2026-11-11 23:23 — gravado rel:presidente-nomeia-membro-da-comissao-de-etica-publica
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-assessora-presidente
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-assessora-ministro-de-estado
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-fiscaliza-ministro-de-estado
- 2026-11-11 23:23 — gravado org:sistema-de-gestao-da-etica-do-poder-executivo-federal
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-coordena-sistema-de-gestao-da-etica
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-integra-sistema-de-gestao-da-etica
- 2026-11-11 23:23 — gravado rel:cgu-fiscaliza-conflito-de-interesses-agentes-do-executivo
- 2026-11-11 23:26 — gravado org:comissao-mista-de-reavaliacao-de-informacoes
- 2026-11-11 23:26 — gravado rel:ministro-de-estado-preside-comissao-mista-de-reavaliacao-de-informacoes
- 2026-11-11 23:26 — gravado rel:ministro-de-estado-integra-comissao-mista-de-reavaliacao-de-informacoes
- 2026-11-11 23:26 — gravado rel:advogado-geral-da-uniao-integra-comissao-mista-de-reavaliacao-de-informacoes
- 2026-11-11 23:26 — gravado rel:cgu-julga-recursos-contra-poder-executivo-federal-acesso-a-informacao
- 2026-11-11 23:26 — gravado rel:comissao-mista-de-reavaliacao-de-informacoes-julga-recursos-contra-cgu
- 2026-11-11 23:26 — gravado rel:comissao-mista-de-reavaliacao-de-informacoes-julga-recursos-contra-ministro-de-estado
- 2026-11-11 23:26 — gravado rel:ministro-de-estado-julga-recursos-contra-poder-executivo-federal-desclassificacao
- 2026-11-11 23:26 — gravado obj:informacao-classificada
- 2026-11-11 23:26 — gravado rel:ministro-de-estado-homologa-informacao-classificada
- 2026-11-11 23:26 — gravado org:nucleo-de-seguranca-e-credenciamento
- 2026-11-11 23:26 — gravado org:servicos-de-informacao-ao-cidadao
- 2026-11-11 23:26 — gravado cargo:autoridade-de-monitoramento-da-lai
- 2026-11-11 23:26 — gravado proc:pedido-de-acesso-a-informacao
- 2026-11-11 23:27 — gravado proc:processo-administrativo-federal
- 2026-11-11 23:30 — gravado norma:lei-6404-1976
- 2026-11-11 23:30 — gravado org:empresas-estatais-federais
- 2026-11-11 23:30 — gravado cargo:administrador-de-empresa-estatal-federal
- 2026-11-11 23:30 — gravado cargo:conselheiro-fiscal-de-empresa-estatal-federal
- 2026-11-11 23:30 — gravado rel:caixa-economica-federal-integra-empresas-estatais-federais
- 2026-11-11 23:30 — gravado rel:correios-integra-empresas-estatais-federais
- 2026-11-11 23:30 — gravado rel:bndes-integra-empresas-estatais-federais
- 2026-11-11 23:30 — gravado rel:banco-do-brasil-integra-empresas-estatais-federais
- 2026-11-11 23:30 — gravado rel:petrobras-integra-empresas-estatais-federais
- 2026-11-11 23:30 — gravado rel:tcu-fiscaliza-empresas-estatais-federais
- 2026-11-11 23:34 — gravado norma:decreto-11123-2022
- 2026-11-11 23:34 — gravado cargo:servidor-publico-civil-federal
- 2026-11-11 23:34 — gravado rel:presidente-exerce-poder-disciplinar-sobre-servidor-publico-civil-federal
- 2026-11-11 23:34 — gravado rel:ministro-de-estado-exerce-poder-disciplinar-sobre-servidor-publico-civil-federal
- 2026-11-11 23:34 — gravado proc:processo-administrativo-disciplinar-federal
- 2026-11-11 23:36 — gravado proc:licitacao-de-empresa-estatal
- 2026-11-11 23:38 — gravado fonte:stf-noticia-adi-7331
- 2026-11-11 23:39 — editado org:cgu (fontes e detalhes: LAI, arts. 16 e 41; Decreto 7.724, arts. 23, 68 e 69; Lei 12.813, arts. 8º e 9º); verificacao voltou a coletado
- 2026-11-11 23:39 — editado norma:lei-13303-2016 (acesso_em, arquivo do Wayback, compilacao_ate Lei 15.177/2025, fonte art. 97, nota da ADI 7.331); verificacao voltou a coletado
- 2026-11-11 23:39 — editados depois de gravar: org:empresas-estatais-federais (resumo, fontes por artigo, arts. 18 e 89 nos detalhes), cargo:administrador-de-empresa-estatal-federal (fonte da ADI 7.331), cargo:servidor-publico-civil-federal, proc:processo-administrativo-disciplinar-federal, proc:processo-administrativo-federal e proc:pedido-de-acesso-a-informacao (fontes por artigo, para bater com o quadro); rel:comissao-de-etica-publica-integra-sistema-de-gestao-da-etica sem condicao (o esquema não aceita null)
- 2026-11-11 23:39 — atenção: os commits de checkpoint c64dc51/50bfff6/386ef0d do coordenador levaram parte dos arquivos desta tarefa ainda em andamento; as edições posteriores aparecem como modificação
- 2026-11-11 23:39 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-administracao/ (curl --http1.1 com user-agent de navegador): l8112cons.htm, l9784.htm, l12527.htm, l13303.htm, l12813.htm, d6029.htm, dnnconduta.htm (Decreto de 26/5/1999), d7724.htm, d11489.htm, l6404consol.htm, d3035.htm (revogado) e d11123.htm; notícia do STF da ADI 7.331 em pesquisa/brutos/stf/2026-11-11-f2-administracao/
- 2026-11-11 23:39 — compilacao_ate: Lei 8.112 até a Lei 14.509/2022 (e 'Vide Decreto 12.374/2025' no art. 20); Lei 9.784 até a Lei 14.210/2021; LAI até a Lei 15.141/2025; Lei 13.303 até a Lei 15.177/2025; Lei 12.813 sem alteração em vigor (MP 792/2017 caducou); Decreto 6.029 sem marcas; Decreto 7.724 até o Decreto 11.527/2023; Lei 6.404 até a Lei 15.177/2025. Nenhuma alteração entre 2026-10-01 e hoje em nenhuma delas
- 2026-11-11 23:39 — Lei 8.112, art. 8º (provimento: nomeação, promoção, readaptação, reversão, aproveitamento, reintegração, recondução) comparado ao vocabulário `provimento`: nomeação efetiva = concurso-publico, nomeação em comissão = nomeacao-livre, promoção = promocao. Readaptação, reversão, aproveitamento, reintegração e recondução não descrevem como um cargo do mapa é preenchido, e sim o retorno ou a mudança de quem já é servidor; ficam no provimento_nota e nos detalhes do cargo. Proposta: não criar termos para eles; se o coordenador quiser registrá-los, um campo à parte (ex.: `formas_derivadas`) seria melhor que novos termos de `provimento`
- 2026-11-11 23:39 — Lei 8.112, art. 33 (vacância: exoneração, demissão, promoção, readaptação, aposentadoria, posse em outro cargo inacumulável, falecimento): o esquema não tem campo nem vocabulário de vacância (o campo `vacancias` conta cadeiras vagas). Ficou nos detalhes do cargo. Proposta: vocabulário `forma_vacancia` só se outro cargo precisar dele; por ora não vale a pena
- 2026-11-11 23:39 — quem julga o PAD (art. 141): a lei dá a demissão ao Presidente da República (e aos chefes dos outros Poderes, tribunais federais e PGR); no Executivo, o Decreto 11.123/2022 a delega aos Ministros e ao Presidente do Banco Central (ele revogou o Decreto 3.035/1999, que fazia a mesma delegação). O Ministro da CGU julga ocupantes de CCE-17 ou superior (art. 4º). Criada norma:decreto-11123-2022
- 2026-11-11 23:39 — vocabulário proposto: provimento 'eleição em assembleia de acionistas' (conselheiros de administração e fiscais das estatais) e 'eleição pelo conselho de administração' (diretores), hoje nomeacao-livre e eleicao-pelos-pares com campos.provimento_casos inferido; relação 'classifica' (autoridade que atribui grau de sigilo, LAI art. 27), hoje só nos detalhes de obj:informacao-classificada; relação 'revê' ou 'reavalia' (CMRI sobre a classificação, art. 35, § 1º, II), hoje nos detalhes; `provimento` 'designação' ampliado para membros de colegiado designados pelo Presidente com mandato (membros da Comissão de Ética Pública), hoje nomeacao-livre como no CNE
- 2026-11-11 23:39 — leituras nossas marcadas: Ministro de Estado como 'autoridade imediatamente inferior' ao Presidente (Lei 8.112, art. 141, II); ratificação da classificação ultrassecreta de Comandantes pelo Ministro da Defesa e de chefes de missão pelo das Relações Exteriores (LAI, art. 27, § 2º); vigência da Lei 12.813/2013 pela LINDB (a lei não tem cláusula de vigência no texto do Planalto; arts. 14 e 15 vetados); data de vigência da LAI (180 dias) e da Lei 6.404 (60 dias) calculadas
- 2026-11-11 23:39 — atores genéricos: nos processos da Lei 9.784, da LAI (recurso no órgão) e da Lei 8.112 (apuração, sindicância, instauração, inquérito), o ator é org:poder-executivo-federal, porque a autoridade e a comissão variam caso a caso; a revisão deve dizer se prefere um nó 'autoridade administrativa competente'. Na licitação das estatais, o ator é o conjunto org:empresas-estatais-federais
- 2026-11-11 23:39 — fora do mapa por decisão: Presidente do TCU entre os 'Presidentes dos Tribunais Federais' do art. 141, I, da Lei 8.112 (não conferido); Presidentes de TRE (sem cargo no mapa); membros da CEP e presidentes das estatais em 2026-10-01 (pessoas não levantadas); comissões de ética setoriais e comitês de cada estatal (descritos nos conjuntos). Sem avisos abertos: sigilo da LAI tem regra legal clara (D08, D36, D37)
- 2026-11-11 23:39 — quadros de cobertura gravados (Lei 8.112: 245 vigentes; Lei 9.784: 79; LAI: 49; Lei 13.303: 97; Lei 12.813: 12; todos 100% coberto + fora, sem parcial nem lacuna); npm run -s cobertura:leis confere as contas
