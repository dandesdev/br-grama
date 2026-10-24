---
id: f0-controle-constitucionalidade
escopo: "Fatia 0, lacunas da varredura: controle de constitucionalidade e instrumentos das cortes, CF arts. 5º (remédios), 97, 102, 103, 103-A"
status: coletada
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: 2026-10-23
---

## Entregáveis

- [x] Ações do controle concentrado: ADPF (art. 102, § 1º; Lei 9.882/1999), ADO (art. 103, § 2º; Lei 9.868/1999), reclamação (art. 102, I, l; art. 103-A, § 3º). Decida se `obj:adi-e-adc` fica como está ou se a ADO entra nele; justifique no diário.
- [x] Os demais legitimados do art. 103 ligados a `obj:adi-e-adc` (hoje só PGR e Conselho Federal da OAB): Presidente, Mesas do Senado, da Câmara, das Assembleias e da Câmara Legislativa, Governadores, partidos com representação no Congresso, confederações sindicais e entidades de classe de âmbito nacional (use conjuntos existentes, como `org:partidos-politicos`).
- [x] Súmula vinculante (art. 103-A; Lei 11.417/2006): `obj:sumula-vinculante`, `rel:stf-edita-sumula-vinculante`, quem pode propor.
- [x] Remédios constitucionais (art. 5º, LXVIII a LXXIII): habeas corpus, mandado de segurança (individual e coletivo), mandado de injunção, habeas data e ação popular como objetos do tipo `acao-judicial`, com as competências originárias e recursais das cortes (arts. 102, 105, 108, 109, 121) que o mapa ainda não tem.
- [x] Reserva de plenário (art. 97) e controle difuso: nota ou relação, só o que ajudar a entender.
- [x] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
- 2026-10-23 — iniciada; lidas instruções, modelo, decisões, quadro de f0-cobertura (arts. 5º, 97, 102, 103, 103-A) e obj:adi-e-adc
- 2026-10-23 23:01 — gravado norma:lei-9868-1999
- 2026-10-23 23:01 — gravado norma:lei-9882-1999
- 2026-10-23 23:01 — gravado norma:lei-11417-2006
- 2026-10-23 23:01 — gravado norma:lei-12016-2009
- 2026-10-23 23:01 — gravado norma:lei-13300-2016
- 2026-10-23 23:01 — gravado norma:lei-4717-1965
- 2026-10-23 23:01 — gravado norma:lei-9507-1997
- 2026-10-23 23:06 — regravado obj:adi-e-adc
- 2026-10-23 23:06 — gravado obj:adpf
- 2026-10-23 23:06 — gravado obj:reclamacao
- 2026-10-23 23:06 — gravado obj:sumula-vinculante
- 2026-10-23 23:06 — gravado obj:habeas-corpus
- 2026-10-23 23:06 — gravado obj:mandado-de-seguranca
- 2026-10-23 23:06 — gravado obj:mandado-de-injuncao
- 2026-10-23 23:06 — gravado obj:habeas-data
- 2026-10-23 23:06 — gravado obj:acao-popular
- 2026-10-23 23:06 — regravado obj:reclamacao
- 2026-10-23 23:06 — regravado obj:habeas-corpus
- 2026-10-23 23:08 — gravado org:confederacoes-sindicais-e-entidades-de-classe-nacionais
- 2026-10-23 23:08 — gravado rel:presidente-propoe-adi-e-adc
- 2026-10-23 23:08 — gravado rel:mesa-do-senado-propoe-adi-e-adc
- 2026-10-23 23:08 — gravado rel:mesa-da-camara-propoe-adi-e-adc
- 2026-10-23 23:08 — gravado rel:arquetipo-estadual-assembleia-legislativa-propoe-adi-e-adc
- 2026-10-23 23:08 — gravado rel:camara-legislativa-do-df-propoe-adi-e-adc
- 2026-10-23 23:08 — gravado rel:arquetipo-estadual-governador-propoe-adi-e-adc
- 2026-10-23 23:08 — gravado rel:partidos-politicos-propoe-adi-e-adc
- 2026-10-23 23:08 — gravado rel:confederacoes-sindicais-e-entidades-de-classe-propoe-adi-e-adc
- 2026-10-23 23:08 — regravado rel:presidente-propoe-adi-e-adc
- 2026-10-23 23:08 — regravado rel:mesa-do-senado-propoe-adi-e-adc
- 2026-10-23 23:08 — regravado rel:mesa-da-camara-propoe-adi-e-adc
- 2026-10-23 23:08 — gravado rel:presidente-propoe-adpf
- 2026-10-23 23:08 — gravado rel:mesa-do-senado-propoe-adpf
- 2026-10-23 23:08 — gravado rel:mesa-da-camara-propoe-adpf
- 2026-10-23 23:08 — gravado rel:arquetipo-estadual-assembleia-legislativa-propoe-adpf
- 2026-10-23 23:08 — gravado rel:camara-legislativa-do-df-propoe-adpf
- 2026-10-23 23:08 — gravado rel:arquetipo-estadual-governador-propoe-adpf
- 2026-10-23 23:08 — gravado rel:pgr-propoe-adpf
- 2026-10-23 23:08 — gravado rel:conselho-federal-da-oab-propoe-adpf
- 2026-10-23 23:08 — gravado rel:partidos-politicos-propoe-adpf
- 2026-10-23 23:08 — gravado rel:confederacoes-sindicais-e-entidades-de-classe-propoe-adpf
- 2026-10-23 23:08 — gravado rel:presidente-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:mesa-do-senado-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:mesa-da-camara-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:pgr-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:conselho-federal-da-oab-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:defensor-publico-geral-federal-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:partidos-politicos-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:confederacoes-sindicais-e-entidades-de-classe-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:arquetipo-estadual-assembleia-legislativa-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:camara-legislativa-do-df-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:arquetipo-estadual-governador-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:stj-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:tst-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:tse-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:stm-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:arquetipo-estadual-tj-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:tj-df-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:justica-federal-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:justica-do-trabalho-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:justica-eleitoral-propoe-sumula-vinculante
- 2026-10-23 23:08 — gravado rel:arquetipo-municipal-propoe-sumula-vinculante
- 2026-10-23 23:09 — gravado rel:stf-julga-adi-e-adc
- 2026-10-23 23:09 — gravado rel:stf-julga-adpf
- 2026-10-23 23:09 — gravado rel:stf-edita-sumula-vinculante
- 2026-10-23 23:09 — gravado rel:stf-julga-reclamacao
- 2026-10-23 23:09 — gravado rel:stj-julga-reclamacao
- 2026-10-23 23:09 — gravado rel:stf-julga-habeas-corpus
- 2026-10-23 23:09 — gravado rel:stf-julga-mandado-de-seguranca
- 2026-10-23 23:09 — gravado rel:stf-julga-habeas-data
- 2026-10-23 23:09 — gravado rel:stf-julga-mandado-de-injuncao
- 2026-10-23 23:09 — gravado rel:stj-julga-habeas-corpus
- 2026-10-23 23:09 — gravado rel:stj-julga-mandado-de-seguranca
- 2026-10-23 23:09 — gravado rel:stj-julga-habeas-data
- 2026-10-23 23:09 — gravado rel:stj-julga-mandado-de-injuncao
- 2026-10-23 23:09 — gravado rel:justica-federal-julga-habeas-corpus
- 2026-10-23 23:09 — gravado rel:justica-federal-julga-mandado-de-seguranca
- 2026-10-23 23:09 — gravado rel:justica-federal-julga-habeas-data
- 2026-10-23 23:09 — gravado rel:eleitorado-propoe-acao-popular
- 2026-10-23 23:09 — gravado rel:partidos-politicos-propoe-mandado-de-seguranca
- 2026-10-23 23:09 — gravado obj:lei-ou-ato-normativo-do-poder-publico
- 2026-10-23 23:09 — gravado rel:poder-judiciario-controla-constitucionalidade-no-caso-concreto
- 2026-10-23 23:09 — regravado rel:stf-julga-adi-e-adc
- 2026-10-23 23:10 — decisão ADO: entrou em obj:adi-e-adc (nome e sigla "ADI, ADO e ADC"), sem objeto próprio. Motivos: a CF trata a omissão no mesmo art. 103 (caput e § 2º) como ação direta de inconstitucionalidade; a Lei 9.868, art. 12-A, dá à ADO exatamente os legitimados da ADI e da ADC; o rito é o da ADI no que couber (art. 12-E). Um obj:ado separado duplicaria as dez relações propoe sem informação nova. O objeto, antes verificado, voltou a "coletado" com nota. As relações já verificadas rel:pgr-propoe-adi-e-adc e rel:conselho-federal-da-oab-propoe-adi-e-adc continuam com nome "ADI e ADC" (não editadas; só cosmético)
- 2026-10-23 23:10 — decisão ADPF e súmula vinculante: relações propoe explícitas por legitimado, como o projeto já faz para lei ordinária e complementar (ex.: rel:stf-propoe-lei-ordinaria e rel:stf-propoe-lei-complementar). Tribunais regionais (TRFs, TRTs, TREs) ligados pelo nó do ramo (org:justica-federal, org:justica-do-trabalho, org:justica-eleitoral), com condição; "Tribunais Militares" (Lei 11.417, art. 3º, XI) sem relação além do STM, porque a lei não diz se inclui os TJMs estaduais
- 2026-10-23 23:10 — decisão Mesa de Assembleia e Governador do DF: não há nó de Mesa da Assembleia (arquétipo) nem da Mesa da CLDF; usei org:arquetipo-estadual-assembleia-legislativa e org:camara-legislativa-do-df com condição "por meio da sua Mesa". O Governador do DF é o cargo:arquetipo-estadual-governador (como em rel:celina-leao-ocupa-governador-df), por isso uma relação só, com condição
- 2026-10-23 23:10 — cobertura: art. 5º (LXVIII a LXXIII) coberto pelos cinco remédios (obj:habeas-corpus, obj:mandado-de-seguranca, obj:mandado-de-injuncao, obj:habeas-data, obj:acao-popular) e relações; LXXVII (gratuidade) citado nos objetos. Fica fora o tribunal do júri (XXXVIII) e o TPI (§ 4º), de outras propostas
- 2026-10-23 23:10 — cobertura: art. 97 coberto por rel:poder-judiciario-controla-constitucionalidade-no-caso-concreto (quórum maioria absoluta) e obj:lei-ou-ato-normativo-do-poder-publico. Órgão especial (art. 93, XI) continua sem nó
- 2026-10-23 23:10 — cobertura: art. 102 passa a parcial alto: I, a e p (rel:stf-julga-adi-e-adc), d, i e q (remédios), l (rel:stf-julga-reclamacao), II, a (remédios em recurso ordinário), § 1º (obj:adpf, rel:stf-julga-adpf). Continuam sem nó: I, e (litígio com Estado estrangeiro), f (conflitos federativos), g (extradição), j (revisão criminal e rescisória), m, n, o (conflitos de competência) e II, b (crime político)
- 2026-10-23 23:10 — cobertura: art. 103 coberto: todos os legitimados I a IX ligados a obj:adi-e-adc; § 2º (ADO) no objeto e em rel:stf-julga-adi-e-adc
- 2026-10-23 23:10 — cobertura: art. 103-A coberto: obj:sumula-vinculante, rel:stf-edita-sumula-vinculante (dois terços), 21 relações propoe (CF § 2º e Lei 11.417, art. 3º), reclamação (§ 3º) em obj:reclamacao e rel:stf-julga-reclamacao
- 2026-10-23 23:10 — cobertura: arts. 105, 108 e 109 ganham as competências sobre remédios (105, I, b, c, f, h; II, a e b; 108, I, c e d; 109, VII e VIII) e a reclamação no STJ. Art. 121, §§ 3º e 4º, V, já estava em rel:tse-julga-recursos-da-justica-eleitoral e rel:stf-julga-recursos-do-tse; não criei nada
- 2026-10-23 23:10 — npm run -s cobertura: 190 de 411 artigos citados (antes 183, com outras tarefas em paralelo). validar sem erros. Concluída a coleta
