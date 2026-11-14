---
id: f2-financas-publicas
escopo: "Fase 2 (D49): Lei 4.320/1964, Lei de Responsabilidade Fiscal, Lei 10.180/2001 e regime fiscal da LC 200/2023"
status: coletada
depende_de: [f0-dinheiro, f0-dinheiro-complementar, f1-orcamento]
iniciada_em: 2026-11-11
concluida_em: 2026-11-11
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 4.320/1964 (normas gerais de direito financeiro): crie se não existir
- LC 101/2000 (Lei de Responsabilidade Fiscal): `norma:lc-101-2000`
- Lei 10.180/2001 (sistemas de planejamento e orçamento, administração financeira, contabilidade e controle interno do Executivo federal): crie se não existir
- LC 200/2023 (regime fiscal sustentável): crie se não existir

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [x] Etapas da despesa (Lei 4.320: empenho, liquidação, pagamento; restos a pagar) como processo `proc:execucao-da-despesa`, porque o site já mostra esses valores (fase 1, D46). Confira se `proc:` do ciclo orçamentário existe (Grep "orcament" em `dados/processos/`) e acrescente as etapas da lei que faltarem.
- [x] LRF: relatórios (RREO, RGF) como `obj:`, quem os publica e quem fiscaliza (Tribunais de Contas, art. 59), limites de pessoal por Poder (art. 20) como relações ou `detalhes`, e o que acontece quando o limite é ultrapassado (arts. 22 e 23), se couber como etapa.
- [x] Lei 10.180: órgãos centrais dos sistemas (Secretaria de Orçamento Federal, Secretaria do Tesouro Nacional, CGU como órgão central do controle interno) e as relações de supervisão técnica com os órgãos setoriais (agregados).
- [x] LC 200: o limite de despesas por Poder e órgão (como relação ou `detalhes` no objeto do orçamento) e o que a lei manda o Executivo publicar.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:secretaria-do-tesouro-nacional`, `org:cgu`, `org:ministerio-do-planejamento-e-orcamento`, `org:cmo`, `org:tcu`, objetos de lei orçamentária (`obj:loa`, `obj:ldo`, `obj:ppa`; confira os ids).
- As métricas e os fluxos (`dados/metricas/`, `dados/fluxos/`) são gerados por script: não os edite.
- Em paralelo: `f2-judiciario` e `f2-eleicoes`.

## Cobertura

Classes conforme a D49 e a regra 8 das instruções (artigo citado em `estrutura_continua` ou como fonte de relação ou etapa conta como coberto; artigo superado sem revogação expressa é fora, D51). A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar. Artigos vetados por inteiro não entram na conta. Cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-financas-publicas/`.

### Lei 4.320/1964 (normas gerais de direito financeiro)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | norma:lei-4320-1964 (âmbito da lei) |
| arts. 2º a 8º | coberto | obj:loa (conteúdo da lei de orçamento) |
| art. 9º | fora | definição de tributo (conceito; os tributos estão na matriz tributária da CF) |
| arts. 11 a 13 | fora | classificação econômica da receita e da despesa (detalhe técnico, sem órgão, cargo nem etapa) |
| art. 14 | coberto | org:unidades-orcamentarias-do-poder-executivo-federal |
| arts. 15 a 21 | fora | discriminação da despesa por elementos, subvenções e investimentos (regras de conteúdo do orçamento, sem órgão, cargo nem etapa) |
| art. 22 | coberto | proc:ciclo-orcamentario (etapa loa-elaboracao) |
| arts. 23 a 26 | fora | superado: o Quadro de Recursos e de Aplicação de Capital deu lugar ao plano plurianual da CF (art. 165, I e § 1º), sem revogação expressa (D51) |
| arts. 27 a 31 | coberto | proc:ciclo-orcamentario (etapa loa-elaboracao) |
| art. 32 | coberto | proc:ciclo-orcamentario (etapa loa-envio, efeito do prazo) |
| art. 33 | coberto | proc:ciclo-orcamentario (etapa loa-emendas) |
| art. 34 | coberto | proc:ciclo-orcamentario (etapa execucao) |
| arts. 35 a 38 | coberto | proc:execucao-da-despesa (etapas empenho e restos-a-pagar) |
| art. 39 | coberto | org:pgfn (§ 5º, inscrição da Dívida Ativa da União); o resto do artigo é classificação contábil da dívida ativa |
| art. 39-A | fora | cessão de direitos creditórios (regra de operação financeira, sem órgão, cargo nem etapa) |
| arts. 40 a 46 | coberto | obj:credito-adicional; proc:ciclo-orcamentario (etapa creditos-adicionais), de f0-dinheiro-complementar |
| arts. 47 a 50 | coberto | proc:execucao-da-despesa (etapa programacao-financeira) |
| art. 51 | fora | garantia do contribuinte (direito individual); a matéria hoje está nas limitações ao poder de tributar (CF, art. 150) |
| arts. 52 a 55 | fora | lançamento, arrecadação e recibos (detalhe de procedimento da receita) |
| art. 56 | coberto | proc:execucao-da-despesa (etapa pagamento, unidade de tesouraria) |
| art. 57 | fora | classificação da receita orçamentária (detalhe contábil) |
| arts. 58 a 65 | coberto | proc:execucao-da-despesa (etapas empenho, liquidacao, pagamento; regimes adiantamento e fim-de-mandato) |
| art. 66 | coberto | org:unidades-orcamentarias-do-poder-executivo-federal |
| art. 67 | coberto | proc:pagamento-de-precatorio (fonte acrescentada) |
| arts. 68 e 69 | coberto | proc:execucao-da-despesa (regime adiantamento) |
| art. 70 | fora | remete à lei de licitações |
| arts. 71 a 74 | fora | regras gerais dos fundos especiais; cada fundo do mapa é objeto com tipo 'fundo' e a lei própria |
| arts. 75 a 78 | coberto | rel:cgu-controla-internamente-poder-executivo-federal |
| art. 79 | coberto | org:secretaria-de-orcamento-federal |
| art. 80 | coberto | proc:execucao-da-despesa (etapa programacao-financeira) |
| arts. 81 e 82 | coberto | obj:contas-anuais-do-presidente-da-republica; proc:ciclo-orcamentario (etapas prestacao-de-contas e parecer-previo-tcu) |
| arts. 83 e 84 | coberto | org:sistema-de-contabilidade-federal |
| arts. 85 a 91 | fora | normas de escrituração contábil (detalhe técnico) |
| art. 92 | coberto | proc:execucao-da-despesa (etapa restos-a-pagar, dívida flutuante) |
| arts. 93 a 100 | fora | normas de escrituração contábil e patrimonial (detalhe técnico) |
| arts. 101 a 105 | coberto | obj:contas-anuais-do-presidente-da-republica (balanços) |
| art. 106 | fora | critérios de avaliação patrimonial (detalhe contábil) |
| arts. 107 a 110 | fora | orçamentos e balanços de autarquias e empresas aprovados por decreto: em boa parte superados pela CF, art. 165, § 5º (orçamentos fiscal e de investimento votados pelo Congresso), sem revogação expressa; o restante é padronização contábil |
| arts. 111 a 113 | fora | superado: a consolidação nacional das contas passou ao Executivo federal (LRF, art. 51) e as normas gerais ao órgão central de contabilidade (LRF, art. 50, § 2º); ver obj:balanco-do-setor-publico-nacional |
| art. 114 | coberto | norma:lei-4320-1964 (vigência) |
| art. 115 | fora | cláusula revogatória |

Vetado por inteiro (fora da conta): art. 10. Conta: 115 artigos vigentes; coberto 64, fora 51, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

### LC 101/2000 (Lei de Responsabilidade Fiscal)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | norma:lc-101-2000 (âmbito) |
| art. 2º | coberto | obj:limites-de-despesa-com-pessoal (receita corrente líquida, inciso IV) |
| art. 4º | coberto | obj:ldo; proc:ciclo-orcamentario (etapa ldo-elaboracao) |
| art. 5º | coberto | obj:loa; proc:ciclo-orcamentario (etapa loa-elaboracao) |
| art. 7º | coberto | revisto em f2-fechamento (D53: o artigo move dinheiro entre duas entidades do mapa): rel:banco-central-repassa-recursos-uniao (caput), rel:uniao-repassa-recursos-banco-central (§ 1º), com a Lei 13.820/2019; os §§ 2º e 3º (demonstrativos e notas dos balanços) são regra contábil |
| art. 8º | coberto | proc:execucao-da-despesa (etapa programacao-financeira) |
| art. 9º | coberto | proc:execucao-da-despesa (etapa limitacao-de-empenho); proc:ciclo-orcamentario (etapa avaliacao-das-metas-fiscais); rel:ministro-da-fazenda-presta-contas-a-cmo; rel:banco-central-presta-contas-a-congresso-nacional |
| art. 10 | coberto | proc:pagamento-de-precatorio (fonte acrescentada) |
| art. 11 | coberto | obj:recursos-federais-repassados-por-convenio |
| art. 12 | coberto | proc:ciclo-orcamentario (etapas loa-elaboracao e loa-emendas); obj:regra-de-ouro |
| art. 13 | coberto | proc:execucao-da-despesa (etapa programacao-financeira) |
| arts. 14 e 14-A | fora | requisitos das proposições que concedem benefício tributário (detalhe de processo legislativo, sem órgão, cargo nem etapa) |
| arts. 15 e 16 | coberto | proc:execucao-da-despesa (etapa empenho) |
| art. 17 | fora | requisitos dos atos que criam despesa obrigatória de caráter continuado (detalhe de processo) |
| arts. 18 a 23 | coberto | obj:limites-de-despesa-com-pessoal; proc:reconducao-da-despesa-com-pessoal-ao-limite |
| art. 24 | fora | requisito para criar benefício da seguridade (detalhe de processo) |
| art. 25 | coberto | obj:recursos-federais-repassados-por-convenio (transferências voluntárias) |
| arts. 26 a 28 | fora | condições para destinar recursos ao setor privado e socorrer instituições financeiras (regras de gestão, sem órgão, cargo nem etapa) |
| arts. 29 a 40 | coberto | obj:limites-da-divida-publica; rel:secretaria-do-tesouro-nacional-monitora-limites-da-divida-publica; rel:tcu-fiscaliza-limites-da-divida-publica; obj:regra-de-ouro (arts. 32, 33 e 38) |
| art. 41-A | coberto | proc:execucao-da-despesa (etapa restos-a-pagar) |
| art. 42 | coberto | proc:execucao-da-despesa (regime fim-de-mandato) |
| art. 43 | coberto | org:arquetipo-estadual-unidade-gestora-do-rpps (§§ 1º e 2º) |
| art. 44 | fora | vedação de financiar despesa corrente com venda de bens (regra de gestão patrimonial) |
| art. 45 | coberto | obj:loa |
| art. 46 | fora | nulidade de desapropriação sem os requisitos (regra de validade de ato) |
| art. 47 | fora | autonomia e notas explicativas de empresas controladas (sem órgão, cargo nem etapa) |
| arts. 48 e 48-A | coberto | obj:dados-contabeis-orcamentarios-e-fiscais-dos-entes; rel:stn-regulamenta-dados-contabeis-orcamentarios-e-fiscais-dos-entes; proc:execucao-da-despesa |
| art. 49 | coberto | obj:contas-anuais-do-presidente-da-republica |
| arts. 50 e 51 | coberto | obj:balanco-do-setor-publico-nacional; rel:secretaria-do-tesouro-nacional-publica-balanco-do-setor-publico-nacional |
| arts. 52 e 53 | coberto | obj:rreo; rel:secretaria-do-tesouro-nacional-publica-rreo |
| arts. 54 e 55 | coberto | obj:rgf e as relações 'publica' (Presidente, Mesas da Câmara e do Senado, TCU, Judiciário, PGR) |
| arts. 56 a 58 | coberto | obj:contas-anuais-do-presidente-da-republica; proc:ciclo-orcamentario (etapa parecer-previo-tcu); o caput dos arts. 56 e 57 foi declarado inconstitucional (ADI 2.238) |
| art. 59 | coberto | rel:tcu-fiscaliza-rgf, rel:tcu-fiscaliza-rreo, rel:arquetipo-estadual-tce-fiscaliza-rgf, rel:arquetipo-estadual-tce-fiscaliza-rreo, rel:tcu-fiscaliza-limites-da-divida-publica, rel:tcu-fiscaliza-limites-de-despesa-com-pessoal |
| art. 60 | coberto | obj:limites-da-divida-publica |
| arts. 61 e 62 | fora | títulos em caução e contribuição de municípios a despesas de outros entes (regras de gestão) |
| art. 63 | coberto | obj:rreo; obj:rgf; proc:reconducao-da-despesa-com-pessoal-ao-limite (regime municipio-pequeno) |
| art. 64 | coberto | org:secretaria-do-tesouro-nacional (assistência técnica aos municípios) |
| art. 65 | coberto | proc:execucao-da-despesa e proc:reconducao-da-despesa-com-pessoal-ao-limite (regimes de calamidade); obj:estado-de-calamidade-publica-nacional (f0) |
| art. 65-A | fora | exclusão de transferências ao setor cultural da meta de resultado (detalhe de apuração) |
| art. 66 | coberto | proc:reconducao-da-despesa-com-pessoal-ao-limite (regime pib-baixo); obj:limites-da-divida-publica |
| art. 67 | coberto | obj:balanco-do-setor-publico-nacional (conselho de gestão fiscal) |
| art. 68 | coberto | obj:fundo-do-regime-geral-de-previdencia-social (f0) |
| art. 69 | coberto | org:arquetipo-estadual-unidade-gestora-do-rpps |
| arts. 70 a 72 | fora | regras de transição esgotadas (enquadramento até 2002; limites dos três primeiros exercícios) |
| art. 73 | fora | penas das infrações (crimes e penas) |
| art. 73-A | coberto | proc:denuncia-ao-tcu (fonte acrescentada) |
| art. 73-B | fora | prazos de 2009 para a transparência em tempo real (transição esgotada) |
| art. 73-C | coberto | obj:dados-contabeis-orcamentarios-e-fiscais-dos-entes |
| art. 74 | coberto | norma:lc-101-2000 (vigência) |
| art. 75 | fora | cláusula revogatória |

Vetados por inteiro (fora da conta): arts. 3º, 6º, 26-A e 41. Conta: 79 artigos vigentes; coberto 59, fora 20, parcial 0, lacuna 0; cobertura = 100,0%. Conta revista em f2-fechamento (2026-11-14): art. 7º passa de fora a coberto; coberto 60, fora 19; cobertura = 100,0%.

### Lei 10.180/2001 (sistemas federais de planejamento e orçamento, administração financeira, contabilidade e controle interno)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | os quatro org:sistema-* desta tarefa |
| arts. 2º a 8º | coberto | org:sistema-de-planejamento-e-de-orcamento-federal; org:secretaria-de-orcamento-federal; org:orgaos-setoriais-de-planejamento-e-orcamento; relações dirige, coordena e integra; proc:ciclo-orcamentario |
| arts. 9º a 13 | coberto | org:sistema-de-administracao-financeira-federal; org:secretaria-do-tesouro-nacional; org:orgaos-setoriais-de-administracao-financeira; relações dirige, coordena e integra |
| arts. 14 a 18 | coberto | org:sistema-de-contabilidade-federal; org:orgaos-setoriais-de-contabilidade; obj:balanco-do-setor-publico-nacional; obj:contas-anuais-do-presidente-da-republica; relações dirige, coordena e integra |
| arts. 19 a 24 | coberto | org:sistema-de-controle-interno-do-poder-executivo-federal; org:secretaria-federal-de-controle-interno; org:comissao-de-coordenacao-de-controle-interno; org:orgaos-setoriais-de-controle-interno; relações; proc:ciclo-orcamentario (etapa prestacao-de-contas) |
| art. 25 | fora | vedações aos dirigentes dos sistemas (deveres individuais) |
| art. 26 | coberto | org:sistema-de-controle-interno-do-poder-executivo-federal |
| art. 27 | fora | remete a regulamento o acesso do cidadão aos dados da execução (sem órgão, cargo nem etapa) |
| art. 28 | coberto | org:sistema-de-controle-interno-do-poder-executivo-federal |
| arts. 29 e 30 | fora | impedimentos para nomeação e cessão de servidores (requisitos individuais abaixo da cúpula, D11) |
| art. 31 | fora | altera a Lei 9.625/1998 (gratificações) |
| art. 32 | fora | provimento preferencial de cargos em comissão (abaixo da cúpula, D11) |
| art. 33 | fora | requisição de servidores até 31/12/2000 (transição esgotada) |
| art. 34 | fora | altera a Lei 8.460/1992 (funções gratificadas) |
| art. 35 | coberto | org:sistema-de-controle-interno-do-poder-executivo-federal; obj:recursos-federais-repassados-por-convenio |
| art. 36 | fora | dever de divulgar a origem dos recursos federais (dever do recebedor) |
| art. 37 | coberto | org:sistema-de-contabilidade-federal |
| art. 38 | coberto | estrutura_continua dos quatro sistemas |
| art. 39 | fora | convalidação dos atos da MP anterior (transição esgotada) |
| art. 40 | coberto | norma:lei-10180-2001 (vigência) |
| art. 41 | fora | cláusula revogatória |

Nada vetado ou revogado por inteiro (o art. 22, III, foi revogado pela Lei 13.464/2017, só o inciso). Conta: 41 artigos vigentes; coberto 30, fora 11, parcial 0, lacuna 0; cobertura = 100,0%.

### LC 200/2023 (regime fiscal sustentável)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º a 5º | coberto | obj:regime-fiscal-sustentavel; obj:ldo (art. 2º); obj:loa (art. 3º, §§ 4º e 5º) |
| art. 5º-A | coberto | obj:regime-fiscal-sustentavel |
| arts. 6º, 6º-A, 6º-B, 7º e 8º | coberto | obj:regime-fiscal-sustentavel; proc:execucao-da-despesa (art. 7º, na etapa limitacao-de-empenho) |
| arts. 9º e 10 | coberto | obj:regime-fiscal-sustentavel; obj:loa (art. 10) |
| art. 11 | coberto | rel:ministro-da-fazenda-presta-contas-a-cmo; proc:ciclo-orcamentario (etapa avaliacao-das-metas-fiscais); as alterações do art. 4º da LRF entram pelo obj:ldo |
| art. 12 | fora | limites de 2023 (transição esgotada) |
| art. 13 | coberto | obj:regime-fiscal-sustentavel (precatórios do Fundef) |
| art. 14 | fora | crédito suplementar de 2024 (transição esgotada) |
| art. 14-A | coberto | obj:regime-fiscal-sustentavel |
| art. 15 | coberto | norma:lc-200-2023 (vigência) |

Nada vetado por inteiro (o § 3º do art. 7º foi vetado). Conta: 19 artigos vigentes; coberto 17, fora 2, parcial 0, lacuna 0; cobertura = 100,0%.

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
- 2026-11-11 23:19 — editado obj:limites-de-despesa-com-pessoal
- 2026-11-11 23:19 — editado obj:loa
- 2026-11-11 23:19 — editado obj:ldo
- 2026-11-11 23:19 — editado obj:regime-fiscal-sustentavel
- 2026-11-11 23:19 — editado obj:contas-anuais-do-presidente-da-republica
- 2026-11-11 23:19 — npm run -s validar sem erros (lote 5: edições em objetos existentes; verificacao passou a coletado com a nota do que mudou)
- 2026-11-11 23:20 — editado proc:ciclo-orcamentario
- 2026-11-11 23:20 — editado obj:dados-contabeis-orcamentarios-e-fiscais-dos-entes
- 2026-11-11 23:20 — editado rel:stn-regulamenta-dados-contabeis-orcamentarios-e-fiscais-dos-entes
- 2026-11-11 23:20 — editado rel:cgu-controla-internamente-poder-executivo-federal
- 2026-11-11 23:20 — editado obj:recursos-federais-repassados-por-convenio
- 2026-11-11 23:20 — editado proc:denuncia-ao-tcu
- 2026-11-11 23:20 — editado proc:pagamento-de-precatorio
- 2026-11-11 23:20 — editado org:pgfn
- 2026-11-11 23:20 — editado obj:regra-de-ouro
- 2026-11-11 23:20 — editado org:secretaria-do-tesouro-nacional
- 2026-11-11 23:20 — editado org:arquetipo-estadual-unidade-gestora-do-rpps
- 2026-11-11 23:20 — npm run -s validar sem erros (lote 6: ciclo orçamentário com etapa nova avaliacao-das-metas-fiscais, transparência, transferências voluntárias, regra de ouro, STN, PGFN, RPPS, denúncia, precatórios)
- 2026-11-11 23:20 — ajustes em entidades novas desta tarefa: SOF (Lei 4.320, art. 79), sistema de contabilidade (Lei 4.320, arts. 83 e 84), etapa pagamento de proc:execucao-da-despesa (Lei 4.320, art. 56), rel:ministro-da-fazenda-presta-contas-a-cmo (LC 200/2023, arts. 11 e 15, I)
- 2026-11-11 23:22 — quadros de cobertura gravados e conferidos com npm run -s cobertura:leis: Lei 4.320/1964 115 artigos vigentes (coberto 64, fora 51), LRF 79 (coberto 59, fora 20), Lei 10.180/2001 41 (coberto 30, fora 11), LC 200/2023 19 (coberto 17, fora 2); 100% nas quatro, sem parcial nem lacuna
- 2026-11-11 23:23 — etapa limitacao-de-empenho de proc:execucao-da-despesa: texto do LC 200/2023, art. 7º, reescrito para seguir a lei (limitação, 75% das discricionárias e respeito às vedações dos arts. 6º e 8º)
- 2026-11-11 23:23 — vocabulário (proposta): (1) 'supervisiona' está definido só para o Judiciário; a Lei 10.180/2001 fala em 'orientação normativa e supervisão técnica' do órgão central sobre os setoriais. Usei 'coordena'. Proponho ampliar a definição de 'supervisiona' ou criar 'supervisiona-tecnicamente'. (2) 'publica' está definido para normas; usei-o para RREO, RGF e Balanço do Setor Público Nacional. Proponho 'Torna oficialmente conhecido um ato, norma ou relatório'. (3) Para 'emite' (o titular assina e emite o RGF) não há termo; usei 'publica'
- 2026-11-11 23:23 — modelagem: conjuntos de órgãos setoriais com contido_em no Poder Executivo federal (estão em várias pastas); proc:execucao-da-despesa usa o conjunto org:unidades-orcamentarias-do-poder-executivo-federal como ator; os outros Poderes seguem as mesmas etapas (dito nos detalhes). RGF do Judiciário ligado a org:poder-judiciario, e não a cada tribunal
- 2026-11-11 23:23 — fora do mapa: Secretaria Nacional de Planejamento (Decreto 11.353/2023, art. 14) só citada nos detalhes do sistema; composição da Comissão de Coordenação de Controle Interno (Decreto 3.591/2000, art. 10) não lida; resoluções do Senado com os percentuais da dívida não lidas; ADI 6533 (percentuais estaduais do art. 20 da LRF) e ADIs 7064, 7641, 7922 e 8010 (LC 200) não conferidas aqui; nenhum aviso aberto
- 2026-11-11 23:23 — pontos para a revisão: (a) data de publicação do acórdão da ADI 2.238 não aparece na página do Senado; (b) a Lei 10.180/2001 nomeia órgãos centrais que mudaram de nome ou de lugar (Ministério do Planejamento, Orçamento e Gestão; Secretaria Federal de Controle Interno, hoje na CGU), tratado nas notas; (c) arts. 23 a 26 e 107 a 113 da Lei 4.320 classificados como 'fora' por superação sem revogação expressa (D51), leitura nossa; (d) vigência da relação ministro-da-fazenda-presta-contas-a-cmo em 2024-01-01 (LC 200/2023, art. 15, I)
- 2026-11-11 23:23 — entidades existentes editadas (verificacao passou a coletado com nota): obj:limites-de-despesa-com-pessoal, obj:loa, obj:ldo, obj:regime-fiscal-sustentavel, obj:contas-anuais-do-presidente-da-republica, proc:ciclo-orcamentario, obj:dados-contabeis-orcamentarios-e-fiscais-dos-entes, rel:stn-regulamenta-dados-contabeis-orcamentarios-e-fiscais-dos-entes, rel:cgu-controla-internamente-poder-executivo-federal, obj:recursos-federais-repassados-por-convenio, proc:denuncia-ao-tcu, proc:pagamento-de-precatorio, org:pgfn, obj:regra-de-ouro, org:secretaria-do-tesouro-nacional, org:arquetipo-estadual-unidade-gestora-do-rpps
- 2026-11-11 23:23 — npm run -s validar sem erros; tarefa coletada
