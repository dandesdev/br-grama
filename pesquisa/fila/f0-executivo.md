---
id: f0-executivo
escopo: "Fatia 0: o Poder Executivo federal no nível da CF e da lei de organização dos ministérios, com ocupantes em 2026-10-01"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-17
concluida_em: null
---

## Entregáveis

Estrutura:
- [ ] Os ministérios e os órgãos da Presidência com status de ministério, conforme a Lei 14.600/2023 e alterações vigentes em 2026-10-01 (32 + 6, conferidos no piloto). Cada um é um `org:` com `contido_em: org:poder-executivo-federal` (ou a Presidência, quando a lei disser) e um link para a estrutura regimental (decreto) em `estrutura_continua`. Ids: `org:casa-civil`, `org:ministerio-da-fazenda` etc.
- [ ] Ocupante de cada ministério em 2026-10-01: `pessoa:` + relação `ocupa` para `cargo:ministro-de-estado`, com a pasta indicada na relação (`condicao` ou `notas`). Atenção: em abril de 2026 muitos ministros saíram para disputar a eleição (desincompatibilização). Confira no DOU e no Planalto quem estava no cargo em 2026-10-01, inclusive interinos. Use `nome_civil` e filiação partidária (só partido).
- [ ] Conselho da República (arts. 89 e 90) e Conselho de Defesa Nacional (art. 91): `org:` tipo `colegiado`, composição como relações `integra` dos cargos membros, competências como relações.

Competências do Presidente (art. 84) que ainda não estão no mapa:
- [ ] `obj:decreto` (decreto regulamentar e decreto autônomo do art. 84, VI) e a relação `regulamenta`
- [ ] Relações com objetos ou cargos para os incisos relevantes: celebrar tratados (sujeitos ao Congresso), exercer o comando supremo das Forças Armadas, decretar intervenção, estado de defesa e de sítio, conceder indulto, nomear (as nomeações ainda não modeladas: TCU já está; nomear PGR, presidente e diretores do Banco Central, ministros de tribunais superiores e juízes de TRF), prover cargos públicos. Pode citar `org:banco-central`, `org:forcas-armadas`, `obj:tratado-internacional` e `obj:indulto`; crie os objetos e os órgãos mínimos de que precisar (ver ids reservados abaixo)

Processos:
- [ ] `proc:intervencao-federal` (arts. 34 a 36)
- [ ] `proc:estado-de-defesa` (art. 136)
- [ ] `proc:estado-de-sitio` (arts. 137 a 139)

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-legislativo: `obj:decreto-legislativo`, `obj:emenda-constitucional`, `obj:medida-provisoria`, `obj:lei-complementar`, `obj:lei-delegada`, `obj:resolucao`
- f0-judiciario: `org:cnj`, `org:trf-*` e demais tribunais; `cargo:ministro-do-stj`, `cargo:ministro-do-tst`, `cargo:ministro-do-stm`, `cargo:juiz-de-trf`

## Ids reservados para esta tarefa (crie só o mínimo, com fonte)

`org:banco-central`, `org:forcas-armadas`, `obj:tratado-internacional`, `obj:indulto`, `obj:decreto`

## Diário
- 2026-10-17 22:14 — iniciada; lidos instruções, decisões, modelo de dados, protocolo, vocabulários e exemplos do piloto
