---
id: f4-colegiados
escopo: "Fase 4 (D10, D63 a): colegiados nacionais criados por lei que deliberam, normatizam ou julgam, ainda fora do mapa"
status: pendente
depende_de: [f4-siorg]
---

Leia `pesquisa/instrucoes-agentes.md` (todas as seções), `docs/decisoes.md` (D05, D07, D10, D11, D14, D33, D51 a D54, D62 e D63), `docs/modelo-de-dados.md` e `docs/protocolo-pesquisa.md`. Data de referência: 1º/10/2026.

Regras desta tarefa:
- Antes de criar, procure em `dados/` se a entidade já existe (por nome, sigla e assunto); amplie em vez de duplicar.
- Toda afirmação com fonte oficial lida (planalto.gov.br, DOU, sites .gov.br, STF para jurisprudência). Guarde as cópias lidas em `pesquisa/brutos/` numa pasta com a data e o id da tarefa.
- Novo termo de vocabulário só se a D54 permitir; proponha no diário em vez de editar `esquema/`.
- Não edite `esquema/`, `docs/`, `dados/metricas/`, `dados/fluxos/` nem `dados/estruturas/`. Não faça commit nem rode `git checkout`, `git reset` ou `git clean`.
- Rode `npm run -s validar` a cada lote e anote no diário.

## Entregáveis

- [ ] Levantamento (seção "Levantamento"): colegiados federais criados pela CF ou por lei com competência deliberativa, normativa ou de julgamento de alcance nacional, ou com relação própria com outro órgão do mapa. Ponto de partida: os colegiados das árvores do SIORG (`dados/estruturas/*.json`, unidades com `colegiada: true` e sem `mapa`) e as leis de política nacional (meio ambiente, trânsito, criança e adolescente, pessoa com deficiência, política criminal, seguros privados, sistema financeiro, desporto, cultura, ciência e tecnologia, política agrícola, recursos do FGTS, entre outras). Para cada um: lei de criação e artigo, competência, órgão onde fica, se já está no mapa. Diga quais ficam fora e por quê (consultivo, interno, criado só por decreto sem lei, extinto).
- [ ] Os que entram como `org:` (tipo `colegiado`, `contido_em` o órgão do SIORG), com composição (cargos agregados, D11, ou `conjunto` de membros, D51), quem preside, quem indica e quem nomeia, mandato, e as relações com fonte (normatiza, delibera, julga recurso de, aprova, fiscaliza; use o vocabulário existente).
- [ ] Se o colegiado tem unidade correspondente no SIORG, anote o código SIORG no diário (o coordenador liga a unidade ao nó no importador).
- [ ] Estados e municípios ficam nos arquétipos que já existem; não crie colegiados estaduais ou municipais.

## Levantamento

## Diário
