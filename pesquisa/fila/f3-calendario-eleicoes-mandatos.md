---
id: f3-calendario-eleicoes-mandatos
escopo: "Fase 3 (D55, D56): datas de 2026 e 2027 nas etapas das eleições e das posses, periodicidade dos conselhos e conferências, e início dos mandatos da cúpula"
status: pendente
depende_de: [f2-fechamento]
---

Leia `docs/decisoes.md` (D11, D14, D40, D55 a D59) e a parte de processos de `docs/modelo-de-dados.md` (campo `datas` da etapa).

## O que fazer

1. **Eleições e posses.** Em `proc:eleicao-geral` e nos processos ligados (registro de candidatura, diplomação, nova eleição), preencha `datas` com as ocorrências de 2026 e 2027: convenções, pedido de registro, propaganda, primeiro e segundo turno (CF, art. 77: primeiro e último domingo de outubro), diplomação (pela resolução do calendário eleitoral do TSE de 2026, se a fonte oficial estiver acessível), posse do Presidente e dos governadores (CF, arts. 28 e 82, com a redação da EC 111/2021, que mudou as datas a partir de 2027) e início da legislatura (1º/2/2027). A eleição municipal de 2028 fica fora da janela (D55).
2. **Conselhos e conferências com periodicidade em lei** (conferências de saúde e de assistência social, conselhos com reunião ordinária de data fixa): só se a norma ou ato oficial der a data de 2026 ou 2027.
3. **Mandatos da cúpula (D56).** Preencha `vigencia.de` nas relações `ocupa` de pessoas (cerca de 500 estão sem), com a data da posse: para cargos eletivos, a data que a CF fixa para a posse depois da eleição que elegeu a pessoa (ex.: deputados federais eleitos em 2022: 1º/2/2023; governadores: 1º/1/2023); para nomeados, a data do ato de posse ou de nomeação em fonte oficial. Se a pessoa assumiu depois (suplente, vice que sucedeu, eleição suplementar), a data é a da posse dela. Quando não achar fonte, deixe vazio e anote. Comece pela cúpula federal (Presidente, Vice, ministros de Estado, ministros dos tribunais superiores, PGR, AGU, Mesas), depois governadores e senadores, depois deputados.

Regras extras: entidades editadas: `verificacao: { status: "coletado", tarefa: "f3-calendario-eleicoes-mandatos", em, notas }`. Para muitas relações iguais (mesma regra, mesma fonte), um script de edição em lote é aceitável, desde que grave a fonte em cada relação e o diário diga a regra usada.

## Diário
