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
- 2026-10-18 08:23 — gravado org:casa-civil
- 2026-10-18 08:23 — retomada após renovação da cota; aviso do coordenador: deputados e partidos importados, reutilizar. Pesquisa até aqui: DOU (busca in.gov.br) para nomeações e exonerações de ministros 2023-2026; lista de decretos da API do Senado (brutos/senado-dados-abertos/2026-10-17/legislacao-lista-DEC-*.json) para as estruturas regimentais
- 2026-10-18 08:30 — gravado fonte:senado-api-lista-decretos-2023-2026, fonte:siorg-estrutura-resumida, fonte:govbr-ministerios-e-orgaos-com-status-de-ministerio, norma:decreto-12642-2025, norma:decreto-12553-2025, norma:decreto-11336-2023, norma:decreto-11493-2023, norma:decreto-11335-2023, norma:decreto-11337-2023, norma:decreto-11396-2023, norma:decreto-12504-2025, norma:decreto-11392-2023, norma:decreto-11341-2023, norma:decreto-11907-2024, norma:decreto-12769-2025, norma:decreto-12694-2025, norma:decreto-11343-2023, norma:decreto-12904-2026, norma:decreto-11346-2023, norma:decreto-11427-2023, norma:decreto-11348-2023, norma:decreto-12254-2024, norma:decreto-11492-2023, norma:decreto-11351-2023, norma:decreto-11624-2023, norma:decreto-11353-2023, norma:decreto-11354-2023, norma:decreto-11355-2023, norma:decreto-11356-2023, norma:decreto-11357-2023, norma:decreto-11798-2023, norma:decreto-12764-2025, norma:decreto-11360-2023, norma:decreto-11416-2023, norma:decreto-11330-2023, norma:decreto-11363-2023, norma:decreto-11364-2023, norma:decreto-11362-2023, norma:decreto-11676-2023, norma:decreto-12540-2025
- 2026-10-18 08:31 — gravado org:ministerio-da-agricultura-e-pecuaria, org:ministerio-das-cidades, org:ministerio-da-cultura, org:ministerio-da-ciencia-tecnologia-e-inovacao, org:ministerio-das-comunicacoes, org:ministerio-da-defesa, org:ministerio-do-desenvolvimento-agrario-e-agricultura-familiar, org:ministerio-da-integracao-e-do-desenvolvimento-regional, org:ministerio-do-desenvolvimento-e-assistencia-social, org:ministerio-dos-direitos-humanos-e-da-cidadania, org:ministerio-da-fazenda, org:ministerio-da-educacao, org:ministerio-do-empreendedorismo, org:ministerio-do-esporte, org:ministerio-da-gestao-e-da-inovacao-em-servicos-publicos, org:ministerio-da-igualdade-racial, org:ministerio-do-desenvolvimento-industria-comercio-e-servicos, org:ministerio-da-justica-e-seguranca-publica, org:ministerio-do-meio-ambiente-e-mudanca-do-clima, org:ministerio-de-minas-e-energia, org:ministerio-das-mulheres, org:ministerio-da-pesca-e-aquicultura, org:ministerio-do-planejamento-e-orcamento, org:ministerio-de-portos-e-aeroportos, org:ministerio-dos-povos-indigenas, org:ministerio-da-previdencia-social, org:ministerio-das-relacoes-exteriores, org:ministerio-da-saude, org:ministerio-do-trabalho-e-emprego, org:ministerio-dos-transportes, org:ministerio-do-turismo, org:cgu, org:secretaria-geral-da-presidencia, org:secretaria-de-relacoes-institucionais, org:secretaria-de-comunicacao-social, org:gabinete-de-seguranca-institucional, org:agu
- 2026-10-19 07:42 — retomada (cota renovada); em disco e no commit ef216a9: 38 órgãos, 37 decretos de estrutura regimental e 3 fontes. Próximo: ocupantes em 2026-10-01, gravando cada um assim que confirmado
