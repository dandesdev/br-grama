---
id: verificacao-f0-administracao-indireta
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-administracao-indireta\""
status: pendente
depende_de: [f0-administracao-indireta]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-administracao-indireta"` conferidas contra a fonte: 5 processos (`proc:demarcacao-de-terra-indigena`, `proc:desapropriacao-para-reforma-agraria`, `proc:expropriacao-confiscatoria`, `proc:licenciamento-ambiental`, `proc:titulacao-de-territorio-quilombola`, etapa por etapa), 22 órgãos (ANM, ANP, Banco do Brasil, CADE, Caixa, Colégio Pedro II, Comissão de Anistia, Correios, Enap, FNDE, Funai, Ibama, IBGE, ICMBio, Incra, Inep, justiça desportiva, Petrobras, Senappen, Sisnama, Sistema Nacional de Cultura, SNCTI), 9 objetos, 39 relações, 34 normas, 5 fontes, 1 cargo (`cargo:diretor-geral-da-policia-rodoviaria-federal`) e 6 avisos.
- [ ] D39 em cada entidade da administração indireta: `contido_em` no Poder Executivo do ente (Decreto-Lei 200/1967, art. 4º) e `vincula-se` ao ministério certo, pela estrutura regimental vigente em 2026-10-01.
- [ ] Entidades de outras tarefas que esta revisão pode editar (autorizado pelo coordenador):
  - `rel:uniao-repassa-royalties-do-petroleo-estados` e `-municipios` (de f0-federacao): a coleta trocou a origem para `org:anp`. Confira na Lei 9.478/1997 ou na Lei 12.351/2010 quem distribui, e marque as duas como verificadas se conferirem (a revisão de federação deixou as duas para cá).
  - `rel:uniao-repassa-cotas-salario-educacao-*` (de f0-educacao): troque a origem para `org:fnde` se a Lei 9.424/1996, art. 15, § 1º, sustentar (renomeie arquivo e id se o id disser "uniao").
  - `org:policia-penal-federal`: passe `contido_em` para `org:secretaria-nacional-de-politicas-penais` se a estrutura regimental do MJSP vigente sustentar.
  - `org:policia-rodoviaria-federal`: atualize a nota sobre o Diretor-Geral, que agora tem cargo próprio.
- [ ] Pontos do coletor a conferir:
  - Lei 15.190/2025: vigência em 2026-02-04 calculada pela LC 95/1998; ADIs 7913, 7916 e 7919 sem liminar até 2026-10-01. A etapa de manifestações do licenciamento ficou sem ator: veja se a lei ou a LC 140 diz quem se manifesta (órgãos envolvidos, Funai, ICMBio, Iphan) e, se não, mude o tipo da etapa ou anote.
  - Inferências: a Enap como escola de governo do art. 39, § 2º; a data de publicação da Lei 5.878/1973 (o rodapé do Planalto diz 1979); o provimento do Diretor-Geral da PRF; atores AGU e juiz federal na expropriação confiscatória; publicação da Lei 12.529/2011 (rodapé diz 1º.11.2011).
  - Leis lidas só por WebFetch, sem cópia bruta (o curl ao Planalto falhou): tente baixar as cópias. Lei 11.907/2009, arts. 292 e 292-A (escolas de governo), não foi lida.
  - Lei 4.595/1964, art. 21, § 1º: veja se a aprovação do Senado para o Presidente do Banco do Brasil ainda vale (se valer, é relação `aprova` do Senado; anote).
  - Cobertura parcial: arts. 173, 176 (potencial hidráulico e Aneel), 177 (monopólio) e 243 (trabalho escravo). Confirme o que está no diário.
- [ ] Decisões do coordenador sobre as propostas da coleta: não entra verbo "outorga" ou "concede" (`autoriza` cobre a outorga de lavra; `fiscaliza` cobre o poder concedente); o Diretor-Geral da PRF fica com `nomeacao-livre`, e o provimento de função de confiança não ganha termo próprio na fatia 0.
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
