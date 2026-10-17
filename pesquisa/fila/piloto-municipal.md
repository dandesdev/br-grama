---
id: piloto-municipal
escopo: "Piloto: arquétipo municipal mínimo de controle externo e a variação do TCM de São Paulo"
status: coletada
depende_de: []
iniciada_em: 2026-10-16
concluida_em: 2026-10-17
---

## Entregáveis

- [x] ente:sp (estado de São Paulo), ente:sp-sao-paulo (município de São Paulo), ente:rj-rio-de-janeiro
- [x] arquétipo municipal mínimo: org:arquetipo-municipal-prefeitura, org:arquetipo-municipal-camara-municipal, org:arquetipo-municipal-eleitorado, cargo:arquetipo-municipal-prefeito, cargo:arquetipo-municipal-vice-prefeito, cargo:arquetipo-municipal-vereador
- [x] arquétipo estadual mínimo: org:arquetipo-estadual-tce
- [x] relações: eleição municipal; controle externo do município (Câmara Municipal fiscaliza com auxílio do TCE, CF art. 31); parecer prévio e a regra dos 2/3
- [x] org:tcm-sao-paulo e var:sp-capital-tcm; org:tcm-rio-de-janeiro e var:rj-capital-tcm
- [x] variações dos estados que têm tribunal de contas estadual específico para os municípios (verifique quais existem na data de referência, quais foram extintos e quando)
- [x] achados que surgirem (ex.: divergências sobre quais tribunais existem)

## Diário
- 2026-10-16 07:03 — iniciada; lidos CLAUDE.md, modelo-de-dados, protocolo, esquemas e vocabulários
- 2026-10-16 07:15 — pesquisa feita (nada gravado em dados/ ainda; brutos em pesquisa/brutos/). Apurado: CF arts. 29, 31, 75 e 14 conferidos no Planalto; EC 139/2026 (5/5/2026, DOU 6/5/2026) mudou art. 31 § 1º e art. 75 (veda extinção, criação ou instalação de TCs); é a última EC, nada mudou depois de 2026-10-01. IBGE: SP 35, RJ 33, BA 29, GO 52, PA 15, CE 23, São Paulo 3550308, Rio 3304557. TCMs dos municípios em 2026-10-01: BA (CE-BA art. 91; Lei 2.838/1970 criou o CCM, EC est. 25/1985 virou Tribunal), GO (CE-GO arts. 79 § 1º e 80; ADCT art. 6º; Lei 8.338/1977 só organiza o CCM, norma de criação não achada), PA (CE-PA arts. 71 e 118; EC est. 13/1980 segundo o TCMPA). Extintos: CE (EC est. 92/2017, de 16/8/2017, DOE 21/8/2017; ADI 5638 prejudicada; ADI 5763 improcedente em 26/10/2017; ADI 7772 não conhecida em 1/7/2025) e MA (EC est. 9/1993, de 25/3/1993; ADI 867 improcedente em 10/10/1994). TCM-SP: Lei mun. 7.213/1968; CE-SP art. 151. TCM-RJ: Lei mun. 183/1980 (assinada 23/10, DO 29/10/1980; título da página da Câmara diz 31/10). "PEC Alesp 2025" contra o TCM-SP é proposta de 1999 digitalizada em 2025. PEC 5022/2021 (GO) rejeitada em 15/6/2021.
- 2026-10-16 12:03 — gravado norma:go-constituicao-1989
- 2026-10-16 12:03 — gravado norma:go-lei-8338-1977
- 2026-10-16 12:03 — gravado achado:go-norma-criacao-ccm
- 2026-10-16 12:04 — gravado fonte:ibge-localidades
- 2026-10-16 12:04 — gravado ente:sp
- 2026-10-16 12:04 — gravado ente:rj
- 2026-10-16 12:04 — gravado ente:ba
- 2026-10-16 12:04 — gravado ente:go
- 2026-10-16 12:04 — gravado ente:pa
- 2026-10-16 12:04 — gravado ente:ce
- 2026-10-16 12:04 — gravado ente:ma
- 2026-10-16 12:04 — gravado ente:sp-sao-paulo
- 2026-10-16 12:04 — gravado ente:rj-rio-de-janeiro
- 2026-10-16 12:04 — gravado norma:ec-139-2026
- 2026-10-16 12:04 — gravado norma:lei-9504-1997
- 2026-10-16 12:04 — gravado norma:lei-4737-1965
- 2026-10-16 12:04 — gravado norma:sp-constituicao-1989
- 2026-10-16 12:04 — gravado norma:ba-constituicao-1989
- 2026-10-16 12:04 — gravado norma:pa-constituicao-1989
- 2026-10-16 12:04 — corrigido norma:lei-4737-1965 (vigência: publicação 19/7/1965 + 30 dias)
- 2026-10-16 12:05 — gravado norma:ce-ec-92-2017
- 2026-10-16 12:05 — gravado norma:ma-ec-9-1993
- 2026-10-16 12:05 — gravado norma:sp-sao-paulo-lei-7213-1968
- 2026-10-16 12:05 — gravado norma:rj-rio-de-janeiro-lei-183-1980
- 2026-10-16 12:05 — gravado fonte:stf-adi-867
- 2026-10-16 12:05 — gravado fonte:stf-adi-5763
- 2026-10-16 12:05 — gravado fonte:stf-adi-7772
- 2026-10-16 12:05 — gravado fonte:stf-noticia-adi-5638-liminar
- 2026-10-16 12:05 — gravado fonte:stf-noticia-adi-5638-prejudicada
- 2026-10-16 12:05 — gravado fonte:tcmrio-lei-183-1980
- 2026-10-16 12:05 — gravado fonte:tcm-ba-historia
- 2026-10-16 12:05 — gravado fonte:tcmpa-institucional
- 2026-10-16 12:05 — gravado fonte:alego-noticia-pec-5022-2021
- 2026-10-16 12:05 — gravado fonte:al-ma-constituicao-2025
- 2026-10-16 12:06 — aviso: org:tcu (piloto-estrutura) cita norma:ec-139-2026, que esta tarefa gravou; a outra tarefa deve reutilizar o arquivo
- 2026-10-16 12:06 — gravado org:arquetipo-municipal-eleitorado
- 2026-10-16 12:06 — gravado org:arquetipo-municipal-prefeitura
- 2026-10-16 12:06 — gravado org:arquetipo-municipal-camara-municipal
- 2026-10-16 12:06 — gravado org:arquetipo-estadual-tce
- 2026-10-16 12:06 — gravado cargo:arquetipo-municipal-prefeito
- 2026-10-16 12:06 — gravado cargo:arquetipo-municipal-vice-prefeito
- 2026-10-16 12:06 — gravado cargo:arquetipo-municipal-vereador
- 2026-10-16 12:06 — regravado cargo:arquetipo-municipal-vice-prefeito (tirada inferência sobre substituição do resumo)
- 2026-10-16 12:07 — gravado org:tcm-sao-paulo
- 2026-10-16 12:07 — gravado org:tcm-rio-de-janeiro
- 2026-10-16 12:07 — gravado org:tcm-bahia
- 2026-10-16 12:07 — gravado org:tcm-goias
- 2026-10-16 12:07 — gravado org:tcm-para
- 2026-10-16 12:07 — gravado org:tcm-ceara
- 2026-10-16 12:07 — gravado org:tcm-maranhao
- 2026-10-16 12:07 — regravado org:tcm-maranhao (retirada inferência dos detalhes)
- 2026-10-16 12:08 — gravado rel:eleitorado-municipal-elege-prefeito
- 2026-10-16 12:08 — gravado rel:eleitorado-municipal-elege-vice-prefeito
- 2026-10-16 12:08 — gravado rel:eleitorado-municipal-elege-vereador
- 2026-10-16 12:08 — gravado rel:camara-municipal-fiscaliza-prefeitura
- 2026-10-16 12:08 — gravado rel:tce-auxilia-camara-municipal
- 2026-10-16 12:08 — gravado rel:prefeito-presta-contas-camara-municipal
- 2026-10-16 12:08 — gravado rel:tce-parecer-previo-contas-prefeito
- 2026-10-16 12:08 — gravado rel:camara-municipal-julga-contas-prefeito
- 2026-10-16 12:08 — gravado rel:tcm-sao-paulo-auxilia-camara-municipal
- 2026-10-16 12:08 — gravado rel:tcm-rio-de-janeiro-auxilia-camara-municipal
- 2026-10-16 12:08 — gravado rel:tcm-bahia-auxilia-camara-municipal
- 2026-10-16 12:08 — gravado rel:tcm-goias-auxilia-camara-municipal
- 2026-10-16 12:08 — gravado rel:tcm-para-auxilia-camara-municipal
- 2026-10-16 12:08 — gravado var:sp-capital-tcm
- 2026-10-16 12:08 — gravado var:rj-capital-tcm
- 2026-10-16 12:08 — gravado var:ba-tcm-dos-municipios
- 2026-10-16 12:08 — gravado var:go-tcm-dos-municipios
- 2026-10-16 12:08 — gravado var:pa-tcm-dos-municipios
- 2026-10-16 12:08 — gravado var:ce-tcm-dos-municipios
- 2026-10-16 12:08 — gravado var:ma-tcm-dos-municipios
- 2026-10-16 12:08 — regravados os 5 rel:tcm-*-auxilia-camara-municipal (nomes com acento)
- 2026-10-16 12:09 — gravado norma:pa-ec-88-2023
- 2026-10-16 12:09 — gravado achado:rj-lei-183-1980-data
- 2026-10-16 12:09 — gravado achado:pa-constituicao-consolidada-desatualizada
- 2026-10-16 12:09 — gravado achado:ma-ec-9-1993-sem-texto-oficial
- 2026-10-17 — norma:ec-139-2026 foi regravada pela piloto-estrutura (dona das ECs que cita); conteúdo equivalente; mantida a versão dela. Nota: a versão dela cita a si mesma em fontes.
- 2026-10-17 — validação: nenhum erro. 70 arquivos desta tarefa em dados/. Tarefa marcada como coletada.
