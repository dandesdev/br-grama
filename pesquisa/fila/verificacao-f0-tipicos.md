---
id: verificacao-f0-tipicos
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-tipicos\""
status: pendente
depende_de: [f0-tipicos]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-tipicos"` conferidas contra a fonte: 15 órgãos, 3 cargos, 27 pessoas, 59 relações, 5 normas, 35 fontes, 6 objetos, 9 variações e 2 processos (`proc:lei-estadual`, com `remete_a` em cada etapa, e `proc:alteracao-territorial-de-municipios`, etapa por etapa). Inclui as entidades de outras tarefas que a coleta completou: Assembleia, TCE e conselheiro do TCE, Prefeitura e Câmara Municipal.
- [ ] Os 27 governadores em 2026-10-01, um por um, com fonte oficial do estado (diário oficial, site do governo ou da Assembleia):
  - os que assumiram em março ou abril de 2026 por renúncia do titular (AC, DF, ES, GO, MG, MT, PA, PB): data da posse e ato
  - casos atípicos: AM (Roberto Cidade, interino e depois eleito pela Assembleia em 4/5/2026), RJ (desembargador Ricardo Couto de Castro em exercício, decisão do STF), RR (Soldado Sampaio, presidente da Assembleia, em exercício; eleição suplementar), TO (Wanderlei Barbosa, reassumiu em 5/12/2025)
  - partidos só com fonte de imprensa (MA, PR, RN, RO, RS e TO): procure fonte oficial (TSE, candidaturas de 2026, filiação; Assembleia; site do partido não é oficial). Sem fonte oficial, mantenha `secundario`
  - datas aproximadas: AM, RJ, RR e AL
- [ ] Pontos do coletor a conferir:
  - LC 230/2026 (15/4/2026): regula só o desmembramento para incorporar a município vizinho e veda criar município novo? Criar, fundir e incorporar seguem sem lei complementar em 2026-10-01?
  - simetria do processo legislativo estadual (ADI 637, ADI 4.298) e competência do TJ (art. 125, § 2º; ADIs 558 e 119): as fontes dizem o que está registrado?
  - sanção, veto e apreciação do veto no estado estão `inferido` por simetria: há texto expresso (CF ou Constituições estaduais) que permita `oficial`?
  - conselheiro do TCE: a vaga de livre escolha do Governador passou a `nomeacao-com-aprovacao-do-legislativo` com base em SP (art. 20, XII) e BA (art. 94). Duas Constituições bastam para o arquétipo? Se não, registre a ressalva no próprio caso
  - Fernando de Noronha: distrito estadual pela lei de PE, mas aparece como município na base do IBGE. O órgão do distrito está como `autarquia`: confira a natureza na Lei estadual 11.304/1995
  - territórios federais: nenhum em 2026-10-01, com fonte
- [ ] Ligações que ficaram de outras tarefas:
  - `proc:eleicao-geral`: ligue `cargo:arquetipo-estadual-governador` (e o vice) às etapas onde cabem (eleição e posse)
  - `contido_em` dos arquétipos de segurança nos novos nós de Poder: `org:arquetipo-municipal-guarda-municipal` em `org:arquetipo-municipal-poder-executivo`; polícias civil, militar e penal e corpo de bombeiros do estado em `org:arquetipo-estadual-poder-executivo`, se a fonte (CF, art. 144, § 6º, e leis orgânicas) sustentar
  - As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-tipicos"`.
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
