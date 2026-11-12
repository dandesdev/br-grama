---
id: f2-eleicoes
escopo: "Fase 2 (D49): Código Eleitoral, Lei das Eleições, Lei dos Partidos, Lei das Inelegibilidades e Lei 9.709/1998"
status: coletada
depende_de: [f0-eleicoes]
iniciada_em: 2026-11-11
concluida_em: 2026-11-11
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 4.737/1965 (Código Eleitoral), exceto arts. 12 a 41 (ficam com `f2-judiciario`): `norma:lei-4737-1965`
- Lei 9.504/1997 (Lei das Eleições): `norma:lei-9504-1997`
- Lei 9.096/1995 (Lei dos Partidos Políticos): `norma:lei-9096-1995`
- LC 64/1990 (inelegibilidades): crie se não existir
- Lei 9.709/1998 (plebiscito, referendo e iniciativa popular): `norma:lei-9709-1998`

Propaganda, crimes eleitorais, prestação de contas em detalhe e regras de urna são, em geral, `fora` (detalhe de processo). Interessam os órgãos, os cargos, as etapas dos processos eleitorais e os procedimentos que criam decisões (registro de candidatura, impugnação, ação de investigação judicial eleitoral, diplomação, recursos).

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [x] Etapas que faltam em `proc:eleicao-geral` e `proc:eleicao-municipal` (convenções, registro de candidatura, impugnação, propaganda como período, votação, apuração, diplomação); prazos com dispositivo.
- [x] Processos novos, se a lei descrever a sequência: registro de candidatura e impugnação (LC 64, arts. 3º a 16), ação de investigação judicial eleitoral (LC 64, art. 22), registro de partido no TSE (Lei 9.096), plebiscito e referendo (Lei 9.709).
- [x] Partidos (Lei 9.096): órgãos de direção como conceito no `detalhes` de `org:partidos-politicos`; fundações partidárias, Fundo Partidário (`rel:tse-repassa-fundo-partidario-partidos` existe) e as relações de controle do TSE sobre os partidos (registro, contas).
- [x] Federações partidárias (Lei 9.096, art. 11-A): as federações em vigor em 2026-10-01 já estão em `dados/orgaos/federacao-*`; confira as fontes e acrescente a lei.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:tse`, `org:tre-*`, `org:juntas-eleitorais`, `org:eleitorado-nacional`, `org:partidos-politicos`, `proc:eleicao-geral`, `proc:eleicao-municipal`, `obj:diploma-eleitoral`.
- Em paralelo: `f2-judiciario` (órgãos da Justiça Eleitoral, Código Eleitoral arts. 12 a 41) e `f2-financas-publicas`.

## Cobertura

Classes conforme a D49. A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar. Artigos revogados ou vetados por inteiro não entram na conta (ficam na nota abaixo de cada quadro). Cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-eleicoes/`. Do Código Eleitoral, os arts. 12 a 41 (órgãos da Justiça Eleitoral) ficam no quadro da `f2-judiciario`.

### Lei 4.737/1965 (Código Eleitoral), exceto arts. 12 a 41

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | rel:tse-regulamenta-lei-ordinaria (instruções do TSE) |
| arts. 2º a 11 | fora | princípios repetidos da CF e direitos e deveres individuais do eleitor (alistamento e voto obrigatórios, multas, justificativa) |
| arts. 42 a 50 | fora | alistamento: procedimento individual de inscrição do eleitor |
| arts. 52 a 61 | fora | segunda via e transferência do título: procedimento individual |
| art. 66 | fora | delegados de partido no alistamento: detalhe de processo |
| arts. 67 a 70 | fora | encerramento do alistamento: o prazo do art. 67 (100 dias) foi superado pelo art. 91 da Lei 9.504/1997 (150 dias), que está em proc:eleicao-geral e proc:eleicao-municipal; o resto é detalhe de cartório |
| arts. 71 a 81 | fora | cancelamento e exclusão de eleitores: procedimento individual |
| art. 82 | fora | repete a CF (art. 14, caput), já em org:eleitorado-nacional |
| arts. 83 e 84 | coberto | proc:eleicao-geral, proc:eleicao-municipal (etapa apuracao: princípios majoritário e proporcional) |
| arts. 85 e 86 | fora | simultaneidade e circunscrição: repetem a Lei 9.504/1997, art. 1º, parágrafo único, sem órgão nem etapa |
| arts. 87 a 91 | coberto | proc:registro-de-candidatura (pedido, chapa única, quem registra), rel:justica-eleitoral-julga-registro-de-candidatura |
| arts. 93 e 94 | coberto | proc:registro-de-candidatura (prazo e documentos do pedido) |
| arts. 95 e 96 | fora | nome do candidato (detalhe) e negativa de registro a adepto de partido cassado com base na Constituição de 1946 (superado) |
| art. 97 | coberto | proc:registro-de-candidatura (edital); os prazos de impugnação de dois dias (§§ 2º a 4º) foram absorvidos pelo rito da LC 64/1990 (leitura nossa, anotada no processo) |
| art. 98 | fora | militares candidatos: repete a CF (art. 14, § 8º), já em obj:registro-de-candidatura |
| arts. 99 a 102 | fora | registro por outro partido, numeração, cancelamento a pedido e comunicações: detalhe de registro; a substituição segue a Lei 9.504/1997, art. 13 |
| arts. 103 e 104 | fora | sigilo do voto e cédula oficial: regra de urna |
| arts. 106 a 109 | coberto | proc:eleicao-geral, proc:eleicao-municipal (quocientes e sobras) |
| arts. 110 e 111 | fora | desempate pela idade (detalhe) e art. 111, que o STF declarou inconstitucional (ADIs 7.228, 7.263 e 7.325, registradas nas notas de proc:eleicao-geral) |
| arts. 112 e 113 | lacuna | suplentes da representação proporcional e eleição para vaga sem suplente quando faltam mais de nove meses de mandato: falta uma frase nos cargos de deputado e vereador (de outras tarefas) |
| arts. 114 a 118 | fora | atos preparatórios: seções e listas de eleitores (detalhe) |
| arts. 119 a 124 | coberto | org:mesas-receptoras-de-votos, cargo:membro-de-mesa-receptora, rel:juiz-eleitoral-nomeia-membro-de-mesa-receptora, etapa nomeacao-das-mesas |
| arts. 125 e 126 | fora | falta de mesa e nova votação no município: detalhe de votação |
| arts. 127 e 128 | coberto | org:mesas-receptoras-de-votos, cargo:membro-de-mesa-receptora (competências do presidente e dos secretários) |
| arts. 129 a 134 | fora | listas nas cabinas, hansenianos, fiscais de partido e material de votação: regra de urna e detalhe |
| art. 135 | coberto | etapa nomeacao-das-mesas (locais de votação 60 dias antes) |
| arts. 136 a 150 | fora | lugares, polícia dos trabalhos, início da votação e ato de votar: regra de urna |
| arts. 152 a 156 | fora | encerramento da votação com cédulas: regra de urna |
| art. 158 | coberto | proc:eleicao-geral e proc:eleicao-municipal (etapa apuracao: órgãos apuradores) |
| arts. 159 a 196 | fora | apuração nas juntas e pela mesa com cédulas: superada pela votação e totalização eletrônicas (Lei 9.504/1997, art. 59) e detalhe de processo |
| art. 197 | coberto | proc:eleicao-geral (apuração nos TREs) |
| arts. 198 a 204 | fora | rito interno da apuração nos TREs: detalhe |
| arts. 205 a 212 | coberto | proc:eleicao-geral (apuração no TSE), obj:diploma-eleitoral (art. 212) |
| arts. 213 e 214 | fora | rito interno da apuração no TSE: detalhe |
| arts. 215 a 217 | coberto | obj:diploma-eleitoral, obj:recurso-contra-expedicao-de-diploma, rel:justica-eleitoral-julga-recurso-contra-expedicao-de-diploma |
| art. 218 | fora | comunicação da diplomação de militar: detalhe |
| art. 219 | fora | princípio de não declarar nulidade sem prejuízo: detalhe de processo |
| art. 220 | coberto | org:mesas-receptoras-de-votos (nulidade da votação perante mesa não nomeada) |
| arts. 221 a 223 | fora | votação anulável e momento de arguir nulidade: detalhe de processo |
| art. 224 | lacuna | nova eleição quando a nulidade atinge mais da metade dos votos ou quando o eleito majoritário tem o registro indeferido ou o diploma cassado (§§ 3º e 4º): falta processo; o alcance para Presidente e governador depende do julgamento das ADIs 5.525 e 5.619, não conferido em fonte oficial |
| art. 225 | coberto | org:eleitorado-nacional (voto no exterior só para Presidente) |
| art. 226 | fora | número mínimo de eleitores por seção no exterior: detalhe |
| art. 227 | coberto | org:eleitorado-nacional (mesas no exterior pelo TRE-DF) |
| arts. 228 a 231 | fora | comunicação, envio de urnas e sanções no exterior: detalhe |
| art. 232 | coberto | org:eleitorado-nacional |
| art. 233 | fora | instruções do TSE e do Itamaraty para o voto no exterior: detalhe |
| art. 233-A | coberto | org:eleitorado-nacional (voto em trânsito) |
| arts. 234 a 239 | fora | garantias eleitorais: direitos individuais |
| arts. 240 a 245, 248, 249, 251, 255 e 256 | fora | propaganda partidária e eleitoral |
| arts. 257 a 259 | coberto | proc:recursos-eleitorais (efeito suspensivo, prazo geral de três dias, preclusão) |
| arts. 260 e 261 | fora | prevenção do relator e recursos parciais: detalhe de processo |
| art. 262 | coberto | obj:recurso-contra-expedicao-de-diploma |
| arts. 263 e 264 | fora | prejulgados e recurso contra atos de presidentes: detalhe |
| arts. 265 a 267 | coberto | proc:recursos-eleitorais (recurso ao TRE) |
| art. 268 | fora | vedação de alegações novas no TRE: detalhe |
| arts. 269 a 274 | coberto | proc:recursos-eleitorais (julgamento no TRE) |
| art. 275 | fora | embargos de declaração: detalhe de processo |
| arts. 276 a 282 | coberto | proc:recursos-eleitorais (recurso ao TSE e ao STF), obj:recurso-contra-expedicao-de-diploma |
| arts. 283 a 288 | fora | disposições penais preliminares |
| arts. 289 a 293, 295 a 321, 323 a 327, 326-A, 326-B, 330 a 332, 334 a 354 e 354-A | fora | crimes eleitorais |
| arts. 355 a 364 | fora | processo penal eleitoral |
| arts. 365 a 368, 368-A, 369 a 381 e 383 | fora | disposições gerais (serviço eleitoral obrigatório, multas, franquias, feriado, regras de transição de 1965) e cláusula revogatória |
| art. 382 | coberto | norma:lei-4737-1965 (vigência) |

Revogados por inteiro (fora da conta): arts. 51, 62 a 65, 92, 105, 151, 157, 246, 247, 250, 252 a 254, 294, 322, 328, 329 e 333. Conta: 338 artigos vigentes fora dos arts. 12 a 41; coberto 63, fora 272, parcial 0, lacuna 3; cobertura (coberto + fora) / total = 99,1%.

### Lei 9.504/1997 (Lei das Eleições)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 5º | coberto | proc:eleicao-geral, proc:eleicao-municipal (datas, maioria, segundo turno, prazos de seis meses, votos válidos) |
| arts. 6º e 6º-A | coberto | proc:eleicao-geral e proc:eleicao-municipal (etapa convencoes: coligações e federações), as cinco org:federacao-* |
| art. 7º | fora | normas internas de escolha de candidatos e anulação de convenção pelo órgão nacional: vida interna do partido |
| art. 8º | coberto | etapa convencoes |
| art. 9º | coberto | etapa prazos-seis-meses |
| arts. 10 e 11 | coberto | proc:registro-de-candidatura (limite de candidatos, cota de gênero, documentos, prazo de 15 de agosto) |
| art. 12 | fora | variações de nome do candidato: detalhe |
| arts. 13 e 14 | coberto | proc:registro-de-candidatura (substituição e cancelamento) |
| art. 15 | fora | numeração dos candidatos: detalhe |
| arts. 16, 16-A e 16-B | coberto | proc:registro-de-candidatura, etapa julgamento-dos-registros |
| arts. 16-C e 16-D | coberto | obj:fefc, rel:tse-repassa-fefc-partidos |
| arts. 17, 18, 18-A, 18-B, 18-C, 20 a 22, 22-A, 23, 24, 24-C e 25 a 27 | fora | arrecadação e gastos de campanha: detalhe de financiamento |
| arts. 28 a 30 | coberto | obj:contas-de-campanha-eleitoral, rel:justica-eleitoral-julga-contas-de-campanha, rel:partidos-politicos-presta-contas-a-justica-eleitoral, etapa prestacao-de-contas |
| art. 30-A | coberto | proc:acao-de-investigacao-judicial-eleitoral, obj:acao-de-investigacao-judicial-eleitoral |
| arts. 31 e 32 | fora | sobras de campanha e guarda de documentos: detalhe de prestação de contas |
| arts. 33 a 35 | fora | pesquisas eleitorais e crimes ligados a elas |
| art. 36 | coberto | etapa propaganda |
| arts. 36-A, 36-B, 37 a 39, 39-A, 40, 40-B e 41 | fora | propaganda eleitoral |
| art. 41-A | coberto | proc:acao-de-investigacao-judicial-eleitoral (captação ilícita de sufrágio) |
| arts. 43 a 46 | fora | propaganda na imprensa, no rádio e na TV e debates |
| art. 47 | coberto | etapa propaganda (horário gratuito) |
| art. 48 | fora | propaganda nos municípios sem emissora: detalhe |
| art. 49 | coberto | etapa segundo-turno |
| arts. 50 a 53, 53-A, 54 a 57, 57-A a 57-J, 58 e 58-A | fora | propaganda no rádio, na TV e na internet e direito de resposta |
| art. 59 | coberto | etapas primeiro-turno, segundo-turno e apuracao (votação e totalização eletrônicas) |
| arts. 60 a 62 | fora | voto de legenda, contagem e identificação na urna eletrônica: regra de urna |
| arts. 63 e 64 | coberto | org:mesas-receptoras-de-votos, cargo:membro-de-mesa-receptora |
| arts. 65 a 71 | fora | fiscalização da votação e da apuração pelos partidos: detalhe |
| art. 72 | fora | crimes |
| arts. 73 e 74 | coberto | obj:acao-de-investigacao-judicial-eleitoral e proc:acao-de-investigacao-judicial-eleitoral (condutas vedadas e abuso de autoridade seguem o rito do art. 22 da LC 64/1990) |
| arts. 75 a 78 | fora | outras condutas vedadas em campanha: detalhe |
| arts. 79 e 80 | fora | remissão a lei futura sobre financiamento público (hoje FEFC, arts. 16-C e 16-D) e regra só para 1998 (transição esgotada) |
| arts. 82 a 89 | fora | votação e apuração com cédulas onde não há urna eletrônica: regra de urna |
| art. 90 | fora | crimes |
| art. 91 | coberto | etapa encerramento-do-alistamento |
| arts. 91-A, 92 a 95, 93-A e 94-A | fora | identificação do eleitor, revisão do eleitorado, propaganda institucional do TSE, prioridade dos feitos e impedimento de juiz: detalhe |
| arts. 96, 96-A, 96-B, 97 e 97-A | fora | rito das representações por descumprimento da lei, intimações, reunião de ações e duração razoável: detalhe de processo |
| art. 98 | coberto | cargo:membro-de-mesa-receptora (dispensa do trabalho em dobro) |
| arts. 99, 100 e 100-A | fora | compensação fiscal das emissoras e contratação de pessoal de campanha |
| arts. 102 a 104 | fora | alteram o Código Eleitoral e a Lei 9.096/1995 (já incorporados nelas) |
| art. 105 | coberto | rel:tse-regulamenta-lei-ordinaria |
| art. 105-A | fora | afasta a Lei da Ação Civil Pública em matéria eleitoral: detalhe de processo |
| art. 106 | coberto | norma:lei-9504-1997 (vigência) |
| art. 107 | fora | cláusula revogatória |

Revogados por inteiro: arts. 19, 42 e 81. Vetados por inteiro: arts. 24-A, 24-B, 40-A, 90-A, 94-B e 101. Conta: 139 artigos vigentes; coberto 35, fora 104, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

### Lei 9.096/1995 (Lei dos Partidos Políticos)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 3º | coberto | org:partidos-politicos (natureza, liberdade de criação, autonomia e órgãos de direção) |
| art. 4º | fora | igualdade de direitos dos filiados: direitos individuais |
| arts. 5º e 6º | coberto | org:partidos-politicos |
| arts. 7º a 10 | coberto | proc:registro-de-partido-politico, rel:tse-aprecia-para-registro-estatuto-de-partido, org:partidos-politicos |
| arts. 11 e 11-A | coberto | org:partidos-politicos (delegados), org:federacao-* e rel:tse-aprecia-para-registro-estatuto-de-partido (federações) |
| art. 12 | coberto | org:partidos-politicos (bancada e lideranças) |
| art. 13 | fora | funcionamento parlamentar com 5% dos votos: superado pela cláusula de desempenho do art. 17, § 3º, da CF (EC 97/2017); o Planalto marca "Vide ADIs 1.351 e 1.354" |
| arts. 14, 15 e 15-A | coberto | org:partidos-politicos (estatuto, órgãos por nível, responsabilidade de cada órgão) |
| arts. 16, 17 e 19 a 22 | fora | filiação e desfiliação: direitos e deveres individuais e detalhe de cadastro (o prazo de filiação para concorrer está em proc:eleicao-geral, pela Lei 9.504/1997, art. 9º) |
| art. 22-A | coberto | org:partidos-politicos (perda do mandato por desfiliação sem justa causa) |
| arts. 23 a 26 | fora | fidelidade e disciplina partidárias: deveres dos filiados e sanções internas do partido |
| arts. 27 e 28 | coberto | rel:tse-julga-cancelamento-de-registro-de-partido |
| art. 29 | coberto | org:partidos-politicos (fusão e incorporação) |
| art. 30 | coberto | obj:contas-anuais-dos-partidos-politicos |
| art. 31 | fora | lista de fontes vedadas: detalhe de financiamento; a sanção está em rel:justica-eleitoral-aplica-sancao-partidos-politicos |
| arts. 32 a 35 | coberto | obj:contas-anuais-dos-partidos-politicos, rel:justica-eleitoral-julga-contas-anuais-dos-partidos, rel:justica-eleitoral-fiscaliza-partidos-politicos, rel:partidos-politicos-presta-contas-a-justica-eleitoral |
| arts. 36, 37 e 37-A | coberto | rel:justica-eleitoral-aplica-sancao-partidos-politicos |
| art. 38 | coberto | obj:fundo-partidario |
| art. 39 | fora | doações aos partidos: detalhe de financiamento |
| arts. 40, 41 e 41-A | coberto | obj:fundo-partidario, rel:tse-repassa-fundo-partidario-partidos |
| art. 42 | fora | destino da cota de órgão nacional cancelado: detalhe |
| arts. 43 e 44 | coberto | obj:fundo-partidario, org:fundacoes-partidarias, rel:partidos-politicos-repassa-recursos-fundacoes-partidarias |
| art. 44-A | fora | regime trabalhista dos dirigentes partidários: detalhe |
| arts. 50-A a 50-D | coberto | org:partidos-politicos (tempo gratuito de propaganda partidária, citado pela Lei 14.291/2022) |
| art. 50-E | fora | compensação fiscal das emissoras |
| art. 51 | fora | uso gratuito de escolas e Casas Legislativas: detalhe |
| art. 53 | coberto | org:fundacoes-partidarias |
| art. 54 | fora | equiparação do DF e dos territórios: regra de interpretação |
| arts. 55 e 55-A a 55-E | fora | regras de transição (adaptação dos estatutos em 1995, anistias e prazos já esgotados) |
| art. 58 | fora | primeira relação de filiados (transição esgotada) |
| arts. 59 e 60 | fora | alteram o Código Civil de 1916 e a Lei de Registros Públicos |
| art. 61 | coberto | rel:tse-regulamenta-lei-ordinaria |
| art. 62 | coberto | norma:lei-9096-1995 (vigência) |
| art. 63 | fora | cláusula revogatória |

Revogados por inteiro: arts. 18, 45 a 49, 56 e 57. Vetados por inteiro: arts. 45-A, 46-A, 47-A, 48-A, 49-A, 50 e 52. Conta: 69 artigos vigentes; coberto 40, fora 29, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

### LC 64/1990 (Lei das Inelegibilidades)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | obj:registro-de-candidatura (casos de inelegibilidade) |
| art. 2º | coberto | proc:registro-de-candidatura, rel:justica-eleitoral-julga-registro-de-candidatura, obj:impugnacao-de-registro-de-candidatura |
| arts. 3º a 18 | coberto | proc:registro-de-candidatura, obj:impugnacao-de-registro-de-candidatura, rel:ministerio-publico-eleitoral-promove-impugnacao-de-registro-de-candidatura, rel:partidos-politicos-ajuiza-impugnacao-de-registro-de-candidatura |
| arts. 19 a 24 | coberto | proc:acao-de-investigacao-judicial-eleitoral, obj:acao-de-investigacao-judicial-eleitoral, rel:partidos-politicos-ajuiza-aije, rel:ministerio-publico-eleitoral-promove-aije, rel:justica-eleitoral-julga-aije |
| art. 25 | fora | crime |
| art. 26 | fora | transição de 1990 (prazos de desincompatibilização já vencidos) |
| art. 26-A | fora | remissão à Lei 9.504/1997 para o registro depois de afastada a inelegibilidade: sem órgão nem etapa novos |
| art. 26-B | coberto | proc:acao-de-investigacao-judicial-eleitoral (prioridade dos processos) |
| art. 26-C | fora | suspensão cautelar da inelegibilidade no recurso contra decisão colegiada: detalhe de processo |
| art. 26-D | coberto | proc:registro-de-candidatura (momento de aferir a elegibilidade) |
| art. 27 | coberto | norma:lc-64-1990 (vigência) |
| art. 28 | fora | cláusula revogatória |

Vetado por inteiro: art. 26-E. Conta: 32 artigos vigentes; coberto 27, fora 5, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

### Lei 9.709/1998 (plebiscito, referendo e iniciativa popular)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 3º | coberto | proc:plebiscito-e-referendo, obj:plebiscito-e-referendo, rel:deputados-propoem-plebiscito-e-referendo, rel:senadores-propoem-plebiscito-e-referendo, rel:congresso-convoca-plebiscito-e-referendo |
| arts. 4º e 5º | coberto | proc:alteracao-territorial-de-estados, proc:alteracao-territorial-de-municipios |
| art. 6º | coberto | obj:plebiscito-e-referendo (consultas de estados e municípios) |
| art. 7º | coberto | proc:alteracao-territorial-de-estados, proc:alteracao-territorial-de-municipios |
| arts. 8º a 12 | coberto | proc:plebiscito-e-referendo, rel:tse-homologa-plebiscito-e-referendo, rel:eleitorado-nacional-delibera-plebiscito-e-referendo |
| arts. 13 e 14 | coberto | rel:eleitorado-propoe-lei-ordinaria, proc:lei-ordinaria |
| art. 15 | coberto | proc:plebiscito-e-referendo (vigência) |

Conta: 15 artigos vigentes; coberto 15, fora 0, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

## Diário

- 2026-11-11 22:38 — iniciada; lidos CLAUDE.md, decisoes, modelo, protocolo, instrucoes-agentes
- 2026-11-11 22:47 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-eleicoes/ (Planalto só respondeu por HTTP/1.1 com user-agent de navegador): l4737compilado.htm (compilacao_ate Lei 15.358, de 24/3/2026: art. 5º, IV, e art. 71, VI), l9504.htm (Lei 15.230/2025 e LC 219/2025), l9096.htm (Lei 14.291/2022), lcp64.htm (LC 219/2025), l9709.htm (sem alterações). As quatro primeiras são iguais, byte a byte fora o script do servidor, às cópias de 2026-10-23 (pesquisa/brutos/planalto-leis/2026-10-23/); nenhuma alteração posterior a 2026-10-01 nos textos
- 2026-11-11 22:47 — gravado proc:plebiscito-e-referendo
- 2026-11-11 22:49 — gravado obj:impugnacao-de-registro-de-candidatura
- 2026-11-11 22:49 — gravado proc:registro-de-candidatura (LC 64, arts. 2º a 18 e 26-D; Lei 9.504, arts. 10 a 16-B; Código Eleitoral, arts. 87 a 97)
- 2026-11-11 22:49 — gravado rel:ministerio-publico-eleitoral-promove-impugnacao-de-registro-de-candidatura
- 2026-11-11 22:49 — gravado rel:partidos-politicos-ajuiza-impugnacao-de-registro-de-candidatura
- 2026-11-11 22:50 — gravado obj:acao-de-investigacao-judicial-eleitoral (LC 64, arts. 19 a 24)
- 2026-11-11 22:50 — gravado proc:acao-de-investigacao-judicial-eleitoral (LC 64, arts. 19 a 26-B; Lei 9.504, arts. 30-A, 41-A, 73)
- 2026-11-11 22:51 — gravado rel:partidos-politicos-ajuiza-aije
- 2026-11-11 22:51 — gravado rel:ministerio-publico-eleitoral-promove-aije
- 2026-11-11 22:51 — gravado rel:justica-eleitoral-julga-aije
- 2026-11-11 22:51 — gravado proc:registro-de-partido-politico (Lei 9.096, arts. 7º a 10)
- 2026-11-11 22:52 — gravado org:fundacoes-partidarias (Lei 9.096, arts. 44, IV, e 53)
- 2026-11-11 22:52 — gravado rel:partidos-politicos-repassa-recursos-fundacoes-partidarias
- 2026-11-11 22:52 — gravado obj:contas-anuais-dos-partidos-politicos (Lei 9.096, arts. 30 a 37)
- 2026-11-11 22:52 — gravado obj:contas-de-campanha-eleitoral (Lei 9.504, arts. 28 a 30)
- 2026-11-11 22:52 — gravado rel:justica-eleitoral-julga-contas-anuais-dos-partidos
- 2026-11-11 22:52 — gravado rel:justica-eleitoral-julga-contas-de-campanha
- 2026-11-11 22:52 — gravado rel:justica-eleitoral-fiscaliza-partidos-politicos
- 2026-11-11 22:52 — gravado rel:justica-eleitoral-aplica-sancao-partidos-politicos
- 2026-11-11 22:52 — gravado rel:tse-julga-cancelamento-de-registro-de-partido
- 2026-11-11 22:53 — editado rel:partidos-politicos-presta-contas-a-justica-eleitoral (condição e fontes: Lei 9.096, arts. 32 e 34, V; Lei 9.504, arts. 28 e 29)
- 2026-11-11 22:53 — editado org:partidos-politicos (detalhes: órgãos de direção como conceito, delegados, bancada, desfiliação, fusão; Lei 9.096, arts. 3º, 10 a 12, 15, 15-A, 22-A e 29)
- 2026-11-11 22:53 — editado obj:fundo-partidario (aplicação dos recursos e bancos públicos: Lei 9.096, arts. 43 e 44)
- 2026-11-11 22:54 — editadas as cinco org:federacao-* (fontes conferidas na cópia do TSE de 1º/10/2026; acrescentada a Lei 9.504, art. 6º-A)
- 2026-11-11 22:54 — editado rel:tse-aprecia-para-registro-estatuto-de-partido (Lei 9.096, arts. 9º, 10 e 11-A, § 6º)
- 2026-11-11 22:56 — gravado proc:recursos-eleitorais (Código Eleitoral, arts. 257 a 282)
- 2026-11-11 22:56 — gravado obj:recurso-contra-expedicao-de-diploma (Código Eleitoral, art. 262)
- 2026-11-11 22:56 — gravado rel:justica-eleitoral-julga-recurso-contra-expedicao-de-diploma
- 2026-11-11 22:56 — gravado org:mesas-receptoras-de-votos (Código Eleitoral, arts. 119 a 130)
- 2026-11-11 22:56 — gravado cargo:membro-de-mesa-receptora (Código Eleitoral, arts. 120 a 128)
- 2026-11-11 22:56 — gravado rel:juiz-eleitoral-nomeia-membro-de-mesa-receptora
- 2026-11-11 22:57 — editado proc:eleicao-geral (etapas encerramento-do-alistamento, nomeacao-das-mesas, impugnacao e prestacao-de-contas; fontes e frases em convencoes, turnos, apuracao e diplomacao)
- 2026-11-11 22:57 — editado proc:eleicao-municipal (etapas encerramento-do-alistamento, nomeacao-das-mesas, impugnacao e prestacao-de-contas; fontes e frases em convencoes, turnos, apuracao e diplomacao)
- 2026-11-11 22:58 — editado org:eleitorado-nacional (voto no exterior e em trânsito: Código Eleitoral, arts. 225 a 233-A)
- 2026-11-11 22:58 — editado rel:justica-eleitoral-julga-registro-de-candidatura (fonte LC 64, art. 2º)
- 2026-11-11 22:58 — gravado rel:tse-regulamenta-lei-ordinaria (Código Eleitoral, art. 1º; Lei 9.096, art. 61; Lei 9.504, art. 105)
- 2026-11-11 23:03 — proc:acao-de-investigacao-judicial-eleitoral: atores trocados para cargo:corregedor-geral-eleitoral, criado em paralelo pela f2-judiciario (antes cargo:ministro-do-tse); notas do objeto AIJE ajustadas
- 2026-11-11 23:03 — cobertura: Código Eleitoral (sem os arts. 12 a 41) 99,1% (63 coberto, 272 fora, 3 lacuna: arts. 112, 113 e 224); Lei 9.504 100%; Lei 9.096 100%; LC 64 100%; Lei 9.709 100%; conferido com npm run -s cobertura:leis
- 2026-11-11 23:03 — lacunas para depois: (1) suplentes da representação proporcional e eleição para vaga sem suplente (Código Eleitoral, arts. 112 e 113), cabem nos cargos de deputado e vereador, de outras tarefas; (2) nova eleição do art. 224 (§§ 3º e 4º): não criei processo porque o alcance para Presidente, governador e senador depende das ADIs 5.525 e 5.619 (julgadas em 2018, segundo notícias; não li o acórdão no STF)
- 2026-11-11 23:03 — pontos para o revisor: proc:registro-de-candidatura trata os prazos de impugnação do Código Eleitoral (art. 97, §§ 2º a 4º, dois dias) como absorvidos pela LC 64/1990 (cinco dias), leitura nossa; obj:acao-de-investigacao-judicial-eleitoral usa nome e sigla de uso corrente (a lei fala em representação e investigação judicial); cargo:membro-de-mesa-receptora usa provimento designacao (a lei diz 'nomeados pelo juiz eleitoral'); org:mesas-receptoras-de-votos fica em contido_em org:justica-eleitoral, embora o art. 12 do Código não liste as mesas; o número de mesas (517.206) é conta nossa a partir das seções do TSE; rel:tse-regulamenta-lei-ordinaria aponta para o objeto genérico de lei ordinária
- 2026-11-11 23:03 — propostas de vocabulário: (a) relação 'registra' (o TSE registra estatuto de partido e federação; hoje 'aprecia-para-registro', pensado para o TCU); (b) objeto 'lei eleitoral' ou um campo de recorte na relação 'regulamenta', para não apontar ao objeto genérico de lei ordinária; (c) tipo_objeto 'representacao' ou aceitar 'acao-judicial' para impugnação de registro e AIJE, que a lei chama de representação/impugnação
- 2026-11-11 23:03 — validação limpa (npm run -s validar); status coletada
