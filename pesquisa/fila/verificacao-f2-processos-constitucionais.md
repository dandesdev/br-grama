---
id: verificacao-f2-processos-constitucionais
escopo: "Revisão independente da coleta f2-processos-constitucionais (Leis 9.868, 9.882, 11.417, 12.016, 13.300, 9.507, 8.038 e 1.079)"
status: pendente
depende_de: [f2-processos-constitucionais]
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
