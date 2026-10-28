---
id: verificacao-f0-judiciario-complementar
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-judiciario-complementar\""
status: em-andamento
depende_de: [f0-judiciario-complementar]
iniciada_em: 2026-10-27
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-judiciario-complementar"` conferidas contra a fonte: 14 órgãos (júri estadual e federal, juizados especiais e turmas recursais estaduais e federais, TNU, justiça de paz, Enfam, CJF, Enamat, CSJT, MP de contas estadual, sindicatos e associações), 5 cargos (jurado, juiz leigo, conciliador, juiz de paz, procurador de contas estadual), 5 objetos, 1 processo (`proc:pagamento-de-precatorio`, etapa por etapa, com os dois regimes), 67 relações, 14 normas, 6 fontes e 1 aviso.
- [ ] Termos criados depois da coleta (aplique). As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-judiciario-complementar"`:
  - relação `supervisiona`: troque `rel:conselho-da-justica-federal-coordena-justica-federal` e `rel:csjt-coordena-justica-do-trabalho` por `supervisiona` (renomeie arquivo e id).
  - `tipo_orgao: "escola-judicial"` em `org:enfam` e `org:enamat` (hoje `outro`).
  - `provimento: "sorteio"` em `cargo:jurado`; `provimento: "designacao"` (agora cobre auxiliares da Justiça fora de carreira) em `cargo:juiz-leigo` e no conciliador, se a lei sustentar.
  - `tipo_norma: "provimento"` no Provimento CNJ 207/2025 (hoje `outro`).
- [ ] Fora do escopo, mas autorizado nesta revisão:
  - `cargo:desembargador` e `var:df-tjdft`: as notas dizem que não se pesquisou quem nomeia no quinto do TJDFT; atualize citando `rel:presidente-nomeia-desembargador-do-tjdft`.
  - `norma:ristj`: `compilacao_ate` pode passar a "ER 54/2026" (o bruto guardado é a edição consolidada até a ER 54, de 17/8/2026). Confirme no bruto.
- [ ] Pontos do coletor a conferir:
  - `aviso:resolucao-cnj-303-desatualizada-ec-136`: a Resolução CNJ 303 ainda diz 2 de abril e Selic; a CF (EC 136/2025) diz 1º de fevereiro e IPCA mais 2% ao ano, limitado à Selic; o Provimento CNJ 207/2025 é a regra provisória. Veja se o CNJ revisou a resolução entre junho e 2026-10-01.
  - Júri: a Lei 15.358/2026 tira do júri homicídios de membros de facção ou milícia ligados aos crimes dela; há quatro ADIs sem decisão. Confira se a regra está entre os pontos atacados.
  - Juiz de paz: eleição como "majoritária" é inferência (a CF não define o sistema). Confira a marca de confiança.
  - ADCT, art. 101: o texto compilado do Planalto ainda mostra "até 2029" sem marcar o efeito da EC 136. A coleta seguiu a emenda: confira.
  - Uma relação por TRF (art. 108), em vez de um conjunto: decisão aceita pelo coordenador; confira só o conteúdo.
  - O conciliador existe nos juizados estaduais e federais, mas o cargo ficou só nos estaduais (um cargo tem um órgão). Deixe claro nas notas.
  - Wayback: três URLs com arquivamento pedido e sem confirmação (Provimento 207, notícia do CNJ, ADI 7952). Tente de novo.
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
- 2026-10-27 — iniciada; lidos CLAUDE.md, instruções, modelo, protocolo, decisões e o diário da coleta; 113 entidades no escopo
- 2026-10-27 22:00 — verificado fonte:stf-adi-7952: Wayback obtido (20261028004826); notícia do STF de 24/8/2026 põe a competência do júri entre os temas da audiência pública
- 2026-10-27 22:00 — corrigido fonte:stf-adi-7064: resumo dizia "Ação da AMB"; ficou "Ação do Conselho Federal da OAB e da AMB" (aba Partes do STF; despacho de 8/11/2023 no bruto chama o CFOAB de autor)
- 2026-10-27 22:00 — verificado fonte:stf-ado-40
- 2026-10-27 22:00 — verificado fonte:stf-constituicao-e-o-supremo-art-98: arquivo preenchido com a cópia do Wayback de 20261024022540, que tem o conteúdo do art. 98
- 2026-10-27 22:00 — verificado fonte:tjdft-noticia-posse-desembargadora-2026-08-05: Wayback obtido (20261028005007)
- 2026-10-27 22:00 — verificado fonte:cnj-noticia-revisao-resolucao-303-2026-06-11: Wayback achado (20260714152816)
