---
id: f0-cobertura
escopo: "Fatia 0: varredura da CF artigo por artigo (D04): o que a Constituição prevê de estrutura do Estado e ainda não está no mapa"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-23
concluida_em: null
---

## Como trabalhar

Esta tarefa não cria entidades. Ela lê a CF inteira e diz, artigo por artigo, o que falta. As lacunas viram tarefas de coleta depois.

Ponto de partida: `npm run -s cobertura` gera `pesquisa/cobertura-cf.md`, com os artigos que nenhuma entidade cita em `fontes` e a contagem dos que são citados. Citar não é cobrir; não citar não é lacuna. Rode de novo no fim, porque outras tarefas podem mudar os dados enquanto você trabalha.

Critério de escopo (D04, D05): entra no mapa todo **órgão, cargo, competência e procedimento** que a CF prevê para a estrutura do Estado. Direitos, princípios e regras materiais (ex.: direitos sociais, princípios da ordem econômica, proteção da família) ficam fora, **a menos que** o artigo crie um órgão, um cargo, um sistema, um fundo, uma competência de um ente ou órgão, ou um procedimento entre órgãos (ex.: art. 224 cria o Conselho de Comunicação Social; art. 103-A dá ao STF a súmula vinculante; art. 198 organiza o SUS).

## Entregáveis

- [ ] Para cada artigo vigente da CF (arts. 1º a 250, com os de letra) e do ADCT, uma classificação no quadro abaixo:
  - `coberto`: há entidade que representa o que o artigo prevê (cite o id)
  - `parcial`: há entidade, mas falta parte (diga o quê)
  - `lacuna`: o artigo prevê órgão, cargo, competência ou procedimento que não está no mapa (diga o quê e proponha id e tipo)
  - `fora`: direito, princípio ou regra material sem órgão, cargo, competência ou procedimento próprio (uma palavra de motivo basta)
  - `transitorio-esgotado` (só ADCT): regra que já produziu efeito e não estrutura o Estado em 2026-10-01
  Artigos citados no relatório também precisam de classificação: confira por amostragem que a citação de fato cobre o artigo, e classifique todos.
- [ ] Lista das lacunas agrupadas em propostas de tarefa de coleta (tema, artigos, entidades propostas, fontes prováveis), em ordem de importância para quem quer entender como o Estado funciona.
- [ ] Percentual de cobertura: (coberto + parcial/2) / (total − fora − transitorio-esgotado), para CF e ADCT separados.
- [ ] Erros de dispositivo achados no caminho (entidade que cita artigo errado): liste com o id; não corrija.

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
