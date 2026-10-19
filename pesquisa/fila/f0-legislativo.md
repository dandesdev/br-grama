---
id: f0-legislativo
escopo: "Fatia 0: as demais espécies normativas do art. 59 da CF e os instrumentos de fiscalização do Congresso"
status: coletada
depende_de: []
iniciada_em: 2026-10-17
concluida_em: 2026-10-19
---

## Entregáveis

Processos (forma "linha", como `proc:lei-ordinaria`), cada um com o objeto que produz:
- [x] `proc:emenda-constitucional` → `obj:emenda-constitucional` (art. 60, inclusive limites: cláusulas pétreas, circunstâncias que impedem emenda, reapresentação)
- [x] `proc:lei-complementar` → `obj:lei-complementar` (diferenças em relação à lei ordinária: quórum, matérias; reaproveite a lógica de `proc:lei-ordinaria` sem copiar etapas desnecessárias, citando o que é igual)
- [x] `proc:medida-provisoria` → `obj:medida-provisoria` (art. 62: comissão mista, prazos de 60+60 dias, trancamento de pauta, conversão, rejeição, perda de eficácia, decreto legislativo sobre os efeitos, vedações)
- [x] `proc:lei-delegada` → `obj:lei-delegada` (art. 68)
- [x] `obj:decreto-legislativo` e `obj:resolucao` (art. 59, VI e VII), com as relações de quem os edita e sobre o quê, se a CF disser
- [x] Relações do grupo "normas" que esses processos exigem (propõe, delibera, promulga etc.)

Fiscalização pelo Congresso:
- [x] CPIs (art. 58, § 3º): como órgão tipo `conjunto` ou `colegiado` dentro das Casas, com requisitos (1/3 dos membros, fato determinado, prazo certo) e o que fazem com as conclusões
- [x] Convocação de Ministros e pedidos de informação (art. 50) e a Comissão representativa do recesso (art. 58, § 4º)
- [x] Competências exclusivas do Congresso (art. 49) e privativas da Câmara (art. 51) e do Senado (art. 52) que ainda não estão no mapa, como relações para cargos, órgãos ou objetos. Priorize as que ligam Poderes (ex.: autorizar o Presidente a se ausentar do país, aprovar tratados, sustar atos normativos do Executivo, aprovar nomeações). Matérias legislativas gerais (arts. 22 a 24) ficam para a matriz de competências; não as modele aqui.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-executivo: `org:casa-civil` e os demais ministérios (`org:ministerio-*`), `org:conselho-da-republica`, `org:conselho-de-defesa-nacional`, `obj:decreto` (decreto do Executivo)
- f0-judiciario: `org:cnj`, tribunais (`org:trf-*`, `org:trt-*`, `org:tre-*`, `org:tj-*`)

## Diário
- 2026-10-17 22:15 — iniciada; lidos CLAUDE.md, decisões, modelo de dados, protocolo, vocabulários e o modelo proc:lei-ordinaria
- 2026-10-17 22:22 — gravado obj:emenda-constitucional
- 2026-10-17 22:38 — gravados norma:resolucao-cn-1-2002, norma:resolucao-cn-3-1990, norma:lei-1579-1952, norma:lei-10001-2000, fonte:stf-informativo-657-adi-4029, fonte:stf-informativo-870-ms-27931 (Wayback deu 429: arquivo null nas URLs novas; tentar de novo)
- 2026-10-18 08:24 — retomada após renovação da cota; git status e validação conferidos: as 7 entidades gravadas estão no commit f71c039 e sem erro
- 2026-10-18 08:40 — gravados obj:lei-complementar, obj:medida-provisoria, obj:lei-delegada, obj:decreto-legislativo, obj:resolucao
- 2026-10-18 08:50 — gravado org:arquetipo-estadual-assembleia-legislativa (não existia; criado para ser ator da iniciativa de PEC, art. 60, III)
- 2026-10-18 09:05 — gravado proc:emenda-constitucional (8 etapas, sem regimes)
- 2026-10-18 09:25 — gravado proc:lei-complementar (10 etapas e o regime de urgência; etapas iguais às da lei ordinária condensadas, com remissão)
- 2026-10-18 09:55 — gravados norma:ec-32-2001, fonte:agencia-senado-comissoes-mp-2025 e proc:medida-provisoria (14 etapas e o regime de trancamento de pauta)
- 2026-10-18 10:15 — gravado proc:lei-delegada (10 etapas)
- 2026-10-19 07:45 — retomada; tudo até proc:lei-delegada está no commit ef216a9 e valida sem erro (o ajuste da MP com a EC 32 já tinha sido gravado em 2026-10-18 09:55). Próximo: relações do grupo normas e competências dos arts. 49 a 52
- 2026-10-19 07:55 — gravadas 10 relações de proc:emenda-constitucional (propõe: deputados, senadores, Presidente, Assembleias; delibera: CCJC, Plenário da Câmara, CCJ do Senado, Plenário do Senado; promulga: Mesas da Câmara e do Senado)
- 2026-10-19 08:10 — gravadas 25 relações de proc:lei-complementar (13 propõe; 4 delibera; sanciona; veta; aprecia-veto; 3 promulga; 2 publica)
- 2026-10-19 08:15 — corrigido proc:emenda-constitucional (etapa iniciativa) e rel:assembleias-legislativas-propoem-emenda-constitucional: pelo RISF, art. 212, II, a PEC das Assembleias também pode começar no Senado; só a do Presidente vai à Câmara (inferido do RICD, art. 201, I, e do RISF, art. 212)
- 2026-10-19 08:35 — gravadas 18 relações de MP, lei delegada, decreto legislativo e resolução (propõe, delibera, promulga)
- 2026-10-19 08:55 — gravados org:cpis-da-camara-dos-deputados, org:cpis-do-senado-federal, org:cpmis-do-congresso-nacional (conjuntos) e org:comissao-representativa-do-congresso-nacional (colegiado)
- 2026-10-19 09:15 — gravado proc:comissao-parlamentar-de-inquerito (7 etapas; não estava nos entregáveis, criado para ligar CPIs a MP, AGU, TCU e Executivo)
- 2026-10-19 09:40 — gravados obj:concessao-de-radiodifusao e 18 relações de competência (arts. 49 a 52): tratados, autorizações ao Presidente e ao Vice, intervenção/defesa/sítio, sustação de decretos e lei delegada, rádio e TV, Conselho da República (Câmara e Senado), Senado aprova STJ, TST, STM e PGR, Senado julga PGR e conselheiros do CNJ, suspensão de lei inconstitucional, convocação de ministros (Câmara e Senado), Comissão Representativa
- 2026-10-19 09:45 — validação: 5 erros esperados de referência a ids da f0-executivo ainda não gravados (obj:decreto, org:conselho-da-republica, obj:tratado-internacional); nenhum outro erro nos arquivos desta tarefa
- 2026-10-19 09:55 — coletada. Wayback continua com erro 429: arquivo null em norma:lei-1579-1952, norma:lei-10001-2000, norma:ec-32-2001, fonte:stf-informativo-657-adi-4029, fonte:stf-informativo-870-ms-27931, fonte:agencia-senado-comissoes-mp-2025. Não criados (sem termo no vocabulário ou fora de escopo): aprovação da exoneração do PGR (art. 52, XI), Banco Central e chefes de missão diplomática (art. 52, III, d, e IV), Comandantes (art. 52, I), subsídios (art. 49, VII e VIII), operações de crédito e dívida (art. 52, V a IX). Para a f0-funcoes-essenciais: rel:senado-aprova-indicacao-procurador-geral-da-republica e rel:senado-julga-procurador-geral-da-republica já existem
