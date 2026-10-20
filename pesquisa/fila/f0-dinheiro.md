---
id: f0-dinheiro
escopo: "Fatia 0: tributação, repartição de receitas, finanças públicas e orçamento (CF, arts. 145 a 169) e Banco Central"
status: pendente
depende_de: []
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Competências tributárias (arts. 145 a 156-B): um `obj:tributo-<slug>` para cada tributo previsto na CF em 2026-10-01 (impostos, taxas, contribuição de melhoria, empréstimo compulsório, contribuições), com relações `tem-competencia` do ente que institui (`ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`). A reforma tributária (EC 132/2023) criou o IBS e a CBS e extingue tributos aos poucos: registre o que vigora em 2026-10-01 e a transição, com `vigencia`. Confira a regulamentação (LC 214/2025 e o que veio depois) e o Comitê Gestor do IBS: nome oficial, natureza e lei que o instituiu (não deduza o número da lei).
- [ ] Limitações ao poder de tributar (arts. 150 a 152): só as principais (legalidade, anterioridade, imunidades), como notas ou objetos, sem detalhar cada imunidade.
- [ ] Repartição das receitas (arts. 157 a 162): FPE, FPM e as demais transferências constitucionais, como relações entre entes com o percentual e o dispositivo. `obj:fpm` e `obj:fpe` (ou nomes oficiais), com o órgão que calcula as cotas (TCU, art. 161, parágrafo único).
- [ ] Ciclo orçamentário (arts. 165 a 169): `obj:ppa`, `obj:ldo`, `obj:loa` e o processo `proc:ciclo-orcamentario` (do projeto do Executivo à execução e ao julgamento das contas), com a Comissão Mista de Orçamento (art. 166, § 1º; `org:cmo` se ainda não existir) e as emendas parlamentares individuais e de bancada impositivas (art. 166, §§ 9º a 20). Use `remete_a` onde uma etapa seguir o rito de outro processo. Prazos do ADCT, art. 35, § 2º.
- [ ] Banco Central (art. 164 e LC 179/2021): complete `org:banco-central` (a tarefa f0-executivo pode ter criado um esboço; esta tarefa passa a ser dona dele), com natureza jurídica, autonomia, `cargo:presidente-do-banco-central` e diretoria (mandatos; nomeação pelo Presidente após aprovação do Senado), ocupante em 2026-10-01. Conselho Monetário Nacional (`org:cmn`, Lei 4.595/1964 e alterações), composição.
- [ ] Tesouro Nacional e Receita Federal: órgãos mínimos (`org:secretaria-do-tesouro-nacional`, `org:receita-federal`), `contido_em` o ministério conforme a estrutura regimental vigente, com link em `estrutura_continua`.
- [ ] Regras fiscais: só o que está na CF ou em LC estruturante (LRF, LC 101/2000; regime fiscal da LC 200/2023), como objetos ou notas, sem números de metas anuais.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-executivo: `org:ministerio-da-fazenda`, `org:ministerio-do-planejamento-e-orcamento`, `org:banco-central` (esboço)
- f0-competencias: `ente:arquetipo-estadual`, `ente:arquetipo-municipal`
- f0-controle: competências do TCU
- Já existem: `ente:uniao`, `ente:<uf>`, `org:congresso-nacional`, `obj:lei-ordinaria`, `obj:lei-complementar`, `proc:lei-ordinaria`, `obj:contas-anuais-do-presidente-da-republica`

## Diário
