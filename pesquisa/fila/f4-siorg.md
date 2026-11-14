---
id: f4-siorg
escopo: "Fase 4 (D62): importador do SIORG e árvore de unidades internas no painel"
status: pendente
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
