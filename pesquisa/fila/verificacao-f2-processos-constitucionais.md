---
id: verificacao-f2-processos-constitucionais
escopo: "Revisão independente da coleta f2-processos-constitucionais (Leis 9.868, 9.882, 11.417, 12.016, 13.300, 9.507, 8.038 e 1.079)"
status: em-andamento
depende_de: [f2-processos-constitucionais]
iniciada_em: 2026-11-11
concluida_em: null
---

Siga `pesquisa/instrucoes-verificacao.md`. Confira contra as fontes primárias (cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-processos-constitucionais/`, `pesquisa/brutos/stf/2026-11-11-f2-processos-constitucionais/`, o Planalto e o portal do STF) todas as entidades com `verificacao.tarefa: "f2-processos-constitucionais"`: as 15 criadas e as 3 existentes que a coleta editou (a nota em `verificacao.notas` diz o que mudou). Confira também o quadro de cobertura de `pesquisa/fila/f2-processos-constitucionais.md`.

Para cada processo (ADI, ADC, ADO, ADPF, súmula vinculante, reclamação, mandado de segurança, mandado de injunção, habeas data, ação penal originária, crime de responsabilidade de ministro do STF e do PGR, crime de responsabilidade do governador), confira etapa por etapa: atores, prazos, quóruns e dispositivo.

Pontos de atenção:
- Lei 1.079, arts. 24 a 35 (julgamento do Presidente no Senado), parciais: diga se a etapa de julgamento de `proc:crime-de-responsabilidade-do-presidente` deve citá-los, junto ou no lugar dos arts. 59 a 68, à luz da ADPF 378; se couber, cite-os e reclassifique as linhas;
- RISTF: emendas regimentais depois da ER 58/2022 (ER 59/2023 e seguintes) nos arts. 354-A a 354-G e na competência das Turmas para a ação penal originária; se a revisão do Judiciário (`verificacao-f2-judiciario`, em paralelo) já tiver gravado a fonte, reaproveite;
- `rel:senado-julga-presidente-do-cgibs` (Lei 1.079, arts. 79-A, 79-B e 80; LC 227/2026) contra a divisão da CF entre Senado e STF;
- processo do governador só pela Lei 1.079: a Súmula Vinculante 46 trata da competência legislativa sobre crimes de responsabilidade; veja se as etapas dependem de norma estadual;
- vigências: `proc:reclamacao` está `null` (procure a data de início de vigência do CPC, Lei 13.105/2015, em fonte oficial) e `proc:sumula-vinculante` em 2007-03-20 calculada pela coleta;
- `fonte:stf-adpf-378` e `fonte:stf-adi-4296` contra o portal do STF.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f2-processos-constitucionais"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário

- 2026-11-11 23:32 — iniciada; lidos CLAUDE.md, decisões, modelo, protocolo, instruções de verificação e da fase 2, e o diário da coleta. Escopo: 19 entidades com verificacao.tarefa f2-processos-constitucionais
- 2026-11-11 23:55 — cópias locais convertidas em texto (scratch próprio); conferidas contra as leis: proc:adi, proc:adc, proc:ado, proc:adpf, proc:mandado-de-seguranca, proc:mandado-de-injuncao, proc:habeas-data → verificados. Correções: (a) proc:adi: "agravo ao Plenário" e "salvo se o Plenário prover o agravo" → só "agravo" (Lei 9.868, art. 4º, parágrafo único, não diz o órgão); (b) proc:adc: resumo "só cabe contra lei" → "sobre lei ou ato normativo federal" (CF, art. 102, I, a); (c) proc:mandado-de-injuncao: competência do STJ ressalva também as Justiças Militar, Eleitoral, do Trabalho e Federal (CF, art. 105, I, h). ADI 4296: a caução do art. 7º, III, da Lei 12.016 não foi declarada inconstitucional (só o voto vencido do relator a atacava); a etapa que a menciona está certa. Validação limpa
- 2026-11-12 00:10 — proc:reclamacao verificado. Correções: (a) etapa 'exame-inicial': o CPC, art. 988, § 5º, II (redação da Lei 15.484/2026), indefere a reclamação por precedente qualificado quando não esgotadas as instâncias ordinárias OU quando o ato não contraria o precedente de forma manifesta; a coleta tratava o desacordo manifesto como exceção à exigência de esgotamento; (b) vigência null → 2016-03-18, com a nova fonte:stj-enunciado-administrativo-1 (página oficial do STJ: "entrará em vigor no dia 18 de março de 2016"; cópia em pesquisa/brutos/stj/2026-11-11-verificacao-f2-processos-constitucionais/). Fonte nova fica 'coletado'. Sugestão fora do escopo: norma:lei-13105-2015 e proc:caminho-de-um-processo têm vigência sem dia ("2016-03" / null) e podem usar a mesma fonte
- 2026-11-12 00:25 — proc:sumula-vinculante verificado contra a Lei 11.417, a CF e o RISTF (PDF de f2-judiciario; arts. 354-A a 354-G: ER 46/2011, e 354-D com a ER 54/2020). ER 59/2023 (PDF oficial baixado pela revisão do Judiciário, que a dá como a última até 2026-10-01): só arts. 5º, I, 9º, I, l e m, e revoga o art. 23, III; não toca a súmula vinculante. Vigência: nenhuma fonte oficial com o dia (Planalto remete só ao art. 11; fichas do Senado e da Câmara só têm a publicação de 20/12/2006); pela contagem da LC 95, art. 8º, § 1º, que o STJ aplicou ao CPC, daria 21/3/2007; imprensa fala em 19 ou 20/3. Mantido 2007-03-20 com incerta: true e a divergência na nota; sem aviso (lacuna menor, já marcada como incerta)
