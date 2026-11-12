---
id: f2-eleicoes
escopo: "Fase 2 (D49): Código Eleitoral, Lei das Eleições, Lei dos Partidos, Lei das Inelegibilidades e Lei 9.709/1998"
status: em-andamento
depende_de: [f0-eleicoes]
iniciada_em: 2026-11-11
concluida_em: null
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

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] Etapas que faltam em `proc:eleicao-geral` e `proc:eleicao-municipal` (convenções, registro de candidatura, impugnação, propaganda como período, votação, apuração, diplomação); prazos com dispositivo.
- [ ] Processos novos, se a lei descrever a sequência: registro de candidatura e impugnação (LC 64, arts. 3º a 16), ação de investigação judicial eleitoral (LC 64, art. 22), registro de partido no TSE (Lei 9.096), plebiscito e referendo (Lei 9.709).
- [ ] Partidos (Lei 9.096): órgãos de direção como conceito no `detalhes` de `org:partidos-politicos`; fundações partidárias, Fundo Partidário (`rel:tse-repassa-fundo-partidario-partidos` existe) e as relações de controle do TSE sobre os partidos (registro, contas).
- [ ] Federações partidárias (Lei 9.096, art. 11-A): as federações em vigor em 2026-10-01 já estão em `dados/orgaos/federacao-*`; confira as fontes e acrescente a lei.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:tse`, `org:tre-*`, `org:juntas-eleitorais`, `org:eleitorado-nacional`, `org:partidos-politicos`, `proc:eleicao-geral`, `proc:eleicao-municipal`, `obj:diploma-eleitoral`.
- Em paralelo: `f2-judiciario` (órgãos da Justiça Eleitoral, Código Eleitoral arts. 12 a 41) e `f2-financas-publicas`.

## Cobertura

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
