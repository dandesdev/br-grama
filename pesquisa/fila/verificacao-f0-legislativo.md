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
