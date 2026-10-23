---
id: f0-eleicoes
escopo: "Fatia 0: direitos políticos, partidos e eleições (CF, arts. 14 a 17), com a eleição como processo cíclico"
status: coletada
depende_de: []
iniciada_em: 2026-10-23
concluida_em: 2026-10-23
---

## Entregáveis

- [x] Direitos políticos (art. 14): voto obrigatório e facultativo, condições de elegibilidade (§ 3º, com as idades mínimas por cargo), inelegibilidades (§§ 4º a 9º e LC 64/1990, com a LC 135/2010), como objetos ou notas nos cargos eletivos que já existem (presidente, deputados, senadores, prefeitos, vereadores e o arquétipo de governador, quando existir).
- [x] Perda e suspensão de direitos políticos (art. 15).
- [x] Partidos (art. 17): os partidos com representação na Câmara já foram importados. Acrescente as regras: registro no TSE, cláusula de desempenho (art. 17, § 3º, e a transição da EC 97/2017: qual percentual vale para a eleição de 2026), federações partidárias (Lei 14.208/2021) e as federações existentes em 2026-10-01, com fonte no TSE. Fundo partidário e FEFC como objetos, com a lei de cada um.
- [x] Justiça Eleitoral: o TSE e os 27 TREs já existem. Crie o que falta do art. 118: `org:juntas-eleitorais` e `cargo:juiz-eleitoral` (agregado); zonas eleitorais como dado agregado, se o TSE publicar o número oficial. Ministério Público Eleitoral só se a f0-funcoes-essenciais não o tiver criado (veja o diário dela).
- [x] Foro dos membros dos TREs: o STJ julga os membros dos Tribunais Regionais Eleitorais nos crimes comuns e de responsabilidade (art. 105, I, a), como relação (sugestão da revisão do Judiciário)
- [x] Processo eleitoral: `proc:eleicao-geral` (presidente, governadores, senadores, deputados) e `proc:eleicao-municipal`, com etapas e datas da CF e da lei (Lei 9.504/1997, Código Eleitoral): convenções, registro de candidaturas, propaganda, 1º turno, 2º turno (art. 77; art. 29, II), diplomação e posse (art. 82, na redação da EC 111/2021, e art. 28). Indique as datas concretas da eleição de 2026 pelo calendário eleitoral do TSE (confira número e datas da resolução). A data de referência (2026-10-01) cai antes do 1º turno de 2026: registre a eleição como em curso nessa data.
- [x] Sistemas eleitorais: majoritário (presidente, governador, senador, prefeito) e proporcional (deputados e vereadores), com o quociente eleitoral do Código Eleitoral, como objeto ou nota curta.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-judiciario: `org:tse`, `org:tre-<uf>`, `org:justica-eleitoral`
- f0-funcoes-essenciais: `org:ministerio-publico-da-uniao`, `org:mpf`, `cargo:procurador-geral-da-republica` (o Ministério Público Eleitoral não foi criado; crie-o aqui, com a LC 75/1993, arts. 72 a 80, `norma:lc-75-1993`)
- f0-tipicos: `cargo:arquetipo-estadual-governador`, `cargo:arquetipo-estadual-deputado-estadual`
- Já existem: `cargo:presidente-da-republica`, `cargo:deputado-federal`, `cargo:senador`, `cargo:arquetipo-municipal-prefeito`, `cargo:arquetipo-municipal-vereador`, `org:arquetipo-municipal-eleitorado`, os partidos

## Diário
- 2026-10-23 17:13 — iniciada; lidos CLAUDE.md, instruções, docs e a tarefa
- 2026-10-23 17:18 — gravado norma:ec-97-2017 (Wayback 429; arquivo null por ora)
- 2026-10-23 17:21 — gravados norma:lc-64-1990, norma:lc-135-2010, norma:lc-219-2025, norma:lei-9096-1995, norma:lei-14208-2021, norma:lei-13487-2017, norma:resolucao-tse-23760-2026 (calendário lido na cópia Wayback; TSE dá 403)
- 2026-10-23 17:22 — gravados fonte:tse-federacoes-registradas (cópia Wayback de 2026-10-01), 5 federações (org:federacao-uniao-progressista, -renovacao-solidaria, -brasil-da-esperanca, -psdb-cidadania, -psol-rede) e 11 relações integra partido -> federação; validação sem erro
- 2026-10-23 17:26 — gravados fonte:tse-noticia-eleitorado-2026 (2.641 zonas, 517.206 seções, 158,7 mi eleitores; cópia Wayback 2026-09-30), org:juntas-eleitorais, cargo:juiz-eleitoral (vagas 2641, inferido), cargo:juiz-de-tre (criado para a relação de foro), rel:stj-julga-juiz-de-tre, rel:juiz-de-direito-preside-juntas-eleitorais, org:ministerio-publico-eleitoral (contido_em org:mpf), cargos procurador-geral-eleitoral, procurador-regional-eleitoral, promotor-eleitoral e 4 relações (oficia-junto-a ×3, nomeia). Vocabulário: falta 'designa' (usado nomeia) e provimento 'designação' (usado nomeacao-livre); 'eleicao-pelos-pares' usado para escolha pelo TJ/TRF
- 2026-10-23 17:28 — gravados org:partidos-politicos (conjunto com as regras do art. 17), obj:estatuto-de-partido-politico, obj:fundo-partidario (com a cláusula de desempenho da EC 97), obj:fefc, obj:registro-de-candidatura (elegibilidade e inelegibilidades, LC 64/135), obj:acao-de-impugnacao-de-mandato-eletivo, obj:perda-ou-suspensao-de-direitos-politicos e relações (tse aprecia-para-registro estatuto; partidos presta-contas-a JE; tse repassa-recursos ×2; JE julga registro e AIME). Vocabulário: falta tipo_objeto para fundos (usado documento)
- 2026-10-23 17:31 — gravados fonte:stf-informativo-1126 (sobras, ADI 7228/7263/7325), obj:diploma-eleitoral, proc:eleicao-geral (10 etapas, datas de 2026 pela Res. TSE 23.760/2026; em curso em 2026-10-01) e proc:eleicao-municipal (sistemas majoritário e proporcional e quociente nas etapas de apuração)
- 2026-10-23 17:32 — arquivo (Wayback) preenchido nas 7 normas novas e na fonte do STF, via CDX (API de disponibilidade dava 429)
- 2026-10-23 17:33 — notas para a revisão: (1) os cargos eletivos já tinham as condições de elegibilidade e idades (art. 14, § 3º); as inelegibilidades (§§ 4º a 9º, LC 64/135/219) ficaram em obj:registro-de-candidatura, sem editar os cargos; governador típico não existe ainda (f0-tipicos pendente), por isso não recebeu nota; (2) org:partido-pt tem nota desatualizada ('não criamos org: para federação'; 'Lei 9.096 ainda não é norma'), não editada por ser de outra tarefa; (3) partidos não ganharam contido_em para org:partidos-politicos (decisão do mantenedor); (4) cláusula de desempenho: em 2026-10-01 vale 2%/1% ou 11 deputados (legislatura após 2022); o resultado de 2026 é medido com 2,5%/1,5% ou 13 deputados; (5) leitura nossa: LC 219/2025 vale para 2026 pela anualidade (art. 16); diploma como condição da posse também é leitura nossa (ver notas de obj:diploma-eleitoral)
- 2026-10-23 17:33 — validação sem erros; tarefa coletada
