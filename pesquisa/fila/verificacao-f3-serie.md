---
id: verificacao-f3-serie
escopo: "Revisão das métricas e fluxos de 2023 e 2024 (D57), gerados por scripts/importar/tesouro-despesas.ts com EXERCICIO=2023 e 2024"
status: em-andamento
depende_de: []
iniciada_em: 2026-11-14
---

Siga `pesquisa/instrucoes-verificacao.md` e o diário de `pesquisa/fila/verificacao-f1-orcamento.md` (como a revisão de 2025 conferiu as somas). As métricas `met:orcamento-2023-*` e `met:orcamento-2024-*` e os fluxos `fluxo:*-2023` e `fluxo:*-2024` saíram do mesmo script e do mesmo recorte de 2025 (D46, D47), com três ajustes do coordenador: a aba de dados de 2023 e 2024 se chama "base"; as colunas "Poder_Orgao" e "Primaria_Financeira" equivalem a "PODER" e "PRIMARIA_FINANCEIRA"; a classe "Financeira primária" de 2023 conta como financeira; ajustes Extra-SIAFI vêm com unidade em branco em 2024 e são tratados como "N/A".

## O que conferir

1. Totais: a União e cada Poder contra as abas "Resumo Pagamento Total" das planilhas de 2023 e 2024 (cópias em `%TEMP%` não ficam; baixe de novo pelo CKAN do Tesouro, URL no comentário do script) e, para o Executivo, contra o Portal da Transparência (D46: só conferência).
2. Recortes por órgão orçamentário: em 2023 a estrutura dos ministérios mudou (MP 1.154/2023). Para cada ministério com variação maior que 50% entre 2023 e 2024 ou entre 2024 e 2025, explique pela própria planilha (unidades e ações que entraram ou saíram) e diga se o recorte de 2025 serve para o ano; se não servir, proponha o recorte certo no diário (o coordenador ajusta o script). Casos já vistos: Ministério da Integração (12,1; 14,9; 11,2 bi), Receita Federal (17,6; 17,6; 10,4 bi), Ministério da Fazenda, Ministério das Cidades (12,7; 23,4; 14,7 bi), Ministério da Pesca (0,04; 1,2; 0,3 bi), ANA.
3. Órgãos criados durante 2023 ou 2024: a métrica cobre o ano inteiro do código orçamentário; diga se a nota precisa dizer desde quando o órgão existe.
4. Fluxos: os 18 de cada ano, contra as transferências constitucionais publicadas pelo Tesouro (FPE, FPM, Fundeb) quando houver página oficial.

Não edite `dados/metricas/` nem `dados/fluxos/` à mão: anote as correções no diário; o coordenador muda o script e gera de novo. Ao terminar, status `verificada` e relatório no diário. Se tudo conferir, diga "conferido" para cada ano, e o coordenador gera de novo com as notas de verificação.

## Diário
- 2026-11-14: início da revisão. Lidos CLAUDE.md, D26, D44 a D48, D57, modelo de dados (métrica e fluxo), instruções de verificação, o importador e o diário de verificacao-f1-orcamento. Resumos em `pesquisa/brutos/tesouro-transparente/2026-11-14/` (2023: tetodez23.xlsx, atualizado em 2025-04-29, 129.886 linhas; 2024: limite-gastos-lc200dez24.xlsx, atualizado em 2025-12-30, 141.526 linhas). Scripts e saídas desta revisão em `C:/Users/DELL/scratch-brgram/rev-serie/`.
