---
id: f0-competencias
escopo: "Fatia 0: repartição de competências entre União, estados, DF e municípios (CF, arts. 21 a 25, 30 e 32), para a matriz de competências (D38)"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-19
concluida_em: null
---

## Entregáveis

- [ ] Entes típicos: `ente:arquetipo-estadual` (tipo_ente "estado", `arquetipo: "estadual"`) e `ente:arquetipo-municipal` (tipo_ente "municipio", `arquetipo: "municipal"`). O DF acumula as competências de estado e de município (art. 32, § 1º): registre isso como relação ou nota em `ente:df`, sem duplicar todas as matérias.
- [ ] Uma matéria (`obj:materia-<slug>`, `tipo_objeto: "materia"`) para cada inciso dos arts. 21, 22, 23 e 24, mais as do art. 30. Agrupe só quando o próprio inciso agrupa ("direito civil, comercial, penal…" pode virar uma matéria por ramo, se a matriz ficar mais clara; explique no diário). O `resumo` diz em palavras simples do que se trata; o `nome` é curto ("Trânsito e transporte").
- [ ] Para cada matéria, as relações `tem-competencia` do ente (`ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`) com `competencia.tipo` e `competencia.natureza`:
  - art. 21: União, exclusiva, material
  - art. 22: União, privativa, legislativa (com nota sobre o parágrafo único)
  - art. 23: os três, comum, material
  - art. 24: União e estados, concorrente, legislativa; nota sobre os §§ 1º a 4º (normas gerais, competência suplementar dos estados, competência plena na falta de lei federal)
  - art. 25, § 1º: estados, residual; art. 25, §§ 2º e 3º (gás canalizado, regiões metropolitanas)
  - art. 30: municípios (interesse local, suplementar e as competências materiais dos incisos III a IX)
- [ ] Use o `dispositivo` exato (ex.: "art. 22, XI") em cada relação. Ids das relações: `rel:<ente>-competencia-<materia>` (ex.: `rel:uniao-competencia-transito`).
- [ ] Uma mesma matéria pode aparecer em vários artigos (ex.: trânsito no art. 22, XI, e educação para o trânsito no art. 23, XII): reutilize o objeto quando for o mesmo assunto e crie outro quando forem coisas diferentes.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Já existem: `ente:uniao`, `ente:<uf>`, `ente:df`, `norma:cf-1988`

## Diário
- 2026-10-19 07:49 — iniciada; lidos instruções, decisões, modelo (D38), vocabulários; texto da CF tirado da cópia local pesquisa/brutos/planalto-cf/2026-10-16/cf.htm (até EC 139/2026)
- 2026-10-20 09:44 — retomada (sessão anterior acabou sem gravar entidades; git status sem arquivos desta tarefa); relidos instruções, decisões, modelo, vocabulários; texto extraído de pesquisa/brutos/planalto-cf/2026-10-16/cf.htm sem os trechos riscados (redação vigente até a EC 139/2026)
- 2026-10-20 09:44 — gravados ente:arquetipo-estadual, ente:arquetipo-municipal
- 2026-10-20 09:44 — conferidas EC 140 e 141 (planalto, emc140.htm e emc141.htm, ambas de 16/10/2026): a 140 altera os arts. 40, 198 e 201; a 141, o art. 7º. Nenhuma toca os arts. 21 a 25, 30 e 32; o texto desses artigos no Planalto de hoje é igual ao da cópia de 2026-10-16 (comparação automática, sem trechos riscados)
- 2026-10-20 09:48 — concluído art. 21, I: gravados obj:materia-relacoes-internacionais, rel:uniao-competencia-relacoes-internacionais
- 2026-10-20 09:48 — concluído art. 21, II: gravados obj:materia-guerra-e-paz, rel:uniao-competencia-guerra-e-paz
- 2026-10-20 09:48 — concluído art. 21, III: gravados obj:materia-defesa-nacional, rel:uniao-competencia-defesa-nacional-exclusiva
- 2026-10-20 09:48 — concluído art. 21, IV: gravados obj:materia-forcas-estrangeiras, rel:uniao-competencia-forcas-estrangeiras
- 2026-10-20 09:48 — concluído art. 21, V: gravados obj:materia-estado-de-defesa-sitio-e-intervencao, rel:uniao-competencia-estado-de-defesa-sitio-e-intervencao
- 2026-10-20 09:48 — concluído art. 21, VI: gravados obj:materia-material-belico, rel:uniao-competencia-material-belico
- 2026-10-20 09:48 — concluído art. 21, VII: gravados obj:materia-moeda, rel:uniao-competencia-moeda-exclusiva
- 2026-10-20 09:48 — concluído art. 21, VIII: gravados obj:materia-cambio-credito-e-seguros, rel:uniao-competencia-cambio-credito-e-seguros-exclusiva
- 2026-10-20 09:48 — concluído art. 21, IX: gravados obj:materia-planos-de-desenvolvimento, rel:uniao-competencia-planos-de-desenvolvimento
- 2026-10-20 09:48 — concluído art. 21, X: gravados obj:materia-servico-postal, rel:uniao-competencia-servico-postal-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XI: gravados obj:materia-telecomunicacoes, rel:uniao-competencia-telecomunicacoes-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XII, a: gravados obj:materia-radiodifusao, rel:uniao-competencia-radiodifusao-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XII, b: gravados obj:materia-energia, rel:uniao-competencia-energia-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XII, c: gravados obj:materia-portos-e-navegacao, rel:uniao-competencia-portos-e-navegacao-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XII, d: gravados obj:materia-transito-e-transporte, rel:uniao-competencia-transito-e-transporte-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XII, e: gravados obj:materia-transito-e-transporte, rel:uniao-competencia-transito-e-transporte-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XII, f: gravados obj:materia-portos-e-navegacao, rel:uniao-competencia-portos-e-navegacao-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XIII: gravados obj:materia-justica-do-df-e-territorios, rel:uniao-competencia-justica-do-df-e-territorios-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XIV: gravados obj:materia-policias-do-df, rel:uniao-competencia-policias-do-df
- 2026-10-20 09:49 — concluído art. 21, XV: gravados obj:materia-estatistica-e-cartografia, rel:uniao-competencia-estatistica-e-cartografia-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XVI: gravados obj:materia-classificacao-indicativa, rel:uniao-competencia-classificacao-indicativa
- 2026-10-20 09:49 — concluído art. 21, XVII: gravados obj:materia-anistia, rel:uniao-competencia-anistia
- 2026-10-20 09:49 — concluído art. 21, XVIII: gravados obj:materia-defesa-civil, rel:uniao-competencia-defesa-civil-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XIX: gravados obj:materia-aguas, rel:uniao-competencia-aguas-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XX: gravados obj:materia-urbanismo, rel:uniao-competencia-urbanismo-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XXI: gravados obj:materia-transito-e-transporte, rel:uniao-competencia-transito-e-transporte-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XXII: gravados obj:materia-policia-de-fronteiras, rel:uniao-competencia-policia-de-fronteiras
- 2026-10-20 09:49 — concluído art. 21, XXIII: gravados obj:materia-atividades-nucleares, rel:uniao-competencia-atividades-nucleares-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XXIV: gravados obj:materia-trabalho, rel:uniao-competencia-trabalho-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XXV: gravados obj:materia-mineracao, rel:uniao-competencia-mineracao-exclusiva
- 2026-10-20 09:49 — concluído art. 21, XXVI: gravados obj:materia-protecao-de-dados, rel:uniao-competencia-protecao-de-dados-exclusiva
- 2026-10-20 09:50 — concluído art. 22, I: gravados obj:materia-direito-civil, obj:materia-direito-comercial, obj:materia-direito-penal, obj:materia-direito-processual, obj:materia-direito-eleitoral, obj:materia-direito-agrario, obj:materia-direito-maritimo, obj:materia-direito-aeronautico, obj:materia-direito-espacial, obj:materia-trabalho, rel:uniao-competencia-direito-civil, rel:uniao-competencia-direito-comercial, rel:uniao-competencia-direito-penal, rel:uniao-competencia-direito-processual-privativa, rel:uniao-competencia-direito-eleitoral, rel:uniao-competencia-direito-agrario, rel:uniao-competencia-direito-maritimo, rel:uniao-competencia-direito-aeronautico, rel:uniao-competencia-direito-espacial, rel:uniao-competencia-trabalho-privativa
- 2026-10-20 09:50 — concluído art. 22, II: gravados obj:materia-desapropriacao, rel:uniao-competencia-desapropriacao
- 2026-10-20 09:50 — concluído art. 22, III: gravados obj:materia-requisicoes-civis-e-militares, rel:uniao-competencia-requisicoes-civis-e-militares
- 2026-10-20 09:50 — concluído art. 22, IV: gravados obj:materia-aguas, obj:materia-energia, obj:materia-informatica, obj:materia-telecomunicacoes, obj:materia-radiodifusao, rel:uniao-competencia-aguas-privativa, rel:uniao-competencia-energia-privativa, rel:uniao-competencia-informatica, rel:uniao-competencia-telecomunicacoes-privativa, rel:uniao-competencia-radiodifusao-privativa
- 2026-10-20 09:50 — concluído art. 22, V: gravados obj:materia-servico-postal, rel:uniao-competencia-servico-postal-privativa
- 2026-10-20 09:50 — concluído art. 22, VI: gravados obj:materia-moeda, rel:uniao-competencia-moeda-privativa
- 2026-10-20 09:50 — concluído art. 22, VII: gravados obj:materia-cambio-credito-e-seguros, rel:uniao-competencia-cambio-credito-e-seguros-privativa
- 2026-10-20 09:50 — concluído art. 22, VIII: gravados obj:materia-comercio-exterior-e-interestadual, rel:uniao-competencia-comercio-exterior-e-interestadual
- 2026-10-20 09:50 — concluído art. 22, IX: gravados obj:materia-transito-e-transporte, rel:uniao-competencia-transito-e-transporte-privativa
- 2026-10-20 09:50 — concluído art. 22, X: gravados obj:materia-portos-e-navegacao, rel:uniao-competencia-portos-e-navegacao-privativa
- 2026-10-20 09:50 — concluído art. 22, XI: gravados obj:materia-transito-e-transporte, rel:uniao-competencia-transito-e-transporte-privativa
- 2026-10-20 09:50 — concluído art. 22, XII: gravados obj:materia-mineracao, rel:uniao-competencia-mineracao-privativa
- 2026-10-20 09:50 — concluído art. 22, XIII: gravados obj:materia-nacionalidade-e-cidadania, rel:uniao-competencia-nacionalidade-e-cidadania
- 2026-10-20 09:50 — concluído art. 22, XIV: gravados obj:materia-populacoes-indigenas, rel:uniao-competencia-populacoes-indigenas
- 2026-10-20 09:50 — concluído art. 22, XV: gravados obj:materia-migracao-e-estrangeiros, rel:uniao-competencia-migracao-e-estrangeiros
- 2026-10-20 09:50 — concluído art. 22, XVI: gravados obj:materia-emprego-e-profissoes, rel:uniao-competencia-emprego-e-profissoes
- 2026-10-20 09:50 — concluído art. 22, XVII: gravados obj:materia-justica-do-df-e-territorios, rel:uniao-competencia-justica-do-df-e-territorios-privativa
- 2026-10-20 09:50 — concluído art. 22, XVIII: gravados obj:materia-estatistica-e-cartografia, rel:uniao-competencia-estatistica-e-cartografia-privativa
- 2026-10-20 09:50 — concluído art. 22, XIX: gravados obj:materia-poupanca-popular, rel:uniao-competencia-poupanca-popular
- 2026-10-20 09:50 — concluído art. 22, XX: gravados obj:materia-consorcios-e-sorteios, rel:uniao-competencia-consorcios-e-sorteios
- 2026-10-20 09:50 — concluído art. 22, XXI: gravados obj:materia-policias-militares-e-bombeiros, rel:uniao-competencia-policias-militares-e-bombeiros
- 2026-10-20 09:50 — concluído art. 22, XXII: gravados obj:materia-policias-federais, rel:uniao-competencia-policias-federais
- 2026-10-20 09:50 — concluído art. 22, XXIII: gravados obj:materia-seguridade-social, rel:uniao-competencia-seguridade-social
- 2026-10-20 09:50 — concluído art. 22, XXIV: gravados obj:materia-educacao, rel:uniao-competencia-educacao-privativa
- 2026-10-20 09:50 — concluído art. 22, XXV: gravados obj:materia-registros-publicos, rel:uniao-competencia-registros-publicos
- 2026-10-20 09:50 — concluído art. 22, XXVI: gravados obj:materia-atividades-nucleares, rel:uniao-competencia-atividades-nucleares-privativa
- 2026-10-20 09:50 — concluído art. 22, XXVII: gravados obj:materia-licitacoes-e-contratos, rel:uniao-competencia-licitacoes-e-contratos
- 2026-10-20 09:50 — concluído art. 22, XXVIII: gravados obj:materia-defesa-nacional, obj:materia-defesa-civil, rel:uniao-competencia-defesa-nacional-privativa, rel:uniao-competencia-defesa-civil-privativa
- 2026-10-20 09:50 — concluído art. 22, XXIX: gravados obj:materia-propaganda-comercial, rel:uniao-competencia-propaganda-comercial
- 2026-10-20 09:50 — concluído art. 22, XXX: gravados obj:materia-protecao-de-dados, rel:uniao-competencia-protecao-de-dados-privativa
- 2026-10-20 09:51 — concluído art. 23, I: gravados obj:materia-guarda-da-constituicao-e-do-patrimonio-publico, rel:uniao-competencia-guarda-da-constituicao-e-do-patrimonio-publico, rel:estados-competencia-guarda-da-constituicao-e-do-patrimonio-publico, rel:municipios-competencia-guarda-da-constituicao-e-do-patrimonio-publico
- 2026-10-20 09:51 — concluído art. 23, II: gravados obj:materia-saude, obj:materia-pessoas-com-deficiencia, rel:uniao-competencia-saude-comum, rel:estados-competencia-saude-comum, rel:municipios-competencia-saude-comum, rel:uniao-competencia-pessoas-com-deficiencia-comum, rel:estados-competencia-pessoas-com-deficiencia-comum, rel:municipios-competencia-pessoas-com-deficiencia
- 2026-10-20 09:51 — concluído art. 23, III: gravados obj:materia-patrimonio-cultural, rel:uniao-competencia-patrimonio-cultural-comum, rel:estados-competencia-patrimonio-cultural-comum, rel:municipios-competencia-patrimonio-cultural-comum
- 2026-10-20 09:51 — concluído art. 23, IV: gravados obj:materia-patrimonio-cultural, rel:uniao-competencia-patrimonio-cultural-comum, rel:estados-competencia-patrimonio-cultural-comum, rel:municipios-competencia-patrimonio-cultural-comum
- 2026-10-20 09:51 — concluído art. 23, V: gravados obj:materia-cultura, obj:materia-educacao, obj:materia-ciencia-e-tecnologia, rel:uniao-competencia-cultura-comum, rel:estados-competencia-cultura-comum, rel:municipios-competencia-cultura, rel:uniao-competencia-educacao-comum, rel:estados-competencia-educacao-comum, rel:municipios-competencia-educacao-comum, rel:uniao-competencia-ciencia-e-tecnologia-comum, rel:estados-competencia-ciencia-e-tecnologia-comum, rel:municipios-competencia-ciencia-e-tecnologia
- 2026-10-20 09:51 — concluído art. 23, VI: gravados obj:materia-meio-ambiente, rel:uniao-competencia-meio-ambiente-comum, rel:estados-competencia-meio-ambiente-comum, rel:municipios-competencia-meio-ambiente
- 2026-10-20 09:51 — concluído art. 23, VII: gravados obj:materia-meio-ambiente, rel:uniao-competencia-meio-ambiente-comum, rel:estados-competencia-meio-ambiente-comum, rel:municipios-competencia-meio-ambiente
- 2026-10-20 09:51 — concluído art. 23, VIII: gravados obj:materia-agropecuaria-e-abastecimento, rel:uniao-competencia-agropecuaria-e-abastecimento, rel:estados-competencia-agropecuaria-e-abastecimento, rel:municipios-competencia-agropecuaria-e-abastecimento
- 2026-10-20 09:51 — concluído art. 23, IX: gravados obj:materia-habitacao-e-saneamento, rel:uniao-competencia-habitacao-e-saneamento, rel:estados-competencia-habitacao-e-saneamento, rel:municipios-competencia-habitacao-e-saneamento
- 2026-10-20 09:51 — concluído art. 23, X: gravados obj:materia-combate-a-pobreza, rel:uniao-competencia-combate-a-pobreza, rel:estados-competencia-combate-a-pobreza, rel:municipios-competencia-combate-a-pobreza
- 2026-10-20 09:51 — concluído art. 23, XI: gravados obj:materia-concessoes-de-recursos-hidricos-e-minerais, rel:uniao-competencia-concessoes-de-recursos-hidricos-e-minerais, rel:estados-competencia-concessoes-de-recursos-hidricos-e-minerais, rel:municipios-competencia-concessoes-de-recursos-hidricos-e-minerais
- 2026-10-20 09:51 — concluído art. 23, XII: gravados obj:materia-educacao-para-o-transito, rel:uniao-competencia-educacao-para-o-transito, rel:estados-competencia-educacao-para-o-transito, rel:municipios-competencia-educacao-para-o-transito
