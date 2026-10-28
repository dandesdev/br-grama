---
id: verificacao-f1-orcamento
escopo: "Revisão independente das métricas de orçamento de 2025, dos fluxos e dos textos da fase 1"
status: pendente
depende_de: [f1-orcamento]
---

Siga `pesquisa/instrucoes-verificacao.md` no que couber. **Não edite nada em `dados/`, `esquema/`, `docs/`, `scripts/` nem `web/`**: as métricas e os fluxos são gerados por `scripts/importar/tesouro-despesas.ts`, e o coordenador aplica as correções no script. Escreva só no diário deste arquivo e no relatório final.

## Entregáveis

- [ ] **Recortes das métricas.** Para cada item de `METRICAS` em `scripts/importar/tesouro-despesas.ts`, confira no resumo bruto (`pesquisa/brutos/tesouro-transparente/2026-10-28/despesas-transferencias-2025-agregado.csv`, colunas `UNIDADE_ORCAMENTARIA_CODIGO` e `UNIDADE_ORCAMENTARIA_DESCRICAO`) que a unidade, o órgão orçamentário ou o código de Poder corresponde mesmo à entidade em `dados/` (nome, sigla). Atenção especial aos TREs (14102 a 14128, por UF), TRTs (15102 a 15125) e TRFs (12102 a 12107). Liste divergências.
- [ ] **Entidades sem métrica.** Procure em `dados/orgaos/` órgãos federais que têm unidade orçamentária própria no resumo e ficaram sem métrica (ex.: autarquias, fundações, agências). Liste com o código.
- [ ] **Fluxos.** Para cada item de `FLUXOS`, leia a relação apontada (`dados/relacoes/`) e diga se as ações e modalidades escolhidas medem o que a relação descreve. Aponte o que sobra ou falta (ex.: ações de outras unidades que também pagam o mesmo repasse).
- [ ] **Valores fora do Executivo.** Para pelo menos cinco métricas de fora do Executivo (ex.: Câmara, Senado, TCU, STF, MPU, Justiça do Trabalho), compare o pagamento de 2025 com outra fonte oficial (relatório de gestão fiscal, portal de transparência do próprio órgão, SIGA Brasil). Diferenças de método são aceitáveis se explicadas; anote a fonte, o valor e a diferença.
- [ ] **Textos.** Leia D44 a D48 em `docs/decisoes.md`, os textos da aba Dinheiro (`web/src/dinheiro.ts`), do painel (`web/src/painel.ts`, métodos `orcamento`, `fluxo` e `mostrarLegendaOrcamento`) e as notas geradas pelo script. Aponte afirmações sem base ou imprecisas (ex.: o que a CF diz sobre os orçamentos fiscal, da seguridade e de investimento, art. 165, § 5º; o que é restos a pagar; se Caixa, BB e Petrobras de fato não dependem do Tesouro).

## Relatório

Ao terminar, mude `status` para `verificada`, preencha `concluida_em` e escreva no diário uma lista numerada de achados, cada um com: o que está errado, a evidência (arquivo, linha do resumo ou URL) e a correção proposta.

## Diário
