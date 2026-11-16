---
id: verificacao-pos-1-0
escopo: "Revisão de 23 entidades alteradas depois da sua revisão (f2-fechamento-final e verificacao-f3-calendario-eleicoes-mandatos) e que ficaram como coletado"
status: verificada
iniciada_em: 2026-11-15
concluida_em: 2026-11-15
depende_de: [f2-fechamento-final, verificacao-f3-calendario-eleicoes-mandatos]
---

Siga `pesquisa/instrucoes-verificacao.md`. As entidades abaixo têm `verificacao.status: "coletado"` porque foram mudadas depois de uma revisão (a nota de cada uma diz o que mudou). Confira o que mudou contra a fonte oficial citada (leia a cópia em `pesquisa/brutos/` ou baixe a fonte de novo), e o resto da entidade por amostra. Se conferir, marque `verificado` com `tarefa: "verificacao-pos-1-0"`, a data e uma nota com o que foi conferido. Se não conferir, corrija com fonte e anote no diário.

- `dados/avisos/comissao-orcamento-seguridade-social-sem-registro.json`
- `dados/cargos/dirigente-de-agencia-reguladora.json`
- `dados/fontes/camara-legin-ato-do-presidente-2025-04-09-corregedor.json`
- `dados/fontes/doe-al-2022-05-15.json`
- `dados/fontes/doe-al-2022-10-25-suplemento.json`
- `dados/fontes/doe-al-2022-10.json`
- `dados/fontes/doe-aleam-2026-04-04-extra-2420.json`
- `dados/fontes/doe-aleam-2026-04-05-extra-2422.json`
- `dados/fontes/doe-aleam-2026-05-04-extra-2438.json`
- `dados/fontes/doe-rj-2026-03-24.json`
- `dados/fontes/stj-mioc-209-df-questao-de-ordem-2022.json`
- `dados/normas/lei-13089-2015.json`
- `dados/orgaos/comissao-do-orcamento-da-seguridade-social.json`
- `dados/orgaos/comite-de-harmonizacao-das-administracoes-tributarias.json`
- `dados/pessoas/clarice-costa-calixto.json`
- `dados/pessoas/frederico-carvalho-dias.json`
- `dados/pessoas/leonardo-goes-silva.json`
- `dados/relacoes/clarice-costa-calixto-ocupa-procurador-geral-da-uniao.json`
- `dados/relacoes/diego-coronel-ocupa-corregedor-parlamentar-da-camara-dos-deputados.json`
- `dados/relacoes/frederico-carvalho-dias-ocupa-dirigente-de-agencia-reguladora.json`
- `dados/relacoes/juiz-corregedor-auxiliar-substitui-ministro-corregedor-da-justica-militar.json`
- `dados/relacoes/leonardo-goes-silva-ocupa-dirigente-de-agencia-reguladora.json`
- `dados/relacoes/ministro-do-trabalho-nomeia-codefat.json`

## Diário
- 2026-11-15 — iniciada; lidos CLAUDE.md, docs/ e instrucoes-verificacao.md
- 2026-11-15 — acesso às fontes: legin da Câmara devolve 404 para qualquer ato (inclusive URLs que já funcionaram); a busca camara.leg.br/legislacao/busca funciona. aleam.gov.br sem DNS. STJ recusa o download direto e o Wayback devolveu 429. Nesses casos li a cópia em pesquisa/brutos/. DOU (in.gov.br), Planalto, IOERJ e DOE-AL responderam.
- 2026-11-15 — cópias novas: pesquisa/brutos/dou/2026-11-15-verificacao-pos-1-0/ (ata nº 594 da Antaq, Portarias ANA 270, 439 e 458, Decreto 12.955/2026, busca do DOU por Clarice Costa Calixto), pesquisa/brutos/ioerj/2026-11-15-verificacao-pos-1-0/ (buscas de 23 e 24/3/2026), pesquisa/brutos/planalto/2026-11-15-verificacao-pos-1-0/ (Dnn945, decreto de 4/8/1992; l13089.htm).
- 2026-11-15 — org:comissao-do-orcamento-da-seguridade-social verificado. Decreto de 4/8/1992 lido no Planalto (Dnn945), que confirma o que a Câmara dava. Correção: detalhes diziam 'representantes da Educação, da Economia e do Trabalho podem participar'; agora 'um representante de cada um dos Ministérios da Educação, da Economia, Fazenda e Planejamento e do Trabalho e da Administração participa das reuniões em caráter excepcional (art. 2º)'. Fonte: Planalto, Dnn945.
- 2026-11-15 — aviso:comissao-orcamento-seguridade-social-sem-registro verificado: afeta e nota conferidos; onde_procuramos ganhou a consulta ao Planalto (Dnn945), e a nota diz que falta só o DOU.
- 2026-11-15 — cargo:dirigente-de-agencia-reguladora verificado (só a nota dos ocupantes mudou; ANA e Antaq conferidas no DOU).
- 2026-11-15 — fonte:camara-legin-ato-do-presidente-2025-04-09-corregedor verificada na cópia bruta; busca da Câmara de 2026-11-15 confirma o ato e 'Não consta revogação expressa' (a URL legin dá 404 hoje, como todo o legin).
- 2026-11-15 — fonte:doe-al-2022-05-15 verificada (PDF baixado de novo, idêntico à cópia; quadro e decretos conferidos).
- 2026-11-15 — fonte:doe-al-2022-10-25-suplemento verificada (PDF idêntico à cópia). Acréscimo nas notas: o quadro do expediente ainda mostra o vice 'no exercício do cargo', embora as leis de 24/10 sejam assinadas por Paulo Dantas.
- 2026-11-15 — fonte:doe-al-2022-10 verificada: edições 29103, 29104 e 29105 baixadas de novo e lidas; nas notas, acrescentado o id 29105 da edição normal nº 1932.
- 2026-11-15 — fonte:doe-aleam-2026-04-04-extra-2420 verificada na cópia bruta (site sem DNS). Ajuste nas notas: o carimbo de recebimento (04/04/2026, 23:00) está nas duas cartas.
- 2026-11-15 — fonte:doe-aleam-2026-04-05-extra-2422 verificada na cópia bruta (termo de assunção, 17h de 5/4/2026).
- 2026-11-15 — fonte:doe-aleam-2026-05-04-extra-2438 verificada na cópia bruta (carta de renúncia e termos de posse de 4/5/2026). A ata da eleição (nº 2437, 24 votos) não tem cópia e não foi relida.
- 2026-11-15 — fonte:doe-rj-2026-03-24 verificada pelas buscas da IOERJ refeitas. Correção nas notas: estava 'dirigido ao 1º Vice-Presidente da Assembleia no exercício da Presidência'; ficou 'dirigido aos Exmos. Srs. Membros da Mesa Diretora; o despacho é do Deputado Guilherme Delaroli, 1º Vice-Presidente no exercício da Presidência' (IOERJ, Parte II, 24/3/2026, matéria 2723590).
- 2026-11-15 — fonte:stj-mioc-209-df-questao-de-ordem-2022 verificada na cópia bruta (sem acesso ao STJ nem ao Wayback hoje). Acréscimo nas notas: a relatora pede o referendo do afastamento 'até 31/12/2022'. Sugestão fora do escopo: rel:paulo-dantas-ocupa-governador-al poderia citar isso; não mexi.
- 2026-11-15 — norma:lei-13089-2015 verificada: compilacao_ate Lei 14.026/2020 confirmada no Planalto (texto de hoje igual à cópia de 2026-11-11).
- 2026-11-15 — org:comite-de-harmonizacao-das-administracoes-tributarias verificado (Decreto 12.955, Portaria MF 3.089, LC 214 com a LC 227; busca no DOU sem outra designação em 2026). Sugestão: a LC 227/2026 incluiu no art. 321 os §§ 2º a 4º (pedido de harmonização decidido em até 90 dias úteis, decisões fundamentadas), que os detalhes não citam.
- 2026-11-15 — pessoa:clarice-costa-calixto verificada (nome no decreto de nomeação e na Portaria AGU 245/2026).
- 2026-11-15 — pessoa:frederico-carvalho-dias verificada (decreto de nomeação e extrato de 14/9/2026).
- 2026-11-15 — pessoa:leonardo-goes-silva verificada (Res. ANA 280/2025, Portarias ANA 439 e 542/2026).
- 2026-11-15 — rel:clarice-costa-calixto-ocupa-procurador-geral-da-uniao verificada com correção. Estava: condição 'com atos no cargo em julho e outubro de 2026'. Ficou: 'com atos no cargo até julho de 2026', porque o extrato de 6/11/2026 (acordo 'Nº X/2025', processo SEI de 2025) não diz o ano da assinatura de 9 de outubro; a nota da vigência e o dispositivo da fonte dizem isso. Busca no DOU de 2025 a 15/11/2026 sem exoneração.
- 2026-11-15 — rel:diego-coronel-ocupa-corregedor-parlamentar-da-camara-dos-deputados verificada (ato de 9/4/2025, galeria, edital do DOU de 28/9/2026, RICD art. 21-G).
- 2026-11-15 — rel:frederico-carvalho-dias-ocupa-dirigente-de-agencia-reguladora verificada (ata nº 594 da Antaq lida no DOU e guardada; decreto, contrato e deliberação conferidos).
- 2026-11-15 — rel:juiz-corregedor-auxiliar-substitui-ministro-corregedor-da-justica-militar verificada (Lei 8.457, arts. 14-A, I, e 62, V).
- 2026-11-15 — rel:leonardo-goes-silva-ocupa-dirigente-de-agencia-reguladora verificada: Res. ANA 280/2025 e Portarias ANA 270, 439, 446, 458, 460, 480, 481, 503 e 542 lidas no DOU; o rodízio (Argolo, Góes, Rêgo, Battiston, 16 a 15) bate com as assinaturas. Acréscimo na nota da vigência: a interina de 14/9/2026 era Cristiane Battiston (Portaria 439). Ponto aberto em f2-fechamento-final (Lei 9.984 x Lei 9.986, art. 10): a resolução se apoia na Lei 9.984, arts. 9º e 12; a relação descreve a resolução e não precisa mudar; o provimento_nota do cargo descreve a regra geral do art. 10, sem erro.
- 2026-11-15 — rel:ministro-do-trabalho-nomeia-codefat verificada (só a nota tinha mudado; precedente e Lei 7.998, art. 18, §§ 3º e 4º, conferidos).
- 2026-11-15 — `npm run -s validar`: nenhum erro (10963 entidades; 66 coletadas no total do repositório, nenhuma desta tarefa).
- 2026-11-15 — concluída: 23 de 23 verificadas. Correções de conteúdo: org:comissao-do-orcamento-da-seguridade-social (nomes dos ministérios do art. 2º do decreto de 4/8/1992), rel:clarice-costa-calixto-ocupa-procurador-geral-da-uniao (o ano do acordo de 9 de outubro não é certo). Ajustes em notas: doe-rj-2026-03-24 (a quem o ofício se dirige), doe-aleam-2026-04-04-extra-2420 (carimbo nas duas cartas), doe-al-2022-10 (id 29105). Acréscimos: aviso da seguridade (Planalto em onde_procuramos), stj-mioc-209 (referendo até 31/12/2022), doe-al-2022-10-25-suplemento (quadro do expediente), rel:leonardo-goes-silva (interina de 14/9 era Cristiane Battiston). Não relidos por falta de cópia ou de acesso: as edições 2421 e 2437 do DOE da ALEAM (citadas só nas notas) e o site do CGIBS. Nenhum aviso novo.
