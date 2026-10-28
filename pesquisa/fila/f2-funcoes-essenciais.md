---
id: f2-funcoes-essenciais
escopo: "Fase 2 (D49): leis orgânicas do MPU, da Defensoria e da AGU"
status: em-andamento
depende_de: [f0-funcoes-essenciais]
iniciada_em: 2026-10-28
concluida_em: null
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- LC 75/1993 (Estatuto do Ministério Público da União): `norma:lc-75-1993`
- Lei 8.625/1993 (Lei Orgânica Nacional do Ministério Público, para os MPs estaduais do arquétipo): `norma:lei-8625-1993`
- LC 80/1994 (Defensoria Pública da União e normas gerais das Defensorias dos estados): `norma:lc-80-1994`
- LC 73/1993 (Lei Orgânica da Advocacia-Geral da União) e Lei 10.480/2002 (Procuradoria-Geral Federal): `norma:lc-73-1993`; a 10.480, crie se não existir

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura" abaixo).
- [ ] MPU: órgãos de cada ramo previstos na LC 75 (Procurador-Geral da República e Conselho de Assessoramento Superior do MPU; em cada ramo: Procurador-Geral, Colégio de Procuradores, Conselho Superior, Câmaras de Coordenação e Revisão, Corregedoria; no MPF, o Procurador Federal dos Direitos do Cidadão). Use as entidades existentes (`org:mpf`, `org:mpt`, `org:mpm`, `org:mpdft`, `org:ministerio-publico-da-uniao`, `org:ministerio-publico-eleitoral`) como contêineres. Cargos da carreira de cada ramo, agregados (ex.: Subprocurador-Geral da República, Procurador Regional da República, Procurador da República), com provimento e requisitos.
- [ ] Escolha dos procuradores-gerais dos ramos (lista, nomeação, mandato) e do PGJ do MPDFT: relações e, se a lei descrever uma sequência, processo.
- [ ] MP estadual (arquétipo, Lei 8.625): órgãos de administração (Procurador-Geral de Justiça, Colégio de Procuradores, Conselho Superior, Corregedoria) e de execução, onde faltarem no arquétipo estadual (`org:arquetipo-estadual-*`).
- [ ] DPU (LC 80): Defensor Público-Geral Federal e Subdefensor, Conselho Superior, Corregedoria-Geral; escolha do DPGF; carreira (categorias). Defensoria estadual do arquétipo: órgãos previstos nas normas gerais.
- [ ] AGU (LC 73, Lei 10.480): órgãos de direção superior (Advogado-Geral da União, Procuradoria-Geral da União, Consultoria-Geral da União, Conselho Superior da AGU, Corregedoria-Geral), Procuradoria-Geral Federal e a relação da PGFN com a AGU (`org:pgfn` existe); carreiras (Advogado da União, Procurador Federal, Procurador da Fazenda Nacional) agregadas.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar. Já existem, entre outros: `org:agu`, `org:pgfn`, `org:dpu`, `org:cnmp`, `org:mp-junto-ao-tcu`; os cargos de Procurador-Geral da República e de Advogado-Geral da União (confira os ids exatos com Grep em `dados/cargos/`).
- Em paralelo: `f2-legislativo-tcu` (Câmara, Senado, Congresso, TCU) e `f2-executivo` (ministérios, agências). Não edite entidades dessas áreas.

## Cobertura

## Diário

- 2026-10-28 08:36 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), D01 a D50, modelo de dados, protocolo e vocabulários
- 2026-10-28 08:47 — gravado org:conselho-de-assessoramento-superior-do-mpu
- 2026-10-28 08:47 — gravado org:secretaria-do-mpu
- 2026-10-28 08:47 — gravado cargo:vice-procurador-geral-da-republica
- 2026-10-28 08:47 — gravado rel:procurador-geral-da-republica-designa-vice-procurador-geral-da-republica
- 2026-10-28 08:47 — gravado rel:vice-procurador-geral-da-republica-substitui-procurador-geral-da-republica
- 2026-10-28 08:47 — gravado rel:procurador-geral-da-republica-preside-conselho-de-assessoramento-superior-do-mpu
- 2026-10-28 08:49 — gravado org:colegio-de-procuradores-da-republica
- 2026-10-28 08:49 — gravado org:conselho-superior-do-mpf
- 2026-10-28 08:49 — gravado org:camaras-de-coordenacao-e-revisao-do-mpf
- 2026-10-28 08:49 — gravado org:corregedoria-do-mpf
- 2026-10-28 08:49 — gravado cargo:corregedor-geral-do-mpf
- 2026-10-28 08:49 — gravado cargo:procurador-federal-dos-direitos-do-cidadao
- 2026-10-28 08:49 — gravado cargo:subprocurador-geral-da-republica
- 2026-10-28 08:49 — gravado cargo:procurador-regional-da-republica
- 2026-10-28 08:49 — gravado cargo:procurador-da-republica
- 2026-10-28 08:49 — gravado rel:procurador-geral-da-republica-preside-colegio-de-procuradores-da-republica
- 2026-10-28 08:49 — gravado rel:procurador-geral-da-republica-preside-conselho-superior-do-mpf
- 2026-10-28 08:49 — gravado rel:conselho-superior-do-mpf-indica-corregedor-geral-do-mpf
- 2026-10-28 08:49 — gravado rel:procurador-geral-da-republica-nomeia-corregedor-geral-do-mpf
- 2026-10-28 08:49 — gravado rel:conselho-superior-do-mpf-exonera-corregedor-geral-do-mpf
- 2026-10-28 08:49 — gravado rel:corregedoria-do-mpf-corrige-mpf
- 2026-10-28 08:49 — gravado rel:procurador-geral-da-republica-designa-procurador-federal-dos-direitos-do-cidadao
- 2026-10-28 08:49 — gravado rel:conselho-superior-do-mpf-aprova-indicacao-procurador-federal-dos-direitos-do-cidadao
- 2026-10-28 08:49 — gravado rel:colegio-de-procuradores-da-republica-indica-ministro-do-stj
- 2026-10-28 08:49 — gravado rel:colegio-de-procuradores-da-republica-indica-juiz-de-trf
- 2026-10-28 08:49 — gravado rel:conselho-superior-do-mpf-aprova-exoneracao-procurador-regional-eleitoral
- 2026-10-28 08:49 — gravado rel:procurador-geral-eleitoral-exonera-procurador-regional-eleitoral
- 2026-10-28 08:51 — gravado cargo:procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado org:colegio-de-procuradores-do-trabalho
- 2026-10-28 08:51 — gravado org:conselho-superior-do-mpt
- 2026-10-28 08:51 — gravado org:camara-de-coordenacao-e-revisao-do-mpt
- 2026-10-28 08:51 — gravado org:corregedoria-do-mpt
- 2026-10-28 08:51 — gravado cargo:corregedor-geral-do-mpt
- 2026-10-28 08:51 — gravado cargo:subprocurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado cargo:procurador-regional-do-trabalho
- 2026-10-28 08:51 — gravado cargo:procurador-do-trabalho
- 2026-10-28 08:51 — gravado rel:colegio-de-procuradores-do-trabalho-indica-procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado rel:procurador-geral-da-republica-nomeia-procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado rel:conselho-superior-do-mpt-propoe-exoneracao-procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado rel:procurador-geral-da-republica-exonera-procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado rel:procurador-geral-do-trabalho-preside-colegio-de-procuradores-do-trabalho
- 2026-10-28 08:51 — gravado rel:procurador-geral-do-trabalho-preside-conselho-superior-do-mpt
- 2026-10-28 08:51 — gravado rel:conselho-superior-do-mpt-indica-corregedor-geral-do-mpt
- 2026-10-28 08:51 — gravado rel:procurador-geral-do-trabalho-nomeia-corregedor-geral-do-mpt
- 2026-10-28 08:51 — gravado rel:conselho-superior-do-mpt-exonera-corregedor-geral-do-mpt
- 2026-10-28 08:51 — gravado rel:corregedoria-do-mpt-corrige-mpt
- 2026-10-28 08:51 — gravado rel:colegio-de-procuradores-do-trabalho-indica-ministro-do-tst
- 2026-10-28 08:51 — gravado rel:colegio-de-procuradores-do-trabalho-indica-juiz-de-trt
- 2026-10-28 08:52 — gravado cargo:procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado org:colegio-de-procuradores-da-justica-militar
- 2026-10-28 08:52 — gravado org:conselho-superior-do-mpm
- 2026-10-28 08:52 — gravado org:camara-de-coordenacao-e-revisao-do-mpm
- 2026-10-28 08:52 — gravado org:corregedoria-do-mpm
- 2026-10-28 08:52 — gravado cargo:corregedor-geral-do-mpm
- 2026-10-28 08:52 — gravado cargo:subprocurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado cargo:procurador-da-justica-militar
- 2026-10-28 08:52 — gravado cargo:promotor-da-justica-militar
- 2026-10-28 08:52 — gravado rel:colegio-de-procuradores-da-justica-militar-indica-procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-republica-nomeia-procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado rel:conselho-superior-do-mpm-propoe-exoneracao-procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-republica-exonera-procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-justica-militar-preside-colegio-de-procuradores-da-justica-militar
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-justica-militar-preside-conselho-superior-do-mpm
- 2026-10-28 08:52 — gravado rel:conselho-superior-do-mpm-indica-corregedor-geral-do-mpm
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-justica-militar-nomeia-corregedor-geral-do-mpm
- 2026-10-28 08:52 — gravado rel:conselho-superior-do-mpm-exonera-corregedor-geral-do-mpm
- 2026-10-28 08:52 — gravado rel:corregedoria-do-mpm-corrige-mpm
