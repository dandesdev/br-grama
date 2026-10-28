---
id: f2-financas-publicas
escopo: "Fase 2 (D49): Lei 4.320/1964, Lei de Responsabilidade Fiscal, Lei 10.180/2001 e regime fiscal da LC 200/2023"
status: pendente
depende_de: [f0-dinheiro, f0-dinheiro-complementar, f1-orcamento]
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 4.320/1964 (normas gerais de direito financeiro): crie se não existir
- LC 101/2000 (Lei de Responsabilidade Fiscal): `norma:lc-101-2000`
- Lei 10.180/2001 (sistemas de planejamento e orçamento, administração financeira, contabilidade e controle interno do Executivo federal): crie se não existir
- LC 200/2023 (regime fiscal sustentável): crie se não existir

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] Etapas da despesa (Lei 4.320: empenho, liquidação, pagamento; restos a pagar) como processo `proc:execucao-da-despesa`, porque o site já mostra esses valores (fase 1, D46). Confira se `proc:` do ciclo orçamentário existe (Grep "orcament" em `dados/processos/`) e acrescente as etapas da lei que faltarem.
- [ ] LRF: relatórios (RREO, RGF) como `obj:`, quem os publica e quem fiscaliza (Tribunais de Contas, art. 59), limites de pessoal por Poder (art. 20) como relações ou `detalhes`, e o que acontece quando o limite é ultrapassado (arts. 22 e 23), se couber como etapa.
- [ ] Lei 10.180: órgãos centrais dos sistemas (Secretaria de Orçamento Federal, Secretaria do Tesouro Nacional, CGU como órgão central do controle interno) e as relações de supervisão técnica com os órgãos setoriais (agregados).
- [ ] LC 200: o limite de despesas por Poder e órgão (como relação ou `detalhes` no objeto do orçamento) e o que a lei manda o Executivo publicar.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:secretaria-do-tesouro-nacional`, `org:cgu`, `org:ministerio-do-planejamento-e-orcamento`, `org:cmo`, `org:tcu`, objetos de lei orçamentária (`obj:loa`, `obj:ldo`, `obj:ppa`; confira os ids).
- As métricas e os fluxos (`dados/metricas/`, `dados/fluxos/`) são gerados por script: não os edite.
- Em paralelo: `f2-judiciario` e `f2-eleicoes`.

## Cobertura

## Diário
