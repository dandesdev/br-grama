---
id: f2-executivo
escopo: "Fase 2 (D49): Lei 14.600/2023 (Presidência e ministérios), Decreto-Lei 200/1967 e leis das agências reguladoras"
status: em-andamento
depende_de: [f0-executivo, f0-administracao-indireta]
iniciada_em: 2026-10-28
concluida_em: null
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 14.600/2023 (organização da Presidência e dos ministérios), texto compilado vigente em 2026-10-01: `norma:lei-14600-2023`
- Decreto-Lei 200/1967 (organização da administração federal; administração indireta; supervisão ministerial): `norma:decreto-lei-200-1967`
- Lei 9.986/2000 (recursos humanos das agências reguladoras) e Lei 13.848/2019 (lei geral das agências reguladoras): crie as normas se não existirem

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] Lei 14.600: para cada ministério e órgão da Presidência, as áreas de competência em `detalhes` (D50), com o artigo e os incisos nas fontes; os órgãos que a lei cria fora dos ministérios (ex.: conselhos ligados à Presidência) e as relações da lei que ligam órgãos entre si. Os ministérios já existem; edite-os (item 7 da seção "Fase 2").
- [ ] Decreto-Lei 200: conceitos de autarquia, empresa pública, sociedade de economia mista e fundação pública (confira se os termos em `esquema/vocabularios/tipos-orgao.json` dizem o mesmo; se não, proponha no relatório, não edite), supervisão ministerial (`vincula-se`, D39) e o que mais o decreto-lei estrutura e ainda está em vigor.
- [ ] Agências reguladoras federais (a Lei 13.848, art. 2º, lista as agências): as que faltam no mapa (procure ANEEL, Anatel, ANS, ANA, ANTT, ANTAQ, ANAC e Ancine; ANP, ANM e Anvisa já existem), cada uma com `contido_em` no Poder Executivo federal e `vincula-se` ao ministério (D39), com a lei de criação. Diretoria colegiada (diretor-presidente e diretores, agregados), mandato, escolha (indicação do Presidente e aprovação do Senado, Lei 9.986) e a relação com o Senado.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: todos os ministérios, `org:presidencia-da-republica`, `org:casa-civil`, `org:anp`, `org:anm`, `org:anvisa`, `cargo:ministro-de-estado`, `cargo:presidente-da-republica`.
- Em paralelo: `f2-funcoes-essenciais` (MPU, DPU, AGU) e `f2-legislativo-tcu`. Não edite a AGU nem entidades do Legislativo.
- A revisão da fase 1 (`verificacao-f1-orcamento`) roda ao mesmo tempo, mas não edita `dados/`. As métricas em `dados/metricas/` são geradas por script: não as edite.

## Cobertura

## Diário
- 2026-10-28 08:37 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), D01 a D50, modelo de dados, protocolo e vocabulários
- 2026-10-28 08:55 — cópias baixadas em pesquisa/brutos/planalto-leis/2026-10-28-f2-executivo/ (Lei 14.600, DL 200, Lei 9.986, Lei 13.848, leis de criação das agências e decretos de estrutura dos ministérios supervisores); curl falhou (conexão resetada), baixado com Invoke-WebRequest
- 2026-10-28 08:48 — gravado norma:mp-1154-2023 (para datar a criação dos ministérios de 2023)
- 2026-10-28 08:49 — gravado norma:lei-14816-2024
- 2026-10-28 08:51 — editados os 31 ministérios do art. 17 (exceto a CGU): detalhes com as áreas de competência da Lei 14.600 (D50), incisos nas fontes e, quando criados em 2023, vigencia.de pela MP 1.154/2023 (arts. 51 a 53) ou pela MP 1.187/2023 (MEMP)
