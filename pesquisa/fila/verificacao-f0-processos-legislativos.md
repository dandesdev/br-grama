---
id: verificacao-f0-processos-legislativos
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-processos-legislativos\""
status: em-andamento
depende_de: [f0-processos-legislativos]
iniciada_em: 2026-10-27
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-processos-legislativos"` conferidas contra a fonte: 4 processos (`proc:crime-de-responsabilidade-do-presidente`, `proc:decreto-legislativo`, `proc:perda-de-mandato-parlamentar`, `proc:resolucao`, etapa por etapa, com os `remete_a` e as variantes), 3 órgãos (Conselho de Comunicação Social, Conselhos de Ética da Câmara e do Senado), 7 cargos (líderes da maioria e da minoria nas duas Casas, membro cidadão do Conselho da República, conselheiro do CCS, chefe de missão diplomática permanente), 30 relações, 3 normas, 5 fontes, 1 objeto e 1 aviso.
- [ ] Termos com definição ampliada depois da coleta (aplique). As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-processos-legislativos"`:
  - `convoca` agora cobre "chama a reunião de um colegiado". Crie `rel:presidente-convoca-conselho-da-republica` e `rel:presidente-convoca-conselho-de-defesa-nacional` (art. 84, XVIII: "convocar e presidir"). As relações `preside` que já existem ficam.
  - `monitora` agora cobre a avaliação de um sistema. Crie a relação do Senado com o Sistema Tributário Nacional (art. 52, XV), com o objeto que faltar (procure antes em `dados/objetos`).
  - ADCT, art. 113: você pode editar a etapa `iniciativa` de `proc:lei-ordinaria` e de `proc:lei-complementar` só para pôr a estimativa de impacto orçamentário em `detalhes`, com a fonte.
- [ ] Pontos do coletor a conferir:
  - `aviso:perda-de-mandato-senado-risf-e-codigo-de-etica`: o RISF (arts. 32 a 35) e o Código de Ética do Senado (Res. 20/1993, redação de 2008) descrevem ritos diferentes; os dois ainda falam em voto secreto, que a EC 76/2013 tirou da CF. Confirme a contradição e o rito seguido.
  - Res. 21/2016 do Senado, citada na ficha da Câmara: não conferida.
  - Casa onde começa o decreto legislativo: só achada a regra dos tratados (Câmara). Estado de defesa, intervenção e concessões não conferidos.
  - Publicação do decreto legislativo e da resolução: nenhuma norma consultada diz quem manda publicar; por isso não há etapa de publicação.
  - Cópias no Wayback: o campo `arquivo` ficou vazio (erro 429). Tente de novo.
  - O Código de Ética da Câmara foi citado como `norma:ricd` (está dentro do Regimento). Confira.
  - Perda de mandato: a declaração pela Mesa (art. 55, III a V) é uma segunda porta de entrada, só explicada nas notas. Confira se as notas dizem isso com clareza; o modelo não muda nesta revisão.
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Decisões do coordenador sobre as propostas da coleta

- `acredita` (art. 84, VII) não entra: os representantes estrangeiros não são nós do mapa. O inciso vai para a lista de descobertos explicada no fechamento.
- Art. 53, § 2º (a Casa resolve sobre a prisão em flagrante) e § 8º (imunidades no estado de sítio): ficam para a lista de descobertos explicada no fechamento.

## Diário
- 2026-10-27 21:17 — iniciada; lidos instruções, modelo, protocolo, decisões e diário da coleta; 54 entidades no escopo
- 2026-10-27 21:40 — verificados norma:lei-8389-1991 e norma:lei-11440-2006 (cópias locais do Planalto)
- 2026-10-27 22:05 — verificados org:conselho-de-etica-da-camara e org:conselho-de-etica-do-senado. Ponto do coletor: o Código de Ética da Câmara citado como norma:ricd está certo (Res. 25/2001, art. 1º, parágrafo único: o Código "passa a fazer parte integrante" do Regimento; RICD, art. 21-E, "que integra este Regimento"; o texto compilado da Câmara traz o Código)
- 2026-10-27 22:08 — verificado aviso:perda-de-mandato-senado-risf-e-codigo-de-etica: contradição confirmada (RISF arts. 32, § 4º, 33 e 35 x Res. 20/1993 na redação da Res. 25/2008; os dois mantêm voto secreto: RISF art. 291, I, b, com nota 212, e Res. 20/1993, art. 13). Rito seguido: o da Res. 20/1993, como mostra o caso Delcídio (Res. SF 21/2016, PRS 29/2016 do Conselho de Ética, votação nominal com 74 votos sim; ficha da matéria 125708 no portal do Senado). Corrigido: vigencia.de de 2008-07-16 (data da Res. 25/2008, incerta) para 2008-07-17 (publicação no DOU, pela ficha da Res. 20/1993 no portal do Senado). Ponto do coletor resolvido: a Res. 21/2016 não altera a Res. 20/1993; é a resolução que decretou a perda do mandato de Delcídio do Amaral e aplica os arts. 5º, I e III, e 11, II (Legin da Câmara, publicação original; DOU de 11/5/2016)
- 2026-10-27 22:15 — verificado norma:senado-resolucao-20-1993; notas atualizadas sobre a Res. 21/2016 (aplicação, não alteração) e a lista de alterações (faltava a Res. 42/2006 na enumeração das redações); arquivo preenchido com cópia nova do Wayback (20261028002406)
- 2026-10-27 22:40 — verificados os 4 cargos de líder da maioria e da minoria, as 4 relações integra com org:conselho-da-republica e as 4 ocupa (Silvio Costa Filho e Gustavo Gayer também conferidos nas biografias oficiais da Câmara). Verificado fonte:senado-api-composicao-lideranca; arquivo preenchido (Wayback 20261028002843)
- 2026-10-27 22:48 — verificadas as 4 fontes do STF (A Constituição e o Supremo, arts. 51, 52, 53 e 55). Art. 55: anotado que a página marca a AP 565 (Plenário, 2013) como contrária à AP 694 (1ª Turma); arquivo preenchido (Wayback 20261028002817)
- 2026-10-27 22:58 — verificado proc:perda-de-mandato-parlamentar, com 5 correções: (1) camara-conselho-de-etica: "o relator é sorteado entre três membros" → o Presidente do Conselho escolhe numa lista de três sorteados, que não podem ser do partido, do bloco nem do estado (Código de Ética da Câmara, art. 13, I); (2) camara-plenario: "passam a trancar a pauta" → ganham preferência sobre os demais itens da Ordem do Dia (art. 16, § 3º, III; o sobrestamento vale só no Conselho e na CCJC); (3) senado-conselho-de-etica: relator sorteado "sempre que possível" fora dos partidos (Res. 20/1993, art. 15, III); (4) declaracao-pela-mesa: AP 694 é da 1ª Turma, e a página do STF marca a AP 565 (Plenário, 2013) como contrária; (5) etapa perda-do-mandato: a ação dizia que "a resolução é promulgada" também para a declaração pela Mesa, cuja forma não foi conferida; texto generalizado. Ponto do coletor sobre a segunda porta de entrada: as notas foram reescritas para dizer com clareza que há duas entradas e que o leitor vê isso no resumo e nos detalhes; o modelo não mudou
- 2026-10-27 23:10 — verificado proc:crime-de-responsabilidade-do-presidente, sem correções (19 etapas e o regime 'infracao-penal-comum' conferidos). Sugestão para o coordenador, sem mudar o modelo: a votação separada da inabilitação feita em 2016 (caso Dilma) não está nas notas; a nota (6) diz só que a Lei 1.079/1950 a prevê e que não foi modelada
- 2026-10-27 23:35 — verificado proc:decreto-legislativo, sem erro de conteúdo (9 etapas, 2 regimes e remete_a conferidos). Pontos do coletor: (a) casa iniciadora: CF, RICD, RISF e RCCN não fixam a casa para estado de defesa, intervenção e concessões; achada só a prática da intervenção no DF (PDL 1/2023, Câmara como casa iniciadora no portal do Senado), anotada na nota (1); estado de defesa e concessões continuam abertos; (b) publicação: nenhuma regra achada no RICD, RISF ou RCCN; a única menção é a da Res. 1/2002-CN, art. 11, § 3º, que não diz quem publica; ponto continua aberto e a nota (2) foi completada
