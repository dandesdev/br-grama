---
id: verificacao-f0-executivo
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-executivo\""
status: em-andamento
depende_de: [f0-executivo]
iniciada_em: 2026-10-22
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
- 2026-10-22 14:57 — iniciada; lidos instruções, CLAUDE.md, modelo de dados, protocolo, decisões e diário da coleta. Escopo: 201 entidades (42 org, 38 pessoas, 68 rel, 41 normas, 5 fontes, 3 obj, 3 proc, 1 aviso)
- 2026-10-22 15:40 — método para ministros: (1) decretos de nomeação relidos nas cópias locais (pesquisa/brutos/dou/2026-10-20/), todos batem com nome civil, pasta e data; (2) atos de set-out/2026 reabertos no DOU; (3) varredura mês a mês na busca do in.gov.br (todas as seções, jan/2023 a out/2026, termos "do cargo de Ministro/Ministra de Estado", nenhum mês no limite de 75 resultados) e busca por "cargo de Advogado-Geral da União": nenhuma exoneração de ministro depois de 28/4/2026 (Wellington Dias); (4) despachos do Presidente de 15/9 a 5/10/2026 relidos (férias e afastamentos). Filiação: consulta de filiados do TSE fora do ar (503), listas nominais não estão nos dados abertos do TSE (403/404); sem fonte oficial nova
- 2026-10-22 15:41 — verificado pessoa + rel ocupa: alexandre-padilha, alexandre-silveira (corrigido: férias de 24/9 a 2/10/2026, o período estava em aberto), andre-de-paula (nota: PSD-PE só na 56ª legislatura da Câmara; filiação em 2026 segue sem fonte oficial), bruno-moretti, dario-durigan; condicao encurtada para "Titular da pasta."
