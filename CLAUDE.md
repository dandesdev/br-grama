# br-grama: instruções para agentes

Infográfico web interativo que mostra como funciona o Estado brasileiro: órgãos, cargos, relações e processos, cada um com base legal. Projeto em português.

## Leia antes de trabalhar

- `docs/decisoes.md`: decisões de escopo e design. Não contrarie nenhuma sem falar com o mantenedor.
- `docs/modelo-de-dados.md`: formato dos arquivos em `dados/`.
- `docs/protocolo-pesquisa.md`: como pesquisar, verificar e registrar fontes.

## Regras

- **Nunca invente** fonte, dispositivo legal, URL, nome ou número. Na falta, use `confianca: "indisponivel"` e abra um `achado:`.
- Toda entidade tem `fontes`, `vigencia`, `confianca` e `verificacao`.
- Data de referência do retrato: **2026-10-01** (D14).
- Textos escritos por nós, curtos e objetivos. Não copie texto de Wikipedia nem de obras protegidas.
- Grave cada entidade em disco assim que ela ficar pronta e anote no diário da tarefa.
- Só o agente coordenador faz commit; subagentes não fazem.

## Se pedirem para "retomar a pesquisa"

Siga a seção "Se a cota acabar no meio" de `docs/protocolo-pesquisa.md`: `git status` → tarefas `em-andamento` em `pesquisa/fila/` → diário → revalidar o que foi gravado depois do último commit → continuar.

Nunca rode `git checkout .`, `git reset --hard` ou `git clean`.
