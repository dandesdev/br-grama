---
id: f0-educacao
escopo: "Fatia 0, lacunas da varredura: educação, CF arts. 211 a 214; ADCT, arts. 60 e 60-A"
status: em-andamento
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: null
---

## Entregáveis

- [ ] Sistemas de ensino em regime de colaboração (art. 211): federal, estadual e municipal (tipo `sistema`), com as prioridades de atuação de cada ente (§§ 2º e 3º).
- [ ] Piso constitucional da educação (art. 212) como `obj:` do tipo `regra-fiscal`; o salário-educação já existe como tributo (`obj:tributo-salario-educacao`): ligue, sem recriar.
- [ ] Fundeb (art. 212-A; Lei 14.113/2020) como `obj:` do tipo `fundo`, com os repasses e a complementação da União.
- [ ] Plano Nacional de Educação (art. 214): a lei vigente em 2026-10-01 (confira se o PNE de 2014 foi prorrogado ou substituído) como `obj:` e norma.
- [ ] Conselho Nacional de Educação (Lei 9.131/1995) como colegiado do Ministério da Educação, se ajudar a mostrar quem decide.
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
- 2026-10-23 22:57 — iniciada; lidos CLAUDE.md, instruções, modelo, protocolo, decisões e o quadro de f0-cobertura (arts. 211 a 214; ADCT 60 e 60-A)
- 2026-10-23 23:05 — gravado obj:piso-constitucional-da-educacao (CF, art. 212; conferidos arts. 34, VII, e, e 35, III no texto de 2026-10-16; nenhuma EC posterior a 2026-10-01 toca arts. 211 a 214 ou ADCT 60 e 60-A, conforme quadro de ECs de 2026-10-23)
- 2026-10-23 23:25 — gravadas norma:lei-9394-1996, norma:lei-14113-2020, norma:lc-220-2025 (institui o SNE; achado: não estava nas propostas), norma:lei-15388-2026 (PNE 2026-2036; o PNE 2014 foi prorrogado até 31/12/2025 pela Lei 14.934/2024), norma:lei-4024-1961, norma:lei-9131-1995, norma:portaria-mec-102-2026 (institui a Cite). Wayback com erro 429; arquivo null por ora. Cópias em pesquisa/brutos/planalto-leis/2026-10-23/educacao e pesquisa/brutos/dou/2026-10-23/educacao
- 2026-10-23 23:35 — gravados org:sistema-nacional-de-educacao, org:sistema-federal-de-ensino, org:arquetipo-estadual-sistema-de-ensino, org:arquetipo-municipal-sistema-de-ensino (tipo sistema; CF, art. 211, caput e §§ 1º a 4º; LDB, arts. 8º a 11 e 16 a 18; LC 220/2025)
- 2026-10-23 23:45 — gravado obj:fundeb (CF, art. 212-A; ADCT, arts. 60 e 60-A; Lei 14.113/2020). Revisão do ADCT 60-A: nenhuma lei achada até 2026-10-01 (busca web; o prazo é o sexto ano, 2026)
- 2026-10-23 23:55 — gravadas 12 relações: rel:uniao-repassa-complementacao-fundeb, rel:estados-repassam-recursos-ao-fundeb, rel:municipios-repassam-recursos-ao-fundeb, rel:tcu-fiscaliza-fundeb, rel:arquetipo-estadual-tce-fiscaliza-fundeb, rel:tcu-fiscaliza-piso-constitucional-da-educacao, rel:arquetipo-estadual-tce-fiscaliza-piso-constitucional-da-educacao, três rel:*-integra-sne, rel:mec-coordena-sne, rel:mec-coordena-sistema-federal-de-ensino (de = MEC inferido: as leis dizem 'União')
- 2026-10-24 00:05 — gravados org:conselho-nacional-de-educacao (contido_em MEC pelo Decreto 12.769/2025, Anexo I, art. 2º, III), cargo:conselheiro-do-cne, rel:presidente-nomeia-conselheiro-do-cne, rel:cne-assessora-ministro-da-educacao
- 2026-10-24 00:20 — gravados norma:cite-resolucao-1-2026, org:cite (contido_em SNE, inferido), rel:ministro-da-educacao-preside-cite, obj:custo-aluno-qualidade (tipo documento, falta termo), rel:cite-delibera-custo-aluno-qualidade, rel:mec-calcula-custo-aluno-qualidade, org:comissao-intergovernamental-de-financiamento-da-educacao-basica, rel:comissao-intergovernamental-delibera-fundeb, obj:plano-nacional-de-educacao, rel:presidente-propoe-plano-nacional-de-educacao
- 2026-10-24 00:35 — gravados fonte:cne-composicao e fonte:mec-quem-e-quem (membros natos do CNE: secretários de Educação Básica e Superior; a lei ainda fala em Secretário de Educação Fundamental), rel:uniao-repassa-cotas-salario-educacao-estados e -municipios (CF, art. 212, § 6º; de = União inferido); obj:piso-constitucional-da-educacao ligado a obj:tributo-salario-educacao nas notas, sem editar o tributo
