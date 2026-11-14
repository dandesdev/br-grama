---
id: f3-calendario-orcamento-legislativo
escopo: "Fase 3 (D55): datas de 2026 e 2027 nas etapas do ciclo orçamentário, da sessão legislativa, da prestação de contas e dos relatórios fiscais"
status: pendente
depende_de: [f2-fechamento]
---

Leia `docs/decisoes.md` (D14, D24, D33, D55 a D59) e a parte de processos de `docs/modelo-de-dados.md` (campo `datas` da etapa).

## O que fazer

Para cada etapa abaixo, preencha `datas: [{ de, ate?, nota?, fontes? }]` com as ocorrências em 2026 e 2027, calculadas da regra que a norma dá (cite no `nota` a conta, ex.: "quatro meses antes de 31/12/2026"). Etapa cujo momento depende de fato incerto (ex.: "60 dias do recebimento") fica sem `datas`. Quando a regra cair em fim de semana ou feriado e a norma não disser o que fazer, use a data da regra e diga isso na nota.

- `proc:ciclo-orcamentario`: envio e devolução da LDO e da LOA (2026 para 2027 e 2027 para 2028), PPA 2028-2031 (envio em 2027, primeiro ano do mandato), emendas na CMO (Res. 1/2006-CN), créditos adicionais (20/11), avaliação quadrimestral das metas (fim de maio, setembro e fevereiro), prestação de contas (60 dias após a abertura da sessão legislativa), exercício financeiro.
- Sessão legislativa (CF, art. 57: 2/2 a 17/7 e 1/8 a 22/12; reunião preparatória e eleição das Mesas no início da legislatura, 1º/2/2027): procure um processo existente (Grep "sessao-legislativa" e "legislatura" em `dados/`); se não houver, crie `proc:sessao-legislativa` com `forma: "ciclo"`, etapas da sessão ordinária, recesso, convocação extraordinária (CF, art. 57, § 6º, sem data) e posse da nova legislatura.
- `proc:execucao-da-despesa` e relatórios fiscais: RREO (até 30 dias após cada bimestre, LRF, art. 52), RGF (até 30 dias após cada quadrimestre, art. 55, § 2º), restos a pagar (31/12).
- Outros processos de `forma: "ciclo"` desta área que você achar (Grep `"forma": "ciclo"`), e os de `forma: "linha"` com etapa de data fixa no ano (ex.: prazos do regimento comum).

Regras extras: não mude o texto das etapas além de corrigir um erro que a conta revelar (anote no diário). Entidades editadas: `verificacao: { status: "coletado", tarefa: "f3-calendario-orcamento-legislativo", em, notas }`.

## Diário
