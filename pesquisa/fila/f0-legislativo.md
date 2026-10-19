---
id: f0-legislativo
escopo: "Fatia 0: as demais espécies normativas do art. 59 da CF e os instrumentos de fiscalização do Congresso"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-17
concluida_em: null
---

## Entregáveis

Processos (forma "linha", como `proc:lei-ordinaria`), cada um com o objeto que produz:
- [ ] `proc:emenda-constitucional` → `obj:emenda-constitucional` (art. 60, inclusive limites: cláusulas pétreas, circunstâncias que impedem emenda, reapresentação)
- [ ] `proc:lei-complementar` → `obj:lei-complementar` (diferenças em relação à lei ordinária: quórum, matérias; reaproveite a lógica de `proc:lei-ordinaria` sem copiar etapas desnecessárias, citando o que é igual)
- [ ] `proc:medida-provisoria` → `obj:medida-provisoria` (art. 62: comissão mista, prazos de 60+60 dias, trancamento de pauta, conversão, rejeição, perda de eficácia, decreto legislativo sobre os efeitos, vedações)
- [ ] `proc:lei-delegada` → `obj:lei-delegada` (art. 68)
- [ ] `obj:decreto-legislativo` e `obj:resolucao` (art. 59, VI e VII), com as relações de quem os edita e sobre o quê, se a CF disser
- [ ] Relações do grupo "normas" que esses processos exigem (propõe, delibera, promulga etc.)

Fiscalização pelo Congresso:
- [ ] CPIs (art. 58, § 3º): como órgão tipo `conjunto` ou `colegiado` dentro das Casas, com requisitos (1/3 dos membros, fato determinado, prazo certo) e o que fazem com as conclusões
- [ ] Convocação de Ministros e pedidos de informação (art. 50) e a Comissão representativa do recesso (art. 58, § 4º)
- [ ] Competências exclusivas do Congresso (art. 49) e privativas da Câmara (art. 51) e do Senado (art. 52) que ainda não estão no mapa, como relações para cargos, órgãos ou objetos. Priorize as que ligam Poderes (ex.: autorizar o Presidente a se ausentar do país, aprovar tratados, sustar atos normativos do Executivo, aprovar nomeações). Matérias legislativas gerais (arts. 22 a 24) ficam para a matriz de competências; não as modele aqui.

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
