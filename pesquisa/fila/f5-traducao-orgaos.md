---
id: f5-traducao-orgaos
escopo: "Fase 5 (D66): nome e resumo em inglês dos órgãos"
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

- [x] `i18n/en/entidades/orgaos.json` com nome e resumo de todos os arquivos de `dados/orgaos/` (662).

## Diário

- 2026-11-16: iniciada. Rascunhos em `C:/Users/DELL/scratch-brgram/f5-orgaos/` (`loteN.txt` com o português, `loteN.json` com id → [nome, resumo], `merge.py` junta, confere ids e grava `i18n/en/entidades/orgaos.json`).
- 2026-11-16: lote 1 (abin a cae-senado, 100 órgãos) gravado. Termos fixados: comissão de Casa legislativa → "Committee" (uso do próprio Congresso e de todo parlamento de língua inglesa; "commission" fica para as demais comissões, ex.: Comissão Intergestores); Corregedoria/Corregedor → "Office of the Inspector General"/"Inspector General"; Ouvidoria → "Ombudsman's Office"; autarquia → "autonomous agency"; desembargador → "appellate judge"; procurador de justiça → "senior prosecutor"; promotor de justiça → "prosecutor (promotor de justiça)"; Polícia Penal → "Penal Police"; Corpo de Bombeiros Militar → "Military Fire Brigade"; Prefeitura → "Mayor's Office (Prefeitura)"; vereador → "councillor"; Cade → "Administrative Council for Economic Defence" (grafia britânica do nome que o Cade usa).
- 2026-11-16: lote 2 (caixa-economica-federal a comissoes-mistas-do-congresso-nacional, 100) gravado. Regra de "comissão" refinada: comissão interna de uma instituição (Casa legislativa, tribunal) → "Committee"; comissão mista → "Joint Committee"; comissão intergovernamental ou autônoma (Intergestores, Ética Pública, Anistia, CMRI) → "Commission". Lista tríplice/sêxtupla → "three-name list"/"six-name list"; Súmula fica "Súmula" com explicação na primeira menção; ministro de tribunal → "justice".
- 2026-11-16: lote 3 (comissoes-permanentes-de-integracao-ensino-servico a csp-senado, 100) gravado. Conselho Superior → "Higher Council" (inclusive CSJT); Comitê → "Committee"; Mesa → "Steering Board"; CPI → "parliamentary committee of inquiry"; estágio confirmatório → "probationary period"; Corregedoria Parlamentar → "Parliamentary Inspectorate".
- 2026-11-16: lote 4 (cspcco-camara a oab, 100) gravado. Ministérios: "Ministry of ..." com resumo "Responsible for ..."; Justiça Federal/do Trabalho/Eleitoral/Militar da União → "Federal Justice"/"Labour Justice"/"Electoral Justice"/"Military Justice of the Union" (ramo); juizados especiais → "special courts"; nomes próprios de federações partidárias, Caixa, Colégio Pedro II e Instituto Serzedello Corrêa ficam em português.
- 2026-11-16: lote 5 (organismos-internacionais a sistema-brasileiro-de-inteligencia, 100) gravado. Nomes de partidos ficam em português; "número de legenda" → "ballot number"; datas no formato do original (dd/mm/aaaa, que é também o britânico); Turma → "Panel", Seção → "Section", Plenário → "Plenary", Corte Especial → "Special Court"; ministro do TCU → "minister" (ministro de tribunal judicial → "justice"). Nota: os resumos de PSB, PT, Republicanos e União Brasil têm outro molde (registro e número de legenda) que os demais partidos (representação na Câmara em 01/10/2026); não é erro, só falta de uniformidade.
- 2026-11-16: lotes 6 e 7 (sistema-de-administracao-financeira-federal a zonas-eleitorais, 162) gravados. Os 106 TCEs, TJs, TREs, TRFs e TRTs de texto padronizado saíram de moldes por expressão regular (`gen/padroes.py`), com nomes de estado e sede em português (ex.: "Court of Accounts of the State of Bahia", "State Court of Justice of Acre", "Regional Electoral Court of Pará", "Federal Regional Court of the 1st Region", "Regional Labour Court of the 15th Region"); os casos fora do molde (TCMs, TJDFT, TJMs, TRE-DF, TRT-2, TRT-15) foram traduzidos à mão.
- 2026-11-16: conferência final: 662 de 662 ids, nenhum id inexistente nem duplicado, chaves em ordem alfabética, sem , todos os números do português presentes no inglês (2.641 → 2,641). Siglas mantidas, com quatro exceções deliberadas: "MP"/"MPs"/"TJ"/"TJs" usados como abreviação genérica viraram "Public Prosecution Service"/"State Court of Justice"; TI → IT; ONU/OEA/OMC → UN/OAS/WTO (siglas inglesas dos organismos); "CF" no resumo dos Territórios virou "The Constitution".
- 2026-11-16: textos em português a revisar (não corrigidos): `org:cesp-senado` tem "sobre normas gerais sobre esporte" (preposição repetida); os resumos de PSB, PT, Republicanos e União Brasil seguem outro molde que os demais partidos. Concluída.
