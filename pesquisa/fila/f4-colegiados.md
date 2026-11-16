---
id: f4-colegiados
escopo: "Fase 4 (D10, D63 a): colegiados nacionais criados por lei que deliberam, normatizam ou julgam, ainda fora do mapa"
status: coletada
depende_de: [f4-siorg]
iniciada_em: 2026-11-15
concluida_em: 2026-11-15
---

Leia `pesquisa/instrucoes-agentes.md` (todas as seções), `docs/decisoes.md` (D05, D07, D10, D11, D14, D33, D51 a D54, D62 e D63), `docs/modelo-de-dados.md` e `docs/protocolo-pesquisa.md`. Data de referência: 1º/10/2026.

Regras desta tarefa:
- Antes de criar, procure em `dados/` se a entidade já existe (por nome, sigla e assunto); amplie em vez de duplicar.
- Toda afirmação com fonte oficial lida (planalto.gov.br, DOU, sites .gov.br, STF para jurisprudência). Guarde as cópias lidas em `pesquisa/brutos/` numa pasta com a data e o id da tarefa.
- Novo termo de vocabulário só se a D54 permitir; proponha no diário em vez de editar `esquema/`.
- Não edite `esquema/`, `docs/`, `dados/metricas/`, `dados/fluxos/` nem `dados/estruturas/`. Não faça commit nem rode `git checkout`, `git reset` ou `git clean`.
- Rode `npm run -s validar` a cada lote e anote no diário.

## Entregáveis

- [x] Levantamento (seção "Levantamento"): colegiados federais criados pela CF ou por lei com competência deliberativa, normativa ou de julgamento de alcance nacional, ou com relação própria com outro órgão do mapa. Ponto de partida: os colegiados das árvores do SIORG (`dados/estruturas/*.json`, unidades com `colegiada: true` e sem `mapa`) e as leis de política nacional (meio ambiente, trânsito, criança e adolescente, pessoa com deficiência, política criminal, seguros privados, sistema financeiro, desporto, cultura, ciência e tecnologia, política agrícola, recursos do FGTS, entre outras). Para cada um: lei de criação e artigo, competência, órgão onde fica, se já está no mapa. Diga quais ficam fora e por quê (consultivo, interno, criado só por decreto sem lei, extinto).
- [x] Os que entram como `org:` (tipo `colegiado`, `contido_em` o órgão do SIORG), com composição (cargos agregados, D11, ou `conjunto` de membros, D51), quem preside, quem indica e quem nomeia, mandato, e as relações com fonte (normatiza, delibera, julga recurso de, aprova, fiscaliza; use o vocabulário existente).
- [x] Se o colegiado tem unidade correspondente no SIORG, anote o código SIORG no diário (o coordenador liga a unidade ao nó no importador).
- [x] Estados e municípios ficam nos arquétipos que já existem; não crie colegiados estaduais ou municipais.

## Levantamento

Critério (D63 a): entra como nó o colegiado criado pela CF ou por lei (ou cuja competência de julgar vem de lei) que delibera, normatiza ou julga com alcance nacional, ou que tem relação própria com outro órgão do mapa. Ponto de partida: as 943 unidades `colegiada: true` sem `mapa` das árvores do SIORG (lista em C:/Users/DELL/scratch-brgram/f4-colegiados/siorg-colegiados.txt) e as leis de política nacional.

### Entraram (17)

| Colegiado | Criação e competência | Onde fica (`contido_em`) | SIORG | Relações |
|---|---|---|---|---|
| org:conama | Lei 6.938/1981, arts. 6º, II, 7º e 8º; Decreto 99.274/1990, art. 5º-A | MMA | 1023 | preside (Ministro do MMA), integra Sisnama, assessora Conselho de Governo, regulamenta licença ambiental |
| org:contran | CTB, arts. 7º, I, e 9º a 12 | Ministério dos Transportes | 321 | preside, Ministros integram, coordena Detrans estaduais e municipais e PRF |
| org:conanda | Lei 8.242/1991, arts. 1º a 6º; Decreto 9.579/2018, arts. 76 a 79 | MDHC | 3319 | Presidente da República nomeia o presidente, Ministro designa, gere o Fundo Nacional para a Criança e o Adolescente (obj novo) |
| org:cnpcp | LEP, arts. 61 a 64 | Senappen (MJSP) | 320 | Ministério da Justiça designa |
| org:cnsp | DL 73/1966, arts. 32 e 33 | Ministério da Fazenda | 229 | preside (Ministro da Fazenda) |
| org:crsfn | Lei 9.069/1995, art. 81; Lei 13.506/2017, art. 29; Lei 13.974/2020, art. 6º; Decreto 9.889/2019 | Ministério da Fazenda | 1463 | julga recursos contra Banco Central e Coaf, Ministro designa, Presidente do BC indica |
| org:carf | Decreto 70.235/1972, art. 25, II; Lei 11.941/2009, art. 48 | Ministério da Fazenda | 101068 | julga recursos contra a Receita Federal, Ministro designa |
| org:coaf | Lei 9.613/1998, arts. 14 e 15; Lei 13.974/2020 | Banco Central (vínculo administrativo) | 32061 | Presidente do BC nomeia |
| org:confaz | CF, art. 155, § 2º, XII, g; LC 24/1975; LC 160/2017; Convênio ICMS 133/1997 | Ministério da Fazenda | 87 | preside, secretarias estaduais integram, delibera sobre ICMS |
| org:conselho-curador-do-fgts | Lei 8.036/1990, arts. 3º a 5º | MTE | 2259 | preside, gere o FGTS (obj novo), fiscaliza a Caixa |
| org:cndh | Lei 12.986/2014 | MDHC | 319 | PGR integra, representa ao PGR (intervenção federal) |
| org:cnbs | Lei 11.105/2005, arts. 8º e 9º | Presidência da República | não está nas árvores | preside (Casa Civil), assessora o Presidente, julga recursos contra a CTNBio |
| org:ctnbio | Lei 11.105/2005, arts. 10 a 16 | MCTI | 75168 | Ministro designa, assessora o CNBS |
| org:camara-de-recursos-da-previdencia-complementar | Lei 12.154/2009, arts. 15 e 16 | Ministério da Previdência | 105921 | julga recursos contra a Previc, Ministro designa |
| org:tribunal-maritimo | Lei 2.180/1954 | Marinha | 220 | Presidente nomeia, Comandante da Marinha indica (inferido); cargo:juiz-do-tribunal-maritimo |
| org:conselho-nacional-de-politica-cultural | CF, art. 216-A, § 2º, II; Lei 14.835/2024; Decreto 12.980/2026 | Ministério da Cultura | 1942 | integra o SNC, Ministro designa |
| org:cgen | Lei 13.123/2015, art. 6º; Decreto 8.772/2016, art. 7º | MMA | 55959 | Ministro designa; aviso:cgen-composicao-11-ou-12-ministerios |

### Já estavam no mapa (não mexemos)

CMN, CNPE, CNRH, Conselho Nacional de Saúde, CNAS, Conselho Nacional de Educação, CNPS, Conselho Nacional de Previdência Complementar, Codefat, Comitê Gestor do Simples Nacional, Conitec, Consea, Conselho de Recursos da Previdência Social, Comissão de Ética Pública, CMRI, Comissões Intergestores Tripartite (saúde, Suas, educação), Comissão de Anistia, Conselho Nacional de Segurança Pública e Defesa Social, Creden, Conselho de Governo, Conselho da República, Conselho de Defesa Nacional, CDESS, CPPI, Conselho de Comunicação Social, Comissão Tripartite Nacional (meio ambiente), CACS-Fundeb.

### Ficaram fora, com o motivo

| Colegiado (SIORG) | Motivo |
|---|---|
| Conselho Nacional de Política Agrícola, CNPA (2174) | Lei 8.171/1991, art. 5º: orienta a elaboração do Plano de Safra, propõe ajustes na política agrícola e mantém sistema de informação (incisos I, II e V vetados). Consultivo. |
| Conselho Nacional de Arquivos, Conarq (2159) | Lei 8.159/1991, art. 26, e Decreto 4.073/2002, art. 2º (redação do Decreto 12.599/2025): fixa diretrizes técnicas do Sinar, mas as normas são propostas à Ministra da Gestão; preside o Diretor-Geral do Arquivo Nacional, que não é nó do mapa. Pode entrar quando o Arquivo Nacional entrar. |
| Conmetro (230) | Lei 5.966/1973, arts. 2º e 3º: normativo nacional (metrologia, normas de produtos industriais), mas a composição está em decreto não lido e o Inmetro, que executa, não é nó. Pendente para outra rodada. |
| Conad (954) | A Lei 11.343/2006 manda observar as normas do Conad, mas a criação e a composição estão em decreto, não lido. Pendente. |
| Tribunal Administrativo de Defesa Econômica (119344) | Órgão interno do Cade, já descrito em org:cade. |
| Plenário do Coaf (247810), Comitê de Avaliação e Seleção do CRSFN (243329), Câmara Técnica de Outorgas do CNRH (217098), câmaras e comitês dos conselhos | Subunidades de colegiados que já são nós; ficam na árvore. |
| Conselhos deliberativos de Sudene (91146), Sudam (91140) e Sudeco (115628, 122852), do FNDE (254) e de estatais e agências | Órgãos internos de entidades já no mapa, de alcance regional ou interno; ficam na árvore do SIORG. |
| Conselhos internos das Forças Armadas, da PF (Conselho Superior de Polícia, 325) e de ministérios (governança, ética, editorial, programas, comitês gestores de planos) | Internos ou de gestão de programa; ficam na árvore. |
| Conselhos de direitos e de participação criados por decreto ou não lidos nesta tarefa: Conade (41036), CNDM (1557), CNPIR (73242), CNDPI (68554), CNLGBTQIA+ (318150), CNPI (229192), CNPCT (214387), Condraf (44396), CNIg (2766), Conselho Nacional do Esporte (47637), Conpdec (50447), CNDU (237883), Conselho Nacional de Turismo (57612), Conape (77695), CNES (77694), Conselho Nacional do Trabalho (110122), CNRPPS (271532), CNPDPP (241790), CCT (9), Conaflor (76175), Conabio (77990), CNMC (309007), CNAL (4009) | Não pesquisados aqui. Pelo nome, a maior parte é consultiva ou de participação social; a lei de criação de cada um (quando houver) não foi lida, então não afirmamos o motivo. Ficam na busca pela árvore do SIORG (D63 a) e podem virar tarefa própria. |
| Conselhos gestores de fundos: FNDCT (94467), FNHIS (89595), FDS (14463), FDD (8156), FNMA (1992), FNMC (7201), FNRB (220173), FNSP (90863), FNAC (453329), FNDIT (438769), Fundo Social (467010), FCVS (386729) | Não pesquisados; deliberam sobre fundos específicos. Candidatos a uma rodada sobre fundos, se os fundos virarem objetos. |
| Comissões de recursos de defesa agropecuária (480512), do Proagro (1223), Câmaras de Julgamento do MGI (245249 a 245251), CRSNSP (parte da unidade 1463) | Julgam recursos em matérias setoriais; base legal não lida nesta tarefa. Pendentes. |

Estados e municípios: nenhum colegiado estadual ou municipal criado; os arquétipos existentes bastam (o Confaz e o Contran ligam-se a eles).

## Diário
- 2026-11-15 — iniciada; lidos CLAUDE.md, decisões (D05, D07, D10, D11, D14, D33, D51 a D54, D62, D63), modelo de dados, protocolo e instruções
- 2026-11-15 — cópias das leis em pesquisa/brutos/planalto-leis/2026-11-15-f4-colegiados/ (Lei 6.938, Decreto 99.274, CTB, Lei 8.242, LEP, DL 73, Lei 9.069, Lei 13.506, Decreto 70.235, Lei 8.036, LC 24, LC 160, Lei 9.613, Lei 13.974, Lei 12.986, Lei 11.105, Lei 13.123, Lei 8.159, Lei 5.966, Lei 8.171, Lei 11.343, Lei 12.154, Lei 2.180, Lei 14.835)
- 2026-11-15 — lote 1: gravados org:conama, rel:ministro-de-estado-preside-conama, rel:conama-integra-sisnama, rel:conama-assessora-conselho-de-governo, rel:conama-regulamenta-licenca-ambiental; SIORG 1023 → org:conama; validar sem erro
- 2026-11-15 — lote 2: gravados norma:lei-8242-1991, norma:decreto-9579-2018, norma:lei-7210-1984; org:contran (+ preside, integra, coordena órgãos executivos de trânsito estaduais e municipais e PRF), org:conanda (+ nomeia, designa, gere) e obj:fundo-nacional-para-a-crianca-e-o-adolescente, org:cnpcp (+ designa); SIORG 321 → org:contran, 3319 → org:conanda, 320 → org:cnpcp; validar sem erro
- 2026-11-15 — cópia do Convênio ICMS 133/1997 (regimento do Confaz) em pesquisa/brutos/confaz/2026-11-15-f4-colegiados/
- 2026-11-15 — lote 3: gravadas norma:decreto-lei-73-1966, norma:lei-13506-2017, norma:decreto-9889-2019, norma:decreto-70235-1972, norma:lei-11941-2009, norma:lei-9613-1998, norma:lei-13974-2020, norma:lc-24-1975, norma:lc-160-2017, norma:convenio-icms-133-1997; org:cnsp (+ preside), org:crsfn (+ julga recursos contra Banco Central e Coaf, designa, indica), org:carf (+ julga recursos contra Receita, designa), org:coaf (+ nomeia), org:confaz (+ preside, integra, delibera sobre ICMS); SIORG 229 → org:cnsp, 1463 → org:crsfn, 101068 → org:carf, 32061 → org:coaf (o Plenário 247810 fica na árvore), 87 → org:confaz; validar sem erro
- 2026-11-15 — lote 4: gravadas norma:lei-8036-1990, norma:lei-12986-2014, norma:lei-11105-2005; org:conselho-curador-do-fgts (+ preside, gere, fiscaliza a Caixa) e obj:fgts; org:cndh (+ PGR integra, representa ao PGR); org:cnbs (+ preside, assessora o Presidente, julga recursos contra a CTNBio); org:ctnbio (+ designa, assessora o CNBS); SIORG 2259 → org:conselho-curador-do-fgts, 319 → org:cndh, 75168 → org:ctnbio (o CNBS não está nas árvores do SIORG); validar sem erro
- 2026-11-15 — cópias também dos Decretos 9.889/2019, 9.579/2018, 5.520/2005, 9.891/2019 (revogado), 12.980/2026, 8.772/2016 e 4.073/2002, da Lei 11.941/2009 e do ECA na mesma pasta
- 2026-11-15 — lote 5: gravadas norma:lei-2180-1954, norma:decreto-12980-2026, norma:lei-13123-2015, norma:decreto-8772-2016; org:camara-de-recursos-da-previdencia-complementar (+ julga recursos contra a Previc, designa), org:tribunal-maritimo e cargo:juiz-do-tribunal-maritimo (+ nomeia, indica), org:conselho-nacional-de-politica-cultural (+ integra SNC, designa), org:cgen (+ designa); aviso:cgen-composicao-11-ou-12-ministerios; SIORG 105921 → org:camara-de-recursos-da-previdencia-complementar, 220 → org:tribunal-maritimo, 1942 → org:conselho-nacional-de-politica-cultural, 55959 → org:cgen; validar sem erro
- 2026-11-15 — levantamento escrito na seção própria: 17 colegiados entraram, os demais do SIORG ficam na árvore com o motivo
- 2026-11-15 — códigos SIORG a ligar (unidade → nó): 1023 → org:conama; 321 → org:contran; 3319 → org:conanda; 320 → org:cnpcp (aparece nas árvores do MJSP e da Senappen); 229 → org:cnsp; 1463 → org:crsfn; 101068 → org:carf; 32061 → org:coaf; 87 → org:confaz; 2259 → org:conselho-curador-do-fgts; 319 → org:cndh; 75168 → org:ctnbio; 105921 → org:camara-de-recursos-da-previdencia-complementar; 220 → org:tribunal-maritimo; 1942 → org:conselho-nacional-de-politica-cultural; 55959 → org:cgen. O CNBS não tem unidade nas árvores.
- 2026-11-15 — vocabulário: nenhum termo novo foi usado. Propostas (D54, a decidir pelo coordenador): (1) tipo_orgao 'tribunal-administrativo' para Carf, CRSFN, CRPC e Tribunal Marítimo, que julgam como tribunais fora do Judiciário (hoje 'colegiado', igual a conselhos consultivos); (2) tipo_norma 'convenio' para o Convênio ICMS 133/1997 (hoje 'outro'). Recomendo só a (1), se a diferença entre julgar e aconselhar não ficar clara pelas relações.
- 2026-11-15 — pontos incertos: Contran presidido pelo Ministro dos Transportes e CCFGTS pelo Ministro do Trabalho e Emprego, deduzidos do SIORG (a lei nomeia a função ou uma pasta extinta); CRSFN e CNSP com textos que citam o Ministério da Economia ou da Previdência e Assistência Social; indicação dos juízes do Tribunal Marítimo ligada ao Comandante da Marinha por inferência (a lei diz 'Ministro da Marinha'); Lei 13.123/2015 com data de publicação inconsistente no rodapé do Planalto (14/5/2015, antes da própria lei); Lei 9.613/1998 sem cópia no Wayback (URL do compilado).
- 2026-11-15 — lacunas do mapa notadas, fora do escopo: Susep, CVM, Inmetro e Arquivo Nacional não são nós; por isso o CNSP e o Coaf ficam sem relação com a Susep e a CVM, e o Conarq e o Conmetro ficaram fora. O Fundo Nacional de Cultura e o Plano Nacional de Cultura não são objetos.
- 2026-11-15 — notas de outras entidades que ficaram velhas (não editadas): org:sisnama diz que o Conama não tem nó no mapa; agora tem (org:conama).
- 2026-11-15 — validar sem erro; tarefa coletada
