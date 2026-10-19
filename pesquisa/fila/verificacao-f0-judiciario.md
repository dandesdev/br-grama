---
id: verificacao-f0-judiciario
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-judiciario\""
status: em-andamento
depende_de: [f0-judiciario]
iniciada_em: 2026-10-19
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
- 2026-10-19 07:47 — iniciada; lidos instruções, modelo, protocolo, decisões e o diário da f0-judiciario; 164 entidades no escopo (97 órgãos, 12 cargos, 46 relações, 6 normas, 2 fontes, 1 processo)
- 2026-10-19 07:49 — verificados os 5 ramos (org:justica-federal, -do-trabalho, -eleitoral, -militar-da-uniao, org:justica-estadual) contra CF arts. 21, XIII; 22, XVII; 92; 105, § 1º; 106 a 126 (cf.htm de 2026-10-16); tipo_orgao conjunto -> ramo-da-justica; justica-eleitoral: detalhes diziam que os membros vêm "dos Tribunais de Justiça, dos TRFs", agora "da Justiça estadual, da Justiça Federal" (art. 120, § 1º, I, b e II: juízes de direito e juiz federal também)
- 2026-10-19 07:50 — verificados org:stj (CF arts. 61, 92, 96, 104, 105; ADCT art. 27; Lei 15.484/2026, arts. 2º e 7º: publicada em 4/8/2026, vigência após 30 dias, 3/9/2026) e org:tst (CF art. 111-A; CLT art. 896, caput; precisão: recurso de revista é nos dissídios individuais). Sem erro de fato. Obs.: estrutura_continua do STJ aponta para o art. 105 (competências), que não é estrutura interna; vem do piloto, mantido
