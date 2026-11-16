---
id: f5-traducao-cargos-processos
escopo: "Fase 5 (D66): nome e resumo em inglês de cargos, processos (com a ação de cada etapa) e objetos"
status: concluida
depende_de: []
iniciada_em: 2026-11-16
concluida_em: 2026-11-16
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

- [x] `i18n/en/entidades/cargos.json` (214 cargos).
- [x] `i18n/en/entidades/processos.json` (78 processos, com `etapas`: a `acao` de cada uma das 655 etapas).
- [x] `i18n/en/entidades/objetos.json` (254 objetos).

## Diário
- 2026-11-16: iniciada. Rascunhos em `C:/Users/DELL/scratch-brgram/f5-cargos-processos/` (`extrair.py` gera `pt-*.txt`; os lotes `en-<pasta>-N.txt` são juntados por `montar.py`, que confere ids e etapas e grava `i18n/en/entidades/<pasta>.json` com chaves em ordem alfabética).
- 2026-11-16, lote 1 (cargos, 214 de 214): gravado `i18n/en/entidades/cargos.json`. Termos fixados: Corregedor/Corregedoria → Inspector / Inspectorate (Corregedor Nacional de Justiça → National Inspector of Justice); Ministro de tribunal → Justice (do TCU → Minister); Desembargador → appellate judge; juiz de direito → state judge; concurso público → competitive public examination; lista tríplice → three-name list; Ouvidor → Ombudsman; Delegado de Polícia → Police Chief; Presidente/Diretor do Banco Central → Governor / Deputy Governor (nomes que o BCB usa em inglês); Subprocurador-Geral → Deputy Prosecutor General e Vice-Procurador-Geral → Vice-Prosecutor General; Mesa → Executive Board. Cargos agregados e arquétipos (D11, D51) ficaram genéricos. Nenhum texto em português pareceu errado.
- 2026-11-16, lote 2 (objetos, 254 de 254): gravado `i18n/en/entidades/objetos.json`. Termos: seguridade social → social welfare (seguridade social), previdência → social security; precatório, mandado de segurança, mandado de injunção, súmula vinculante e reclamação levam o termo em português entre parênteses; tributos com sigla mantêm a sigla (ICMS, ISS, IPI...); diploma eleitoral → certificate of election; licitação → public tender. Nenhum texto em português pareceu errado.
- 2026-11-16, lote 3 (processos, 46 de 78, 367 etapas, de `acao-de-investigacao-judicial-eleitoral` a `intervencao-federal`): gravado em `i18n/en/entidades/processos.json`. Termos: crime de responsabilidade → impeachable offence; denúncia → indictment (do MP) ou complaint (de cidadão); relator → rapporteur; Plenário → Full Court (tribunais) / Plenary (Casas); empenho / liquidação → commitment / verification; restos a pagar → outstanding payables; lista tríplice → three-name list. Datas "5/1" passaram a "5 January". Nenhum texto em português pareceu errado.
- 2026-11-16, lote 4 (processos, 78 de 78, 655 etapas): completos `processos.json`. Ações de etapa sem sujeito no original (ex.: "Apresenta o projeto de lei", "Sanciona o projeto") ficaram sem sujeito também em inglês ("Introduces the bill", "Assents to the bill"), porque o ator está em `atores` e pôr o sujeito seria acrescentar informação. Datas no formato dia/mês (5/1, 2/2 a 17/7) foram escritas por extenso (5 January, 2 February to 17 July) para não serem lidas como mês/dia; "20 mil" → "20,000"; "1º ano" e "1º domingo" → "first".
- 2026-11-16: conferência final por `montar.py` e por script de números: 214 cargos, 78 processos com 655 etapas e 254 objetos, todos os ids existem em `dados/`, nenhum faltando, nenhum id ou etapa inexistente; os números de cada texto batem com o português (só mudam as datas e o "20 mil" acima). UTF-8 sem BOM, `ensure_ascii=False`, indentação 2, chaves em ordem alfabética, sem ``. Nenhum texto em português pareceu errado. Concluída.
