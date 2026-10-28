---
id: verificacao-f0-administracao-indireta
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-administracao-indireta\""
status: em-andamento
depende_de: [f0-administracao-indireta]
iniciada_em: 2026-10-27
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
- 2026-10-27 21:45 — iniciada; lidos CLAUDE.md, instruções de verificação, modelo, protocolo, decisões (D39, D40, D42) e o diário da coleta; escopo: 121 arquivos com tarefa f0-administracao-indireta, menos os quatro vincula-se de INSS, Anvisa, Previc e Funpresp-Exe (em revisão pela seguridade, não mexo)
- 2026-10-27 21:47 — o curl ao Planalto volta a funcionar com --http1.1; baixadas em pesquisa/brutos/planalto-leis/2026-10-27-verificacao-administracao-indireta/: d11232.htm (a cópia citada nas notas de norma:decreto-11232-2022 não existia em brutos), l9424.htm, l5537.htm, l9448.htm e l11907.htm; l9615.htm segue com 404
- 2026-10-27 21:58 — verificadas (sem correção) norma:decreto-1775-1996, decreto-4887-2003, decreto-99274-1990, decreto-lei-1110-1970, decreto-lei-200-1967 (art. 4º, II: a autarquias, b empresas públicas, c sociedades de economia mista, d fundações públicas), decreto-lei-509-1969, decreto-lei-759-1969, lc-140-2011 e lc-76-1993. Corrigida norma:decreto-11232-2022: caminho da cópia bruta (não existia; nova cópia em brutos/2026-10-27) e compilacao_ate (a alteração de 2025 é o Decreto 12.792/2025, só no Anexo II)
- 2026-10-27 22:10 — verificadas norma:lei-10559-2002, lei-11516-2007, lei-13303-2016, lei-13848-2019, lei-9986-2000, lei-7735-1989, lei-5371-1967 e lei-11892-2008 (Lei 15.521 é de 24/9/2026). Correções: norma:lei-12529-2011 e norma:lei-5878-1973, publicação passou de inferida a oficial (API do Senado: DOU de 01/12/2011 e de 15/05/1973); criada fonte:senado-api-legislacao-detalhe para isso (cópias XML em brutos/senado-dados-abertos/2026-10-27-verificacao-administracao-indireta/); norma:lei-13575-2017, compilacao_ate de Lei 14.514/2022 para Lei 15.506/2026 (art. 2º, XLI, de 16/9/2026)
- 2026-10-27 22:30 — verificadas norma:lei-14701-2023, lei-14835-2024, lei-15190-2025 (arts. 3º, 5º, 18, 19, 28, 40, 42 a 44, 47, 50 e 67; prazo de 180 dias recontado: 4/2/2026), lei-8257-1991, lei-8429-1992, lei-8629-1993, lei-8987-1995, lei-9424-1996 e lei-9448-1997 (estas duas agora com cópia bruta). Correções de compilacao_ate e notas: norma:lei-5537-1968 (era MP 2.216-37/2001; a redação dela no art. 7º foi substituída pela Lei 12.801/2013; agora Lei 12.989/2014), norma:lei-6938-1981 (Lei 15.512/2026), norma:lei-9615-1998 (Lei 14.193/2021), norma:decreto-9794-2019 (Decreto 11.910/2024). Todas as 34 normas verificadas
- 2026-10-27 22:45 — fontes: verificadas as 5 (fonte:stf-noticia-improbidade-2022-08-31, stf-noticia-marco-temporal-2025-12-22, stf-noticia-adi-2135-2024-11-06, stf-noticia-licenciamento-2025-12-29 e radio-senado-licenciamento-julgamento-adiado-2026-08-26; as três últimas agora com cópia em brutos/stf e brutos/senado de 2026-10-27). Correção: radio-senado, resumo dizia que "a lei segue aplicada" (a notícia diz que alguns estados já aplicam as regras). Ponto em aberto resolvido: ADIs 7913, 7916 e 7919 sem liminar nem cautelar até 2026-10-27, pelos andamentos e decisões do portal do STF (cópias em brutos/stf/2026-10-27-verificacao-administracao-indireta/); as três foram excluídas do calendário de julgamento pelo Presidente do STF em 19/8/2026 (a Rádio Senado diz "por decisão do Plenário"). Criada fonte:stf-adi-7913 (cobre as três); notas de norma:lei-15190-2025 atualizadas
