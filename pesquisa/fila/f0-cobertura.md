---
id: f0-cobertura
escopo: "Fatia 0: varredura da CF artigo por artigo (D04): o que a Constituição prevê de estrutura do Estado e ainda não está no mapa"
status: pendente
depende_de: []
iniciada_em: null
concluida_em: null
---

## Como trabalhar

Esta tarefa não cria entidades. Ela lê a CF inteira e diz, artigo por artigo, o que falta. As lacunas viram tarefas de coleta depois.

Ponto de partida: `npm run -s cobertura` gera `pesquisa/cobertura-cf.md`, com os artigos que nenhuma entidade cita em `fontes` e a contagem dos que são citados. Citar não é cobrir; não citar não é lacuna. Rode de novo no fim, porque outras tarefas podem mudar os dados enquanto você trabalha.

Critério de escopo (D04, D05): entra no mapa todo **órgão, cargo, competência e procedimento** que a CF prevê para a estrutura do Estado. Direitos, princípios e regras materiais (ex.: direitos sociais, princípios da ordem econômica, proteção da família) ficam fora, **a menos que** o artigo crie um órgão, um cargo, um sistema, um fundo, uma competência de um ente ou órgão, ou um procedimento entre órgãos (ex.: art. 224 cria o Conselho de Comunicação Social; art. 103-A dá ao STF a súmula vinculante; art. 198 organiza o SUS).

## Entregáveis

- [ ] Para cada artigo vigente da CF (arts. 1º a 250, com os de letra) e do ADCT, uma classificação no quadro abaixo:
  - `coberto`: há entidade que representa o que o artigo prevê (cite o id)
  - `parcial`: há entidade, mas falta parte (diga o quê)
  - `lacuna`: o artigo prevê órgão, cargo, competência ou procedimento que não está no mapa (diga o quê e proponha id e tipo)
  - `fora`: direito, princípio ou regra material sem órgão, cargo, competência ou procedimento próprio (uma palavra de motivo basta)
  - `transitorio-esgotado` (só ADCT): regra que já produziu efeito e não estrutura o Estado em 2026-10-01
  Artigos citados no relatório também precisam de classificação: confira por amostragem que a citação de fato cobre o artigo, e classifique todos.
- [ ] Lista das lacunas agrupadas em propostas de tarefa de coleta (tema, artigos, entidades propostas, fontes prováveis), em ordem de importância para quem quer entender como o Estado funciona.
- [ ] Percentual de cobertura: (coberto + parcial/2) / (total − fora − transitorio-esgotado), para CF e ADCT separados.
- [ ] Erros de dispositivo achados no caminho (entidade que cita artigo errado): liste com o id; não corrija.

## Quadro

| Artigo | Classificação | Entidade ou o que falta |
|---|---|---|

## Diário
