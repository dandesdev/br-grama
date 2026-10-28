---
id: f0-residuais
escopo: "Fatia 0, fechamento: pendências pequenas que sobraram das tarefas e das revisões (eleições, controle, defesa, competências originárias dos tribunais, remédios constitucionais nos demais ramos)"
status: pendente
depende_de: [f0-fechamento]
iniciada_em: null
concluida_em: null
---

## Entregáveis

Cada item é pequeno. Se a fonte oficial não for achada, registre `confianca: "indisponivel"` e abra um `aviso:`; não invente.

Eleições:
- [ ] Lei 15.230/2025 (idade mínima) e Lei 14.291/2022 (propaganda partidária): confira se existem e o que mudam; crie as normas e ligue às entidades que já tratam do tema (procure em `dados/` antes).
- [ ] Posse de deputados estaduais e vereadores: etapa `posse` de `proc:eleicao-geral` já cita a Assembleia; confira a regra (CF, art. 27, § 1º; art. 29) e complete a etapa de posse de `proc:eleicao-municipal` se faltar a Câmara Municipal.
- [ ] ADI 7881 (LC 219/2025; `fonte:stf-adi-7881` já existe): se o STF decidiu até 2026-10-01, registre o efeito; se não, anote no diário.

Controle:
- [ ] `aviso:posse-jhonatan-de-jesus-tcu-data`: tente achar a data da posse no TCU (DOU, portal do TCU). Se achar, corrija a relação `ocupa` e marque o aviso como resolvido pelo campo que o modelo usa (veja `docs/modelo-de-dados.md`).
- [ ] Constituições estaduais sobre a escolha dos conselheiros dos TCEs: só se uma consulta rápida mostrar regra diferente da CF (art. 75). Senão, anote no diário que o arquétipo segue o art. 73 por simetria.

Defesa e segurança:
- [ ] Acórdãos da ADI 6457 e da ADPF 995 (`fonte:stf-adi-6457`, `fonte:stf-adpf-995` citam só notícias): ache o acórdão no portal do STF e acrescente como fonte, se existir.
- [ ] `norma:decreto-11693-2023`: o nome da Diretoria de Inteligência Penal está desatualizado; confira o decreto vigente da estrutura do MJSP em 2026-10-01 e anote.

Competências originárias e remédios (propostas das revisões e coletas):
- [ ] STF: art. 102, I, e (litígio entre Estado estrangeiro e a União, estado, DF ou território), j (revisão criminal e ação rescisória de seus julgados), m (execução de sentença nas causas originárias), n (ação em que toda a magistratura é interessada): relações `julga` do STF para objetos que já existam ou que valham criar.
- [ ] STJ: art. 105, I, g (conflitos de atribuições entre autoridades administrativas e judiciárias) e j (revisão criminal e ação rescisória de seus julgados).
- [ ] TRFs: art. 108, I, b a d (revisão criminal e rescisória, mandado de segurança e habeas data contra ato do próprio tribunal ou de juiz federal, habeas corpus quando a autoridade coatora for juiz federal). Siga o padrão já usado nas relações do art. 108 (uma por TRF ou o padrão que já existe; procure `art. 108` em `dados/relacoes`).
- [ ] Justiça de paz (art. 98, II) e custas destinadas ao custeio dos serviços da Justiça (art. 98, § 2º): só se couber em entidade existente.
- [ ] Remédios constitucionais nos demais ramos: Justiça do Trabalho (art. 114, IV: mandado de segurança, habeas corpus e habeas data), Justiça Eleitoral (art. 121, § 4º, V: recurso ao TSE contra decisão que denegar habeas corpus, mandado de segurança, habeas data ou mandado de injunção), justiça estadual (art. 125, § 1º, competência definida na Constituição do estado) e mandado de injunção no STJ (art. 105, I, h).
- [ ] MPs junto aos tribunais de contas dos municípios (TCMs de SP e RJ e TCMs estaduais) e controle externo das polícias do DF e das polícias legislativas pelo MP: só se a fonte for clara.
- [ ] Lei de Migração (Lei 13.445/2017): etapas do rito da extradição, se `obj:extradicao` ainda não tiver processo. Basta o essencial (pedido por via diplomática, prisão, julgamento pelo STF, entrega decidida pelo Presidente).
- [ ] Para cada item, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: `org:stf`, `org:stj`, `org:tst`, `org:tse`, `org:trf-1` a `org:trf-6`, `org:tcu`, `org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`, `obj:extradicao`, `rel:stf-julga-extradicao`, `proc:eleicao-geral`, `proc:eleicao-municipal`, `norma:cf-1988`, `norma:lc-219-2025`.
- D40 (relação `ocupa` com `interino: true`) e D42 (ator de etapa `{ ator, orgao_exercicio }`) já valem.

## Diário
