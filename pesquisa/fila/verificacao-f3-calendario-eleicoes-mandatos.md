---
id: verificacao-f3-calendario-eleicoes-mandatos
escopo: "Revisão independente de f3-calendario-eleicoes-mandatos (datas das eleições de 2026 e das posses de 2027, Conferência Nacional de Saúde, início dos mandatos nas relações ocupa)"
status: em-andamento
depende_de: [f3-calendario-eleicoes-mandatos]
iniciada_em: 2026-11-14
---

Siga `pesquisa/instrucoes-verificacao.md` e as D55 e D56. Confira as entidades com `verificacao.tarefa: "f3-calendario-eleicoes-mandatos"`.

1. **Etapas datadas** de `proc:eleicao-geral`, `proc:registro-de-candidatura` e `proc:conferencia-nacional-de-saude`: refaça cada conta com script e confira contra o dispositivo e contra o calendário eleitoral do TSE (Res. TSE 23.760/2026, Anexo I).
2. **Conferência Nacional de Saúde** (decisão do coordenador, 2026-11-14): a Res. CNS 818/2026 só existe como "minuta" no site do CNS, fora do DOU. Não use os dias 26 a 29/7/2027 como data: a etapa nacional fica com o mês que a Res. CNS 813/2026 (DOU) dá, de 1º a 31/7/2027, e a nota diz que o CNS divulgou uma minuta com os dias; a `fonte:` da minuta fica, como secundária. Se achar a Res. 818 publicada no DOU, use os dias.
3. **Início dos mandatos** (506 relações de deputados federais): confira por amostra (ao menos 60, cobrindo os grupos do diário: posse em 1º/2/2023, volta depois de licença ou ministério, suplentes efetivados, suplentes em exercício, retotalização) contra os dados abertos da Câmara; se a amostra achar erro, confira o grupo inteiro. A regra é a do modelo de dados (início do período contínuo atual, D56).
4. **Governadores com data imprecisa**: Paulo Dantas (AL, "2022-05"; afastamento pelo STJ em 11/10/2022 e volta em 24/10/2022 segundo a imprensa), Roberto Cidade (AM, "2026-04") e Ricardo Couto (RJ, incerta). Procure ato oficial (diário oficial do estado, página da Assembleia ou do governo, STJ e STF para o afastamento). Se achar, corrija a data e, no caso de Paulo Dantas, diga se o período atual começa na volta (relação nova) ou se o afastamento fica na nota; se não achar, deixe como está e anote.
5. **Relações sem início** deixadas de fora pela coleta (Diego Coronel, Frederico Carvalho Dias, Leonardo Góes Silva): preencha `vigencia.de` se a fonte oficial der a data.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f3-calendario-eleicoes-mandatos"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário
