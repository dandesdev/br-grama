---
id: verificacao-f0-legislativo
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-legislativo\""
status: em-andamento
depende_de: [f0-legislativo]
iniciada_em: 2026-10-20
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-legislativo"` conferidas contra a fonte (processos etapa por etapa)
- [ ] Aplicar os termos criados depois da coleta, onde couberem: `edita` (o Presidente edita MP; hoje `propoe`), `autoriza`, `susta`, `convoca` (hoje `fiscaliza`), `aprova-exoneracao` (art. 52, XI: crie a relação que faltou) e o campo `remete_a` nas etapas que hoje só citam em texto o rito da lei ordinária
- [ ] Pontos em aberto da coleta: quem promulga resolução do Congresso Nacional; início da PEC do Presidente na Câmara (hoje `inferido`, RICD, art. 201, I); efeitos da ADI 4029 sobre a Resolução 1/2002-CN

## Diário
- 2026-10-20 — iniciada; lidos CLAUDE.md, instruções de verificação, modelo de dados, protocolo, decisões e o diário da coleta; 97 entidades no escopo
- 2026-10-20 09:44 — obj:emenda-constitucional: verificado sem correção
- 2026-10-20 09:44 — obj:lei-complementar: verificado sem correção
- 2026-10-20 09:44 — obj:medida-provisoria: verificado sem correção
- 2026-10-20 09:46 — obj:lei-delegada: verificado sem correção
- 2026-10-20 09:46 — obj:decreto-legislativo: verificado sem correção
- 2026-10-20 09:46 — obj:concessao-de-radiodifusao: verificado sem correção
- 2026-10-20 09:46 — obj:resolucao: corrigido: detalhes e notas diziam que não havia regra sobre quem promulga resolução do Congresso; o RCCN, art. 52, parágrafo único, dá a promulgação da matéria de competência exclusiva ao Presidente do Senado (o índice oficial do RCCN liga a promulgação da resolução do CN a esse artigo). Acrescentada a fonte norma:rccn
- 2026-10-20 09:47 — norma:ec-32-2001: verificado sem correção
- 2026-10-20 09:47 — norma:lei-10001-2000: verificado; acrescentada nota sobre o julgamento da ADI 5351 (jun/2021: parcialmente procedente, arts. 1º e 3º mantidos), fonte: acórdão em legis.senado.leg.br/norma/34225815
- 2026-10-20 09:47 — norma:lei-1579-1952: verificado sem correção
- 2026-10-20 09:49 — proc:medida-provisoria: verificado etapa por etapa (CF, art. 62; Res. 1/2002-CN, arts. 2º a 14 e 18; ADI 4029; MS 27931). Corrigido: etapa 'decreto-legislativo-efeitos' dizia que o Congresso 'pode' regular os efeitos; a CF, art. 62, § 3º, diz 'devendo' (ação e detalhes reescritos, com o § 11). Acrescentado RCCN, art. 52, parágrafo único, na etapa 'decreto-legislativo-editado'. Notas: as comissões mistas voltaram (CMMPV 1323/2025 instalada em 3/2/2026, página oficial do Senado). Campo remete_a não aplicado: não existe no esquema (ver abaixo)
- 2026-10-20 09:49 — fonte:stf-informativo-657-adi-4029: verificado sem correção
- 2026-10-20 09:49 — fonte:stf-informativo-870-ms-27931: verificado sem correção
- 2026-10-20 09:49 — fonte:agencia-senado-comissoes-mp-2025: verificado sem correção
- 2026-10-20 09:50 — norma:resolucao-cn-1-2002: verificado na edição oficial do RCCN (arts. 1º a 23; publicação no DOU de 9/5/2002, nota 19). Ponto em aberto resolvido: efeitos da ADI 4029 registrados nas notas (ex nunc, só para MPs novas; texto mantido na edição oficial com nota de rodapé; cai o prazo de 14 dias e a remessa sem parecer; art. 6º, caput, intacto)
- 2026-10-20 09:50 — norma:resolucao-cn-3-1990: verificado sem correção
- 2026-10-20 09:50 — org:arquetipo-estadual-assembleia-legislativa: verificado sem correção
- 2026-10-20 09:50 — org:comissao-representativa-do-congresso-nacional: verificado sem correção
- 2026-10-20 09:50 — org:cpis-da-camara-dos-deputados: verificado sem correção
- 2026-10-20 09:50 — org:cpis-do-senado-federal: verificado sem correção
- 2026-10-20 09:50 — org:cpmis-do-congresso-nacional: verificado sem correção
- 2026-10-20 09:50 — proc:comissao-parlamentar-de-inquerito: verificado etapa por etapa; sem correção
- 2026-10-20 23:05 — retomada após renovação da cota; git status limpo nos arquivos da tarefa, 22 entidades verificadas já no commit 61a5eed; campo remete_a continua ausente do esquema. Próximo: proc:emenda-constitucional
- 2026-10-20 23:06 — proc:emenda-constitucional: verificado etapa por etapa. Corrigido: a etapa 'iniciativa' mandava a PEC das Assembleias à Câmara ou ao Senado; agora só ao Senado (RISF, art. 212, II; o RICD, art. 201, I, lista também 'o Senado Federal', logo é a lista do que a Câmara aprecia e não define origem; a página oficial Clique Regimento da Câmara, card 4, diz 'apresentada perante o Senado'). Ponto em aberto (PEC do Presidente começa na Câmara): mantido como inferido, agora com confianca 'inferido' em campos.etapas e a dedução por exclusão do RISF, art. 212, explicada. Acrescentado RCCN, art. 85, na promulgação
- 2026-10-20 23:06 — rel:assembleias-legislativas-propoem-emenda-constitucional: corrigido: condição dizia que a proposta podia começar na Câmara ou no Senado; agora só no Senado; retirada a fonte RICD, art. 201, I (fonte: RISF, art. 212, II; Clique Regimento da Câmara, card 4)
- 2026-10-20 23:06 — rel:presidente-da-republica-propoe-emenda-constitucional: verificado sem correção
- 2026-10-20 23:06 — rel:deputados-propoem-emenda-constitucional: verificado sem correção
- 2026-10-20 23:06 — rel:senadores-propoem-emenda-constitucional: verificado sem correção
- 2026-10-20 23:06 — rel:ccjc-camara-delibera-emenda-constitucional: verificado sem correção
- 2026-10-20 23:06 — rel:plenario-camara-delibera-emenda-constitucional: verificado sem correção
- 2026-10-20 23:06 — rel:ccj-senado-delibera-emenda-constitucional: verificado sem correção
- 2026-10-20 23:06 — rel:plenario-senado-delibera-emenda-constitucional: verificado sem correção
- 2026-10-20 23:06 — rel:mesa-da-camara-promulga-emenda-constitucional: verificado sem correção
- 2026-10-20 23:06 — rel:mesa-do-senado-promulga-emenda-constitucional: verificado sem correção
- 2026-10-20 23:07 — proc:lei-complementar: verificado etapa por etapa. Ajuste: na etapa 'senado-comissoes', o RISF, art. 91, § 1º, V ('proposições diversas') não exclui expressamente o projeto de lei complementar; a ida obrigatória ao Plenário passou a ser fundamentada também no art. 288, III, a (maioria absoluta da composição da Casa). remete_a não aplicado (fora do esquema)
- 2026-10-20 23:07 — rel:comissoes-senado-deliberam-lei-complementar: verificado; condição e fonte completadas com o RISF, art. 288, III, a (o art. 91, § 1º, V, sozinho, não exclui o projeto de lei complementar)
- 2026-10-20 23:07 — rel:comissoes-camara-deliberam-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:comissoes-camara-propoem-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:comissoes-mistas-propoem-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:comissoes-senado-propoem-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:congresso-nacional-aprecia-veto-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:deputado-federal-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:eleitorado-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:imprensa-nacional-publica-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:pgr-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:plenario-camara-delibera-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:plenario-senado-delibera-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:presidente-da-republica-promulga-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:presidente-da-republica-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:presidente-da-republica-publica-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:presidente-da-republica-sanciona-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:presidente-da-republica-veta-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:presidente-do-senado-promulga-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:primeiro-vice-presidente-do-senado-promulga-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:senador-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:stf-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:stj-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:stm-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:tse-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:07 — rel:tst-propoe-lei-complementar: verificado sem correção
- 2026-10-20 23:08 — proc:lei-delegada: verificado etapa por etapa. Corrigido (ponto em aberto resolvido): a etapa 'promulgacao-da-resolucao' tinha como ator org:congresso-nacional e dizia que o RCCN não indica quem promulga; agora o ator é cargo:presidente-do-senado-federal (RCCN, art. 52, parágrafo único; CF, art. 57, § 5º)
