---
id: verificacao-piloto-processo-lei
escopo: "Verificação independente: entidades com verificacao.tarefa = "piloto-processo-lei""
status: em-andamento
depende_de: []
iniciada_em: 2026-10-17
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com verificacao.tarefa = "piloto-processo-lei" conferidas contra a fonte (liste com: `grep -l '"tarefa": "...' dados/*/*.json`)
- [ ] Pontos em aberto da coleta, resolvidos ou documentados:
- RISF e RCCN: o texto oficial vai até jul/2025; houve resoluções depois que alterem os dispositivos citados? (achado:risf-rccn-compilacao-ate-julho-2025)
- Prazo de sanção tácita: "15 dias úteis" (art. 66, §§ 1º e 3º): confirme a leitura (achado:prazo-sancao-tacita-dias-uteis)
- Quem manda publicar a lei promulgada pelo Presidente do Senado (achado:publicacao-apos-promulgacao-supletiva)
- O regime de urgência (regimes[0]) e os prazos estruturados (valor/unidade) foram criados na migração: confira contra a CF e os regimentos

## Diário
- 2026-10-17 — iniciada; lidos CLAUDE.md, instruções de verificação, modelo de dados, protocolo e decisões. Escopo: 55 arquivos com verificacao.tarefa = "piloto-processo-lei" (4 achados, 2 cargos, 8 normas, 14 órgãos, 1 processo, 26 relações).
- 2026-10-17 09:53 — norma:lindb: verificado (Planalto compilado, 2026-10-17): art. 1º e §§ 1º e 3º; nome dado pela Lei 12.376/2010; DOU 9/9/1942 e retificações conferidos
- 2026-10-17 09:53 — norma:lc-95-1998: verificado (Planalto): art. 8º e §§ 1º-2º (LC 107/2001), art. 19 (vigência em 90 dias), DOU 27/2/1998
- 2026-10-17 09:53 — norma:lei-9709-1998: verificado (Planalto): arts. 13-15, DOU 19/11/1998
- 2026-10-17 09:53 — norma:decreto-9215-2017: verificado; CORRIGIDO vigencia.de null → 2017-12-01 (art. 22: 'entra em vigor em 1º de dezembro de 2017'); arts. 2º e 3º conferidos
- 2026-10-17 09:53 — norma:decreto-11329-2023: verificado; CORRIGIDO vigencia.de null → 2023-01-24 (art. 5º); Anexo I, art. 38, I conferido; acrescentados Decretos 11.426/2023 e 12.420/2025 às notas de alterações
- 2026-10-17 09:54 — norma:ricd: verificado: texto compilado da Câmara (2026-10-17) traz alterações até a Res. 34/2026; Res. 33 e 34/2026 só alteram arts. sobre Mesa, bancadas e secretarias, nenhum dispositivo citado no processo; art. 7º da Res. 17/1989 (vigência na publicação) conferido
