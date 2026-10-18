---
id: verificacao-piloto-processo-lei
escopo: "Verificação independente: entidades com verificacao.tarefa = "piloto-processo-lei""
status: verificada
depende_de: []
iniciada_em: 2026-10-17
concluida_em: 2026-10-17
---

## Entregáveis

- [x] Todas as entidades com verificacao.tarefa = "piloto-processo-lei" conferidas contra a fonte (liste com: `grep -l '"tarefa": "...' dados/*/*.json`)
- [x] Pontos em aberto da coleta, resolvidos ou documentados:
- RISF e RCCN: o texto oficial vai até jul/2025; houve resoluções depois que alterem os dispositivos citados? (achado:risf-rccn-compilacao-ate-julho-2025)
- Prazo de sanção tácita: "15 dias úteis" (art. 66, §§ 1º e 3º): confirme a leitura (achado:prazo-sancao-tacita-dias-uteis)
- Quem manda publicar a lei promulgada pelo Presidente do Senado (achado:publicacao-apos-promulgacao-supletiva)
- O regime de urgência (regimes[0]) e os prazos estruturados (valor/unidade) foram criados na migração: confira contra a CF e os regimentos

## Diário
- 2026-10-17 — iniciada; lidos CLAUDE.md, instruções de verificação, modelo de dados, protocolo e decisões. Escopo: 55 arquivos com verificacao.tarefa = "piloto-processo-lei" (4 achados, 2 cargos, 8 normas, 14 órgãos, 1 processo, 26 relações).
- 2026-10-17 09:53 — norma:lindb: verificado (Planalto compilado, 2026-10-17): art. 1º e §§ 1º e 3º; nome dado pela Lei 12.376/2010; DOU 9/9/1942 e retificações conferidos
- 2026-10-17 09:53 — norma:lc-95-1998: verificado (Planalto): art. 8º e §§ 1º-2º (LC 107/2001), art. 19 (vigência em 90 dias), DOU 27/2/1998
- 2026-10-17 09:53 — norma:lei-9709-1998: verificado (Planalto): arts. 13-15, DOU 19/11/1998
- 2026-10-17 09:53 — norma:decreto-9215-2017: verificado; CORRIGIDO vigencia.de null → 2017-12-01 (art. 22: 'entra em vigor em 1º de dezembro de 2017'); arts. 2º e 3º conferidos
- 2026-10-17 09:53 — norma:decreto-11329-2023: verificado; CORRIGIDO vigencia.de null → 2023-01-24 (art. 5º); Anexo I, art. 38, I conferido; acrescentados Decretos 11.426/2023 e 12.420/2025 às notas de alterações
- 2026-10-17 09:54 — norma:ricd: verificado: texto compilado da Câmara (2026-10-17) traz alterações até a Res. 34/2026; Res. 33 e 34/2026 só alteram arts. sobre Mesa, bancadas e secretarias, nenhum dispositivo citado no processo; art. 7º da Res. 17/1989 (vigência na publicação) conferido
- 2026-10-17 15:14 — norma:risf: verificado: PDF oficial (consolidado pelo ACD 15/2022, atualizado até jul/2025) baixado de novo; arts. 48, 49, 52, 91, 92, 101, 109, 254, 285-288, 328 e 375 conferidos; lista RSF 2025-2026 da API do Senado sem resolução que altere o RISF (RSF 46/2026 não indexada); notas complementadas
- 2026-10-17 15:14 — norma:rccn: verificado: PDF oficial (atualizado até jul/2025), data 11/8/1970 na ficha catalográfica; arts. 1º, VI, 43, 104-A, 106 a 106-D e 142 conferidos; RCN 2025 (nº 1 a 3, mar.-jun.) já incorporadas; nenhuma RCN em 2026 na API
- 2026-10-17 15:14 — achado:risf-rccn-compilacao-ate-julho-2025: verificado; ATUALIZADO: lacuna do texto compilado confirmada, mas a API do Senado mostra que nenhuma RSF/RCN posterior a jul/2025 altera RISF ou RCCN (ressalva: RSF 46/2026 não indexada); detalhes, onde_procuramos e mais_informacoes atualizados. Ponto em aberto 1 resolvido no essencial.
- 2026-10-17 15:15 — achado:prazo-sancao-tacita-dias-uteis: verificado; texto do art. 66, §§ 1º e 3º conferido no Planalto; ATUALIZADO com a PEC 48/2017 (Senado), que propunha explicitar 'dias úteis' no § 3º e foi arquivada em 21/12/2022 (página oficial do Congresso): a ambiguidade é reconhecida e segue no texto. Ponto em aberto 2: leitura '15 dias úteis' mantida, achado continua aberto
- 2026-10-17 15:15 — achado:publicacao-apos-promulgacao-supletiva: verificado; lacuna confirmada (CF, RISF, RCCN e Decreto 9.215 sem regra sobre quem manda publicar); ATUALIZADO: Decreto 9.215, art. 11, exige publicação integral no DOU de atos normativos e do Legislativo; exemplo da prática: Lei 11.170/2005, promulgada pelo Presidente do Senado (§ 7º) e publicada no DOU de 5/9/2005 (Planalto). Ponto em aberto 3: continua aberto quanto a quem ordena
- 2026-10-17 15:15 — achado:casa-iniciadora-projeto-do-pgr: verificado: CF arts. 61 e 64 (PGR ausente do art. 64) e RICD art. 109, § 1º, VII conferidos; RISF (jul/2025) não trata da iniciativa do PGR (busca por 'Procurador-Geral da República')
- 2026-10-17 15:15 — proc:lei-ordinaria, grupo 1 (iniciativa, iniciativa-popular, camara-distribuicao, camara-comissoes) conferido contra CF arts. 14, 47, 58, 61, 64, Lei 9.709 arts. 13-14, RICD arts. 24, 34, 52-54, 56, 109, 139, 151, 252 e RCCN art. 142. CORRIGIDO: (a) iniciativa: 'criação de cargos no Executivo' → 'na administração direta e autárquica' (CF art. 61, § 1º, II, a); (b) camara-comissoes: exceção 'já aprovados pelo Plenário do Senado' → 'vindos do Senado (ou por ele emendados) que já passaram pelo Plenário de uma das Casas' (RICD art. 24, II, f); (c) camara-comissoes ganhou quorum maioria-simples (RICD art. 56, § 2º); (d) camara-distribuicao: prazo estruturado (2 sessões, do recebimento na Mesa). Gravado.
- 2026-10-17 15:16 — proc:lei-ordinaria, grupo 2 (camara-prazo-de-recurso, camara-plenario, senado-distribuicao, senado-comissoes, senado-prazo-de-recurso, senado-plenario) conferido contra CF arts. 47, 58, 64, 65 e RICD arts. 58, 132, 133, 144, 183, 195-200; RISF arts. 48, 49, 91, 92, 101, 109, 254, 288, 328. Atores, prazos, quóruns e caminhos corretos. ACRESCENTADO: senado-comissoes ganhou quorum (maioria-simples, votação nominal nas terminativas, RISF art. 109) e o caminho para arquivamento quando a CCJ opina pela inconstitucionalidade ou os pareceres de mérito são todos contrários, sem recurso (RISF arts. 101, § 1º, e 254), que faltava; efeito estruturado nos dois prazos de recurso. Gravado.
- 2026-10-17 15:16 — proc:lei-ordinaria, grupo 3 (camara-aprecia-emendas-do-senado, senado-aprecia-emendas-da-camara, envio-a-sancao, sancao, sancao-tacita, veto) conferido contra CF arts. 48, 64, § 3º, 65, 66, §§ 1º-3º, 84, IV-V; RICD arts. 123, 200, 204; RISF arts. 48, 285-287, 328. CORRIGIDO: envio-a-sancao tinha tipo_etapa 'decisao', mas quem decide é o Presidente da República, não a Casa → 'acao', com detalhe explicando; acrescentados RISF art. 48, XXVII e prazo textual (RICD art. 200: até a 2ª sessão seguinte). sancao-tacita: prazo estruturado (15 dias úteis, do recebimento, efeito sanção), mantida a remissão ao achado. Demais etapas corretas. Gravado.
- 2026-10-17 15:17 — proc:lei-ordinaria, grupo 4 (apreciacao-do-veto, veto-mantido, promulgacao, promulgacao-pelo-presidente-do-senado, promulgacao-pelo-vice-presidente-do-senado, publicacao, vigencia, arquivamento) e regime urgencia-constitucional conferidos contra CF arts. 57, § 3º, IV, 64, §§ 1º-4º, 66, §§ 4º-7º, 67, 84, IV; RCCN arts. 1º, VI, 43, 104-A, 106-106-D; RISF arts. 48, I, 52, II, 375; RICD arts. 24, 52, 139, 151, 204; LINDB art. 1º; LC 95 art. 8º; Decretos 9.215 e 11.329. Tudo correto. ACRESCENTADO: votação nominal no quórum do veto (RCCN art. 106-B) e ordem de votação (RCCN art. 43); efeitos estruturados nos prazos de 48 h; publicação remete ao achado e cita Decreto 9.215, art. 11; arquivamento cita RISF arts. 101, § 1º, e 254. Regime de urgência (criado na migração): prazos estruturados conferidos (45 dias por Casa, contados do recebimento em cada uma; 10 dias para as emendas do Senado; sobrestamento salvo prazo constitucional; não correm no recesso nem valem para código) e ACRESCENTADOS os efeitos nas comissões (Câmara: 5 sessões, exame simultâneo e sem apreciação conclusiva; Senado: pareceres até o 25º dia, emendas só na 1ª comissão). Gravado.
- 2026-10-17 15:17 — proc:lei-ordinaria: VERIFICADO (24 etapas + regime). Fontes do processo atualizadas (acrescentados CF art. 14, III e 57, § 3º, IV; RICD arts. 34, 123, 144, 151; RISF arts. 49, 92, 101, 109, 254; Lei 9.709; Decretos 9.215 e 11.329). CORRIGIDAS as notas internas (2) e (3), desatualizadas depois da migração: a urgência já é regime e 'vigencia' não tem ator (antes diziam que era etapa lateral e que o ator era org:congresso-nacional).
- 2026-10-17 15:17 — org:plenario-da-camara-dos-deputados: verificado: CF arts. 47 e 58, § 2º, I; RICD arts. 132, IV, e 183
- 2026-10-17 15:17 — org:plenario-do-senado-federal: verificado: CF arts. 47 e 58, § 2º, I; RISF arts. 91, §§ 3º-5º, e 288
- 2026-10-17 15:17 — org:comissoes-da-camara-dos-deputados: verificado: CF art. 58; RICD arts. 22, 24 e 32 (lista das permanentes)
- 2026-10-17 15:17 — org:comissoes-do-senado-federal: verificado: CF art. 58; RISF arts. 71, 72 (16 permanentes além da Comissão Diretora) e 91
- 2026-10-17 15:17 — org:comissoes-mistas-do-congresso-nacional: verificado: CF arts. 58 e 61; RCCN arts. 9º (designação pelo Presidente do Senado por indicação dos líderes), 10 (11+11), 10-A e 142
- 2026-10-17 15:18 — org:ccjc-camara: verificado; CORRIGIDO: 'faz a redação final quando as comissões decidem de forma conclusiva' era estreito demais → 'elabora a redação final das proposições em geral' (RICD art. 32, IV, q); fonte acrescida
- 2026-10-17 15:18 — org:cft-camara: verificado: RICD arts. 32, X, 53, II, 54, II, 139, II, b
- 2026-10-17 15:18 — org:ccj-senado: verificado: RISF arts. 72, III, e 101 (I e II); nota sobre não obrigatoriedade correta
- 2026-10-17 15:18 — org:imprensa-nacional: verificado: Decreto 11.329, Anexo I, art. 2º, II, g (Decreto 12.169/2024) e art. 38, I e parágrafo único; Decreto 9.215, arts. 2º e 3º. Notas reescritas sem citar o id inexistente org:casa-civil (tirava aviso do validador)
- 2026-10-17 15:18 — org:ministerio-publico-da-uniao: verificado: CF arts. 127, § 2º, e 128, I, a-d, e § 1º
- 2026-10-17 15:18 — org:stj: verificado: CF arts. 61, 64, 92, II, 96, II, 104 (mínimo 33, maioria absoluta do Senado) e 105, III
- 2026-10-17 15:18 — org:tst: verificado: CF arts. 92, II-A (EC 92/2016), 111-A (27 ministros, maioria absoluta do Senado), 61, 96, II
- 2026-10-17 15:18 — org:tse: verificado: CF arts. 92, V, 118, I, 119 (mínimo 7: 3 do STF, 2 do STJ, 2 advogados de lista de 6 do STF)
- 2026-10-17 15:18 — org:stm: verificado: CF arts. 92, VI, 122, I, 123 (15 vitalícios: 3 Marinha, 4 Exército, 3 Aeronáutica, 5 civis; aprovação do Senado sem quórum especial)
- 2026-10-17 15:18 — cargo:procurador-geral-da-republica: verificado: CF art. 128, §§ 1º (maiores de 35, maioria absoluta do Senado, 2 anos, recondução), 2º, 3º e 5º; art. 61
- 2026-10-17 15:18 — cargo:primeiro-vice-presidente-do-senado-federal: verificado: CF arts. 57, § 4º, e 66, § 7º; RISF arts. 46, 52, I e II, 53, 59 (nota da ADI 6524) e 60 (escrutínio secreto, maioria de votos, presente a maioria)
- 2026-10-17 15:19 — rel:congresso-nacional-aprecia-veto-lei-ordinaria: verificado (CF 57, § 3º, IV; 66, §§ 4º e 6º; RCCN 43, 104-A, 106); ACRESCENTADO votacao 'nominal' no quórum e RCCN art. 106-B
- 2026-10-17 15:19 — rel:presidente-da-republica-promulga-lei-ordinaria: verificado; CORRIGIDO: condição dizia só 'Em 48 horas, nos casos de sanção tácita e de veto derrubado', como se ele só promulgasse nesses casos → 'Promulga a lei que sancionou; nos casos de sanção tácita e de veto derrubado, tem 48 horas' (CF 66, §§ 5º e 7º; 84, IV)
- 2026-10-17 15:19 — rel:presidente-da-republica-sanciona-lei-ordinaria: verificado; acrescentado art. 66, § 1º (origem dos 'dias úteis') e nota remetendo ao achado
- 2026-10-17 15:19 — rel:imprensa-nacional-publica-lei-ordinaria: verificado (Decreto 9.215, arts. 2º-3º; Decreto 11.329, Anexo I, art. 38, I); notas atualizadas com as datas de vigência dos decretos
- 2026-10-17 15:19 — rel:comissoes-camara-deliberam-lei-ordinaria: verificado (CF 58, § 2º, I; RICD 24, II e 58)
- 2026-10-17 15:19 — rel:comissoes-camara-propoem-lei-ordinaria: verificado (CF 61; RICD 109, § 1º, II e 24, II, d)
- 2026-10-17 15:19 — rel:comissoes-mistas-propoem-lei-ordinaria: verificado (CF 61; RCCN 142)
- 2026-10-17 15:19 — rel:comissoes-senado-deliberam-lei-ordinaria: verificado (CF 58, § 2º, I; RISF 91)
- 2026-10-17 15:19 — rel:comissoes-senado-propoem-lei-ordinaria: verificado (CF 61)
- 2026-10-17 15:19 — rel:deputado-federal-propoe-lei-ordinaria: verificado (CF 61; RICD 109, § 1º, I)
- 2026-10-17 15:19 — rel:eleitorado-propoe-lei-ordinaria: verificado (CF 14, III e 61, § 2º; Lei 9.709, art. 13; RICD 252)
- 2026-10-17 15:19 — rel:pgr-propoe-lei-ordinaria: verificado (CF 61 e 127, § 2º; RICD 109, § 1º, VII)
- 2026-10-17 15:19 — rel:plenario-camara-delibera-lei-ordinaria: verificado (CF 47 e 65; RICD 132, IV e 183)
- 2026-10-17 15:19 — rel:plenario-senado-delibera-lei-ordinaria: verificado (CF 47 e 65; RISF 288)
- 2026-10-17 15:19 — rel:presidente-da-republica-propoe-lei-ordinaria: verificado (CF 61, 64 e 84, III)
- 2026-10-17 15:19 — rel:presidente-da-republica-publica-lei-ordinaria: verificado (CF 84, IV)
- 2026-10-17 15:19 — rel:presidente-da-republica-veta-lei-ordinaria: verificado (CF 66, §§ 1º e 2º; 84, V)
- 2026-10-17 15:19 — rel:presidente-do-senado-promulga-lei-ordinaria: verificado (CF 66, § 7º; RISF 48, I)
- 2026-10-17 15:19 — rel:primeiro-vice-presidente-do-senado-promulga-lei-ordinaria: verificado (CF 66, § 7º; RISF 52, II)
- 2026-10-17 15:19 — rel:senador-propoe-lei-ordinaria: verificado (CF 61; RISF 91, I)
- 2026-10-17 15:19 — rel:stf-propoe-lei-ordinaria: verificado (CF 61, 64 e 96, II)
- 2026-10-17 15:19 — rel:stj-propoe-lei-ordinaria: verificado (CF 61, 64 e 96, II)
- 2026-10-17 15:19 — rel:stm-propoe-lei-ordinaria: verificado (CF 61, 64 e 96, II)
- 2026-10-17 15:19 — rel:tse-propoe-lei-ordinaria: verificado (CF 61, 64 e 96, II)
- 2026-10-17 15:19 — rel:tst-propoe-lei-ordinaria: verificado (CF 61, 64 e 96, II)
- 2026-10-17 — correção da contagem da linha de abertura: o escopo tem 54 entidades (25 relações, não 26).
- 2026-10-17 — pontos em aberto: (1) RISF/RCCN: resolvido no essencial (nenhuma RSF/RCN posterior a jul/2025 altera os regimentos, segundo a API do Senado; ressalva RSF 46/2026 não indexada); achado mantido porque o texto consolidado oficial continua desatualizado. (2) Sanção tácita: leitura '15 dias úteis' mantida; achado continua aberto, agora com a PEC 48/2017 (arquivada) como prova de que o Senado reconhece a ambiguidade. (3) Publicação após promulgação supletiva: continua aberto quanto a quem ordena; a prática (DOU) e o Decreto 9.215, art. 11, foram registrados. (4) Regime de urgência e prazos estruturados: conferidos, completados com os efeitos nas comissões.
- 2026-10-17 — sugestões, sem alteração: (a) a ação da etapa 'promulgacao' ('declarando que ela existe e deve ser cumprida') é glosa doutrinária, sem dispositivo; (b) falta org:casa-civil para preencher contido_em da Imprensa Nacional; (c) o Segundo Vice-Presidente do Senado (RISF art. 53) não está modelado; (d) a Mesa da Câmara também pode propor projeto de lei (RICD art. 109, § 1º, II), não modelada como ator.
- 2026-10-17 — concluída: 54 entidades verificadas, nenhuma pendente; validação sem erros. Tarefa marcada como verificada.
