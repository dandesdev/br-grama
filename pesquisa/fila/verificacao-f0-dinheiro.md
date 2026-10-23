---
id: verificacao-f0-dinheiro
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-dinheiro\""
status: pendente
depende_de: [f0-dinheiro]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-dinheiro"` conferidas contra a fonte: 6 órgãos (Banco Central, CMN, CMO, Comitê Gestor do IBS, Receita Federal, Tesouro), 2 cargos, 1 pessoa, 82 relações, 7 normas, 1 fonte, 45 objetos (33 tributos), 1 aviso e `proc:ciclo-orcamentario` (etapa por etapa, com os prazos do ADCT, art. 35, § 2º). `org:cmo` foi completada aqui depois de criada pela f0-controle: releia tudo nela.
- [ ] Tributos: confira tributo por tributo, nos arts. 145 a 156-B, 195, 212 e 239 e no ADCT, que nenhum ficou de fora e que cada relação `tem-competencia` tem o ente, o dispositivo e as datas de fim certos (ICMS e ISS até 31/12/2032; contribuição sobre receita ou faturamento e do importador até 31/12/2026; PIS e Pasep, EC 132/2023, art. 20). Confira o estado de IBS, CBS e Imposto Seletivo em 2026-10-01 na LC 214/2025 e o que a LC 235/2026 mudou nela (não foi lida pelo coletor).
- [ ] Banco Central: Gabriel Galípolo em 2026-10-01 (decreto, aprovação do Senado, atos perto da data); número de diretores (hoje leitura nossa: nove membros menos o Presidente; confira a LC 179/2021). As relações `rel:presidente-nomeia-diretoria-banco-central` e `rel:senado-aprova-indicacao-diretoria-banco-central` (da f0-executivo) apontam para `org:banco-central`: aponte-as para os cargos novos ou crie relações por cargo, e diga no diário o que fez.
- [ ] Termos criados depois da coleta (o coordenador já aplicou os três primeiros; confira e aplique os outros):
  - `tipo_objeto`: `tributo` (os 33 `obj:tributo-*`), `fundo` (FPE, FPM, FNDR, Fundo Partidário, FEFC) e `regra-fiscal` (limitações ao poder de tributar, limites de despesa com pessoal, regime fiscal sustentável, regra de ouro). A matriz de competências agora tem a vista "Tributos".
  - `tipo_competencia: "compartilhada"`: aplicado às duas relações do IBS (art. 156-A).
  - relação `calcula`: troque verbo e id de `rel:tcu-calcula-cotas-fpe`, `rel:tcu-calcula-cotas-fpm` e `rel:tcu-calcula-coeficientes-fndr` (hoje `regula`). O art. 161, parágrafo único, só fala dos fundos de participação: ache a base do FNDR ou ajuste a relação.
  - `tipo_orgao: "entidade-interfederativa"`: aplique em `org:comite-gestor-do-ibs` (hoje `outro`, `inferido`), conferindo o art. 156-B, § 1º, e a LC 227/2026.
- [ ] Pontos do coletor a conferir:
  - datas calculadas por nós no ciclo orçamentário (15/4, 17/7, 31/8, 22/12) e o início de vigência da Lei 4.595/1964: estão certas e marcadas como `inferido`?
  - duração de quatro anos do PPA (leitura nossa): há texto expresso (ADCT, art. 35, § 2º, I)?
  - `aviso:planalto-resolucao-cn-1-2006-desatualizada`: confirme que o texto do Planalto está mesmo desatualizado e que o da Câmara é o vigente
  - emendas impositivas (ADI 7697) e LC 200/2023 (ADIs citadas no texto compilado): alguma decisão muda o que está registrado para 2026-10-01?
  - relações com o CMN usam `cargo:ministro-de-estado` com a pasta na `condicao`: use `orgao_exercicio` se couber (veja `docs/modelo-de-dados.md`)
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
