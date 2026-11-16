---
id: f5-traducao-cargos-processos
escopo: "Fase 5 (D66): nome e resumo em inglês de cargos, processos (com a ação de cada etapa) e objetos"
status: pendente
depende_de: []
---

Leia `CLAUDE.md`, `docs/decisoes.md` (D11, D27, D51, D63, D65 e D66) e `docs/modelo-de-dados.md`.

Formato das sobreposições (D66): `i18n/en/entidades/<pasta>.json`, um objeto `{ "<id>": { "nome": "...", "resumo": "...", "etapas": { "<id da etapa>": "<ação em inglês>" } } }`, com as chaves na ordem dos arquivos de `dados/<pasta>/` (ordem alfabética do id). `etapas` só em processos. Traduza o sentido, em frases curtas e claras para um leitor estrangeiro sem formação jurídica; não acrescente informação que o original não tem; mantenha números, artigos e siglas. Se o texto em português parecer errado, não corrija: anote no diário.

## Glossário (use sempre estes termos)

| Português | Inglês |
|---|---|
| União / estados / Distrito Federal / municípios | Federal Government (the Union, quando o texto fala do ente) / states / Federal District / municipalities |
| Poder Executivo / Legislativo / Judiciário | Executive / Legislative / Judicial Branch |
| Presidente da República | President of the Republic |
| Ministério / Ministro de Estado | Ministry / Minister of State |
| Secretaria / Secretário | Secretariat / Secretary |
| Congresso Nacional / Câmara dos Deputados / Senado Federal | National Congress / Chamber of Deputies / Federal Senate |
| Assembleia Legislativa / Câmara Municipal | State Legislative Assembly / Municipal Council |
| Supremo Tribunal Federal / Superior Tribunal de Justiça | Federal Supreme Court / Superior Court of Justice |
| Tribunal Superior Eleitoral / do Trabalho / Superior Tribunal Militar | Superior Electoral Court / Superior Labour Court / Superior Military Court |
| Tribunal Regional Federal / Tribunal de Justiça | Federal Regional Court / State Court of Justice |
| Conselho Nacional de Justiça / do Ministério Público | National Council of Justice / National Council of the Public Prosecution Service |
| Ministério Público (da União, Federal, estadual) | Public Prosecution Service (of the Union, Federal, state) |
| Procurador-Geral da República | Prosecutor General of the Republic |
| Advocacia-Geral da União | Office of the Attorney General of the Union |
| Defensoria Pública | Public Defender's Office |
| Tribunal de Contas da União | Federal Court of Accounts |
| Controladoria-Geral da União | Office of the Comptroller General |
| autarquia / fundação pública / empresa pública / sociedade de economia mista | autonomous agency (autarquia) / public foundation / state-owned company / mixed-capital company |
| agência reguladora | regulatory agency |
| conselho / comitê / comissão / colegiado | council / committee / commission / collegiate body |
| medida provisória / lei complementar / emenda constitucional | provisional measure / complementary law / constitutional amendment |
| decreto legislativo / resolução | legislative decree / resolution |
| sanção / veto / promulgação | assent (sanction) / veto / promulgation |
| quórum / maioria absoluta / maioria simples | quorum / absolute majority / simple majority |
| mandato / posse / nomeação | term of office / taking office / appointment |
| intervenção federal / estado de defesa / estado de sítio | federal intervention / state of defence / state of siege |

Siglas e nomes próprios de leis ficam como estão (STF, Lei 8.112/1990). Quando o órgão tem nome oficial em inglês no próprio site (ex.: o STF usa "Federal Supreme Court"), use esse. Inglês americano ou britânico: britânico (labour, defence), de forma consistente.

## Entregáveis

- [ ] `i18n/en/entidades/cargos.json` (214 cargos).
- [ ] `i18n/en/entidades/processos.json` (78 processos, com `etapas`: a `acao` de cada uma das 655 etapas).
- [ ] `i18n/en/entidades/objetos.json` (254 objetos).

## Diário
