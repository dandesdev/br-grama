---
id: verificacao-f0-controle
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-controle\""
status: pendente
depende_de: [f0-controle]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-controle"` conferidas contra a fonte: 29 órgãos (os 27 tribunais de contas, a Secretaria de Controle Interno da Câmara e a CMO), 3 cargos, 9 pessoas, 27 relações, 2 normas, 38 fontes, 8 objetos e 2 processos (etapa por etapa). Confira inciso por inciso que o art. 71 está todo coberto, somando as relações do piloto (`rel:tcu-fiscaliza-uniao`, `rel:tcu-auxilia-congresso`).
- [ ] Composição do TCU em 2026-10-01: os 9 ministros e o presidente. Confira no DOU as nomeações, posses e aposentadorias perto da data, em especial Odair Cunha (posse em 20/5/2026), Rodrigo Pacheco (posse em 30/9/2026) e a saída de Aroldo Cedraz e Bruno Dantas. Procure o dia de posse de Vital do Rêgo (2014) e de Benjamin Zymler (2001), hoje só com o ano.
- [ ] Termos criados depois da coleta (aplique trocando verbo e id):
  - `aprecia-para-registro`: as relações do art. 71, III, hoje com `julga` (`rel:tcu-aprecia-admissao-de-pessoal`, `rel:tcu-aprecia-aposentadorias-e-pensoes`)
  - `aplica-sancao`: `rel:tcu-aplica-sancoes` (art. 71, VIII), hoje com `julga`
  - `representa-a`: crie a relação do art. 71, XI (TCU representa ao Poder competente). O alvo pode ser `org:congresso-nacional` com nota de que vale para qualquer Poder, ou outra solução que você justifique no diário.
  - As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-controle"`.
- [ ] Pontos do coletor a conferir:
  - `org:cmo` e `norma:resolucao-cn-1-2006`, criados aqui porque o art. 72 precisava da comissão: confira a versão vigente da resolução (houve alterações, como a Resolução 3/2015-CN)
  - sedes de TCE-MT (carta de serviços de 2019) e TCE-RR (deduzida do endereço da Ouvidoria); nome completo do TCE-SC; fontes sem cópia no Wayback (CE, MT, PE, RJ)
  - "cidadão" em `proc:denuncia-ao-tcu` ligado a `org:eleitorado-nacional`: o art. 74, § 2º fala em qualquer cidadão, e eleitorado é um conjunto mais estreito? Diga no diário se é aceitável ou se a etapa deve citar o ator só no texto
  - `cargo:arquetipo-estadual-conselheiro-do-tce`: a divisão 4/3 vem da Súmula 653 (`secundario`); os casos de `provimento_casos` estão coerentes com o art. 73, § 2º, aplicado por simetria (art. 75)?
  - controle interno do Senado (Resolução SF 71/1993?) e do TCU: se achar fonte oficial, complete; se não, registre no diário onde procurou
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
