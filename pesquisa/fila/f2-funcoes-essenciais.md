---
id: f2-funcoes-essenciais
escopo: "Fase 2 (D49): leis orgânicas do MPU, da Defensoria e da AGU"
status: pendente
depende_de: [f0-funcoes-essenciais]
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
