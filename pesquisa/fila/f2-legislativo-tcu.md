---
id: f2-legislativo-tcu
escopo: "Fase 2 (D49): regimentos da Câmara, do Senado e do Congresso, e Lei Orgânica do TCU"
status: coletada
depende_de: [f0-legislativo, f0-controle]
iniciada_em: 2026-10-28
concluida_em: 2026-10-28
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Normas

- Regimento Interno da Câmara dos Deputados (Resolução 17/1989): `norma:ricd`
- Regimento Interno do Senado Federal: `norma:risf`
- Regimento Comum do Congresso Nacional: `norma:rccn`; Resolução CN 1/2006 (CMO): `norma:resolucao-cn-1-2006`
- Lei 8.443/1992 (Lei Orgânica do TCU): `norma:lei-8443-1992`; o Regimento Interno do TCU, se ajudar a localizar a estrutura

Os regimentos são longos e cheios de regras de tramitação. Classifique como `fora` o detalhe de tramitação que não cria órgão, cargo nem etapa; classifique como `coberto` o que já está nas etapas de `proc:lei-ordinaria` e dos demais processos legislativos (confira em `dados/processos/`).

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada norma (seção "Cobertura").
- [x] Câmara: Mesa e seus cargos, Colégio de Líderes, lideranças (agregado), Procuradoria Parlamentar, Ouvidoria, Corregedoria, Secretaria da Mulher e os demais órgãos que o RICD cria; as **comissões permanentes** (D10: todas, com o número de membros quando o regimento ou ato da Mesa fixar), como `org:` dentro de `org:comissoes-da-camara-dos-deputados`.
- [x] Senado: Mesa, lideranças, Corregedoria, Ouvidoria, Procuradoria da Mulher e os demais órgãos do RISF; as comissões permanentes dentro de `org:comissoes-do-senado-federal`.
- [x] Congresso: Mesa do Congresso (já existe; confira a composição) e as comissões mistas permanentes (a CMO e a CCAI existem; procure as demais, como a de Mudanças Climáticas e a do Mercosul, que têm resolução própria).
- [x] Etapas que faltam nos processos legislativos (ex.: urgência regimental, RICD art. 155), só se mudarem o rito; senão, `fora`.
- [x] TCU (Lei 8.443): Plenário, Câmaras, Presidência, Corregedoria, Ministério Público junto ao TCU (`org:mp-junto-ao-tcu` existe) e secretaria; competências da lei que ligam o TCU a outras entidades (D50); processos de tomada de contas especial e de julgamento de contas, se a lei descrever as etapas.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: as comissões citadas nos processos (`org:ccjc-camara`, `org:ccj-senado`, `org:cft-camara`, `org:cmo`, `org:ccai`) e os conselhos de ética já existem.
- Em paralelo: `f2-funcoes-essenciais` (MPU, DPU, AGU) e `f2-executivo`. Não edite entidades dessas áreas.

## Cobertura

Classificação por artigo vigente (D49). Os regimentos foram classificados por capítulo: a tramitação miúda (sessões, discussão, votação, prazos) é `fora`; o que está nas etapas dos processos legislativos (`dados/processos/`) é `coberto`. Cópias em `pesquisa/brutos/planalto-leis/2026-10-28-f2-legislativo-tcu/`. Totais conferidos por script contra a contagem de `scripts/cobertura-leis.ts`.

### RICD (Resolução da Câmara nº 17/1989)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º e 2º | fora | sede e calendário das sessões, já dados pela CF (art. 57) |
| arts. 3º e 4º | coberto | obj:diploma-eleitoral (posse dos deputados) |
| arts. 5º a 8º | coberto | eleição da Mesa: cargo:presidente-da-camara-dos-deputados, cargos de Vice-Presidente, Secretário e Suplente da Câmara e relações elege |
| arts. 9º a 11, 11-A, 12 e 13 | coberto | org:liderancas-da-camara-dos-deputados, cargo:lider-de-partido-ou-bloco-na-camara-dos-deputados, cargo:lider-do-governo-na-camara-dos-deputados, cargos de líder da Maioria e da Minoria |
| arts. 13-A e 13-B | coberto | org:bancada-negra-da-camara |
| arts. 14 a 19 e 19-A | coberto | org:mesa-da-camara-dos-deputados e seus cargos; relações substitui |
| art. 20 | coberto | org:colegio-de-lideres-da-camara |
| arts. 20-A, 20-B, 20-C, 20-D e 20-E | coberto | org:secretaria-da-mulher-da-camara, org:procuradoria-da-mulher-da-camara, org:coordenadoria-dos-direitos-da-mulher-da-camara, org:comite-de-defesa-da-mulher-contra-assedio-da-camara, cargo:procuradora-da-mulher-da-camara-dos-deputados |
| arts. 20-F, 20-G e 20-H | coberto | org:secretaria-da-primeira-infancia-infancia-adolescencia-e-juventude-da-camara |
| art. 21 | coberto | org:procuradoria-parlamentar-da-camara |
| arts. 21-A, 21-B, 21-C e 21-D | coberto | org:ouvidoria-parlamentar-da-camara, cargo:ouvidor-geral-da-camara-dos-deputados |
| art. 21-E | coberto | org:conselho-de-etica-da-camara |
| arts. 21-F e 21-G | coberto | org:corregedoria-parlamentar-da-camara, cargo:corregedor-parlamentar-da-camara-dos-deputados |
| arts. 21-H, 21-I, 21-J, 21-K, 21-L, 21-M, 21-N, 21-O, 21-P, 21-Q, 21-R, 21-S, 21-T, 21-U, 21-V e 21-X | coberto | as oito secretarias da Câmara chefiadas por deputados (relações internacionais, comunicação social, participação e mídias digitais, transparência, empreendedorismo, inovação, prerrogativas e Sistema Interamericano) |
| arts. 22 a 26 | coberto | org:comissoes-da-camara-dos-deputados; número de membros nas comissões permanentes (Ato da Mesa nº 11/2023) |
| arts. 27 a 31 | fora | cálculo da distribuição de vagas e subcomissões e turmas sem poder decisório, criadas e extintas por cada comissão |
| art. 32 | coberto | as 30 comissões permanentes (org:capadr-camara a org:casp-camara, org:ccjc-camara, org:cft-camara) |
| arts. 33 e 34 | coberto | org:comissoes-especiais-da-camara |
| arts. 35 a 37 | coberto | org:cpis-da-camara-dos-deputados, proc:comissao-parlamentar-de-inquerito |
| art. 38 | coberto | org:comissoes-externas-da-camara |
| arts. 39 a 42 | parcial | presidência das comissões (1 Presidente e 3 Vice-Presidentes eleitos pelos pares): falta um cargo agregado de presidente de comissão permanente |
| arts. 43 a 51 | fora | impedimentos, vagas, reuniões, prazos e atas das comissões: detalhe de tramitação |
| arts. 52 a 54 | coberto | proc:lei-ordinaria (prazos, pareceres de admissibilidade e apreciação conclusiva) |
| art. 55 | fora | impedimentos, vagas, reuniões, prazos e atas das comissões: detalhe de tramitação |
| art. 56 | coberto | proc:lei-ordinaria (prazos, pareceres de admissibilidade e apreciação conclusiva) |
| art. 57 | fora | impedimentos, vagas, reuniões, prazos e atas das comissões: detalhe de tramitação |
| art. 58 | coberto | proc:lei-ordinaria (prazos, pareceres de admissibilidade e apreciação conclusiva) |
| art. 59 | fora | impedimentos, vagas, reuniões, prazos e atas das comissões: detalhe de tramitação |
| arts. 60, 61 e 61-A | parcial | fiscalização e controle pelas comissões: competência no detalhes das comissões (art. 24, IX a XI); o rito da proposta de fiscalização e controle não é processo próprio |
| arts. 62 a 64 | fora | impedimentos, vagas, reuniões, prazos e atas das comissões: detalhe de tramitação |
| arts. 65 a 71, 73 a 83 e 85 a 99 | fora | sessões do Plenário, questões de ordem, reclamações e ata: detalhe de tramitação |
| arts. 100 a 108 | fora | proposições, requerimentos, emendas, pareceres e distribuição: detalhe de tramitação |
| art. 109 | coberto | proc:lei-ordinaria, proc:lei-complementar, proc:decreto-legislativo, proc:resolucao (iniciativa) |
| arts. 110 a 114 | fora | proposições, requerimentos, emendas, pareceres e distribuição: detalhe de tramitação |
| arts. 115 e 116 | coberto | rel:camara-convoca-ministro-de-estado |
| arts. 117 a 122 | fora | proposições, requerimentos, emendas, pareceres e distribuição: detalhe de tramitação |
| art. 123 | coberto | proc:lei-ordinaria, proc:lei-complementar (emendas) |
| arts. 124 a 131 | fora | proposições, requerimentos, emendas, pareceres e distribuição: detalhe de tramitação |
| arts. 132 e 133 | coberto | proc:lei-ordinaria (apreciação conclusiva e arquivamento) |
| arts. 134 a 138 | fora | proposições, requerimentos, emendas, pareceres e distribuição: detalhe de tramitação |
| art. 139 | coberto | proc:lei-ordinaria, proc:lei-complementar (distribuição) |
| arts. 140 a 143 | fora | proposições, requerimentos, emendas, pareceres e distribuição: detalhe de tramitação |
| art. 144 | coberto | proc:lei-ordinaria (apreciação preliminar) |
| arts. 145 a 147 | fora | proposições, requerimentos, emendas, pareceres e distribuição: detalhe de tramitação |
| art. 148 | coberto | proc:lei-complementar (turnos) |
| art. 149 | fora | proposições, requerimentos, emendas, pareceres e distribuição: detalhe de tramitação |
| art. 150 | coberto | proc:lei-complementar (interstício) |
| art. 151 | coberto | proc:lei-ordinaria, proc:decreto-legislativo (regimes de tramitação) |
| arts. 152 a 157 | coberto | proc:lei-ordinaria, regime urgencia-regimental-camara |
| arts. 158 a 182 | fora | prioridade, preferência, destaque, prejudicialidade, discussão e votação: detalhe de tramitação |
| art. 183 | coberto | proc:lei-ordinaria, proc:lei-complementar (quórum de votação) |
| arts. 184 a 194 | fora | prioridade, preferência, destaque, prejudicialidade, discussão e votação: detalhe de tramitação |
| arts. 195 a 200 | coberto | proc:lei-ordinaria (redação final) |
| arts. 201 a 203 | coberto | proc:emenda-constitucional |
| art. 204 | coberto | proc:lei-ordinaria, regime urgencia-constitucional |
| arts. 205 a 211 | parcial | rito especial dos projetos de código (comissão especial e prazos próprios): não há regime próprio em proc:lei-ordinaria |
| arts. 212 a 214 | fora | consolidação, matérias periódicas, reforma do regimento e comparecimento de ministro: detalhe de tramitação |
| art. 215 | coberto | rel:camara-toma-contas-presidente; aviso:ricd-tomada-de-contas-cft-ou-cffc |
| art. 216 | fora | consolidação, matérias periódicas, reforma do regimento e comparecimento de ministro: detalhe de tramitação |
| arts. 217 e 218 | coberto | proc:crime-de-responsabilidade-do-presidente |
| arts. 219 a 221 | coberto | rel:camara-convoca-ministro-de-estado |
| arts. 222 e 223 | fora | consolidação, matérias periódicas, reforma do regimento e comparecimento de ministro: detalhe de tramitação |
| arts. 224 e 225 | coberto | org:comissao-representativa-do-congresso-nacional; cargo:membro-cidadao-do-conselho-da-republica |
| arts. 226, 227, 227-A e 228 a 237 | fora | exercício do mandato, licença, vacância, suplência, decoro e prisão: direitos e deveres individuais dos deputados |
| art. 238 | coberto | proc:perda-de-mandato-parlamentar |
| art. 239 | fora | exercício do mandato, licença, vacância, suplência, decoro e prisão: direitos e deveres individuais dos deputados |
| art. 240 | coberto | proc:perda-de-mandato-parlamentar |
| arts. 241 e 242 | fora | exercício do mandato, licença, vacância, suplência, decoro e prisão: direitos e deveres individuais dos deputados |
| art. 243 | coberto | requisitos dos cargos de Ouvidor-Geral, Corregedor e Procuradora da Mulher |
| arts. 244, 250 e 251 | fora | exercício do mandato, licença, vacância, suplência, decoro e prisão: direitos e deveres individuais dos deputados |
| art. 252 | coberto | proc:lei-ordinaria (iniciativa popular) |
| arts. 253 a 261 | fora | petições, audiências públicas e credenciamento: participação da sociedade sem órgão nem etapa |
| art. 262 | coberto | org:diretoria-geral-da-camara; rel:camara-presta-contas-a-tcu |
| arts. 263 e 264 | fora | serviços administrativos, patrimônio e polícia da Câmara: detalhe administrativo |
| art. 265 | coberto | org:diretoria-geral-da-camara; rel:camara-presta-contas-a-tcu |
| arts. 266 e 267 | fora | serviços administrativos, patrimônio e polícia da Câmara: detalhe administrativo |
| arts. 268 e 269 | coberto | org:corregedoria-parlamentar-da-camara |
| art. 270 | fora | serviços administrativos, patrimônio e polícia da Câmara: detalhe administrativo |
| art. 271 | coberto | org:corregedoria-parlamentar-da-camara |
| arts. 272 e 273 | fora | serviços administrativos, patrimônio e polícia da Câmara: detalhe administrativo |
| art. 274 | coberto | org:diretoria-geral-da-camara; rel:camara-presta-contas-a-tcu |
| arts. 275, 276 e 278 | coberto | org:centro-de-estudos-e-debates-estrategicos-da-camara, org:consultoria-legislativa-da-camara |
| arts. 279, 280, 280-A, 281 e 282 | fora | disposições finais (numeração das legislaturas, contagem de prazos, Diário) |

Total: 312 artigos vigentes (320 numerados, menos os arts. 72, 84, 245 a 249 e 277, revogados; o Código de Ética anexo não entra); coberto 120, parcial 14, lacuna 0, fora 178. Cobertura (coberto + fora) / total = 95,5%.

### RISF (Resolução do Senado nº 93/1970)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º a 3º | fora | sede e sessões preparatórias: detalhe sem órgão nem etapa |
| arts. 4º a 31 | fora | posse, exercício, uso da palavra, licença, vacância e suplência: direitos e deveres individuais dos senadores |
| arts. 32 a 35 | coberto | proc:perda-de-mandato-parlamentar |
| arts. 36 a 44, 44-A e 45 | fora | posse, exercício, uso da palavra, licença, vacância e suplência: direitos e deveres individuais dos senadores |
| art. 46 | coberto | org:mesa-do-senado-federal, cargo:presidente-do-senado-federal, cargos de Vice-Presidente, Secretário e Suplente do Senado e relações elege e substitui |
| art. 47 | fora | regras de conduta dos membros da Mesa em sessão: detalhe |
| art. 48 | coberto | org:mesa-do-senado-federal, cargo:presidente-do-senado-federal, cargos de Vice-Presidente, Secretário e Suplente do Senado e relações elege e substitui |
| art. 49 | coberto | proc:lei-ordinaria (distribuição às comissões) |
| arts. 50 e 51 | fora | regras de conduta dos membros da Mesa em sessão: detalhe |
| arts. 52 a 56 | coberto | org:mesa-do-senado-federal, cargo:presidente-do-senado-federal, cargos de Vice-Presidente, Secretário e Suplente do Senado e relações elege e substitui |
| arts. 57 e 58 | fora | regras de conduta dos membros da Mesa em sessão: detalhe |
| arts. 59 e 60 | coberto | org:mesa-do-senado-federal, cargo:presidente-do-senado-federal, cargos de Vice-Presidente, Secretário e Suplente do Senado e relações elege e substitui |
| arts. 61, 62, 64 a 66, 66-A, 66-B e 66-C | coberto | org:liderancas-do-senado-federal, cargos de líder de partido ou bloco, do Governo, da Oposição, da Bancada Feminina, da Maioria e da Minoria |
| arts. 67 a 70 | fora | representação externa do Senado por senador ou comissão: sem órgão permanente |
| arts. 71 e 72 | coberto | org:comissoes-do-senado-federal e as 16 comissões permanentes (org:cae-senado a org:cesp-senado, org:ccj-senado); org:cpis-do-senado-federal |
| art. 73 | fora | subcomissões, suplência, reuniões, audiências, relatoria e pareceres das comissões: detalhe de tramitação |
| art. 74 | coberto | org:comissoes-do-senado-federal e as 16 comissões permanentes (org:cae-senado a org:cesp-senado, org:ccj-senado); org:cpis-do-senado-federal |
| art. 75 | parcial | comissões externas do Senado: sem nó próprio |
| arts. 76 e 77 | coberto | org:comissoes-do-senado-federal e as 16 comissões permanentes (org:cae-senado a org:cesp-senado, org:ccj-senado); org:cpis-do-senado-federal |
| art. 78 | fora | subcomissões, suplência, reuniões, audiências, relatoria e pareceres das comissões: detalhe de tramitação |
| arts. 79 a 82 | parcial | composição, designação e presidência das comissões: falta cargo agregado de presidente de comissão |
| arts. 83 a 88 | fora | subcomissões, suplência, reuniões, audiências, relatoria e pareceres das comissões: detalhe de tramitação |
| art. 89 | parcial | competências do presidente de comissão: sem cargo próprio |
| arts. 90 e 91 | coberto | org:comissoes-do-senado-federal; proc:lei-ordinaria (decisão terminativa) |
| art. 92 | coberto | proc:lei-ordinaria |
| arts. 93 a 96, 96-A, 96-B e 97 | fora | subcomissões, suplência, reuniões, audiências, relatoria e pareceres das comissões: detalhe de tramitação |
| art. 98 | coberto | org:mesa-do-senado-federal (Comissão Diretora) |
| arts. 99, 99-A, 100, 101, 101-A, 102, 102-A, 102-B, 102-C, 102-D, 102-E, 102-F, 103, 104, 104-A, 104-B, 104-C, 104-D, 104-F, 104-G e 104-H | coberto | competências de cada comissão permanente no detalhes; rel:senado-monitora-sistema-tributario-nacional |
| arts. 105 a 108 | fora | subcomissões, suplência, reuniões, audiências, relatoria e pareceres das comissões: detalhe de tramitação |
| art. 109 | coberto | proc:lei-ordinaria |
| arts. 110 a 144 | fora | subcomissões, suplência, reuniões, audiências, relatoria e pareceres das comissões: detalhe de tramitação |
| arts. 145 a 153 | coberto | org:cpis-do-senado-federal, proc:comissao-parlamentar-de-inquerito |
| arts. 154 a 159 e 161 a 211 | fora | sessões do Senado (expediente, ordem do dia, sessões secretas, atas): detalhe de tramitação |
| art. 212 | coberto | proc:emenda-constitucional |
| art. 213 | coberto | obj:decreto-legislativo, obj:resolucao; proc:decreto-legislativo |
| arts. 213-A, 213-B, 213-C, 213-D, 213-E e 214 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| arts. 215 e 216 | coberto | rel:senado-convoca-ministro-de-estado |
| arts. 217 a 222, 224 a 227, 227-A e 228 a 244 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| arts. 245 e 246 | coberto | proc:decreto-legislativo |
| arts. 247 a 253 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| art. 254 | coberto | proc:lei-ordinaria (recurso contra decisão terminativa) |
| arts. 255 a 269 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| art. 270 | coberto | proc:lei-complementar |
| arts. 271 a 284 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| arts. 285 a 288 | coberto | proc:lei-ordinaria, proc:lei-complementar (quóruns de votação) |
| arts. 289 e 290 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| art. 291 | coberto | proc:perda-de-mandato-parlamentar |
| arts. 292 a 327 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| art. 328 | coberto | proc:lei-ordinaria (redação final) |
| arts. 329 a 332, 334 e 335 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| arts. 336 a 338 | coberto | proc:lei-ordinaria, regime urgencia-regimental-senado |
| arts. 339 a 344 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| art. 345 | coberto | proc:lei-ordinaria, regime urgencia-regimental-senado |
| arts. 346 a 353 | fora | proposições, requerimentos, emendas, discussão, votação, preferência, destaque e redação: detalhe de tramitação |
| arts. 354 a 369 | coberto | proc:emenda-constitucional |
| arts. 371 e 372 | fora | detalhe da tramitação de proposta de emenda à Constituição |
| art. 373 | coberto | proc:emenda-constitucional |
| art. 374 | parcial | rito dos projetos de código no Senado: sem regime próprio |
| art. 375 | coberto | proc:lei-ordinaria, regime urgencia-constitucional |
| art. 376 | coberto | proc:decreto-legislativo |
| arts. 377 a 382 | coberto | proc:crime-de-responsabilidade-do-presidente; relações senado-julga-* |
| art. 383 | parcial | rito da arguição e votação de autoridades: as relações aprova-indicacao existem, mas o rito não é processo próprio |
| art. 384 | coberto | rel:senado-elege-conselho-da-republica |
| art. 385 | coberto | rel:senado-aprova-exoneracao-procurador-geral-da-republica |
| arts. 386 a 388 | coberto | rel:senado-suspende-execucao-lei-inconstitucional |
| arts. 389 a 393 | parcial | autorização de operações externas, de crédito e garantias e matérias tributárias do Senado: competência da CF sem relações próprias |
| arts. 393-A, 393-B, 393-C, 393-D, 393-E e 393-F | coberto | rel:senado-monitora-sistema-tributario-nacional |
| arts. 394 a 396 | parcial | autorização de operações externas, de crédito e garantias e matérias tributárias do Senado: competência da CF sem relações próprias |
| arts. 397 a 400 | coberto | rel:senado-convoca-ministro-de-estado |
| art. 400-A | fora | extensão das regras de comparecimento a outras autoridades: detalhe |
| art. 401 | coberto | proc:resolucao (reforma do Regimento) |
| arts. 402 a 413 | fora | questões de ordem, documentos sigilosos e princípios gerais do processo legislativo |

Total: 442 artigos vigentes (448 numerados, menos os arts. 63, 104-E, 160, 223, 333 e 370, revogados); coberto 121, parcial 16, lacuna 0, fora 305. Cobertura (coberto + fora) / total = 96,4%.

### RCCN (Resolução nº 1/1970-CN)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | proc:emenda-constitucional, proc:lei-ordinaria, proc:lei-delegada, rel:congresso-nacional-delibera-resolucao (sessões conjuntas) |
| arts. 2º e 3º | fora | convocação e local das sessões conjuntas: detalhe |
| arts. 4º a 8º | fora | uso da palavra pelas lideranças em sessão conjunta: as lideranças já estão modeladas em cada Casa |
| arts. 9º, 10 e 10-A | coberto | org:comissoes-mistas-do-congresso-nacional; número de membros da CMO, da CMMC, da CMCVM e da CMMIR |
| arts. 10-B e 11 a 20 | fora | funcionamento das comissões mistas: detalhe de tramitação |
| art. 21 | coberto | org:cpmis-do-congresso-nacional, proc:comissao-parlamentar-de-inquerito |
| arts. 22 a 42 | fora | sessões conjuntas, discussão e votação: detalhe de tramitação |
| art. 43 | coberto | apreciação de veto: rel:congresso-nacional-aprecia-veto-lei-ordinaria; proc:lei-delegada |
| arts. 44 a 51 | fora | sessões conjuntas, discussão e votação: detalhe de tramitação |
| art. 52 | coberto | promulgação: obj:resolucao, proc:decreto-legislativo, rel:presidente-do-senado-promulga-* |
| arts. 53 a 71 | fora | sessões solenes (posse do Presidente da República, visitas de chefes de Estado): cerimonial |
| art. 85 | coberto | proc:emenda-constitucional |
| arts. 89, 90, 93, 99, 100, 102 e 103 | fora | tramitação orçamentária, hoje regida pela Resolução nº 1/2006-CN (ver proc:ciclo-orcamentario) |
| arts. 104-A, 106, 106-A, 106-B, 106-C e 106-D | coberto | proc:lei-ordinaria (apreciação do veto) |
| arts. 116 a 125 e 127 | coberto | proc:lei-delegada |
| art. 128 | coberto | proc:resolucao |
| arts. 129 a 139, 139-A e 140 | fora | reforma do Regimento Comum, questões de ordem e regras bicamerais de tramitação: detalhe |
| art. 142 | coberto | proc:lei-ordinaria, rel:comissoes-mistas-propoem-lei-ordinaria |
| art. 143 | fora | reforma do Regimento Comum, questões de ordem e regras bicamerais de tramitação: detalhe |
| arts. 144 a 147 | fora | publicações, galerias, despesas e vigência: detalhe |
| arts. 148 e 149 | fora | vigência expirada (transição esgotada) |
| arts. 150 a 152 | fora | publicações, galerias, despesas e vigência: detalhe |

Total: 123 artigos vigentes (160 numerados, menos 37 revogados pela CF de 1988 e por resoluções; os arts. 148 e 149, de vigência expirada, entram como fora); coberto 27, parcial 0, lacuna 0, fora 96. Cobertura (coberto + fora) / total = 100,0%.

### Resolução nº 1/2006-CN (CMO)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º e 2º | coberto | org:cmo; rel:cmo-delibera-loa, rel:cmo-delibera-ldo, rel:cmo-delibera-ppa |
| arts. 3º e 4º | fora | exercício da competência, instalação e direção da CMO: detalhe de funcionamento |
| art. 5º | coberto | org:cmo (composição) |
| arts. 6º a 11 | fora | exercício da competência, instalação e direção da CMO: detalhe de funcionamento |
| arts. 12 e 13 | coberto | org:cmo (presidência alternada) |
| arts. 14 e 15 | fora | exercício da competência, instalação e direção da CMO: detalhe de funcionamento |
| arts. 16 e 17 | coberto | cargo:relator-geral-do-orcamento |
| arts. 18 a 25 | coberto | os quatro comitês permanentes da CMO (org:comite-de-fiscalizacao-da-execucao-orcamentaria-da-cmo e demais) |
| art. 26 | fora | áreas temáticas, emendas, parecer preliminar, relatores setoriais e votação da LOA: detalhe de tramitação |
| art. 27 | coberto | cargo:relator-geral-do-orcamento (comitês de assessoramento) |
| arts. 28 a 35, 37, 37-A, 38 a 45 e 45-A | fora | áreas temáticas, emendas, parecer preliminar, relatores setoriais e votação da LOA: detalhe de tramitação |
| arts. 46, 47 e 48-A | coberto | org:bancadas-estaduais-no-congresso-nacional, obj:emenda-de-bancada-ao-orcamento |
| art. 49 | coberto | obj:emenda-individual-ao-orcamento |
| arts. 50, 50-A e 51 a 64 | fora | áreas temáticas, emendas, parecer preliminar, relatores setoriais e votação da LOA: detalhe de tramitação |
| arts. 65 e 66 | coberto | cargo:relator-geral-do-orcamento |
| arts. 67 a 81 | fora | áreas temáticas, emendas, parecer preliminar, relatores setoriais e votação da LOA: detalhe de tramitação |
| art. 82 | coberto | proc:ciclo-orcamentario (prazos da LOA) |
| arts. 83 a 91 | fora | tramitação da LDO, do PPA, dos créditos e dos planos e programas: detalhe de tramitação |
| art. 92 | coberto | proc:ciclo-orcamentario, rel:cmo-delibera-ldo |
| art. 93 | fora | tramitação da LDO, do PPA, dos créditos e dos planos e programas: detalhe de tramitação |
| arts. 94 a 98 | coberto | rel:cmo-delibera-ppa |
| arts. 99 a 105 | fora | tramitação da LDO, do PPA, dos créditos e dos planos e programas: detalhe de tramitação |
| arts. 106 a 110 | coberto | rel:cmo-delibera-credito-adicional, proc:ciclo-orcamentario |
| arts. 111 a 114 | fora | tramitação da LDO, do PPA, dos créditos e dos planos e programas: detalhe de tramitação |
| arts. 115 e 116 | coberto | rel:cmo-emite-parecer-contas-presidente, proc:ciclo-orcamentario |
| arts. 117 a 120 | fora | acompanhamento da execução orçamentária: competência já no comitê de fiscalização (art. 22) |
| arts. 121 a 125 | coberto | org:comite-de-obras-com-indicios-de-irregularidades-da-cmo |
| arts. 126 a 132, 132-A e 133 a 147 | fora | diretrizes gerais de apreciação, verificação de presença, destaques e emendas: detalhe de tramitação |
| arts. 148 a 160 | fora | cumprimento das normas orçamentárias e disposições finais e transitórias |
| art. 161 | coberto | norma:resolucao-cn-1-2006 (vigência) |

Total: 164 artigos vigentes (167 numerados, menos os arts. 36, 48 e 69-A, revogados); coberto 42, parcial 0, lacuna 0, fora 122. Cobertura (coberto + fora) / total = 100,0%.

### Lei nº 8.443/1992 (Lei Orgânica do TCU)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | org:tcu (competências no detalhes) e relações tcu-julga-contas-de-gestao, tcu-fiscaliza-uniao, tcu-aprecia-*, tcu-calcula-cotas-*, tcu-aplica-sancoes, tcu-representa-a-* |
| art. 2º | fora | rol de responsáveis, publicação de decisão preliminar, contagem de prazos, instrução e multas na fiscalização e pedido de reexame: detalhe de processo |
| arts. 3º a 5º | coberto | org:tcu (competências no detalhes) e relações tcu-julga-contas-de-gestao, tcu-fiscaliza-uniao, tcu-aprecia-*, tcu-calcula-cotas-*, tcu-aplica-sancoes, tcu-representa-a-* |
| arts. 6º a 12 | coberto | proc:julgamento-de-contas-pelo-tcu (tomada e prestação de contas, tomada de contas especial, decisões, execução e recursos) |
| art. 13 | fora | rol de responsáveis, publicação de decisão preliminar, contagem de prazos, instrução e multas na fiscalização e pedido de reexame: detalhe de processo |
| arts. 14 a 29 | coberto | proc:julgamento-de-contas-pelo-tcu (tomada e prestação de contas, tomada de contas especial, decisões, execução e recursos) |
| art. 30 | fora | rol de responsáveis, publicação de decisão preliminar, contagem de prazos, instrução e multas na fiscalização e pedido de reexame: detalhe de processo |
| arts. 31 a 35 | coberto | proc:julgamento-de-contas-pelo-tcu (tomada e prestação de contas, tomada de contas especial, decisões, execução e recursos) |
| art. 36 | coberto | rel:tcu-emite-parecer-contas-presidente |
| art. 38 | coberto | rel:tcu-auxilia-congresso, rel:tcu-auxilia-cmo, rel:tcu-fiscaliza-uniao |
| art. 39 | coberto | rel:tcu-aprecia-admissao-de-pessoal, rel:tcu-aprecia-aposentadorias-e-pensoes |
| art. 40 | fora | rol de responsáveis, publicação de decisão preliminar, contagem de prazos, instrução e multas na fiscalização e pedido de reexame: detalhe de processo |
| art. 41 | coberto | rel:tcu-fiscaliza-uniao, rel:tcu-fiscaliza-empresas-supranacionais, rel:tcu-fiscaliza-recursos-repassados |
| arts. 42 e 43 | fora | rol de responsáveis, publicação de decisão preliminar, contagem de prazos, instrução e multas na fiscalização e pedido de reexame: detalhe de processo |
| art. 44 | coberto | org:tcu (afastamento cautelar, indisponibilidade de bens, inidoneidade de licitante) |
| art. 45 | coberto | rel:tcu-susta-ato-administrativo, rel:tcu-decide-sobre-contrato |
| art. 46 | coberto | org:tcu (afastamento cautelar, indisponibilidade de bens, inidoneidade de licitante) |
| art. 47 | coberto | proc:julgamento-de-contas-pelo-tcu (conversão em tomada de contas especial) |
| art. 48 | fora | rol de responsáveis, publicação de decisão preliminar, contagem de prazos, instrução e multas na fiscalização e pedido de reexame: detalhe de processo |
| arts. 49 a 52 | coberto | rel:cgu-auxilia-tcu; proc:julgamento-de-contas-pelo-tcu (controle interno e pronunciamento do ministro) |
| arts. 53 a 55 | coberto | proc:denuncia-ao-tcu |
| arts. 56 a 61 | coberto | rel:tcu-aplica-sancoes; proc:julgamento-de-contas-pelo-tcu (condenação e cobrança) |
| art. 62 | coberto | cargo:ministro-do-tcu; relações de escolha e nomeação dos ministros |
| art. 63 | coberto | cargo:ministro-substituto-do-tcu, rel:ministro-substituto-substitui-ministro-do-tcu |
| art. 64 | coberto | org:mp-junto-ao-tcu, cargo:procurador-geral-do-mp-junto-ao-tcu, cargo:membro-do-mp-junto-ao-tcu |
| art. 65 | coberto | org:secretaria-do-tcu |
| art. 66 | coberto | org:plenario-do-tcu |
| art. 67 | coberto | org:primeira-camara-do-tcu, org:segunda-camara-do-tcu |
| art. 68 | fora | sessões, recesso, despesas reservadas, publicações, cooperação com outros tribunais de contas e requisição de serviços: detalhe administrativo |
| arts. 69 e 70 | coberto | cargo:presidente-do-tcu, cargo:vice-presidente-do-tcu, org:corregedoria-do-tcu, relações elege, substitui, exerce e preside |
| arts. 71 a 74 e 76 | coberto | cargo:ministro-do-tcu; relações de escolha e nomeação dos ministros |
| arts. 77 a 79 | coberto | cargo:ministro-substituto-do-tcu, rel:ministro-substituto-substitui-ministro-do-tcu |
| arts. 80 a 84 | coberto | org:mp-junto-ao-tcu, cargo:procurador-geral-do-mp-junto-ao-tcu, cargo:membro-do-mp-junto-ao-tcu |
| arts. 85 a 87 | coberto | org:secretaria-do-tcu |
| art. 88 | coberto | org:instituto-serzedello-correa |
| art. 90 | coberto | rel:congresso-fiscaliza-tcu |
| art. 91 | coberto | rel:tcu-representa-a-ministerio-publico-eleitoral |
| art. 92 | fora | sessões, recesso, despesas reservadas, publicações, cooperação com outros tribunais de contas e requisição de serviços: detalhe administrativo |
| art. 93 | coberto | proc:julgamento-de-contas-pelo-tcu (arquivamento por economia processual; distribuição dos processos) |
| art. 94 | fora | impedimentos de ministros e declaração de bens de ordenadores de despesa: deveres individuais |
| art. 95 | coberto | cargo:ministro-do-tcu; relações de escolha e nomeação dos ministros |
| arts. 96 a 98 | fora | sessões, recesso, despesas reservadas, publicações, cooperação com outros tribunais de contas e requisição de serviços: detalhe administrativo |
| art. 99 | coberto | org:plenario-do-tcu |
| arts. 100 e 101 | fora | sessões, recesso, despesas reservadas, publicações, cooperação com outros tribunais de contas e requisição de serviços: detalhe administrativo |
| art. 102 | coberto | rel:tcu-calcula-cotas-fpe, rel:tcu-calcula-cotas-fpm |
| art. 103 | fora | transição esgotada (comissão da dívida externa do ADCT, aposentadorias de 1988, adaptação de processos, projeto de lei do quadro de pessoal, cargos em extinção) |
| art. 104 | fora | impedimentos de ministros e declaração de bens de ordenadores de despesa: deveres individuais |
| art. 105 | coberto | cargo:ministro-do-tcu; relações de escolha e nomeação dos ministros |
| art. 106 | fora | transição esgotada (comissão da dívida externa do ADCT, aposentadorias de 1988, adaptação de processos, projeto de lei do quadro de pessoal, cargos em extinção) |
| art. 107 | coberto | proc:julgamento-de-contas-pelo-tcu (arquivamento por economia processual; distribuição dos processos) |
| art. 108 | fora | sessões, recesso, despesas reservadas, publicações, cooperação com outros tribunais de contas e requisição de serviços: detalhe administrativo |
| arts. 109 a 111 | fora | transição esgotada (comissão da dívida externa do ADCT, aposentadorias de 1988, adaptação de processos, projeto de lei do quadro de pessoal, cargos em extinção) |
| art. 112 | coberto | norma:lei-8443-1992 (vigência) |
| art. 113 | fora | cláusula de revogação |

Total: 110 artigos vigentes (113 numerados, menos os arts. 37, 75 e 89, vetados por inteiro; o art. 78 conta porque só o caput foi vetado); coberto 87, parcial 0, lacuna 0, fora 23. Cobertura (coberto + fora) / total = 100,0%.

## Diário
- 2026-10-28 08:35 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), decisões D01 a D50, modelo de dados, protocolo e vocabulários
- 2026-10-28 08:40 — cópias locais em pesquisa/brutos/planalto-leis/2026-10-28-f2-legislativo-tcu/: ricd.html (Legin da Câmara, norma atualizada; compilacao_ate Resolução nº 34, de 22/4/2026; nenhuma resolução posterior no texto, logo nada mudou entre 2026-10-01 e hoje), lei-8443-1992.htm (Planalto por http, mesmo tamanho da cópia de 2026-10-23; marca mais recente Lei 13.866/2019), risf.pdf e rccn.pdf (edições oficiais "atualizado até julho de 2025"), senado-pagina-regimento.html, Ato da Mesa da Câmara nº 11/2023 (ficha, texto e anexo com o número de membros das comissões permanentes)
- 2026-10-28 08:43 — gravado org:colegio-de-lideres-da-camara
- 2026-10-28 08:43 — editado norma:ricd
- 2026-10-28 08:44 — gravado cargo:primeiro-vice-presidente-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-primeiro-vice-presidente-da-camara
- 2026-10-28 08:44 — gravado cargo:segundo-vice-presidente-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-segundo-vice-presidente-da-camara
- 2026-10-28 08:44 — gravado cargo:primeiro-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-primeiro-secretario-da-camara
- 2026-10-28 08:44 — gravado cargo:segundo-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-segundo-secretario-da-camara
- 2026-10-28 08:44 — gravado cargo:terceiro-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-terceiro-secretario-da-camara
- 2026-10-28 08:44 — gravado cargo:quarto-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-quarto-secretario-da-camara
- 2026-10-28 08:44 — gravado cargo:suplente-de-secretario-da-camara-dos-deputados
- 2026-10-28 08:44 — gravado rel:deputados-elegem-suplente-de-secretario-da-camara
- 2026-10-28 08:44 — gravado rel:primeiro-vice-presidente-da-camara-substitui-presidente-da-camara
- 2026-10-28 08:44 — gravado rel:segundo-vice-presidente-da-camara-substitui-presidente-da-camara
- 2026-10-28 08:44 — gravado rel:altineu-cortes-ocupa-primeiro-vice-presidente-da-camara
- 2026-10-28 08:44 — gravado rel:elmar-nascimento-ocupa-segundo-vice-presidente-da-camara
- 2026-10-28 08:44 — gravado rel:carlos-veras-ocupa-primeiro-secretario-da-camara
- 2026-10-28 08:44 — gravado rel:lula-da-fonte-ocupa-segundo-secretario-da-camara
- 2026-10-28 08:44 — gravado rel:delegada-katarina-ocupa-terceiro-secretario-da-camara
- 2026-10-28 08:44 — gravado rel:sergio-souza-ocupa-quarto-secretario-da-camara
- 2026-10-28 08:44 — corrigido rel:primeiro-vice-presidente-da-camara-substitui-presidente-da-camara (faltava nome)
- 2026-10-28 08:44 — corrigido rel:segundo-vice-presidente-da-camara-substitui-presidente-da-camara (faltava nome)
- 2026-10-28 08:46 — gravado org:liderancas-da-camara-dos-deputados
- 2026-10-28 08:46 — gravado org:procuradoria-parlamentar-da-camara
- 2026-10-28 08:46 — gravado org:ouvidoria-parlamentar-da-camara
- 2026-10-28 08:46 — gravado org:corregedoria-parlamentar-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-da-mulher-da-camara
- 2026-10-28 08:46 — gravado org:procuradoria-da-mulher-da-camara
- 2026-10-28 08:46 — gravado org:coordenadoria-dos-direitos-da-mulher-da-camara
- 2026-10-28 08:46 — gravado org:comite-de-defesa-da-mulher-contra-assedio-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-da-primeira-infancia-infancia-adolescencia-e-juventude-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-relacoes-internacionais-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-comunicacao-social-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-participacao-interacao-e-midias-digitais-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-da-transparencia-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-do-empreendedorismo-legislativo-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-da-inovacao-legislativa-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-defesa-das-prerrogativas-parlamentares-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-de-monitoramento-das-decisoes-do-sistema-interamericano-da-camara
- 2026-10-28 08:46 — gravado org:bancada-negra-da-camara
- 2026-10-28 08:46 — gravado org:diretoria-geral-da-camara
- 2026-10-28 08:46 — gravado org:secretaria-geral-da-mesa-da-camara
- 2026-10-28 08:46 — gravado org:centro-de-estudos-e-debates-estrategicos-da-camara
- 2026-10-28 08:46 — gravado org:consultoria-legislativa-da-camara
- 2026-10-28 08:47 — gravado cargo:lider-de-partido-ou-bloco-na-camara-dos-deputados
- 2026-10-28 08:47 — gravado cargo:lider-do-governo-na-camara-dos-deputados
- 2026-10-28 08:47 — gravado cargo:ouvidor-geral-da-camara-dos-deputados
- 2026-10-28 08:47 — gravado cargo:corregedor-parlamentar-da-camara-dos-deputados
- 2026-10-28 08:47 — gravado cargo:procuradora-da-mulher-da-camara-dos-deputados
- 2026-10-28 08:47 — gravado rel:presidente-da-republica-indica-lider-do-governo-na-camara
- 2026-10-28 08:47 — gravado rel:presidente-da-camara-designa-ouvidor-geral-da-camara
- 2026-10-28 08:47 — gravado rel:presidente-da-camara-designa-corregedor-parlamentar
- 2026-10-28 08:47 — gravado rel:deputadas-elegem-procuradora-da-mulher-da-camara
- 2026-10-28 08:47 — gravado rel:corregedoria-parlamentar-da-camara-corrige-deputado-federal
- 2026-10-28 08:47 — gravado rel:camara-presta-contas-a-tcu
- 2026-10-28 08:47 — editado org:mesa-da-camara-dos-deputados
- 2026-10-28 08:48 — gravado norma:camara-ato-da-mesa-11-2023
- 2026-10-28 08:48 — gravado org:capadr-camara
- 2026-10-28 08:48 — gravado org:cindre-camara
- 2026-10-28 08:48 — gravado org:ccti-camara
- 2026-10-28 08:48 — gravado org:cdc-camara
- 2026-10-28 08:48 — gravado org:cde-camara
- 2026-10-28 08:48 — gravado org:cdu-camara
- 2026-10-28 08:48 — gravado org:cdhmir-camara
- 2026-10-28 08:48 — gravado org:ce-camara
- 2026-10-28 08:48 — gravado org:cffc-camara
- 2026-10-28 08:48 — gravado org:clp-camara
- 2026-10-28 08:48 — gravado org:cmads-camara
- 2026-10-28 08:48 — gravado org:cme-camara
- 2026-10-28 08:48 — gravado org:credn-camara
- 2026-10-28 08:48 — gravado org:cspcco-camara
- 2026-10-28 08:48 — gravado org:csaude-camara
- 2026-10-28 08:48 — gravado org:ctrab-camara
- 2026-10-28 08:48 — gravado org:ctur-camara
- 2026-10-28 08:48 — gravado org:cvt-camara
- 2026-10-28 08:48 — gravado org:ccult-camara
- 2026-10-28 08:48 — gravado org:cespo-camara
- 2026-10-28 08:48 — gravado org:cpd-camara
- 2026-10-28 08:48 — gravado org:cmulher-camara
- 2026-10-28 08:48 — gravado org:cidoso-camara
- 2026-10-28 08:48 — gravado org:cpovos-camara
- 2026-10-28 08:48 — gravado org:ccom-camara
- 2026-10-28 08:48 — gravado org:cics-camara
- 2026-10-28 08:48 — gravado org:cpasf-camara
- 2026-10-28 08:48 — gravado org:casp-camara
- 2026-10-28 08:48 — editado org:ccjc-camara
- 2026-10-28 08:48 — editado org:cft-camara
- 2026-10-28 08:48 — editado org:comissoes-da-camara-dos-deputados
- 2026-10-28 08:48 — gravado org:comissoes-especiais-da-camara
- 2026-10-28 08:48 — gravado org:comissoes-externas-da-camara
- 2026-10-28 08:48 — editado org:comissoes-da-camara-dos-deputados (estrutura_continua removida)
- 2026-10-28 08:54 — RISF e RCCN: API de legislação do Senado consultada de novo hoje (RSF e RCN de 2026; cópias senado-legislacao-lista-*.json): a última RSF de 2026 é a nº 47, de 4/9/2026, e não há RCN de 2026; nenhuma altera os regimentos; logo nada mudou entre 2026-10-01 e hoje. Baixados também o volume II do RISF (normas conexas, ago/2025), as Resoluções do Senado nº 17/1993, 40/1995, 9/2013 e 42/2016 (Legis Senado) e o Ato da Mesa do Senado nº 1/2011 (Ouvidoria), mais a composição da Mesa do Senado (dados abertos, versão 27/10/2026) e os cargos de cada titular (serviço /senador/{código}/cargos)
- 2026-10-28 08:55 — Ana Paula Lobato aparece como 3ª Secretária do Senado desde 2025-02-01 (dados abertos), mas não há pessoa: para ela no mapa (não estava entre os 81 senadores em exercício importados para 2026-10-01); não criei a relação ocupa; ver relatório
- 2026-10-28 08:54 — gravado norma:senado-resolucao-17-1993
- 2026-10-28 08:54 — gravado norma:senado-resolucao-40-1995
- 2026-10-28 08:54 — gravado norma:senado-resolucao-9-2013
- 2026-10-28 08:54 — gravado norma:senado-resolucao-42-2016
- 2026-10-28 08:54 — gravado norma:senado-ato-da-mesa-1-2011
- 2026-10-28 08:54 — gravado cargo:segundo-vice-presidente-do-senado-federal
- 2026-10-28 08:54 — gravado rel:senadores-elegem-segundo-vice-presidente-do-senado
- 2026-10-28 08:54 — gravado cargo:primeiro-secretario-do-senado-federal
- 2026-10-28 08:54 — gravado rel:senadores-elegem-primeiro-secretario-do-senado
- 2026-10-28 08:54 — gravado cargo:segundo-secretario-do-senado-federal
- 2026-10-28 08:54 — gravado rel:senadores-elegem-segundo-secretario-do-senado
- 2026-10-28 08:54 — gravado cargo:terceiro-secretario-do-senado-federal
- 2026-10-28 08:54 — gravado rel:senadores-elegem-terceiro-secretario-do-senado
- 2026-10-28 08:54 — gravado cargo:quarto-secretario-do-senado-federal
- 2026-10-28 08:54 — gravado rel:senadores-elegem-quarto-secretario-do-senado
- 2026-10-28 08:54 — gravado cargo:suplente-de-secretario-do-senado-federal
- 2026-10-28 08:54 — gravado rel:senadores-elegem-suplente-de-secretario-do-senado
- 2026-10-28 08:54 — gravado rel:segundo-vice-presidente-do-senado-substitui-primeiro-vice-presidente
- 2026-10-28 08:54 — gravado fonte:senado-api-cargos-de-senadores
- 2026-10-28 08:54 — gravado rel:eduardo-gomes-ocupa-primeiro-vice-presidente-do-senado
- 2026-10-28 08:54 — gravado rel:humberto-costa-ocupa-segundo-vice-presidente-do-senado
- 2026-10-28 08:54 — gravado rel:daniella-ribeiro-ocupa-primeiro-secretario-do-senado
- 2026-10-28 08:54 — gravado rel:confucio-moura-ocupa-segundo-secretario-do-senado
- 2026-10-28 08:54 — gravado rel:laercio-oliveira-ocupa-quarto-secretario-do-senado
- 2026-10-28 08:54 — corrigido fonte:senado-api-cargos-de-senadores (URL)
- 2026-10-28 08:54 — gravado rel:senadores-elegem-primeiro-vice-presidente-do-senado
- 2026-10-28 08:54 — gravado rel:primeiro-vice-presidente-do-senado-substitui-presidente-do-senado
- 2026-10-28 08:55 — gravado org:liderancas-do-senado-federal
- 2026-10-28 08:55 — gravado org:corregedoria-parlamentar-do-senado
- 2026-10-28 08:55 — gravado org:procuradoria-parlamentar-do-senado
- 2026-10-28 08:55 — gravado org:procuradoria-especial-da-mulher-do-senado
- 2026-10-28 08:55 — gravado org:ouvidoria-do-senado-federal
- 2026-10-28 08:55 — gravado org:instituicao-fiscal-independente
- 2026-10-28 08:55 — editado org:mesa-do-senado-federal
- 2026-10-28 08:55 — gravado cargo:lider-de-partido-ou-bloco-no-senado-federal
- 2026-10-28 08:55 — gravado cargo:lider-do-governo-no-senado-federal
- 2026-10-28 08:55 — gravado cargo:lider-da-oposicao-no-senado-federal
- 2026-10-28 08:55 — gravado cargo:lider-da-bancada-feminina-no-senado-federal
- 2026-10-28 08:55 — gravado cargo:corregedor-parlamentar-do-senado-federal
- 2026-10-28 08:55 — gravado cargo:ouvidor-geral-do-senado-federal
- 2026-10-28 08:55 — gravado cargo:diretor-da-instituicao-fiscal-independente
- 2026-10-28 08:55 — gravado rel:presidente-da-republica-indica-lider-do-governo-no-senado
- 2026-10-28 08:55 — gravado rel:senadores-elegem-corregedor-parlamentar-do-senado
- 2026-10-28 08:55 — gravado rel:corregedoria-parlamentar-do-senado-corrige-senador
- 2026-10-28 08:55 — gravado rel:presidente-do-senado-designa-ouvidor-geral-do-senado
- 2026-10-28 08:55 — gravado rel:presidente-do-senado-indica-diretor-da-ifi
- 2026-10-28 08:55 — gravado rel:senado-aprova-indicacao-diretor-da-ifi
- 2026-10-28 08:56 — gravado org:cae-senado
- 2026-10-28 08:56 — gravado org:cas-senado
- 2026-10-28 08:56 — gravado org:ce-senado
- 2026-10-28 08:56 — gravado org:ctfc-senado
- 2026-10-28 08:56 — gravado org:cdh-senado
- 2026-10-28 08:56 — gravado org:cre-senado
- 2026-10-28 08:56 — gravado org:ci-senado
- 2026-10-28 08:56 — gravado org:cdr-senado
- 2026-10-28 08:56 — gravado org:cra-senado
- 2026-10-28 08:56 — gravado org:cct-senado
- 2026-10-28 08:56 — gravado org:cdd-senado
- 2026-10-28 08:56 — gravado org:cma-senado
- 2026-10-28 08:56 — gravado org:csp-senado
- 2026-10-28 08:56 — gravado org:ccdd-senado
- 2026-10-28 08:56 — gravado org:cesp-senado
- 2026-10-28 08:56 — editado org:ccj-senado
- 2026-10-28 08:56 — editado org:comissoes-do-senado-federal
- 2026-10-28 08:56 — corrigido org:ctfc-senado (destinatários do relatório, art. 102-C)
- 2026-10-28 08:59 — gravado norma:resolucao-cn-4-2008
- 2026-10-28 08:59 — gravado norma:resolucao-cn-1-2011
- 2026-10-28 08:59 — gravado norma:resolucao-cn-1-2014
- 2026-10-28 08:59 — gravado norma:ato-conjunto-cn-1-2019
- 2026-10-28 08:59 — gravado fonte:senado-api-comissoes-mistas
- 2026-10-28 08:59 — gravado org:cmmc
- 2026-10-28 08:59 — gravado org:cmcvm
- 2026-10-28 08:59 — gravado org:cmmir
- 2026-10-28 08:59 — gravado org:representacao-brasileira-no-parlamento-do-mercosul
- 2026-10-28 08:59 — editado org:mesa-do-congresso-nacional
- 2026-10-28 09:02 — gravado norma:ritcu
- 2026-10-28 09:02 — gravado org:plenario-do-tcu
- 2026-10-28 09:02 — gravado org:primeira-camara-do-tcu
- 2026-10-28 09:02 — gravado org:segunda-camara-do-tcu
- 2026-10-28 09:02 — gravado org:corregedoria-do-tcu
- 2026-10-28 09:02 — gravado org:secretaria-do-tcu
- 2026-10-28 09:02 — gravado org:instituto-serzedello-correa
- 2026-10-28 09:02 — gravado cargo:vice-presidente-do-tcu
- 2026-10-28 09:02 — gravado cargo:procurador-geral-do-mp-junto-ao-tcu
- 2026-10-28 09:02 — gravado cargo:membro-do-mp-junto-ao-tcu
- 2026-10-28 09:02 — gravado rel:ministros-do-tcu-elegem-presidente-do-tcu
- 2026-10-28 09:02 — gravado rel:ministros-do-tcu-elegem-vice-presidente-do-tcu
- 2026-10-28 09:02 — gravado rel:vice-presidente-do-tcu-substitui-presidente-do-tcu
- 2026-10-28 09:02 — gravado rel:vice-presidente-do-tcu-exerce-corregedoria
- 2026-10-28 09:02 — gravado rel:presidente-do-tcu-preside-plenario-do-tcu
- 2026-10-28 09:02 — gravado rel:presidente-da-republica-nomeia-procurador-geral-do-mp-junto-ao-tcu
- 2026-10-28 09:02 — gravado rel:presidente-da-republica-nomeia-membro-do-mp-junto-ao-tcu
- 2026-10-28 09:02 — gravado rel:congresso-fiscaliza-tcu
- 2026-10-28 09:02 — gravado rel:tcu-auxilia-cmo
- 2026-10-28 09:02 — gravado rel:tcu-representa-a-mpu
- 2026-10-28 09:02 — gravado rel:tcu-representa-a-ministerio-publico-eleitoral
- 2026-10-28 09:02 — gravado rel:jorge-oliveira-ocupa-vice-presidente-do-tcu
- 2026-10-28 09:02 — editado org:tcu (fonte Lei 8.443/1992, arts. 1º, 3º, 4º, 5º e 62)
- 2026-10-28 09:02 — editado cargo:ministro-do-tcu (fonte Lei 8.443/1992, arts. 62, 63, 71, 73, 74, 76, 94, 95 e 105)
- 2026-10-28 09:02 — editado rel:tcu-julga-contas-de-gestao (fonte Lei 8.443/1992, art. 1º, I; arts. 6º, 7º, 15 e 16)
- 2026-10-28 09:02 — editado rel:tcu-emite-parecer-contas-presidente (fonte Lei 8.443/1992, art. 1º, III; art. 36)
- 2026-10-28 09:02 — editado rel:tcu-aprecia-admissao-de-pessoal (fonte Lei 8.443/1992, art. 1º, V; art. 39, I)
- 2026-10-28 09:02 — editado rel:tcu-aprecia-aposentadorias-e-pensoes (fonte Lei 8.443/1992, art. 1º, V; art. 39, II)
- 2026-10-28 09:02 — editado rel:tcu-aplica-sancoes (fonte Lei 8.443/1992, art. 1º, IX; arts. 56 a 61)
- 2026-10-28 09:02 — editado rel:tcu-susta-ato-administrativo (fonte Lei 8.443/1992, art. 45, caput e § 1º)
- 2026-10-28 09:02 — editado rel:tcu-decide-sobre-contrato (fonte Lei 8.443/1992, art. 45, §§ 2º e 3º)
- 2026-10-28 09:02 — editado rel:tcu-fiscaliza-empresas-supranacionais (fonte Lei 8.443/1992, art. 5º, IV; art. 41, III)
- 2026-10-28 09:02 — editado rel:tcu-fiscaliza-recursos-repassados (fonte Lei 8.443/1992, art. 5º, VII; art. 41, IV)
- 2026-10-28 09:02 — editado rel:tcu-calcula-cotas-fpe (fonte Lei 8.443/1992, art. 1º, VI; art. 102)
- 2026-10-28 09:02 — editado rel:tcu-calcula-cotas-fpm (fonte Lei 8.443/1992, art. 1º, VI; art. 102)
- 2026-10-28 09:02 — editado rel:tcu-fiscaliza-uniao (fonte Lei 8.443/1992, art. 1º, II e IV; arts. 38 e 41)
- 2026-10-28 09:02 — editado rel:tcu-indica-ministro-do-tcu (fonte Lei 8.443/1992, art. 72, I; art. 105, I)
- 2026-10-28 09:02 — editado rel:congresso-elege-ministro-do-tcu (fonte Lei 8.443/1992, art. 72, II; art. 105, II)
- 2026-10-28 09:02 — editado rel:presidente-indica-ministro-do-tcu (fonte Lei 8.443/1992, art. 72, I; art. 105, I)
- 2026-10-28 09:02 — editado rel:senado-aprova-indicacao-ministro-do-tcu (fonte Lei 8.443/1992, art. 72, I)
- 2026-10-28 09:02 — editado rel:tcu-auxilia-congresso (fonte Lei 8.443/1992, art. 38)
- 2026-10-28 09:03 — editado org:tcu (detalhes com competências da Lei 8.443, D50)
- 2026-10-28 09:04 — gravado proc:julgamento-de-contas-pelo-tcu
- 2026-10-28 09:04 — corrigido proc:julgamento-de-contas-pelo-tcu (ator da etapa pronunciamento-do-ministro)
- 2026-10-28 09:04 — editado proc:lei-ordinaria (regimes de urgência regimental na Câmara e no Senado)
- 2026-10-28 09:04 — editado norma:risf
- 2026-10-28 09:04 — editado norma:rccn
- 2026-10-28 09:04 — editado norma:lei-8443-1992
- 2026-10-28 09:06 — gravado org:comite-de-fiscalizacao-da-execucao-orcamentaria-da-cmo
- 2026-10-28 09:06 — gravado org:comite-de-avaliacao-da-receita-da-cmo
- 2026-10-28 09:06 — gravado org:comite-de-obras-com-indicios-de-irregularidades-da-cmo
- 2026-10-28 09:06 — gravado org:comite-de-admissibilidade-de-emendas-da-cmo
- 2026-10-28 09:06 — gravado cargo:relator-geral-do-orcamento
- 2026-10-28 09:06 — editado org:cmo
- 2026-10-28 09:06 — editado org:cmo (redação do detalhes)
- 2026-10-28 09:07 — editado rel:camara-toma-contas-presidente (acrescentada a fonte RICD, art. 32, XI, a, e art. 215 (fase 2))
- 2026-10-28 09:07 — editado org:comissao-representativa-do-congresso-nacional (acrescentada a fonte RICD, arts. 224 e 225 (participação da Câmara), fase 2)
- 2026-10-28 09:07 — editado rel:cgu-auxilia-tcu (acrescentada a fonte Lei 8.443/1992, arts. 49 a 51 (controle interno em apoio ao controle externo), fase 2)
- 2026-10-28 09:07 — editado org:mp-junto-ao-tcu (acrescentada a fonte Lei 8.443/1992, art. 64 (o MP funciona junto ao TCU), fase 2)
- 2026-10-28 09:08 — gravado aviso:ricd-tomada-de-contas-cft-ou-cffc
- 2026-10-28 09:09 — editado rel:senado-suspende-execucao-lei-inconstitucional (acrescentada a fonte RISF, arts. 386 a 388 (rito da suspensão), fase 2)
- 2026-10-28 09:09 — editado rel:senado-elege-conselho-da-republica (acrescentada a fonte RISF, art. 384 (eleição dos membros do Conselho da República), fase 2)
- 2026-10-28 09:09 — editado rel:senado-aprova-exoneracao-procurador-geral-da-republica (acrescentada a fonte RISF, art. 385, fase 2)
- 2026-10-28 09:12 — editado org:comissoes-da-camara-dos-deputados (fonte RICD art. 23)
- 2026-10-28 09:12 — editado org:comissoes-do-senado-federal (fonte RISF art. 90)
- 2026-10-28 09:12 — editado org:ccj-senado (RISF art. 101-A)
- 2026-10-28 09:20 — quadro de cobertura gravado na seção Cobertura (RICD 95,5%, RISF 96,4%, RCCN 100%, Res. 1/2006-CN 100%, Lei 8.443 100%); conferido com scripts/cobertura-leis.ts, que regravou pesquisa/cobertura-leis.md (arquivo gerado; não editado à mão)
- 2026-10-28 09:21 — conferido por script que todo artigo "coberto" é citado em fontes de alguma entidade (ajustes: RICD art. 23, RISF arts. 90 e 101-A acrescentados às fontes; os demais avisos do conferidor eram falha do analisador de dispositivos)
- 2026-10-28 09:22 — vocabulário que faltou: tipo_norma "ato-da-mesa" ou "ato-conjunto" (usei "outro" no Ato da Mesa da Câmara nº 11/2023, no Ato da Mesa do Senado nº 1/2011 e no Ato Conjunto nº 1/2019); tipo_orgao para órgão interno de tribunal de contas (usei "legislativo-orgao-interno", como a Seaud); relação para "escolha livre sem aprovação" de líder do Governo (usei "indica", que pressupõe aprovação)
- 2026-10-28 09:23 — pendências: Wayback respondeu 429 o tempo todo; todas as normas e fontes novas ficaram com arquivo null; ocupantes de Líder do Governo, Ouvidor, Corregedor, Procuradora da Mulher, diretores da IFI e Procurador-Geral do MPTCU não pesquisados; Ana Paula Lobato (3ª Secretária do Senado) sem pessoa: no mapa
- 2026-10-28 09:24 — validação sem erro; tarefa marcada como coletada
