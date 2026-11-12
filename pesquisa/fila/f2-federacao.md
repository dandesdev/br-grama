---
id: f2-federacao
escopo: "Fase 2 (D49): consórcios públicos, cooperação ambiental, regiões metropolitanas, fundos de participação e repartição do ICMS e do IBS"
status: em-andamento
depende_de: [f0-federacao, f0-competencias]
iniciada_em: 2026-11-11
concluida_em: null
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 11.107/2005 (consórcios públicos)
- LC 140/2011 (cooperação entre os entes nas competências ambientais comuns)
- Lei 13.089/2015 (Estatuto da Metrópole)
- LC 62/1989 (critérios do FPE e do FPM) e LC 63/1990 (entrega do ICMS aos municípios)
- LC 214/2025 e LC 227/2026, só o Comitê Gestor do IBS e a repartição do IBS entre os entes: `norma:lc-214-2025` e a outra, procure

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] Consórcios (`org:consorcios-publicos` existe): protocolo de intenções, ratificação por lei, contrato de rateio e de programa como etapas de um `proc:` de criação de consórcio.
- [ ] LC 140: as ações administrativas de cada ente (arts. 7º a 9º) no `detalhes` das matérias ambientais ou como relações `tem-competencia` (D38), conforme o padrão já usado; comissões tripartites (nacional e estaduais) e bipartites como colegiados.
- [ ] Estatuto da Metrópole: região metropolitana e aglomeração urbana como conceito (`org:` de arquétipo ou `obj:`, conforme o padrão do arquétipo estadual), governança interfederativa (instância executiva, colegiada deliberativa) e o plano de desenvolvimento urbano integrado como `obj:`.
- [ ] LC 62 e LC 63: o cálculo das quotas (TCU calcula, `rel:` de cálculo existe; confira) e os critérios no `detalhes` dos objetos `obj:fpe`, `obj:fpm` e do ICMS municipal.
- [ ] CGIBS: estrutura (Conselho Superior, diretoria) e a repartição do IBS no nível da lei.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:consorcios-publicos`, `org:comite-gestor-do-ibs`, `obj:fpe`, `obj:fpm`, `org:sisnama`, `org:ibama`, as matérias de competência ambiental (`obj:` com `tipo_objeto: "materia"`).
- Em paralelo: `f2-social`.

## Cobertura

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
