---
id: f2-legislativo-tcu
escopo: "Fase 2 (D49): regimentos da Câmara, do Senado e do Congresso, e Lei Orgânica do TCU"
status: pendente
depende_de: [f0-legislativo, f0-controle]
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Normas

- Regimento Interno da Câmara dos Deputados (Resolução 17/1989): `norma:ricd`
- Regimento Interno do Senado Federal: `norma:risf`
- Regimento Comum do Congresso Nacional: `norma:rccn`; Resolução CN 1/2006 (CMO): `norma:resolucao-cn-1-2006`
- Lei 8.443/1992 (Lei Orgânica do TCU): `norma:lei-8443-1992`; o Regimento Interno do TCU, se ajudar a localizar a estrutura

Os regimentos são longos e cheios de regras de tramitação. Classifique como `fora` o detalhe de tramitação que não cria órgão, cargo nem etapa; classifique como `coberto` o que já está nas etapas de `proc:lei-ordinaria` e dos demais processos legislativos (confira em `dados/processos/`).

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada norma (seção "Cobertura").
- [ ] Câmara: Mesa e seus cargos, Colégio de Líderes, lideranças (agregado), Procuradoria Parlamentar, Ouvidoria, Corregedoria, Secretaria da Mulher e os demais órgãos que o RICD cria; as **comissões permanentes** (D10: todas, com o número de membros quando o regimento ou ato da Mesa fixar), como `org:` dentro de `org:comissoes-da-camara-dos-deputados`.
- [ ] Senado: Mesa, lideranças, Corregedoria, Ouvidoria, Procuradoria da Mulher e os demais órgãos do RISF; as comissões permanentes dentro de `org:comissoes-do-senado-federal`.
- [ ] Congresso: Mesa do Congresso (já existe; confira a composição) e as comissões mistas permanentes (a CMO e a CCAI existem; procure as demais, como a de Mudanças Climáticas e a do Mercosul, que têm resolução própria).
- [ ] Etapas que faltam nos processos legislativos (ex.: urgência regimental, RICD art. 155), só se mudarem o rito; senão, `fora`.
- [ ] TCU (Lei 8.443): Plenário, Câmaras, Presidência, Corregedoria, Ministério Público junto ao TCU (`org:mp-junto-ao-tcu` existe) e secretaria; competências da lei que ligam o TCU a outras entidades (D50); processos de tomada de contas especial e de julgamento de contas, se a lei descrever as etapas.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: as comissões citadas nos processos (`org:ccjc-camara`, `org:ccj-senado`, `org:cft-camara`, `org:cmo`, `org:ccai`) e os conselhos de ética já existem.
- Em paralelo: `f2-funcoes-essenciais` (MPU, DPU, AGU) e `f2-executivo`. Não edite entidades dessas áreas.

## Cobertura

## Diário
