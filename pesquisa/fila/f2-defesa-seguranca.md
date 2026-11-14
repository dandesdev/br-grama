---
id: f2-defesa-seguranca
escopo: "Fase 2 (D49): Forças Armadas, inteligência, Susp e leis orgânicas das polícias"
status: coletada
depende_de: [f0-defesa-seguranca]
iniciada_em: 2026-11-11
concluida_em: 2026-11-11
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- LC 97/1999 (organização, preparo e emprego das Forças Armadas): `norma:lc-97-1999`
- Lei 9.883/1999 (Sistema Brasileiro de Inteligência e ABIN)
- Lei 13.675/2018 (Sistema Único de Segurança Pública)
- Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis) e Lei 14.751/2023 (Lei Orgânica Nacional das polícias militares e dos corpos de bombeiros militares), para o arquétipo estadual
- Lei 9.266/1996 e Lei 9.654/1998 (carreiras da Polícia Federal e da PRF), só no que estrutura cargos

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [x] LC 97: confira o que já está (43 citações em `dados/`) e cubra o que falta: comandantes das Forças (escolha e nomeação), Estado-Maior Conjunto, emprego na garantia da lei e da ordem (`proc:` de GLO existe), atribuições subsidiárias.
- [x] Sisbin: órgãos integrantes e o órgão central (ABIN, `org:abin`), o controle externo pelo Congresso (`org:ccai`), e o que a lei diz sobre o diretor-geral da ABIN (aprovação pelo Senado).
- [x] Susp: órgãos integrantes, conselhos de segurança pública (nacional, estaduais e municipais) como colegiados, e o Plano e a Política Nacional como `obj:`.
- [x] Arquétipo estadual: polícia civil (delegado-geral, órgãos previstos na lei orgânica nacional), polícia militar e corpo de bombeiros (comandante-geral, escolha), onde faltarem; cargos agregados.
- [x] Carreiras da PF e da PRF no nível da lei (cargos agregados), se ainda não existirem.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:forcas-armadas`, `org:marinha`, `org:exercito`, `org:aeronautica`, `org:estado-maior-conjunto-das-forcas-armadas`, `org:abin`, `org:sistema-brasileiro-de-inteligencia`, `org:sistema-unico-de-seguranca-publica`, `org:policia-federal`, `org:policia-rodoviaria-federal`, os órgãos de segurança do arquétipo estadual.
- Em paralelo: `f2-processos-constitucionais` e `f2-administracao`.

## Cobertura

Classes conforme a D49. A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar. Artigos revogados ou vetados por inteiro não entram na conta (ficam na nota abaixo de cada quadro). Cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-defesa-seguranca/`.

### LC 97/1999 (organização, preparo e emprego das Forças Armadas)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | org:forcas-armadas, proc:emprego-das-forcas-armadas-na-glo |
| art. 2º | coberto | org:conselho-militar-de-defesa, rel:conselho-militar-de-defesa-assessora-presidente, rel:ministro-da-defesa-preside-conselho-militar-de-defesa e as relações integra dos comandantes e do chefe do EMCFA |
| arts. 3º e 3º-A | coberto | org:forcas-armadas (contido_em), org:estado-maior-conjunto-das-forcas-armadas, cargo:chefe-do-estado-maior-conjunto-das-forcas-armadas, rel:ministro-da-defesa-indica-chefe-…, rel:presidente-nomeia-chefe-… |
| arts. 4º e 5º | coberto | cargo:comandante-da-marinha, cargo:comandante-do-exercito, cargo:comandante-da-aeronautica e as relações indica (Ministro da Defesa) e nomeia (Presidente) |
| art. 6º | coberto | org:forcas-armadas (competência dos Comandantes para criar organizações, por ato do Executivo) |
| art. 7º | coberto | cargos de comandante (lista de escolha e promoção de oficiais-generais) |
| art. 8º | coberto | org:marinha, org:exercito, org:aeronautica, org:forcas-armadas (efetivos e reserva) |
| art. 9º | coberto | org:ministerio-da-defesa (direção superior), rel:emcfa-assessora-ministro-da-defesa, obj:documentos-de-defesa-nacional, proc:atualizacao-dos-documentos-de-defesa-nacional |
| art. 11 | coberto | org:estado-maior-conjunto-das-forcas-armadas |
| art. 11-A | coberto | org:ministerio-da-defesa (produtos de defesa) |
| art. 12 | coberto | org:ministerio-da-defesa, org:marinha, org:exercito, org:aeronautica, obj:documentos-de-defesa-nacional |
| arts. 13 e 14 | coberto | org:forcas-armadas (preparo), cargos de comandante |
| art. 15 | coberto | proc:emprego-das-forcas-armadas-na-glo |
| arts. 16 e 16-A | coberto | org:forcas-armadas (atribuições subsidiárias gerais) |
| art. 17 | coberto | org:marinha, cargo:comandante-da-marinha (Autoridade Marítima) |
| art. 17-A | coberto | org:exercito |
| art. 18 | coberto | org:aeronautica, cargo:comandante-da-aeronautica (Autoridade Aeronáutica Militar) |
| arts. 19 e 20 | fora | art. 20: transição esgotada (os Ministérios militares viraram Comandos com a criação do Ministério da Defesa, 1999); art. 19: regra de leitura das referências legais aos antigos Ministérios, sem órgão, cargo nem etapa (motivo ajustado em verificacao-f2-defesa-seguranca) |
| art. 21 | fora | superado: a ANAC foi criada pela Lei 11.182/2005 e hoje se vincula a outro ministério (rel:anac-vincula-se-ministerio-de-portos-e-aeroportos) |
| art. 22 | coberto | norma:lc-97-1999 (vigência) |
| art. 23 | fora | cláusula revogatória |

Revogado por inteiro (fora da conta): art. 10 (LC 136/2010). Conta: 26 artigos vigentes; coberto 22, fora 4, parcial 0, lacuna 0; cobertura 100,0%.

### Lei 9.883/1999 (Sistema Brasileiro de Inteligência e ABIN)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º e 2º | coberto | org:sistema-brasileiro-de-inteligencia e as relações integra Sisbin |
| arts. 3º e 4º | coberto | org:abin |
| art. 5º | coberto | obj:politica-nacional-de-inteligencia, rel:presidente-edita-politica-nacional-de-inteligencia, rel:ccai-assessora-presidente-politica-nacional-de-inteligencia, org:creden, rel:creden-monitora-politica-nacional-de-inteligencia |
| art. 6º | coberto | org:ccai, rel:ccai-fiscaliza-sisbin |
| art. 7º | fora | autorização para convênios e contratos (detalhe sem órgão nem etapa) |
| art. 8º | coberto | org:abin, cargo:diretor-geral-da-abin |
| arts. 9º e 9º-A | coberto | aviso:abin-atos-e-despesas-sigilosas |
| art. 10 | coberto | org:abin (comunicação com outros órgãos) |
| art. 11 | coberto | cargo:diretor-geral-da-abin, cargo:diretor-adjunto-da-abin, rel:senado-aprova-indicacao-diretor-geral-da-abin, rel:presidente-nomeia-diretor-geral-da-abin |
| art. 12 | fora | transição esgotada: absorção da unidade de inteligência da Casa Militar em 1999 |
| art. 13 | coberto | aviso:abin-atos-e-despesas-sigilosas (rubrica para ações sigilosas) |
| art. 14 | coberto | rel:orgaos-setoriais-de-controle-interno-controla-internamente-abin |
| art. 15 | coberto | norma:lei-9883-1999 (vigência) |

Conta: 16 artigos vigentes; coberto 14, fora 2, parcial 0, lacuna 0; cobertura 100,0%.

### Lei 13.675/2018 (Sistema Único de Segurança Pública)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | org:sistema-unico-de-seguranca-publica, obj:politica-nacional-de-seguranca-publica-e-defesa-social |
| art. 2º | fora | repete a CF (art. 144, caput): segurança pública como dever do Estado e responsabilidade de todos |
| arts. 3º, 4º e 4º-A | coberto | obj:politica-nacional-de-seguranca-publica-e-defesa-social; art. 4º-A nos requisitos de cargo:arquetipo-estadual-delegado-de-policia, cargo:arquetipo-estadual-policial-militar e cargo:arquetipo-estadual-bombeiro-militar |
| arts. 5º a 8º | coberto | obj:politica-nacional-de-seguranca-publica-e-defesa-social; art. 6º, parágrafo único, em obj:plano-nacional-de-seguranca-publica-e-defesa-social |
| arts. 9º e 10 | coberto | org:sistema-unico-de-seguranca-publica, relações integra Susp (polícias, conselhos e Poderes Executivos), rel:mjsp-coordena-susp |
| arts. 11 a 14 | coberto | rel:mjsp-coordena-susp (gestão do Susp pelo Ministério) |
| art. 15 | coberto | org:sistema-unico-de-seguranca-publica (apoio da União) |
| art. 16 | fora | atuação dos integrantes em vias, portos e aeroportos (detalhe operacional) |
| art. 17 | coberto | org:sistema-unico-de-seguranca-publica (critérios do FNSP e do Funpen) |
| art. 18 | fora | critérios de aquisição de bens e serviços (detalhe) |
| arts. 19 a 21 | coberto | org:conselho-nacional-de-seguranca-publica-e-defesa-social, org:arquetipo-estadual-conselho-de-seguranca-publica-e-defesa-social, org:arquetipo-municipal-conselho-de-seguranca-publica-e-defesa-social e suas relações integra e monitora |
| arts. 22 a 24 | coberto | obj:plano-nacional-de-seguranca-publica-e-defesa-social, rel:presidente-edita-plano-…, rel:mjsp-propoe-plano-… |
| art. 25 | fora | metas internas de cada integrante para formação, saúde e habitação dos profissionais (sem órgão nem etapa) |
| art. 26 | coberto | org:sistema-unico-de-seguranca-publica (Sinaped), obj:plano-nacional-de-seguranca-publica-e-defesa-social |
| arts. 27 a 29 | coberto | obj:plano-nacional-de-seguranca-publica-e-defesa-social, rel:mjsp-monitora-plano-…, rel:congresso-nacional-monitora-plano-… |
| art. 30 | coberto | rel:congresso-nacional-monitora-plano-nacional-de-seguranca-publica-e-defesa-social |
| arts. 31 e 32 | coberto | obj:plano-nacional-de-seguranca-publica-e-defesa-social (metodologia e comissões de avaliação) |
| arts. 33 a 42 | coberto | org:sistema-unico-de-seguranca-publica (corregedorias, ouvidorias, Sinesp, Sievap, Renaesp, Rede EaD e Pró-Vida) |
| arts. 42-A a 42-E | fora | diretrizes de saúde, segurança no trabalho e proteção dos profissionais (direitos individuais) |
| art. 43 | fora | padronização da identidade funcional (detalhe) |
| art. 45 | coberto | obj:politica-nacional-de-seguranca-publica-e-defesa-social (conferências a cada cinco anos) |
| arts. 46 a 48 | fora | alteram outras leis (LC 79/1994, Leis 10.201/2001 e 11.530/2007) |
| art. 49 | fora | cláusula revogatória |
| art. 50 | coberto | norma:lei-13675-2018 (vigência) |

Vetado por inteiro (fora da conta): art. 44. Conta: 55 artigos vigentes; coberto 41, fora 14, parcial 0, lacuna 0; cobertura 100,0%.

### Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 3º | coberto | org:arquetipo-estadual-policia-civil, cargo:arquetipo-estadual-delegado-geral-de-policia-civil, rel:arquetipo-estadual-policia-civil-integra-susp |
| art. 4º | fora | princípios institucionais (sem órgão nem etapa) |
| art. 5º | coberto | org:arquetipo-estadual-conselho-superior-de-policia-civil (distribuição do efetivo, inciso I) |
| art. 6º | coberto | org:arquetipo-estadual-policia-civil (D50), rel:arquetipo-estadual-corregedoria-geral-de-policia-civil-corrige-policia-civil, cargo:arquetipo-estadual-perito-oficial-criminal |
| art. 7º | coberto | org:arquetipo-estadual-policia-civil e os órgãos essenciais com contido_em nela |
| art. 8º | coberto | cargo:arquetipo-estadual-delegado-geral-de-policia-civil, rel:governador-nomeia-delegado-geral-de-policia-civil |
| art. 9º | coberto | org:arquetipo-estadual-conselho-superior-de-policia-civil, rel:delegado-geral-preside-conselho-superior-de-policia-civil |
| art. 10 | coberto | org:arquetipo-estadual-corregedoria-geral-de-policia-civil, cargo:arquetipo-estadual-corregedor-geral-de-policia-civil, rel:delegado-geral-designa-corregedor-geral-de-policia-civil |
| art. 11 | coberto | org:arquetipo-estadual-escola-superior-de-policia-civil |
| arts. 12 a 18 | coberto | org:arquetipo-estadual-policia-civil (unidades de execução, inteligência, técnico-científicas, apoio, saúde e tecnologia), cargo:arquetipo-estadual-delegado-geral-de-policia-civil |
| art. 19 | coberto | cargo:arquetipo-estadual-delegado-de-policia, cargo:arquetipo-estadual-oficial-investigador-de-policia, cargo:arquetipo-estadual-perito-oficial-criminal |
| arts. 20 e 21 | coberto | os três cargos da carreira (requisitos e concurso) |
| art. 22 | fora | ajuda de custo no curso de formação (remuneração) |
| arts. 23 e 24 | coberto | os três cargos da carreira (investidura e promoção) |
| art. 25 | fora | permuta e cessão entre entes (direito individual) |
| arts. 26 a 28 | coberto | cargo:arquetipo-estadual-delegado-de-policia, cargo:arquetipo-estadual-oficial-investigador-de-policia, cargo:arquetipo-estadual-perito-oficial-criminal |
| art. 29 | fora | dever de imparcialidade (dever individual) |
| art. 30 | coberto | cargo:arquetipo-estadual-delegado-de-policia, cargo:arquetipo-estadual-oficial-investigador-de-policia, cargo:arquetipo-estadual-perito-oficial-criminal (estabilidade, § 15), org:arquetipo-estadual-conselho-superior-de-policia-civil (promoção por bravura, § 13); os demais direitos e garantias ficam no texto da lei (corrigido em verificacao-f2-defesa-seguranca: era fora) |
| art. 32 | fora | direitos remuneratórios |
| arts. 33 a 35 | fora | deveres e vedações (individuais) |
| arts. 36 e 37 | fora | dever genérico de condições de trabalho e faculdade de criar fundo estadual (sem órgão no arquétipo) |
| arts. 38 e 39 | coberto | cargo:arquetipo-estadual-oficial-investigador-de-policia (transformação de cargos), cargo:arquetipo-estadual-perito-oficial-criminal |
| arts. 40 e 41 | fora | vedação de custódia de presos e funções gratificadas privativas (detalhes) |
| art. 44 | coberto | org:conselho-nacional-da-policia-civil, rel:delegado-geral-integra-conselho-nacional-da-policia-civil |
| art. 45 | fora | plataformas tecnológicas para registros (detalhe) |
| art. 46 | fora | data-base salarial (remuneração) |
| art. 47 | fora | dia nacional da polícia civil (comemorativo) |
| art. 49 | fora | validade das leis locais compatíveis (regra de interpretação) |
| art. 50 | coberto | norma:lei-14735-2023 (vigência) |

Vetados por inteiro (fora da conta): arts. 31, 42, 43 e 48. Conta: 46 artigos vigentes; coberto 30, fora 16, parcial 0, lacuna 0; cobertura 100,0% (art. 30 passou a coberto na verificação).

### Lei 14.751/2023 (Lei Orgânica Nacional das Polícias Militares e dos Corpos de Bombeiros Militares)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | fora | objeto da lei (sem conteúdo próprio) |
| art. 2º | coberto | org:arquetipo-estadual-policia-militar, org:arquetipo-estadual-corpo-de-bombeiros-militar, rel:arquetipo-estadual-policia-militar-auxilia-exercito, rel:arquetipo-estadual-corpo-de-bombeiros-militar-auxilia-exercito, cargos de comandante-geral |
| arts. 3º e 4º | fora | princípios e diretrizes (sem órgão nem etapa) |
| art. 5º | coberto | org:arquetipo-estadual-policia-militar (D50) |
| art. 6º | coberto | org:arquetipo-estadual-corpo-de-bombeiros-militar (D50) |
| art. 7º | coberto | rel:arquetipo-estadual-policia-militar-subordina-se-governador, rel:arquetipo-estadual-corpo-de-bombeiros-militar-subordina-se-governador |
| art. 8º | fora | cooperação na formação de outros órgãos (detalhe) |
| arts. 9º a 11 | coberto | org:arquetipo-estadual-policia-militar, org:arquetipo-estadual-corpo-de-bombeiros-militar (organização por lei estadual, estrutura básica, efetivo; estrutura_continua) |
| art. 12 | coberto | cargo:arquetipo-estadual-policial-militar, cargo:arquetipo-estadual-bombeiro-militar (hierarquia) |
| arts. 13 a 16 | coberto | cargo:arquetipo-estadual-policial-militar, cargo:arquetipo-estadual-bombeiro-militar (ingresso, promoção, quadros e cursos) |
| art. 17 | fora | material de segurança pública (sem órgão) |
| art. 18 | coberto | cargo:arquetipo-estadual-policial-militar, cargo:arquetipo-estadual-bombeiro-militar (foro militar, XVII, e estabilidade, XXVI); as demais garantias ficam no texto da lei (corrigido em verificacao-f2-defesa-seguranca: era fora) |
| art. 19 | fora | vedações aos militares em atividade (deveres individuais) |
| arts. 22 e 23 | fora | elegibilidade e precedência dos militares (direitos individuais) |
| art. 24 | coberto | org:arquetipo-estadual-policia-militar (convocação pela União) |
| art. 25 | fora | órgão só em situação excepcional (D52): mobilização pela União só em caso de guerra |
| art. 26 | fora | regras do ato de convocação (prazo, defesa pela AGU, foro): detalhe de processo |
| art. 27 | fora | parcerias entre governadores (detalhe) |
| art. 28 | coberto | org:inspetoria-geral-das-policias-militares-e-corpos-de-bombeiros-militares, cargo:inspetor-geral-…, rel:igpm-bm-fiscaliza-arquetipo-estadual-policia-militar, rel:igpm-bm-fiscaliza-arquetipo-estadual-corpo-de-bombeiros-militar |
| art. 29 | coberto | cargo:arquetipo-estadual-comandante-geral-da-policia-militar, cargo:arquetipo-estadual-comandante-geral-do-corpo-de-bombeiros-militar, rel:governador-nomeia-comandante-geral-da-policia-militar, rel:governador-nomeia-comandante-geral-do-corpo-de-bombeiros-militar |
| art. 30 | coberto | cargo:arquetipo-estadual-comandante-geral-da-policia-militar (protocolos), org:arquetipo-estadual-conselho-de-seguranca-publica-e-defesa-social |
| arts. 31 a 36 | fora | equivalência de cursos (transição), remuneração do DF, atuação identificada, padronização visual, denominações e datas, definições por regulamento |
| art. 37 | coberto | org:conselho-nacional-de-comandantes-gerais-de-policia-militar, org:conselho-nacional-de-comandantes-gerais-de-bombeiros-militares e as relações integra dos comandantes-gerais |
| art. 38 | coberto | org:arquetipo-estadual-conselho-de-seguranca-publica-e-defesa-social |
| art. 39 | coberto | cargo:arquetipo-estadual-policial-militar, cargo:arquetipo-estadual-bombeiro-militar (prazo para o requisito de nível superior) |
| arts. 40 e 41 | fora | regras de transição de quadros e permuta ou cessão entre entes (direitos individuais) |
| art. 42 | fora | altera a Lei 13.675/2018 |
| art. 43 | fora | revoga dispositivos do Decreto-Lei 667/1969 |
| art. 44 | coberto | norma:lei-14751-2023 (vigência) |

Vetados por inteiro (fora da conta): arts. 20 e 21. Conta: 42 artigos vigentes; coberto 21, fora 21, parcial 0, lacuna 0; cobertura 100,0% (art. 18 passou a coberto na verificação).

### Lei 9.266/1996 (Carreira Policial Federal)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º e 2º | coberto | cargo:delegado-de-policia-federal, cargo:perito-criminal-federal, cargo:agente-de-policia-federal, cargo:escrivao-de-policia-federal, cargo:papiloscopista-policial-federal |
| arts. 2º-A a 2º-D | coberto | org:policia-federal, cargo:diretor-geral-da-policia-federal, cargo:delegado-de-policia-federal, cargo:perito-criminal-federal |
| art. 3º | fora | vencimento básico (remuneração) |
| arts. 6º a 8º | fora | enquadramento de 1996, renúncia e extensão a inativos (transição esgotada e remuneração) |
| art. 9º | coberto | org:policia-federal (programa de capacitação) |
| art. 10 | coberto | cargos da Carreira Policial Federal (carreira típica de Estado) |
| art. 13 | coberto | norma:lei-9266-1996 (vigência) |
| art. 14 | fora | cláusula revogatória |

Revogados ou vetados por inteiro (fora da conta): arts. 4º e 5º (Lei 11.358/2006) e 11 e 12 (vetados); Anexos I e II revogados (Lei 13.034/2014). Conta: 14 artigos vigentes; coberto 9, fora 5, parcial 0, lacuna 0; cobertura 100,0%.

### Lei 9.654/1998 (carreira de Policial Rodoviário Federal)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | cargo:policial-rodoviario-federal, org:policia-rodoviaria-federal |
| art. 2º-A | coberto | cargo:policial-rodoviario-federal (classes) |
| art. 3º | coberto | cargo:policial-rodoviario-federal (concurso e investidura) |
| art. 6º | fora | extinção de gratificação (remuneração) |
| arts. 7º e 8º | coberto | cargo:policial-rodoviario-federal (dedicação exclusiva, cargos em comissão) |
| art. 9º | fora | jornada de 40 horas (regra individual) |
| art. 10 | fora | normas de promoção a cargo de ministério extinto (detalhe de processo) |
| arts. 11 e 12 | fora | aposentadorias e pensões, despesas |
| art. 13 | coberto | norma:lei-9654-1998 (vigência) |

Revogados por inteiro (fora da conta): arts. 2º (Lei 14.875/2024), 4º e 5º (Lei 11.358/2006). Conta: 11 artigos vigentes; coberto 6, fora 5, parcial 0, lacuna 0; cobertura 100,0%.

## Diário

- 2026-11-11 23:33 — iniciada; lidos CLAUDE.md, decisoes (D08, D11, D14, D36, D37, D49 a D52), modelo, protocolo, instrucoes-agentes
- 2026-11-11 23:35 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-defesa-seguranca/ (Planalto por HTTP/1.1 com user-agent de navegador): lcp97.htm (compilacao_ate LC 136/2010), l9883.htm (MP 2.216-37/2001), l13675.htm (Lei 14.899/2024), l14735.htm e l14751.htm (sem alterações; partes vetadas promulgadas anotadas no texto), l9266.htm (Lei 13.034/2014), l9654.htm (Lei 14.875/2024). Fora os scripts do servidor, lcp97 é igual à cópia de 2026-10-20 e as demais (menos l9654, nova) iguais às de 2026-10-23; nenhuma alteração posterior a 2026-10-01
- 2026-11-11 23:38 — gravado norma:lei-9654-1998
- 2026-11-11 23:43 — gravadas norma:decreto-9489-2018, norma:decreto-10822-2021, norma:decreto-8793-2016, norma:decreto-12853-2026 (Creden; o Decreto 9.819/2019 foi revogado), norma:decreto-12996-2026, norma:decreto-12997-2026, norma:decreto-12998-2026 (conselhos nacionais de 8/6/2026), norma:decreto-12725-2025 e norma:decreto-legislativo-175-2025 (PND, END e LBDN); cópias dos decretos na pasta de brutos da tarefa (menos o 12.725, grande)
- 2026-11-11 23:44 — gravados obj:politica-nacional-de-inteligencia, rel:presidente-edita-politica-nacional-de-inteligencia, rel:ccai-assessora-presidente-politica-nacional-de-inteligencia, org:creden (Decreto 12.853/2026), rel:ministro-chefe-do-gsi-preside-creden, rel:creden-monitora-politica-nacional-de-inteligencia, cargo:diretor-adjunto-da-abin, rel:diretor-adjunto-da-abin-substitui-diretor-geral-da-abin, rel:orgaos-setoriais-de-controle-interno-controla-internamente-abin (inferido)
- 2026-11-11 23:44 — editado org:abin (detalhes: supervisão da Creden, dados do Sisbin, comunicação; fontes Lei 9.883 arts. 5º, 7º e 10)
- 2026-11-11 23:46 — gravados obj:politica-nacional-de-seguranca-publica-e-defesa-social, obj:plano-nacional-de-seguranca-publica-e-defesa-social (Decreto 10.822/2021), rel:presidente-edita-plano-…, rel:mjsp-propoe-plano-…, rel:mjsp-monitora-plano-…, rel:congresso-nacional-monitora-plano-…, org:conselho-nacional-de-seguranca-publica-e-defesa-social (CNSP, contido_em MJSP pelo Decreto 11.348/2023), rel:ministro-da-justica-preside-cnsp, org:arquetipo-estadual-conselho-de-seguranca-publica-e-defesa-social e org:arquetipo-municipal-conselho-de-seguranca-publica-e-defesa-social (contido_em inferido), 3 rel integra Susp e 3 rel monitora Susp dos conselhos, rel:poder-executivo-federal-integra-susp e as duas dos arquétipos (integrantes estratégicos)
- 2026-11-11 23:46 — editados org:sistema-unico-de-seguranca-publica (detalhes, fontes e nota: Lei 13.675 arts. 8º a 10, 15, 17, 19 a 21, 26, 33 a 42 e 45) e rel:mjsp-coordena-susp (arts. 11 a 14)
- 2026-11-11 23:47 — gravados obj:documentos-de-defesa-nacional (PND, END e LBDN num só objeto), proc:atualizacao-dos-documentos-de-defesa-nacional (LC 97, art. 9º, §§ 1º a 3º; Decreto Legislativo 175/2025; Decreto 12.725/2025), org:inspetoria-geral-das-policias-militares-e-corpos-de-bombeiros-militares e cargo:inspetor-geral-… (Lei 14.751, art. 28), rel:igpm-bm-fiscaliza-arquetipo-estadual-policia-militar e …-corpo-de-bombeiros-militar
- 2026-11-11 23:48 — editados org:forcas-armadas (atribuições subsidiárias gerais e preparo: LC 97 arts. 6º, 8º, 13, 14, 16 e 16-A), org:marinha (art. 17), org:exercito (art. 17-A; IGPM/BM, Lei 14.751 art. 28), org:aeronautica (art. 18), cargo:comandante-da-marinha (Autoridade Marítima), cargo:comandante-da-aeronautica (Autoridade Aeronáutica Militar), org:ministerio-da-defesa (LC 97 arts. 9º, 11-A e 12)
- 2026-11-11 23:49 — gravados cargo:arquetipo-estadual-delegado-geral-de-policia-civil, rel:governador-nomeia-delegado-geral-de-policia-civil, org:arquetipo-estadual-conselho-superior-de-policia-civil, rel:delegado-geral-preside-conselho-superior-de-policia-civil, org:arquetipo-estadual-corregedoria-geral-de-policia-civil, cargo:arquetipo-estadual-corregedor-geral-de-policia-civil, rel:delegado-geral-designa-corregedor-geral-de-policia-civil, rel:arquetipo-estadual-corregedoria-geral-de-policia-civil-corrige-policia-civil, org:arquetipo-estadual-escola-superior-de-policia-civil, cargos de delegado de polícia, oficial investigador de polícia e perito oficial criminal (arquétipo), org:conselho-nacional-da-policia-civil (Decreto 12.996/2026), rel:delegado-geral-integra-conselho-nacional-da-policia-civil
- 2026-11-11 23:49 — editado org:arquetipo-estadual-policia-civil (detalhes com órgãos essenciais; fontes Lei 14.735 arts. 1º a 7º, 12 a 18, 36, 37, 40, 41 e 45; estrutura_continua art. 3º, I)
- 2026-11-11 23:50 — gravados cargo:arquetipo-estadual-comandante-geral-da-policia-militar, cargo:arquetipo-estadual-comandante-geral-do-corpo-de-bombeiros-militar, rel:governador-nomeia-… (2), cargo:arquetipo-estadual-policial-militar, cargo:arquetipo-estadual-bombeiro-militar, org:conselho-nacional-de-comandantes-gerais-de-policia-militar (Decreto 12.997/2026), org:conselho-nacional-de-comandantes-gerais-de-bombeiros-militares (Decreto 12.998/2026), rel:comandante-geral-…-integra-cncgpm/cncgbm. Erro de validação em dados/fontes/stf-adi-7331-acordao.json é de outra tarefa (não editado)
- 2026-11-11 23:50 — editados org:arquetipo-estadual-policia-militar e org:arquetipo-estadual-corpo-de-bombeiros-militar (detalhes com competências, organização, efetivo e convocação; fontes Lei 14.751 arts. 2º, 4º a 7º, 9º a 11, 24 e 26; estrutura_continua arts. 9º e 10). As relações subordina-se ao governador já citavam o art. 7º
- 2026-11-11 23:51 — gravados norma:decreto-lei-2251-1985, cargo:delegado-de-policia-federal, cargo:perito-criminal-federal, cargo:agente-de-policia-federal, cargo:escrivao-de-policia-federal, cargo:papiloscopista-policial-federal (lista de cargos do DL 2.251/1985, art. 1º, menos o Censor Federal, extinto pela Lei 9.688/1998), cargo:policial-rodoviario-federal
- 2026-11-11 23:51 — editados org:policia-federal (carreira; Lei 9.266 arts. 1º, 2º, 2º-A, 2º-C, 2º-D e 9º; DL 2.251) e org:policia-rodoviaria-federal (carreira; Lei 9.654 arts. 1º, 2º-A, 3º e 7º)
- 2026-11-11 23:55 — fontes de org:abin, org:arquetipo-estadual-policia-civil, org:arquetipo-estadual-policia-militar e org:arquetipo-estadual-corpo-de-bombeiros-militar reduzidas aos artigos que os textos de fato refletem (Lei 9.883 art. 7º; Lei 14.735 arts. 4º, 36, 37, 40, 41 e 45; Lei 14.751 arts. 4º e 26 ficaram 'fora' no quadro)
- 2026-11-11 23:55 — cobertura conferida com npm run -s cobertura:leis: LC 97/1999 100% (22 coberto, 4 fora), Lei 9.883/1999 100% (14/2), Lei 13.675/2018 100% (41/14), Lei 14.735/2023 100% (29/17), Lei 14.751/2023 100% (20/22), Lei 9.266/1996 100% (9/5), Lei 9.654/1998 100% (6/5)
- 2026-11-11 23:55 — D52: Lei 14.751, art. 25 (mobilização das PMs e dos CBMs só em guerra) ficou 'fora' com o motivo 'órgão só em situação excepcional'; o art. 24 (convocação, inclusive em intervenção federal, estado de defesa ou de sítio, ou em apoio a órgãos federais) ficou como texto em org:arquetipo-estadual-policia-militar, sem órgão próprio
- 2026-11-11 23:55 — nenhum aviso aberto: as fontes oficiais cobriram tudo o que a tarefa pedia. Os três conselhos nacionais (polícia civil, comandantes-gerais de PM e de bombeiros) foram regulamentados em 8/6/2026, antes da data de referência; a Creden é hoje regulada pelo Decreto 12.853/2026
- 2026-11-11 23:55 — propostas de vocabulário: (a) tipo_objeto 'politica-ou-plano' para políticas, planos e estratégias nacionais (PNI, PNSPDS, Plano Nacional de Segurança Pública, PND/END/LBDN), hoje 'documento'; (b) relação 'supervisiona' mais ampla, ou um termo 'supervisiona-execucao', para a Creden e a PNI (usado 'monitora'); (c) relação 'controla' ou 'coordena-e-controla' para a IGPM/BM sobre as PMs e os CBMs como forças auxiliares (usado 'fiscaliza'); (d) provimento 'nomeacao-restrita' para chefes escolhidos livremente dentro de um grupo da carreira (Delegado-Geral, comandantes-gerais, comandantes das Forças; usado 'nomeacao-livre'), já sugerido na f0-defesa-seguranca; (e) relação 'convoca' com sentido de convocação de força (União sobre PMs e CBMs), hoje não modelada
- 2026-11-11 23:55 — pontos para o revisor: (1) obj:documentos-de-defesa-nacional junta PND, END e LBDN num objeto só; (2) a etapa de apreciação do proc:atualizacao-dos-documentos-de-defesa-nacional põe a CCAI como ator a partir do caso de 2025 (Decreto Legislativo 175/2025), não da LC 97; a aprovação por decreto presidencial também vem do caso de 2025; (3) rel:orgaos-setoriais-de-controle-interno-controla-internamente-abin é 'inferido' (a lei fala da antiga Secretaria de Controle Interno da Presidência); (4) contido_em dos conselhos estadual e municipal de segurança pública é inferido (Poder Executivo do ente); (5) os conselhos nacionais da polícia civil e dos comandantes-gerais ficaram sem contido_em, com esfera 'nacional'; (6) cargo:inspetor-geral-… usa provimento 'designacao' por leitura nossa; (7) cargo:diretor-adjunto-da-abin: a lei diz natureza especial e o Decreto 11.816/2023 lista CCE 1.18; (8) a lista dos cinco cargos da Carreira Policial Federal vem do DL 2.251/1985, art. 1º, menos o Censor Federal (extinto pela Lei 9.688/1998, só citada em nota); as atribuições de agente, escrivão e papiloscopista não estão em lei; (9) art. 30 da Lei 14.735 e art. 18 da Lei 14.751 ficaram 'fora' embora os cargos citem incisos isolados (estabilidade, foro militar)
- 2026-11-11 23:55 — validação: meus arquivos sem erro; o único erro do npm run -s validar é dados/fontes/stf-adi-7331-acordao.json (resumo com mais de 200 caracteres), de outra tarefa em paralelo, não editado; status coletada
- 2026-11-11 23:55 — revalidado: npm run -s validar sem nenhum erro (o arquivo da outra tarefa já foi corrigido por ela)
