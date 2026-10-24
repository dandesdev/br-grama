---
id: f0-federacao
escopo: "Fatia 0, lacunas da varredura: federação, estados e municípios, CF arts. 18, § 3º; 20, § 1º; 29; 35; 43; 144, § 10; 182; 236; ADCT, arts. 32 e 69"
status: pendente
depende_de: [f0-cobertura]
iniciada_em: null
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
