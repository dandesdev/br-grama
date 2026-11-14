---
id: f4-siorg
escopo: "Fase 4 (D62): importador do SIORG e árvore de unidades internas no painel"
status: concluida
depende_de: []
---

Tarefa do coordenador (código), não de agente de pesquisa.

## Passos

1. Ler a documentação da API do SIORG (estruturaorganizacional.dados.gov.br, versão 4) e achar a rota de estrutura por unidade e a de busca por nome ou sigla.
2. Mapear os órgãos do mapa do Executivo federal para o código SIORG (ministérios, autarquias, fundações, agências); guardar o mapeamento no importador, como o METRICAS do tesouro-despesas.
3. Definir o tipo gerado (proposta: `estrutura`, em `dados/estruturas/`, um arquivo por órgão, com `de`, a árvore, a data da consulta e a fonte) e mudar esquema, modelo de dados e validação.
4. Gerar, validar, mostrar no painel (árvore recolhível com a contagem de unidades) e conferir por amostra contra o site do SIORG.
5. Tarefa de revisão por agente: amostra de órgãos contra a API e contra o decreto de estrutura de cada um.

## Diário
- 2026-11-14 — importador `scripts/importar/siorg.ts` (baixar, gerar). Base resumida do SIORG baixada em 14/11/2026 (96.474 unidades; 3.782 de lei ou decreto). 91 raízes mapeadas (78 órgãos e entidades do SIORG com o mesmo nome ou sigla de um órgão do mapa, tirada a falsa coincidência CDC; 13 unidades internas que o mapa trata como órgão: Receita, PF, PRF, STN, SOF, SFC, Abin, Imprensa Nacional, comandos militares, EMCFA, Senappen). 4.420 unidades nas árvores; agências e autarquias sem unidade de lei ou decreto ganham os dois primeiros níveis de ato interno (`so_ato_interno`). Tipo `estrutura` (`est:`) no esquema, na validação e no modelo de dados; painel mostra a árvore recolhível e as entidades vinculadas. Conferido no navegador (Ministério da Saúde: 101 unidades, 405 de ato interno abaixo).
- 2026-11-14 — correções de verificacao-f4-siorg aplicadas no script: recurso aos dois níveis de ato interno também quando a árvore só tem colegiados e para DPU e BNDES; `ato_interno` conta tudo o que está abaixo da raiz (MEC 544, RFB 2.833, PF 2.438); quatro unidades do MDIC criadas pelo Decreto 13.139/2026 (DOU de 19/10) ficam fora; estrutura vazia da Assessoria Especial do Presidente não é gravada; 33 unidades ligadas a órgãos do mapa (`mapa`). 90 estruturas geradas como verificadas. Casos sem correspondência no SIORG (Comissão de Anistia, Polícia Ferroviária Federal, Inspetoria-Geral das PMs, Núcleo de Segurança e Credenciamento como núcleo) ficam sem árvore.
