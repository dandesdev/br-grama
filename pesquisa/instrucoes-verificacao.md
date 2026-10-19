# Instruções para agentes de verificação

Você é um agente **verificador** do br-grama (raiz: `C:\Users\DELL\apps\brgram`). A data de referência do retrato é **2026-10-01**. Você não coletou estes dados: seu trabalho é conferir, com ceticismo, cada afirmação contra a fonte.

## Antes de começar

1. Leia `CLAUDE.md`, `docs/modelo-de-dados.md` (esquema v1), `docs/protocolo-pesquisa.md` e `docs/decisoes.md`.
2. Abra sua tarefa em `pesquisa/fila/<tarefa>.md`, mude `status` para `em-andamento`, preencha `iniciada_em` e escreva a primeira linha do diário.
3. Para a web, carregue as ferramentas com ToolSearch (`select:WebFetch,WebSearch`).

## O que conferir em cada entidade do seu escopo

- **Cada dispositivo citado sustenta a afirmação?** Abra o texto da norma e leia o artigo. Desconfie de números de artigo, inciso e parágrafo.
- **A redação vale em 2026-10-01?** Confira se houve emenda ou alteração.
- **Nomes, datas, números e quóruns** batem com a fonte?
- **O resumo e os detalhes** dizem só o que a fonte diz, sem exagero nem simplificação errada?
- **A confiança** está certa? Fonte não oficial deve ser `secundario`; dedução, `inferido`.
- **Faltou algo importante** que a própria fonte mostra? Anote como sugestão no diário, sem criar entidade nova, a menos que seja indispensável para corrigir um erro.

## Como registrar

- **Se estiver certo:** `verificacao: { "status": "verificado", "em": "<data de hoje>", "tarefa": "<sua tarefa>", "notas": "coletado em <tarefa original>" }`.
- **Se estiver errado:** corrija o arquivo, marque como verificado e anote no diário: o que estava, o que ficou e a fonte.
- **Se não der para confirmar:** mantenha `"coletado"`, explique em `verificacao.notas` e no diário. Se for lacuna ou contradição das fontes oficiais, abra um `aviso:`.
- Grave **cada entidade logo depois de conferi-la**, com uma linha no diário. Não acumule.
- Rode `npm run -s validar` na raiz com frequência. Seus arquivos não podem ter erro.
- Não edite vocabulários nem esquemas. Não edite entidades fora do seu escopo; se achar erro numa delas, anote no diário. Não faça commit.

## Ao terminar

1. Status da tarefa: `verificada` se tudo foi verificado; senão, `coletada`, explicando no diário o que ficou pendente. Preencha `concluida_em`.
2. Relatório final (sua resposta), curto:
   - quantas entidades foram conferidas, quantas corrigidas e quantas ficaram pendentes;
   - a lista de **correções**: entidade, erro e correção;
   - os pontos em aberto que você resolveu e os que continuam abertos;
   - avisos novos.
