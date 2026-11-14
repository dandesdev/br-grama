---
id: f3-calendario-orcamento-legislativo
escopo: "Fase 3 (D55): datas de 2026 e 2027 nas etapas do ciclo orçamentário, da sessão legislativa, da prestação de contas e dos relatórios fiscais"
status: coletada
iniciada_em: 2026-11-14
concluida_em: 2026-11-14
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
- 2026-11-14 — gravado proc:execucao-da-despesa com datas (verificacao → coletado):
  - restos-a-pagar: 31/12/2026 (qui) e 31/12/2027 (sex) (Lei 4.320, arts. 34 e 36).
  - limitacao-de-empenho: janelas "nos trinta dias subsequentes" ao fim dos bimestres 1 a 5 (LRF, art. 9º): 1º/3–30/3, 1º/5–30/5, 1º/7–30/7, 1º/9–30/9 e 1º/11–30/11, em 2026 e 2027. Conta: fim do bimestre + 1 dia até fim + 30 dias. Não datei a janela depois do 6º bimestre (1º a 30/1 do ano seguinte) porque cairia no exercício seguinte, quando o orçamento a limitar já se encerrou; é inferência minha, para o revisor. A etapa é condicional (só se a receita não comportar as metas), mas o momento é fixado pela regra, por isso entrou com a nota "se a avaliação apontar risco às metas".
  - Sem data: programacao-financeira (30 dias da publicação dos orçamentos, fato incerto), empenho, liquidacao, pagamento e despesa-paga (sem prazo).
- 2026-11-14 — gravado proc:relatorios-fiscais (novo, forma ciclo; etapas rreo, rgf, fiscalizacao). Conta: fim do período + 30 dias corridos (LRF, art. 52, caput, e art. 55, § 2º; CF, art. 165, § 3º).
  - rreo: 30/1/2026 (6º bim. 2025, sex), 30/3 (seg), 30/5 (sáb), 30/7 (qui), 30/9 (qua), 30/11/2026 (seg); 30/1/2027 (6º bim. 2026, sáb), 30/3 (ter), 30/5 (dom), 30/7 (sex), 30/9 (qui), 30/11/2027 (ter). O do 6º bimestre de 2027 vence em 30/1/2028, fora da janela.
  - rgf: 30/1/2026 (3º quadr. 2025, sex), 30/5/2026 (sáb), 30/9/2026 (qua), 30/1/2027 (sáb), 30/5/2027 (dom), 30/9/2027 (qui). O do 3º quadrimestre de 2027 vence em 30/1/2028.
  - A LRF não diz o que fazer quando o prazo cai em fim de semana; ficou a data da regra (nota com o dia da semana). Nenhuma dessas datas cai em feriado nacional de 2026.
  - fiscalizacao: sem data (LRF, art. 59, sem prazo).
- 2026-11-14 — gravado proc:sessao-legislativa (novo, forma ciclo; etapas posse-da-legislatura, eleicao-das-mesas, abertura, primeiro-periodo, recesso, segundo-periodo, convocacao-extraordinaria). Datas:
  - posse-da-legislatura: 1º/2/2027 (seg) (CF, art. 57, § 4º; RICD, art. 4º; RISF, art. 3º, IV, a).
  - eleicao-das-mesas: 1º/2/2027 (Câmara, RICD, art. 5º; Senado sem data fixa, RISF, art. 3º, V). A de 3º ano é em 2029.
  - abertura: 2/2/2026 (seg) e 2/2/2027 (ter); dias úteis, sem transferência do § 1º.
  - primeiro-periodo: 2/2–17/7/2026 e 2/2–17/7/2027 (17/7/2027 é sábado; data da regra).
  - segundo-periodo: 1º/8–22/12/2026 (1º/8 é sábado; § 1º transfere a reunião para seg 3/8) e 1º/8–22/12/2027 (domingo; reunião em seg 2/8). 22/12/2026 é terça e 22/12/2027 é quarta.
  - recesso: 1º/1–1º/2/2026 (iniciado em 23/12/2025, cortado na janela), 18/7–31/7/2026, 23/12/2026–1º/2/2027, 18/7–31/7/2027, 23/12–31/12/2027 (segue até 1º/2/2028). Os de julho só se a LDO for aprovada (art. 57, § 2º).
  - convocacao-extraordinaria: sem data (CF, art. 57, § 6º, fato incerto).
  - Achado: a Res. 3/1990-CN, art. 3º, ainda define período legislativo com as datas anteriores à EC 50/2006 (15/2 a 30/6 e 1º/8 a 15/12); a edição do Senado tem nota de rodapé remetendo à EC 50. Registrado nas notas do processo; não é aviso porque a CF prevalece e a fonte não diverge sobre o fato.
- 2026-11-14 — outros processos com etapa de data fixa (Grep de prazos com nome de mês em dados/processos), gravados com datas (verificacao → coletado):
  - proc:atualizacao-dos-documentos-de-defesa-nacional (ciclo), etapa elaboracao: 1º/7/2026 (qua), início da atualização fixado pelo Decreto 12.725/2025, art. 3º (conferido no Planalto em 2026-11-14 via WebFetch; o curl para guardar cópia falhou). Etapa encaminhamento sem data: de quatro em quatro anos desde 2012, o próximo é 2028.
  - proc:orcamento-do-cgibs, etapa proposta: 31/7/2026 (sex) e 31/7/2027 (sáb; data da regra) (LC 227/2026, art. 47, caput, em vigor desde a publicação, art. 182, III). Manifestação dos Legislativos e nova proposta contam da publicação efetiva: sem data.
  - proc:apuracao-do-indice-de-participacao-dos-municipios-no-icms, etapas publicacao: 30/6/2026 (ter) e 30/6/2027 (qua) (LC 63/1990, art. 3º, § 6º); aplicacao: 1º/1/2026 e 1º/1/2027 (art. 3º, § 3º). Impugnação (30 dias da publicação) e julgamento (60 dias da primeira publicação): sem data.
  - proc:pagamento-de-precatorio, etapas comunicacao: 1º/2/2026 (dom; data da regra) e 1º/2/2027 (seg) (CF, art. 100, § 5º, redação da EC 136/2025, em vigor desde 10/9/2025, sem regra de transição para o corte); pagamento: 31/12/2026 (qui) e 31/12/2027 (sex).
  - Fora: proc:julgamento-de-contas-pelo-tcu (julgamento até o fim do exercício seguinte ao da apresentação, que varia por processo), proc:eleicao-geral e processos eleitorais (tarefa f3-calendario-eleicoes-mandatos).
- 2026-11-14 — validação limpa (npm run -s validar: nenhum erro). Status → coletada.
- Resumo: 10 processos com datas. Editados: proc:ciclo-orcamentario (10 etapas), proc:execucao-da-despesa (2), proc:atualizacao-dos-documentos-de-defesa-nacional (1), proc:orcamento-do-cgibs (1), proc:apuracao-do-indice-de-participacao-dos-municipios-no-icms (2), proc:pagamento-de-precatorio (2). Criados: proc:relatorios-fiscais (2 de 3 etapas datadas), proc:sessao-legislativa (6 de 7 etapas datadas), norma:portaria-mgi-11460-2025. Nenhum texto de etapa existente foi mudado; a conta não revelou erro nos prazos já gravados (15/4, 17/7, 31/8, 22/12, 1º a 20/10, 20/11, maio/setembro/fevereiro conferem com ADCT, art. 35, § 2º, CF, art. 57, Res. 1/2006-CN, arts. 82 e 106, e LRF, art. 9º, § 4º).
- Para o revisor: (1) limitacao-de-empenho sem a janela de janeiro (depois do 6º bimestre), por inferência de que o exercício já acabou; (2) loa-parecer-cmo datado como janela 21/10 a 15/12 pela soma dos prazos máximos do art. 82, V a XIV, em dias corridos; (3) 17/7/2027 (sábado) ficou como data da regra, embora o art. 57, § 1º, fale em transferir "as reuniões marcadas para essas datas"; (4) a Res. 3/1990-CN, art. 3º, ainda tem os períodos anteriores à EC 50/2006; (5) as datas são para a União; estados e municípios seguem os próprios regimentos e constituições, exceto LRF e LC 63; (6) a Portaria MGI 11.460/2025 não tem cópia no Wayback (pedido devolveu 520).
- Propostas (não editei esquema/ nem docs/): (a) o Banco Central apresenta, em até 90 dias depois de cada semestre, a avaliação das políticas monetária, creditícia e cambial (LRF, art. 9º, § 5º; daria 28/9/2026 e 31/3/2026 e 2027); hoje está só no detalhes de avaliacao-das-metas-fiscais e poderia virar etapa com data; (b) os duodécimos até o dia 20 de cada mês (CF, art. 168) dariam 24 datas na etapa execucao; deixei de fora para não encher o Calendário; (c) RISF, art. 2º, parágrafo único: nos 60 dias antes das eleições gerais o Senado funciona pelo Regimento Comum (5/8 a 3/10/2026), candidato a nota na sessão legislativa ou na eleição geral; (d) a audiência da CMO com o relator do parecer prévio do TCU "no início dos trabalhos do segundo período" (Res. 1/2006-CN, art. 115, parágrafo único) não tem data fixa; (e) um campo `tipo` na data (prazo final, janela, período) ajudaria o Calendário a distinguir "até X" de "de X a Y"; hoje a distinção está só na nota e na presença de `ate`.
