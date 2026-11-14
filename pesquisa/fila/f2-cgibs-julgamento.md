---
id: f2-cgibs-julgamento
escopo: "Fase 2 (D49): órgãos de julgamento do contencioso administrativo do IBS (LC 227/2026, arts. 54 a 102) e consultas (LC 214/2025, arts. 323-A a 323-M)"
status: coletada
depende_de: [f2-federacao, verificacao-f2-federacao]
iniciada_em: 2026-11-14
concluida_em: 2026-11-14
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2". A revisão de f2-federacao apontou que as faixas escolhidas deixaram de fora estes artigos.

## Normas

- LC 227/2026, arts. 54 a 102 (contencioso administrativo do IBS: instâncias de julgamento, câmaras, composição, uniformização): `norma:lc-227-2026`, procure o id
- LC 214/2025, arts. 323-A a 323-M (consultas): `norma:lc-214-2025`

## Entregáveis

- [x] Quadro de cobertura das duas faixas (seção "Cobertura"), uma tabela por norma com a faixa no título.
- [x] Órgãos de julgamento como `org:` dentro do CGIBS (`orgao-interno` ou colegiado, D54), com composição, quem indica e quem nomeia os julgadores, mandatos; cargos agregados (D11).
- [x] Processo administrativo tributário do IBS como `proc:` (impugnação, julgamento em primeira instância, recurso, uniformização), com prazos e dispositivo; vigência de cada regra em 2026-10-01 (o IBS só é cobrado a partir de 2027; diga o que já vigorava).
- [x] Consultas: quem responde e o efeito, como etapa ou relação.

## Cobertura

Classes conforme a D49, a D53 e a regra 8 das instruções (artigo citado em `fontes`, `campos` ou `estrutura_continua`, ou como fonte de relação ou etapa, conta como coberto). A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar. Contamos como coberto só o artigo citado de forma específica; a citação geral "arts. 54 a 102" nas fontes do processo não basta. Cópias em `pesquisa/brutos/planalto-leis/2026-11-14-f2-cgibs-julgamento/`.

### LC 227/2026, arts. 54 a 102 (processo administrativo tributário e órgãos de julgamento do IBS)

Faixa: Título II do Livro I. Complementa as faixas de f2-federacao (arts. 1º a 53 e 103 a 131).

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 54 | coberto | proc:processo-administrativo-tributario-do-ibs (detalhes; etapa impugnacao); obj:lancamento-de-oficio-do-ibs |
| art. 55 | fora | princípios do processo (simplicidade, verdade material, ampla defesa etc.), sem órgão, cargo nem etapa |
| arts. 56 a 64 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa impugnacao: forma eletrônica, sistema do CGIBS, prazos em dias úteis, suspensão de 20/12 a 20/1, intimação pelo DTE) |
| arts. 65 e 66 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa julgamento-primeira-instancia: nulidades); cargos de julgador (impedimentos, art. 66, §§ 9º a 11) |
| arts. 67 e 68 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa impugnacao; recurso-voluntario, art. 68, § 2º); rel:camaras-de-julgamento-do-ibs-julga-lancamento-de-oficio-do-ibs; obj:lancamento-de-oficio-do-ibs |
| arts. 69 a 71 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa julgamento-primeira-instancia: diligências) |
| art. 72 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa desistencia; efeito do prazo do recurso voluntário) |
| art. 73 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa revelia) |
| art. 74 | coberto | proc:processo-administrativo-tributario-do-ibs (detalhes; etapa julgamento-primeira-instancia); obj:sumula-da-camara-superior-do-ibs; obj:sumula-da-camara-nacional-de-integracao |
| art. 75 | coberto | proc:processo-administrativo-tributario-do-ibs (etapas recurso-de-oficio, recurso-voluntario, recurso-de-uniformizacao, recurso-especial); rel:camaras-recursais-de-julgamento-do-ibs-julga-recursos-contra-camaras-de-julgamento-do-ibs |
| art. 76 | coberto | proc:processo-administrativo-tributario-do-ibs (regime rito-sumario; alínea c do inciso II só a partir de 1º/1/2027, art. 182, I, a) |
| art. 77 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa recurso-de-oficio) |
| art. 78 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa recurso-voluntario) |
| art. 79 | coberto | proc:processo-administrativo-tributario-do-ibs (etapas recurso-de-uniformizacao e julgamento-uniformizacao); rel:camara-superior-do-ibs-julga-recursos-contra-camaras-recursais-de-julgamento-do-ibs |
| art. 80 | coberto | proc:processo-administrativo-tributario-do-ibs (regime pedido-de-retificacao) |
| arts. 81 a 87 | coberto | proc:processo-administrativo-tributario-do-ibs (regime incidente-de-uniformizacao); obj:sumula-da-camara-superior-do-ibs; rel:camara-superior-do-ibs-edita-sumula-da-camara-superior-do-ibs; cargo:presidente-da-camara-superior-do-ibs (art. 84, II) |
| art. 88 | coberto | org:camaras-de-julgamento-do-ibs e as outras instâncias (contido_em); proc:processo-administrativo-tributario-do-ibs (sessões virtuais, pauta) |
| arts. 89 e 90 | coberto | org:camaras-de-julgamento-do-ibs; org:camaras-recursais-de-julgamento-do-ibs; org:camara-superior-do-ibs; cargos de julgador (requisitos, paridade, 30% de mulheres, mandato de 2 anos) |
| arts. 91 e 92 | coberto | org:camaras-de-julgamento-do-ibs; cargo:julgador-de-primeira-instancia-do-ibs; rel:arquetipo-estadual-indica-julgador-de-primeira-instancia-do-ibs; rel:arquetipo-municipal-indica-julgador-de-primeira-instancia-do-ibs |
| arts. 93 e 94 | coberto | org:camaras-recursais-de-julgamento-do-ibs; cargo:julgador-de-segunda-instancia-do-ibs; rel:arquetipo-estadual-indica- e rel:arquetipo-municipal-indica-julgador-de-segunda-instancia-do-ibs; rel:comite-gestor-do-ibs-nomeia-julgador-de-segunda-instancia-do-ibs |
| arts. 95 e 96 | coberto | org:camara-superior-do-ibs; cargo:julgador-da-camara-superior-do-ibs; cargo:presidente-da-camara-superior-do-ibs; rel:presidente-da-camara-superior-do-ibs-preside-camara-superior-do-ibs; indicações e nomeação dos julgadores |
| art. 97 | coberto | rel:arquetipo-estadual-procuradoria-geral-oficia-junto-a-camaras-de-julgamento-do-ibs; rel:arquetipo-municipal-oficia-junto-a-camaras-de-julgamento-do-ibs |
| art. 98 | coberto | proc:processo-administrativo-tributario-do-ibs (etapa decisao-definitiva) |
| art. 99 | coberto | cargos de julgador (fontes: garantia das opiniões) |
| arts. 100 e 101 | coberto | cargos de julgador (mandato); rel:presidente-da-camara-superior-do-ibs-propoe-exoneracao- e rel:presidente-do-cgibs-exonera- (três julgadores) |
| art. 102 | coberto | aviso:instalacao-dos-orgaos-de-julgamento-do-ibs (atos do CGIBS para executar o Título II, não localizados) |

Nada vetado ou revogado na faixa. Conta: 49 artigos vigentes; coberto 48, fora 1, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

### LC 214/2025, arts. 323-A a 323-M (consulta e integração do contencioso do IBS e da CBS)

Faixa: os artigos incluídos pela LC 227/2026 (art. 174) no Título VII do Livro I, depois dos colegiados de harmonização (arts. 318 a 323, cobertos em f2-federacao).

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 323-A | coberto | proc:consulta-sobre-a-legislacao-do-ibs-e-da-cbs (etapa consulta) |
| art. 323-B | coberto | proc:consulta-sobre-a-legislacao-do-ibs-e-da-cbs (etapas minuta, avaliacao, harmonizacao); rel:comite-de-harmonizacao-das-administracoes-tributarias-delibera-solucao-de-consulta-do-ibs-e-da-cbs |
| arts. 323-C a 323-F | coberto | obj:solucao-de-consulta-do-ibs-e-da-cbs (efeitos); proc:consulta-sobre-a-legislacao-do-ibs-e-da-cbs (etapas solucao e ineficaz) |
| art. 323-G | coberto | org:camara-nacional-de-integracao-do-contencioso-do-ibs-e-da-cbs; cargo:julgador-da-camara-nacional-de-integracao; rel:ministro-da-fazenda-indica-julgador-da-camara-nacional-de-integracao; rel:comite-gestor-do-ibs-indica-julgador-da-camara-nacional-de-integracao; rel:camara-nacional-de-integracao-julga-recursos-contra-camaras-recursais-de-julgamento-do-ibs; proc:processo-administrativo-tributario-do-ibs (etapas recurso-especial e julgamento-camara-nacional) |
| arts. 323-H a 323-L | coberto | proc:processo-administrativo-tributario-do-ibs (regime incidente-de-uniformizacao-nacional); obj:sumula-da-camara-nacional-de-integracao; rel:camara-nacional-de-integracao-edita-sumula-da-camara-nacional-de-integracao |
| art. 323-M | coberto | org:camara-nacional-de-integracao-do-contencioso-do-ibs-e-da-cbs (estrutura_continua) |

Nada vetado ou revogado na faixa. Conta: 13 artigos vigentes; coberto 13, fora 0, parcial 0, lacuna 0; cobertura = 100,0%.

## Diário

- 2026-11-14 09:09 — iniciada; lidos CLAUDE.md, decisões (D11, D14, D36, D37, D49 a D54), modelo de dados, protocolo, instruções (Fase 2), f2-federacao e verificacao-f2-federacao; texto da LC 227/2026, arts. 54 a 102, e da LC 214/2025, arts. 323-A a 323-M, lido na cópia de 2026-11-11 (pesquisa/brutos/planalto-leis/2026-11-11-f2-federacao/)
- 2026-11-14 09:12 — cópias novas do Planalto em pesquisa/brutos/planalto-leis/2026-11-14-f2-cgibs-julgamento/ (lcp227.htm, lcp214.htm; curl --http1.1 com user-agent de navegador): texto (sem script do servidor) igual ao das cópias de 2026-11-11. compilacao_ate: LC 227 sem alterações indicadas; LC 214 até a LC 235/2026. Nenhuma alteração entre 2026-10-01 e hoje nos dispositivos usados
- 2026-11-14 09:12 — vigência: LC 227/2026, arts. 54 a 102, e LC 214/2025, arts. 323-A a 323-M (incluídos pelo art. 174 da LC 227), com efeitos desde a publicação, 14/1/2026 (LC 227, art. 182, III), salvo o art. 76, II, c (rito sumário para Simples Nacional), só a partir de 1º/1/2027 (art. 182, I, a). Em 2026 o IBS é cobrado à alíquota de teste de 0,1% e o recolhimento é dispensado a quem cumpre as obrigações acessórias (LC 214, arts. 343 e 348, § 1º)
- 2026-11-14 09:13 — páginas e PDFs do CGIBS (resoluções 1, 4, 5, 6, 9 e 19; portarias 1, 4, 7, 11; Portaria Conjunta MF/CGIBS 14; listas de resoluções, portarias e atos conjuntos) em pesquisa/brutos/cgibs/2026-11-14-f2-cgibs-julgamento/. Nenhum ato instala ou compõe os órgãos de julgamento; a Resolução CGIBS 6/2026 (Regulamento do IBS) trata da consulta (arts. 444 a 450 e 565: a Diretoria de Tributação emite a solução de consulta do IBS)
- 2026-11-14 09:15 — gravado org:camaras-de-julgamento-do-ibs
- 2026-11-14 09:15 — gravado org:camaras-recursais-de-julgamento-do-ibs
- 2026-11-14 09:15 — gravado org:camara-superior-do-ibs
- 2026-11-14 09:15 — gravado org:camara-nacional-de-integracao-do-contencioso-do-ibs-e-da-cbs
- 2026-11-14 09:15 — decisão: as 27 câmaras de cada instância viraram conjuntos (D51), com contido_em no CGIBS (art. 89, caput: "no âmbito das competências do CGIBS"; nenhum órgão do art. 7º as tem como subordinadas); a Câmara Superior é colegiado no CGIBS; a Câmara Nacional de Integração é colegiado sem contido_em, como o Comitê de Harmonização (reúne União e CGIBS)
- 2026-11-14 09:16 — gravado aviso:instalacao-dos-orgaos-de-julgamento-do-ibs (lacuna: sem ato do CGIBS nem ato conjunto que componha os órgãos)
- 2026-11-14 09:16 — npm run -s validar sem erros (lote 1: órgãos e aviso; avisos de texto apontam ids do lote seguinte)
- 2026-11-14 09:20 — gravado cargo:julgador-de-primeira-instancia-do-ibs
- 2026-11-14 09:20 — gravado cargo:julgador-de-segunda-instancia-do-ibs
- 2026-11-14 09:20 — gravado cargo:julgador-da-camara-superior-do-ibs
- 2026-11-14 09:20 — gravado cargo:presidente-da-camara-superior-do-ibs
- 2026-11-14 09:20 — gravado cargo:julgador-da-camara-nacional-de-integracao
- 2026-11-14 09:20 — decisões dos cargos: um cargo agregado por instância (D11, sem pessoas); servidores indicados pelos fiscos como designacao e representantes dos contribuintes ("nomeados dentre pessoas indicadas por entidades... e aprovadas em processo seletivo", arts. 94, § 4º, e 96, § 2º) como nomeacao-a-partir-de-lista, ambos inferidos porque a lei remete a ato do CGIBS não localizado; presidente só da Câmara Superior tem cargo próprio (propõe perda de mandato, art. 101, § 1º, I); os presidentes das câmaras de 1ª e 2ª instância e da Câmara Nacional ficam no texto dos cargos de julgador
- 2026-11-14 09:20 — npm run -s validar sem erros (lote 2: cargos)
- 2026-11-14 09:27 — gravados obj:lancamento-de-oficio-do-ibs, obj:solucao-de-consulta-do-ibs-e-da-cbs, obj:sumula-da-camara-superior-do-ibs, obj:sumula-da-camara-nacional-de-integracao
- 2026-11-14 09:27 — gravadas 26 relações: rel:camaras-de-julgamento-do-ibs-julga-lancamento-de-oficio-do-ibs; rel:camaras-recursais-de-julgamento-do-ibs-julga-recursos-contra-camaras-de-julgamento-do-ibs; rel:camara-superior-do-ibs-julga-recursos-contra-camaras-recursais-de-julgamento-do-ibs; rel:camara-nacional-de-integracao-julga-recursos-contra-camaras-recursais-de-julgamento-do-ibs; rel:camara-superior-do-ibs-edita-sumula-da-camara-superior-do-ibs; rel:camara-nacional-de-integracao-edita-sumula-da-camara-nacional-de-integracao; rel:arquetipo-estadual-indica- e rel:arquetipo-municipal-indica- (julgador-de-primeira-instancia-do-ibs, julgador-de-segunda-instancia-do-ibs, julgador-da-camara-superior-do-ibs); rel:comite-gestor-do-ibs-nomeia-julgador-de-segunda-instancia-do-ibs; rel:comite-gestor-do-ibs-nomeia-julgador-da-camara-superior-do-ibs; rel:ministro-da-fazenda-indica-julgador-da-camara-nacional-de-integracao (orgao_exercicio Ministério da Fazenda); rel:comite-gestor-do-ibs-indica-julgador-da-camara-nacional-de-integracao; rel:presidente-da-camara-superior-do-ibs-preside-camara-superior-do-ibs; rel:presidente-da-camara-superior-do-ibs-propoe-exoneracao- e rel:presidente-do-cgibs-exonera- (os três julgadores do CGIBS, art. 101); rel:arquetipo-estadual-procuradoria-geral-oficia-junto-a-camaras-de-julgamento-do-ibs; rel:arquetipo-municipal-oficia-junto-a-camaras-de-julgamento-do-ibs; rel:comite-de-harmonizacao-das-administracoes-tributarias-delibera-solucao-de-consulta-do-ibs-e-da-cbs
- 2026-11-14 09:27 — decisões das relações: a indicação pelos fiscos parte de ente:arquetipo-estadual e ente:arquetipo-municipal (não há nó de secretaria de Fazenda); a nomeação dos representantes dos contribuintes e a indicação para a Câmara Nacional partem de org:comite-gestor-do-ibs com campos.de inferido (a lei não diz qual órgão do CGIBS); as entidades econômicas que indicam contribuintes e o Carf não são nós; perda de mandato como propoe-exoneracao + exonera (art. 101, § 1º); a representação da Fazenda (art. 97) como oficia-junto-a, ligada à primeira instância
- 2026-11-14 09:28 — npm run -s validar sem erros (lote 3: objetos e relações); condicao das indicações estaduais reescrita
- 2026-11-14 09:40 — gravado norma:resolucao-cgibs-6-2026 (Regulamento do IBS; arts. 444 a 450 e 565 sobre consulta, em vigor na publicação, 30/4/2026; a Resolução CGIBS 13/2026 só mudou o art. 617; Wayback de 13/10/2026)
- 2026-11-14 09:40 — gravado proc:processo-administrativo-tributario-do-ibs (impugnação, 1ª instância, recurso de ofício, voluntário, 2ª instância, recurso de uniformização, recurso especial, fins; regimes rito sumário, pedido de retificação, incidente na Câmara Superior e na Câmara Nacional)
- 2026-11-14 09:40 — gravado proc:consulta-sobre-a-legislacao-do-ibs-e-da-cbs (produz obj:solucao-de-consulta-do-ibs-e-da-cbs; consulta, minuta, avaliação em 30 dias com aceitação tácita, Comitê de Harmonização, solução, ineficácia)
- 2026-11-14 09:40 — decisão: prazos da LC 227 em dias-uteis (art. 62, regra geral); o do art. 323-B (30 dias) em dias, porque a LC 214 não tem regra geral de dias úteis para a consulta; quem responde a consulta no CGIBS é a Diretoria de Tributação (LC 227, art. 33, VI; Resolução CGIBS 6/2026, arts. 445, I, e 565), representada pelo conjunto org:diretorias-do-cgibs
- 2026-11-14 09:41 — npm run -s validar sem erros (lote 4: norma e processos)
- 2026-11-14 09:45 — editado org:diretorias-do-cgibs (fonte Resolução CGIBS 6/2026, arts. 445, I, e 565; verificacao coletado)
- 2026-11-14 09:45 — editado org:comite-gestor-do-ibs (estrutura_continua: nota do art. 7º sem as câmaras e item novo para LC 227, arts. 88 a 96, com os nós dos órgãos de julgamento; verificacao coletado)
- 2026-11-14 09:45 — npm run -s validar sem erros (edições)
- 2026-11-14 09:50 — editado aviso:instalacao-dos-orgaos-de-julgamento-do-ibs (fonte LC 227, art. 102)
- 2026-11-14 09:52 — quadro de cobertura gravado; npm run -s cobertura:leis: LC 227/2026, arts. 54 a 102: 49 artigos, coberto 48, fora 1 (art. 55, princípios), 100,0%; LC 214/2025, arts. 323-A a 323-M: 13 artigos, coberto 13, 100,0%
- 2026-11-14 09:52 — vigência em 2026-10-01 (resumo): todas as regras das duas faixas vigoravam desde 14/1/2026, salvo o rito sumário do Simples Nacional (art. 76, II, c), a partir de 1º/1/2027; a Diretoria de Tributação responde consultas desde a Resolução CGIBS 6/2026 (30/4/2026). Os órgãos de julgamento existiam por lei, mas sem ato de composição localizado (aviso aberto); em 2026 o IBS é de teste (0,1%) e o recolhimento é dispensado a quem cumpre as obrigações acessórias, o que limita o contencioso em 2026
- 2026-11-14 09:52 — propostas de vocabulário: (1) relação "responde" ou "emite" para a solução de consulta (hoje só as etapas do processo e a relação delibera do Comitê de Harmonização; a Diretoria de Tributação e a Receita Federal ficaram sem relação com obj:solucao-de-consulta-do-ibs-e-da-cbs); (2) provimento para representante de contribuintes "nomeado entre indicados por entidade e aprovados em seleção" (hoje nomeacao-a-partir-de-lista, inferido); (3) ator "contribuinte" ou "qualquer pessoa" nos processos (já adiado para a fase 3 pela D54)
- 2026-11-14 09:52 — pontos para o revisor: (a) contido_em das câmaras no próprio CGIBS (e não no Conselho Superior ou na Diretoria Executiva): conferir se convém; (b) os 27 órgãos de cada instância como conjunto (D51) em vez de arquétipo estadual; (c) presidente da Câmara Nacional listado à parte, vagas 13 (a lei não diz se sai entre os 12); (d) a representação da Fazenda (art. 97) ligada só à primeira instância; (e) Resolução CGIBS 6/2026 sem ente e com publicação pela data do site do CGIBS (não procurada em diário oficial); (f) quem_aciona dos incidentes usa os cargos de julgador para os presidentes de câmara, que não têm cargo próprio
- 2026-11-14 09:53 — npm run -s validar sem erros; status coletada
