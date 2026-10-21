---
id: f0-eleicoes
escopo: "Fatia 0: direitos políticos, partidos e eleições (CF, arts. 14 a 17), com a eleição como processo cíclico"
status: pendente
depende_de: []
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Direitos políticos (art. 14): voto obrigatório e facultativo, condições de elegibilidade (§ 3º, com as idades mínimas por cargo), inelegibilidades (§§ 4º a 9º e LC 64/1990, com a LC 135/2010), como objetos ou notas nos cargos eletivos que já existem (presidente, deputados, senadores, prefeitos, vereadores e o arquétipo de governador, quando existir).
- [ ] Perda e suspensão de direitos políticos (art. 15).
- [ ] Partidos (art. 17): os partidos com representação na Câmara já foram importados. Acrescente as regras: registro no TSE, cláusula de desempenho (art. 17, § 3º, e a transição da EC 97/2017: qual percentual vale para a eleição de 2026), federações partidárias (Lei 14.208/2021) e as federações existentes em 2026-10-01, com fonte no TSE. Fundo partidário e FEFC como objetos, com a lei de cada um.
- [ ] Justiça Eleitoral: o TSE e os 27 TREs já existem. Crie o que falta do art. 118: `org:juntas-eleitorais` e `cargo:juiz-eleitoral` (agregado); zonas eleitorais como dado agregado, se o TSE publicar o número oficial. Ministério Público Eleitoral só se a f0-funcoes-essenciais não o tiver criado (veja o diário dela).
- [ ] Foro dos membros dos TREs: o STJ julga os membros dos Tribunais Regionais Eleitorais nos crimes comuns e de responsabilidade (art. 105, I, a), como relação (sugestão da revisão do Judiciário)
- [ ] Processo eleitoral: `proc:eleicao-geral` (presidente, governadores, senadores, deputados) e `proc:eleicao-municipal`, com etapas e datas da CF e da lei (Lei 9.504/1997, Código Eleitoral): convenções, registro de candidaturas, propaganda, 1º turno, 2º turno (art. 77; art. 29, II), diplomação e posse (art. 82, na redação da EC 111/2021, e art. 28). Indique as datas concretas da eleição de 2026 pelo calendário eleitoral do TSE (confira número e datas da resolução). A data de referência (2026-10-01) cai antes do 1º turno de 2026: registre a eleição como em curso nessa data.
- [ ] Sistemas eleitorais: majoritário (presidente, governador, senador, prefeito) e proporcional (deputados e vereadores), com o quociente eleitoral do Código Eleitoral, como objeto ou nota curta.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-judiciario: `org:tse`, `org:tre-<uf>`, `org:justica-eleitoral`
- f0-tipicos: `cargo:arquetipo-estadual-governador`, `cargo:arquetipo-estadual-deputado-estadual`
- Já existem: `cargo:presidente-da-republica`, `cargo:deputado-federal`, `cargo:senador`, `cargo:arquetipo-municipal-prefeito`, `cargo:arquetipo-municipal-vereador`, `org:arquetipo-municipal-eleitorado`, os partidos

## Diário
