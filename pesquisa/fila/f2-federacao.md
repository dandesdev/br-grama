---
id: f2-federacao
escopo: "Fase 2 (D49): consórcios públicos, cooperação ambiental, regiões metropolitanas, fundos de participação e repartição do ICMS e do IBS"
status: em-andamento
depende_de: [f0-federacao, f0-competencias]
iniciada_em: 2026-11-11
concluida_em: null
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 11.107/2005 (consórcios públicos)
- LC 140/2011 (cooperação entre os entes nas competências ambientais comuns)
- Lei 13.089/2015 (Estatuto da Metrópole)
- LC 62/1989 (critérios do FPE e do FPM) e LC 63/1990 (entrega do ICMS aos municípios)
- LC 214/2025 e LC 227/2026, só o Comitê Gestor do IBS e a repartição do IBS entre os entes: `norma:lc-214-2025` e a outra, procure

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] Consórcios (`org:consorcios-publicos` existe): protocolo de intenções, ratificação por lei, contrato de rateio e de programa como etapas de um `proc:` de criação de consórcio.
- [ ] LC 140: as ações administrativas de cada ente (arts. 7º a 9º) no `detalhes` das matérias ambientais ou como relações `tem-competencia` (D38), conforme o padrão já usado; comissões tripartites (nacional e estaduais) e bipartites como colegiados.
- [ ] Estatuto da Metrópole: região metropolitana e aglomeração urbana como conceito (`org:` de arquétipo ou `obj:`, conforme o padrão do arquétipo estadual), governança interfederativa (instância executiva, colegiada deliberativa) e o plano de desenvolvimento urbano integrado como `obj:`.
- [ ] LC 62 e LC 63: o cálculo das quotas (TCU calcula, `rel:` de cálculo existe; confira) e os critérios no `detalhes` dos objetos `obj:fpe`, `obj:fpm` e do ICMS municipal.
- [ ] CGIBS: estrutura (Conselho Superior, diretoria) e a repartição do IBS no nível da lei.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:consorcios-publicos`, `org:comite-gestor-do-ibs`, `obj:fpe`, `obj:fpm`, `org:sisnama`, `org:ibama`, as matérias de competência ambiental (`obj:` com `tipo_objeto: "materia"`).
- Em paralelo: `f2-social`.

## Cobertura

## Diário

- 2026-11-11 23:40 — iniciada; lidos CLAUDE.md, decisões D01 a D53, modelo de dados, protocolo, instruções (com a Fase 2), vocabulários e os quadros de f2-financas-publicas
- 2026-11-11 23:54 — gravado org:assembleia-geral-dos-consorcios-publicos
- 2026-11-11 23:54 — gravado cargo:representante-legal-de-consorcio-publico
- 2026-11-11 23:54 — gravado obj:contrato-de-consorcio-publico
- 2026-11-11 23:55 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-federacao/ (curl --http1.1 com user-agent de navegador): l11107.htm, lcp140.htm, l13089.htm, lcp62.htm, lcp63.htm, lcp214.htm, lcp227.htm. Texto (sem o script do servidor) igual ao das cópias de 2026-10-23 para Lei 11.107, Lei 13.089, LC 140, LC 214 e LC 227. compilacao_ate: Lei 14.662/2023 (Lei 11.107), Lei 13.683/2018 (Lei 13.089), texto original (LC 140), LC 143/2013 (LC 62), LC 227/2026 (LC 63), LC 235/2026 (LC 214), sem alterações indicadas (LC 227). Nenhuma alteração entre 2026-10-01 e hoje nos dispositivos usados
- 2026-11-11 23:55 — LC 227/2026, art. 166, deu a redação atual da LC 63, arts. 3º, I e II (65% valor adicionado; até 35% por lei estadual, mínimo de 10 pontos por aprendizagem) e 5º; efeitos desde a publicação (art. 182, III), 14/1/2026
- 2026-11-11 23:55 — gravado norma:lc-62-1989
- 2026-11-11 23:55 — gravado norma:lc-63-1990
- 2026-11-11 23:55 — faixas escolhidas: LC 227/2026, arts. 1º a 53 (Título I, CGIBS) e 103 a 131 (Título III, distribuição do IBS); LC 214/2025, arts. 318 a 323 (harmonização com a CBS: comitê e fórum com membros do CGIBS) e 480 a 484 (CGIBS provisório e instalação). O processo administrativo tributário do IBS (LC 227, arts. 54 a 102, câmaras de julgamento do CGIBS) fica fora da faixa
- 2026-11-11 23:55 — npm run -s validar sem erros (lote 1: normas e primeiras entidades dos consórcios)
- 2026-11-11 23:56 — gravado proc:criacao-de-consorcio-publico
- 2026-11-11 23:56 — gravado rel:arquetipo-estadual-tce-fiscaliza-consorcios-publicos
- 2026-11-11 23:56 — gravado rel:municipios-repassam-recursos-consorcios-publicos
- 2026-11-11 23:56 — gravado rel:estados-repassam-recursos-consorcios-publicos
- 2026-11-11 23:56 — gravado rel:uniao-repassa-recursos-consorcios-publicos
- 2026-11-11 23:56 — editado org:consorcios-publicos (detalhes, fontes arts. 7º, 9º, 15 e 20, estrutura_continua)
- 2026-11-11 23:56 — npm run -s validar sem erros (lote 2: proc:criacao-de-consorcio-publico, fiscalização pelo TCE e repasses por rateio e convênio). Escolha: o processo de criação produz obj:contrato-de-consorcio-publico; alteração, extinção e retirada ficam no fim do mesmo processo (arts. 11, 12 e 12-A)
- 2026-11-11 23:58 — gravado fonte:senado-legislacao-adi-4757-decisao
- 2026-11-11 23:58 — gravado org:comissao-tripartite-nacional
- 2026-11-11 23:58 — gravado org:arquetipo-estadual-comissao-tripartite-estadual
- 2026-11-11 23:58 — gravado org:comissao-bipartite-do-distrito-federal
- 2026-11-11 23:58 — gravado org:arquetipo-estadual-conselho-de-meio-ambiente
- 2026-11-11 23:58 — gravado rel:arquetipo-estadual-conselho-de-meio-ambiente-regulamenta-licenca-ambiental
- 2026-11-11 23:58 — editado rel:uniao-competencia-meio-ambiente-comum (nota: ações da União, LC 140, art. 7º)
- 2026-11-11 23:58 — editado rel:estados-competencia-meio-ambiente-comum (nota: ações dos estados, arts. 8º e 10)
- 2026-11-11 23:58 — editado rel:municipios-competencia-meio-ambiente (nota: ações dos municípios, arts. 9º e 10)
- 2026-11-11 23:58 — editado obj:materia-meio-ambiente (detalhes: cooperação, supletiva, subsidiária, ADI 4.757)
- 2026-11-11 23:58 — editado norma:lc-140-2011 (arquivo, compilacao_ate, ADI 4.757)
- 2026-11-11 23:58 — decisão (D38/D50): as ações administrativas dos arts. 7º a 9º da LC 140 ficaram na nota das três relações tem-competencia já existentes (padrão de f0-competencias), e não em relações novas; só o licenciamento já tinha relações autoriza próprias (f0-administracao-indireta)
- 2026-11-11 23:58 — ADI 4.757 lida no portal de legislação do Senado (cópia em pesquisa/brutos/senado/2026-11-11-f2-federacao/adi4757-senado.html): interpretação conforme aos arts. 14, § 4º, e 17, § 3º; resto da lei constitucional
- 2026-11-11 23:58 — npm run -s validar sem erros (lote 3: LC 140, comissões tripartites e bipartite, conselho estadual de meio ambiente)
- 2026-11-11 23:59 — gravado org:arquetipo-estadual-regioes-metropolitanas-instancia-executiva
- 2026-11-11 23:59 — gravado org:arquetipo-estadual-regioes-metropolitanas-instancia-colegiada-deliberativa
- 2026-11-11 23:59 — gravado org:arquetipo-estadual-regioes-metropolitanas-organizacao-tecnico-consultiva
- 2026-11-11 23:59 — gravado obj:plano-de-desenvolvimento-urbano-integrado
- 2026-11-11 23:59 — gravado proc:plano-de-desenvolvimento-urbano-integrado
- 2026-11-11 23:59 — gravado proc:instituicao-de-regiao-metropolitana
- 2026-11-11 23:59 — gravado rel:arquetipo-estadual-regioes-metropolitanas-instancia-colegiada-deliberativa-delibera-pdui
- 2026-11-11 23:59 — gravado rel:arquetipo-estadual-assembleia-legislativa-delibera-pdui
- 2026-11-11 23:59 — gravado rel:arquetipo-estadual-ministerio-publico-monitora-pdui
- 2026-11-11 23:59 — gravado rel:uniao-repassa-recursos-regioes-metropolitanas
- 2026-11-12 00:00 — editado org:arquetipo-estadual-regioes-metropolitanas (detalhes, fontes, estrutura_continua)
- 2026-11-12 00:00 — decisão: segui o padrão do arquétipo estadual: as instâncias da governança (art. 8º) são órgãos de arquétipo com contido_em no conjunto das regiões; o plano integrado é obj: (ato-normativo, aprovado por lei estadual) com processo próprio; a instituição da região virou proc:instituicao-de-regiao-metropolitana (sem produz: não há objeto para a lei complementar estadual de criação)
- 2026-11-12 00:00 — npm run -s validar sem erros (lote 4: Estatuto da Metrópole)
- 2026-11-12 00:02 — gravado norma:lei-5172-1966
- 2026-11-12 00:02 — gravado norma:lc-91-1997
- 2026-11-12 00:02 — gravado fonte:senado-legislacao-adi-5069-decisao
- 2026-11-12 00:02 — gravado fonte:stf-noticia-fpe-prorrogacao-ate-junho-2027
- 2026-11-12 00:02 — gravado obj:indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado rel:arquetipo-estadual-calcula-indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado proc:apuracao-do-indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado norma:lei-5172-1966 (CTN; só o art. 91, critérios do FPM)
- 2026-11-12 00:02 — gravado norma:lc-91-1997 (coeficientes do FPM)
- 2026-11-12 00:02 — gravado fonte:senado-legislacao-adi-5069-decisao
- 2026-11-12 00:02 — gravado fonte:stf-noticia-fpe-prorrogacao-ate-junho-2027
- 2026-11-12 00:02 — gravado obj:indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado rel:arquetipo-estadual-calcula-indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — gravado proc:apuracao-do-indice-de-participacao-dos-municipios-no-icms
- 2026-11-12 00:02 — ADI 5.069 (FPE): art. 2º, II e III, e § 2º, da LC 62/1989 (redação da LC 143/2013) inconstitucionais sem pronúncia de nulidade; aplicação mantida até 30/6/2027 por decisão do Plenário de 17/6/2026 (publicada em 22/6/2026). Cópias da página do Senado e das notícias do STF em pesquisa/brutos/senado/2026-11-11-f2-federacao/ e pesquisa/brutos/stf/2026-11-12-f2-federacao/. Em 2026-10-01 os critérios valiam; registro em obj:fpe
- 2026-11-12 00:02 — decisão: não havia objeto do ICMS municipal; criei obj:indice-de-participacao-dos-municipios-no-icms (documento) com os critérios da LC 63, o processo de apuração e impugnação (art. 3º, §§ 3º a 9º) e a relação calcula do estado, no molde de rel:tcu-calcula-cotas-fpe
- 2026-11-12 00:02 — npm run -s validar sem erros (lote 5: LC 62 e LC 63, normas do CTN e da LC 91, fontes da ADI 5.069)
- 2026-11-12 00:03 — editado obj:fpe (critérios da LC 62 com a LC 143, ADI 5.069, prazos e divulgação)
- 2026-11-12 00:03 — editado obj:fpm (critérios: LC 62, art. 3º; CTN, art. 91; LC 91/1997; revisão pelo TCU)
- 2026-11-12 00:03 — editado rel:tcu-calcula-cotas-fpe (fonte LC 62, arts. 5º e 7º)
- 2026-11-12 00:03 — editado rel:tcu-calcula-cotas-fpm (fonte LC 62, arts. 5º e 7º; condição com a revisão quando um município é instalado)
- 2026-11-12 00:03 — editado rel:uniao-repassa-fpe-estados (fonte LC 62: base, critérios, prazos)
- 2026-11-12 00:03 — editado rel:uniao-repassa-fpm-municipios (fonte LC 62)
- 2026-11-12 00:03 — editado rel:estados-repassam-icms-municipios (detalhes com depósito, entrega semanal, publicação e sanções; fonte LC 63)
- 2026-11-12 00:03 — editado rel:estados-repassam-ipva-municipios (fonte LC 63, arts. 2º e 8º)
- 2026-11-12 00:03 — editado rel:estados-repassam-ipi-exportacao-municipios (fonte LC 63, art. 7º)
- 2026-11-12 00:03 — conferido: rel:tcu-calcula-cotas-fpe e -fpm já existiam e estão corretas; a LC 62, art. 5º, confirma que o TCU calcula as quotas
- 2026-11-12 00:03 — npm run -s validar sem erros (edições da LC 62 e da LC 63)
- 2026-11-12 00:06 — gravado org:conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado cargo:membro-do-conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado cargo:vice-presidente-do-cgibs
- 2026-11-12 00:06 — gravado rel:presidente-do-cgibs-preside-conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado rel:vice-presidente-do-cgibs-substitui-presidente-do-cgibs
- 2026-11-12 00:06 — gravado org:diretoria-executiva-do-cgibs
- 2026-11-12 00:06 — gravado cargo:diretor-executivo-do-cgibs
- 2026-11-12 00:06 — gravado org:diretorias-do-cgibs
- 2026-11-12 00:06 — gravado cargo:diretor-do-cgibs
- 2026-11-12 00:06 — gravado org:secretaria-geral-do-cgibs
- 2026-11-12 00:06 — gravado org:assessoria-de-relacoes-institucionais-e-interfederativas-do-cgibs
- 2026-11-12 00:06 — gravado org:corregedoria-do-cgibs
- 2026-11-12 00:06 — gravado org:auditoria-interna-do-cgibs
- 2026-11-12 00:06 — gravado cargo:corregedor-geral-do-cgibs
- 2026-11-12 00:06 — gravado cargo:auditor-interno-geral-do-cgibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-elege-diretor-executivo-do-cgibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-elege-diretor-do-cgibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-elege-corregedor-geral-do-cgibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-elege-auditor-interno-geral-do-cgibs
- 2026-11-12 00:06 — gravado rel:arquetipo-estadual-governador-indica-membro-do-conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado rel:arquetipo-municipal-prefeito-elege-membro-do-conselho-superior-do-cgibs
- 2026-11-12 00:06 — gravado obj:regulamento-unico-do-ibs
- 2026-11-12 00:06 — gravado rel:conselho-superior-do-cgibs-edita-regulamento-unico-do-ibs
- 2026-11-12 00:06 — gravado rel:arquetipo-estadual-tce-fiscaliza-comite-gestor-do-ibs
- 2026-11-12 00:06 — gravado rel:tcu-fiscaliza-comite-gestor-do-ibs
- 2026-11-12 00:06 — gravado rel:auditoria-interna-do-cgibs-controla-internamente-comite-gestor-do-ibs
- 2026-11-12 00:06 — decisões do lote 6: as nove diretorias do CGIBS viraram um conjunto (org:diretorias-do-cgibs, D51) com um cargo de diretor; Secretaria-Geral, Assessoria, Corregedoria e Auditoria Interna com tipo_orgao outro (unidade interna de entidade interfederativa) e contido_em no Conselho Superior, a que a lei as subordina (arts. 18, 19, 21 e 23); a Diretoria Executiva também (art. 25). Os vice-presidentes e o Diretor-Executivo ficaram sem pessoa (D11: não são dirigentes máximos; a Portaria CGIBS 5/2026 sobre a eleição do Diretor-Executivo está em pesquisa/brutos/cgibs/2026-10-24/)
- 2026-11-12 00:06 — provimento dos cargos do CGIBS: membro do Conselho Superior com casos (estados: nato, pelo secretário de Fazenda; municípios no CGIBS provisório: indicação da CNM e da FNP até 31/3/2027, aproximada como nomeacao-livre; municípios depois: eleição pelos prefeitos, aproximada como eleicao-majoritaria-maioria-absoluta), marcados como inferidos; Diretor-Executivo, diretores, corregedor e auditor eleitos pelo Conselho Superior, aproximados como nomeacao-livre (destituíveis a qualquer tempo). Proposta de vocabulário no fim
- 2026-11-12 00:06 — npm run -s validar sem erros (lote 6: estrutura do CGIBS, cargos, eleições, regulamento único e controle)
- 2026-11-12 00:08 — gravado obj:orcamento-do-cgibs
- 2026-11-12 00:08 — gravado proc:orcamento-do-cgibs
- 2026-11-12 00:08 — gravado rel:uniao-repassa-recursos-comite-gestor-do-ibs
- 2026-11-12 00:08 — gravado rel:estados-repassam-recursos-comite-gestor-do-ibs
- 2026-11-12 00:08 — gravado rel:municipios-repassam-recursos-comite-gestor-do-ibs
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-repassa-ibs-estados
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-repassa-ibs-municipios
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-calcula-tributo-ibs
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-publica-rreo
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-publica-rgf
- 2026-11-12 00:08 — gravado org:comite-de-harmonizacao-das-administracoes-tributarias
- 2026-11-12 00:08 — gravado org:forum-de-harmonizacao-juridica-das-procuradorias
- 2026-11-12 00:08 — gravado rel:forum-de-harmonizacao-juridica-das-procuradorias-assessora-comite-de-harmonizacao-das-administracoes-tributarias
- 2026-11-12 00:08 — gravado rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-ibs
- 2026-11-12 00:08 — gravado rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-cbs
- 2026-11-12 00:08 — vigências do IBS e do CGIBS em 2026-10-01: estrutura e regras da LC 227/2026 vigoravam desde 14/1/2026; o Conselho Superior funcionava com a composição do CGIBS provisório (municipais indicados por CNM e FNP até 31/3/2027); a eleição dos municipais pelos prefeitos ainda não ocorrera; a distribuição do IBS aos entes começa com o IBS de 2027 (em 2026 a arrecadação de teste financia o CGIBS, ADCT, art. 125, § 3º); IBS municipal só a partir de 2027 (LC 214, art. 344); retenções de transição de 2029 a 2077 e de 2029 a 2096; financiamento da União de 2025 a 2028; percentual do CGIBS até 100% (2026), 50% (2027-2028) e 2% a 0,5% (2029-2032); harmonização (LC 214, arts. 318 a 323) com efeitos desde 1º/1/2026, instalação não conferida. Cada data está em vigencia das entidades
- 2026-11-12 00:08 — fluxo possível (D45): rel:uniao-repassa-recursos-comite-gestor-do-ibs é dinheiro da União (operação de crédito de 2025 a 2028, R$ 600 mi, 800 mi, 1,2 bi e 1,2 bi) e pode aparecer na base do Tesouro; também rel:uniao-repassa-recursos-consorcios-publicos (convênios com consórcios). Não editei dados/fluxos/: fica para o script
- 2026-11-12 00:08 — gravado obj:orcamento-do-cgibs (lote 7)
- 2026-11-12 00:08 — gravado proc:orcamento-do-cgibs (lote 7)
- 2026-11-12 00:08 — gravado rel:uniao-repassa-recursos-comite-gestor-do-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:estados-repassam-recursos-comite-gestor-do-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:municipios-repassam-recursos-comite-gestor-do-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-repassa-ibs-estados (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-repassa-ibs-municipios (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-calcula-tributo-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-publica-rreo (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-gestor-do-ibs-publica-rgf (lote 7)
- 2026-11-12 00:08 — gravado org:comite-de-harmonizacao-das-administracoes-tributarias (lote 7)
- 2026-11-12 00:08 — gravado org:forum-de-harmonizacao-juridica-das-procuradorias (lote 7)
- 2026-11-12 00:08 — gravado rel:forum-de-harmonizacao-juridica-das-procuradorias-assessora-comite-de-harmonizacao-das-administracoes-tributarias (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-ibs (lote 7)
- 2026-11-12 00:08 — gravado rel:comite-de-harmonizacao-das-administracoes-tributarias-regulamenta-tributo-cbs (lote 7)
- 2026-11-12 00:08 — npm run -s validar sem erros (lote 7: orçamento, financiamento e distribuição do IBS, harmonização com a CBS)
- 2026-11-12 00:09 — editado org:comite-gestor-do-ibs (detalhes, fontes LC 227 e LC 214, estrutura_continua, notas)
- 2026-11-12 00:09 — editado rel:estados-repassam-ibs-municipios (detalhes: a cota-parte do IBS estadual é retida e distribuída diretamente pelo CGIBS; fonte LC 227). Ponto para o revisor: a relação continua partindo do estado (base: CF, art. 158, IV, b), e o fluxo operacional está em rel:comite-gestor-do-ibs-repassa-ibs-municipios; se o fluxo for gerado por script, não somar os dois
- 2026-11-12 00:09 — npm run -s validar sem erros
- 2026-11-12 00:09 — editado norma:lei-11107-2005 (fonte da vigência, art. 21; datas de acesso e conferência)
- 2026-11-12 00:09 — ajuste: tirei os arts. 49 e 50 da LC 227 das fontes de org:comite-gestor-do-ibs (regras de licitação e publicidade, classificadas como fora)
