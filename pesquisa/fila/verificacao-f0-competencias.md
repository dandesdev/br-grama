---
id: verificacao-f0-competencias
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-competencias\""
status: pendente
depende_de: [f0-competencias]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-competencias"` conferidas contra a CF (cópia local `pesquisa/brutos/planalto-cf/2026-10-16/cf.htm`): 2 entes típicos, 89 matérias, 173 relações `tem-competencia` e a edição em `ente:df`. Confira inciso por inciso que nenhum foi esquecido nos arts. 21, 22, 23, 24 e 30, e que cada relação tem o ente, o tipo e a natureza certos.
- [ ] Aplicar o termo criado depois da coleta: `tipo: "propria"` nas competências materiais do município do art. 30, III, IV e VI a IX, hoje registradas como `interesse-local` com `confianca: "inferido"`. O art. 30, V (serviços públicos de interesse local) continua `interesse-local`, que agora cobre os incisos I e V. Com o termo novo, a confiança desses campos pode voltar a `oficial` se a classificação ficar só descritiva; justifique no diário.
- [ ] Decisões do coletor a conferir (ver o diário de `f0-competencias`):
  - divisão de incisos com vários assuntos (22, I; 24, I e IX) e reaproveitamento de uma matéria entre artigos: a matriz fica correta e sem perda de alcance? O alcance de cada inciso está em `competencia.nota`?
  - art. 25, §§ 2º e 3º classificados como "exclusiva" (`inferido`)
  - DF (art. 32, § 1º): só as competências legislativas de estados e municípios; os arts. 23 e 24 citam o DF expressamente
- [ ] Os resumos das matérias dizem o que a Constituição diz, em palavras simples, sem ampliar nem restringir

## Diário
