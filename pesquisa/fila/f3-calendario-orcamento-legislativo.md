---
id: f3-calendario-orcamento-legislativo
escopo: "Fase 3 (D55): datas de 2026 e 2027 nas etapas do ciclo orçamentário, da sessão legislativa, da prestação de contas e dos relatórios fiscais"
status: em-andamento
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
- 2026-11-14 — iniciada (status em-andamento). Lidos CLAUDE.md, D14, D24, D33, D55 a D59, modelo de dados (datas da etapa) e protocolo. Cópias locais usadas: CF (pesquisa/brutos/planalto-cf/2026-10-16/cf.htm), LRF e Lei 4.320 (planalto-leis/2026-11-11-f2-financas-publicas/), Res. 1/2006-CN (camara/2026-10-23/rescn-1-2006-atualizada.html), RICD (camara/2026-10-23/ricd-normaatualizada.html), RISF e RCCN (senado/2026-10-23-processos-legislativos/). Temporários em C:/Users/DELL/scratch-brgram/f3-ol/.
- 2026-11-14 — achados: não existe processo da sessão legislativa (Grep "sessao-legislativa" e "legislatura" em dados/processos só acha CPI, eleição geral e lei ordinária, sem etapa de sessão); RREO e RGF não são etapa de nenhum processo (só objetos obj:rreo e obj:rgf e relações publica/fiscaliza). Decisão: criar proc:sessao-legislativa e proc:relatorios-fiscais (forma ciclo). CF, art. 57, § 1º, manda transferir para o primeiro dia útil seguinte as reuniões marcadas para 2/2, 17/7, 1º/8 e 22/12 que caiam em sábado, domingo ou feriado; nesses casos a norma diz o que fazer e a nota registra a transferência.
- 2026-11-14 — gravado norma:portaria-mgi-11460-2025 (feriados nacionais e pontos facultativos de 2026, DOU 30/12/2025; cópia em pesquisa/brutos/dou/2026-11-14-f3-calendario-orcamento-legislativo/), para citar nas notas quando uma data de 2026 cai em feriado. Validação limpa.
- 2026-11-14 — contas feitas com node (C:/Users/DELL/scratch-brgram/f3-ol/datas.js; dias da semana em UTC ao meio-dia). Regra de contagem: "N dias após X" = X + N dias corridos, começando no dia seguinte; "até o fim do mês" = último dia do mês; "N meses antes do encerramento do exercício" = fim de 31/12 recuado N meses (4 meses = fim de 31/8; 8 meses = fim de 30/4, menos meio mês = 15/4). Feriados de 2026 pela Portaria MGI 11.460/2025, art. 1º; para 2027 não há portaria ainda, e nenhuma data de 2027 calculada aqui cai em feriado fixo da lista de 2026.
- 2026-11-14 — gravado proc:ciclo-orcamentario com datas (verificacao → coletado):
  - ldo-envio: 15/4/2026 (qua), 15/4/2027 (qui). Conta: fim de 31/12 − 8 meses = fim de 30/4; − 15 dias = 15/4 (ADCT, art. 35, § 2º, II).
  - ldo-tramitacao: 17/7/2026 (sex), 17/7/2027 (sáb; data da regra, o art. 57, § 1º, só transfere reuniões).
  - loa-envio: 31/8/2026 (seg), 31/8/2027 (ter, com o PPA 2028-2031). Conta: fim de 31/12 − 4 meses = fim de 31/8 (ADCT, art. 35, § 2º, I e III).
  - loa-emendas: 1º a 20/10/2026 (qui a ter) e 1º a 20/10/2027 (sex a qua) (Res. 1/2006-CN, art. 82, III).
  - loa-parecer-cmo: 21/10 a 15/12 de 2026 e de 2027. Conta (dias corridos, art. 82): III termina 20/10; V +10 = 30/10; VI +3 = 2/11; VII +2 = 4/11; VIII +3 = 7/11; IX +3 = 10/11; X +10 = 20/11; XI +10 = 30/11; XII +8 = 8/12; XIII +5 = 13/12; XIV +2 = 15/12; XV +4 = 19/12.
  - loa-votacao: 22/12/2026 (ter), 22/12/2027 (qua, LOA 2028 e PPA). Nota cita 19/12 do art. 82, XV.
  - execucao: 1º/1 a 31/12 de 2026 e de 2027 (Lei 4.320, art. 34).
  - creditos-adicionais: 20/11/2026 (sex, feriado nacional, Portaria MGI 11.460/2025, art. 1º, XVI; data da regra) e 20/11/2027 (sáb) (Res. 1/2006-CN, art. 106).
  - avaliacao-das-metas-fiscais: 28/2/2026 (sáb, 3º quadr. 2025), 31/5/2026 (dom), 30/9/2026 (qua), 28/2/2027 (dom), 31/5/2027 (seg), 30/9/2027 (qui) (LRF, art. 9º, § 4º).
  - prestacao-de-contas: 3/4/2026 (sex, Paixão de Cristo, feriado nacional pela Portaria MGI 11.460/2025, art. 1º, V; data da regra) e 3/4/2027 (sáb). Conta: abertura em 2/2 + 60 dias = 3/4 (fevereiro de 28 dias nos dois anos).
  - Sem data: ldo-elaboracao e loa-elaboracao (sem prazo na norma), ldo-sancao e loa-sancao (15 dias úteis do recebimento), parecer-previo-tcu (60 dias do recebimento), parecer-cmo-contas (40 dias do recebimento do parecer), julgamento-das-contas (sem prazo).
