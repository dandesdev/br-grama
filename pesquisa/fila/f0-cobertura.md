---
id: f0-cobertura
escopo: "Fatia 0: varredura da CF artigo por artigo (D04): o que a Constituição prevê de estrutura do Estado e ainda não está no mapa"
status: concluida
depende_de: []
iniciada_em: 2026-10-23
concluida_em: 2026-10-23
---

## Como trabalhar

Esta tarefa não cria entidades. Ela lê a CF inteira e diz, artigo por artigo, o que falta. As lacunas viram tarefas de coleta depois.

Ponto de partida: `npm run -s cobertura` gera `pesquisa/cobertura-cf.md`, com os artigos que nenhuma entidade cita em `fontes` e a contagem dos que são citados. Citar não é cobrir; não citar não é lacuna. Rode de novo no fim, porque outras tarefas podem mudar os dados enquanto você trabalha.

Critério de escopo (D04, D05): entra no mapa todo **órgão, cargo, competência e procedimento** que a CF prevê para a estrutura do Estado. Direitos, princípios e regras materiais (ex.: direitos sociais, princípios da ordem econômica, proteção da família) ficam fora, **a menos que** o artigo crie um órgão, um cargo, um sistema, um fundo, uma competência de um ente ou órgão, ou um procedimento entre órgãos (ex.: art. 224 cria o Conselho de Comunicação Social; art. 103-A dá ao STF a súmula vinculante; art. 198 organiza o SUS).

## Entregáveis

- [x] Para cada artigo vigente da CF (arts. 1º a 250, com os de letra) e do ADCT, uma classificação no quadro abaixo:
  - `coberto`: há entidade que representa o que o artigo prevê (cite o id)
  - `parcial`: há entidade, mas falta parte (diga o quê)
  - `lacuna`: o artigo prevê órgão, cargo, competência ou procedimento que não está no mapa (diga o quê e proponha id e tipo)
  - `fora`: direito, princípio ou regra material sem órgão, cargo, competência ou procedimento próprio (uma palavra de motivo basta)
  - `transitorio-esgotado` (só ADCT): regra que já produziu efeito e não estrutura o Estado em 2026-10-01
  Artigos citados no relatório também precisam de classificação: confira por amostragem que a citação de fato cobre o artigo, e classifique todos.
- [x] Lista das lacunas agrupadas em propostas de tarefa de coleta (tema, artigos, entidades propostas, fontes prováveis), em ordem de importância para quem quer entender como o Estado funciona.
- [x] Percentual de cobertura: (coberto + parcial/2) / (total − fora − transitorio-esgotado), para CF e ADCT separados.
- [x] Erros de dispositivo achados no caminho (entidade que cita artigo errado): liste com o id; não corrija.

## Quadro

| Artigo | Classificação | Entidade ou o que falta |
|---|---|---|
| art. 1º | coberto | Federação: `ente:uniao` e entes estaduais e municipais; parágrafo único (povo exerce o poder): `org:eleitorado-nacional` |
| art. 2º | coberto | `org:poder-legislativo-federal`, `org:poder-executivo-federal`, `org:poder-judiciario` e as relações `integra` com `ente:uniao` |
| art. 3º | fora | objetivos |
| art. 4º | fora | princípios das relações internacionais. A citação em `proc:ciclo-orcamentario` é falso positivo do leitor do script (dispositivo "arts. 47, 49, IX, 51, II, …") |
| art. 5º | parcial | Júri (XXXVIII): `org:tribunais-do-juri`, `org:tribunais-do-juri-federais`, `cargo:jurado`, `rel:tribunais-do-juri-julga-acao-penal-publica`; remédios (LXVIII a LXXIII): `obj:habeas-corpus`, `obj:mandado-de-seguranca`, `obj:mandado-de-injuncao`, `obj:habeas-data`, `obj:acao-popular` e as relações `julga` das cortes; § 3º em `obj:tratado-internacional`. Falta: adesão ao Tribunal Penal Internacional (§ 4º; proposta `org:tribunal-penal-internacional`, organismo internacional, D05). Lacuna para a fase das leis estruturantes (D04): o vínculo vem do tratado e da lei que o promulga, não da CF. O resto é direito individual (fora) |
| art. 6º | fora | direitos sociais |
| art. 7º | fora | direitos dos trabalhadores |
| art. 8º | fora | organização sindical. A citação em `cargo:vice-presidente-da-republica` é falso positivo do leitor (dispositivo "arts. 79, 89, I, e 91, I") |
| art. 9º | fora | direito de greve |
| art. 10 | fora | participação em colegiados (princípio) |
| art. 11 | fora | representação de empregados |
| art. 12 | parcial | § 3º (cargos privativos de brasileiro nato) nos requisitos dos cargos da cúpula, de `cargo:ministro-de-estado` (Defesa) e de `org:ministerio-da-defesa`. Falta: carreira diplomática e oficial das Forças Armadas (§ 3º, V e VI) como cargos agregados (`cargo:chefe-de-missao-diplomatica-permanente` cobre só os chefes de missão). Lacuna para a fase das leis estruturantes (D04): as carreiras vêm da Lei 11.440/2006 (`norma:lei-11440-2006`) e do estatuto dos militares; baixa prioridade. O resto (aquisição e perda da nacionalidade) é direito material |
| art. 13 | fora | idioma e símbolos |
| art. 14 | coberto | eleitorados, `proc:eleicao-geral`, `proc:eleicao-municipal`, `obj:registro-de-candidatura`, `obj:acao-de-impugnacao-de-mandato-eletivo`, requisitos de idade nos cargos eletivos; plebiscito e referendo (I e II): `obj:plebiscito-e-referendo`, `rel:congresso-convoca-plebiscito-e-referendo`, `rel:eleitorado-nacional-delibera-plebiscito-e-referendo`, `rel:tse-homologa-plebiscito-e-referendo`; iniciativa popular (III) em `proc:lei-ordinaria`. Juiz de paz eletivo (§ 3º, VI, c): `cargo:juiz-de-paz` (ver art. 98) |
| art. 15 | coberto | `obj:perda-ou-suspensao-de-direitos-politicos` |
| art. 16 | fora | anterioridade da lei eleitoral (regra material); citado em `proc:eleicao-geral` |
| art. 17 | coberto | `org:partidos-politicos`, partidos e federações, `obj:estatuto-de-partido-politico`, `obj:fundo-partidario`, `obj:fefc`, `rel:partidos-politicos-presta-contas-a-justica-eleitoral`, `rel:tse-aprecia-para-registro-estatuto-de-partido` |
| art. 18 | coberto | Entes (`ente:uniao`, estaduais, `ente:df`, municipais); `org:territorios-federais` (§ 2º); `proc:alteracao-territorial-de-estados` (§ 3º, com plebiscito e lei complementar); `proc:alteracao-territorial-de-municipios` (§ 4º) |
| art. 19 | fora | vedações aos entes |
| art. 20 | coberto | Os bens da União (caput) são regra material. § 1º: `obj:compensacao-financeira-recursos-naturais`, `rel:anp-repassa-royalties-do-petroleo-estados`, `rel:anp-repassa-royalties-do-petroleo-municipios`. Detalhe: compensações de hidrelétricas e da mineração são pagas direto aos entes e ficam no texto do objeto |
| art. 21 | coberto | matriz de competências: relações `tem-competencia` da União para cada inciso (I a XXVI) |
| art. 22 | coberto | matriz de competências: incisos I a XXX |
| art. 23 | coberto | matriz de competências: competência comum, incisos I a XII |
| art. 24 | coberto | matriz de competências: concorrente, incisos I a XVI e §§ |
| art. 25 | coberto | `obj:constituicao-estadual`, `obj:lei-estadual`, `proc:lei-estadual`, `obj:materia-competencias-remanescentes`, `obj:materia-gas-canalizado`, `org:arquetipo-estadual-regioes-metropolitanas` |
| art. 26 | fora | bens dos estados |
| art. 27 | coberto | `org:arquetipo-estadual-assembleia-legislativa`, `cargo:arquetipo-estadual-deputado-estadual`, `rel:eleitorado-estadual-propoe-lei-estadual` (§ 4º) |
| art. 28 | coberto | `cargo:arquetipo-estadual-governador`, `cargo:arquetipo-estadual-vice-governador`, `org:arquetipo-estadual-secretarias`, `proc:eleicao-geral` |
| art. 29 | coberto | Lei orgânica, eleição e cargos municipais, julgamento do prefeito pelo TJ (X); processo legislativo municipal: `obj:lei-municipal`, `proc:lei-municipal` (com o regime de urgência do prefeito), `rel:vereador-propoe-lei-municipal`, `rel:prefeito-propoe-lei-municipal`, `rel:camara-municipal-delibera-lei-municipal`, `rel:prefeito-sanciona-lei-municipal`, `rel:prefeito-veta-lei-municipal`, `rel:camara-municipal-aprecia-veto-lei-municipal`; iniciativa popular (XIII): `rel:eleitorado-municipal-propoe-lei-municipal` |
| art. 29-A | coberto | `obj:limites-de-despesa-da-camara-municipal`, `rel:prefeito-repassa-recursos-camara-municipal` |
| art. 30 | coberto | matriz de competências dos municípios (I a IX) |
| art. 31 | coberto | `org:arquetipo-municipal-controle-interno`, `rel:camara-municipal-fiscaliza-prefeitura`, `rel:camara-municipal-julga-contas-prefeito`, `rel:tce-parecer-previo-contas-prefeito`, TCMs e variações |
| art. 32 | coberto | `org:camara-legislativa-do-df`, `var:df-*` (sem municípios, polícias e bombeiros mantidos pela União) |
| art. 33 | coberto | `org:territorios-federais` (não há território em 2026-10-01; a organização prevista no artigo fica latente) |
| art. 34 | coberto | `proc:intervencao-federal` |
| art. 35 | coberto | `proc:intervencao-estadual` (governador decreta, Assembleia aprecia, TJ provê a representação do IV; remete a `proc:intervencao-federal` do decreto em diante); `aviso:ba-constituicao-tcm-representacao-intervencao` |
| art. 36 | coberto | `proc:intervencao-federal`, `rel:congresso-delibera-intervencao-defesa-e-sitio` |
| art. 37 | coberto | § 4º em `obj:perda-ou-suspensao-de-direitos-politicos` e `obj:acao-de-improbidade-administrativa` (MP e entes lesados ajuízam); XXII em `org:receita-federal`; administração indireta (XIX e XX): exemplos dos quatro tipos (`org:inss`, `org:ibge`, `org:caixa-economica-federal`, `org:correios`, `org:petrobras`, `org:banco-do-brasil` e outros, D39) com `aviso:administracao-indireta-lista-nao-exaustiva` (D07). Detalhe: ouvidorias e participação do usuário (§ 3º) sem nó, baixa prioridade |
| art. 38 | fora | servidor no exercício de mandato |
| art. 39 | coberto | Escola de governo (§ 2º): `org:enap`, `rel:enap-vincula-se-mgi`. Conselho de política de administração e remuneração (caput): não localizado na União, registrado em `aviso:conselho-politica-administracao-remuneracao-nao-localizado`. O resto é regime de pessoal (fora) |
| art. 40 | coberto | Aposentadoria compulsória nos requisitos dos cargos (§ 1º, II); contribuição em `obj:tributo-contribuicao-previdenciaria-dos-servidores`; regime próprio e unidade gestora (§§ 20 e 22): `org:arquetipo-estadual-unidade-gestora-do-rpps`, `org:arquetipo-municipal-unidade-gestora-do-rpps`, `rel:ministerio-da-previdencia-social-regula-rpps-estaduais`, `rel:ministerio-da-previdencia-social-regula-rpps-municipais`; previdência complementar (§§ 14 a 16): `org:funpresp-exe`, `rel:previc-fiscaliza-funpresp-exe`. Detalhe: na União não há unidade gestora única (Decreto 10.620/2021; nota nos arquétipos) |
| art. 41 | fora | estabilidade do servidor |
| art. 42 | coberto | `org:arquetipo-estadual-policia-militar`, `org:arquetipo-estadual-corpo-de-bombeiros-militar`, TJMs |
| art. 43 | coberto | `org:sudam`, `org:sudene`, `org:sudeco` (autarquias, D39) com `rel:sudam-vincula-se-ministerio-da-integracao`, `rel:sudene-vincula-se-ministerio-da-integracao`, `rel:sudeco-vincula-se-ministerio-da-integracao` |
| art. 44 | coberto | `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `rel:congresso-exerce-poder-legislativo` |
| art. 45 | coberto | `cargo:deputado-federal`, `rel:eleitorado-elege-deputado-federal`, `norma:lc-78-1993` |
| art. 46 | coberto | `cargo:senador`, `rel:eleitorado-elege-senador` |
| art. 47 | coberto | quórum nas relações `delibera` dos plenários e nos processos legislativos |
| art. 48 | coberto | competência legislativa do Congresso com sanção: `proc:lei-ordinaria`, `obj:lei-ordinaria`, `rel:congresso-delibera-ppa`/`ldo`/`loa` |
| art. 49 | coberto | I a XIII cobertos (tratados, autorizações ao Presidente, defesa/sítio/intervenção, sustação, contas, radiodifusão, TCU); XIV: `rel:congresso-autoriza-atividades-nucleares`; XV: `rel:congresso-convoca-plebiscito-e-referendo`; XVI: `rel:congresso-autoriza-exploracao-em-terras-indigenas`; XVII: `rel:congresso-autoriza-alienacao-de-terras-publicas`; XVIII: `obj:estado-de-calamidade-publica-nacional`, `rel:congresso-delibera-estado-de-calamidade-publica-nacional`, `proc:calamidade-publica-nacional`; forma do ato em `proc:decreto-legislativo`. Detalhe: VII e VIII (fixar subsídios) sem relação, baixa prioridade |
| art. 50 | coberto | `rel:camara-convoca-ministro-de-estado`, `rel:senado-convoca-ministro-de-estado`, `rel:congresso-fiscaliza-poder-executivo`. Detalhe: não há cargo de presidente do Comitê Gestor do IBS, também convocável (já anotado em f0-fechamento) |
| art. 51 | coberto | `rel:camara-autoriza-processo-presidente`, `rel:camara-autoriza-processo-vice-presidente`, `rel:camara-toma-contas-presidente`, `rel:camara-elege-conselho-da-republica`, `norma:ricd` |
| art. 52 | coberto | I, II, III (a a f), V a IX (por resolução), X, XI, XIV e parágrafo único cobertos; I (comandantes): `rel:senado-julga-comandante-da-marinha`, `rel:senado-julga-comandante-do-exercito`, `rel:senado-julga-comandante-da-aeronautica`; IV: `cargo:chefe-de-missao-diplomatica-permanente`, `rel:senado-aprova-indicacao-chefe-de-missao-diplomatica-permanente`; XV: `rel:senado-monitora-sistema-tributario-nacional` (para `obj:sistema-tributario-nacional`) |
| art. 53 | parcial | Foro no STF (§ 1º) em `rel:stf-julga-deputado-federal` e `rel:stf-julga-senador`; sustação da ação penal (§§ 3º a 5º): `rel:camara-susta-acao-penal-contra-deputado`, `rel:senado-susta-acao-penal-contra-senador`. Falta: a Casa resolve sobre a prisão em flagrante (§ 2º) e suspensão das imunidades no estado de sítio (§ 8º). Fora do escopo da fatia 0 (decisão do coordenador em f0-fechamento, 2026-10-24, de pôr os dois na lista de descobertos): a prisão do parlamentar não é objeto do mapa e o § 8º é detalhe de `proc:estado-de-sitio` |
| art. 54 | fora | incompatibilidades do parlamentar (regra do mandato; citadas nos cargos) |
| art. 55 | coberto | Hipóteses citadas em `cargo:deputado-federal` e `cargo:senador`; procedimento: `proc:perda-de-mandato-parlamentar` (Casa decide nos casos I, II e VI; Mesa declara nos III a V), `org:conselho-de-etica-da-camara`, `org:conselho-de-etica-do-senado`, `aviso:perda-de-mandato-senado-risf-e-codigo-de-etica` |
| art. 56 | fora | licença, suplência e investidura em outros cargos (regra do mandato; citada nos cargos) |
| art. 57 | coberto | sessões, Mesas, `org:mesa-do-congresso-nacional`, convocação extraordinária nos processos de defesa, sítio e intervenção |
| art. 58 | coberto | comissões das Casas e mistas, CPIs e CPMIs, `proc:comissao-parlamentar-de-inquerito`, `org:comissao-representativa-do-congresso-nacional` |
| art. 59 | coberto | Objetos das sete espécies (`obj:emenda-constitucional` a `obj:resolucao`) e processos de todas: `proc:emenda-constitucional`, `proc:lei-complementar`, `proc:lei-ordinaria`, `proc:lei-delegada`, `proc:medida-provisoria`, `proc:decreto-legislativo`, `proc:resolucao` |
| art. 60 | coberto | `proc:emenda-constitucional`, `obj:emenda-constitucional`, proponentes e promulgação pelas Mesas |
| art. 61 | coberto | relações `propoe` de todos os legitimados, iniciativa popular (`rel:eleitorado-propoe-lei-ordinaria`) |
| art. 62 | coberto | `proc:medida-provisoria`, `obj:medida-provisoria`, `rel:presidente-da-republica-edita-medida-provisoria` |
| art. 63 | coberto | restrição de emendas no `proc:lei-ordinaria` |
| art. 64 | coberto | casa iniciadora e urgência constitucional (regime) em `proc:lei-ordinaria` |
| art. 65 | coberto | revisão pela outra Casa em `proc:lei-ordinaria` |
| art. 66 | coberto | sanção, veto, apreciação do veto e promulgação supletiva (relações `sanciona`, `veta`, `aprecia-veto`, `promulga`) |
| art. 67 | coberto | `proc:lei-ordinaria` |
| art. 68 | coberto | `proc:lei-delegada`, `obj:lei-delegada` |
| art. 69 | coberto | `proc:lei-complementar` |
| art. 70 | coberto | `rel:congresso-fiscaliza-uniao`, `rel:cgu-controla-internamente-poder-executivo-federal`, `obj:contas-de-gestao` |
| art. 71 | coberto | relações do TCU para cada inciso (parecer prévio, julgamento de contas, registro de pessoal e aposentadorias, sanções, sustação, representação) |
| art. 72 | coberto | `proc:despesa-nao-autorizada` |
| art. 73 | coberto | `cargo:ministro-do-tcu`, `cargo:ministro-substituto-do-tcu`, escolha pelo Presidente e pelo Congresso |
| art. 74 | coberto | controle interno dos Poderes (`org:cgu`, `org:secretaria-de-controle-interno-da-camara`, `org:auditoria-do-senado-federal`, `org:secretaria-de-auditoria-interna-do-tcu`, CNJ), `rel:cgu-auxilia-tcu`, `proc:denuncia-ao-tcu` (§ 2º) |
| art. 75 | coberto | `org:arquetipo-estadual-tce`, `cargo:arquetipo-estadual-conselheiro-do-tce`, TCEs, TCMs e variações |
| art. 76 | coberto | `cargo:presidente-da-republica`, `rel:presidente-exerce-poder-executivo`, `cargo:ministro-de-estado`, `rel:ministro-de-estado-auxilia-presidente` |
| art. 77 | coberto | `rel:eleitorado-elege-presidente-da-republica`, `rel:eleitorado-elege-vice-presidente-da-republica`, `proc:eleicao-geral` (dois turnos) |
| art. 78 | coberto | posse em sessão do Congresso em `proc:eleicao-geral` |
| art. 79 | coberto | `rel:vice-substitui-presidente`, `rel:vice-sucede-presidente` |
| art. 80 | coberto | linha de substituição com `ordem` (`rel:presidente-da-camara-substitui-…`, Senado, STF) |
| art. 81 | coberto | `rel:congresso-elege-presidente-da-republica` (eleição indireta), `rel:congresso-elege-vice-presidente-da-republica` |
| art. 82 | coberto | mandato em `cargo:presidente-da-republica` |
| art. 83 | coberto | `rel:congresso-autoriza-presidente-da-republica`, `rel:congresso-autoriza-vice-presidente-da-republica` |
| art. 84 | parcial | Incisos I a VI, VIII a X, XII a XX, XXII a XXVI e XXVIII têm relação; chefes de missão diplomática em `rel:presidente-indica-chefe-de-missao-diplomatica-permanente` e `rel:presidente-nomeia-chefe-de-missao-diplomatica-permanente`. Falta: VII (manter relações com Estados estrangeiros e acreditar seus representantes). Fora do escopo da fatia 0: Estados estrangeiros e seus diplomatas não são nós, e o verbo `acredita` não entra (decisão do coordenador em f0-fechamento, 2026-10-24). XI (mensagem ao Congresso) e XXI (condecorações) sem relação, baixa prioridade |
| art. 85 | coberto | `rel:senado-julga-presidente-crime-de-responsabilidade`, `norma:lei-1079-1950`, `aviso:lei-1079-adpf-1259-1260` |
| art. 86 | coberto | `proc:crime-de-responsabilidade-do-presidente` (admissão por 2/3 da Câmara, instauração pelo Senado, afastamento de 180 dias, julgamento presidido pelo Presidente do STF; regime para infração penal comum), `rel:camara-autoriza-processo-presidente`, `rel:senado-julga-presidente-crime-de-responsabilidade`, `rel:stf-julga-presidente-crime-comum` |
| art. 87 | coberto | `cargo:ministro-de-estado` e os ministérios |
| art. 88 | coberto | `norma:lei-14600-2023` (organização dos ministérios) |
| art. 89 | coberto | `org:conselho-da-republica` e membros I a VII: líderes da maioria e da minoria (`cargo:lider-da-maioria-na-camara-dos-deputados`, `cargo:lider-da-minoria-na-camara-dos-deputados`, `cargo:lider-da-maioria-no-senado-federal`, `cargo:lider-da-minoria-no-senado-federal`, com relações `integra` e ocupantes); seis cidadãos: `cargo:membro-cidadao-do-conselho-da-republica` (sem ocupantes: nenhum ato oficial achado) |
| art. 90 | coberto | `rel:conselho-da-republica-assessora-presidente`; participação nos processos de defesa, sítio e intervenção |
| art. 91 | coberto | `org:conselho-de-defesa-nacional`, membros natos, `rel:conselho-de-defesa-nacional-assessora-presidente`. Detalhe: § 1º, III (critérios de uso da faixa de fronteira) só no texto |
| art. 92 | coberto | `org:poder-judiciario` e todos os órgãos listados (STF, CNJ, STJ, TST, ramos da Justiça, TRFs, TRTs, TREs, STM, TJs, TJMs) |
| art. 93 | coberto | cargos de juiz e de desembargador (ingresso, promoção, aposentadoria). Detalhe: o órgão especial dos tribunais com mais de 25 julgadores (XI) não tem nó; baixa prioridade |
| art. 94 | coberto | quinto constitucional nos cargos de desembargador, juiz de TRF e de TRT, e em `rel:governador-nomeia-desembargador`, `rel:presidente-nomeia-juiz-de-trf` |
| art. 95 | fora | garantias e vedações dos juízes (regra do cargo; citada nos cargos) |
| art. 96 | coberto | `rel:ministros-do-stf-elegem-presidente-do-stf`, `rel:*-propoe-lei-*` dos tribunais, `rel:arquetipo-estadual-tj-julga-juiz-de-direito`, `rel:arquetipo-estadual-tj-julga-membro-do-ministerio-publico` |
| art. 97 | coberto | Reserva de plenário: `rel:poder-judiciario-controla-constitucionalidade-no-caso-concreto` (quórum de maioria absoluta) para `obj:lei-ou-ato-normativo-do-poder-publico`. Detalhe: o órgão especial (art. 93, XI) continua sem nó, baixa prioridade |
| art. 98 | coberto | I: `org:juizados-especiais-estaduais`, `org:turmas-recursais-estaduais`, `cargo:juiz-leigo`, `cargo:conciliador-dos-juizados-especiais`; § 1º: `org:juizados-especiais-federais`, `org:turmas-recursais-federais`, `org:turma-nacional-de-uniformizacao`; II: `org:justica-de-paz`, `cargo:juiz-de-paz`. Detalhe: custas e emolumentos destinados à Justiça (§ 2º) sem nó; ficam para depois da fatia 0 (decisão do coordenador em f0-fechamento, 2026-10-28) |
| art. 99 | coberto | autonomia e proposta orçamentária do Judiciário em `proc:ciclo-orcamentario` |
| art. 100 | coberto | `obj:precatorio`, `obj:limite-de-pagamento-de-precatorios`, `proc:pagamento-de-precatorio` (com o regime do § 23 e o do ADCT, art. 101), `rel:cnj-regulamenta-precatorio`. Detalhe: §§ 11, 13 a 22 e 29 só em notas e detalhes |
| art. 101 | coberto | `cargo:ministro-do-stf`, indicação, aprovação pelo Senado e nomeação |
| art. 102 | coberto | I, a e p: `obj:adi-e-adc`, `rel:stf-julga-adi-e-adc`; b e c (foro): `rel:stf-julga-*`; d, i e q: remédios (`rel:stf-julga-habeas-corpus`, `rel:stf-julga-mandado-de-seguranca`, `rel:stf-julga-habeas-data`, `rel:stf-julga-mandado-de-injuncao`); e: `rel:stf-julga-litigio-com-estado-estrangeiro`; f: `rel:stf-julga-conflito-federativo`; g: `rel:stf-julga-extradicao` e `proc:extradicao`; j: `rel:stf-julga-revisao-criminal-e-acao-rescisoria`; l: `rel:stf-julga-reclamacao`; m: `rel:stf-julga-execucao-de-sentenca`; n: `rel:stf-julga-acao-de-interesse-da-magistratura`; o: `rel:stf-julga-conflito-de-competencia`; r: `rel:stf-julga-cnj`, `rel:stf-julga-cnmp`; II: recursos ordinários e `rel:stf-julga-recursos-crime-politico`; III: `rel:stf-julga-recurso-extraordinario`; § 1º: `obj:adpf`, `rel:stf-julga-adpf` |
| art. 103 | coberto | `obj:adi-e-adc` (ADI, ADO e ADC) com os legitimados I a IX (`rel:presidente-ajuiza-adi-e-adc`, `rel:mesa-do-senado-ajuiza-adi-e-adc`, `rel:mesa-da-camara-ajuiza-adi-e-adc`, `rel:arquetipo-estadual-assembleia-legislativa-ajuiza-adi-e-adc`, `rel:camara-legislativa-do-df-ajuiza-adi-e-adc`, `rel:arquetipo-estadual-governador-ajuiza-adi-e-adc`, `rel:pgr-ajuiza-adi-e-adc`, `rel:conselho-federal-da-oab-ajuiza-adi-e-adc`, `rel:partidos-politicos-ajuiza-adi-e-adc`, `rel:confederacoes-sindicais-e-entidades-de-classe-ajuiza-adi-e-adc`); omissão (§ 2º) no objeto e em `rel:stf-julga-adi-e-adc`; AGU (§ 3º) citado no cargo |
| art. 103-A | coberto | `obj:sumula-vinculante`, `rel:stf-edita-sumula-vinculante` (dois terços), relações `propoe-sumula-vinculante` dos legitimados (§ 2º e Lei 11.417/2006); reclamação (§ 3º) em `obj:reclamacao` e `rel:stf-julga-reclamacao` |
| art. 103-B | coberto | `org:cnj`, `cargo:conselheiro-do-cnj`, indicações, `rel:cnj-controla-internamente-poder-judiciario`, `rel:cnj-corrige-poder-judiciario` |
| art. 104 | coberto | `cargo:ministro-do-stj`, `rel:stj-indica-ministro-do-stj`, aprovação e nomeação |
| art. 105 | parcial | Foro (I, a) completo: governadores, desembargadores, juízes de TRF, TRE e TRT, membros do MPU, `rel:stj-julga-conselheiro-do-tce`, `rel:stj-julga-procurador-regional-eleitoral`; remédios (I, b, c, h; II, a e b); I, d: `rel:stj-julga-conflito-de-competencia`; I, e: `rel:stj-julga-revisao-criminal-e-acao-rescisoria`; I, f: `rel:stj-julga-reclamacao`; I, g: `rel:stj-julga-conflito-de-atribuicoes`; recursos ordinário e especial; § 1º: `org:enfam`, `org:conselho-da-justica-federal`. Falta: conflitos entre entes, ou entre eles e o Comitê Gestor do IBS (I, j, EC 132/2023; proposta `rel:stj-julga-conflito-com-comite-gestor-do-ibs`, ou ampliar `obj:conflito-federativo`). Lacuna para a fase das leis estruturantes (D04), junto com a lei complementar do IBS |
| art. 106 | coberto | `org:justica-federal`, `org:trf-1` a `org:trf-6`, `cargo:juiz-federal` |
| art. 107 | coberto | `cargo:juiz-de-trf`, `rel:presidente-nomeia-juiz-de-trf` |
| art. 108 | coberto | I, a: `rel:trf-1-julga-juiz-federal` e equivalentes (juízes federais, do trabalho e da Justiça Militar, membros do MPU; uma relação por TRF, as do TRF-6 desde 2022); I, b: `rel:trf-1-julga-revisao-criminal-e-acao-rescisoria` e equivalentes; I, c e d: `rel:justica-federal-julga-mandado-de-seguranca`, `rel:justica-federal-julga-habeas-data`, `rel:justica-federal-julga-habeas-corpus`; II: `rel:trf-1-julga-recursos-dos-juizes-federais` e equivalentes. Detalhe: I, e (conflitos de competência entre juízes federais) só nos detalhes de `obj:conflito-de-competencia` |
| art. 109 | coberto | competência dos juízes federais em `org:justica-federal` e `cargo:juiz-federal`; delegação aos juízes de direito (§§ 3º e 4º) em `cargo:juiz-de-direito` |
| art. 110 | coberto | seções judiciárias em `org:justica-federal` |
| art. 111 | coberto | `org:justica-do-trabalho`, `org:tst`, TRTs, `cargo:juiz-do-trabalho` |
| art. 111-A | coberto | `cargo:ministro-do-tst`, `rel:tst-indica-ministro-do-tst`, `rel:tst-julga-recursos-da-justica-do-trabalho`; § 2º: `org:enamat`, `org:csjt`, `rel:csjt-supervisiona-justica-do-trabalho` |
| art. 112 | coberto | varas do trabalho e jurisdição trabalhista do juiz de direito em `org:justica-do-trabalho` |
| art. 113 | coberto | `org:justica-do-trabalho` |
| art. 114 | coberto | competência em `org:justica-do-trabalho` (o dissídio coletivo do MPT, § 3º, só no texto) |
| art. 115 | coberto | TRTs, `cargo:juiz-de-trt`, `rel:presidente-nomeia-juiz-de-trt` |
| art. 116 | coberto | `cargo:juiz-do-trabalho` |
| art. 118 | coberto | `org:justica-eleitoral`, `org:tse`, TREs, `cargo:juiz-eleitoral`, `org:juntas-eleitorais` |
| art. 119 | coberto | `cargo:ministro-do-tse`, `rel:stf-elege-ministro-do-tse`, `rel:stj-elege-ministro-do-tse`, `rel:presidente-nomeia-ministro-do-tse` |
| art. 120 | coberto | TREs e `cargo:juiz-de-tre` com `provimento_casos` (eleição pelo TJ e pelo TRF, nomeação de advogados) |
| art. 121 | coberto | `rel:tse-julga-recursos-da-justica-eleitoral`, `rel:stf-julga-recursos-do-tse`, juntas e juízes eleitorais |
| art. 122 | coberto | `org:justica-militar-da-uniao`, `org:stm`, `cargo:juiz-federal-da-justica-militar` |
| art. 123 | coberto | `cargo:ministro-do-stm`, nomeação e aprovação pelo Senado |
| art. 124 | coberto | competência em `org:justica-militar-da-uniao`; `rel:stm-julga-recursos-da-justica-militar-da-uniao` |
| art. 125 | coberto | `org:justica-estadual`, TJs, TJMs (§§ 3º a 5º), `rel:arquetipo-estadual-tj-controla-constitucionalidade-leis-estaduais-e-municipais` (§ 2º) |
| art. 126 | coberto | varas agrárias citadas em `org:justica-estadual` |
| art. 127 | coberto | `org:ministerio-publico-da-uniao`, `org:arquetipo-estadual-ministerio-publico`, iniciativa de lei (`rel:pgr-propoe-lei-ordinaria`), proposta orçamentária em `proc:ciclo-orcamentario` |
| art. 128 | coberto | MPU e seus ramos (`org:mpf`, `org:mpt`, `org:mpm`, `org:mpdft`), `cargo:procurador-geral-da-republica` (nomeação, aprovação e destituição), `cargo:arquetipo-estadual-procurador-geral-de-justica`, `aviso:destituicao-procurador-geral-de-justica-quorum` |
| art. 129 | coberto | Ação penal pública e ação civil pública (`rel:mpu-promove-*`, `rel:arquetipo-estadual-ministerio-publico-promove-*`); representação para intervenção em `proc:intervencao-federal` e `proc:intervencao-estadual`; controle externo da atividade policial (VII): `rel:mpu-fiscaliza-policia-federal`, `rel:mpu-fiscaliza-policia-rodoviaria-federal`, `rel:mpu-fiscaliza-policia-ferroviaria-federal`, `rel:mpu-fiscaliza-policia-penal-federal`, `rel:arquetipo-estadual-ministerio-publico-fiscaliza-policia-civil`, `rel:arquetipo-estadual-ministerio-publico-fiscaliza-policia-militar`, `rel:arquetipo-estadual-ministerio-publico-fiscaliza-policia-penal` (polícias do DF pelo arquétipo, com `var:df-mpdft`). Detalhe: requisição de inquérito (VIII) e defesa judicial das populações indígenas (V) sem relação, baixa prioridade; polícias legislativas ficam para depois da fatia 0 (decisão do coordenador em f0-fechamento, 2026-10-28) |
| art. 130 | coberto | `org:mp-junto-ao-tcu`; MPs junto aos tribunais de contas dos estados: `org:arquetipo-estadual-mp-de-contas`, `cargo:arquetipo-estadual-procurador-de-contas`. Detalhe: MPs junto aos TCMs (SP, RJ e TCMs estaduais) não modelados; ficam para depois da fatia 0 (decisão do coordenador em f0-fechamento, 2026-10-28) |
| art. 130-A | coberto | `org:cnmp`, `cargo:conselheiro-do-cnmp`, indicações, controle e correição |
| art. 131 | coberto | `org:agu`, `cargo:advogado-geral-da-uniao`, `org:pgfn` (§ 3º), `rel:agu-representa-judicialmente-uniao` |
| art. 132 | coberto | `org:arquetipo-estadual-procuradoria-geral`, `cargo:arquetipo-estadual-procurador-do-estado` |
| art. 133 | coberto | `org:oab`, `norma:lei-8906-1994` |
| art. 134 | coberto | `org:dpu`, `org:arquetipo-estadual-defensoria-publica`, cargos de defensor, autonomia orçamentária. Detalhe: Defensoria do DF já anotada em f0-fechamento |
| art. 135 | fora | remuneração por subsídio (regra de pessoal) |
| art. 136 | coberto | `proc:estado-de-defesa` |
| art. 137 | coberto | `proc:estado-de-sitio` |
| art. 138 | coberto | `proc:estado-de-sitio` |
| art. 139 | coberto | medidas do sítio em `proc:estado-de-sitio` |
| art. 140 | coberto | comissão de acompanhamento nas etapas de `proc:estado-de-defesa` e `proc:estado-de-sitio` |
| art. 141 | coberto | relatório final ao Congresso nas etapas dos dois processos |
| art. 142 | coberto | `org:forcas-armadas`, `org:marinha`, `org:exercito`, `org:aeronautica`, `rel:forcas-armadas-subordinam-se-presidente`, `proc:emprego-das-forcas-armadas-na-glo` |
| art. 143 | coberto | serviço militar em `org:forcas-armadas`, `norma:lei-4375-1964` |
| art. 144 | coberto | Todos os órgãos dos incisos I a VI, guardas municipais (§ 8º), `org:sistema-unico-de-seguranca-publica` (§ 7º); segurança viária (§ 10): `org:arquetipo-estadual-orgao-executivo-de-transito`, `org:arquetipo-municipal-orgao-executivo-de-transito` |
| art. 145 | coberto | matriz tributária: `obj:tributo-taxas`, `obj:tributo-contribuicao-de-melhoria` e competências dos três níveis |
| art. 146 | coberto | `obj:limitacoes-ao-poder-de-tributar` (II); regime único das micro e pequenas empresas (III, d, e §§ 1º a 3º): `obj:simples-nacional`, `org:comite-gestor-do-simples-nacional`, `rel:cgsn-regulamenta-simples-nacional` |
| art. 146-A | fora | critério especial de tributação (regra material) |
| art. 147 | coberto | competência tributária no DF e nos territórios na matriz (IPTU, ISS, ITBI) |
| art. 148 | coberto | `obj:tributo-emprestimo-compulsorio` |
| art. 149 | coberto | `obj:tributo-cide`, `obj:tributo-contribuicoes-corporativas`, `obj:tributo-contribuicao-previdenciaria-dos-servidores` |
| art. 149-A | coberto | `obj:tributo-contribuicao-de-iluminacao-publica` |
| art. 149-B | coberto | regras comuns ao IBS e à CBS em `obj:tributo-cbs` |
| art. 149-C | fora | destinação do IBS e da CBS nas compras públicas (regra material) |
| art. 150 | coberto | `obj:limitacoes-ao-poder-de-tributar` e anterioridades nos tributos |
| art. 151 | coberto | `obj:limitacoes-ao-poder-de-tributar` |
| art. 152 | coberto | `obj:limitacoes-ao-poder-de-tributar` |
| art. 153 | coberto | impostos da União na matriz; `rel:uniao-repassa-iof-ouro-*` (§ 5º) |
| art. 154 | coberto | `obj:tributo-impostos-residuais`, `obj:tributo-impostos-extraordinarios-de-guerra` |
| art. 155 | coberto | ICMS, IPVA, ITCMD; resolução do Senado (§ 2º, IV) |
| art. 156 | coberto | IPTU, ISS, ITBI |
| art. 156-A | coberto | `obj:tributo-ibs` e competências |
| art. 156-B | coberto | `org:comite-gestor-do-ibs`, `rel:comite-gestor-do-ibs-arrecada-ibs`. Detalhe: presidente do Comitê Gestor sem cargo (já anotado em f0-fechamento) |
| art. 157 | coberto | `rel:ir-fonte-pertence-aos-estados`, `rel:uniao-repassa-impostos-residuais-estados` |
| art. 158 | coberto | repasses aos municípios (IR na fonte, ITR, IPVA, ICMS, IBS) |
| art. 159 | coberto | `obj:fpe`, `obj:fpm`, repasses de IPI-exportação e CIDE |
| art. 159-A | coberto | `obj:fndr`, `rel:uniao-repassa-fndr-estados`, `rel:tcu-calcula-coeficientes-fndr` |
| art. 160 | coberto | regras de entrega em `obj:fpe` e `obj:fpm` |
| art. 161 | coberto | `rel:tcu-calcula-cotas-fpe`, `rel:tcu-calcula-cotas-fpm` |
| art. 162 | fora | dever de divulgar a arrecadação |
| art. 163 | coberto | `obj:regime-fiscal-sustentavel` (finanças públicas e sustentabilidade da dívida) |
| art. 163-A | coberto | `obj:dados-contabeis-orcamentarios-e-fiscais-dos-entes`, `rel:stn-regulamenta-dados-contabeis-orcamentarios-e-fiscais-dos-entes` (`org:secretaria-do-tesouro-nacional` como órgão central de contabilidade, Lei 10.180/2001) |
| art. 164 | coberto | `org:banco-central` (emissão de moeda) |
| art. 164-A | coberto | `obj:regime-fiscal-sustentavel` |
| art. 165 | coberto | `obj:ppa`, `obj:ldo`, `obj:loa`, `proc:ciclo-orcamentario`, `rel:presidente-propoe-*` |
| art. 166 | coberto | `org:cmo`, emendas individuais e de bancada, `proc:ciclo-orcamentario` |
| art. 166-A | coberto | transferências das emendas individuais em `obj:emenda-individual-ao-orcamento` |
| art. 167 | coberto | `obj:regra-de-ouro` (III); créditos adicionais (V e §§ 2º e 3º): `obj:credito-adicional`, `rel:cmo-delibera-credito-adicional`, `rel:congresso-delibera-credito-adicional`, `rel:presidente-edita-credito-adicional`, etapa de créditos adicionais em `proc:ciclo-orcamentario`. Detalhe: as demais vedações ficam no texto |
| art. 167-A | coberto | `obj:mecanismo-de-ajuste-fiscal`, `rel:arquetipo-estadual-tce-fiscaliza-mecanismo-de-ajuste-fiscal` |
| art. 167-B | coberto | `obj:estado-de-calamidade-publica-nacional`, `rel:presidente-propoe-estado-de-calamidade-publica-nacional`, `rel:congresso-delibera-estado-de-calamidade-publica-nacional`, `proc:calamidade-publica-nacional` (remete a `proc:decreto-legislativo`) |
| art. 167-C | coberto | etapa de regime extraordinário de `proc:calamidade-publica-nacional` (contratações simplificadas). O script não vê a citação porque ela vem na faixa "arts. 167-B a 167-G" |
| art. 167-D | coberto | idem (dispensa de limitações legais para as medidas da calamidade), em `proc:calamidade-publica-nacional`; citado só na faixa "arts. 167-B a 167-G" |
| art. 167-E | coberto | idem (dispensa da regra de ouro), em `proc:calamidade-publica-nacional`; citado só na faixa |
| art. 167-F | coberto | idem (dispensa de limites de crédito e uso do superávit), em `proc:calamidade-publica-nacional`; citado só na faixa |
| art. 167-G | coberto | vedações do art. 167-A para a União, em `proc:calamidade-publica-nacional` e `obj:mecanismo-de-ajuste-fiscal` |
| art. 168 | coberto | duodécimos (`rel:executivo-repassa-duodecimos-*`) |
| art. 169 | coberto | `obj:limites-de-despesa-com-pessoal`, `rel:tcu-fiscaliza-limites-de-despesa-com-pessoal` |
| art. 170 | fora | princípios da ordem econômica |
| art. 172 | fora | capital estrangeiro (remete à lei) |
| art. 173 | coberto | Estatais de exemplo (`org:caixa-economica-federal`, `org:correios`, `org:petrobras`, `org:banco-do-brasil`, D39, com a Lei 13.303/2016) e `aviso:administracao-indireta-lista-nao-exaustiva`; repressão ao abuso do poder econômico (§ 4º): `org:cade`, `rel:cade-vincula-se-ministerio-da-justica-e-seguranca-publica`. Detalhe: o regime jurídico do § 1º e as hipóteses de exploração direta ficam no texto |
| art. 174 | fora | Estado regulador e planejador (princípio); as agências reguladoras entram pelos arts. 21, XI, e 177, § 2º, III |
| art. 175 | coberto | `obj:concessao-de-servico-publico`, poder concedente em `rel:uniao-fiscaliza-concessao-de-servico-publico`, `rel:estados-fiscaliza-concessao-de-servico-publico`, `rel:municipios-fiscaliza-concessao-de-servico-publico` (Lei 8.987/1995). Detalhe: concessionárias de exemplo (D05) não levantadas |
| art. 176 | parcial | `obj:concessao-de-lavra-e-de-potencial-hidraulico`; lavra: `org:anm`, `rel:anm-autoriza-concessao-de-lavra`, `rel:ministro-de-estado-autoriza-concessao-de-lavra`, `aviso:mandato-diretoria-anm`. Falta: quem concede o aproveitamento de potencial hidráulico (§ 1º; agência do setor elétrico e lei das concessões de energia, não pesquisadas). Lacuna para a fase das leis estruturantes (D04) |
| art. 177 | parcial | `obj:tributo-cide` (§ 4º); órgão regulador (§ 2º, III): `org:anp`, `rel:anp-vincula-se-ministerio-de-minas-e-energia`; `org:petrobras`; royalties em `rel:anp-repassa-royalties-do-petroleo-estados` e `-municipios`. Falta: o monopólio da União sobre petróleo, gás e minerais nucleares (I a V) como competência ou objeto (hoje só no texto da ANP e da Lei 9.478/1997). Lacuna para a fase das leis estruturantes (D04), com a Lei 9.478/1997 (`norma:lei-9478-1997`) |
| art. 178 | fora | ordenação dos transportes (remete à lei; a matéria está na matriz) |
| art. 179 | fora | tratamento das micro e pequenas empresas (princípio) |
| art. 180 | fora | incentivo ao turismo |
| art. 181 | fora | requisição estrangeira de documentos |
| art. 182 | coberto | `obj:plano-diretor`, `rel:camara-municipal-delibera-plano-diretor` (Lei 10.257/2001); a competência municipal em urbanismo está na matriz. Detalhe: os instrumentos do § 4º (parcelamento compulsório, IPTU progressivo, desapropriação com títulos) só citados no objeto |
| art. 183 | fora | usucapião urbano |
| art. 184 | coberto | `obj:desapropriacao-para-reforma-agraria`, `proc:desapropriacao-para-reforma-agraria` (decreto, ação de rito sumário, LC 76/1993), `org:incra`, `rel:incra-vincula-se-ministerio-do-desenvolvimento-agrario-e-agricultura-familiar` |
| art. 185 | fora | imóveis não desapropriáveis |
| art. 186 | fora | função social da propriedade rural |
| art. 187 | fora | política agrícola (diretrizes) |
| art. 188 | coberto | § 1º: `rel:congresso-autoriza-alienacao-de-terras-publicas` (mesma relação do art. 49, XVII) |
| art. 189 | fora | títulos da reforma agrária |
| art. 190 | fora | aquisição de terra por estrangeiro (remete à lei) |
| art. 191 | fora | usucapião rural |
| art. 192 | coberto | `org:cmn` e `org:banco-central` representam a regulação do sistema financeiro. Detalhe: não há nó para o sistema financeiro nacional nem outros reguladores (ex.: CVM); baixa prioridade |
| art. 193 | fora | princípio da ordem social |
| art. 194 | coberto | Seguridade como conjunto sem nó próprio (decisão desta varredura): o caput é citado em `org:sistema-unico-de-saude`, `org:sistema-unico-de-assistencia-social` e `org:inss`; gestão quadripartite (VII) em `org:conselho-nacional-de-previdencia-social` |
| art. 195 | coberto | contribuições sociais na matriz tributária (`obj:tributo-contribuicao-sobre-folha-de-salarios`, `…-receita-ou-faturamento`, `…-sobre-o-lucro`, `…-do-trabalhador`, `…-concursos-de-prognosticos`, `…-do-importador`, `obj:tributo-cbs`). Detalhe: orçamento da seguridade social (§ 2º) só como parte de `obj:loa` |
| art. 196 | fora | direito à saúde |
| art. 197 | fora | relevância pública das ações de saúde |
| art. 198 | coberto | `org:sistema-unico-de-saude` (sistema); direção única por esfera: `rel:ministerio-da-saude-dirige-sus`, `rel:arquetipo-estadual-secretaria-de-saude-dirige-sus`, `rel:arquetipo-municipal-secretaria-de-saude-dirige-sus`; participação da comunidade: `org:conselho-nacional-de-saude`, conselhos dos arquétipos, `org:conferencias-de-saude`; `org:comissao-intergestores-tripartite`, `org:arquetipo-estadual-comissao-intergestores-bipartite`; pisos (§§ 2º e 3º): `obj:piso-constitucional-da-saude`; `obj:fundo-nacional-de-saude`, `rel:ministerio-da-saude-gere-fundo-nacional-de-saude` e repasses. Detalhe: §§ 4º a 15 (agentes comunitários, piso da enfermagem) são regras de pessoal, sem nó |
| art. 199 | fora | assistência à saúde pela iniciativa privada |
| art. 200 | coberto | Competências do SUS como nota em `org:sistema-unico-de-saude`; vigilância sanitária (I, II, VI, VII): `org:anvisa`, `rel:anvisa-integra-sus`, `rel:anvisa-vincula-se-ministerio-da-saude` |
| art. 201 | coberto | Regime Geral operado por `org:inss` (sem nó próprio para o regime), `rel:inss-vincula-se-ministerio-da-previdencia-social`, `org:conselho-nacional-de-previdencia-social`, `org:conselho-de-recursos-da-previdencia-social`, `rel:crps-julga-recursos-contra-inss` |
| art. 202 | coberto | `org:previc`, `org:conselho-nacional-de-previdencia-complementar`, `org:funpresp-exe`, `rel:previc-fiscaliza-funpresp-exe` (LCs 108 e 109/2001) |
| art. 203 | fora | objetivos da assistência social e benefício de prestação continuada (direito) |
| art. 204 | coberto | `org:sistema-unico-de-assistencia-social`, `rel:mds-coordena-suas`, `org:conselho-nacional-de-assistencia-social` e conselhos dos arquétipos, `obj:fundo-nacional-de-assistencia-social`, `rel:mds-gere-fundo-nacional-de-assistencia-social`, repasses. Detalhe: a vinculação facultativa de receita estadual (parágrafo único) só no texto |
| art. 205 | fora | direito à educação |
| art. 206 | fora | princípios do ensino |
| art. 207 | fora | autonomia universitária (regra); universidades federais entram como exemplos de administração indireta (ver art. 37) |
| art. 208 | fora | garantias do dever de educar |
| art. 209 | fora | ensino privado |
| art. 210 | fora | conteúdos mínimos |
| art. 211 | coberto | `org:sistema-nacional-de-educacao`, `org:sistema-federal-de-ensino`, `org:arquetipo-estadual-sistema-de-ensino`, `org:arquetipo-municipal-sistema-de-ensino` (prioridades dos §§ 2º e 3º), `rel:mec-coordena-sne`, `rel:mec-coordena-sistema-federal-de-ensino`; função redistributiva (§ 1º) na complementação do Fundeb; § 7º em `obj:custo-aluno-qualidade`; colegiado nacional: `org:conselho-nacional-de-educacao` |
| art. 212 | coberto | `obj:piso-constitucional-da-educacao`, `rel:tcu-fiscaliza-piso-constitucional-da-educacao`, `rel:arquetipo-estadual-tce-fiscaliza-piso-constitucional-da-educacao`; salário-educação (§§ 5º e 6º): `obj:tributo-salario-educacao`, `rel:fnde-repassa-cotas-salario-educacao-estados`, `rel:fnde-repassa-cotas-salario-educacao-municipios`, `org:fnde`. Detalhe: § 4º (programas suplementares) fora |
| art. 212-A | coberto | `obj:fundeb`, `rel:uniao-repassa-complementacao-fundeb`, `rel:estados-repassam-recursos-ao-fundeb`, `rel:municipios-repassam-recursos-ao-fundeb`, `org:comissao-intergovernamental-de-financiamento-da-educacao-basica`, `rel:tcu-fiscaliza-fundeb`, `rel:arquetipo-estadual-tce-fiscaliza-fundeb` |
| art. 213 | fora | destinação de recursos a escolas |
| art. 214 | coberto | `obj:plano-nacional-de-educacao` (Lei 15.388/2026), `rel:presidente-propoe-plano-nacional-de-educacao`, `rel:mec-monitora-plano-nacional-de-educacao`, `rel:cne-monitora-plano-nacional-de-educacao`; sistema nacional em `org:sistema-nacional-de-educacao` |
| art. 215 | fora | direitos culturais; plano de cultura por lei |
| art. 216 | coberto | competência de proteção do patrimônio cultural na matriz (`obj:materia-patrimonio-cultural`). Detalhe: o órgão federal de tombamento seria exemplo (D07) |
| art. 216-A | coberto | `org:sistema-nacional-de-cultura` (sistema), `rel:ministerio-da-cultura-coordena-sistema-nacional-de-cultura` (Lei 14.835/2024) |
| art. 217 | coberto | `org:justica-desportiva` (conjunto, não estatal, fronteira D05; Lei 9.615/1998) |
| art. 218 | fora | fomento à ciência |
| art. 219 | fora | mercado interno e inovação |
| art. 219-A | fora | cooperação em ciência e tecnologia (faculdade) |
| art. 219-B | coberto | `org:sncti` (sistema). Detalhe: a lei de normas gerais do § 1º não foi localizada |
| art. 220 | fora | liberdade de expressão |
| art. 221 | fora | princípios da programação |
| art. 222 | fora | propriedade de empresas de comunicação |
| art. 223 | coberto | `obj:concessao-de-radiodifusao`, `rel:congresso-delibera-concessao-de-radiodifusao` |
| art. 224 | coberto | `org:conselho-de-comunicacao-social`, `cargo:conselheiro-do-conselho-de-comunicacao-social`, `rel:congresso-elege-conselheiro-do-ccs`, `rel:ccs-auxilia-congresso` (Lei 8.389/1991) |
| art. 225 | coberto | Competência ambiental na matriz (`obj:materia-meio-ambiente`); estudo de impacto e licenciamento (§ 1º, IV): `obj:licenca-ambiental`, `proc:licenciamento-ambiental`, `rel:ibama-autoriza-licenca-ambiental`, `rel:estados-autoriza-licenca-ambiental`, `rel:municipios-autoriza-licenca-ambiental`; sistema de órgãos: `org:sisnama`, `org:ibama`, `org:icmbio`, `aviso:sisnama-orgao-central-desatualizado` |
| art. 226 | fora | família |
| art. 227 | fora | criança, adolescente e jovem |
| art. 228 | fora | inimputabilidade |
| art. 229 | fora | deveres familiares |
| art. 230 | fora | idosos |
| art. 231 | coberto | Demarcação (caput): `obj:demarcacao-de-terra-indigena`, `proc:demarcacao-de-terra-indigena`, `org:funai`, `rel:funai-vincula-se-ministerio-dos-povos-indigenas`, `aviso:funai-natureza-juridica`, `aviso:demarcacao-terra-indigena-lei-14701-e-stf`; § 3º: `rel:congresso-autoriza-exploracao-em-terras-indigenas`. Detalhe: remoção "ad referendum" do Congresso (§ 5º) sem relação |
| art. 232 | fora | legitimidade processual dos índios (a defesa pelo MP está no art. 129, V) |
| art. 234 | fora | vedação na criação de estado |
| art. 235 | fora | regras para os dez primeiros anos de um estado novo (nenhum em 2026-10-01) |
| art. 236 | coberto | `org:arquetipo-estadual-servicos-notariais-e-de-registro` (conjunto, não estatal, D05), `rel:arquetipo-estadual-tj-fiscaliza-servicos-notariais-e-de-registro`, `rel:arquetipo-estadual-tj-exerce-poder-disciplinar-sobre-servicos-notariais-e-de-registro`, `rel:cnj-fiscaliza-servicos-notariais-e-de-registro` (Lei 8.935/1994) |
| art. 237 | lacuna | Fiscalização e controle do comércio exterior pelo Ministério da Fazenda; a competência legislativa da União está na matriz (`rel:uniao-competencia-comercio-exterior-e-interestadual`). Falta: relação de `org:ministerio-da-fazenda` (ou `org:receita-federal`) com `obj:materia-comercio-exterior-e-interestadual`. Lacuna para a fase das leis estruturantes (D04): quem fiscaliza e como vem da legislação aduaneira; baixa prioridade |
| art. 238 | fora | comércio de combustíveis (remete à lei) |
| art. 239 | coberto | `obj:tributo-pis-pasep`; seguro-desemprego e abono (§§ 1º e 3º): `obj:fundo-de-amparo-ao-trabalhador`, `org:codefat`, `rel:codefat-gere-fat`, `rel:ministro-do-trabalho-nomeia-codefat`; mínimo para o BNDES: `org:bndes`, `rel:fat-repassa-recursos-bndes`, `rel:bndes-vincula-se-mdic`; adicional por rotatividade (§ 4º): `obj:tributo-contribuicao-adicional-por-rotatividade`, `aviso:contribuicao-adicional-por-rotatividade-sem-lei` |
| art. 240 | coberto | `org:sistema-s` (paraestatal, D05), `obj:tributo-contribuicoes-ao-sistema-s`, `rel:uniao-competencia-tributo-contribuicoes-ao-sistema-s`, `rel:receita-federal-arrecada-contribuicoes-ao-sistema-s`, `rel:mds-homologa-orcamentos-sistema-s` |
| art. 241 | coberto | `org:consorcios-publicos` |
| art. 242 | coberto | § 2º: `org:colegio-pedro-ii` (autarquia, D39), `rel:colegio-pedro-ii-vincula-se-ministerio-da-educacao`. O resto é regra de ensino (fora) |
| art. 243 | parcial | `obj:expropriacao-confiscatoria`, `proc:expropriacao-confiscatoria` (culturas ilegais de plantas psicotrópicas, Lei 8.257/1991). Falta: o rito da expropriação por exploração de trabalho escravo (caput) e o fundo especial dos bens confiscados (parágrafo único). Lacuna para a fase das leis estruturantes (D04): a lei do trabalho escravo não foi localizada e o fundo depende da lei que o rege; baixa prioridade |
| art. 244 | fora | acessibilidade (remete à lei) |
| art. 245 | fora | assistência a vítimas de crime (remete à lei) |
| art. 246 | coberto | vedação de MP em `obj:medida-provisoria` e `proc:medida-provisoria` |
| art. 247 | fora | perda do cargo de servidor estável (regra de pessoal) |
| art. 248 | fora | teto dos benefícios do RGPS (o órgão gestor está na lacuna do art. 201) |
| art. 249 | coberto | fundos previdenciários nos detalhes e fontes de `org:arquetipo-estadual-unidade-gestora-do-rpps` e `org:arquetipo-municipal-unidade-gestora-do-rpps` (sem nó próprio) |
| art. 250 | coberto | `obj:fundo-do-regime-geral-de-previdencia-social`, `rel:inss-gere-fundo-do-regime-geral-de-previdencia-social` (LRF, art. 68) |
| ADCT, art. 1º | transitorio-esgotado | compromisso na promulgação |
| ADCT, art. 2º | transitorio-esgotado | plebiscito de 1993 |
| ADCT, art. 3º | transitorio-esgotado | revisão constitucional de 1993-94 |
| ADCT, art. 4º | transitorio-esgotado | mandatos de 1988-90 |
| ADCT, art. 5º | transitorio-esgotado | eleições de 1988 |
| ADCT, art. 6º | transitorio-esgotado | registro de partidos em 1989 |
| ADCT, art. 7º | fora | tribunal internacional de direitos humanos (diretriz) |
| ADCT, art. 8º | coberto | `org:comissao-de-anistia`, `obj:requerimento-de-anistia-politica`, `rel:ministro-de-estado-julga-requerimento-de-anistia-politica`, `rel:comissao-de-anistia-assessora-ministro-de-estado` (Lei 10.559/2002) |
| ADCT, art. 9º | transitorio-esgotado | revisão de cassações de 1969 |
| ADCT, art. 10 | fora | proteção provisória do emprego (direito trabalhista, ainda vigente) |
| ADCT, art. 11 | transitorio-esgotado | elaboração das Constituições estaduais e leis orgânicas (citado em `obj:constituicao-estadual` e `obj:lei-organica-municipal` como origem) |
| ADCT, art. 12 | transitorio-esgotado | Comissão de Estudos Territoriais de 1988. A citação em `obj:tributo-cbs` é falso positivo do leitor do script (dispositivo "ADCT, arts. 125, 126, I, a, e 127") |
| ADCT, art. 13 | transitorio-esgotado | criação e instalação do Tocantins (o estado existe como ente) |
| ADCT, art. 14 | transitorio-esgotado | Roraima e Amapá transformados em estados (citado em `org:territorios-federais`) |
| ADCT, art. 15 | coberto | extinção do Território de Fernando de Noronha e reincorporação a Pernambuco: base de `org:pe-distrito-estadual-de-fernando-de-noronha` e `var:pe-fernando-de-noronha` |
| ADCT, art. 16 | transitorio-esgotado | governo do DF antes da eleição de 1990 |
| ADCT, art. 17 | transitorio-esgotado | redução de remunerações em 1988 |
| ADCT, art. 18 | transitorio-esgotado | atos de estabilidade de 1987-88 |
| ADCT, art. 18-A | transitorio-esgotado | convalidação de atos do Tocantins de 1989-94 |
| ADCT, art. 19 | transitorio-esgotado | estabilidade de servidores em 1988 |
| ADCT, art. 20 | transitorio-esgotado | revisão de proventos em 1989 |
| ADCT, art. 21 | transitorio-esgotado | juízes temporários de 1988 |
| ADCT, art. 22 | transitorio-esgotado | opção dos defensores de 1987 |
| ADCT, art. 23 | transitorio-esgotado | censores federais |
| ADCT, art. 24 | transitorio-esgotado | prazo para leis de pessoal |
| ADCT, art. 25 | transitorio-esgotado | revogação de delegações ao Executivo em 1989 |
| ADCT, art. 26 | transitorio-esgotado | comissão mista sobre a dívida externa |
| ADCT, art. 27 | transitorio-esgotado | instalação do STJ e criação dos cinco primeiros TRFs (citado nos TRFs como origem) |
| ADCT, art. 28 | transitorio-esgotado | juízes federais de 1977 |
| ADCT, art. 29 | transitorio-esgotado | regime até as leis do MPU e da AGU (LCs 73 e 75/1993) |
| ADCT, art. 30 | transitorio-esgotado | juízes de paz anteriores à lei (a justiça de paz está no art. 98) |
| ADCT, art. 31 | transitorio-esgotado | estatização das serventias judiciais |
| ADCT, art. 32 | parcial | Atipicidade citada nas notas e fontes de `org:arquetipo-estadual-servicos-notariais-e-de-registro`. Falta: os estados que ainda têm serventias oficializadas, como variações (`var:`). Lacuna para a fase das leis estruturantes (D04): depende das leis de organização judiciária de cada estado; baixa prioridade |
| ADCT, art. 33 | transitorio-esgotado | precatórios de 1988 |
| ADCT, art. 34 | transitorio-esgotado | entrada em vigor do sistema tributário |
| ADCT, art. 35 | coberto | § 2º: prazos do PPA, da LDO e da LOA até a lei complementar, em `proc:ciclo-orcamentario`, `obj:ppa`, `obj:ldo`, `obj:loa` |
| ADCT, art. 36 | transitorio-esgotado | ratificação de fundos em 1990 |
| ADCT, art. 37 | transitorio-esgotado | adaptação à regra de ouro até 1993 |
| ADCT, art. 38 | transitorio-esgotado | limite de pessoal até a LC (LRF de 2000) |
| ADCT, art. 39 | transitorio-esgotado | revisão do orçamento de 1989 |
| ADCT, art. 40 | coberto | `obj:zona-franca-de-manaus`, `org:suframa` (autarquia, D39), `rel:suframa-vincula-se-mdic` |
| ADCT, art. 41 | transitorio-esgotado | reavaliação de incentivos em 1990 |
| ADCT, art. 42 | fora | aplicação regional dos recursos de irrigação (vinculação de despesa) |
| ADCT, art. 43 | transitorio-esgotado | títulos minerários inativos em 1989 |
| ADCT, art. 44 | transitorio-esgotado | adaptação das mineradoras até 1992 |
| ADCT, art. 45 | transitorio-esgotado | refinarias e contratos de risco anteriores |
| ADCT, art. 46 | transitorio-esgotado | correção de créditos de instituições liquidadas |
| ADCT, art. 47 | transitorio-esgotado | débitos de 1986-87 |
| ADCT, art. 48 | transitorio-esgotado | código de defesa do consumidor |
| ADCT, art. 49 | fora | enfiteuse (direito civil) |
| ADCT, art. 50 | transitorio-esgotado | lei agrícola |
| ADCT, art. 51 | transitorio-esgotado | revisão de doações de terras até 1991 |
| ADCT, art. 52 | fora | restrição ao capital estrangeiro em bancos até a lei do art. 192 |
| ADCT, art. 53 | fora | direitos dos ex-combatentes |
| ADCT, art. 54 | fora | pensão dos seringueiros |
| ADCT, art. 54-A | fora | indenização dos seringueiros |
| ADCT, art. 55 | transitorio-esgotado | saúde até a primeira LDO |
| ADCT, art. 56 | transitorio-esgotado | Finsocial até a lei |
| ADCT, art. 57 | transitorio-esgotado | débitos previdenciários de 1988 |
| ADCT, art. 58 | transitorio-esgotado | revisão de benefícios de 1988 |
| ADCT, art. 59 | transitorio-esgotado | prazos das leis da seguridade |
| ADCT, art. 60 | coberto | `rel:uniao-repassa-complementacao-fundeb` e vigência de `obj:fundeb` |
| ADCT, art. 60-A | coberto | nota em `obj:fundeb` (revisão devida em 2026; nenhuma lei de revisão achada até 2026-10-01) |
| ADCT, art. 61 | fora | recursos a entidades educacionais |
| ADCT, art. 62 | coberto | `org:sistema-s` (o SENAR entra no conjunto, sem nó próprio) |
| ADCT, art. 63 | transitorio-esgotado | comissão do centenário da República |
| ADCT, art. 64 | transitorio-esgotado | edição popular da Constituição |
| ADCT, art. 65 | transitorio-esgotado | prazo para regulamentar o art. 220, § 4º |
| ADCT, art. 66 | transitorio-esgotado | concessões de telecomunicações de 1988 |
| ADCT, art. 67 | transitorio-esgotado | prazo de cinco anos para demarcação (a competência permanente está no art. 231) |
| ADCT, art. 68 | coberto | `obj:titulo-de-territorio-quilombola`, `proc:titulacao-de-territorio-quilombola` (Incra, Decreto 4.887/2003) |
| ADCT, art. 69 | parcial | Um caso com fonte: `var:pr-carreira-especial-de-advogado-do-estado` (ADI 484), com `aviso:pr-carreira-especial-de-advogado-do-estado-situacao`. Falta: os demais estados que mantêm consultoria jurídica separada da PGE. Lacuna para a fase das leis estruturantes (D04): depende das Constituições e leis de cada estado; baixa prioridade |
| ADCT, art. 70 | transitorio-esgotado | competência dos tribunais até as Constituições estaduais |
| ADCT, art. 71 | transitorio-esgotado | Fundo Social de Emergência (1994-99) |
| ADCT, art. 72 | transitorio-esgotado | composição do Fundo Social de Emergência |
| ADCT, art. 73 | transitorio-esgotado | regulação do Fundo Social de Emergência |
| ADCT, art. 74 | transitorio-esgotado | CPMF |
| ADCT, art. 75 | transitorio-esgotado | prorrogação da CPMF |
| ADCT, art. 76 | coberto | `obj:desvinculacao-de-receitas` (DRU até 2032) |
| ADCT, art. 76-A | coberto | `obj:desvinculacao-de-receitas` (estados e DF) |
| ADCT, art. 76-B | coberto | `obj:desvinculacao-de-receitas` (municípios) |
| ADCT, art. 77 | transitorio-esgotado | mínimos de saúde até 2004 |
| ADCT, art. 78 | transitorio-esgotado | parcelamento de precatórios da EC 30/2000 |
| ADCT, art. 79 | coberto | `obj:fundo-de-combate-e-erradicacao-da-pobreza`, `rel:mds-gere-fundo-de-combate-e-erradicacao-da-pobreza`; conselho consultivo (parágrafo único) sem regulamento: `aviso:conselho-consultivo-fundo-combate-pobreza-sem-regulamento` |
| ADCT, art. 80 | coberto | composição do fundo em `obj:fundo-de-combate-e-erradicacao-da-pobreza` |
| ADCT, art. 81 | coberto | citado em `obj:fundo-de-combate-e-erradicacao-da-pobreza`. Detalhe: o fundo de recursos de desestatização sem nó próprio |
| ADCT, art. 82 | coberto | `obj:arquetipo-estadual-fundo-de-combate-a-pobreza`, `obj:arquetipo-municipal-fundo-de-combate-a-pobreza` |
| ADCT, art. 83 | fora | definição de produtos supérfluos (remete à lei) |
| ADCT, art. 84 | transitorio-esgotado | CPMF até 2004 |
| ADCT, art. 85 | transitorio-esgotado | isenções da CPMF |
| ADCT, art. 86 | transitorio-esgotado | precatórios da EC 37/2002 |
| ADCT, art. 87 | coberto | etapa de pequeno valor em `proc:pagamento-de-precatorio` |
| ADCT, art. 88 | transitorio-esgotado | alíquota mínima do ISS até a LC (LC 157/2016) |
| ADCT, art. 89 | transitorio-esgotado | servidores do ex-Território de Rondônia |
| ADCT, art. 90 | transitorio-esgotado | prorrogação da CPMF até 2007 |
| ADCT, art. 92 | coberto | vigência de `obj:zona-franca-de-manaus` |
| ADCT, art. 92-A | coberto | vigência de `obj:zona-franca-de-manaus` (até 2073) |
| ADCT, art. 92-B | coberto | diferencial no IBS e na CBS em `obj:zona-franca-de-manaus`. Detalhe: os fundos do § 2º não pesquisados |
| ADCT, art. 93 | transitorio-esgotado | início da partilha da CIDE após a lei |
| ADCT, art. 94 | transitorio-esgotado | fim dos regimes especiais com o Simples Nacional |
| ADCT, art. 95 | fora | registro de nascidos no exterior (direito) |
| ADCT, art. 96 | transitorio-esgotado | convalidação de municípios criados até 2006 (efeito produzido em 2008; citado em `proc:alteracao-territorial-de-municipios` como contexto) |
| ADCT, art. 97 | transitorio-esgotado | regime especial de precatórios da EC 62/2009, substituído pelo do art. 101 (conferir) |
| ADCT, art. 98 | fora | proporcionalidade de defensores; prazo do § 1º vencido em 2022 |
| ADCT, art. 99 | transitorio-esgotado | partilha do ICMS até 2019 |
| ADCT, art. 100 | transitorio-esgotado | aposentadoria aos 75 até a LC 152/2015 |
| ADCT, art. 101 | coberto | regime `regime-especial-adct-101` de `proc:pagamento-de-precatorio`, com a conta no Tribunal de Justiça |
| ADCT, art. 102 | coberto | idem (uso dos recursos do regime especial), em `proc:pagamento-de-precatorio` |
| ADCT, art. 103 | coberto | idem (proibição de sequestro), em `proc:pagamento-de-precatorio` |
| ADCT, art. 104 | coberto | idem (sequestro pelo presidente do TJ e retenção de repasses), em `proc:pagamento-de-precatorio` |
| ADCT, art. 105 | coberto | idem (compensação com dívida ativa), em `proc:pagamento-de-precatorio` |
| ADCT, art. 107-A | coberto | teto da União em `obj:limite-de-pagamento-de-precatorios` (vigência formal até 2026; o STF, na ADI 7064, restringiu os efeitos a 2022) |
| ADCT, art. 113 | coberto | estimativa de impacto na etapa `iniciativa` de `proc:lei-ordinaria` e de `proc:lei-complementar` |
| ADCT, art. 115 | fora | parcelamento de débitos dos entes com seus regimes próprios (regra financeira) |
| ADCT, art. 116 | fora | parcelamento de débitos municipais com o RGPS |
| ADCT, art. 116-A | fora | parcelamento de débitos dos consórcios com o RGPS |
| ADCT, art. 117 | fora | formalização dos parcelamentos (até 31/08/2026) |
| ADCT, art. 118 | transitorio-esgotado | regras de 2022 para a renda básica |
| ADCT, art. 119 | transitorio-esgotado | educação em 2020-21 |
| ADCT, art. 120 | transitorio-esgotado | estado de emergência de 2022 |
| ADCT, art. 121 | fora | encerramento de contas do PIS-Pasep |
| ADCT, art. 122 | transitorio-esgotado | transferências da Covid até 2023 |
| ADCT, art. 123 | fora | permissões lotéricas |
| ADCT, art. 124 | coberto | transição para IBS e CBS em `obj:tributo-ibs` e `obj:tributo-cbs` |
| ADCT, art. 125 | coberto | alíquotas de teste de 2026 em `obj:tributo-ibs` e `obj:tributo-cbs` |
| ADCT, art. 126 | coberto | cobrança da CBS e do IS e extinção de PIS e Cofins a partir de 2027, nos tributos correspondentes |
| ADCT, art. 127 | coberto | `obj:tributo-ibs` |
| ADCT, art. 128 | coberto | `obj:tributo-ibs`, `obj:tributo-icms`, `obj:tributo-iss` |
| ADCT, art. 129 | coberto | extinção de ICMS e ISS em 2033 nos objetos |
| ADCT, art. 130 | coberto | `rel:senado-fixa-aliquotas-de-referencia-ibs`, `rel:senado-fixa-aliquotas-de-referencia-cbs`, `rel:tcu-calcula-aliquotas-de-referencia-ibs`, `rel:tcu-calcula-aliquotas-de-referencia-cbs` |
| ADCT, art. 131 | coberto | distribuição do IBS de 2029 a 2077 em `obj:tributo-ibs` |
| ADCT, art. 132 | coberto | retenção do IBS nas fontes e notas de `obj:tributo-ibs` |
| ADCT, art. 133 | fora | base de cálculo do IBS e da CBS |
| ADCT, art. 134 | fora | saldos credores do ICMS |
| ADCT, art. 135 | fora | créditos de IPI, PIS e Cofins |
| ADCT, art. 136 | coberto | `obj:tributo-contribuicao-estadual-sobre-produtos-primarios` |
| ADCT, art. 137 | transitorio-esgotado | saldos da Covid até 2024 |
| ADCT, art. 138 | coberto | limite das despesas vinculadas nas fontes e notas de `obj:regime-fiscal-sustentavel` |

## Cobertura

### Depois das coletas de lacunas (2026-10-28)

Contagem do quadro depois das 8 coletas de lacunas (f0-seguridade, f0-educacao, f0-federacao, f0-controle-constitucionalidade, f0-judiciario-complementar, f0-processos-legislativos, f0-dinheiro-complementar, f0-administracao-indireta), de f0-residuais e de f0-sugestoes-revisoes. Das 101 linhas `lacuna` ou `parcial`, 94 mudaram de classificação (90 viraram `coberto`; arts. 176 e 243 e ADCT, arts. 32 e 69, passaram de `lacuna` a `parcial`) e 7 continuam como estavam, com o texto reescrito. As linhas `coberto`, `fora` e `transitorio-esgotado` não mudaram. O critério é o da contagem anterior (abaixo).

| Parte | Coberto | Parcial | Lacuna | Fora | Transitório esgotado | Base (total − fora − esgotado) | Cobertura |
|---|---|---|---|---|---|---|---|
| CF (arts. 1º a 250) | 197 | 8 | 1 | 67 | — | 206 | (197 + 4) / 206 = **97,6%** |
| ADCT | 37 | 2 | 0 | 21 | 78 | 39 | (37 + 1) / 39 = **97,4%** |
| Total | 234 | 10 | 1 | 88 | 78 | 245 | (234 + 5) / 245 = **97,6%** |

`npm run -s cobertura` (rodado no início e no fim desta atualização, mesmo resultado): o script vê **256 de 411** artigos vigentes citados (62,3%; CF 211 de 273, ADCT 45 de 138), contra 180 depois da correção do leitor em 2026-10-23. Classificados como cobertos mas sem citação no relatório: arts. 167-C a 167-F (citados só na faixa "arts. 167-B a 167-G", que o script não expande: faixas com letra ficam de fora), art. 192 e art. 216 (cobertos por `org:cmn`, `org:banco-central` e pela matéria da matriz, sem citação do artigo) e ADCT, art. 124 (abre a transição; os tributos citam os arts. 125 a 133).

### Descobertos que restam

Fora do escopo da fatia 0:

- art. 53, §§ 2º e 8º (a Casa resolve sobre a prisão em flagrante; imunidades no estado de sítio): decisão do coordenador de 2026-10-24; a prisão do parlamentar não é objeto do mapa.
- art. 84, VII (relações com Estados estrangeiros e acreditação de diplomatas): Estados estrangeiros e seus representantes não são nós; o verbo `acredita` não entra (coordenador, 2026-10-24).

Lacunas para a fase das leis estruturantes (D04):

- art. 5º, § 4º: adesão ao Tribunal Penal Internacional (`org:tribunal-penal-internacional`, organismo internacional, D05).
- art. 12, § 3º, V e VI: carreira diplomática e oficial das Forças Armadas como cargos agregados (Lei 11.440/2006 e estatuto dos militares).
- art. 105, I, j: STJ julga conflitos entre entes, ou entre eles e o Comitê Gestor do IBS.
- art. 176, § 1º: quem concede o aproveitamento de potencial hidráulico (agência do setor elétrico, não pesquisada).
- art. 177, I a V: monopólio da União sobre petróleo, gás e minerais nucleares como competência ou objeto (Lei 9.478/1997).
- art. 237: fiscalização do comércio exterior pelo Ministério da Fazenda (legislação aduaneira).
- art. 243: rito da expropriação por trabalho escravo e fundo especial dos bens confiscados.
- ADCT, art. 32: estados com serventias notariais oficializadas, como variações (leis de organização judiciária).
- ADCT, art. 69: demais estados com consultoria jurídica separada da PGE, como variações.

Ficam também para depois da fatia 0, como detalhe de linhas cobertas (decisões do coordenador em f0-fechamento): custas do art. 98, § 2º; MPs junto aos TCMs (art. 130); polícias legislativas no controle externo pelo MP (art. 129, VII).

### Antes (2026-10-23)

Contagem da primeira versão do quadro (411 artigos vigentes; `npm run -s cobertura` rodado de novo no fim, 183 citados, sem mudança nas citações durante a tarefa).

| Parte | Coberto | Parcial | Lacuna | Fora | Transitório esgotado | Base (total − fora − esgotado) | Cobertura |
|---|---|---|---|---|---|---|---|
| CF (arts. 1º a 250) | 134 | 30 | 42 | 67 | — | 206 | (134 + 15) / 206 = **72,3%** |
| ADCT | 10 | 0 | 29 | 21 | 78 | 39 | 10 / 39 = **25,6%** |
| Total | 144 | 30 | 71 | 88 | 78 | 245 | 64,9% |

Critério usado: `coberto` quando o órgão, cargo, competência ou procedimento principal do artigo tem entidade; `parcial` quando falta um elemento que mereceria entidade própria (lacunas só de detalhe ficam anotadas em `coberto`). Artigos com regras do mandato ou do cargo (ex.: arts. 54, 56, 95) contam como `fora` mesmo quando citados nos cargos. No ADCT, regras transitórias ainda vigentes em 2026-10-01 que estruturam algo (Fundeb, precatórios, DRU, Zona Franca) contam como `lacuna`; as que já produziram efeito, como `transitorio-esgotado`.

Amostragem das citações: as citações dos 183 artigos citados foram lidas junto com o texto do artigo; as relações da matriz de competências foram conferidas inciso a inciso contra os arts. 21 a 24 e 30 (todas batem). A conta do script inclui 3 falsos positivos (ver "Erros de dispositivo"); sem eles, são 180 artigos citados (CF 167 de 273; ADCT 13 de 138).

## Propostas de tarefa

Em 2026-10-28: estas propostas viraram as 8 coletas de lacunas; o que sobrou está em "Descobertos que restam", acima.

Em ordem de importância para quem quer entender como o Estado funciona. Ids são propostas; normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

1. **Seguridade social: saúde, previdência e assistência** (arts. 194, 198, 200, 201, 202, 204, 40, 248 a 250; ADCT, art. 122). Propostas: `org:sistema-unico-de-saude` (tipo `sistema`), gestores por esfera (ministério e secretarias de saúde dos arquétipos), conselhos de saúde, `obj:piso-constitucional-da-saude`, fundos nacionais de saúde e de assistência social; `org:inss` (ou `org:regime-geral-de-previdencia-social`) ligado ao `org:ministerio-da-previdencia-social`; `org:sistema-unico-de-assistencia-social`; regime próprio dos servidores e seu gestor único (art. 40, § 20); previdência complementar. Fontes prováveis: Lei 8.080/1990, Lei 8.142/1990, LC 141/2012, Leis 8.212 e 8.213/1991, Lei 8.742/1993, Lei 9.717/1998, LCs 108 e 109/2001; SIORG.
2. **Educação** (arts. 211, 212, 212-A, 214; ADCT, arts. 60 e 60-A). Propostas: sistemas de ensino por esfera (tipo `sistema`), `obj:piso-constitucional-da-educacao`, `obj:fundeb` com os repasses e a complementação da União, `obj:plano-nacional-de-educacao`, colegiado nacional de educação. Fontes prováveis: Lei 9.394/1996, Lei 14.113/2020, lei do PNE vigente em 2026-10-01.
3. **Federação, estados e municípios** (arts. 18, § 3º; 20, § 1º; 29; 35; 43; 144, § 10; 182; 236; ADCT, arts. 32 e 69). Propostas: `proc:intervencao-estadual`; `proc:alteracao-territorial-de-estados`; `obj:lei-municipal`, `proc:lei-municipal` e `rel:eleitorado-municipal-propoe-lei-municipal`; `obj:plano-diretor`; órgãos executivos de trânsito nos arquétipos; serviços notariais e de registro (conjunto, fiscalizado pelo TJ e pelo CNJ); `obj:compensacao-financeira-recursos-naturais` (royalties) com repasses; `org:sudam`, `org:sudene`, `org:sudeco`; variações de consultoria jurídica estadual. Fontes prováveis: Constituições estaduais e leis orgânicas, Lei 10.257/2001, Lei 9.503/1997, Lei 8.935/1994, LCs 124/2007, 125/2007 e 129/2009.
4. **Controle de constitucionalidade e instrumentos das cortes** (arts. 5º, 97, 102, 103, 103-A). Propostas: `obj:adpf`, `obj:ado` (ou ampliar `obj:adi-e-adc`), `obj:reclamacao-constitucional`, `obj:sumula-vinculante` com `rel:stf-edita-sumula-vinculante`, relações `propoe` dos demais legitimados da ADI, remédios constitucionais (`obj:habeas-corpus`, `obj:mandado-de-seguranca`, `obj:mandado-de-injuncao`, `obj:habeas-data`, `obj:acao-popular`), controle difuso com reserva de plenário. Fontes prováveis: Leis 9.868 e 9.882/1999, Lei 11.417/2006, Lei 12.016/2009, Lei 13.300/2016, Lei 4.717/1965.
5. **Organização judiciária complementar, precatórios e funções essenciais** (arts. 5º, XXXVIII; 98; 100; 105; 108; 111-A; 129, VII; 130; ADCT, arts. 87, 101 a 105, 107-A). Propostas: `org:tribunal-do-juri`, `org:juizados-especiais` e turmas recursais, justiça de paz e `cargo:arquetipo-estadual-juiz-de-paz`, `org:enfam`, `org:conselho-da-justica-federal`, `org:enamat`, `org:csjt`, `rel:trfs-julgam-recursos-dos-juizes-federais`, TRF julga juízes federais e membros do MPU, `rel:stj-julga-conselheiro-do-tce`; `obj:precatorio` e `proc:pagamento-de-precatorio` (com o regime especial até 2029); `rel:ministerio-publico-controla-atividade-policial`; MPs de contas estaduais. Fontes prováveis: Lei 9.099/1995, Lei 10.259/2001, Lei 12.153/2009, Lei 11.798/2008, resoluções do CNJ sobre precatórios, LC 75/1993, Lei 8.625/1993.
6. **Processos políticos do Legislativo** (arts. 14, 49, 52, 53, 55, 59, 84, VII, 86, 89, 188, 224, 231, § 3º; ADCT, arts. 113 e 130). Propostas: `proc:crime-de-responsabilidade-do-presidente` (impeachment em raias, com regime para crime comum); `proc:perda-de-mandato-parlamentar`; sustação de ação penal contra parlamentar; `obj:plebiscito-e-referendo` e `rel:congresso-convoca-plebiscito-e-referendo`; `proc:decreto-legislativo` e `proc:resolucao`; relações do Congresso para atividades nucleares, mineração em terras indígenas e terras públicas acima de 2.500 ha; Senado julga comandantes; `cargo:chefe-de-missao-diplomatica-permanente`; líderes da maioria e da minoria; `org:conselho-de-comunicacao-social`; estimativa de impacto no processo legislativo; Senado fixa alíquotas de referência do IBS e da CBS. Fontes prováveis: Lei 9.709/1998, Lei 1.079/1950, RICD, RISF, RCCN, Lei 8.389/1991.
7. **Dinheiro e regras fiscais** (arts. 146, 163-A, 167, 167-A a 167-G, 239, 240; ADCT, arts. 40, 62, 76 a 76-B, 79 a 82, 92 a 92-B, 132, 138). Propostas: `obj:credito-adicional`; `obj:estado-de-calamidade-publica-nacional` e `proc:calamidade-publica-nacional`; `obj:mecanismo-de-ajuste-fiscal`; `obj:desvinculacao-de-receitas`; `obj:simples-nacional`; `obj:fundo-de-amparo-ao-trabalhador` e `org:bndes`; Sistema S (entidades paraestatais e contribuição); `obj:fundo-de-combate-e-erradicacao-da-pobreza` e fundos estaduais e municipais; `obj:zona-franca-de-manaus`; órgão central de contabilidade da União. Fontes prováveis: Lei 4.320/1964, LC 101/2000, LC 123/2006, Lei 7.998/1990, LC 111/2001, LC 200/2023.
8. **Administração indireta, regulação e terras** (arts. 37, 39, 173, 175, 176, 177, 184, 225, 231, 242, 243; ADCT, arts. 8º e 68). Propostas: exemplos de autarquias, fundações, empresas públicas e sociedades de economia mista (D07, com a indicação do SIORG); `org:cade`, `org:anp`, agência de mineração; `obj:concessao-de-servico-publico`, `obj:concessao-de-lavra-e-de-potencial-hidraulico`; `proc:desapropriacao-para-reforma-agraria` e `org:incra`; `proc:demarcacao-de-terra-indigena` e o órgão indigenista; `proc:titulacao-de-territorio-quilombola`; `proc:licenciamento-ambiental` e `org:sisnama`; `obj:acao-de-improbidade-administrativa`; escola de governo e conselho de política de pessoal; `org:colegio-pedro-ii`; `proc:expropriacao-confiscatoria`; Comissão de Anistia. Fontes prováveis: SIORG, Lei 12.529/2011, Lei 9.478/1997, Lei 13.575/2017, Lei 8.987/1995, Lei 8.629/1993 e LC 76/1993, Decreto 1.775/1996, Decreto 4.887/2003, Lei 6.938/1981, LC 140/2011, Lei 8.429/1992, Lei 10.559/2002.
9. **Sistemas setoriais** (arts. 216-A, 217, 219-B). Propostas: `org:sistema-nacional-de-cultura`, `org:sncti` (tipo `sistema`), justiça desportiva (fronteira, D05). Fontes prováveis: lei do Sistema Nacional de Cultura, Lei 13.243/2016, Lei 9.615/1998.

## Erros de dispositivo

Nenhuma entidade com dispositivo errado foi confirmada. Achados:

- **Leitor do script, não das entidades:** em `scripts/cobertura-cf.ts`, o padrão `NUM` (`\d+…`) retrocede quando o número vem seguido de inciso romano, porque a verificação negativa só olha o fim do número. Assim "89, I" conta como art. 8º, "49, IX" como art. 4º e "126, I" como ADCT, art. 12. Falsos positivos: art. 4º (`proc:ciclo-orcamentario`), art. 8º (`cargo:vice-presidente-da-republica`) e ADCT, art. 12 (`obj:tributo-cbs`). Com `\d+(?!\d)` em `NUM` os três somem e nenhuma outra citação muda (testado numa cópia fora do repositório; o script não foi alterado). O mesmo padrão faz o leitor parar a lista no primeiro inciso, então listas como "arts. 47, 49, IX, 51, II, …" perdem os artigos seguintes na contagem; os que se perdem são citados em outras entidades.
- **Citações conferidas e corretas, mas que parecem estranhas:** `org:justica-militar-da-uniao` cita art. 125, §§ 3º a 5º (Justiça Militar estadual) para contrastar, como explica o texto; `rel:stj-julga-membro-do-mpu` cita art. 108, I, a para delimitar o foro; entidades do processo legislativo e das CPIs citam art. 46, § 1º para o número de senadores. `rel:stm-julga-recursos-da-justica-militar-da-uniao` cita só o art. 124, parágrafo único, que remete à lei; a competência recursal vem da lei de organização da Justiça Militar (sugestão: citar a lei junto).

## Diário
- 2026-10-23 — iniciada; lidos CLAUDE.md, decisões, modelo de dados e protocolo; `npm run -s cobertura`: 183 de 411 artigos vigentes citados (CF 169/273; ADCT 14/138)
- 2026-10-23 — bloco 1 gravado: Títulos I e II (arts. 1º a 17). Lacunas: júri e remédios constitucionais (art. 5º), plebiscito e referendo (art. 14). Falsos positivos do leitor do script em arts. 4º e 8º
- 2026-10-23 — bloco 2 gravado: Título III (arts. 18 a 43). Lacunas: alteração de estados (18), royalties (20 § 1º), lei municipal (29), intervenção estadual (35), administração indireta e improbidade (37), conselho de pessoal e escolas de governo (39), RPPS (40), superintendências regionais (43)
- 2026-10-23 — bloco 3 gravado: Título IV, Cap. I (arts. 44 a 75). Lacunas: incisos XIV a XVIII do art. 49, comandantes e chefes de missão no art. 52, imunidade processual (53), perda de mandato (55), processo do decreto legislativo e da resolução (59)
- 2026-10-23 — bloco 4 gravado: Título IV, Cap. II (arts. 76 a 91). Lacunas: art. 84, VII (relações exteriores), processo de impeachment em raias (86), líderes da maioria e minoria e cidadãos do Conselho da República (89)
- 2026-10-23 — bloco 5 gravado: Título IV, Cap. III (arts. 92 a 126). Lacunas: reserva de plenário (97), juizados e justiça de paz (98), precatórios (100), ADPF, reclamação e legitimados da ADI (102, 103), súmula vinculante (103-A), ENFAM/CJF/ENAMAT/CSJT (105, 111-A), TRF julga juízes e recursos (108)
- 2026-10-23 — bloco 6 gravado: Título IV, Cap. IV, e Título V (arts. 127 a 144). Lacunas: controle externo da atividade policial (129, VII), MP de contas estaduais (130), órgãos de trânsito (144, § 10)
- 2026-10-23 — bloco 7 gravado: Título VI (arts. 145 a 169). Lacunas: Simples Nacional (146), órgão central de contabilidade (163-A), créditos adicionais (167), mecanismo de ajuste fiscal (167-A), calamidade pública nacional (167-B a 167-G)
- 2026-10-23 — bloco 8 gravado: Título VII (arts. 170 a 192). Lacunas: estatais e CADE (173), concessões (175), lavra (176), ANP (177), plano diretor (182), reforma agrária (184), terras públicas (188)
- 2026-10-23 — bloco 9 gravado: Título VIII (arts. 193 a 232). Lacunas: SUS, RGPS, SUAS e seguridade (194 a 204), sistemas de ensino, piso da educação, Fundeb e PNE (211 a 214), Sistema Nacional de Cultura (216-A), SNCTI (219-B), Conselho de Comunicação Social (224), licenciamento e Sisnama (225), terras indígenas (231)
- 2026-10-23 — bloco 10 gravado: Título IX (arts. 234 a 250). Lacunas: cartórios (236), comércio exterior (237), FAT e BNDES (239), Sistema S (240), Colégio Pedro II (242), expropriação (243), fundos previdenciários (249, 250). Fim da parte permanente; segue o ADCT
- 2026-10-23 — bloco 11 gravado: ADCT (138 artigos vigentes). Lacunas vigentes: Fundeb (60, 60-A), Sistema S (62), quilombolas (68), DRU (76 a 76-B), fundos de combate à pobreza (79 a 82), Zona Franca (40, 92 a 92-B), precatórios (87, 101 a 107-A), estimativa de impacto (113), alíquotas de referência (130). Achado: o leitor de `scripts/cobertura-cf.ts` retrocede no número quando ele vem seguido de inciso romano ("89, I" vira art. 8º; "49, IX" vira art. 4º; "126, I" vira ADCT art. 12), o que dá 3 falsos positivos; com `\d+(?!\d)` em NUM eles somem e nada mais muda (testado fora do repositório). Script não alterado
- 2026-10-23 — fechamento: `npm run -s cobertura` de novo (183 de 411; as revisões gravadas durante a tarefa, commits 9ca2daf e 03b9f6c, não mudaram nenhuma citação da CF). Quadro com 411 artigos conferido contra a lista do script (nenhum faltando ou repetido). Cobertura: CF 72,3%, ADCT 25,6%. Propostas de tarefa (9 grupos) e erros de dispositivo gravados. Concluída
- 2026-10-28 — atualização do quadro depois das 8 coletas de lacunas, de f0-residuais e de f0-sugestoes-revisoes: `npm run -s cobertura` rodado (256 de 411 citados; CF 211/273, ADCT 45/138). Método: só as linhas `lacuna` e `parcial` (101), conferidas contra os ids em `dados/` e os diários das coletas. Bloco 1 gravado: Títulos I a III (arts. 5º a 43; 11 linhas)
- 2026-10-28 — bloco 2 gravado: Título IV, Caps. I a III (arts. 49 a 111-A; 17 linhas). Continuam parciais: 53 (§§ 2º e 8º, fora por decisão do coordenador), 84 (VII, fora: Estado estrangeiro não é nó) e 105 (I, j, conflitos com o Comitê Gestor do IBS)
- 2026-10-28 — bloco 3 gravado: Título IV, Cap. IV, a Título VII (arts. 129 a 188; 20 linhas). Continuam parciais: 176 (potencial hidráulico) e 177 (monopólio da União), lacunas para as leis estruturantes. Achado: o script não expande faixas com letra ("arts. 167-B a 167-G"), por isso 167-C a 167-F aparecem sem citação apesar de cobertos
- 2026-10-28 — bloco 4 gravado: Título VIII (arts. 194 a 231; 16 linhas), todas cobertas
- 2026-10-28 — bloco 5 gravado: Título IX e ADCT (arts. 236 a 250 e ADCT; 37 linhas). Continuam: 237 (lacuna) e 243 (parcial) na CF; ADCT, arts. 32 e 69 (parciais: variações estaduais não levantadas). ADCT, art. 113 passou a coberto pela etapa iniciativa de proc:lei-ordinaria e proc:lei-complementar. Falta a seção Cobertura
- 2026-10-28 — seção Cobertura reescrita (tabela nova, descobertos que restam, tabela antiga como "Antes (2026-10-23)"); `npm run -s cobertura` de novo no fim: 256 de 411, sem mudança. Resumo: das 101 linhas `lacuna` ou `parcial`, 94 mudaram de classificação (90 para `coberto`; 176, 243 e ADCT 32 e 69 de `lacuna` para `parcial`) e 7 ficaram (5º, 12, 53, 84, 105, 177 parciais; 237 lacuna). Cobertura: CF 72,3% → 97,6%; ADCT 25,6% → 97,4%; total 64,9% → 97,6%. Restam 11 descobertos: 2 fora do escopo da fatia 0 (53, §§ 2º e 8º; 84, VII) e 9 para a fase das leis estruturantes (D04). Concluída
