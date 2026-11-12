---
id: verificacao-f2-eleicoes
escopo: "Revisão independente da coleta f2-eleicoes (Código Eleitoral sem os arts. 12 a 41, Lei 9.504/1997, Lei 9.096/1995, LC 64/1990, Lei 9.709/1998)"
status: em-andamento
iniciada_em: 2026-11-11
depende_de: [f2-eleicoes]
---

Siga `pesquisa/instrucoes-verificacao.md`. Confira contra as fontes primárias (cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-eleicoes/` e o Planalto) todas as entidades com `verificacao.tarefa: "f2-eleicoes"`: as 27 criadas e as 13 existentes que a coleta editou (a nota em `verificacao.notas` diz o que mudou). Confira também o quadro de cobertura de `pesquisa/fila/f2-eleicoes.md`: o Código Eleitoral tem 272 linhas "fora"; diga se cada motivo cabe na D49 e no item 8 das instruções de fase 2 e se alguma etapa que muda o rito ficou de fora.

Pontos de atenção apontados pela coleta:
- prazos de impugnação do Código Eleitoral (art. 97, §§ 2º a 4º) tratados como substituídos pelo rito da LC 64 (arts. 3º a 16): é leitura nossa; diga se a fonte sustenta;
- nome "AIJE" (a lei fala em representação e investigação judicial eleitoral);
- mesário com provimento `designacao` (a lei diz "nomeados pelo juiz eleitoral");
- mesas receptoras dentro da Justiça Eleitoral (o art. 12 do Código não as lista como órgão);
- número de mesas (517.206) calculado como uma por seção: só fica se a fonte do TSE der o total de seções em 2026; diga se a conta deve virar `inferido`;
- Código Eleitoral, art. 224 (nova eleição) sem processo, por depender das ADIs 5.525 e 5.619: procure o acórdão no portal do STF;
- prazos novos nas etapas de `proc:eleicao-geral` e `proc:eleicao-municipal` (alistamento, nomeação das mesas, impugnação, prestação de contas), cada um contra o dispositivo.

Para cada processo novo (registro de candidatura, AIJE, registro de partido, plebiscito e referendo, recursos eleitorais), confira etapa por etapa: atores, prazos, quórum e dispositivo.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f2-eleicoes"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário
