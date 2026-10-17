---
id: verificacao-piloto-municipal
escopo: "Verificação independente: entidades com verificacao.tarefa = "piloto-municipal""
status: em-andamento
depende_de: []
iniciada_em: 2026-10-17
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com verificacao.tarefa = "piloto-municipal" conferidas contra a fonte (liste com: `grep -l '"tarefa": "...' dados/*/*.json`)
- [ ] Pontos em aberto da coleta, resolvidos ou documentados:
- Norma de criação do Conselho de Contas dos Municípios de Goiás (achado:go-norma-criacao-ccm)
- Data da Lei municipal 183/1980 do Rio de Janeiro (achado:rj-lei-183-1980-data)
- Origem dos tribunais de contas dos municípios do Ceará e do Maranhão (datas de criação)
- A relação "Câmara Municipal julga as contas do prefeito": há decisão do STF que firme esse entendimento (ex.: RE 848.826)?

## Diário
- 2026-10-17 09:50 — iniciada; lidos CLAUDE.md, docs/ e instruções; 70 entidades no escopo (tarefa piloto-municipal)
- 2026-10-17 09:52 — verificado org:arquetipo-municipal-eleitorado (CF arts. 14 e 29, I, II e XIII conferidos no Planalto; sem correção)
- 2026-10-17 09:52 — corrigido e verificado org:arquetipo-municipal-prefeitura: resumo dizia "exercida pelo prefeito com o vice-prefeito"; a CF não atribui a chefia ao vice. Ficou "exercida pelo prefeito. O vice-prefeito também fica neste nó." (CF, art. 29, I a III; art. 31)
- 2026-10-17 09:52 — verificado org:arquetipo-estadual-tce (CF art. 31, § 1º e art. 75 na redação da EC 139/2026; sete conselheiros, art. 75, par. único; sem correção)
- 2026-10-17 09:54 — corrigido e verificado cargo:arquetipo-municipal-prefeito: (1) detalhes diziam "Por crimes comuns, é julgado pelo TJ"; o art. 29, X, da CF diz só "julgamento do Prefeito perante o Tribunal de Justiça" (a restrição a crimes comuns é jurisprudencial e incompleta); ficou "A CF manda julgá-lo perante o Tribunal de Justiça". (2) o caso "até 200 mil eleitores" citava só CF art. 29, II, que não trata da maioria simples; passou a citar Lei 9.504/1997, art. 3º, caput; o caso "mais de 200 mil" ganhou Lei 9.504, art. 3º, § 2º. Demais itens conferidos (CF arts. 14, §§ 3º e 5º; 29, I a III; 31, § 2º)
- 2026-10-17 09:54 — corrigido e verificado cargo:arquetipo-municipal-vice-prefeito: mandato.reconducao "uma-reeleicao-consecutiva" não tem base no texto citado (CF art. 14, § 5º, fala do prefeito e de quem o sucedeu/substituiu; a própria nota dizia "não foi conferida"); campo retirado e nota reescrita, como no cargo:vice-presidente-da-republica. Lei 9.504, art. 3º, § 1º (eleição conjunta) e CF art. 14, § 3º, VI, c (21 anos) conferidos
- 2026-10-17 09:54 — corrigido e verificado cargo:arquetipo-municipal-vereador: resumo dizia "o número de vagas depende da população" e detalhes "o número exato é definido pela lei orgânica"; o art. 29, IV, fixa só o limite máximo e não menciona a lei orgânica. Ficou "o número máximo de vagas depende da população" e "cada município fixa o seu número dentro desse limite". CF art. 29, I, IV, VIII; art. 14, § 3º, VI, d; Código Eleitoral art. 84 conferidos
- 2026-10-17 09:55 — criada fonte:stf-re-729744 (STF, Tema 157: tese "competindo exclusivamente à Câmara de Vereadores o julgamento das contas anuais do Chefe do Poder Executivo local"; mérito em 10/8/2016). Conferidos também RE 848.826/Tema 835 (10/8/2016) e ADPF 982 (14 a 21/2/2025) no portal do STF
- 2026-10-17 09:55 — verificado rel:camara-municipal-julga-contas-prefeito: CF art. 31, § 2º conferido (2/3 dos membros); ponto em aberto resolvido com fonte:stf-re-729744 (Tema 157) e notas atualizadas citando também RE 848.826 (Tema 835) e ADPF 982
- 2026-10-17 09:55 — corrigido e verificado org:arquetipo-municipal-camara-municipal: detalhes diziam "o número de vereadores depende da população, de 9 a 55" e "rejeitar esse parecer com dois terços dos votos"; o art. 29, IV, fixa só o teto e o art. 31, § 2º, exige dois terços "dos membros". Ficou "A CF fixa o número máximo de vereadores conforme a população, de 9 a 55" e "pelo voto de dois terços dos seus membros". Acrescentada fonte:stf-re-729744 para o "julga"
- 2026-10-17 09:55 — verificado rel:camara-municipal-fiscaliza-prefeitura (CF art. 31, caput e § 1º conferidos; sem correção)
- 2026-10-17 09:55 — verificado rel:prefeito-presta-contas-camara-municipal (CF art. 31, §§ 2º e 3º conferidos (60 dias, qualquer contribuinte); sem correção)
- 2026-10-17 09:55 — verificado rel:tce-auxilia-camara-municipal (CF art. 31, § 1º (EC 139/2026, art. 1º) conferido; sem correção)
- 2026-10-17 09:55 — corrigido e verificado rel:tce-parecer-previo-contas-prefeito: CF art. 31, § 2º conferido; a nota dizia que o vocabulário não tinha tipo para parecer prévio e que se usava "auxilia", mas a relação já é "emite-parecer-previo" (esquema v1); nota obsoleta retirada
- 2026-10-17 09:55 — verificado rel:eleitorado-municipal-elege-prefeito (CF art. 29, I e II; Lei 9.504, art. 3º, caput e § 2º conferidos; sem correção)
- 2026-10-17 09:55 — verificado rel:eleitorado-municipal-elege-vice-prefeito (Lei 9.504, art. 3º, § 1º conferidos; sem correção)
- 2026-10-17 09:55 — verificado rel:eleitorado-municipal-elege-vereador (CF art. 29, I; Lei 9.504, art. 1º, par. único, II (simultaneidade); Código Eleitoral art. 84 conferidos; sem correção)
- 2026-10-17 09:56 — verificado norma:lei-9504-1997 (data, art. 106 e DOU de 1º/10/1997 conferidos no texto do Planalto; nenhuma outra norma duplicada em dados/normas; nota sobre duplicidade retirada)
- 2026-10-17 09:56 — corrigido e verificado norma:lei-4737-1965: data, DOU de 19/7/1965 (retificado em 30/7/1965) e art. 382 (vigência em 30 dias) conferidos; vigencia.de "1965-08" é aproximada e não tinha incerta: true; acrescentados incerta e nota, como pede o modelo de dados
