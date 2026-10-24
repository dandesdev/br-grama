---
id: verificacao-f0-complementos
escopo: "Revisão das entidades criadas durante as revisões (verificacao.status = \"coletado\" e tarefa verificacao-*)"
status: pendente
depende_de: []
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Conferir contra a fonte cada uma das entidades abaixo, criadas por revisores (a tarefa que a criou está em `verificacao.tarefa`; leia o diário dessa tarefa em `pesquisa/fila/` para saber por quê). Ao conferir, troque `verificacao` para `status: "verificado"`, `tarefa: "verificacao-f0-complementos"` e nota dizendo qual revisão a criou e o que foi conferido.
  - `aviso:posse-jhonatan-de-jesus-tcu-data` (verificacao-f0-controle)
  - `fonte:agencia-senado-nomeacao-vital-do-rego-tcu-2014` (verificacao-f0-controle)
  - `fonte:agencia-senado-posse-vital-do-rego-tcu-2015` (verificacao-f0-controle)
  - `fonte:alesc-autografo-plc-1-2026` (verificacao-f0-controle)
  - `fonte:oab-noticia-posse-simonetti-2022` (verificacao-f0-funcoes-essenciais)
  - `fonte:oab-noticia-totalizacao-eleicoes-2026` (verificacao-f0-funcoes-essenciais)
  - `fonte:senado-msf-160-2001` (verificacao-f0-controle)
  - `fonte:stf-adi-3026-acordao` (verificacao-f0-funcoes-essenciais)
  - `fonte:stf-adi-7881` (verificacao-f0-eleicoes)
  - `fonte:stf-constituicao-e-o-supremo-art-130` (verificacao-f0-funcoes-essenciais)
  - `fonte:stf-re-729744` (verificacao-piloto-municipal)
  - `fonte:tcu-noticia-posse-vital-do-rego` (verificacao-f0-controle)
  - `norma:pb-lei-12738-2023` (verificacao-f0-funcoes-essenciais)
  - `norma:resolucao-tcu-373-2024` (verificacao-f0-controle)
  - `norma:rj-rio-de-janeiro-lei-289-1981` (verificacao-piloto-municipal)
  - `norma:senado-regulamento-administrativo` (verificacao-f0-controle)
  - `obj:acao-civil-publica` (verificacao-f0-funcoes-essenciais)
  - `obj:acao-penal-publica` (verificacao-f0-funcoes-essenciais)
  - `org:auditoria-do-senado-federal` (verificacao-f0-controle)
  - `org:secretaria-de-auditoria-interna-do-tcu` (verificacao-f0-controle)
  - `rel:arquetipo-estadual-ministerio-publico-promove-acao-civil-publica` (verificacao-f0-funcoes-essenciais)
  - `rel:arquetipo-estadual-ministerio-publico-promove-acao-penal-publica` (verificacao-f0-funcoes-essenciais)
  - `rel:auditoria-do-senado-controla-internamente-senado` (verificacao-f0-controle)
  - `rel:mpu-promove-acao-civil-publica` (verificacao-f0-funcoes-essenciais)
  - `rel:mpu-promove-acao-penal-publica` (verificacao-f0-funcoes-essenciais)
  - `rel:presidente-do-conselho-federal-da-oab-oficia-junto-a-cnj` (verificacao-f0-funcoes-essenciais)
  - `rel:presidente-do-conselho-federal-da-oab-oficia-junto-a-cnmp` (verificacao-f0-funcoes-essenciais)
  - `rel:procurador-geral-da-republica-oficia-junto-a-cnj` (verificacao-f0-funcoes-essenciais)
  - `rel:procurador-regional-eleitoral-designa-promotor-eleitoral` (verificacao-f0-eleicoes)
  - `rel:seaud-controla-internamente-tcu` (verificacao-f0-controle)
  - `rel:tcu-representa-a-poder-executivo-federal` (verificacao-f0-controle)
  - `rel:tcu-representa-a-poder-judiciario` (verificacao-f0-controle)
  - `rel:tcu-representa-a-poder-legislativo-federal` (verificacao-f0-controle)
- [ ] Os resumos dizem o que a fonte diz, em palavras simples, sem ampliar nem restringir
- [ ] Se alguma delas não se sustentar, corrija; se não houver fonte, use `confianca: "indisponivel"` com aviso, ou apague a entidade e as referências a ela, registrando no diário.

## Diário
