---
id: verificacao-f0-judiciario
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-judiciario\""
status: pendente
depende_de: [f0-judiciario]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-judiciario"` conferidas contra a fonte
- [ ] Aplicar os termos de vocabulário criados depois da coleta, onde couberem:
  - `provimento: "nomeacao-a-partir-de-lista"` no quinto constitucional e nos advogados do TSE (hoje registrados como `nomeacao-livre`, o que é impreciso)
  - `provimento: "promocao"` para quem chega ao cargo por promoção na carreira (hoje registrado como `concurso-publico`)
  - `tipo_orgao: "ramo-da-justica"` nos cinco ramos (hoje `conjunto`)
  - relação `julga-recursos-contra` onde a coleta usou `julga` com o sentido de "julga recurso de"
  - campo `jurisdicao` (ids dos entes) nos tribunais cuja abrangência hoje está só em texto ou em `notas`
- [ ] Pontos em aberto da coleta: ementa da ADI 3367 (o CNJ não tem competência sobre o STF?); quem elege no STJ os ministros dele no TSE (regimento do STJ); nomes oficiais dos TREs de MT, MS e TO; siglas dos TREs marcadas como inferidas

## Diário
