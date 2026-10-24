---
id: verificacao-f0-complementos
escopo: "Revisão das entidades criadas durante as revisões (verificacao.status = \"coletado\" e tarefa verificacao-*)"
status: verificada
depende_de: []
iniciada_em: 2026-10-23
concluida_em: 2026-10-23
---

## Entregáveis

- [x] Conferir contra a fonte cada uma das entidades abaixo, criadas por revisores (a tarefa que a criou está em `verificacao.tarefa`; leia o diário dessa tarefa em `pesquisa/fila/` para saber por quê). Ao conferir, troque `verificacao` para `status: "verificado"`, `tarefa: "verificacao-f0-complementos"` e nota dizendo qual revisão a criou e o que foi conferido.
  - `aviso:posse-jhonatan-de-jesus-tcu-data` (verificacao-f0-controle)
  - `fonte:agencia-senado-nomeacao-vital-do-rego-tcu-2014` (verificacao-f0-controle)
  - `fonte:agencia-senado-posse-vital-do-rego-tcu-2015` (verificacao-f0-controle)
  - `fonte:alesc-autografo-plc-1-2026` (verificacao-f0-controle)
  - `fonte:oab-noticia-posse-simonetti-2022` (verificacao-f0-funcoes-essenciais)
  - `fonte:oab-noticia-totalizacao-eleicoes-2026` (verificacao-f0-funcoes-essenciais)
  - `fonte:senado-msf-160-2001` (verificacao-f0-controle)
  - `fonte:stf-adi-3026-acordao` (verificacao-f0-funcoes-essenciais)
  - `fonte:stf-adi-7881` (verificacao-f0-eleicoes)
  - `fonte:stf-constituicao-e-o-supremo-art-130` (verificacao-f0-funcoes-essenciais)
  - `fonte:stf-re-729744` (verificacao-piloto-municipal)
  - `fonte:tcu-noticia-posse-vital-do-rego` (verificacao-f0-controle)
  - `norma:pb-lei-12738-2023` (verificacao-f0-funcoes-essenciais)
  - `norma:resolucao-tcu-373-2024` (verificacao-f0-controle)
  - `norma:rj-rio-de-janeiro-lei-289-1981` (verificacao-piloto-municipal)
  - `norma:senado-regulamento-administrativo` (verificacao-f0-controle)
  - `obj:acao-civil-publica` (verificacao-f0-funcoes-essenciais)
  - `obj:acao-penal-publica` (verificacao-f0-funcoes-essenciais)
  - `org:auditoria-do-senado-federal` (verificacao-f0-controle)
  - `org:secretaria-de-auditoria-interna-do-tcu` (verificacao-f0-controle)
  - `rel:arquetipo-estadual-ministerio-publico-promove-acao-civil-publica` (verificacao-f0-funcoes-essenciais)
  - `rel:arquetipo-estadual-ministerio-publico-promove-acao-penal-publica` (verificacao-f0-funcoes-essenciais)
  - `rel:auditoria-do-senado-controla-internamente-senado` (verificacao-f0-controle)
  - `rel:mpu-promove-acao-civil-publica` (verificacao-f0-funcoes-essenciais)
  - `rel:mpu-promove-acao-penal-publica` (verificacao-f0-funcoes-essenciais)
  - `rel:presidente-do-conselho-federal-da-oab-oficia-junto-a-cnj` (verificacao-f0-funcoes-essenciais)
  - `rel:presidente-do-conselho-federal-da-oab-oficia-junto-a-cnmp` (verificacao-f0-funcoes-essenciais)
  - `rel:procurador-geral-da-republica-oficia-junto-a-cnj` (verificacao-f0-funcoes-essenciais)
  - `rel:procurador-regional-eleitoral-designa-promotor-eleitoral` (verificacao-f0-eleicoes)
  - `rel:seaud-controla-internamente-tcu` (verificacao-f0-controle)
  - `rel:tcu-representa-a-poder-executivo-federal` (verificacao-f0-controle)
  - `rel:tcu-representa-a-poder-judiciario` (verificacao-f0-controle)
  - `rel:tcu-representa-a-poder-legislativo-federal` (verificacao-f0-controle)
- [x] Os resumos dizem o que a fonte diz, em palavras simples, sem ampliar nem restringir
- [x] Se alguma delas não se sustentar, corrija; se não houver fonte, use `confianca: "indisponivel"` com aviso, ou apague a entidade e as referências a ela, registrando no diário.

## Diário
- 2026-10-23 22:28 — iniciada; lidos CLAUDE.md, instruções de verificação, modelo de dados, protocolo e decisões; 33 entidades localizadas em dados/
- 2026-10-23 22:40 — verificados 6 (sem correção): aviso:posse-jhonatan-de-jesus-tcu-data (atas do DOU de 15/2 e 14/3/2023 e notícia do TCU de 13/3/2023 nas cópias brutas; a contradição é real), fonte:agencia-senado-nomeacao-vital-do-rego-tcu-2014, fonte:agencia-senado-posse-vital-do-rego-tcu-2015, fonte:tcu-noticia-posse-vital-do-rego, fonte:senado-msf-160-2001 (61-5-2; DOU 168-E de 31/8/2001), fonte:alesc-autografo-plc-1-2026 (PDF do autógrafo e ofício do TCE-SC)
- 2026-10-23 22:58 — verificados norma:senado-regulamento-administrativo (sem correção; Res. SF 13/2018 e PDF consolidado conferidos), org:auditoria-do-senado-federal e rel:auditoria-do-senado-controla-internamente-senado. Correções: (1) org: "se integra aos órgãos de controle interno dos outros Poderes" virou "promove ações integradas com os demais órgãos do sistema de controle interno dos Poderes da União" (art. 206); sigla AUDIT, ausente do Regulamento, confirmada na seção do portal de transparência do Senado (cópia transparencia-audit.html em brutos/senado/2026-10-23), registrada em notas; (2) rel: a condição omitia "efetividade" e o Presidente (art. 206)
- 2026-10-23 23:10 — verificados norma:resolucao-tcu-373-2024, org:secretaria-de-auditoria-interna-do-tcu e rel:seaud-controla-internamente-tcu no PDF do BTCU (arts. 66, 67, 97, 98). Correção: rel: a condição dizia "governança, riscos e controle"; o art. 67, II, diz "governança, gestão de riscos, integridade e controle". Portaria-Segepres 2/2026, citada nas notas da norma, achada no DOU (5/3/2026, p. 88) e guardada em brutos/dou/2026-10-23; nenhum ato que altere a Res. 373 achado (DOU e web)
- 2026-10-23 23:16 — verificadas sem correção rel:tcu-representa-a-poder-executivo-federal, -legislativo-federal e -judiciario (CF art. 71, XI; Lei 8.443/1992, art. 1º, VIII, "indicando o ato inquinado e definindo responsabilidades, inclusive as de Ministro de Estado"). Bloco do controle concluído: 18 de 18
- 2026-10-23 23:17 — retificação da linha anterior: o bloco do controle tem 15 entidades (não 18), todas verificadas
- 2026-10-23 23:35 — verificados sem correção (bloco funções essenciais, fontes): fonte:oab-noticia-posse-simonetti-2022, fonte:oab-noticia-totalizacao-eleicoes-2026, norma:pb-lei-12738-2023 (PDF digitalizado lido como imagem: número, datas e nome civil conferem), fonte:stf-adi-3026-acordao (PDF só imagem, págs. 1-2), fonte:stf-constituicao-e-o-supremo-art-130 (cuidado: a mesma página traz a ADI 2.378 dizendo que o MP de contas estadual "não dispõe de fisionomia institucional própria", e o MS 27.339 dizendo que "possui fisionomia institucional própria"; a nota cita só o MS 27.339, e corretamente). Wayback das cinco respondeu 200
- 2026-10-23 23:48 — verificados obj:acao-civil-publica, obj:acao-penal-publica e as 4 relações promove (MPU: LC 75/1993, art. 6º, V e VII; MP estadual: Lei 8.625/1993, art. 25, III e IV; CF art. 5º, LIX, e 129, I, III e § 1º). Correções: (1) obj:acao-civil-publica, detalhes: a Defensoria "também pode propô-la" ganhou a condição da LC 80/1994, art. 4º, VII ("quando o resultado da demanda puder beneficiar grupo de pessoas hipossuficientes"); (2) obj:acao-penal-publica, resumo: "condenação de quem cometeu crime" virou "condenação do acusado de um crime", para não presumir a culpa. Relações sem correção
- 2026-10-23 23:53 — verificadas sem correção as 3 relações oficia-junto-a (CF art. 103-B, caput e § 6º; art. 130-A, caput e § 4º; EC 45/2004, vigência 31/12/2004 como nas outras 47 relações da emenda). Bloco funções essenciais concluído: 14 de 14
- 2026-10-24 00:08 — verificados fonte:stf-adi-7881 e rel:procurador-regional-eleitoral-designa-promotor-eleitoral. Correções: (1) fonte:stf-adi-7881, notas: o destaque de Flávio Dino não foi em 21/9/2026; o andamento o registra em 11/9/2026, primeiro dia da sessão virtual, e a decisão de julgamento que o consigna é de 21/9/2026. Requerente (Rede) confirmada na aba Partes, salva em brutos/stf/2026-10-23/adi7881-abaPartes.html; (2) rel do PRE, notas: a Lei 8.625/1993, art. 73, § 2º, diz que o PGJ designa o substituto em caso de impedimento ou recusa, o que diverge da LC 75, art. 79, parágrafo único; registrado que seguir a LC 75 (posterior) é leitura nossa. Condição da relação sem mudança. Fora do escopo, para o coordenador: norma:lc-219-2025 (fontes[].dispositivo) também diz "destaque em 21/9/2026"
- 2026-10-23 22:39 — retificação de horários: as linhas marcadas de 22:40 a "2026-10-24 00:08" têm horários estimados e adiantados; todas foram escritas em 2026-10-23, entre 22:28 e esta linha. Daqui em diante, horário do relógio do sistema
- 2026-10-23 22:41 — verificado norma:rj-rio-de-janeiro-lei-289-1981 sem correção de conteúdo (texto da Câmara baixado de novo e guardado em brutos/camara-rj/2026-10-23: arts. 2º, 3º, I, 29, 77 e 78, fecho, DO de 27/11/1981, última alteração LC 194/2018). Wayback recusou a cópia (523); arquivo continua null, explicado nas notas
- 2026-10-23 22:43 — verificado fonte:stf-re-729744. Resumo e tese conferem (página do Tema 157 e aba Decisões baixadas de novo; cópias em brutos/stf/2026-10-23). Acréscimos: arquivo do Wayback (antes null; cópia criada agora e conferida: contém a tese), data da fixação da tese (17/8/2016) e caminho das cópias. Tema 835 conferido no portal do STF; ADPF 982 conferida só em fontes secundárias (Conjur, Migalhas), que batem com a nota (sessão virtual encerrada em 21/2/2025)
- 2026-10-23 22:44 — concluída (verificada): 33 de 33 entidades conferidas e marcadas verificado. Com correção de conteúdo: 8 (org:auditoria-do-senado-federal, rel:auditoria-do-senado-controla-internamente-senado, rel:seaud-controla-internamente-tcu, obj:acao-civil-publica, obj:acao-penal-publica, fonte:stf-adi-7881, rel:procurador-regional-eleitoral-designa-promotor-eleitoral, e a nota da sigla AUDIT); só acréscimos: norma:resolucao-tcu-373-2024 (DOU da Portaria-Segepres), norma:rj-rio-de-janeiro-lei-289-1981 (cópia local), fonte:stf-re-729744 (Wayback, data da tese). Nenhum aviso novo, nenhuma entidade apagada. Cópias novas em brutos: senado/2026-10-23/transparencia-audit.html, dou/2026-10-23/portaria-segepres-n-2-...html, stf/2026-10-23/adi7881-abaPartes.html, re729744-*.html, re848826-tema835.html, camara-rj/2026-10-23/L2891981.html. Em aberto: Wayback da Lei 289/1981-RJ (523); ADPF 982 só por fontes secundárias; data exata da posse de Jhonatan de Jesus (aviso segue aberto); fora do escopo, norma:lc-219-2025 diz "destaque em 21/9/2026" (andamento: 11/9). npm run validar: nenhum erro
- 2026-10-23 22:44 — retificação da linha anterior: são 7 entidades com correção de conteúdo, não 8 (a nota da sigla AUDIT é do mesmo org:auditoria-do-senado-federal)
