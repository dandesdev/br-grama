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
