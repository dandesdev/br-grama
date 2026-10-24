---
id: verificacao-f0-tipicos
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-tipicos\""
status: em-andamento
depende_de: [f0-tipicos]
iniciada_em: 2026-10-23
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
- 2026-10-23 22:28 — iniciada; lidos CLAUDE.md, instruções de verificação, modelo, protocolo, decisões e o diário de f0-tipicos; 161 entidades com tarefa f0-tipicos
- 2026-10-23 22:45 — órgãos (15) conferidos contra a CF (arts. 14, 18, 25 a 33, 75, 92, 94, 96, 125, 241; ADCT, arts. 14 e 15), Lei 1.079/1950 (arts. 74 e 79), Lei 11.107/2005 (arts. 1º a 6º), Lei 13.089/2015 (arts. 1º a 3º, 8º e 10), página da CLDF, compilação do STF do art. 125 (ADI 558, ADI 119) e Lei PE 11.304/1995 (texto da Alepe, baixado de novo). Todos verificados. Correções: org:pe-distrito-estadual-de-fernando-de-noronha (o vínculo com a Governadoria está no art. 11, § 1º, e não no art. 1º, § 1º, que não existe); org:consorcios-publicos (vigência de 1988 → 1998-06-04: o art. 241 só trata de consórcios desde a EC 19/1998, em vigor na promulgação; cópia da EC 19 em brutos/planalto-leis/2026-10-23/emc19.htm); org:arquetipo-estadual-eleitorado (acrescentada a Lei 9.504/1997, art. 1º, parágrafo único, I, que sustenta a frase sobre eleição simultânea)
- 2026-10-23 23:05 — cargos (3) verificados sem correção (CF, arts. 14, 27, 28, 77, 105; EC 111/2021, arts. 4º e 5º; Lei 1.079/1950, arts. 74 a 79)
- 2026-10-23 23:15 — cargo:arquetipo-estadual-conselheiro-do-tce (completado pela coleta): troca da vaga de livre escolha para nomeacao-com-aprovacao-do-legislativo confirmada em SP (art. 20, XII; art. 31, § 2º), BA (art. 94, I), PA (art. 119, § 1º, I), GO (art. 28, § 2º, II) e MA (art. 52, § 2º, I; sem norma registrada); acrescentadas PA e GO às fontes e a ressalva sobre as 21 Constituições não lidas em campos.provimento_casos.nota. Mesmo acréscimo em rel:assembleia-legislativa-aprova-indicacao-conselheiro-do-tce. Assembleia, TCE, Prefeitura e Câmara Municipal: os contido_em acrescentados pela coleta conferem com a CF (arts. 27, 29, 31, 71 e 75); sem mudança
- 2026-10-23 23:30 — relações sem ocupa (32) conferidas: CF (arts. 27, 28, 29, 29-A, 31, 61, 66, 77, 94, 96, 105, 125, 127, 128), Lei 8.625/1993 (arts. 9º e 10), LC 80/1994 (art. 99), Lei 13.089/2015 (art. 3º), compilações do STF (ADI 637, ADI 5.520, ADPF 434, ADI 558, ADI 119). Correções: rel:governador-sanciona-lei-estadual, rel:governador-veta-lei-estadual, rel:arquetipo-estadual-assembleia-legislativa-aprecia-veto-lei-estadual e rel:arquetipo-estadual-deputado-estadual-propoe-lei-estadual passaram de inferido a oficial: sanção, veto, apreciação do veto por maioria absoluta e iniciativa de qualquer deputado estão expressas nas Constituições de SP (arts. 24 e 28), BA (arts. 75 e 80), PA (arts. 104 e 108) e GO (arts. 20 e 23); quórum maioria-absoluta acrescentado à apreciação do veto; a sanção tácita só aparece em SP, PA e GO
- 2026-10-23 23:50 — normas (5), objetos (6) e variações (9) conferidos (EC 25/2000, art. 3º; LC 230/2026 inteira; Lei 11.107/2005, art. 21; Lei 13.089/2015, art. 25; Lei PE 11.304/1995, art. 110; CF, arts. 21, XIII e XIV, 22, XVII, 24, 25, 29, 29-A, 32, 128, I, d, 144, § 6º; ADCT, arts. 11 e 15; ADI 347 na compilação do STF). Correções: norma:lei-13089-2015 (vigência na publicação, art. 25, antes "não conferida"); norma:pe-lei-11304-1995 (vigência na publicação, art. 110; trechos copiados em brutos/alepe/2026-10-23/lei-11304-1995-trechos.txt); obj:lei-estadual (o art. 24, § 3º, é a competência plena na falta de lei federal, não "completar normas gerais")
- 2026-10-23 23:55 — processos (2): proc:lei-estadual com remete_a em todas as etapas, conferido; acrescentadas às etapas de iniciativa, sanção ou veto, apreciação do veto e promulgação as Constituições de SP, BA, PA e GO, com os prazos lidos; campos.etapas passou de inferido a oficial; quórum maioria-absoluta na apreciação do veto. proc:alteracao-territorial-de-municipios conferido etapa por etapa contra a LC 230/2026 e a Lei 9.709/1998 (arts. 5º e 7º, lidos no Planalto); corrigida a etapa plebiscito (votam os dois municípios inteiros, plebiscito único). Ponto do coletor confirmado: a LC 230/2026 regula só o desmembramento para incorporação a município limítrofe e veda criar município (art. 1º, § 1º); o quadro de LCs do Planalto (até a LC 238, de 21/10/2026; cópia em brutos/planalto-leis/2026-10-23/quadro_lcp.htm) não tem outra LC sobre o art. 18, § 4º, então criar, fundir e incorporar municípios inteiros seguem sem lei complementar em 2026-10-01
