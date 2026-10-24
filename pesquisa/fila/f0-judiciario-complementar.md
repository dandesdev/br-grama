---
id: f0-judiciario-complementar
escopo: "Fatia 0, lacunas da varredura e pendências: organização judiciária complementar, precatórios e funções essenciais, CF arts. 5º, XXXVIII; 98; 100; 105; 108; 111-A; 129, VII; 130; ADCT, arts. 87, 101 a 105, 107-A"
status: em-andamento
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: null
---

## Entregáveis

- [ ] Tribunal do júri (art. 5º, XXXVIII), juizados especiais e turmas recursais (art. 98, I; Leis 9.099/1995, 10.259/2001, 12.153/2009) e justiça de paz (art. 98, II), com cargos agregados quando couber.
- [ ] Órgãos que hoje só aparecem no texto: ENFAM e Conselho da Justiça Federal (art. 105, parágrafo único), ENAMAT e CSJT (art. 111-A, § 2º).
- [ ] Competências que faltam: TRF julga recursos dos juízes federais e julga juízes federais e membros do MPU (art. 108); STJ julga conselheiros dos tribunais de contas estaduais e membros do MPU que oficiam perante tribunais, incluindo os Procuradores Regionais Eleitorais (art. 105, I, a). Sem nó único para os TRFs: decida (conjunto ou relação por TRF) e justifique.
- [ ] Precatórios (art. 100; ADCT, arts. 101 a 105 e 107-A): `obj:precatorio` e `proc:pagamento-de-precatorio`, com o regime especial vigente em 2026-10-01.
- [ ] Controle externo da atividade policial pelo MP (art. 129, VII) e MPs de contas estaduais (art. 130).
- [ ] Pendências do Judiciário: quem nomeia o quinto constitucional do TJDFT; alterações do RISTJ depois da ER 47/2024; `rel:stm-julga-recursos-da-justica-militar-da-uniao` deve citar também a lei de organização da Justiça Militar.
- [ ] Restos do art. 102 apontados pela coleta do controle de constitucionalidade: conflitos federativos (I, f), conflitos de competência (I, o), extradição (I, g) e crime político (II, b); legitimados do mandado de injunção coletivo (Lei 13.300/2016, art. 12) e associações no mandado de segurança coletivo. O CPP e o rito do habeas corpus só se ajudarem.
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
- 2026-10-23 — iniciada; lidos CLAUDE.md, instruções, modelo, protocolo, decisões e o quadro de f0-cobertura (arts. 5º, 98, 100, 102, 105, 108, 111-A, 129, 130; ADCT 87, 101 a 107-A)
- 2026-10-23 23:25 — gravado norma:lei-9099-1995
- 2026-10-23 23:25 — gravado norma:lei-10259-2001
- 2026-10-23 23:25 — gravado norma:lei-12153-2009
- 2026-10-23 23:25 — gravado norma:lei-11798-2008
- 2026-10-23 23:25 — gravado norma:lei-11697-2008
- 2026-10-23 23:25 — gravado norma:lei-14824-2024
- 2026-10-23 23:25 — gravado norma:decreto-lei-3689-1941
- 2026-10-23 23:25 — gravado norma:decreto-lei-253-1967
- 2026-10-23 23:25 — gravado norma:ec-136-2025
- 2026-10-23 23:29 — gravado norma:resolucao-cnj-174-2013
- 2026-10-23 23:29 — gravado norma:resolucao-cnj-303-2019
- 2026-10-23 23:29 — gravado norma:resolucao-cnmp-20-2007
- 2026-10-23 23:29 — gravado fonte:stf-constituicao-e-o-supremo-art-98
- 2026-10-23 23:29 — gravado fonte:stf-ado-40
- 2026-10-23 23:29 — gravado fonte:stf-adi-7064
- 2026-10-23 23:29 — gravado fonte:tjdft-noticia-posse-desembargadora-2026-08-05
- 2026-10-24 16:30 — retomada após fim da cota; conferidos os 16 arquivos do diário (normas e fontes); próximos passos: órgãos, cargos, relações, precatórios
- 2026-10-24 16:31 — gravado norma:provimento-cnj-207-2025
- 2026-10-24 16:31 — gravado fonte:cnj-noticia-revisao-resolucao-303-2026-06-11
- 2026-10-24 16:31 — gravado aviso:resolucao-cnj-303-desatualizada-ec-136
- 2026-10-24 16:32 — gravado rel:presidente-nomeia-desembargador-do-tjdft
- 2026-10-24 16:38 — gravado org:tribunais-do-juri
- 2026-10-24 16:38 — gravado org:tribunais-do-juri-federais
- 2026-10-24 16:38 — gravado org:juizados-especiais-estaduais
- 2026-10-24 16:38 — gravado org:turmas-recursais-estaduais
- 2026-10-24 16:38 — gravado org:juizados-especiais-federais
- 2026-10-24 16:38 — gravado org:turmas-recursais-federais
- 2026-10-24 16:38 — gravado org:turma-nacional-de-uniformizacao
- 2026-10-24 16:38 — gravado org:justica-de-paz
- 2026-10-24 16:38 — gravado org:enfam
- 2026-10-24 16:38 — gravado org:conselho-da-justica-federal
- 2026-10-24 16:38 — gravado org:enamat
- 2026-10-24 16:38 — gravado org:csjt
- 2026-10-24 16:40 — gravado cargo:jurado
- 2026-10-24 16:40 — gravado cargo:juiz-leigo
- 2026-10-24 16:40 — gravado cargo:conciliador-dos-juizados-especiais
- 2026-10-24 16:40 — gravado cargo:juiz-de-paz
- 2026-10-24 16:40 — gravado rel:tribunais-do-juri-julga-acao-penal-publica
- 2026-10-24 16:40 — gravado rel:tribunais-do-juri-federais-julga-acao-penal-publica
- 2026-10-24 16:40 — gravado rel:juiz-de-direito-preside-tribunais-do-juri
- 2026-10-24 16:40 — gravado rel:juiz-federal-preside-tribunais-do-juri-federais
- 2026-10-24 16:40 — gravado rel:turmas-recursais-estaduais-julga-recursos-dos-juizados
- 2026-10-24 16:40 — gravado rel:turmas-recursais-federais-julga-recursos-dos-juizados
- 2026-10-24 16:40 — gravado rel:tnu-julga-recursos-das-turmas-recursais-federais
- 2026-10-24 16:40 — gravado rel:stj-julga-recursos-da-tnu
- 2026-10-24 16:40 — gravado rel:stj-julga-recursos-das-turmas-recursais-estaduais
- 2026-10-24 16:40 — gravado rel:juiz-leigo-auxilia-juiz-de-direito
- 2026-10-24 16:40 — gravado rel:conciliador-auxilia-juiz-de-direito
- 2026-10-24 16:40 — gravado rel:conselho-da-justica-federal-coordena-justica-federal
- 2026-10-24 16:40 — gravado rel:conselho-da-justica-federal-corrige-juiz-de-trf
- 2026-10-24 16:40 — gravado rel:csjt-coordena-justica-do-trabalho
