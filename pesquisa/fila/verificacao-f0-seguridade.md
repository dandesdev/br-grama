---
id: verificacao-f0-seguridade
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-seguridade\""
status: em-andamento
depende_de: [f0-seguridade]
iniciada_em: 2026-10-27
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-seguridade"` conferidas contra a fonte: 22 órgãos (SUS, Suas, INSS, Anvisa, Previc, Funpresp-Exe, conselhos, CIT e CIB, secretarias e unidades gestoras dos arquétipos), 26 relações, 18 normas e 4 objetos (piso da saúde, FNS, Fundo do RGPS, FNAS).
- [ ] Termos criados depois da coleta (aplique):
  - relação `dirige`: as três relações de direção do SUS (`rel:ministerio-da-saude-coordena-sus` e as das secretarias de saúde dos arquétipos) passam de `coordena` para `dirige` (troque verbo e id; art. 198, I; Lei 8.080/1990, art. 9º)
  - `fiscaliza` agora cobre controle social, e `julga-recursos-contra` agora cobre órgão administrativo: confira se as relações dos conselhos e do CRPS ficaram coerentes com as definições novas
  - `fundacao-publica` agora cobre direito privado: confira a Funpresp-Exe (Lei 12.618/2012)
  - As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-seguridade"`.
- [ ] Não mude o `contido_em` das autarquias e fundações (INSS, Anvisa, Previc, Funpresp-Exe): a nova regra D39 será aplicada pela tarefa f0-administracao-indireta. Confira só as fontes.
- [ ] Pontos do coletor a conferir:
  - unidade gestora única do regime próprio da União: ainda não existe em 2026-10-01 (EC 103/2019; Decreto 10.620/2021, centralização suspensa até 31/12/2026). Está registrado como fato com fonte?
  - normas que citam ministérios extintos (Decreto 10.995, Lei 9.717, Lei 8.742, art. 6º, Decreto 7.808): a vinculação atual vem dos decretos de estrutura de 2023 e 2026?
  - regra dos 70% para municípios (Lei 8.142, art. 3º, § 2º) e o rateio da LC 141/2012, art. 17
  - inferências marcadas: posição dos conselhos e das unidades gestoras dos arquétipos no organograma; tipo `autarquia` das unidades gestoras
  - seguridade sem nó próprio (art. 194 citado no SUS, no Suas e no INSS) e orçamento da seguridade dentro de `obj:loa`: fica claro para o leitor?
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
- 2026-10-27 — iniciada; lidos CLAUDE.md, instruções de verificação, modelo, protocolo, decisões e o diário de f0-seguridade; escopo: 70 entidades (22 órgãos, 26 relações, 18 normas, 4 objetos)
