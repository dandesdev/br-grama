---
id: f2-federacao
escopo: "Fase 2 (D49): consórcios públicos, cooperação ambiental, regiões metropolitanas, fundos de participação e repartição do ICMS e do IBS"
status: pendente
depende_de: [f0-federacao, f0-competencias]
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
