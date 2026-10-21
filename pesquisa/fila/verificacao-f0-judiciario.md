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
- 2026-10-20 09:49 — retomada (cota renovada); git limpo; já verificados os 5 ramos, org:stj e org:tst; seguem org:tse, org:stm, org:cnj e o resto (150 entidades)
- 2026-10-20 09:49 — verificado org:stm (CF arts. 92, 96, 122 a 124; Lei 8.457/1992, art. 1º, IV, e art. 6º, I, a, e II, c, na redação da Lei 13.774/2018). Sem erro
- 2026-10-20 09:49 — criada norma:ristj (indispensável para resolver o ponto em aberto do TSE): edição oficial consolidada até a ER 47/2024, via Wayback (o site do STJ bloqueou o acesso); art. 10, III: o Plenário do STJ elege, dentre seus ministros, os membros efetivos e substitutos do TSE
- 2026-10-20 09:49 — verificado org:tse (CF arts. 118, 119, 121, §§ 2º e 3º; Código Eleitoral, art. 22, II; RISTF, art. 7º, II, e art. 143, parágrafo único, no PDF consolidado até a ER 59/2023). Correção/complemento: detalhes e notas diziam que o regimento do STJ não fora conferido; agora citam RISTJ, art. 10, III (Plenário elege)
- 2026-10-20 09:50 — verificada norma:ec-45-2004 (data 30/12/2004, DOU 31/12/2004, art. 5º instalação em 180 dias, art. 10 vigência na publicação). Sem erro
- 2026-10-20 09:50 — verificada fonte:stf-adi-3367 (URL e arquivo do Wayback conferidos; decisão de 13/4/2005 na cópia bruta). Ponto em aberto resolvido: ementa lida no inteiro teor do acórdão (cópia do Wayback de 13/12/2019 do paginador do STF, docID 363371): item 4 diz que o CNJ "não tem nenhuma competência sobre o Supremo Tribunal Federal e seus ministros"; anotado nas notas e em mais_informacoes
- 2026-10-20 09:50 — verificado org:cnj (CF art. 92, I-A e § 1º; art. 102, I, r; art. 103-B, caput, I a XIII, §§ 1º a 7º; EC 45/2004). Mudança: detalhes ganharam "não tem competência sobre o STF e seus ministros" (ADI 3367, ementa, item 4); "não julga processos" deixou de ser inferido (ementa, itens 2 e 4: natureza exclusivamente administrativa); nota de pendência removida
- 2026-10-20 23:05 — verificada norma:lei-14226-2021 (art. 1º: sede em Belo Horizonte e jurisdição em MG; art. 15: vigência no 1º dia útil após 1º/1/2022 = 3/1/2022). Sem erro
- 2026-10-20 23:05 — verificados os 6 TRFs (org:trf-1 a org:trf-6) em lote contra a lista do CNJ (nome, sigla, estados) e as subpáginas (endereço da sede e site); CF arts. 107 e 108; ADCT art. 27, § 6º; TRF6 pela Lei 14.226/2021, art. 1º. Sem erro. Aplicado o campo jurisdicao (entes que estavam só nas notas), e a frase "Abrangência (entes)" saiu das notas
- 2026-10-20 23:06 — verificados os 24 TRTs (org:trt-1 a org:trt-24) em lote contra a lista do CNJ (nome, sigla, estados; TRT2 e TRT15 dividem SP) e as subpáginas (endereço e site). Correção nos 24: detalhes atribuíam à CF, art. 112, o recurso contra as Varas do Trabalho; o art. 112 só cobre os juízes de direito com jurisdição trabalhista; acrescentada a CLT, art. 895, I (recurso ordinário das Varas ao TRT), no texto e nas fontes. Aplicado jurisdicao (TRT2 e TRT15: ente:sp, com nota de que é parte do estado)
- 2026-10-20 23:07 — verificados os 27 TJs (org:tj-<uf>, com org:tj-df = TJDFT) em lote contra a lista do CNJ (nome e sigla) e as subpáginas (endereço da sede e site, 27 de 27 iguais); CF arts. 21, XIII, 22, XVII, 96, III, e 125, § 1º. Sem erro. Aplicado jurisdicao (ente do estado; TJDFT: ente:df)
- 2026-10-20 23:07 — verificados os 3 TJMs (org:tjm-mg, -rs, -sp) contra a lista e as subpáginas do CNJ; CF art. 42 e art. 125, §§ 3º a 5º. Sem erro. Aplicado jurisdicao
