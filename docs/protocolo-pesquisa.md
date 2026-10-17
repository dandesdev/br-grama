# Protocolo de pesquisa

Como os dados entram no br-grama, como são verificados e como retomar o trabalho depois de uma interrupção.

## Hierarquia de fontes

1. **Norma vigente na data de referência.** Constituição, leis, decretos, regimentos internos (Planalto, LexML, sites oficiais das casas e dos tribunais). Atenção: o texto compilado do Planalto mostra a redação *atual*. Para a data de referência, confira se houve alteração depois dela.
2. **Dados oficiais estruturados.** SIORG, Portal da Transparência, APIs da Câmara e do Senado, TSE, CNJ, IBGE, Tesouro/SIOP.
3. **Páginas institucionais oficiais.**
4. **Fontes secundárias.** Wikidata, Wikipedia, doutrina, imprensa, trabalhos acadêmicos. Sempre com `confianca: "secundario"`. Wikipedia serve de pista: cite a fonte primária que ela aponta, e nunca copie o texto dela (D19).

Quando duas fontes oficiais divergirem: registre as duas, marque `oficial-contraditorio` e abra um `achado:`.

Nunca invente fonte, dispositivo ou URL. Se não encontrar, use `confianca: "indisponivel"` e abra um achado.

## Registro de fontes

Cada `fonte:` e cada `norma:` guarda:
- `url`
- `acesso_em`
- `arquivo`: link do Wayback Machine. Se ainda não houver cópia, peça uma em `https://web.archive.org/save/<url>`.

Dados brutos pequenos (CSV, JSON) baixados de fontes oficiais vão para `pesquisa/brutos/<fonte>/<data>/`, sem edição.

## Tarefas

A pesquisa é dividida em tarefas pequenas: cada entregável deve caber numa sessão de agente, algo como 20 a 50 entidades. Cada tarefa é um arquivo em `pesquisa/fila/<id>.md`:

```markdown
---
id: cf-titulo-iv-cap-i
escopo: Constituição, Título IV, Cap. I (Poder Legislativo)
status: pendente        # pendente | em-andamento | coletada | verificada | bloqueada
depende_de: []
iniciada_em: null
concluida_em: null
---

## Entregáveis
- [ ] org:congresso-nacional
- [ ] ...

## Diário
- 2026-10-16 14:02 — iniciada; lidos arts. 44–47
- 2026-10-16 14:20 — gravados org:congresso-nacional, org:camara-dos-deputados
```

Regras do diário:
- O agente grava cada entidade em `dados/` **assim que ela fica pronta** e anota uma linha no diário. Nada fica só na memória do agente.
- O diário só recebe acréscimos; nunca se apaga uma linha.
- **O coordenador confere o diário.** No piloto, os agentes acumularam a pesquisa no contexto e gravaram tudo só no fim, apesar da regra; quando a cota acabou, quase nada estava em disco. Por isso, ao lançar uma tarefa, o coordenador pede que a primeira entidade seja gravada logo e, se o diário ficar parado enquanto o agente trabalha, interrompe e pede a gravação.

## Verificação

- Quem coleta grava com `verificacao.status: "coletado"`.
- Outro passo, de preferência um agente diferente, relê a fonte e confere cada afirmação. Se confirmar, muda para `"verificado"`. Se não confirmar, corrige e anota no diário, ou abre um achado.
- Uma tarefa só fica `verificada` quando todos os seus entregáveis estão verificados.

## Checkpoints (git)

- O coordenador (agente principal) faz um commit ao fim de cada tarefa coletada e de cada tarefa verificada. Formato da mensagem: `pesquisa(<id>): coletada` ou `pesquisa(<id>): verificada`.
- Subagentes em paralelo escrevem arquivos, mas não fazem commit. Assim evitamos conflitos.

## Se a cota acabar no meio

O que já foi gravado em disco não se perde. Na pior hipótese, perde-se a entidade que estava sendo escrita.

1. **Enquanto a cota não renova:** não é preciso fazer nada. **Não** rode `git checkout .`, `git reset --hard` nem `git clean`: esses comandos apagam o trabalho que ainda não entrou num commit.
2. **Quando renovar:** abra o Claude Code na pasta do projeto e diga **"retome a pesquisa"**. O `CLAUDE.md` instrui o agente a:
   1. rodar `git status` para ver o que foi gravado depois do último commit;
   2. listar as tarefas `em-andamento` em `pesquisa/fila/`;
   3. ler o diário de cada uma e comparar com os arquivos em `dados/`;
   4. revalidar as entidades gravadas depois do último commit, porque podem estar incompletas;
   5. continuar do ponto registrado no diário.
3. **Para conferir você mesmo:** `git status` mostra o que mudou desde o último checkpoint, e o cabeçalho de cada arquivo em `pesquisa/fila/` mostra o estado da tarefa.
