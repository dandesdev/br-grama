---
id: verificacao-f2-financas-publicas
escopo: "Revisão independente da coleta f2-financas-publicas (Lei 4.320/1964, LC 101/2000, Lei 10.180/2001, LC 200/2023)"
status: em-andamento
depende_de: [f2-financas-publicas]
iniciada_em: 2026-11-11
concluida_em: null
---

Siga `pesquisa/instrucoes-verificacao.md`. Confira contra as fontes primárias (cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-financas-publicas/` e o Planalto) todas as entidades com `verificacao.tarefa: "f2-financas-publicas"`: as 35 criadas e as 16 existentes que a coleta editou (a nota em `verificacao.notas` diz o que mudou). Confira também o quadro de cobertura de `pesquisa/fila/f2-financas-publicas.md` (as quatro leis saíram com 100%): diga se cada linha "fora" cabe na D49, no item 8 das instruções de fase 2 e na D51.

Pontos de atenção:
- ADI 2.238: a coleta usou a reprodução no portal do Senado. Procure a decisão no portal do STF e confira os dispositivos derrubados (art. 9º, § 3º; art. 23, §§ 1º e 2º; arts. 56 e 57) e como as etapas os refletem;
- Lei 4.320, arts. 23 a 26 e 107 a 113, classificados como fora por superação (D51): diga se a fonte sustenta;
- órgãos centrais da Lei 10.180 (SOF, STN, Secretaria Federal de Controle Interno dentro da CGU) contra os decretos de estrutura vigentes em 2026-10-01;
- percentuais do art. 20 da LRF por Poder e órgão; limites de 90%, 95% e 100% em `proc:reconducao-da-despesa-com-pessoal-ao-limite`;
- limite de despesas da LC 200, art. 3º, no objeto do regime fiscal e na LOA;
- RGF ligado ao Poder Judiciário como um todo; execução da despesa só com as unidades do Executivo como ator;
- verbos usados fora da definição do vocabulário (`publica` para relatórios, `coordena` para supervisão técnica): diga se o uso induz a erro.

Para cada processo novo ou etapa nova, confira atores, prazos, percentuais e dispositivo.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f2-financas-publicas"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário

- 2026-11-11 23:25 — iniciada; lidos CLAUDE.md, D01 a D51, modelo de dados, protocolo, instruções de verificação e de fase 2, tarefa de coleta; 64 arquivos com tarefa f2-financas-publicas em dados/
- 2026-11-11 23:28 — ADI 2.238 no portal do STF (incidente 1829732): acórdão (505 p.) lido na ementa, item 7, e no acórdão, p. 9 a 11; confirma o que a reprodução do Senado diz: procedente quanto ao art. 9º, § 3º, art. 23, § 2º, art. 56, caput, e art. 57, caput; art. 23, § 1º, inconstitucional em parte sem redução de texto; art. 20 julgado constitucional. Republicado no DJe de 15/9/2020; trânsito em 23/9/2020. Abas copiadas em pesquisa/brutos/stf/2026-11-11-verificacao-f2-financas-publicas/
- 2026-11-11 23:28 — gravado fonte:stf-adi-2238-acordao (nova, verificado); verificado fonte:senado-legislacao-adi-2238-decisao
- 2026-11-11 23:31 — verificado proc:reconducao-da-despesa-com-pessoal-ao-limite: 90% (art. 59, § 1º, II), 95% (art. 22, par. único) e 100% (art. 23) certos. Correções: (1) etapa vedacoes dizia "salvo reposição em educação, saúde e segurança"; o art. 22, par. único, IV, só ressalva a reposição por aposentadoria ou falecimento nessas áreas; (2) regime calamidade-publica dizia que só a contagem do prazo fica suspensa; o art. 65, I, suspende a contagem e as disposições do art. 23; (3) ADI 2.238 citada pelo acórdão do STF
- 2026-11-11 23:31 — verificado obj:limites-de-despesa-com-pessoal: percentuais do art. 20 certos (União 2,5/6/40,9/0,6; estados 3/6/49/2, ± 0,4 com TCM; municípios 6/54). ADI 6533 conferida no STF: interpretação conforme ao art. 20, II, a, e § 1º, só para o remanejamento entre Assembleia e TCE de Roraima; percentuais intactos; nota atualizada
- 2026-11-11 23:38 — verificado proc:execucao-da-despesa: etapas, prazos (30 dias do art. 8º e do art. 9º da LRF; 31/12 do art. 36 da Lei 4.320) e dispositivos conferidos; STN como órgão central e autora da programação financeira confirmada no Decreto 11.907/2024, Anexo I, art. 35, I; ADI 2.238 passou a citar o acórdão do STF. Sem erro de conteúdo
- 2026-11-11 23:38 — verificado obj:regime-fiscal-sustentavel: arts. 1º a 10, 13 e 14-A conferidos. Correção: a nota dava as ADIs 7641 e 7922 como "não conferidas" e o texto do limite (art. 3º, § 2º) não registrava as exceções; conferidas no portal do STF: ADI 7641 (Plenário, 4 a 11/4/2025, receitas próprias do Judiciário da União fora do limite; trânsito em 28/10/2025) e ADI 7922 (cautelar divulgada em 27/1/2026, mérito de 19 a 26/6/2026, ata em 2/7/2026; receitas próprias e de convênios do MPU fora do limite). Ambas antes de 2026-10-01: exceção acrescentada nos detalhes; gravadas fonte:stf-adi-7641 e fonte:stf-adi-7922 (novas, verificado); abas em pesquisa/brutos/stf/2026-11-11-verificacao-f2-financas-publicas/
- 2026-11-11 23:41 — verificados obj:loa e obj:ldo (Lei 4.320, arts. 2º a 8º; LRF, arts. 4º, 5º e 45; LC 200/2023, arts. 2º, 3º, §§ 4º e 5º, e 10): sem correção; marcado proc:execucao-da-despesa (fonte da ADI 2.238 trocada pelo acórdão do STF)
- 2026-11-11 23:44 — verificado obj:contas-anuais-do-presidente-da-republica: sem erro; conferida também a ADI 2324 (remetida no art. 56 do Planalto): em 22/8/2019 o Plenário declarou inconstitucional o art. 56, caput, e julgou constitucionais o art. 56, § 2º, e o art. 59, caput; os §§ citados seguem válidos. Aba copiada para os brutos da revisão
