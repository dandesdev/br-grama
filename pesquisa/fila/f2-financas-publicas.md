---
id: f2-financas-publicas
escopo: "Fase 2 (D49): Lei 4.320/1964, Lei de Responsabilidade Fiscal, Lei 10.180/2001 e regime fiscal da LC 200/2023"
status: em-andamento
depende_de: [f0-dinheiro, f0-dinheiro-complementar, f1-orcamento]
iniciada_em: 2026-11-11
concluida_em: null
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

- 2026-11-11 23:01 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), D01 a D51, modelo de dados, protocolo, vocabulários e os quadros de f2-funcoes-essenciais e f2-legislativo-tcu
- 2026-11-11 23:11 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-financas-publicas/ (Planalto só respondeu com curl --http1.1 e user-agent de navegador): l4320.htm, lcp101.htm, l10180.htm, lcp200.htm, iguais byte a byte às cópias de 2026-10-23 fora o script do servidor; compilacao_ate segue LC 208/2024 (Lei 4.320), LC 224/2025 (LRF), Lei 13.464/2017 (Lei 10.180) e LC 223/2025 (LC 200); nenhuma alteração entre 2026-10-01 e hoje. Também d11330.htm (CGU, alterações até o Decreto 12.776/2025) e d11353.htm (MPO, até o Decreto 13.090/2026, de 4/8/2026)
- 2026-11-11 23:11 — ADI 2238 (LRF): decisão lida na reprodução do portal de legislação do Senado (cópia em pesquisa/brutos/senado/2026-11-11-f2-financas-publicas/adi2238-senado.html): inconstitucionais o art. 9º, § 3º, o art. 23, § 2º, e os arts. 56, caput, e 57, caput; art. 23, § 1º, sem redução de texto
- 2026-11-11 23:11 — gravado fonte:senado-legislacao-adi-2238-decisao
- 2026-11-11 23:11 — gravado org:sistema-de-planejamento-e-de-orcamento-federal
- 2026-11-11 23:11 — gravado org:sistema-de-administracao-financeira-federal
- 2026-11-11 23:11 — gravado org:sistema-de-contabilidade-federal
- 2026-11-11 23:11 — gravado org:sistema-de-controle-interno-do-poder-executivo-federal
- 2026-11-11 23:11 — gravado org:secretaria-de-orcamento-federal
- 2026-11-11 23:11 — gravado org:secretaria-federal-de-controle-interno
- 2026-11-11 23:11 — gravado org:comissao-de-coordenacao-de-controle-interno
- 2026-11-11 23:11 — gravado org:orgaos-setoriais-de-planejamento-e-orcamento
- 2026-11-11 23:11 — gravado org:orgaos-setoriais-de-administracao-financeira
- 2026-11-11 23:11 — gravado org:orgaos-setoriais-de-contabilidade
- 2026-11-11 23:11 — gravado org:orgaos-setoriais-de-controle-interno
- 2026-11-11 23:11 — npm run -s validar sem erros (lote 1)
- 2026-11-11 23:12 — gravado rel:ministerio-do-planejamento-e-orcamento-dirige-sistema-de-planejamento-e-de-orcamento-federal
- 2026-11-11 23:12 — gravado rel:secretaria-de-orcamento-federal-coordena-orgaos-setoriais-de-planejamento-e-orcamento
- 2026-11-11 23:12 — gravado rel:secretaria-do-tesouro-nacional-dirige-sistema-de-administracao-financeira-federal
- 2026-11-11 23:12 — gravado rel:secretaria-do-tesouro-nacional-dirige-sistema-de-contabilidade-federal
- 2026-11-11 23:12 — gravado rel:secretaria-do-tesouro-nacional-coordena-orgaos-setoriais-de-administracao-financeira
- 2026-11-11 23:12 — gravado rel:secretaria-do-tesouro-nacional-coordena-orgaos-setoriais-de-contabilidade
- 2026-11-11 23:12 — gravado rel:cgu-dirige-sistema-de-controle-interno-do-poder-executivo-federal
- 2026-11-11 23:12 — gravado rel:secretaria-federal-de-controle-interno-coordena-orgaos-setoriais-de-controle-interno
- 2026-11-11 23:12 — gravado rel:comissao-de-coordenacao-de-controle-interno-coordena-sistema-de-controle-interno-do-poder-executivo-federal
- 2026-11-11 23:12 — gravado rel:orgaos-setoriais-de-planejamento-e-orcamento-integra-sistema-de-planejamento-e-de-orcamento-federal
- 2026-11-11 23:12 — gravado rel:orgaos-setoriais-de-administracao-financeira-integra-sistema-de-administracao-financeira-federal
- 2026-11-11 23:12 — gravado rel:orgaos-setoriais-de-contabilidade-integra-sistema-de-contabilidade-federal
- 2026-11-11 23:12 — gravado rel:orgaos-setoriais-de-controle-interno-integra-sistema-de-controle-interno-do-poder-executivo-federal
- 2026-11-11 23:12 — npm run -s validar sem erros (lote 2); verbo 'coordena' usado para a supervisão técnica do órgão central sobre os setoriais (ver proposta de vocabulário no fim)
- 2026-11-11 23:16 — gravado obj:rreo
- 2026-11-11 23:16 — gravado obj:rgf
- 2026-11-11 23:16 — gravado obj:balanco-do-setor-publico-nacional
- 2026-11-11 23:16 — gravado obj:limites-da-divida-publica
- 2026-11-11 23:16 — gravado org:unidades-orcamentarias-do-poder-executivo-federal
- 2026-11-11 23:16 — gravado rel:secretaria-do-tesouro-nacional-publica-rreo
- 2026-11-11 23:16 — gravado rel:presidente-da-republica-publica-rgf
- 2026-11-11 23:16 — gravado rel:mesa-da-camara-dos-deputados-publica-rgf
- 2026-11-11 23:16 — gravado rel:mesa-do-senado-federal-publica-rgf
- 2026-11-11 23:16 — gravado rel:tcu-publica-rgf
- 2026-11-11 23:16 — gravado rel:poder-judiciario-publica-rgf
- 2026-11-11 23:16 — gravado rel:procurador-geral-da-republica-publica-rgf
- 2026-11-11 23:16 — gravado rel:secretaria-do-tesouro-nacional-publica-balanco-do-setor-publico-nacional
- 2026-11-11 23:16 — gravado rel:tcu-fiscaliza-rgf
- 2026-11-11 23:16 — gravado rel:tcu-fiscaliza-rreo
- 2026-11-11 23:16 — gravado rel:arquetipo-estadual-tce-fiscaliza-rgf
- 2026-11-11 23:16 — gravado rel:arquetipo-estadual-tce-fiscaliza-rreo
- 2026-11-11 23:16 — gravado rel:tcu-fiscaliza-limites-da-divida-publica
- 2026-11-11 23:16 — gravado rel:secretaria-do-tesouro-nacional-monitora-limites-da-divida-publica
- 2026-11-11 23:16 — gravado rel:ministro-da-fazenda-presta-contas-a-cmo
- 2026-11-11 23:16 — gravado rel:banco-central-presta-contas-a-congresso-nacional
- 2026-11-11 23:16 — npm run -s validar sem erros (lote 3: relatórios da LRF, Balanço do Setor Público Nacional, limites da dívida, conjunto de unidades orçamentárias, relações de publicação e fiscalização)
- 2026-11-11 23:16 — verbo 'publica' usado para relatórios (RREO, RGF, balanço), embora a definição fale em norma; proposta no fim
- 2026-11-11 23:17 — gravado proc:execucao-da-despesa
- 2026-11-11 23:17 — gravado proc:reconducao-da-despesa-com-pessoal-ao-limite
- 2026-11-11 23:17 — npm run -s validar sem erros (lote 4: processos); ação da etapa sancoes encurtada para caber em 120 caracteres
- 2026-11-11 23:17 — decisão: proc:execucao-da-despesa usa como ator o conjunto org:unidades-orcamentarias-do-poder-executivo-federal; nos outros Poderes as etapas são as mesmas (dito nos detalhes). Limitação de empenho com os quatro Poderes/MPU como atores; ADI 2238 citada para o art. 9º, § 3º, e o art. 23, §§ 1º e 2º
