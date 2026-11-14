---
id: f2-federacao
escopo: "Fase 2 (D49): consórcios públicos, cooperação ambiental, regiões metropolitanas, fundos de participação e repartição do ICMS e do IBS"
status: coletada
depende_de: [f0-federacao, f0-competencias]
iniciada_em: 2026-11-11
concluida_em: 2026-11-14
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 11.107/2005 (consórcios públicos)
- LC 140/2011 (cooperação entre os entes nas competências ambientais comuns)
- Lei 13.089/2015 (Estatuto da Metrópole)
- LC 62/1989 (critérios do FPE e do FPM) e LC 63/1990 (entrega do ICMS aos municípios)
- LC 214/2025 e LC 227/2026, só o Comitê Gestor do IBS e a repartição do IBS entre os entes: `norma:lc-214-2025` e a outra, procure

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [x] Consórcios (`org:consorcios-publicos` existe): protocolo de intenções, ratificação por lei, contrato de rateio e de programa como etapas de um `proc:` de criação de consórcio.
- [x] LC 140: as ações administrativas de cada ente (arts. 7º a 9º) no `detalhes` das matérias ambientais ou como relações `tem-competencia` (D38), conforme o padrão já usado; comissões tripartites (nacional e estaduais) e bipartites como colegiados.
- [x] Estatuto da Metrópole: região metropolitana e aglomeração urbana como conceito (`org:` de arquétipo ou `obj:`, conforme o padrão do arquétipo estadual), governança interfederativa (instância executiva, colegiada deliberativa) e o plano de desenvolvimento urbano integrado como `obj:`.
- [x] LC 62 e LC 63: o cálculo das quotas (TCU calcula, `rel:` de cálculo existe; confira) e os critérios no `detalhes` dos objetos `obj:fpe`, `obj:fpm` e do ICMS municipal.
- [x] CGIBS: estrutura (Conselho Superior, diretoria) e a repartição do IBS no nível da lei.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:consorcios-publicos`, `org:comite-gestor-do-ibs`, `obj:fpe`, `obj:fpm`, `org:sisnama`, `org:ibama`, as matérias de competência ambiental (`obj:` com `tipo_objeto: "materia"`).
- Em paralelo: `f2-social`.

## Cobertura

Classes conforme a D49, a D53 e a regra 8 das instruções (artigo citado em `fontes`, `campos` ou `estrutura_continua`, ou como fonte de relação ou etapa, conta como coberto). A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar. Artigos vetados ou revogados por inteiro não entram na conta. Cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-federacao/`.

### Lei 11.107/2005 (consórcios públicos)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | org:consorcios-publicos; proc:criacao-de-consorcio-publico |
| art. 2º | coberto | org:consorcios-publicos; proc:criacao-de-consorcio-publico (etapa funcionamento) |
| arts. 3º a 6º | coberto | proc:criacao-de-consorcio-publico (etapas protocolo-de-intencoes, ratificacao-por-lei, contrato-de-consorcio); org:assembleia-geral-dos-consorcios-publicos; cargo:representante-legal-de-consorcio-publico; obj:contrato-de-consorcio-publico |
| art. 7º | coberto | org:consorcios-publicos (estrutura_continua); proc:criacao-de-consorcio-publico (etapa estatutos) |
| art. 8º | coberto | proc:criacao-de-consorcio-publico (etapa contrato-de-rateio); rel:municipios-repassam-recursos-consorcios-publicos; rel:estados-repassam-recursos-consorcios-publicos |
| art. 9º | coberto | rel:arquetipo-estadual-tce-fiscaliza-consorcios-publicos; cargo:representante-legal-de-consorcio-publico |
| art. 10 | fora | caput vetado; o parágrafo único trata da responsabilidade pessoal dos agentes (dever individual) |
| arts. 11, 12 e 12-A | coberto | proc:criacao-de-consorcio-publico (etapa alteracao-ou-extincao); org:assembleia-geral-dos-consorcios-publicos |
| art. 13 | coberto | proc:criacao-de-consorcio-publico (etapa contrato-de-programa) |
| art. 14 | coberto | rel:uniao-repassa-recursos-consorcios-publicos |
| art. 15 | coberto | org:consorcios-publicos; proc:criacao-de-consorcio-publico (etapa estatutos) |
| arts. 16 a 18 | fora | alteram o Código Civil, a Lei 8.666/1993 e a Lei 8.429/1992 |
| art. 19 | fora | regra de aplicação no tempo: a lei não se aplica aos convênios de cooperação, contratos de programa e instrumentos congêneres celebrados antes da sua vigência (não cria órgão, cargo nem etapa) |
| art. 20 | coberto | org:consorcios-publicos (regulamento do Executivo da União, estrutura_continua) |
| art. 21 | coberto | norma:lei-11107-2005 (vigência) |

Nada revogado por inteiro (art. 10, caput, vetado; o parágrafo único vigora). Conta: 22 artigos vigentes; coberto 17, fora 5, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

### LC 140/2011 (cooperação nas competências ambientais comuns)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 6º | coberto | obj:materia-meio-ambiente (objetivos, instrumentos de cooperação, delegação); org:comissao-tripartite-nacional; org:arquetipo-estadual-comissao-tripartite-estadual; org:comissao-bipartite-do-distrito-federal; org:arquetipo-estadual-conselho-de-meio-ambiente (art. 5º) |
| art. 7º | coberto | rel:uniao-competencia-meio-ambiente-comum; org:comissao-tripartite-nacional (inciso XIV, h, e parágrafo único) |
| art. 8º | coberto | rel:estados-competencia-meio-ambiente-comum; rel:estados-autoriza-licenca-ambiental (f0) |
| art. 9º | coberto | rel:municipios-competencia-meio-ambiente; rel:arquetipo-estadual-conselho-de-meio-ambiente-regulamenta-licenca-ambiental |
| art. 10 | coberto | rel:estados-competencia-meio-ambiente-comum e rel:municipios-competencia-meio-ambiente (DF) |
| art. 11 | fora | remete à lei regras próprias de supressão de vegetação (sem órgão, cargo nem etapa) |
| art. 12 | coberto | rel:uniao-competencia-meio-ambiente-comum (APAs) |
| arts. 13 a 17 | coberto | obj:licenca-ambiental e proc:licenciamento-ambiental (f0); obj:materia-meio-ambiente (arts. 14, § 4º, 15, 16 e 17, § 3º, com a ADI 4.757); org:arquetipo-estadual-conselho-de-meio-ambiente (art. 15) |
| art. 18 | coberto | rel:arquetipo-estadual-conselho-de-meio-ambiente-regulamenta-licenca-ambiental (§§ 2º e 3º); o caput é transição (processos iniciados antes da lei) |
| art. 19 | fora | remete à legislação em vigor o manejo em áreas não previstas |
| arts. 20 e 21 | fora | alteram e revogam dispositivos da Lei 6.938/1981 |
| art. 22 | coberto | norma:lc-140-2011 (vigência) |

Nada vetado ou revogado por inteiro. Conta: 22 artigos vigentes; coberto 18, fora 4, parcial 0, lacuna 0; cobertura = 100,0%.

### Lei 13.089/2015 (Estatuto da Metrópole)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 3º | coberto | org:arquetipo-estadual-regioes-metropolitanas; rel:municipios-integram-regioes-metropolitanas (f0); proc:instituicao-de-regiao-metropolitana |
| arts. 4º e 5º | coberto | proc:instituicao-de-regiao-metropolitana (etapa lei-complementar-estadual); org:arquetipo-estadual-regioes-metropolitanas (estrutura_continua) |
| arts. 6º, 7º e 7º-A | coberto | org:arquetipo-estadual-regioes-metropolitanas; org:arquetipo-estadual-regioes-metropolitanas-instancia-executiva; org:arquetipo-estadual-regioes-metropolitanas-organizacao-tecnico-consultiva |
| art. 8º | coberto | as três instâncias de arquétipo (contido_em e fontes) |
| art. 9º | coberto | org:arquetipo-estadual-regioes-metropolitanas (instrumentos); obj:plano-de-desenvolvimento-urbano-integrado |
| arts. 10 a 12 | coberto | obj:plano-de-desenvolvimento-urbano-integrado; proc:plano-de-desenvolvimento-urbano-integrado; rel:arquetipo-estadual-regioes-metropolitanas-instancia-colegiada-deliberativa-delibera-pdui; rel:arquetipo-estadual-assembleia-legislativa-delibera-pdui; rel:arquetipo-estadual-ministerio-publico-monitora-pdui |
| arts. 13 a 15 | coberto | rel:uniao-repassa-recursos-regioes-metropolitanas; proc:plano-de-desenvolvimento-urbano-integrado (art. 14, § 2º) |
| art. 16 | fora | ações da União para cidades gêmeas na faixa de fronteira (política setorial, sem órgão, cargo, etapa nem relação) |
| art. 16-A | coberto | rel:uniao-repassa-recursos-regioes-metropolitanas |
| art. 22 | coberto | org:arquetipo-estadual-regioes-metropolitanas (RIDEs); proc:instituicao-de-regiao-metropolitana |
| art. 23 | coberto | org:arquetipo-estadual-regioes-metropolitanas (consórcios e convênios dos municípios) |
| art. 24 | fora | altera o Estatuto da Cidade (Lei 10.257/2001) |
| art. 25 | coberto | norma:lei-13089-2015 (vigência) |

Vetados por inteiro: arts. 17, 18 e 19; revogados pela Lei 13.683/2018: arts. 20 e 21 (fora da conta). Conta: 22 artigos vigentes; coberto 20, fora 2, parcial 0, lacuna 0; cobertura = 100,0%.

### LC 62/1989 (cálculo e entrega do FPE e do FPM)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | obj:fpe; obj:fpm; rel:uniao-repassa-fpe-estados; rel:uniao-repassa-fpm-municipios (base de cálculo) |
| art. 2º | coberto | obj:fpe (critérios da LC 143/2013 e ADI 5.069) |
| art. 3º | coberto | obj:fpm (critérios mantidos); rel:uniao-repassa-fpm-municipios |
| art. 4º | coberto | rel:uniao-repassa-fpe-estados; rel:uniao-repassa-fpm-municipios (prazos de entrega) |
| art. 5º | coberto | rel:tcu-calcula-cotas-fpe; rel:tcu-calcula-cotas-fpm (revisão quando um município é instalado) |
| arts. 6º e 7º | coberto | obj:fpe; obj:fpm (divulgação mensal); rel:tcu-calcula-cotas-fpe e -fpm (normas complementares) |
| art. 8º | coberto | norma:lc-62-1989 (vigência) |
| art. 9º | fora | cláusula revogatória |

Nada vetado ou revogado por inteiro. Conta: 9 artigos vigentes; coberto 8, fora 1, parcial 0, lacuna 0; cobertura = 100,0%.

### LC 63/1990 (parcelas do ICMS, do IPVA e do IPI-exportação dos municípios)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | obj:indice-de-participacao-dos-municipios-no-icms; rel:estados-repassam-icms-municipios |
| art. 2º | coberto | rel:estados-repassam-ipva-municipios |
| art. 3º | coberto | obj:indice-de-participacao-dos-municipios-no-icms; proc:apuracao-do-indice-de-participacao-dos-municipios-no-icms; rel:arquetipo-estadual-calcula-indice-de-participacao-dos-municipios-no-icms |
| arts. 4º a 6º | coberto | obj:indice-de-participacao-dos-municipios-no-icms (depósito, entrega semanal, verificação de documentos pelos municípios); rel:estados-repassam-icms-municipios |
| art. 7º | coberto | rel:estados-repassam-ipi-exportacao-municipios; obj:indice-de-participacao-dos-municipios-no-icms |
| art. 8º | coberto | rel:estados-repassam-icms-municipios; rel:estados-repassam-ipva-municipios (publicação mensal) |
| art. 9º | coberto | obj:indice-de-participacao-dos-municipios-no-icms (proibição pelo Banco Central) |
| art. 10 | coberto | rel:estados-repassam-icms-municipios (intervenção e juros) |
| art. 11 | coberto | norma:lc-63-1990 (vigência) |
| art. 12 | fora | cláusula revogatória |

Nada vetado ou revogado por inteiro. Conta: 12 artigos vigentes; coberto 11, fora 1, parcial 0, lacuna 0; cobertura = 100,0%.

### LC 227/2026, arts. 1º a 53 (CGIBS) e 103 a 131 (distribuição do IBS)

Faixa escolhida: Título I do Livro I (o CGIBS) e Título III do Livro I (a distribuição do produto da arrecadação do IBS). O processo administrativo tributário do IBS (Título II, arts. 54 a 102), a transição do ICMS (Título IV), o ITCMD (Livro II) e as alterações de outras leis (Livro III) ficam fora da faixa e da conta.

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | org:comite-gestor-do-ibs |
| art. 2º | coberto | org:comite-gestor-do-ibs; rel:comite-gestor-do-ibs-arrecada-ibs (f0); obj:regulamento-unico-do-ibs; rel:comite-gestor-do-ibs-repassa-ibs-estados e -municipios |
| arts. 3º a 6º | coberto | org:comite-gestor-do-ibs (coordenação da fiscalização e da cobrança) |
| art. 7º | coberto | órgãos do CGIBS (contido_em e fontes); org:comite-gestor-do-ibs (estrutura_continua) |
| arts. 8º a 11 | coberto | org:conselho-superior-do-cgibs; cargo:membro-do-conselho-superior-do-cgibs; rel:arquetipo-estadual-governador-indica-membro-do-conselho-superior-do-cgibs; rel:arquetipo-municipal-prefeito-elege-membro-do-conselho-superior-do-cgibs; rel:conselho-superior-do-cgibs-edita-regulamento-unico-do-ibs |
| arts. 12 a 17 | coberto | cargo:presidente-do-cgibs (f0); cargo:vice-presidente-do-cgibs; rel:presidente-do-cgibs-preside-conselho-superior-do-cgibs; rel:vice-presidente-do-cgibs-substitui-presidente-do-cgibs |
| arts. 18 a 24 | coberto | org:secretaria-geral-do-cgibs; org:assessoria-de-relacoes-institucionais-e-interfederativas-do-cgibs; org:corregedoria-do-cgibs; org:auditoria-interna-do-cgibs; cargo:corregedor-geral-do-cgibs; cargo:auditor-interno-geral-do-cgibs; rel:auditoria-interna-do-cgibs-controla-internamente-comite-gestor-do-ibs |
| arts. 25 a 29 | coberto | org:diretoria-executiva-do-cgibs; cargo:diretor-executivo-do-cgibs; rel:conselho-superior-do-cgibs-elege-diretor-executivo-do-cgibs |
| arts. 30 a 39 | coberto | org:diretorias-do-cgibs; cargo:diretor-do-cgibs |
| art. 40 | coberto | rel:arquetipo-estadual-tce-fiscaliza-comite-gestor-do-ibs |
| arts. 41 a 44 | coberto | rel:comite-gestor-do-ibs-publica-rreo; rel:comite-gestor-do-ibs-publica-rgf; org:comite-gestor-do-ibs |
| arts. 45 a 48 | coberto | obj:orcamento-do-cgibs; proc:orcamento-do-cgibs; rel:estados-repassam-recursos-comite-gestor-do-ibs; rel:municipios-repassam-recursos-comite-gestor-do-ibs |
| arts. 49 e 50 | fora | regras de licitação e de publicidade dos atos (sem órgão, cargo, etapa nem relação) |
| arts. 51 e 52 | coberto | proc:orcamento-do-cgibs (regimes instalacao-2025-2028 e transicao-2026-2032); rel:estados-repassam-recursos-comite-gestor-do-ibs; rel:uniao-repassa-recursos-comite-gestor-do-ibs |
| art. 53 | coberto | org:comite-gestor-do-ibs (presidência na instalação) |
| arts. 103 a 118 | coberto | rel:comite-gestor-do-ibs-repassa-ibs-estados; rel:comite-gestor-do-ibs-repassa-ibs-municipios; rel:comite-gestor-do-ibs-calcula-tributo-ibs (as regras de cálculo movem dinheiro entre o CGIBS e os entes, D53) |
| arts. 119 a 128 | coberto | rel:comite-gestor-do-ibs-repassa-ibs-municipios e -estados; rel:estados-repassam-ibs-municipios (art. 128) |
| arts. 129 a 131 | coberto | rel:comite-gestor-do-ibs-repassa-ibs-estados e -municipios; rel:estados-repassam-ibs-municipios (art. 130) |

Nada vetado ou revogado por inteiro na faixa (só o art. 5º, § 5º, vetado). Conta: 82 artigos na faixa; coberto 80, fora 2, parcial 0, lacuna 0; cobertura = 100,0%.

### LC 214/2025, arts. 318 a 323 (harmonização com a CBS) e 480 a 484 (CGIBS provisório e instalação)

Faixa escolhida: os artigos que organizam colegiados com membros do CGIBS (Título VII do Livro I, Cap. II, até o art. 323) e o capítulo do Comitê Gestor no Livro III. Os arts. 323-A a 323-M (consulta e contencioso integrado, incluídos pela LC 227/2026) e o resto da lei ficam fora da faixa.

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 318 | coberto | org:comite-gestor-do-ibs (harmonização com a Receita Federal e a PGFN) |
| arts. 319 a 323 | coberto | org:comite-de-harmonizacao-das-administracoes-tributarias; org:forum-de-harmonizacao-juridica-das-procuradorias; rel:forum-de-harmonizacao-juridica-das-procuradorias-assessora-comite-de-harmonizacao-das-administracoes-tributarias; rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-ibs e -cbs |
| arts. 480, 481, 482 e 482-A | coberto | org:comite-gestor-do-ibs (CGIBS provisório); org:conselho-superior-do-cgibs; cargo:membro-do-conselho-superior-do-cgibs (composição até 31/3/2027) |
| art. 483 | coberto | org:conselho-superior-do-cgibs; cargo:vice-presidente-do-cgibs; cargo:presidente-do-cgibs (f0) |
| art. 484 | coberto | rel:uniao-repassa-recursos-comite-gestor-do-ibs; rel:tcu-fiscaliza-comite-gestor-do-ibs |

Nada vetado ou revogado por inteiro na faixa. Conta: 12 artigos na faixa; coberto 12, fora 0, parcial 0, lacuna 0; cobertura = 100,0%.

## Diário

- 2026-11-11 23:40 — iniciada; lidos CLAUDE.md, decisões D01 a D53, modelo de dados, protocolo, instruções (com a Fase 2), vocabulários e os quadros de f2-financas-publicas
- 2026-11-11 23:54 — gravado org:assembleia-geral-dos-consorcios-publicos
- 2026-11-11 23:54 — gravado cargo:representante-legal-de-consorcio-publico
- 2026-11-11 23:54 — gravado obj:contrato-de-consorcio-publico
- 2026-11-11 23:55 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-federacao/ (curl --http1.1 com user-agent de navegador): l11107.htm, lcp140.htm, l13089.htm, lcp62.htm, lcp63.htm, lcp214.htm, lcp227.htm. Texto (sem o script do servidor) igual ao das cópias de 2026-10-23 para Lei 11.107, Lei 13.089, LC 140, LC 214 e LC 227. compilacao_ate: Lei 14.662/2023 (Lei 11.107), Lei 13.683/2018 (Lei 13.089), texto original (LC 140), LC 143/2013 (LC 62), LC 227/2026 (LC 63), LC 235/2026 (LC 214), sem alterações indicadas (LC 227). Nenhuma alteração entre 2026-10-01 e hoje nos dispositivos usados
- 2026-11-11 23:55 — LC 227/2026, art. 166, deu a redação atual da LC 63, arts. 3º, I e II (65% valor adicionado; até 35% por lei estadual, mínimo de 10 pontos por aprendizagem) e 5º; efeitos desde a publicação (art. 182, III), 14/1/2026
- 2026-11-11 23:55 — gravado norma:lc-62-1989
- 2026-11-11 23:55 — gravado norma:lc-63-1990
- 2026-11-11 23:55 — faixas escolhidas: LC 227/2026, arts. 1º a 53 (Título I, CGIBS) e 103 a 131 (Título III, distribuição do IBS); LC 214/2025, arts. 318 a 323 (harmonização com a CBS: comitê e fórum com membros do CGIBS) e 480 a 484 (CGIBS provisório e instalação). O processo administrativo tributário do IBS (LC 227, arts. 54 a 102, câmaras de julgamento do CGIBS) fica fora da faixa
- 2026-11-11 23:55 — npm run -s validar sem erros (lote 1: normas e primeiras entidades dos consórcios)
- 2026-11-11 23:56 — gravado proc:criacao-de-consorcio-publico
- 2026-11-11 23:56 — gravado rel:arquetipo-estadual-tce-fiscaliza-consorcios-publicos
- 2026-11-11 23:56 — gravado rel:municipios-repassam-recursos-consorcios-publicos
- 2026-11-11 23:56 — gravado rel:estados-repassam-recursos-consorcios-publicos
- 2026-11-11 23:56 — gravado rel:uniao-repassa-recursos-consorcios-publicos
- 2026-11-11 23:56 — editado org:consorcios-publicos (detalhes, fontes arts. 7º, 9º, 15 e 20, estrutura_continua)
- 2026-11-11 23:56 — npm run -s validar sem erros (lote 2: proc:criacao-de-consorcio-publico, fiscalização pelo TCE e repasses por rateio e convênio). Escolha: o processo de criação produz obj:contrato-de-consorcio-publico; alteração, extinção e retirada ficam no fim do mesmo processo (arts. 11, 12 e 12-A)
- 2026-11-11 23:58 — gravado fonte:senado-legislacao-adi-4757-decisao
- 2026-11-11 23:58 — gravado org:comissao-tripartite-nacional
- 2026-11-11 23:58 — gravado org:arquetipo-estadual-comissao-tripartite-estadual
- 2026-11-11 23:58 — gravado org:comissao-bipartite-do-distrito-federal
- 2026-11-11 23:58 — gravado org:arquetipo-estadual-conselho-de-meio-ambiente
- 2026-11-11 23:58 — gravado rel:arquetipo-estadual-conselho-de-meio-ambiente-regulamenta-licenca-ambiental
- 2026-11-11 23:58 — editado rel:uniao-competencia-meio-ambiente-comum (nota: ações da União, LC 140, art. 7º)
- 2026-11-11 23:58 — editado rel:estados-competencia-meio-ambiente-comum (nota: ações dos estados, arts. 8º e 10)
- 2026-11-11 23:58 — editado rel:municipios-competencia-meio-ambiente (nota: ações dos municípios, arts. 9º e 10)
- 2026-11-11 23:58 — editado obj:materia-meio-ambiente (detalhes: cooperação, supletiva, subsidiária, ADI 4.757)
- 2026-11-11 23:58 — editado norma:lc-140-2011 (arquivo, compilacao_ate, ADI 4.757)
- 2026-11-11 23:58 — decisão (D38/D50): as ações administrativas dos arts. 7º a 9º da LC 140 ficaram na nota das três relações tem-competencia já existentes (padrão de f0-competencias), e não em relações novas; só o licenciamento já tinha relações autoriza próprias (f0-administracao-indireta)
- 2026-11-11 23:58 — ADI 4.757 lida no portal de legislação do Senado (cópia em pesquisa/brutos/senado/2026-11-11-f2-federacao/adi4757-senado.html): interpretação conforme aos arts. 14, § 4º, e 17, § 3º; resto da lei constitucional
- 2026-11-11 23:58 — npm run -s validar sem erros (lote 3: LC 140, comissões tripartites e bipartite, conselho estadual de meio ambiente)
- 2026-11-11 23:59 — gravado org:arquetipo-estadual-regioes-metropolitanas-instancia-executiva
- 2026-11-11 23:59 — gravado org:arquetipo-estadual-regioes-metropolitanas-instancia-colegiada-deliberativa
- 2026-11-11 23:59 — gravado org:arquetipo-estadual-regioes-metropolitanas-organizacao-tecnico-consultiva
- 2026-11-11 23:59 — gravado obj:plano-de-desenvolvimento-urbano-integrado
- 2026-11-11 23:59 — gravado proc:plano-de-desenvolvimento-urbano-integrado
- 2026-11-11 23:59 — gravado proc:instituicao-de-regiao-metropolitana
- 2026-11-11 23:59 — gravado rel:arquetipo-estadual-regioes-metropolitanas-instancia-colegiada-deliberativa-delibera-pdui
- 2026-11-11 23:59 — gravado rel:arquetipo-estadual-assembleia-legislativa-delibera-pdui
- 2026-11-11 23:59 — gravado rel:arquetipo-estadual-ministerio-publico-monitora-pdui
- 2026-11-11 23:59 — gravado rel:uniao-repassa-recursos-regioes-metropolitanas
- 2026-11-12 00:00 — editado org:arquetipo-estadual-regioes-metropolitanas (detalhes, fontes, estrutura_continua)
- 2026-11-12 00:00 — decisão: segui o padrão do arquétipo estadual: as instâncias da governança (art. 8º) são órgãos de arquétipo com contido_em no conjunto das regiões; o plano integrado é obj: (ato-normativo, aprovado por lei estadual) com processo próprio; a instituição da região virou proc:instituicao-de-regiao-metropolitana (sem produz: não há objeto para a lei complementar estadual de criação)
- 2026-11-12 00:00 — npm run -s validar sem erros (lote 4: Estatuto da Metrópole)
- 2026-11-12 00:02 — gravado norma:lei-5172-1966
- 2026-11-12 00:02 — gravado norma:lc-91-1997
- 2026-11-12 00:02 — gravado fonte:senado-legislacao-adi-5069-decisao
- 2026-11-12 00:02 — gravado fonte:stf-noticia-fpe-prorrogacao-ate-junho-2027
- 2026-11-12 00:02 — gravado obj:indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado rel:arquetipo-estadual-calcula-indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado proc:apuracao-do-indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado norma:lei-5172-1966 (CTN; só o art. 91, critérios do FPM)
- 2026-11-12 00:02 — gravado norma:lc-91-1997 (coeficientes do FPM)
- 2026-11-12 00:02 — gravado fonte:senado-legislacao-adi-5069-decisao
- 2026-11-12 00:02 — gravado fonte:stf-noticia-fpe-prorrogacao-ate-junho-2027
- 2026-11-12 00:02 — gravado obj:indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado rel:arquetipo-estadual-calcula-indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado proc:apuracao-do-indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — ADI 5.069 (FPE): art. 2º, II e III, e § 2º, da LC 62/1989 (redação da LC 143/2013) inconstitucionais sem pronúncia de nulidade; aplicação mantida até 30/6/2027 por decisão do Plenário de 17/6/2026 (publicada em 22/6/2026). Cópias da página do Senado e das notícias do STF em pesquisa/brutos/senado/2026-11-11-f2-federacao/ e pesquisa/brutos/stf/2026-11-12-f2-federacao/. Em 2026-10-01 os critérios valiam; registro em obj:fpe
- 2026-11-12 00:02 — decisão: não havia objeto do ICMS municipal; criei obj:indice-de-participacao-dos-municipios-no-icms (documento) com os critérios da LC 63, o processo de apuração e impugnação (art. 3º, §§ 3º a 9º) e a relação calcula do estado, no molde de rel:tcu-calcula-cotas-fpe
- 2026-11-12 00:02 — npm run -s validar sem erros (lote 5: LC 62 e LC 63, normas do CTN e da LC 91, fontes da ADI 5.069)
- 2026-11-12 00:03 — editado obj:fpe (critérios da LC 62 com a LC 143, ADI 5.069, prazos e divulgação)
- 2026-11-12 00:03 — editado obj:fpm (critérios: LC 62, art. 3º; CTN, art. 91; LC 91/1997; revisão pelo TCU)
- 2026-11-12 00:03 — editado rel:tcu-calcula-cotas-fpe (fonte LC 62, arts. 5º e 7º)
- 2026-11-12 00:03 — editado rel:tcu-calcula-cotas-fpm (fonte LC 62, arts. 5º e 7º; condição com a revisão quando um município é instalado)
- 2026-11-12 00:03 — editado rel:uniao-repassa-fpe-estados (fonte LC 62: base, critérios, prazos)
- 2026-11-12 00:03 — editado rel:uniao-repassa-fpm-municipios (fonte LC 62)
- 2026-11-12 00:03 — editado rel:estados-repassam-icms-municipios (detalhes com depósito, entrega semanal, publicação e sanções; fonte LC 63)
- 2026-11-12 00:03 — editado rel:estados-repassam-ipva-municipios (fonte LC 63, arts. 2º e 8º)
- 2026-11-12 00:03 — editado rel:estados-repassam-ipi-exportacao-municipios (fonte LC 63, art. 7º)
- 2026-11-12 00:03 — conferido: rel:tcu-calcula-cotas-fpe e -fpm já existiam e estão corretas; a LC 62, art. 5º, confirma que o TCU calcula as quotas
- 2026-11-12 00:03 — npm run -s validar sem erros (edições da LC 62 e da LC 63)
- 2026-11-12 00:06 — gravado org:conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado cargo:membro-do-conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado cargo:vice-presidente-do-cgibs
- 2026-11-12 00:06 — gravado rel:presidente-do-cgibs-preside-conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado rel:vice-presidente-do-cgibs-substitui-presidente-do-cgibs
- 2026-11-12 00:06 — gravado org:diretoria-executiva-do-cgibs
- 2026-11-12 00:06 — gravado cargo:diretor-executivo-do-cgibs
- 2026-11-12 00:06 — gravado org:diretorias-do-cgibs
- 2026-11-12 00:06 — gravado cargo:diretor-do-cgibs
- 2026-11-12 00:06 — gravado org:secretaria-geral-do-cgibs
- 2026-11-12 00:06 — gravado org:assessoria-de-relacoes-institucionais-e-interfederativas-do-cgibs
- 2026-11-12 00:06 — gravado org:corregedoria-do-cgibs
- 2026-11-12 00:06 — gravado org:auditoria-interna-do-cgibs
- 2026-11-12 00:06 — gravado cargo:corregedor-geral-do-cgibs
- 2026-11-12 00:06 — gravado cargo:auditor-interno-geral-do-cgibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-elege-diretor-executivo-do-cgibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-elege-diretor-do-cgibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-elege-corregedor-geral-do-cgibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-elege-auditor-interno-geral-do-cgibs
- 2026-11-12 00:06 — gravado rel:arquetipo-estadual-governador-indica-membro-do-conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado rel:arquetipo-municipal-prefeito-elege-membro-do-conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado obj:regulamento-unico-do-ibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-edita-regulamento-unico-do-ibs
- 2026-11-12 00:06 — gravado rel:arquetipo-estadual-tce-fiscaliza-comite-gestor-do-ibs
- 2026-11-12 00:06 — gravado rel:tcu-fiscaliza-comite-gestor-do-ibs
- 2026-11-12 00:06 — gravado rel:auditoria-interna-do-cgibs-controla-internamente-comite-gestor-do-ibs
- 2026-11-12 00:06 — decisões do lote 6: as nove diretorias do CGIBS viraram um conjunto (org:diretorias-do-cgibs, D51) com um cargo de diretor; Secretaria-Geral, Assessoria, Corregedoria e Auditoria Interna com tipo_orgao outro (unidade interna de entidade interfederativa) e contido_em no Conselho Superior, a que a lei as subordina (arts. 18, 19, 21 e 23); a Diretoria Executiva também (art. 25). Os vice-presidentes e o Diretor-Executivo ficaram sem pessoa (D11: não são dirigentes máximos; a Portaria CGIBS 5/2026 sobre a eleição do Diretor-Executivo está em pesquisa/brutos/cgibs/2026-10-24/)
- 2026-11-12 00:06 — provimento dos cargos do CGIBS: membro do Conselho Superior com casos (estados: nato, pelo secretário de Fazenda; municípios no CGIBS provisório: indicação da CNM e da FNP até 31/3/2027, aproximada como nomeacao-livre; municípios depois: eleição pelos prefeitos, aproximada como eleicao-majoritaria-maioria-absoluta), marcados como inferidos; Diretor-Executivo, diretores, corregedor e auditor eleitos pelo Conselho Superior, aproximados como nomeacao-livre (destituíveis a qualquer tempo). Proposta de vocabulário no fim
- 2026-11-12 00:06 — npm run -s validar sem erros (lote 6: estrutura do CGIBS, cargos, eleições, regulamento único e controle)
- 2026-11-12 00:08 — gravado obj:orcamento-do-cgibs
- 2026-11-12 00:08 — gravado proc:orcamento-do-cgibs
- 2026-11-12 00:08 — gravado rel:uniao-repassa-recursos-comite-gestor-do-ibs
- 2026-11-12 00:08 — gravado rel:estados-repassam-recursos-comite-gestor-do-ibs
- 2026-11-12 00:08 — gravado rel:municipios-repassam-recursos-comite-gestor-do-ibs
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-repassa-ibs-estados
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-repassa-ibs-municipios
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-calcula-tributo-ibs
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-publica-rreo
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-publica-rgf
- 2026-11-12 00:08 — gravado org:comite-de-harmonizacao-das-administracoes-tributarias
- 2026-11-12 00:08 — gravado org:forum-de-harmonizacao-juridica-das-procuradorias
- 2026-11-12 00:08 — gravado rel:forum-de-harmonizacao-juridica-das-procuradorias-assessora-comite-de-harmonizacao-das-administracoes-tributarias
- 2026-11-12 00:08 — gravado rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-ibs
- 2026-11-12 00:08 — gravado rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-cbs
- 2026-11-12 00:08 — vigências do IBS e do CGIBS em 2026-10-01: estrutura e regras da LC 227/2026 vigoravam desde 14/1/2026; o Conselho Superior funcionava com a composição do CGIBS provisório (municipais indicados por CNM e FNP até 31/3/2027); a eleição dos municipais pelos prefeitos ainda não ocorrera; a distribuição do IBS aos entes começa com o IBS de 2027 (em 2026 a arrecadação de teste financia o CGIBS, ADCT, art. 125, § 3º); IBS municipal só a partir de 2027 (LC 214, art. 344); retenções de transição de 2029 a 2077 e de 2029 a 2096; financiamento da União de 2025 a 2028; percentual do CGIBS até 100% (2026), 50% (2027-2028) e 2% a 0,5% (2029-2032); harmonização (LC 214, arts. 318 a 323) com efeitos desde 1º/1/2026, instalação não conferida. Cada data está em vigencia das entidades
- 2026-11-12 00:08 — fluxo possível (D45): rel:uniao-repassa-recursos-comite-gestor-do-ibs é dinheiro da União (operação de crédito de 2025 a 2028, R$ 600 mi, 800 mi, 1,2 bi e 1,2 bi) e pode aparecer na base do Tesouro; também rel:uniao-repassa-recursos-consorcios-publicos (convênios com consórcios). Não editei dados/fluxos/: fica para o script
- 2026-11-12 00:08 — gravado obj:orcamento-do-cgibs (lote 7)
- 2026-11-12 00:08 — gravado proc:orcamento-do-cgibs (lote 7)
- 2026-11-12 00:08 — gravado rel:uniao-repassa-recursos-comite-gestor-do-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:estados-repassam-recursos-comite-gestor-do-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:municipios-repassam-recursos-comite-gestor-do-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-repassa-ibs-estados (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-repassa-ibs-municipios (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-calcula-tributo-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-publica-rreo (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-publica-rgf (lote 7)
- 2026-11-12 00:08 — gravado org:comite-de-harmonizacao-das-administracoes-tributarias (lote 7)
- 2026-11-12 00:08 — gravado org:forum-de-harmonizacao-juridica-das-procuradorias (lote 7)
- 2026-11-12 00:08 — gravado rel:forum-de-harmonizacao-juridica-das-procuradorias-assessora-comite-de-harmonizacao-das-administracoes-tributarias (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-cbs (lote 7)
- 2026-11-12 00:08 — npm run -s validar sem erros (lote 7: orçamento, financiamento e distribuição do IBS, harmonização com a CBS)
- 2026-11-12 00:09 — editado org:comite-gestor-do-ibs (detalhes, fontes LC 227 e LC 214, estrutura_continua, notas)
- 2026-11-12 00:09 — editado rel:estados-repassam-ibs-municipios (detalhes: a cota-parte do IBS estadual é retida e distribuída diretamente pelo CGIBS; fonte LC 227). Ponto para o revisor: a relação continua partindo do estado (base: CF, art. 158, IV, b), e o fluxo operacional está em rel:comite-gestor-do-ibs-repassa-ibs-municipios; se o fluxo for gerado por script, não somar os dois
- 2026-11-12 00:09 — npm run -s validar sem erros
- 2026-11-12 00:09 — editado norma:lei-11107-2005 (fonte da vigência, art. 21; datas de acesso e conferência)
- 2026-11-12 00:09 — ajuste: tirei os arts. 49 e 50 da LC 227 das fontes de org:comite-gestor-do-ibs (regras de licitação e publicidade, classificadas como fora)
- 2026-11-14 08:26 — retomada depois do limite de uso: diário relido; os 93 arquivos com tarefa f2-federacao conferidos contra as linhas gravado/editado (nenhum faltando, nenhum sem linha); tudo entrou no checkpoint b7a2efdc; npm run -s validar sem erros. Falta: quadro de cobertura, entregáveis e status
- 2026-11-14 08:28 — quadro de cobertura gravado: Lei 11.107, LC 140, Lei 13.089, LC 62, LC 63 e as faixas da LC 227 (arts. 1º a 53 e 103 a 131) e da LC 214 (arts. 318 a 323 e 480 a 484), todas a 100%; npm run -s cobertura:leis confere as contas (22, 22, 22, 9, 12, 82 e 12 artigos)
- 2026-11-14 08:28 — propostas de vocabulário: (1) provimento eleicao-por-colegiado (eleito por um colegiado superior que não é o seu, ex.: Diretor-Executivo, diretores, corregedor e auditor do CGIBS, hoje aproximados como nomeacao-livre); (2) provimento eleicao-indireta (eleito por chefes do Executivo ou outro colégio, não pelos eleitores, ex.: representantes municipais no Conselho Superior do CGIBS); (3) provimento indicacao-por-entidade-representativa (ex.: CNM e FNP no CGIBS provisório); (4) tipo_orgao orgao-interno, para unidades internas de entidades sem termo próprio (Secretaria-Geral, Corregedoria, Auditoria do CGIBS, hoje outro); (5) relação indica sem exigir aprovação de outro, ou termo novo para a indicação que já investe (governador indica o representante estadual no CGIBS)
- 2026-11-14 08:28 — pontos para o revisor: rel:estados-repassam-ibs-municipios e rel:comite-gestor-do-ibs-repassa-ibs-municipios descrevem o mesmo dinheiro por bases diferentes (CF e LC 227); obj:fpm não registra o percentual da reserva do interior (Decreto-Lei 1.881/1981 não lido); as comissões tripartites e bipartite da LC 140 ficaram sem contido_em (portarias do MMA não lidas); rel:arquetipo-estadual-ministerio-publico-monitora-pdui com o Ministério Público estadual inferido; as datas intermediárias das prorrogações da ADI 5.069 divergem entre a página do Senado e a notícia do STF (anotado na fonte)
- 2026-11-14 08:28 — concluída; status coletada; npm run -s validar sem erros
