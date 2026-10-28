---
id: f2-legislativo-tcu
escopo: "Fase 2 (D49): regimentos da Câmara, do Senado e do Congresso, e Lei Orgânica do TCU"
status: em-andamento
depende_de: [f0-legislativo, f0-controle]
iniciada_em: 2026-10-28
concluida_em: null
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
- 2026-10-28 08:35 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), decisões D01 a D50, modelo de dados, protocolo e vocabulários
- 2026-10-28 08:40 — cópias locais em pesquisa/brutos/planalto-leis/2026-10-28-f2-legislativo-tcu/: ricd.html (Legin da Câmara, norma atualizada; compilacao_ate Resolução nº 34, de 22/4/2026; nenhuma resolução posterior no texto, logo nada mudou entre 2026-10-01 e hoje), lei-8443-1992.htm (Planalto por http, mesmo tamanho da cópia de 2026-10-23; marca mais recente Lei 13.866/2019), risf.pdf e rccn.pdf (edições oficiais "atualizado até julho de 2025"), senado-pagina-regimento.html, Ato da Mesa da Câmara nº 11/2023 (ficha, texto e anexo com o número de membros das comissões permanentes)
- 2026-10-28 08:43 — gravado org:colegio-de-lideres-da-camara
- 2026-10-28 08:43 — editado norma:ricd
- 2026-10-28 08:44 — gravado cargo:primeiro-vice-presidente-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-primeiro-vice-presidente-da-camara
- 2026-10-28 08:44 — gravado cargo:segundo-vice-presidente-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-segundo-vice-presidente-da-camara
- 2026-10-28 08:44 — gravado cargo:primeiro-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-primeiro-secretario-da-camara
- 2026-10-28 08:44 — gravado cargo:segundo-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-segundo-secretario-da-camara
- 2026-10-28 08:44 — gravado cargo:terceiro-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-terceiro-secretario-da-camara
- 2026-10-28 08:44 — gravado cargo:quarto-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-quarto-secretario-da-camara
- 2026-10-28 08:44 — gravado cargo:suplente-de-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-suplente-de-secretario-da-camara
- 2026-10-28 08:44 — gravado rel:primeiro-vice-presidente-da-camara-substitui-presidente-da-camara
- 2026-10-28 08:44 — gravado rel:segundo-vice-presidente-da-camara-substitui-presidente-da-camara
- 2026-10-28 08:44 — gravado rel:altineu-cortes-ocupa-primeiro-vice-presidente-da-camara
- 2026-10-28 08:44 — gravado rel:elmar-nascimento-ocupa-segundo-vice-presidente-da-camara
- 2026-10-28 08:44 — gravado rel:carlos-veras-ocupa-primeiro-secretario-da-camara
- 2026-10-28 08:44 — gravado rel:lula-da-fonte-ocupa-segundo-secretario-da-camara
- 2026-10-28 08:44 — gravado rel:delegada-katarina-ocupa-terceiro-secretario-da-camara
- 2026-10-28 08:44 — gravado rel:sergio-souza-ocupa-quarto-secretario-da-camara
- 2026-10-28 08:44 — corrigido rel:primeiro-vice-presidente-da-camara-substitui-presidente-da-camara (faltava nome)
- 2026-10-28 08:44 — corrigido rel:segundo-vice-presidente-da-camara-substitui-presidente-da-camara (faltava nome)
- 2026-10-28 08:46 — gravado org:liderancas-da-camara-dos-deputados
- 2026-10-28 08:46 — gravado org:procuradoria-parlamentar-da-camara
- 2026-10-28 08:46 — gravado org:ouvidoria-parlamentar-da-camara
- 2026-10-28 08:46 — gravado org:corregedoria-parlamentar-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-da-mulher-da-camara
- 2026-10-28 08:46 — gravado org:procuradoria-da-mulher-da-camara
- 2026-10-28 08:46 — gravado org:coordenadoria-dos-direitos-da-mulher-da-camara
- 2026-10-28 08:46 — gravado org:comite-de-defesa-da-mulher-contra-assedio-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-da-primeira-infancia-infancia-adolescencia-e-juventude-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-relacoes-internacionais-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-comunicacao-social-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-participacao-interacao-e-midias-digitais-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-da-transparencia-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-do-empreendedorismo-legislativo-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-da-inovacao-legislativa-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-defesa-das-prerrogativas-parlamentares-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-monitoramento-das-decisoes-do-sistema-interamericano-da-camara
- 2026-10-28 08:46 — gravado org:bancada-negra-da-camara
- 2026-10-28 08:46 — gravado org:diretoria-geral-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-geral-da-mesa-da-camara
- 2026-10-28 08:46 — gravado org:centro-de-estudos-e-debates-estrategicos-da-camara
- 2026-10-28 08:46 — gravado org:consultoria-legislativa-da-camara
- 2026-10-28 08:47 — gravado cargo:lider-de-partido-ou-bloco-na-camara-dos-deputados
- 2026-10-28 08:47 — gravado cargo:lider-do-governo-na-camara-dos-deputados
- 2026-10-28 08:47 — gravado cargo:ouvidor-geral-da-camara-dos-deputados
- 2026-10-28 08:47 — gravado cargo:corregedor-parlamentar-da-camara-dos-deputados
- 2026-10-28 08:47 — gravado cargo:procuradora-da-mulher-da-camara-dos-deputados
- 2026-10-28 08:47 — gravado rel:presidente-da-republica-indica-lider-do-governo-na-camara
- 2026-10-28 08:47 — gravado rel:presidente-da-camara-designa-ouvidor-geral-da-camara
- 2026-10-28 08:47 — gravado rel:presidente-da-camara-designa-corregedor-parlamentar
- 2026-10-28 08:47 — gravado rel:deputadas-elegem-procuradora-da-mulher-da-camara
- 2026-10-28 08:47 — gravado rel:corregedoria-parlamentar-da-camara-corrige-deputado-federal
- 2026-10-28 08:47 — gravado rel:camara-presta-contas-a-tcu
- 2026-10-28 08:47 — editado org:mesa-da-camara-dos-deputados
- 2026-10-28 08:48 — gravado norma:camara-ato-da-mesa-11-2023
- 2026-10-28 08:48 — gravado org:capadr-camara
- 2026-10-28 08:48 — gravado org:cindre-camara
- 2026-10-28 08:48 — gravado org:ccti-camara
- 2026-10-28 08:48 — gravado org:cdc-camara
- 2026-10-28 08:48 — gravado org:cde-camara
- 2026-10-28 08:48 — gravado org:cdu-camara
- 2026-10-28 08:48 — gravado org:cdhmir-camara
- 2026-10-28 08:48 — gravado org:ce-camara
- 2026-10-28 08:48 — gravado org:cffc-camara
- 2026-10-28 08:48 — gravado org:clp-camara
- 2026-10-28 08:48 — gravado org:cmads-camara
- 2026-10-28 08:48 — gravado org:cme-camara
- 2026-10-28 08:48 — gravado org:credn-camara
- 2026-10-28 08:48 — gravado org:cspcco-camara
- 2026-10-28 08:48 — gravado org:csaude-camara
- 2026-10-28 08:48 — gravado org:ctrab-camara
- 2026-10-28 08:48 — gravado org:ctur-camara
- 2026-10-28 08:48 — gravado org:cvt-camara
- 2026-10-28 08:48 — gravado org:ccult-camara
- 2026-10-28 08:48 — gravado org:cespo-camara
- 2026-10-28 08:48 — gravado org:cpd-camara
- 2026-10-28 08:48 — gravado org:cmulher-camara
- 2026-10-28 08:48 — gravado org:cidoso-camara
- 2026-10-28 08:48 — gravado org:cpovos-camara
- 2026-10-28 08:48 — gravado org:ccom-camara
- 2026-10-28 08:48 — gravado org:cics-camara
- 2026-10-28 08:48 — gravado org:cpasf-camara
- 2026-10-28 08:48 — gravado org:casp-camara
- 2026-10-28 08:48 — editado org:ccjc-camara
- 2026-10-28 08:48 — editado org:cft-camara
- 2026-10-28 08:48 — editado org:comissoes-da-camara-dos-deputados
- 2026-10-28 08:48 — gravado org:comissoes-especiais-da-camara
- 2026-10-28 08:48 — gravado org:comissoes-externas-da-camara
- 2026-10-28 08:48 — editado org:comissoes-da-camara-dos-deputados (estrutura_continua removida)
