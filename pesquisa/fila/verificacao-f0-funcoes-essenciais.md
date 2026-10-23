---
id: verificacao-f0-funcoes-essenciais
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-funcoes-essenciais\""
status: pendente
depende_de: [f0-funcoes-essenciais]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-funcoes-essenciais"` conferidas contra a fonte: 15 órgãos, 13 cargos, 3 pessoas, 42 relações, 7 normas, 8 fontes, 1 objeto e 1 aviso. Inclui `org:ministerio-publico-da-uniao`, `org:agu` e `cargo:procurador-geral-da-republica`, que já estavam verificados e foram completados pelo coletor.
- [ ] Ocupantes em 2026-10-01: Paulo Gonet (PGR), Tarcijany Linhares (DPGF) e Beto Simonetti (Presidente do Conselho Federal da OAB). Confira no DOU, ou na fonte oficial da OAB, que não houve troca até 2026-10-01. Procure fonte oficial para o nome civil de Beto Simonetti (hoje `secundario`) e para o início do primeiro mandato (hoje `incerta`).
- [ ] Termos criados depois da coleta:
  - `provimento`: a definição de `nomeacao-com-aprovacao-do-senado` agora vale também quando há lista (como no STJ). Troque o provimento de `cargo:defensor-publico-geral-federal` de `nomeacao-a-partir-de-lista` para `nomeacao-com-aprovacao-do-senado` e ponha a lista tríplice em `provimento_nota` (LC 80/1994, art. 6º).
  - `tipo_orgao: "ministerio-publico-orgao-de-controle"`: aplique em `org:cnmp`, hoje `colegiado`.
  - relação `oficia-junto-a`: crie `rel:presidente-do-conselho-federal-da-oab-oficia-junto-a-cnj` (art. 103-B, § 6º) e `rel:presidente-do-conselho-federal-da-oab-oficia-junto-a-cnmp` (art. 130-A, § 4º). O § 6º do art. 103-B também põe o PGR junto ao CNJ: crie `rel:procurador-geral-da-republica-oficia-junto-a-cnj`.
  - relação `promove`: crie os objetos `obj:acao-penal-publica` (art. 129, I) e `obj:acao-civil-publica` (art. 129, III; o inciso também cita o inquérito civil, que pode ficar na nota) e as relações do Ministério Público da União e do arquétipo estadual com eles.
  - As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-funcoes-essenciais"`; a revisão delas fica para a próxima leva.
- [ ] Pontos do coletor a conferir:
  - Jorge Messias com duas relações `ocupa` (Advogado-Geral da União e Ministro de Estado) para um só ato: as notas cruzadas deixam claro que é um cargo só?
  - natureza jurídica da OAB: a frase da ementa da ADI 3026 veio de fonte secundária. Tente o inteiro teor ou a ementa no portal do STF (redir.stf.jus.br ou portal.stf.jus.br/processos); se achar, troque a fonte e a confiança
  - `aviso:destituicao-procurador-geral-de-justica-quorum`: CF (art. 128, § 4º) contra Lei 8.625/1993. É contradição real ou as normas tratam de fases diferentes?
  - `org:mp-junto-ao-tcu` sem `contido_em`: veja se a ADI 789 ou a Lei 8.443/1992 (arts. 80 a 84) bastam para registrar a posição dele
  - valores `inferido` ou `incerta`: exoneração do AGU, promoção a procurador de justiça, data da LC 132/2009
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
