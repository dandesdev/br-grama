---
id: verificacao-f0-educacao
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-educacao\""
status: pendente
depende_de: [f0-educacao]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-educacao"` conferidas contra a fonte: 7 órgãos (Sistema Nacional de Educação, sistemas de ensino federal, estadual e municipal, CNE, Cite, comissão intergovernamental do Fundeb), 1 cargo, 21 relações, 8 normas, 2 fontes e 4 objetos (piso, Fundeb, PNE, CAQ).
- [ ] Achados do coletor a conferir com cuidado:
  - PNE vigente em 2026-10-01: Lei 15.388/2026 (14/4/2026, DOU 15/4/2026); o PNE de 2014 prorrogado até 31/12/2025 pela Lei 14.934/2024; nenhum PNE em vigor entre 1º/1 e 14/4/2026
  - Sistema Nacional de Educação pela LC 220/2025, que é também a lei complementar de cooperação do art. 23, parágrafo único, para a educação: se for, acrescente isso à nota de `obj:materia-educacao` ou às relações de competência comum da educação, sem mudar o tipo
  - Cite pela Portaria MEC 102/2026 e Resolução Cite 1/2026; `contido_em` da Cite no SNE (o regimento a vincula ao MEC só para apoio administrativo)
- [ ] Termos criados depois da coleta (aplique):
  - `tipo_norma: "portaria"` em `norma:portaria-mec-102-2026` (hoje `outro`)
  - relação `homologa`: Ministro da Educação homologa as deliberações do CNE (hoje só na condição de uma relação); crie a relação se a fonte sustentar
  - relação `monitora`: quem acompanha o PNE pela Lei 15.388/2026 (hoje só no texto); crie as relações que a lei sustentar, com os ids de órgãos existentes
  - As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-educacao"`.
- [ ] Pontos do coletor a conferir:
  - "União" traduzida como MEC em `rel:mec-coordena-sne` e `rel:mec-coordena-sistema-federal-de-ensino` (`inferido`); União como distribuidora das cotas do salário-educação
  - membro nato do CNE (a lei cita cargo extinto; a página do CNE mostra a Secretária de Educação Básica)
  - comissão intergovernamental do Fundeb como possível subcomissão da Cite (leitura nossa)
  - revisão dos critérios do Fundeb devida em 2026 (ADCT, art. 60-A): houve lei até 2026-10-01?
  - datas não conferidas: MP 1.159/1995 (CNE) e vigência da Lei 11.494/2007
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
