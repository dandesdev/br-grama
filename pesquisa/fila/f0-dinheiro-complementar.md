---
id: f0-dinheiro-complementar
escopo: "Fatia 0, lacunas da varredura e pendências: dinheiro e regras fiscais, CF arts. 146, 163-A, 166, § 8º, 167, 167-A a 167-G, 239, 240; ADCT, arts. 40, 62, 76 a 76-B, 79 a 82, 92 a 92-B, 132, 138"
status: coletada
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: 2026-10-24
---

## Entregáveis

- [x] Créditos adicionais (art. 166, § 8º; art. 167, V; Lei 4.320/1964) como `obj:` e, se ajudar, etapa no ciclo orçamentário.
- [x] Calamidade pública nacional (arts. 167-B a 167-G): `obj:` e `proc:` curto.
- [x] Mecanismo de ajuste fiscal (art. 167-A) e Desvinculação de Receitas (ADCT, arts. 76 a 76-B) como `regra-fiscal`.
- [x] Simples Nacional (art. 146, parágrafo único; LC 123/2006) com o seu comitê gestor.
- [x] FAT e BNDES (art. 239; Lei 7.998/1990): `obj:fundo-de-amparo-ao-trabalhador` (tipo `fundo`), `org:bndes` (empresa pública) e o adicional por rotatividade (art. 239, § 4º).
- [x] Sistema S (art. 240): as entidades como conjunto paraestatal (fronteira, D05) e a contribuição.
- [x] Fundos de combate à pobreza (ADCT, arts. 79 a 82) e Zona Franca de Manaus (ADCT, arts. 40, 92 a 92-B), se vigentes em 2026-10-01.
- [x] Pendências de f0-dinheiro: bancadas estaduais como proponentes da emenda de bancada; ADI 8010 (LC 200/2023); presidente do Comitê Gestor do IBS em 2026-10-01; verbo para "propõe a exoneração" (proponha se fizer falta).
- [x] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
- 2026-10-23 23:19 — iniciada; lendo instruções, decisões, cobertura e diários de f0-dinheiro
- 2026-10-23 23:25 — gravados norma:lei-4320-1964, obj:credito-adicional, rel:cmo-delibera-credito-adicional, rel:congresso-delibera-credito-adicional, rel:presidente-edita-credito-adicional (cópias das leis em pesquisa/brutos/planalto-leis/2026-10-23-dinheiro/)
- 2026-10-23 23:25 — complementado proc:ciclo-orcamentario (de f0-dinheiro, já verificado): etapa nova creditos-adicionais depois de execucao (volta a execucao), seguintes de execucao com 'quando', nota (3) atualizada; verificacao volta a coletado
- 2026-10-23 23:26 — gravados norma:ec-109-2021, obj:estado-de-calamidade-publica-nacional, rel:presidente-propoe-estado-de-calamidade-publica-nacional, rel:congresso-delibera-estado-de-calamidade-publica-nacional, proc:calamidade-publica-nacional (remete_a proc:decreto-legislativo, ainda não criado por f0-processos-legislativos)
- 2026-10-23 23:27 — a pedido do coordenador, tirado o remete_a da etapa decretacao de proc:calamidade-publica-nacional (proc:decreto-legislativo ainda não existe); texto da etapa diz que segue o rito do decreto legislativo. PENDENTE: ligar remete_a quando f0-processos-legislativos criar proc:decreto-legislativo
- 2026-10-23 23:28 — gravados obj:mecanismo-de-ajuste-fiscal, rel:arquetipo-estadual-tce-fiscaliza-mecanismo-de-ajuste-fiscal, obj:desvinculacao-de-receitas (cópia emc27.htm; arts. 167-A, ADCT 76, 76-A e 76-B cobertos)
- 2026-10-23 23:29 — gravados norma:lc-123-2006, obj:simples-nacional, org:comite-gestor-do-simples-nacional, rel:cgsn-regulamenta-simples-nacional (art. 146 coberto; o parágrafo único virou § 1º com a EC 132/2023; composição do CGSN pela LC 214/2025, art. 516, efeitos desde 1º/1/2025)
- 2026-10-24 16:30 — retomada por novo agente; conferidos os arquivos gravados (Simples Nacional e anteriores) e as cópias em pesquisa/brutos/planalto-leis/2026-10-23-dinheiro/; segue FAT e BNDES. proc:decreto-legislativo ainda não existe em dados/
- 2026-10-24 16:40 — gravados norma:lei-7998-1990, norma:lei-5662-1971 (arquivo null: Wayback devolveu 429; tentar de novo)
- 2026-10-24 16:45 — gravados norma:lei-8019-1990 (redação da LC 214/2025 só vale a partir de 2027), norma:decreto-11496-2023
- 2026-10-24 16:50 — gravados obj:fundo-de-amparo-ao-trabalhador, org:codefat, rel:codefat-delibera-fat (verbo 'delibera' por falta de 'gere')
- 2026-10-24 16:58 — gravados org:bndes (empresa pública, D39: contido_em org:poder-executivo-federal), rel:bndes-vincula-se-mdic, rel:fat-repassa-recursos-bndes
- 2026-10-24 17:05 — gravados obj:tributo-contribuicao-adicional-por-rotatividade, rel:uniao-competencia-tributo-contribuicao-adicional-por-rotatividade, aviso:contribuicao-adicional-por-rotatividade-sem-lei (art. 239 coberto)
- 2026-10-24 17:20 — gravados norma:decreto-lei-4048-1942, norma:decreto-lei-9403-1946, norma:decreto-lei-8621-1946, norma:decreto-lei-9853-1946, norma:lei-8315-1991, norma:lei-11457-2007 (cópias novas em pesquisa/brutos/planalto-leis/2026-10-24-dinheiro/)
- 2026-10-24 17:30 — gravados org:sistema-s (paraestatal, nao-estatal), obj:tributo-contribuicoes-ao-sistema-s, rel:uniao-competencia-tributo-contribuicoes-ao-sistema-s (inferido), rel:receita-federal-arrecada-contribuicoes-ao-sistema-s (art. 240 e ADCT, art. 62 cobertos)
- 2026-10-24 17:45 — gravados norma:lc-111-2001, norma:ec-67-2010, norma:decreto-lei-288-1967
- 2026-10-24 17:55 — gravados obj:fundo-de-combate-e-erradicacao-da-pobreza, obj:arquetipo-estadual-fundo-de-combate-a-pobreza, obj:arquetipo-municipal-fundo-de-combate-a-pobreza, rel:mds-homologa-orcamentos-sistema-s (ADCT, arts. 79 a 83 cobertos)
- 2026-10-24 18:05 — gravados org:suframa (autarquia, D39), rel:suframa-vincula-se-mdic, obj:zona-franca-de-manaus (ADCT, arts. 40, 92, 92-A e 92-B cobertos)
- 2026-10-24 18:15 — gravados org:bancadas-estaduais-no-congresso-nacional (conjunto, contido_em org:congresso-nacional), rel:bancadas-estaduais-propoem-emenda-de-bancada-ao-orcamento (pendência de f0-dinheiro). obj:emenda-de-bancada-ao-orcamento (f0-dinheiro, verificado) diz nas notas que não há entidade para bancada; não editei (fora do escopo): revisão deve atualizar a nota
- 2026-10-24 18:25 — ADI 8010 (pendência de f0-dinheiro): ajuizada pela Anadef contra a sujeição das receitas próprias da DPU ao limite da LC 200/2023 (art. 3º, V, e § 2º, IV, têm 'Vide ADI 8010' no Planalto); relator Alexandre de Moraes; notícia do STF de 1/9/2026 sem decisão (https://noticias.stf.jus.br/postsnoticias/associacao-questiona-no-stf-submissao-de-receitas-proprias-da-dpu-aos-limites-do-arcabouco-fiscal/). Liminar de Moraes excluindo do limite as despesas da DPU pagas com receitas próprias, segundo notícias não oficiais (lex.com.br, Jornal do Comércio), datada de 5/10/2026, depois da data de referência; portal do STF deu 504. Nada muda em 2026-10-01. Proposta: a revisão acrescenta isso às notas de obj:regime-fiscal-sustentavel (f0-dinheiro), que não editei
- 2026-10-24 18:45 — gravados fonte:cgibs-portaria-1-2026, fonte:cgibs-portaria-9-2026 (PDFs em pesquisa/brutos/cgibs/2026-10-24/), cargo:presidente-do-cgibs, pessoa:flavio-cesar-mendes-de-oliveira, rel:flavio-cesar-mendes-de-oliveira-ocupa-presidente-do-cgibs (pendência de f0-dinheiro: presidente do CGIBS em 2026-10-01). Achado: a Portaria 1/2026 cita o art. 483, § 1º, III, da LC 214/2025 como base da eleição, e não o art. 16 da LC 227/2026; o mandato até 31/3/2027 é menor que os 2 anos do art. 16; anotado no cargo
- 2026-10-24 19:00 — gravados norma:lei-10180-2001, obj:dados-contabeis-orcamentarios-e-fiscais-dos-entes, rel:stn-regulamenta-dados-contabeis-orcamentarios-e-fiscais-dos-entes (art. 163-A coberto; órgão central de contabilidade = org:secretaria-do-tesouro-nacional, já existente)
- 2026-10-24 19:10 — complementados (verificação volta a coletado, com nota): obj:tributo-ibs (ADCT, art. 132 nas fontes e notas), obj:regime-fiscal-sustentavel (ADCT, art. 138; situação da ADI 8010 nas notas), obj:emenda-de-bancada-ao-orcamento (nota sobre a falta de entidade de bancada trocada pela relação nova). Todos eram de f0-dinheiro, verificados; segui o precedente do proc:ciclo-orcamentario
- 2026-10-24 19:15 — proc:decreto-legislativo já existe (f0-processos-legislativos, coletado): ligada a etapa decretacao de proc:calamidade-publica-nacional com remete_a proc:decreto-legislativo (PENDENTE de 23:27 resolvida)
- 2026-10-24 19:25 — arquivo (Wayback, pela API CDX, já que a /wayback/available devolvia 429) preenchido em todas as normas e fontes novas desta sessão
- 2026-10-24 19:30 — cobertura por artigo: CF 146 coberto (Simples); 163-A coberto (dados fiscais, STN); 166, § 8º, coberto (crédito adicional); 167 parcial: V e §§ 2º e 3º (crédito adicional) e III (regra de ouro, f0-dinheiro) cobertos, demais vedações ficam como detalhe; 167-A coberto; 167-B a 167-G cobertos (proc:calamidade-publica-nacional); 239 coberto (FAT, Codefat, BNDES, 28%, adicional por rotatividade; § 3º abono e § 5º avaliação nas notas); 240 coberto (Sistema S e contribuição). ADCT 40, 92, 92-A e 92-B cobertos (Zona Franca, Suframa; Fundo de Sustentabilidade do Amazonas, § 2º do 92-B, não pesquisado); 62 coberto pelo Sistema S (Senar sem nó próprio); 76 a 76-B cobertos (DRU); 79 a 83 cobertos (fundo federal e fundos estaduais e municipais; o fundo de privatizações do art. 81 e o conselho consultivo do art. 79 sem nó); 132 coberto em obj:tributo-ibs; 138 coberto em obj:regime-fiscal-sustentavel
- 2026-10-24 19:31 — pendências de f0-dinheiro: bancadas estaduais (feito), ADI 8010 (notas do regime fiscal), presidente do CGIBS (feito), verbo para propor exoneração: proposta 'propoe-exoneracao' (rel:cmn-propoe-exoneracao-presidente-do-banco-central segue com 'propoe')
- 2026-10-24 19:32 — propostas de vocabulário: relação 'gere' (Codefat e FAT; MDS e Fundo de Combate à Pobreza; usado 'delibera' e relativo_a); relação 'propoe-exoneracao'; tipo_objeto 'regime-tributario' ou 'regime-fiscal-especial' (Simples Nacional e Zona Franca, hoje 'regra-fiscal'); 'homologa' usado para 'aprova os orçamentos' do Sesi, Sesc e Sest
- 2026-10-24 19:33 — concluída; validação sem erros
