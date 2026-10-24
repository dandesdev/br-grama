---
id: f0-federacao
escopo: "Fatia 0, lacunas da varredura: federação, estados e municípios, CF arts. 18, § 3º; 20, § 1º; 29; 35; 43; 144, § 10; 182; 236; ADCT, arts. 32 e 69"
status: em-andamento
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: null
---

## Entregáveis

- [ ] `proc:intervencao-estadual` (art. 35): Governador decreta, Assembleia aprecia, TJ provê representação no caso do inciso IV; use os arquétipos e `remete_a` a `proc:intervencao-federal` onde o rito for o mesmo.
- [ ] `proc:alteracao-territorial-de-estados` (art. 18, § 3º; art. 48, VI; Lei 9.709/1998).
- [ ] Processo legislativo municipal: `obj:lei-municipal`, `proc:lei-municipal` (por simetria, como `proc:lei-estadual`, com fonte de que a simetria se aplica) e `rel:eleitorado-municipal-propoe-lei-municipal` (art. 29, XIII).
- [ ] Plano diretor (art. 182; Lei 10.257/2001) como `obj:` da Câmara Municipal.
- [ ] Royalties (art. 20, § 1º): `obj:compensacao-financeira-recursos-naturais` (tipo `fundo` ou outro que você justifique) com repasses a estados e municípios.
- [ ] Serviços notariais e de registro (art. 236; Lei 8.935/1994): conjunto (fronteira, D05), fiscalizado pelo Judiciário (TJ e CNJ).
- [ ] Superintendências de desenvolvimento regional (art. 43): Sudam, Sudene e Sudeco, com `contido_em` ou vínculo ao Ministério da Integração (LCs 124/2007, 125/2007 e 129/2009).
- [ ] Órgãos executivos de trânsito nos arquétipos (art. 144, § 10; Lei 9.503/1997), só se ajudarem a mostrar quem faz o quê.
- [ ] Defensoria Pública do DF (pendência de f0-funcoes-essenciais) e as variações de consultoria jurídica estadual (ADCT, arts. 32 e 69).
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
- 2026-10-23 10:00 — iniciada; lidos CLAUDE.md, instrucoes-agentes, docs, quadro de f0-cobertura
- 2026-10-23 23:05 — gravado fonte:stf-constituicao-e-o-supremo-art-35 (cópias do STF dos arts. 18, 20, 29, 35, 182 e 236 em pesquisa/brutos/stf/2026-10-23-federacao/)
- 2026-10-23 23:12 — gravado proc:intervencao-estadual (CF arts. 35 e 36; Lei 8.625/1993; STF; CEs de SP, BA, PA e GO)
- 2026-10-23 23:20 — gravados fonte:stf-constituicao-e-o-supremo-art-18 e proc:alteracao-territorial-de-estados (CF arts. 18, § 3º, 48, VI, 49, XV, 69; Lei 9.709/1998; ADI 2.650)
- 2026-10-23 23:35 — gravadas norma:sp-sao-paulo-lei-organica-1990 e norma:rj-rio-de-janeiro-lei-organica-1990 (compilações antigas: até as Emendas 31/2008 e 20/2009; anotado nas normas)
- 2026-10-23 23:40 — gravado obj:lei-municipal
- 2026-10-23 23:48 — gravadas 7 relações da lei municipal: rel:eleitorado-municipal-propoe-lei-municipal, rel:vereador-propoe-lei-municipal, rel:prefeito-propoe-lei-municipal, rel:camara-municipal-delibera-lei-municipal, rel:prefeito-sanciona-lei-municipal, rel:prefeito-veta-lei-municipal, rel:camara-municipal-aprecia-veto-lei-municipal
- 2026-10-23 23:55 — gravado proc:lei-municipal (CF art. 29; STF Temas 223 e 917; LOMs de SP e Rio)
- 2026-10-24 00:05 — gravados norma:lei-10257-2001, fonte:stf-constituicao-e-o-supremo-art-182, obj:plano-diretor, rel:camara-municipal-delibera-plano-diretor
- 2026-10-24 00:30 — gravados norma:lei-7990-1989, norma:lei-8001-1990, norma:lei-9478-1997, norma:lei-12734-2012, norma:decreto-2705-1998, fonte:stf-adi-4917, obj:compensacao-financeira-recursos-naturais, rel:uniao-repassa-royalties-do-petroleo-estados, rel:uniao-repassa-royalties-do-petroleo-municipios (ADI 4.917: liminar de 2013 em vigor; mérito pendente em 1º/10)
- 2026-10-24 00:38 — gravado fonte:stf-constituicao-e-o-supremo-art-20 (ADI 4.606, RE 228.800) e ligado ao obj de royalties
- 2026-10-24 00:55 — gravados norma:lei-8935-1994, fonte:stf-constituicao-e-o-supremo-art-236, org:arquetipo-estadual-servicos-notariais-e-de-registro (conjunto, poder nao-estatal), rel:arquetipo-estadual-tj-fiscaliza-servicos-notariais-e-de-registro, rel:arquetipo-estadual-tj-exerce-poder-disciplinar-sobre-servicos-notariais-e-de-registro, rel:cnj-fiscaliza-servicos-notariais-e-de-registro (ADCT art. 32 anotado como atipicidade não levantada)
