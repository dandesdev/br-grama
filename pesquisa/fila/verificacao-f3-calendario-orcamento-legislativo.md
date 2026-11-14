---
id: verificacao-f3-calendario-orcamento-legislativo
escopo: "Revisão independente de f3-calendario-orcamento-legislativo (datas de 2026 e 2027 no ciclo orçamentário, sessão legislativa, relatórios fiscais e outros ciclos)"
status: pendente
depende_de: [f3-calendario-orcamento-legislativo]
---

Siga `pesquisa/instrucoes-verificacao.md` e a D55. Confira toda etapa com `datas` nas entidades com `verificacao.tarefa: "f3-calendario-orcamento-legislativo"` (processos editados e os criados `proc:sessao-legislativa`, `proc:relatorios-fiscais`, `norma:portaria-mgi-11460-2025`): refaça cada conta com script (dias da semana, contagem de dias, meses), confira a regra no dispositivo citado e a nota.

Pontos de atenção:
- CF, art. 57, § 1º (reuniões marcadas para 2/2, 17/7, 1º/8 e 22/12 que caem em sábado, domingo ou feriado passam ao primeiro dia útil seguinte): a coleta aplicou em 1º/8 e não em 17/7/2027 (sábado). Aplique a regra por igual a todas as datas que ela alcança e diga na nota;
- janela do parecer da CMO (21/10 a 15/12), somando os prazos máximos da Res. 1/2006-CN, art. 82: diga se é leitura defensável ou se a etapa deve ficar sem data;
- limitação de empenho sem janela depois do 6º bimestre (inferência da coleta);
- prestação de contas em 3/4/2026 (Paixão de Cristo): o que a norma manda quando o prazo cai em feriado;
- decisão do coordenador (D55, 2026-11-14): acrescente as datas de entrega dos duodécimos (CF, art. 168: "até o dia 20 de cada mês") como etapa datada de `proc:ciclo-orcamentario` ou do processo que já tratar do repasse aos Poderes, e a avaliação semestral do Banco Central na CMO (LRF, art. 9º, § 5º) se a lei der o mês; não crie campo novo de tipo de data (de e ate bastam).

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f3-calendario-orcamento-legislativo"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário
