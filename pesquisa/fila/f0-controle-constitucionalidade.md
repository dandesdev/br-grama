---
id: f0-controle-constitucionalidade
escopo: "Fatia 0, lacunas da varredura: controle de constitucionalidade e instrumentos das cortes, CF arts. 5º (remédios), 97, 102, 103, 103-A"
status: pendente
depende_de: [f0-cobertura]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Ações do controle concentrado: ADPF (art. 102, § 1º; Lei 9.882/1999), ADO (art. 103, § 2º; Lei 9.868/1999), reclamação (art. 102, I, l; art. 103-A, § 3º). Decida se `obj:adi-e-adc` fica como está ou se a ADO entra nele; justifique no diário.
- [ ] Os demais legitimados do art. 103 ligados a `obj:adi-e-adc` (hoje só PGR e Conselho Federal da OAB): Presidente, Mesas do Senado, da Câmara, das Assembleias e da Câmara Legislativa, Governadores, partidos com representação no Congresso, confederações sindicais e entidades de classe de âmbito nacional (use conjuntos existentes, como `org:partidos-politicos`).
- [ ] Súmula vinculante (art. 103-A; Lei 11.417/2006): `obj:sumula-vinculante`, `rel:stf-edita-sumula-vinculante`, quem pode propor.
- [ ] Remédios constitucionais (art. 5º, LXVIII a LXXIII): habeas corpus, mandado de segurança (individual e coletivo), mandado de injunção, habeas data e ação popular como objetos do tipo `acao-judicial`, com as competências originárias e recursais das cortes (arts. 102, 105, 108, 109, 121) que o mapa ainda não tem.
- [ ] Reserva de plenário (art. 97) e controle difuso: nota ou relação, só o que ajudar a entender.
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
