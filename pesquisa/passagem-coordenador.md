# Passagem do coordenador (2026-10-24)

Este arquivo é para a sessão que assume a coordenação da fatia 0. Ele diz onde o trabalho parou e o que fazer, em ordem. Quando tudo aqui estiver feito, apague este arquivo num commit.

## Pedido do usuário

"Siga e não pare a menos que precise perguntar algo." Conduza sozinho as coletas que faltam, as revisões e o fechamento da fatia 0. Pare só para perguntar o que for decisão do mantenedor. Fale com o usuário em português, curto, com placar (coletadas e verificadas).

## Leia antes

1. `CLAUDE.md`, `docs/decisoes.md` (até D39), `docs/modelo-de-dados.md`, `docs/protocolo-pesquisa.md`.
2. `pesquisa/instrucoes-agentes.md` (coleta) e `pesquisa/instrucoes-verificacao.md` (revisão). Os subagentes seguem esses arquivos.
3. `pesquisa/fila/f0-cobertura.md` (quadro da varredura da CF) e `pesquisa/fila/f0-fechamento.md` (pendências e decisões de modelo já tomadas).

## Estado em 2026-10-24

- Fatia 0 original: 10 coletas e 10 revisões feitas, mais a revisão `verificacao-f0-complementos`.
- Varredura da CF (`npm run -s cobertura`, grava `pesquisa/cobertura-cf.md`): CF 72,3% e ADCT 25,6% antes das coletas de lacunas. As lacunas viraram 8 tarefas:

| Tarefa | Status | Revisão |
|---|---|---|
| f0-controle-constitucionalidade | coletada | `verificacao-f0-controle-constitucionalidade` escrita, pendente |
| f0-educacao | coletada | `verificacao-f0-educacao` escrita, pendente |
| f0-seguridade | coletada | `verificacao-f0-seguridade` escrita, pendente |
| f0-federacao | coletada | `verificacao-f0-federacao` escrita, pendente |
| f0-processos-legislativos | em andamento (interrompida) | escrever ao terminar |
| f0-administracao-indireta | em andamento (interrompida) | escrever ao terminar |
| f0-dinheiro-complementar | em andamento (interrompida) | escrever ao terminar |
| f0-judiciario-complementar | em andamento (interrompida) | escrever ao terminar |

- As quatro coletas em andamento pararam no limite de sessão da madrugada de 2026-10-24. O que gravaram está no git (checkpoint deste commit). Os agentes antigos não podem ser retomados por outra sessão: relance cada um como agente novo que retoma pelo diário (modelo abaixo).
- `npm run -s validar`: nenhum erro. Restam 5 avisos de texto que citam ids ainda não criados. Cada um é trabalho de uma coleta em andamento:
  - `proc:decreto-legislativo`, citado em `rel:congresso-autoriza-atividades-nucleares` e em `proc:calamidade-publica-nacional`: a tarefa é de f0-processos-legislativos (consta em f0-fechamento como "processo do decreto legislativo"). Quando existir, ponha `remete_a: "proc:decreto-legislativo"` na etapa `decretacao` de `proc:calamidade-publica-nacional` (pendência anotada no diário de f0-dinheiro-complementar).
  - `org:anp`, citado nas duas relações `uniao-repassa-royalties-do-petroleo-*`: a tarefa é de f0-administracao-indireta (item da origem dos royalties).
  - `aviso:resolucao-cnj-303-desatualizada-ec-136`, citado em `norma:resolucao-cnj-303-2019`: a tarefa é de f0-judiciario-complementar.

## Ordem de trabalho

### 1. Relançar as quatro coletas (em paralelo, em segundo plano)

Use o Agent tool (`subagent_type: "general-purpose"`, `run_in_background: true`), um agente por tarefa. Modelo de prompt (troque `<tarefa>` e o ponto de retomada):

> Você é um agente de coleta do br-grama (raiz: C:\Users\DELL\apps\brgram). Sua tarefa é `<tarefa>` (arquivo `pesquisa/fila/<tarefa>.md`). Ela foi interrompida pelo fim da cota; você está RETOMANDO.
> 1. Leia `pesquisa/instrucoes-agentes.md` e siga tudo o que está lá.
> 2. Leia a tarefa e o diário. O que o diário registra já está em disco e no git. Não refaça; confira um ou dois arquivos para pegar o padrão. Para ver o que já existe, procure `"tarefa": "<tarefa>"` em `dados/`.
> 3. Continue do ponto do diário: <ponto>. Depois, os entregáveis ainda sem [x].
> Regras: grave cada entidade assim que ficar pronta e anote no diário; não faça commit; não edite vocabulários nem esquemas (proponha no diário); não edite entidades fora do escopo (anote no diário). A cota pode acabar a qualquer momento.
> Ao terminar, siga "Ao terminar" das instruções e devolva o relatório final curto.

Pontos de retomada e avisos por tarefa:

- **f0-processos-legislativos**: último registro é `proc:crime-de-responsabilidade-do-presidente` (art. 86). A última frase do agente antes de parar: "Gravo o Conselho de Ética da Câmara e o processo de perda de mandato" (art. 55). Falta ainda `proc:decreto-legislativo`, que outros já citam. Ponha esse processo na frente.
- **f0-administracao-indireta**: a migração D39 está feita (INSS, Anvisa, Previc, Funpresp-Exe com `contido_em` no Poder Executivo federal e `vincula-se` ao ministério; Sudam, Sudene e Sudeco só ganharam fonte; `norma:decreto-lei-200-1967` criada). Continue com o resto dos entregáveis: `org:anp`, que os royalties já citam, e depois regulação, terras e sistemas setoriais.
- **f0-dinheiro-complementar**: último registro é Simples Nacional (art. 146). Diga ao agente que `proc:decreto-legislativo` está sendo criado por f0-processos-legislativos. Ele não deve pôr `remete_a` para um id inexistente; se o processo existir quando ele terminar, que ligue a etapa `decretacao` de `proc:calamidade-publica-nacional`.
- **f0-judiciario-complementar**: gravou normas e fontes (leis dos juizados, CPP, Resoluções CNJ 174 e 303, CNMP 20, EC 136/2025, ADO 40, ADI 7064 e notícia de posse no TJDFT). Na hora da parada estava em "Agora os órgãos". Siga para órgãos, cargos e relações, e crie `aviso:resolucao-cnj-303-desatualizada-ec-136` se a contradição for real.

Rode no máximo 4 agentes ao mesmo tempo.

### 2. A cada coleta que termina

1. Leia o relatório e o diário da tarefa.
2. Resolva as propostas de vocabulário ou de modelo. Só o coordenador edita `esquema/vocabularios/*.json`, `esquema/entidades.schema.json` e `docs/`. Novas decisões vão para `docs/decisoes.md`. Termos criados depois da coleta entram na tarefa de revisão como "aplique".
3. Escreva `pesquisa/fila/verificacao-<tarefa>.md`, no mesmo formato das quatro já escritas (por exemplo `verificacao-f0-federacao.md`):
   - frontmatter com `status: pendente` e `depende_de: [<tarefa>]`;
   - entregáveis com a contagem por tipo de entidade (`grep -rl '"<tarefa>"' dados`);
   - termos para aplicar;
   - pontos do coletor (as dúvidas e as inferências do diário);
   - a linha "Os resumos dizem o que a norma diz...".
4. Rode `npm run -s validar` e commit (ver "Commit" abaixo).

### 3. Revisões das 8 coletas de lacunas

Comece já pelas quatro escritas, enquanto as coletas rodam, sem passar de 4 agentes no total. Modelo de prompt:

> Você é um agente verificador do br-grama (raiz: C:\Users\DELL\apps\brgram). Sua tarefa é `verificacao-<tarefa>` (arquivo `pesquisa/fila/verificacao-<tarefa>.md`).
> 1. Leia `pesquisa/instrucoes-verificacao.md` e siga tudo o que está lá. Leia também o diário da coleta em `pesquisa/fila/<tarefa>.md`.
> 2. O escopo são as entidades com `"tarefa": "<tarefa>"` em `verificacao`. O texto da CF está em `pesquisa/brutos/planalto-cf/2026-10-16/cf.htm` (EC 140 e 141 são posteriores a 2026-10-01).
> 3. Aplique os termos de vocabulário listados nos entregáveis e resolva os pontos em aberto.
> 4. Grave e anote no diário em grupos pequenos, para que uma retomada saiba onde parou.
> Regras: grave cada entidade logo depois de conferi-la e anote no diário; não faça commit; não edite vocabulários nem esquemas; não edite entidades fora do escopo (anote no diário). A cota pode acabar a qualquer momento.
> Ao terminar, siga "Ao terminar" das instruções e devolva o relatório final curto.

Atenção: a revisão de seguridade **não** mexe no `contido_em` de INSS, Anvisa, Previc e Funpresp-Exe (a D39 já foi aplicada por f0-administracao-indireta). Se a revisão de seguridade rodar junto com a coleta de administração indireta, avise os dois agentes de que essas quatro entidades são da coleta.

### 4. Rodada de complementos

Os revisores criam entidades com `verificacao.status: "coletado"` e `tarefa: "verificacao-f0-*"`. Depois das 8 revisões:

1. Liste essas entidades: `grep -rl '"coletado"' dados`, cruzando com `tarefa` `verificacao-`.
2. Escreva uma tarefa `verificacao-f0-complementos-2`, no modelo de `verificacao-f0-complementos.md`.
3. Rode a revisão por um agente.

### 5. Fechamento da fatia 0 (`pesquisa/fila/f0-fechamento.md`)

- Itens que ficaram no fechamento:
  - normas eleitorais (Lei 15.230/2025, Lei 14.291/2022);
  - posse de deputados estaduais e vereadores;
  - Constituições estaduais sobre a escolha dos conselheiros;
  - aviso da posse de Jhonatan de Jesus;
  - acórdãos da ADI 6457 e da ADPF 995;
  - Decreto 11.693/2023.

  Dá para juntar tudo numa tarefa pequena de coleta e revisão.
- Decisões de modelo ainda abertas:
  - sede;
  - nó de sociedade civil;
  - objeto em `repassa-recursos`;
  - dedupe de `ocupa`;
  - marca de interino em `ocupa`;
  - cargos eleitos no processo eleitoral;
  - `orgao_exercicio` em etapas de processo.

  O diário de f0-fechamento já decidiu adiar sede, sociedade civil, `repassa-recursos` e dedupe para depois da fatia 0. Interino, cargos eleitos e `orgao_exercicio` em etapas ainda pedem decisão. Se mudarem o mapa, pergunte ao usuário antes.
- Rode `npm run -s cobertura` de novo e atualize os percentuais em `f0-cobertura.md`. O que continuar descoberto vira lista explicada (fora de escopo, ou lacuna para a fase das leis estruturantes, D04).
- Marque `f0-fechamento` como concluída. Atualize a memória do projeto em `C:\Users\DELL\.claude\projects\C--Users-DELL-apps-brgram\memory\brgram-escopo-decisoes.md`. Avise o usuário de que a fatia 0 fechou e de que a próxima fase são as leis estruturantes (D04), a planejar com ele.

## Commit (só o coordenador)

- Só faça commit com a validação limpa. O encadeamento com `| tail` não para em erro (o commit 7f4cbbd subiu com 1 erro). Use:
  `npm run -s validar > /dev/null && git add -A dados esquema docs pesquisa web scripts && git commit -m "..." && git push`
- Avisos de texto (ids citados em notas) não bloqueiam. Erros, sim. Com agentes gravando em paralelo, um erro pode ser transitório: valide de novo antes de concluir.
- Mensagem no estilo do `git log`, por exemplo `pesquisa(<tarefa>): coletada (...); vocabulário: ...; tarefa de revisão; checkpoint das coletas em curso`. A mensagem termina com `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- O push na main publica o site (GitHub Pages; o build roda a validação). `npm run -s build` e `npm run -s tipos` também têm de passar quando mexer em `web/` ou `scripts/`.
- Nunca rode `git checkout .`, `git reset --hard` ou `git clean`.

## Quando a cota acabar

- Os agentes falham com 429 ou com "session limit". Na mesma sessão, `SendMessage` ao agentId depois da renovação os retoma com contexto.
- Se a sessão mudar, relance pelo diário, como no passo 1.
- Antes de relançar, valide e commite o que estiver em disco.

## Dicas de ambiente (Windows)

- Python via heredoc às vezes falha. Use `python -I - <<'PYEOF'` ou grave o script em `C:\Users\DELL\scratch-brgram\`.
- Node não lê `/tmp/...`. Use `C:/Users/DELL/scratch-brgram`.
- Ao reescrever JSON, preserve CRLF. Os avisos de CRLF do git são ruído.
- A CF local está em latin1.
