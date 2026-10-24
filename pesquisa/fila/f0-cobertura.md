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
| art. 5º | parcial | § 3º (tratado de direitos humanos com quórum de emenda) em `obj:tratado-internacional`. Falta: tribunal do júri (XXXVIII), órgão da Justiça comum com competência própria (proposta: `org:tribunal-do-juri`, órgão); remédios constitucionais como objetos de competência das cortes (LXVIII a LXXIII: habeas corpus, mandado de segurança, mandado de injunção, habeas data, ação popular; propostas: `obj:habeas-corpus`, `obj:mandado-de-seguranca`, `obj:mandado-de-injuncao`, `obj:habeas-data`, `obj:acao-popular`); adesão ao Tribunal Penal Internacional (§ 4º; proposta: `org:tribunal-penal-internacional`, organismo internacional, D05). O resto é direito individual (fora) |
| art. 6º | fora | direitos sociais |
| art. 7º | fora | direitos dos trabalhadores |
| art. 8º | fora | organização sindical. A citação em `cargo:vice-presidente-da-republica` é falso positivo do leitor (dispositivo "arts. 79, 89, I, e 91, I") |
| art. 9º | fora | direito de greve |
| art. 10 | fora | participação em colegiados (princípio) |
| art. 11 | fora | representação de empregados |
| art. 12 | parcial | § 3º (cargos privativos de brasileiro nato) nos requisitos dos cargos da cúpula e de `cargo:ministro-de-estado` (Defesa). Falta: carreira diplomática e oficial das Forças Armadas (§ 3º, V e VI) não têm cargo agregado; baixa prioridade. O resto (aquisição e perda da nacionalidade) é direito material |
| art. 13 | fora | idioma e símbolos |
| art. 14 | parcial | eleitorados, `proc:eleicao-geral`, `proc:eleicao-municipal`, `obj:registro-de-candidatura`, `obj:acao-de-impugnacao-de-mandato-eletivo`, requisitos de idade nos cargos eletivos. Falta: plebiscito e referendo (I e II) como objeto e procedimento (convocação pelo Congresso, art. 49, XV; Lei 9.709/1998 já registrada como `norma:lei-9709-1998`); propostas `obj:plebiscito-e-referendo` e `rel:congresso-convoca-plebiscito-e-referendo`. Juiz de paz eletivo (§ 3º, VI, c): ver art. 98 |
| art. 15 | coberto | `obj:perda-ou-suspensao-de-direitos-politicos` |
| art. 16 | fora | anterioridade da lei eleitoral (regra material); citado em `proc:eleicao-geral` |
| art. 17 | coberto | `org:partidos-politicos`, partidos e federações, `obj:estatuto-de-partido-politico`, `obj:fundo-partidario`, `obj:fefc`, `rel:partidos-politicos-presta-contas-a-justica-eleitoral`, `rel:tse-aprecia-para-registro-estatuto-de-partido` |
| art. 18 | parcial | Entes (`ente:uniao`, estaduais, `ente:df`, municipais); `org:territorios-federais` (§ 2º); `proc:alteracao-territorial-de-municipios` (§ 4º). Falta: o procedimento de incorporação, subdivisão e desmembramento de estados e de criação de territórios (§ 3º: plebiscito mais lei complementar do Congresso); proposta `proc:alteracao-territorial-de-estados` |
| art. 19 | fora | vedações aos entes |
| art. 20 | lacuna | Os bens da União (caput) são regra material. Falta o § 1º: participação dos entes no resultado da exploração de petróleo, gás, recursos hídricos e minerais, ou compensação financeira (royalties), transferência entre entes; proposta `obj:compensacao-financeira-recursos-naturais` (receita) com `repassa-recursos` para estados e municípios |
| art. 21 | coberto | matriz de competências: relações `tem-competencia` da União para cada inciso (I a XXVI) |
| art. 22 | coberto | matriz de competências: incisos I a XXX |
| art. 23 | coberto | matriz de competências: competência comum, incisos I a XII |
| art. 24 | coberto | matriz de competências: concorrente, incisos I a XVI e §§ |
| art. 25 | coberto | `obj:constituicao-estadual`, `obj:lei-estadual`, `proc:lei-estadual`, `obj:materia-competencias-remanescentes`, `obj:materia-gas-canalizado`, `org:arquetipo-estadual-regioes-metropolitanas` |
| art. 26 | fora | bens dos estados |
| art. 27 | coberto | `org:arquetipo-estadual-assembleia-legislativa`, `cargo:arquetipo-estadual-deputado-estadual`, `rel:eleitorado-estadual-propoe-lei-estadual` (§ 4º) |
| art. 28 | coberto | `cargo:arquetipo-estadual-governador`, `cargo:arquetipo-estadual-vice-governador`, `org:arquetipo-estadual-secretarias`, `proc:eleicao-geral` |
| art. 29 | parcial | Lei orgânica, eleição e cargos municipais, julgamento do prefeito pelo TJ (X). Falta: o processo legislativo municipal (não há `obj:lei-municipal` nem processo; propostas `obj:lei-municipal` e `proc:lei-municipal`, por simetria como `proc:lei-estadual`) e a iniciativa popular municipal (XIII; proposta `rel:eleitorado-municipal-propoe-lei-municipal`) |
| art. 29-A | coberto | `obj:limites-de-despesa-da-camara-municipal`, `rel:prefeito-repassa-recursos-camara-municipal` |
| art. 30 | coberto | matriz de competências dos municípios (I a IX) |
| art. 31 | coberto | `org:arquetipo-municipal-controle-interno`, `rel:camara-municipal-fiscaliza-prefeitura`, `rel:camara-municipal-julga-contas-prefeito`, `rel:tce-parecer-previo-contas-prefeito`, TCMs e variações |
| art. 32 | coberto | `org:camara-legislativa-do-df`, `var:df-*` (sem municípios, polícias e bombeiros mantidos pela União) |
| art. 33 | coberto | `org:territorios-federais` (não há território em 2026-10-01; a organização prevista no artigo fica latente) |
| art. 34 | coberto | `proc:intervencao-federal` |
| art. 35 | lacuna | Intervenção do estado nos municípios (já anotada em f0-fechamento): proposta `proc:intervencao-estadual` (governador decreta; Assembleia aprecia; TJ provê representação no caso do IV). A citação em `proc:intervencao-federal` vem da faixa "arts. 34 a 36" e só cobre a União nos municípios de território |
| art. 36 | coberto | `proc:intervencao-federal`, `rel:congresso-delibera-intervencao-defesa-e-sitio` |
| art. 37 | parcial | § 4º em `obj:perda-ou-suspensao-de-direitos-politicos`; XXII em `org:receita-federal`. Falta: administração indireta como categoria (XIX e XX: autarquias, fundações, empresas públicas, sociedades de economia mista; o mapa só tem duas autarquias; D07 pede exemplos); ação de improbidade administrativa (§ 4º; proposta `obj:acao-de-improbidade-administrativa`, que MP e advocacia pública propõem); ouvidorias e participação do usuário (§ 3º), baixa prioridade |
| art. 38 | fora | servidor no exercício de mandato |
| art. 39 | lacuna | Conselho de política de administração e remuneração de pessoal de cada ente (caput) e escolas de governo (§ 2º). Propostas: verificar se a União instituiu o conselho antes de criar entidade; escola de governo federal como exemplo (proposta `org:enap`, a confirmar na lei); o resto é regime de pessoal (fora) |
| art. 40 | parcial | Aposentadoria compulsória nos requisitos dos cargos (§ 1º, II); contribuição em `obj:tributo-contribuicao-previdenciaria-dos-servidores`. Falta: o regime próprio de previdência e seu gestor único por ente (§ 20) e a previdência complementar dos servidores (§§ 14 e 15). Propostas: `org:arquetipo-rpps` ou o gestor federal, e a entidade de previdência complementar federal como exemplo, a confirmar na lei |
| art. 41 | fora | estabilidade do servidor |
| art. 42 | coberto | `org:arquetipo-estadual-policia-militar`, `org:arquetipo-estadual-corpo-de-bombeiros-militar`, TJMs |
| art. 43 | lacuna | Organismos regionais que executam os planos regionais (§ 1º, II): propostas `org:sudam`, `org:sudene`, `org:sudeco` (autarquias federais; criadas por leis complementares a conferir), ligadas ao `org:ministerio-da-integracao-e-do-desenvolvimento-regional` e ao `obj:materia-planos-de-desenvolvimento` |
| art. 44 | coberto | `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `rel:congresso-exerce-poder-legislativo` |
| art. 45 | coberto | `cargo:deputado-federal`, `rel:eleitorado-elege-deputado-federal`, `norma:lc-78-1993` |
| art. 46 | coberto | `cargo:senador`, `rel:eleitorado-elege-senador` |
| art. 47 | coberto | quórum nas relações `delibera` dos plenários e nos processos legislativos |
| art. 48 | coberto | competência legislativa do Congresso com sanção: `proc:lei-ordinaria`, `obj:lei-ordinaria`, `rel:congresso-delibera-ppa`/`ldo`/`loa` |
| art. 49 | parcial | I a XIII cobertos (tratados, autorizações ao Presidente, defesa/sítio/intervenção, sustação, contas, radiodifusão, TCU); XVIII parcial em `rel:presidente-da-republica-propoe-decreto-legislativo`. Falta: XIV (aprovar iniciativas nucleares), XV (plebiscito e referendo, ver art. 14), XVI (autorizar mineração e aproveitamento hídrico em terras indígenas), XVII (aprovar alienação de terras públicas acima de 2.500 ha), XVIII como objeto (proposta `obj:estado-de-calamidade-publica-nacional`, com `rel:congresso-decreta-calamidade-publica`); VII e VIII (fixar subsídios), baixa prioridade |
| art. 50 | coberto | `rel:camara-convoca-ministro-de-estado`, `rel:senado-convoca-ministro-de-estado`, `rel:congresso-fiscaliza-poder-executivo`. Detalhe: não há cargo de presidente do Comitê Gestor do IBS, também convocável (já anotado em f0-fechamento) |
| art. 51 | coberto | `rel:camara-autoriza-processo-presidente`, `rel:camara-autoriza-processo-vice-presidente`, `rel:camara-toma-contas-presidente`, `rel:camara-elege-conselho-da-republica`, `norma:ricd` |
| art. 52 | parcial | I, II, III (a a f), V a IX (por resolução), X, XI, XIV e parágrafo único cobertos. Falta: julgamento dos Comandantes das Forças Armadas por crime conexo (I; proposta `rel:senado-julga-comandantes-das-forcas-armadas`, ou uma por cargo); aprovação dos chefes de missão diplomática permanente (IV; proposta `cargo:chefe-de-missao-diplomatica-permanente`, agregado, em `org:ministerio-das-relacoes-exteriores`, com `rel:senado-aprova-indicacao-…`); avaliação do Sistema Tributário Nacional e das administrações tributárias (XV) |
| art. 53 | parcial | Foro no STF (§ 1º) em `rel:stf-julga-deputado-federal` e `rel:stf-julga-senador`. Falta: deliberação da Casa sobre a prisão em flagrante e sustação da ação penal (§§ 2º a 4º); proposta `rel:camara-susta-acao-penal-contra-deputado` e equivalente no Senado, com quórum de maioria absoluta |
| art. 54 | fora | incompatibilidades do parlamentar (regra do mandato; citadas nos cargos) |
| art. 55 | parcial | Hipóteses citadas em `cargo:deputado-federal` e `cargo:senador`. Falta: o procedimento de perda de mandato (Casa decide por maioria absoluta nos casos I, II e VI; Mesa declara nos casos III a V); proposta `proc:perda-de-mandato-parlamentar` ou relações `rel:camara-decide-perda-de-mandato-deputado` e `rel:senado-decide-perda-de-mandato-senador` |
| art. 56 | fora | licença, suplência e investidura em outros cargos (regra do mandato; citada nos cargos) |
| art. 57 | coberto | sessões, Mesas, `org:mesa-do-congresso-nacional`, convocação extraordinária nos processos de defesa, sítio e intervenção |
| art. 58 | coberto | comissões das Casas e mistas, CPIs e CPMIs, `proc:comissao-parlamentar-de-inquerito`, `org:comissao-representativa-do-congresso-nacional` |
| art. 59 | parcial | Objetos das sete espécies existem (`obj:emenda-constitucional` a `obj:resolucao`) e há processos para emenda, lei complementar, ordinária, delegada e medida provisória. Falta: processo do decreto legislativo e da resolução (já anotado em f0-fechamento); propostas `proc:decreto-legislativo` e `proc:resolucao` |
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
| art. 84 | parcial | Incisos I a VI, VIII a X, XII a XX, XXII a XXVI e XXVIII têm relação. Falta: VII (manter relações com Estados estrangeiros e acreditar diplomatas; proposta de relação do Presidente com o MRE e os chefes de missão, ver art. 52, IV); XI (mensagem ao Congresso na abertura da sessão) e XXI (condecorações), baixa prioridade |
| art. 85 | coberto | `rel:senado-julga-presidente-crime-de-responsabilidade`, `norma:lei-1079-1950`, `aviso:lei-1079-adpf-1259-1260` |
| art. 86 | parcial | Relações `rel:camara-autoriza-processo-presidente`, `rel:senado-julga-presidente-crime-de-responsabilidade`, `rel:stf-julga-presidente-crime-comum`. Falta a vista em raias do impeachment e do processo por crime comum (admissão por 2/3 da Câmara, instauração pelo Senado, afastamento de 180 dias, julgamento presidido pelo Presidente do STF); proposta `proc:crime-de-responsabilidade-do-presidente` (com regime para crime comum) |
| art. 87 | coberto | `cargo:ministro-de-estado` e os ministérios |
| art. 88 | coberto | `norma:lei-14600-2023` (organização dos ministérios) |
| art. 89 | parcial | `org:conselho-da-republica` e membros I a III e VI. Falta: líderes da maioria e da minoria na Câmara e no Senado (IV e V; propostas `cargo:lider-da-maioria-na-camara-dos-deputados`, `cargo:lider-da-minoria-na-camara-dos-deputados` e equivalentes no Senado); cargo dos seis cidadãos (VII; já anotado em f0-fechamento) |
| art. 90 | coberto | `rel:conselho-da-republica-assessora-presidente`; participação nos processos de defesa, sítio e intervenção |
| art. 91 | coberto | `org:conselho-de-defesa-nacional`, membros natos, `rel:conselho-de-defesa-nacional-assessora-presidente`. Detalhe: § 1º, III (critérios de uso da faixa de fronteira) só no texto |
| art. 92 | coberto | `org:poder-judiciario` e todos os órgãos listados (STF, CNJ, STJ, TST, ramos da Justiça, TRFs, TRTs, TREs, STM, TJs, TJMs) |
| art. 93 | coberto | cargos de juiz e de desembargador (ingresso, promoção, aposentadoria). Detalhe: o órgão especial dos tribunais com mais de 25 julgadores (XI) não tem nó; baixa prioridade |
| art. 94 | coberto | quinto constitucional nos cargos de desembargador, juiz de TRF e de TRT, e em `rel:governador-nomeia-desembargador`, `rel:presidente-nomeia-juiz-de-trf` |
| art. 95 | fora | garantias e vedações dos juízes (regra do cargo; citada nos cargos) |
| art. 96 | coberto | `rel:ministros-do-stf-elegem-presidente-do-stf`, `rel:*-propoe-lei-*` dos tribunais, `rel:arquetipo-estadual-tj-julga-juiz-de-direito`, `rel:arquetipo-estadual-tj-julga-membro-do-ministerio-publico` |
| art. 97 | lacuna | Reserva de plenário: só a maioria absoluta do tribunal ou do órgão especial declara inconstitucionalidade. Falta o controle difuso pelos tribunais (proposta `rel:poder-judiciario-controla-constitucionalidade`, com quórum de maioria absoluta) e o órgão especial (art. 93, XI); baixa prioridade |
| art. 98 | parcial | Juizados especiais só aparecem nas etapas de `proc:caminho-de-um-processo`. Falta: juizados especiais e turmas recursais como órgãos (I e § 1º; proposta `org:juizados-especiais`, conjunto, na Justiça estadual e na federal); justiça de paz eletiva (II; propostas `org:arquetipo-estadual-justica-de-paz` e `cargo:arquetipo-estadual-juiz-de-paz`, com eleição direta) |
| art. 99 | coberto | autonomia e proposta orçamentária do Judiciário em `proc:ciclo-orcamentario` |
| art. 100 | lacuna | Precatórios: pagamento das condenações judiciais das Fazendas Públicas, com requisição pelo presidente do tribunal e inclusão no orçamento. Propostas `obj:precatorio` e `proc:pagamento-de-precatorio` (atores: juízo, presidente do tribunal, ente devedor, CNJ) |
| art. 101 | coberto | `cargo:ministro-do-stf`, indicação, aprovação pelo Senado e nomeação |
| art. 102 | parcial | ADI e ADC (`obj:adi-e-adc`, `rel:stf-controla-constitucionalidade-leis-e-atos`), foro (I, b e c), ações contra CNJ e CNMP (I, r), recursos ordinário e extraordinário com repercussão geral. Falta: arguição de descumprimento de preceito fundamental (§ 1º; proposta `obj:adpf`); reclamação constitucional (I, l; proposta `obj:reclamacao-constitucional`); conflitos federativos entre entes (I, f); habeas corpus, mandado de segurança e mandado de injunção contra as cúpulas (I, d, i, q; ver os objetos propostos no art. 5º) |
| art. 103 | parcial | `obj:adi-e-adc`, `rel:pgr-propoe-adi-e-adc`, `rel:conselho-federal-da-oab-propoe-adi-e-adc`; AGU (§ 3º) citado no cargo. Falta: relações `propoe` dos demais legitimados (Presidente, Mesas do Senado, da Câmara e das Assembleias, Governador, partidos com representação, confederações sindicais e entidades de classe); ação de inconstitucionalidade por omissão (§ 2º; proposta `obj:ado` ou ampliar `obj:adi-e-adc`) |
| art. 103-A | lacuna | Súmula vinculante: proposta `obj:sumula-vinculante` e `rel:stf-edita-sumula-vinculante` (quórum de 2/3), com reclamação ao STF (§ 3º) |
| art. 103-B | coberto | `org:cnj`, `cargo:conselheiro-do-cnj`, indicações, `rel:cnj-controla-internamente-poder-judiciario`, `rel:cnj-corrige-poder-judiciario` |
| art. 104 | coberto | `cargo:ministro-do-stj`, `rel:stj-indica-ministro-do-stj`, aprovação e nomeação |
| art. 105 | parcial | Foro (I, a) para governadores, desembargadores, juízes de TRF, TRE e TRT e membros do MPU; recursos ordinário e especial. Falta: julgamento dos conselheiros dos tribunais de contas estaduais e municipais (I, a; proposta `rel:stj-julga-conselheiro-do-tce`); conflitos com o Comitê Gestor do IBS (I, j); Escola Nacional de Formação e Aperfeiçoamento de Magistrados e Conselho da Justiça Federal (§ 1º; propostas `org:enfam` e `org:conselho-da-justica-federal`, hoje só no texto de `org:stj` e `org:justica-federal`) |
| art. 106 | coberto | `org:justica-federal`, `org:trf-1` a `org:trf-6`, `cargo:juiz-federal` |
| art. 107 | coberto | `cargo:juiz-de-trf`, `rel:presidente-nomeia-juiz-de-trf` |
| art. 108 | parcial | Citado em `org:justica-federal`, nos TRFs e em `proc:caminho-de-um-processo`. Falta: TRF julga juízes federais (incluídos os militares e do trabalho) e membros do MPU (I, a; já anotado em f0-fechamento, sem nó único para os TRFs) e julga recursos contra os juízes federais (II; proposta `rel:trfs-julgam-recursos-dos-juizes-federais`) |
| art. 109 | coberto | competência dos juízes federais em `org:justica-federal` e `cargo:juiz-federal`; delegação aos juízes de direito (§§ 3º e 4º) em `cargo:juiz-de-direito` |
| art. 110 | coberto | seções judiciárias em `org:justica-federal` |
| art. 111 | coberto | `org:justica-do-trabalho`, `org:tst`, TRTs, `cargo:juiz-do-trabalho` |
| art. 111-A | parcial | `cargo:ministro-do-tst`, `rel:tst-indica-ministro-do-tst`, `rel:tst-julga-recursos-da-justica-do-trabalho`. Falta: ENAMAT e Conselho Superior da Justiça do Trabalho (§ 2º; propostas `org:enamat` e `org:csjt`, hoje só no texto de `org:tst`) |
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
| art. 129 | parcial | Ação penal pública e ação civil pública (`rel:mpu-promove-*`, `rel:arquetipo-estadual-ministerio-publico-promove-*`); representação para intervenção em `proc:intervencao-federal`. Falta: controle externo da atividade policial (VII; proposta `rel:ministerio-publico-controla-atividade-policial`, do MP para as polícias); requisição de inquérito policial (VIII); defesa judicial das populações indígenas (V), baixa prioridade |
| art. 130 | parcial | `org:mp-junto-ao-tcu`. Falta: Ministérios Públicos junto aos tribunais de contas estaduais (já anotado em f0-fechamento; proposta `org:arquetipo-estadual-mp-de-contas`) |
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
| art. 144 | parcial | Todos os órgãos dos incisos I a VI, guardas municipais (§ 8º), `org:sistema-unico-de-seguranca-publica` (§ 7º). Falta: órgãos executivos de trânsito dos estados, do DF e dos municípios (§ 10, segurança viária; propostas `org:arquetipo-estadual-orgao-executivo-de-transito` e `org:arquetipo-municipal-orgao-executivo-de-transito`) |
| art. 145 | coberto | matriz tributária: `obj:tributo-taxas`, `obj:tributo-contribuicao-de-melhoria` e competências dos três níveis |
| art. 146 | parcial | `obj:limitacoes-ao-poder-de-tributar` (II). Falta: o regime único de arrecadação das micro e pequenas empresas (III, d, e §§ 1º a 3º: Simples Nacional, com arrecadação compartilhada entre os entes); proposta `obj:simples-nacional` e o comitê gestor previsto em lei complementar (a conferir) |
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
| art. 163-A | lacuna | O órgão central de contabilidade da União fixa formato e sistema dos dados contábeis e fiscais de todos os entes. Proposta: relação da `org:secretaria-do-tesouro-nacional` (a conferir na lei como órgão central de contabilidade) com os entes; baixa prioridade |
| art. 164 | coberto | `org:banco-central` (emissão de moeda) |
| art. 164-A | coberto | `obj:regime-fiscal-sustentavel` |
| art. 165 | coberto | `obj:ppa`, `obj:ldo`, `obj:loa`, `proc:ciclo-orcamentario`, `rel:presidente-propoe-*` |
| art. 166 | coberto | `org:cmo`, emendas individuais e de bancada, `proc:ciclo-orcamentario` |
| art. 166-A | coberto | transferências das emendas individuais em `obj:emenda-individual-ao-orcamento` |
| art. 167 | parcial | `obj:regra-de-ouro` (III). Falta: créditos adicionais (suplementares, especiais e extraordinários; V e §§ 2º e 3º; já anotado em f0-fechamento; proposta `obj:credito-adicional`, com aprovação do Congresso e abertura por medida provisória no caso extraordinário) |
| art. 167-A | lacuna | Mecanismo de ajuste fiscal dos estados e municípios quando a despesa corrente passa de 95% da receita corrente; proposta `obj:mecanismo-de-ajuste-fiscal` (regra fiscal), baixa prioridade |
| art. 167-B | lacuna | Estado de calamidade pública de âmbito nacional decretado pelo Congresso por iniciativa do Presidente; proposta `obj:estado-de-calamidade-publica-nacional` e `proc:calamidade-publica-nacional` (ver art. 49, XVIII, e 84, XXVIII) |
| art. 167-C | lacuna | regime extraordinário da calamidade (contratações simplificadas); entra no `proc:calamidade-publica-nacional` proposto |
| art. 167-D | lacuna | idem (dispensa de regras para proposições da calamidade) |
| art. 167-E | lacuna | idem (dispensa da regra de ouro) |
| art. 167-F | lacuna | idem (dispensa de limites de crédito) |
| art. 167-G | lacuna | idem (vedações do art. 167-A para a União) |
| art. 168 | coberto | duodécimos (`rel:executivo-repassa-duodecimos-*`) |
| art. 169 | coberto | `obj:limites-de-despesa-com-pessoal`, `rel:tcu-fiscaliza-limites-de-despesa-com-pessoal` |
| art. 170 | fora | princípios da ordem econômica |
| art. 172 | fora | capital estrangeiro (remete à lei) |
| art. 173 | lacuna | Empresas estatais que exploram atividade econômica (§§ 1º a 3º) e repressão ao abuso do poder econômico (§ 4º). Falta: exemplos de empresas públicas e sociedades de economia mista federais (D07; nenhuma no mapa) e o órgão de defesa da concorrência (proposta `org:cade`, autarquia, a conferir na Lei 12.529/2011) |
| art. 174 | fora | Estado regulador e planejador (princípio); as agências reguladoras entram pelos arts. 21, XI, e 177, § 2º, III |
| art. 175 | lacuna | Concessão e permissão de serviço público, sempre com licitação. Propostas `obj:concessao-de-servico-publico` (objeto) e concessionárias como exemplos (D05, caso de fronteira) |
| art. 176 | lacuna | Autorização e concessão de pesquisa e lavra mineral e de aproveitamento hidráulico pela União (§ 1º); participação do proprietário do solo (§ 2º). Propostas `obj:concessao-de-lavra-e-de-potencial-hidraulico` e o órgão que a concede (agência de mineração, a conferir na lei) |
| art. 177 | parcial | `obj:tributo-cide` (§ 4º). Falta: monopólio da União sobre petróleo, gás e minerais nucleares (I a V) e o órgão regulador do monopólio (§ 2º, III; proposta `org:anp`, autarquia, a conferir na Lei 9.478/1997) |
| art. 178 | fora | ordenação dos transportes (remete à lei; a matéria está na matriz) |
| art. 179 | fora | tratamento das micro e pequenas empresas (princípio) |
| art. 180 | fora | incentivo ao turismo |
| art. 181 | fora | requisição estrangeira de documentos |
| art. 182 | lacuna | Plano diretor aprovado pela Câmara Municipal, obrigatório acima de 20 mil habitantes (§ 1º), e instrumentos do § 4º. Proposta `obj:plano-diretor` com `rel:camara-municipal-delibera-plano-diretor`; a competência municipal em urbanismo já está na matriz |
| art. 183 | fora | usucapião urbano |
| art. 184 | lacuna | Desapropriação para reforma agrária pela União (decreto, ação judicial de rito sumário, títulos da dívida agrária). Propostas `proc:desapropriacao-para-reforma-agraria` e o órgão executor federal (proposta `org:incra`, autarquia, a conferir) |
| art. 185 | fora | imóveis não desapropriáveis |
| art. 186 | fora | função social da propriedade rural |
| art. 187 | fora | política agrícola (diretrizes) |
| art. 188 | lacuna | § 1º: aprovação prévia do Congresso para alienar ou conceder terras públicas acima de 2.500 ha (mesma lacuna do art. 49, XVII) |
| art. 189 | fora | títulos da reforma agrária |
| art. 190 | fora | aquisição de terra por estrangeiro (remete à lei) |
| art. 191 | fora | usucapião rural |
| art. 192 | coberto | `org:cmn` e `org:banco-central` representam a regulação do sistema financeiro. Detalhe: não há nó para o sistema financeiro nacional nem outros reguladores (ex.: CVM); baixa prioridade |
| art. 193 | fora | princípio da ordem social |
| art. 194 | lacuna | Seguridade social como conjunto (saúde, previdência, assistência) com gestão quadripartite em colegiados (VII). Só há a matéria na matriz (`obj:materia-seguridade-social`). Proposta: não criar um nó próprio; cobrir pelos três sistemas (arts. 198, 201 e 204) e seus colegiados |
| art. 195 | coberto | contribuições sociais na matriz tributária (`obj:tributo-contribuicao-sobre-folha-de-salarios`, `…-receita-ou-faturamento`, `…-sobre-o-lucro`, `…-do-trabalhador`, `…-concursos-de-prognosticos`, `…-do-importador`, `obj:tributo-cbs`). Detalhe: orçamento da seguridade social (§ 2º) só como parte de `obj:loa` |
| art. 196 | fora | direito à saúde |
| art. 197 | fora | relevância pública das ações de saúde |
| art. 198 | lacuna | Sistema Único de Saúde: rede regionalizada com direção única em cada esfera (I), participação da comunidade (III), pisos mínimos de aplicação (§ 2º), agentes comunitários pagos pela União (§§ 7º a 9º). Propostas `org:sistema-unico-de-saude` (tipo `sistema`), gestores por esfera (`org:ministerio-da-saude` e secretarias de saúde dos arquétipos), conselhos de saúde, `obj:piso-constitucional-da-saude` (regra fiscal), fundo nacional de saúde (ver ADCT, art. 122). Fontes prováveis: Lei 8.080/1990, Lei 8.142/1990, LC 141/2012 |
| art. 199 | fora | assistência à saúde pela iniciativa privada |
| art. 200 | lacuna | Competências do SUS (vigilância sanitária e epidemiológica, controle de produtos, saneamento); entram como relações do `org:sistema-unico-de-saude` proposto, com a agência de vigilância sanitária como exemplo (a conferir na lei) |
| art. 201 | lacuna | Regime Geral de Previdência Social: proposta `org:regime-geral-de-previdencia-social` (sistema) ou o órgão que o opera (proposta `org:inss`, autarquia, a conferir), ligado ao `org:ministerio-da-previdencia-social` |
| art. 202 | lacuna | Previdência complementar e fiscalização das entidades fechadas; proposta: órgão de supervisão federal como exemplo (a conferir na LC 109/2001), baixa prioridade |
| art. 203 | fora | objetivos da assistência social e benefício de prestação continuada (direito) |
| art. 204 | lacuna | Assistência social descentralizada, com coordenação federal e participação popular. Proposta `org:sistema-unico-de-assistencia-social` (tipo `sistema`), com conselhos e fundo nacional (ver ADCT, art. 122); fonte provável: Lei 8.742/1993 |
| art. 205 | fora | direito à educação |
| art. 206 | fora | princípios do ensino |
| art. 207 | fora | autonomia universitária (regra); universidades federais entram como exemplos de administração indireta (ver art. 37) |
| art. 208 | fora | garantias do dever de educar |
| art. 209 | fora | ensino privado |
| art. 210 | fora | conteúdos mínimos |
| art. 211 | lacuna | Sistemas de ensino da União, dos estados e dos municípios em regime de colaboração, com atuação prioritária de cada nível (§§ 2º e 3º) e função redistributiva da União (§ 1º). Hoje só a matéria na matriz (`obj:materia-educacao`). Propostas: sistemas de ensino por esfera (tipo `sistema`) e o colegiado nacional de educação, a conferir na Lei 9.394/1996 |
| art. 212 | parcial | `obj:tributo-salario-educacao` (§§ 5º e 6º). Falta: o piso de aplicação em educação (18% da União, 25% dos demais; proposta `obj:piso-constitucional-da-educacao`, regra fiscal fiscalizada pelos tribunais de contas) |
| art. 212-A | lacuna | Fundeb: fundos estaduais com complementação da União. Proposta `obj:fundeb` (fundo) com `repassa-recursos` da União e dos entes; liga-se a ADCT, arts. 60 e 60-A |
| art. 213 | fora | destinação de recursos a escolas |
| art. 214 | lacuna | Plano nacional de educação decenal e sistema nacional de educação. Proposta `obj:plano-nacional-de-educacao` (lei) |
| art. 215 | fora | direitos culturais; plano de cultura por lei |
| art. 216 | coberto | competência de proteção do patrimônio cultural na matriz (`obj:materia-patrimonio-cultural`). Detalhe: o órgão federal de tombamento seria exemplo (D07) |
| art. 216-A | lacuna | Sistema Nacional de Cultura, com a estrutura do § 2º (órgãos gestores, conselhos, conferências, comissões intergestores, planos e sistemas de financiamento). Proposta `org:sistema-nacional-de-cultura` (tipo `sistema`), ligado a `org:ministerio-da-cultura` |
| art. 217 | lacuna | Justiça desportiva como instância prévia obrigatória ao Judiciário (§§ 1º e 2º); caso de fronteira (D05), baixa prioridade |
| art. 218 | fora | fomento à ciência |
| art. 219 | fora | mercado interno e inovação |
| art. 219-A | fora | cooperação em ciência e tecnologia (faculdade) |
| art. 219-B | lacuna | Sistema Nacional de Ciência, Tecnologia e Inovação; proposta `org:sncti` (tipo `sistema`), ligado a `org:ministerio-da-ciencia-tecnologia-e-inovacao` |
| art. 220 | fora | liberdade de expressão |
| art. 221 | fora | princípios da programação |
| art. 222 | fora | propriedade de empresas de comunicação |
| art. 223 | coberto | `obj:concessao-de-radiodifusao`, `rel:congresso-delibera-concessao-de-radiodifusao` |
| art. 224 | lacuna | Conselho de Comunicação Social, órgão auxiliar do Congresso; proposta `org:conselho-de-comunicacao-social` (colegiado em `org:congresso-nacional`), fonte provável Lei 8.389/1991 |
| art. 225 | parcial | Competência ambiental na matriz (`obj:materia-meio-ambiente`). Falta: estudo prévio de impacto e licenciamento (§ 1º, IV; proposta `proc:licenciamento-ambiental`) e o sistema de órgãos ambientais (proposta `org:sisnama`, tipo `sistema`, a conferir na Lei 6.938/1981) |
| art. 226 | fora | família |
| art. 227 | fora | criança, adolescente e jovem |
| art. 228 | fora | inimputabilidade |
| art. 229 | fora | deveres familiares |
| art. 230 | fora | idosos |
| art. 231 | lacuna | Demarcação das terras indígenas pela União (caput), autorização do Congresso para mineração e aproveitamento hídrico (§ 3º; ver art. 49, XVI) e remoção "ad referendum" do Congresso (§ 5º). Propostas `proc:demarcacao-de-terra-indigena` e o órgão indigenista federal (a conferir), ligado a `org:ministerio-dos-povos-indigenas` |
| art. 232 | fora | legitimidade processual dos índios (a defesa pelo MP está no art. 129, V) |
| art. 234 | fora | vedação na criação de estado |
| art. 235 | fora | regras para os dez primeiros anos de um estado novo (nenhum em 2026-10-01) |
| art. 236 | lacuna | Serviços notariais e de registro por delegação, com concurso e fiscalização pelo Judiciário (caso de fronteira, D05). Propostas `org:arquetipo-estadual-servicos-notariais-e-de-registro` (conjunto) e `rel:arquetipo-estadual-tj-fiscaliza-servicos-notariais`; o CNJ também atua (art. 103-B, § 4º, III) |
| art. 237 | lacuna | Fiscalização e controle do comércio exterior pelo Ministério da Fazenda; proposta de relação de `org:ministerio-da-fazenda` (ou `org:receita-federal`) com `obj:materia-comercio-exterior-e-interestadual`; baixa prioridade |
| art. 238 | fora | comércio de combustíveis (remete à lei) |
| art. 239 | parcial | `obj:tributo-pis-pasep`. Falta: destino da arrecadação ao seguro-desemprego e ao abono salarial, com no mínimo 28% para o BNDES (§§ 1º e 3º); propostas `obj:fundo-de-amparo-ao-trabalhador` (fundo, a conferir na Lei 7.998/1990) e `org:bndes` (empresa pública, exemplo D07); adicional por rotatividade (§ 4º; já anotado em f0-fechamento) |
| art. 240 | lacuna | Contribuições compulsórias ao Sistema S (já anotado em f0-fechamento). Propostas: as entidades do Sistema S como `paraestatal` (D05) e a contribuição na matriz tributária |
| art. 241 | coberto | `org:consorcios-publicos` |
| art. 242 | lacuna | § 2º: o Colégio Pedro II mantido na órbita federal (único órgão de ensino nomeado na CF); proposta `org:colegio-pedro-ii`, baixa prioridade. O resto é regra de ensino (fora) |
| art. 243 | lacuna | Expropriação de terras com cultivo ilegal de psicotrópicos ou trabalho escravo e fundo especial para os bens confiscados; propostas `proc:expropriacao-confiscatoria` e o fundo (a conferir na lei); baixa prioridade |
| art. 244 | fora | acessibilidade (remete à lei) |
| art. 245 | fora | assistência a vítimas de crime (remete à lei) |
| art. 246 | coberto | vedação de MP em `obj:medida-provisoria` e `proc:medida-provisoria` |
| art. 247 | fora | perda do cargo de servidor estável (regra de pessoal) |
| art. 248 | fora | teto dos benefícios do RGPS (o órgão gestor está na lacuna do art. 201) |
| art. 249 | lacuna | Fundos previdenciários dos entes para os regimes próprios; entra na proposta do art. 40 (RPPS), baixa prioridade |
| art. 250 | lacuna | Fundo do Regime Geral de Previdência Social; entra na proposta do art. 201, baixa prioridade |
| ADCT, art. 1º | transitorio-esgotado | compromisso na promulgação |
| ADCT, art. 2º | transitorio-esgotado | plebiscito de 1993 |
| ADCT, art. 3º | transitorio-esgotado | revisão constitucional de 1993-94 |
| ADCT, art. 4º | transitorio-esgotado | mandatos de 1988-90 |
| ADCT, art. 5º | transitorio-esgotado | eleições de 1988 |
| ADCT, art. 6º | transitorio-esgotado | registro de partidos em 1989 |
| ADCT, art. 7º | fora | tribunal internacional de direitos humanos (diretriz) |
| ADCT, art. 8º | lacuna | Anistia política ainda aplicada (requerimentos e reparação em curso). Proposta: o colegiado federal que a aplica (Comissão de Anistia, a conferir na Lei 10.559/2002), baixa prioridade |
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
| ADCT, art. 32 | lacuna | serventias notariais já oficializadas em 1988 continuam fora do regime privado; entra na proposta do art. 236 como atipicidade, baixa prioridade |
| ADCT, art. 33 | transitorio-esgotado | precatórios de 1988 |
| ADCT, art. 34 | transitorio-esgotado | entrada em vigor do sistema tributário |
| ADCT, art. 35 | coberto | § 2º: prazos do PPA, da LDO e da LOA até a lei complementar, em `proc:ciclo-orcamentario`, `obj:ppa`, `obj:ldo`, `obj:loa` |
| ADCT, art. 36 | transitorio-esgotado | ratificação de fundos em 1990 |
| ADCT, art. 37 | transitorio-esgotado | adaptação à regra de ouro até 1993 |
| ADCT, art. 38 | transitorio-esgotado | limite de pessoal até a LC (LRF de 2000) |
| ADCT, art. 39 | transitorio-esgotado | revisão do orçamento de 1989 |
| ADCT, art. 40 | lacuna | Zona Franca de Manaus, prorrogada pelos arts. 92 e 92-A; proposta `obj:zona-franca-de-manaus` (regime) e o órgão federal que a administra (a conferir), baixa prioridade |
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
| ADCT, art. 60 | lacuna | complementação da União ao Fundeb (implantação progressiva a partir de 2021); entra na proposta `obj:fundeb` (art. 212-A) |
| ADCT, art. 60-A | lacuna | revisão dos critérios do Fundeb no sexto ano; entra na proposta `obj:fundeb` |
| ADCT, art. 61 | fora | recursos a entidades educacionais |
| ADCT, art. 62 | lacuna | SENAR, nos moldes do SENAI e do SENAC: entra na proposta do Sistema S (art. 240) |
| ADCT, art. 63 | transitorio-esgotado | comissão do centenário da República |
| ADCT, art. 64 | transitorio-esgotado | edição popular da Constituição |
| ADCT, art. 65 | transitorio-esgotado | prazo para regulamentar o art. 220, § 4º |
| ADCT, art. 66 | transitorio-esgotado | concessões de telecomunicações de 1988 |
| ADCT, art. 67 | transitorio-esgotado | prazo de cinco anos para demarcação (a competência permanente está no art. 231) |
| ADCT, art. 68 | lacuna | Reconhecimento da propriedade das comunidades quilombolas, com emissão de títulos pelo Estado; proposta `proc:titulacao-de-territorio-quilombola` e o órgão federal que titula (a conferir) |
| ADCT, art. 69 | lacuna | Estados podem manter consultoria jurídica separada da PGE se já a tinham em 1988; proposta de variação (`var:`) nos estados que a mantêm, a levantar; baixa prioridade |
| ADCT, art. 70 | transitorio-esgotado | competência dos tribunais até as Constituições estaduais |
| ADCT, art. 71 | transitorio-esgotado | Fundo Social de Emergência (1994-99) |
| ADCT, art. 72 | transitorio-esgotado | composição do Fundo Social de Emergência |
| ADCT, art. 73 | transitorio-esgotado | regulação do Fundo Social de Emergência |
| ADCT, art. 74 | transitorio-esgotado | CPMF |
| ADCT, art. 75 | transitorio-esgotado | prorrogação da CPMF |
| ADCT, art. 76 | lacuna | Desvinculação de receitas da União até 2032; proposta `obj:desvinculacao-de-receitas` (regra fiscal), baixa prioridade |
| ADCT, art. 76-A | lacuna | desvinculação de receitas dos estados e do DF até 2032; mesma proposta |
| ADCT, art. 76-B | lacuna | desvinculação de receitas dos municípios até 2032; mesma proposta |
| ADCT, art. 77 | transitorio-esgotado | mínimos de saúde até 2004 |
| ADCT, art. 78 | transitorio-esgotado | parcelamento de precatórios da EC 30/2000 |
| ADCT, art. 79 | lacuna | Fundo de Combate e Erradicação da Pobreza no Executivo federal (vigência prorrogada pela EC 67/2010, a conferir); proposta `obj:fundo-de-combate-e-erradicacao-da-pobreza` (fundo); a matéria está na matriz (`obj:materia-combate-a-pobreza`) |
| ADCT, art. 80 | lacuna | composição do fundo federal; mesma proposta |
| ADCT, art. 81 | lacuna | fundo com recursos de desestatização que alimenta o de combate à pobreza; mesma proposta, baixa prioridade |
| ADCT, art. 82 | lacuna | fundos estaduais e municipais de combate à pobreza, geridos com participação da sociedade civil; proposta de fundo no arquétipo estadual e municipal |
| ADCT, art. 83 | fora | definição de produtos supérfluos (remete à lei) |
| ADCT, art. 84 | transitorio-esgotado | CPMF até 2004 |
| ADCT, art. 85 | transitorio-esgotado | isenções da CPMF |
| ADCT, art. 86 | transitorio-esgotado | precatórios da EC 37/2002 |
| ADCT, art. 87 | lacuna | valores de pequeno valor dos precatórios até as leis de cada ente; entra na proposta `proc:pagamento-de-precatorio` (art. 100) |
| ADCT, art. 88 | transitorio-esgotado | alíquota mínima do ISS até a LC (LC 157/2016) |
| ADCT, art. 89 | transitorio-esgotado | servidores do ex-Território de Rondônia |
| ADCT, art. 90 | transitorio-esgotado | prorrogação da CPMF até 2007 |
| ADCT, art. 92 | lacuna | prorrogação da Zona Franca de Manaus; mesma proposta do art. 40 |
| ADCT, art. 92-A | lacuna | nova prorrogação (até 2073); mesma proposta |
| ADCT, art. 92-B | lacuna | diferencial da Zona Franca no IBS e na CBS; mesma proposta |
| ADCT, art. 93 | transitorio-esgotado | início da partilha da CIDE após a lei |
| ADCT, art. 94 | transitorio-esgotado | fim dos regimes especiais com o Simples Nacional |
| ADCT, art. 95 | fora | registro de nascidos no exterior (direito) |
| ADCT, art. 96 | transitorio-esgotado | convalidação de municípios criados até 2006 (efeito produzido em 2008; citado em `proc:alteracao-territorial-de-municipios` como contexto) |
| ADCT, art. 97 | transitorio-esgotado | regime especial de precatórios da EC 62/2009, substituído pelo do art. 101 (conferir) |
| ADCT, art. 98 | fora | proporcionalidade de defensores; prazo do § 1º vencido em 2022 |
| ADCT, art. 99 | transitorio-esgotado | partilha do ICMS até 2019 |
| ADCT, art. 100 | transitorio-esgotado | aposentadoria aos 75 até a LC 152/2015 |
| ADCT, art. 101 | lacuna | regime especial de precatórios dos entes em mora até 2029, com conta no Tribunal de Justiça; entra na proposta `proc:pagamento-de-precatorio` |
| ADCT, art. 102 | lacuna | idem (uso dos recursos do regime especial) |
| ADCT, art. 103 | lacuna | idem (proibição de sequestro) |
| ADCT, art. 104 | lacuna | idem (sequestro pelo presidente do TJ e retenção de repasses) |
| ADCT, art. 105 | lacuna | idem (compensação com dívida ativa) |
| ADCT, art. 107-A | lacuna | limite das despesas com sentenças judiciais na proposta orçamentária até 2026; regra fiscal ligada aos precatórios |
| ADCT, art. 113 | lacuna | estimativa de impacto obrigatória na proposição que cria despesa obrigatória ou renúncia; proposta de nota ou etapa em `proc:lei-ordinaria` e `proc:lei-complementar` |
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
| ADCT, art. 130 | lacuna | Resolução do Senado fixa as alíquotas de referência do IBS e da CBS; proposta `rel:senado-fixa-aliquotas-de-referencia` (para `obj:tributo-ibs` e `obj:tributo-cbs`) |
| ADCT, art. 131 | coberto | distribuição do IBS de 2029 a 2077 em `obj:tributo-ibs` |
| ADCT, art. 132 | lacuna | retenção de 5% do IBS para os entes com menor razão de receita; acrescentar a `obj:tributo-ibs`, baixa prioridade |
| ADCT, art. 133 | fora | base de cálculo do IBS e da CBS |
| ADCT, art. 134 | fora | saldos credores do ICMS |
| ADCT, art. 135 | fora | créditos de IPI, PIS e Cofins |
| ADCT, art. 136 | coberto | `obj:tributo-contribuicao-estadual-sobre-produtos-primarios` |
| ADCT, art. 137 | transitorio-esgotado | saldos da Covid até 2024 |
| ADCT, art. 138 | lacuna | limite ao crescimento de despesas vinculadas até 2032; acrescentar a `obj:regime-fiscal-sustentavel`, baixa prioridade |

## Cobertura

Contagem do quadro acima (411 artigos vigentes; `npm run -s cobertura` rodado de novo no fim, 183 citados, sem mudança nas citações durante a tarefa).

| Parte | Coberto | Parcial | Lacuna | Fora | Transitório esgotado | Base (total − fora − esgotado) | Cobertura |
|---|---|---|---|---|---|---|---|
| CF (arts. 1º a 250) | 134 | 30 | 42 | 67 | — | 206 | (134 + 15) / 206 = **72,3%** |
| ADCT | 10 | 0 | 29 | 21 | 78 | 39 | 10 / 39 = **25,6%** |
| Total | 144 | 30 | 71 | 88 | 78 | 245 | 64,9% |

Critério usado: `coberto` quando o órgão, cargo, competência ou procedimento principal do artigo tem entidade; `parcial` quando falta um elemento que mereceria entidade própria (lacunas só de detalhe ficam anotadas em `coberto`). Artigos com regras do mandato ou do cargo (ex.: arts. 54, 56, 95) contam como `fora` mesmo quando citados nos cargos. No ADCT, regras transitórias ainda vigentes em 2026-10-01 que estruturam algo (Fundeb, precatórios, DRU, Zona Franca) contam como `lacuna`; as que já produziram efeito, como `transitorio-esgotado`.

Amostragem das citações: as citações dos 183 artigos citados foram lidas junto com o texto do artigo; as relações da matriz de competências foram conferidas inciso a inciso contra os arts. 21 a 24 e 30 (todas batem). A conta do script inclui 3 falsos positivos (ver "Erros de dispositivo"); sem eles, são 180 artigos citados (CF 167 de 273; ADCT 13 de 138).

## Propostas de tarefa

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
