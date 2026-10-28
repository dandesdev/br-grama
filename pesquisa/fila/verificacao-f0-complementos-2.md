---
id: verificacao-f0-complementos-2
escopo: "Revisão das entidades criadas durante as revisões das coletas de lacunas (verificacao.status = \"coletado\" e tarefa verificacao-*) e das entidades de f0-sugestoes-revisoes"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-27
concluida_em: null
---

## Entregáveis

- [ ] Conferir contra a fonte cada uma das entidades abaixo (a tarefa que a criou está em `verificacao.tarefa`; leia o diário dessa tarefa em `pesquisa/fila/` para saber por quê). Ao conferir, troque `verificacao` para `status: "verificado"`, `tarefa: "verificacao-f0-complementos-2"`, com a data e uma nota curta.
  Criadas por revisores:
  - `fonte:ale-rr-diario-4645-2026`, `fonte:doe-am-2026-04-01`, `fonte:doe-am-2026-04-06`, `fonte:doe-am-2026-05-04`, `fonte:doe-am-2026-09-30`, `fonte:tse-consulta-cand-2022` (verificacao-f0-tipicos)
  - `fonte:stf-adi-6457`, `fonte:stf-adpf-995` (verificacao-f0-defesa-seguranca; a coleta f0-residuais já achou os acórdãos)
  - `fonte:senado-api-legislacao-detalhe`, `fonte:stf-adi-7913` (verificacao-f0-administracao-indireta)
  - `obj:sistema-tributario-nacional`, `rel:presidente-convoca-conselho-da-republica`, `rel:presidente-convoca-conselho-de-defesa-nacional`, `rel:senado-monitora-sistema-tributario-nacional` (verificacao-f0-processos-legislativos; o coordenador trocou o `tipo_objeto` do primeiro para `regime-tributario`)
  - `rel:cne-monitora-plano-nacional-de-educacao`, `rel:mec-monitora-plano-nacional-de-educacao`, `rel:ministro-da-educacao-homologa-deliberacoes-do-cne` (verificacao-f0-educacao)
  - `rel:mds-gere-fundo-de-combate-e-erradicacao-da-pobreza` (verificacao-f0-dinheiro-complementar)
  Da coleta f0-sugestoes-revisoes (tarefa `f0-sugestoes-revisoes`):
  - avisos `aviso:ba-constituicao-tcm-representacao-intervencao`, `aviso:conselho-consultivo-fundo-combate-pobreza-sem-regulamento`
  - fonte `fonte:radio-senado-impeachment-dilma-2016-08-31`
  - normas `norma:decreto-10223-2020`, `norma:decreto-4564-2003`, `norma:lei-11494-2007`, `norma:lei-8706-1993`, `norma:mp-2168-40-2001`
  - `obj:fundo-do-regime-geral-de-previdencia-social` (só a fonte nova: CF, art. 165, § 5º, III)
  - `proc:crime-de-responsabilidade-do-presidente` (só a etapa `condenacao`, que ganhou a votação separada da inabilitação em 2016)
  - `proc:lei-municipal` (só o regime novo `urgencia-do-prefeito`)
  - relações `rel:inss-gere-fundo-do-regime-geral-de-previdencia-social`, `rel:mds-gere-fundo-nacional-de-assistencia-social`, `rel:ministerio-da-saude-gere-fundo-nacional-de-saude`, `rel:ministro-do-trabalho-nomeia-codefat`, `rel:presidente-preside-conselho-da-republica`, `rel:presidente-preside-conselho-de-defesa-nacional`
- [ ] No início e no fim, rode a busca por entidades com `"status": "coletado"` e `tarefa` começando por `verificacao-` em `dados/`. Entram também as que aparecerem e não estão na lista, menos as de `verificacao-f0-residuais`, que está rodando agora e terá a própria rodada.
- [ ] Edição autorizada fora da lista: em `org:comissao-intergovernamental-de-financiamento-da-educacao-basica`, ligue `norma:lei-11494-2007` em `campos.vigencia` (hoje diz "sem norma própria cadastrada"), se a lei sustentar a data de 2007-06-21.
- [ ] Pontos a conferir:
  - Impeachment de 2016: a coleta não achou a resolução do Senado e apoiou a votação separada só na notícia da Rádio Senado. Procure a Resolução do Senado de 2016 e o placar no portal do Senado; se não achar, a notícia basta, mas diga nas notas.
  - `rel:ministro-do-trabalho-nomeia-codefat` aponta para o órgão porque não há cargo de membro do Codefat; confira se a condição deixa claro que são os membros.
  - Decreto 10.223/2020: vigência 7/3/2020 contada pela coleta e marcada `incerta`; confira.
  - Wayback deu 429 para várias fontes novas: tente de novo o `arquivo`.
- [ ] Os resumos dizem o que a fonte diz, em palavras simples, sem ampliar nem restringir
- [ ] Se alguma delas não se sustentar, corrija; se não houver fonte, use `confianca: "indisponivel"` com aviso, ou apague a entidade e as referências a ela, registrando no diário.

## Diário
- 2026-10-27 22:25 — iniciada; busca inicial (coletado + tarefa verificacao-*): 18 entidades, todas na lista; f0-sugestoes-revisoes: 17 entidades, todas na lista. Total 35.
- 2026-10-27 22:45 — verificadas fonte:ale-rr-diario-4645-2026, fonte:doe-am-2026-04-01, fonte:doe-am-2026-04-06, fonte:doe-am-2026-05-04, fonte:tse-consulta-cand-2022 (PDFs e zip baixados de novo; trechos, números de edição, nomes e 27 governadores eleitos conferem), fonte:stf-adi-6457 e fonte:stf-adpf-995 (notícias em brutos; Vide/ADI no Planalto). Correções: arquivo de doe-am-2026-04-01 (captura de 24/10 dava 404) e de stf-adi-6457 (captura citada não existia, redirecionava para uma de 2025 com 403) trocados por capturas novas de 2026-10-28. fonte:doe-am-2026-09-30 conferida (nº 35.795, leis 8.545 a 8.547 de 30/9/2026, Roberto Cidade e Serafim Corrêa), mas o arquivo dá 404: aguardando a captura nova
