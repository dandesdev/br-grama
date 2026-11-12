---
id: verificacao-f2-judiciario
escopo: "Revisão independente da coleta f2-judiciario (LOMAN, Leis 5.010, 10.259, 8.457 e 11.697, CLT arts. 643 a 735, Código Eleitoral arts. 12 a 41, RISTF, RISTJ)"
status: pendente
depende_de: [f2-judiciario]
---

Siga `pesquisa/instrucoes-verificacao.md`. Confira contra as fontes primárias (cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-judiciario/`, `pesquisa/brutos/stf/2026-11-11-f2-judiciario/`, o Planalto e os sites do STF e do STJ) todas as entidades com `verificacao.tarefa: "f2-judiciario"`: as 134 criadas e as 19 existentes que a coleta editou (a nota em `verificacao.notas` diz o que mudou). Confira também o quadro de cobertura de `pesquisa/fila/f2-judiciario.md`. O "fora" é alto (RISTF 363 de 398, RISTJ 372 de 426, LOMAN 109 de 144): diga se cada motivo cabe na D49, no item 8 das instruções de fase 2 e na D51 (superado sem revogação expressa), e se alguma estrutura ou etapa ficou de fora.

Pontos de atenção:
- RISTF: a coleta usou a edição do site do STF atualizada até a ER 58/2022. Procure as emendas regimentais posteriores (ER 59/2023 e seguintes, até 2026-10-01) no site do STF e confira se mudam a competência das Turmas e do Plenário, sobretudo nas ações penais; se mudarem, acrescente o RISTF às relações de foro;
- `aviso:corregedor-regional-eleitoral-terceiro-desembargador` (Código Eleitoral, art. 26, contra CF, art. 120): tente a Resolução TSE 23.742/2024 e diga se resolve;
- ocupantes dos cargos de direção criados (Presidente e Vice do STF, STJ, TST, STM e TSE; Corregedor Nacional): só registre quem a fonte oficial do tribunal disser que estava no cargo em 2026-10-01 (D11, D14); o biênio do STJ terminou em agosto de 2026;
- `cargo:corregedor-nacional-de-justica` com `orgao: org:cnj`;
- os quatro cargos de juiz titular editados (a parte do substituto saiu deles; provimento mudou para promoção ou variável): confira contra a LOMAN e as leis dos ramos;
- funções acumuladas (Vice-Presidente do STM como Ministro-Corregedor; Vice-Presidente do STJ como Corregedor-Geral da Justiça Federal) modeladas com `preside` e provimento `nato`.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f2-judiciario"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário
