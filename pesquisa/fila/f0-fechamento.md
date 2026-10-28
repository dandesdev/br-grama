---
id: f0-fechamento
escopo: "Fatia 0: pendências pequenas que sobraram das tarefas e varredura de cobertura da CF (D04)"
status: pendente
depende_de: [f0-defesa-seguranca, f0-tipicos]
iniciada_em: null
concluida_em: null
---

## Entregáveis

Revisão do que os revisores criaram:
- [x] Entidades com `verificacao.status: "coletado"` e `tarefa: "verificacao-f0-*"` (criadas durante as revisões): conferir cada uma contra a fonte. Feito em `verificacao-f0-complementos` (33 entidades); as criadas nas revisões da leva 5 entram na próxima rodada.

Pendências anotadas pelas tarefas:
- [x] Legislativo: `remete_a` nas etapas que seguem o rito da lei ordinária (hoje só citado no texto).
- [ ] Judiciário: quem nomeia o quinto constitucional do TJDFT; alterações do RISTJ depois da ER 47/2024.
- [ ] Executivo: cargos dos membros cidadãos do Conselho da República (art. 89, VII); processo do decreto legislativo; verbo para "convoca reunião de colegiado" (hoje `preside`).
- [ ] Eleições: STJ julga os Procuradores Regionais Eleitorais (art. 105, I, a, membros do MPU que oficiam perante tribunais); normas que faltam: Lei 15.230/2025 (idade mínima) e Lei 14.291/2022 (propaganda partidária); posse de deputados estaduais e vereadores; ADI 7881 (LC 219/2025) se o STF decidir.
- [ ] Funções essenciais: TRF julga membros do MPU (art. 108, I, a), sem nó único para os TRFs; MPs de contas estaduais; Defensoria do DF.
- [ ] Dinheiro: contribuições ao Sistema S (art. 240) e adicional por rotatividade (art. 239, § 4º); créditos adicionais (art. 166, § 8º; art. 167, V); bancadas estaduais como proponentes da emenda de bancada; ADI 8010 (LC 200/2023); presidente do Comitê Gestor do IBS; verbo para "propõe a exoneração" (CMN, hoje `propoe`).
- [ ] Controle: data da posse de Jhonatan de Jesus (aviso aberto); Constituições estaduais sobre a escolha dos conselheiros.
- [ ] Defesa e segurança: cargo de Diretor-Geral da PRF; Secretaria Nacional de Políticas Penais; acórdãos da ADI 6457 e da ADPF 995 (só lidas as notícias do STF); Decreto 11.693/2023 com nome antigo da Diretoria de Inteligência Penal. Modelo: etapas de processo não têm `orgao_exercicio` (Ministro da Defesa na GLO aparece como Ministro de Estado).
- [ ] Modelo (decisões do coordenador): `difere_de` das variações aceita um só órgão (DF sem municípios afeta prefeitura e câmara); `ocupa` em cargo de arquétipo só diz o estado por `restrita_a`; campo de sede com fonte própria; nó para sociedade civil; objeto transferido em `repassa-recursos`; marcar em `ocupa` quem exerce sem ser titular (governador interino no RJ e em RR, suplentes de deputado: hoje só em `condicao`); cargos eleitos num processo eleitoral (hoje só atores da posse); dedupe de ocupantes com duas relações `ocupa` para um só ato (AGU).

Cobertura (D04):
- [ ] Varredura da CF artigo por artigo (arts. 1º a 250 e ADCT no que estrutura o Estado em 2026-10-01): para cada órgão, cargo, competência e procedimento previsto, a entidade que o representa. Lacunas viram lista; a cobertura sai em percentual. Já conhecida: intervenção estadual nos municípios (art. 35).

## Diário
- 2026-10-23 22:40 — coordenador: `remete_a: "proc:lei-ordinaria"` acrescentado em 6 etapas cujo texto já mandava ver o rito da lei ordinária (lei complementar: camara-comissoes, camara-aprecia-emendas-do-senado, senado-aprecia-emendas-da-camara, sancao-veto-e-promulgacao, publicacao-e-vigencia; medida provisória: envio-a-sancao). Emenda constitucional e lei delegada não têm etapa que siga o rito ordinário.
- 2026-10-23 22:40 — coordenador, decisões de modelo: (1) `difere_de` continua com um só id, porque é ele que põe a variação no mapa; quando a variação afeta vários órgãos do arquétipo, aponte para o principal e cite os outros em `porque`. (2) `ocupa` em cargo de arquétipo com `restrita_a` para dizer o ente fica como está. (3) Campo de sede, nó de sociedade civil, objeto em `repassa-recursos` e dedupe de ocupantes ficam para depois da fatia 0: nenhum muda o que o mapa mostra hoje.
- 2026-10-23 23:30 — coordenador: varredura f0-cobertura concluída (CF 72,3%, ADCT 25,6%). As lacunas viraram 8 tarefas de coleta (f0-seguridade, f0-educacao, f0-federacao, f0-controle-constitucionalidade, f0-judiciario-complementar, f0-processos-legislativos, f0-dinheiro-complementar, f0-administracao-indireta), que absorvem as pendências deste arquivo sobre TJDFT, RISTJ, Conselho da República, decreto legislativo, verbo de convocação, foro dos PREs e do MPU, MPs de contas, Defensoria do DF, dinheiro e Diretor-Geral da PRF. Ficam aqui: normas eleitorais (Lei 15.230/2025, Lei 14.291/2022), posse de deputados estaduais e vereadores, Constituições estaduais sobre os conselheiros, aviso de Jhonatan de Jesus, acórdãos da ADI 6457 e da ADPF 995, Decreto 11.693/2023.
- 2026-10-24 20:10 — coordenador: sugestões da revisão de controle de constitucionalidade para depois: relações dos remédios julgados pela Justiça do Trabalho (art. 114, IV), Eleitoral (art. 121, § 4º, V) e estadual (art. 125, § 1º), e do mandado de injunção nos demais tribunais (art. 105, I, h). Decisões sobre propostas de processos legislativos: `acredita` (art. 84, VII) não entra, porque representantes estrangeiros não são nós; art. 53, §§ 2º e 8º, vão para a lista de descobertos explicada.
- 2026-10-24 20:20 — coordenador: propostas de nova tarefa vindas de f0-judiciario-complementar (para a lista de descobertos ou tarefa pequena): art. 102, I, e, j, m, n; art. 105, I, g, j; art. 108, I, b a d; art. 98, § 2º; polícias do DF e polícias legislativas no controle externo pelo MP; MPs junto aos TCMs; Lei de Migração (rito da extradição). Modelo, adiado: nó único para TRFs e TRTs e cargo de presidente de tribunal; cargo em mais de um órgão (conciliador).
- 2026-10-27 — coordenador: o mantenedor decidiu as três questões de modelo em aberto: interino marcado em `ocupa` (D40), cargos eleitos derivados das relações `elege` no site (D41), `orgao_exercicio` nos atores de etapa (D42). Aplicar no fechamento: esquema, validador, relações de interinos, GLO e demarcação de terra indígena, e site.
- 2026-10-27 — coordenador: da revisão de federação, para depois: possível aviso de contradição (a Constituição da Bahia dá ao TCM a representação nos incisos I a III da intervenção, como a do Pará que o STF derrubou na ADI 2.631); regime de urgência do prefeito não modelado em `proc:lei-municipal`; as duas relações de royalties (origem trocada para `org:anp`) entram na revisão de administração indireta. Da revisão de educação: Lei 9.424/1996 e Lei 11.494/2007 sem cadastro; nós para Inep, FNDE e Fórum Nacional de Educação sugeridos à coleta de administração indireta.
- 2026-10-27 — coordenador: da revisão de processos legislativos, para a rodada de complementos: relações `preside` que ainda descrevem a convocação (agora há `convoca`); separação da votação da inabilitação no impeachment de 2016; forma do ato da Mesa que declara a perda de mandato; Casa iniciadora do decreto legislativo no estado de defesa e nas concessões de radiodifusão e quem manda publicar decreto legislativo e resolução (sem norma achada). Decisão: `obj:sistema-tributario-nacional` passa a `regime-tributario` (definição ampliada). Da coleta de administração indireta: verbo "outorga" não entra; provimento de função de confiança fica para depois da fatia 0.
