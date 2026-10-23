---
id: verificacao-f0-defesa-seguranca
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-defesa-seguranca\""
status: pendente
depende_de: [f0-defesa-seguranca]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-defesa-seguranca"` conferidas contra a fonte: 19 órgãos, 6 cargos, 6 pessoas, 54 relações, 13 normas, 2 fontes, 1 aviso e `proc:emprego-das-forcas-armadas-na-glo` (etapa por etapa). Inclui `org:forcas-armadas`, completado aqui depois da f0-executivo.
- [ ] Ocupantes em 2026-10-01: Comandantes da Marinha (Olsen), do Exército (Tomás Paiva) e da Aeronáutica (Damasceno), Chefe do Estado-Maior Conjunto (Aguiar Freire), Diretor-Geral da PF (Andrei Rodrigues) e Diretor-Geral da ABIN (Luiz Fernando Corrêa). Confira no DOU nomeação e ato assinado perto da data. A prova de exercício da ABIN é a mais fraca (último ato achado de 9/9/2026): procure ato mais próximo ou exoneração.
- [ ] Termos criados depois da coleta (aplique):
  - relação `coordena`: `rel:mjsp-coordena-susp` está com `preside`; troque o verbo (o id já está certo).
  - `tipo_orgao: "sistema"`: `org:sistema-brasileiro-de-inteligencia` e `org:sistema-unico-de-seguranca-publica`, hoje `outro`.
  - As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-defesa-seguranca"`.
- [ ] Pontos do coletor a conferir:
  - art. 144 sem emenda depois da EC 104/2019 até 2026-10-01; PEC 18/2025 não promulgada
  - Polícia Ferroviária Federal só no texto da CF, sem órgão na Lei 14.600/2023 nem no Decreto 11.348/2023: está registrado como fato com fonte?
  - Susp: a Lei 13.675/2018 cita o extinto Ministério Extraordinário da Segurança Pública; a coordenação pelo MJSP vem da Lei 14.600/2023? A ligação das polícias penais ao Susp está `inferido`: há texto expresso?
  - Diretor-Geral da PF: a lei diz nomeação pelo Presidente; o ato de 2023 foi do Ministro da Casa Civil por delegação. A relação diz isso?
  - datas não conferidas: LC 117/2004 (§§ 3º a 6º do art. 15 da LC 97/1999), vigência da Lei 4.375/1964, alterações da Resolução 2/2013-CN e do Decreto 11.816/2023 em 2026; ADI 6457 e ADPF 995 (citadas pelo Planalto nesses dispositivos)
  - `aviso:abin-atos-e-despesas-sigilosas` (D08, D37): diz o que não é público, com fonte?
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
