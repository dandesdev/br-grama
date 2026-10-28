---
id: f0-sugestoes-revisoes
escopo: "Fatia 0, fechamento: sugestões pequenas deixadas pelas revisões das coletas de lacunas (fundos, conselhos, legislativo, federação)"
status: coletada
depende_de: [f0-fechamento]
iniciada_em: 2026-10-27
concluida_em: 2026-10-27
---

## Entregáveis

Cada item é pequeno. Antes de criar, procure em `dados/` se já existe. Se a fonte oficial não for achada, não invente: anote no diário (ou abra `aviso:` se for lacuna da fonte).

Fundos (relação `gere`, "administra um fundo"):
- [x] Ministério da Saúde gere o Fundo Nacional de Saúde; MDS gere o Fundo Nacional de Assistência Social; INSS gere o Fundo do Regime Geral de Previdência Social. Só crie se a norma disser que o órgão administra ou gere o fundo (o texto hoje só está nos detalhes das entidades). Use os ids existentes dos fundos e órgãos.
- [x] CF, art. 165, § 5º, III (orçamento da seguridade social): acrescente como fonte onde couber no INSS ou no fundo do RGPS, só em `fontes` ou `notas`.

Dinheiro:
- [x] Relação: o Ministro do Trabalho nomeia os membros do Codefat (Lei 7.998/1990, art. 18, § 4º), com `orgao_exercicio` na pasta do Trabalho (D42 não se aplica, é relação: use o campo `orgao_exercicio` da relação). Use o cargo dos membros se existir; senão, a relação pode ir para o órgão com a condição explicando.
- [x] Normas: Lei 8.706/1993 (Sest/Senat) e MP 2.168-40/2001 (Sescoop), ligadas a `org:sistema-s` por `fontes` ou `notas`.
- [x] Aviso de lacuna: o conselho consultivo e de acompanhamento do fundo de combate à pobreza perdeu a regulamentação (artigos revogados pelo Decreto 10.223/2020), embora a LC 111/2001 o preveja. Confira antes de abrir.

Educação:
- [x] Normas: Lei 11.494/2007 (Fundeb anterior, cria a comissão intergovernamental) se alguma entidade a cita no texto e ainda não está cadastrada.

Legislativo:
- [x] Relações `preside` que ainda descrevem a convocação de colegiado no texto (procure `convoca` na `condicao` ou `notas` de relações `preside`): ajuste só o texto, porque a convocação agora tem relação própria (`convoca`).
- [x] `proc:crime-de-responsabilidade-do-presidente`: diga nos detalhes da etapa final que em 2016 a inabilitação foi votada separada da perda do cargo, se a fonte oficial (Resolução do Senado de 2016 ou notícia do Senado) sustentar.

Federação:
- [x] Constituição da Bahia: confira se ainda dá ao TCM a representação para intervenção nos incisos I a III do art. 35. Se sim, abra `aviso:` de contradição (o STF julgou inconstitucional regra igual do Pará na ADI 2.631), ligado a `proc:intervencao-estadual`.
- [x] Regime de urgência do prefeito em `proc:lei-municipal`: acrescente como `regime` se as leis orgânicas de SP e do Rio (já em brutos) o preverem, com prazo e efeito.

- [x] Para cada item, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes. Os fundos, o INSS, o Codefat, `org:sistema-s`, os Conselhos e os processos citados já existem.
- D40 (relação `ocupa` com `interino: true`) e D42 (ator de etapa `{ ator, orgao_exercicio }`) já valem.

## Diário

- 2026-10-27 22:06 — iniciada; lidos CLAUDE.md, decisoes (até D42), modelo-de-dados, protocolo e instruções
- 2026-10-27 22:12 — gravado rel:ministerio-da-saude-gere-fundo-nacional-de-saude (Lei 8.080/1990, art. 33, § 1º, "administrados pelo Ministério da Saúde, através do Fundo Nacional de Saúde", em brutos de 2026-10-23; Decreto 11.798/2023, Anexo I, art. 16, conferido por WebFetch: curl e curl --http1.1 ao Planalto falharam)
- 2026-10-27 22:13 — gravado rel:mds-gere-fundo-nacional-de-assistencia-social (Lei 8.742/1993, art. 28, § 1º, "gerir o Fundo"; Lei 14.600/2023, art. 27, X, "gestão do FNAS"; brutos de 2026-10-20 e 2026-10-23)
- 2026-10-27 22:13 — gravado rel:inss-gere-fundo-do-regime-geral-de-previdencia-social (LRF, art. 68, § 2º, "será gerido pelo INSS", brutos de 2026-10-23); item 1 coberto
- 2026-10-27 22:16 — editado obj:fundo-do-regime-geral-de-previdencia-social: fonte CF, art. 165, § 5º, III (texto em brutos planalto-cf/2026-10-16/cf.htm; EC 140/141 não tocam o art. 165), status volta a coletado; INSS não tocado (outro agente mexe no contido_em); item 2 coberto
- 2026-10-27 22:20 — gravado rel:ministro-do-trabalho-nomeia-codefat (Lei 7.998/1990, art. 18, §§ 3º e 4º; Decreto 11.496/2023, arts. 29, §§ 2º e 3º, e 46; brutos de 2026-10-23 e 2026-10-24); alvo é org:codefat, sem cargo de membro; item coberto
- 2026-10-27 22:31 — gravado norma:lei-8706-1993 (curl e curl --http1.1 ao Planalto falharam; texto lido na cópia do Wayback de 2026-10-04, guardada em pesquisa/brutos/planalto-leis/2026-10-27-sugestoes/)
- 2026-10-27 22:32 — gravado norma:mp-2168-40-2001 (cópia local de 2026-10-24; vigência pela EC 32/2001, art. 2º, conferido em brutos/planalto-leis/2026-10-18/emc32.htm; URL de origem não anotada na tarefa que baixou: usei a do Planalto com cópia no Wayback de 2026-06-06)
- 2026-10-27 22:33 — editado org:sistema-s: as duas normas entram em fontes e as notas passam a citar os ids; status mantido em verificado porque o texto exibido não mudou e os fatos das notas já tinham sido conferidos na revisão (o coordenador pode rebaixar se preferir); item coberto
- 2026-10-27 22:45 — gravados norma:decreto-4564-2003 e norma:decreto-10223-2020 (curl ao Planalto falhou; textos das cópias do Wayback de 2026-06-14 e 2026-10-04, guardadas em pesquisa/brutos/planalto-leis/2026-10-27-sugestoes/)
- 2026-10-27 22:50 — gravado aviso:conselho-consultivo-fundo-combate-pobreza-sem-regulamento (conferido: LC 111/2001, art. 4º, em brutos; ADCT, art. 79, parágrafo único, em brutos/planalto-cf; Decreto 4.564/2003, arts. 2º e 3º, revogação declarada pelo Decreto 10.223/2020, art. 1º, CXLVIII; buscas na web sem ato posterior); item coberto
- 2026-10-27 22:56 — gravado norma:lei-11494-2007 (citada no texto de org:comissao-intergovernamental-de-financiamento-da-educacao-basica; Wayback de 2026-10-18, curl ao Planalto falhou; Lei 14.113/2020, art. 53, em brutos). Não editei a comissão (fora dos pontos autorizados): proposta ao coordenador, ligar a norma em campos.vigencia.fontes da comissão e tirar "sem norma própria cadastrada"; item coberto
- 2026-10-27 23:02 — editados rel:presidente-preside-conselho-da-republica e rel:presidente-preside-conselho-de-defesa-nacional: condição sem a convocação, que já está em rel:presidente-convoca-conselho-da-republica e rel:presidente-convoca-conselho-de-defesa-nacional; status coletado. Outras relações preside que citam convocação sem relação convoca própria (não mexi): rel:presidente-do-senado-preside-congresso ("Convoca e preside as sessões conjuntas", RISF, art. 48) e rel:presidente-do-conselho-federal-da-oab-preside-conselho-federal-da-oab (Lei 8.906/1994, art. 55); proposta: criar as relações convoca, se o coordenador quiser; item coberto
- 2026-10-27 23:12 — gravado fonte:radio-senado-impeachment-dilma-2016-08-31 (página oficial do Senado, cópia local; resolução do Senado de 2016 não localizada: busca na web sem o texto, BDSF pediu verificação de segurança; Wayback com 429)
- 2026-10-27 23:15 — editado proc:crime-de-responsabilidade-do-presidente: etapa 'condenacao' com a votação separada de 2016 (Rádio Senado) e nota (6) ajustada; status coletado; item coberto (sem a resolução do Senado)
- 2026-10-27 23:25 — conferido: a Constituição da BA (Legislabahia, nova cópia de 2026-10-27 igual à de 2026-10-16) ainda dá ao TCM a representação nos incisos I a III (art. 65, § 1º, I; art. 95, II, a); gravado aviso:ba-constituicao-tcm-representacao-intervencao (contradição com a ADI 2.631); proc:intervencao-estadual: só a nota interna "Não abrimos aviso" trocada pela referência ao aviso, status mantido em verificado; item coberto
- 2026-10-27 23:35 — editado proc:lei-municipal: regime urgencia-do-prefeito (SP, LOM, art. 38: 30 dias; Rio, LOM, art. 73, § 1º, redação da Emenda 43/2025: 45 dias; sobrestamento; sem recesso nem códigos; nota com a urgência automática do Rio para remuneração de servidores, art. 71, §§ 3º e 4º), lido nas cópias das Câmaras de 2026-10-27 em brutos; status coletado; item coberto
- 2026-10-27 23:40 — resumo por item: (1) fundos, coberto (3 relações gere); (2) CF, art. 165, § 5º, III, coberto no fundo do RGPS, INSS não tocado; (3) Ministro do Trabalho nomeia Codefat, coberto; (4) Lei 8.706/1993 e MP 2.168-40/2001, cobertos (normas e fontes de org:sistema-s); (5) aviso do conselho consultivo do fundo de combate à pobreza, coberto; (6) Lei 11.494/2007, coberta (norma; ligação na comissão fica como proposta); (7) preside com convocação, coberto nos dois Conselhos, Senado/Congresso e OAB ficam como proposta; (8) votação separada de 2016, coberto com notícia da Rádio Senado, sem a resolução; (9) Constituição da BA, coberto com aviso de contradição; (10) urgência do prefeito, coberto como regime. Pendente: arquivo (Wayback) de fonte:radio-senado-impeachment-dilma-2016-08-31, porque o Wayback respondeu 429. Validação sem erros. Tarefa coletada
