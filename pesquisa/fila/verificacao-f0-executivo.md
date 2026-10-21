---
id: verificacao-f0-executivo
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-executivo\""
status: pendente
depende_de: [f0-executivo]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-executivo"` conferidas contra a fonte: 38 órgãos e as estruturas regimentais, 38 ministros (pessoa + `ocupa`), os dois conselhos, as relações do art. 84, os objetos, as normas e os três processos (etapa por etapa)
- [ ] Ministros em 2026-10-01: para cada um, confirme no DOU que não houve exoneração entre a nomeação e 2026-10-01 (a busca do in.gov.br às vezes não acha atos; tente também a busca por nome e a edição do dia). Confira interinos e afastamentos.
- [ ] Filiação partidária: o coletor só confirmou a dos parlamentares licenciados. Procure fonte oficial para os demais (TSE, filiação partidária); sem fonte oficial, mantenha `filiacoes: []` com nota. André de Paula: a Wikipedia diz PSD, sem confirmação oficial.
- [ ] Campos e termos criados depois da coleta:
  - `orgao_exercicio` foi preenchido pelo coordenador, por script, a partir da `condicao` das 38 relações `ocupa`. Confira cada um; a `condicao` pode ficar mais curta, sem repetir a pasta.
  - relação `celebra`: o Presidente celebra tratados (art. 84, VIII). Hoje está como `propoe` em `rel:presidente-propoe-tratado-internacional`; troque o verbo e o id.
- [ ] Pontos do coletor a conferir:
  - Decreto 13.131, de 30/9/2026, alterou a estrutura regimental do Ministério da Justiça (Decreto 11.348/2023): a norma vigente em 2026-10-01 está certa em `estrutura_continua`?
  - `org:banco-central` com `contido_em` no Poder Executivo marcado como `inferido`, e o aviso `aviso:govbr-lista-ministerios-inclui-banco-central`
  - "prover cargos públicos" apontando para `org:poder-executivo-federal` (`inferido`)
  - "Ministro do Planejamento" no CDN (art. 91, VIII) correspondendo ao do Planejamento e Orçamento
  - processos: a falta de parecer obrigatório dos conselhos antes da intervenção é leitura do texto da CF

## Diário
