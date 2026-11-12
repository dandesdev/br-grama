---
id: f2-fechamento
escopo: "Fase 2, fechamento: pendências pequenas acumuladas nas coletas e revisões, propostas de vocabulário e o relatório final de cobertura das leis"
status: pendente
depende_de: [f2-executivo, f2-funcoes-essenciais, f2-legislativo-tcu, f2-judiciario, f2-eleicoes, f2-financas-publicas, f2-processos-constitucionais, f2-administracao, f2-defesa-seguranca, f2-social, f2-federacao]
---

Lista mantida pelo coordenador. Cada item diz de onde veio.

## Pendências

- [ ] `rel:cgu-representa-a-tcu` (Lei 14.600, art. 49, § 2º): falta a relação da CGU com o TCU (verificacao-f2-executivo).
- [ ] Conselho Nacional de Recursos Hídricos (Lei 14.600, art. 61; Lei 9.433/1997, arts. 34 a 36 e 45): colegiado presidido pelo Ministro da Integração (f2-executivo, lacuna).
- [ ] Decreto-Lei 200, art. 178 (lacuna) e arts. 30, 31 e 68 (parciais) (f2-executivo).
- [ ] Wayback: `arquivo` null nas normas criadas na fase 2 (o Wayback respondeu 429 em 28/10 e 3/11); tentar de novo.
- [ ] Ocupantes em 2026-10-01 dos cargos de chefia criados na fase 2 (PGT, PGJM, PGJ do MPDFT, PGU, Consultor-Geral da União, PGFN, PGF, diretores das agências, Líder do Governo, Ouvidores e Corregedores das Casas), só a cúpula (D11).
- [ ] MP 2.229-43/2001 (carreira de Procurador Federal) e lista atual das consultorias jurídicas dos ministérios (f2-funcoes-essenciais).

- [ ] Comissões mistas permanentes que faltam: Comissão Mista Representativa no FIPA (Res. 2/2007-CN) e Comissão Mista de Assuntos da CPLP (Res. 2/2014-CN) (verificacao-f2-legislativo-tcu).
- [ ] Lideranças do Congresso (RCCN, art. 4º; RCN 3/2025): Líder do Governo, da Maioria, da Minoria e da Oposição no Congresso; reclassificar o art. 4º do RCCN de fora para lacuna até criar (verificacao-f2-legislativo-tcu).
- [ ] Quadro do RICD e do RISF, reclassificar ou cobrir: RICD, art. 216 (reforma do regimento; citar em `proc:resolucao`, como o RISF, art. 401); RICD, arts. 212 e 213 (consolidação, parcial); RICD, art. 105, e RISF, art. 332 (arquivamento ao fim da legislatura: etapa terminal de `proc:lei-ordinaria`); RICD, arts. 250 e 251 (Casa resolve sobre a prisão de deputado, CF, art. 53, § 2º: relação) (verificacao-f2-legislativo-tcu).
- [ ] Terceira Secretaria do Senado em 2026-10-01: titular Ana Paula Lobato afastada; quem exerceu de 5/8 a 6/10/2026 entra com `interino: true` (D40), se a fonte do Senado disser (verificacao-f2-legislativo-tcu).
- [ ] Conselho da República: três relações apontam para o órgão onde o cargo `cargo:membro-cidadao-do-conselho-da-republica` seria o destino certo; conferir e trocar (verificacao-f2-legislativo-tcu).

- [ ] Processo de nova eleição (Código Eleitoral, art. 224, com a renovação da votação dos arts. 187 e 201), com `fonte:stf-informativo-893` (ADI 5.525: o § 4º não vale para Presidente, Vice e Senador; ADI 5.619 improcedente); até lá, arts. 187, 201 e 224 do Código são lacuna no quadro de f2-eleicoes (verificacao-f2-eleicoes).
- [ ] Quadro de f2-eleicoes: art. 237 do Código passa a fora com motivo "superado" pela LC 64, art. 22 (D51); Lei 9.096, art. 13, motivo "declarado inconstitucional (ADIs 1.351 e 1.354)" (verificacao-f2-eleicoes).

- [ ] `cargo:corregedor-regional-eleitoral` (Res. TSE 23.742/2024, art. 9º: o Vice-Presidente do TRE acumula a Corregedoria); leva o Código Eleitoral, art. 26, de parcial a coberto (verificacao-f2-judiciario).
- [ ] Quadro de f2-judiciario: LOMAN, art. 27, e RISTF, arts. 354-A a 354-G, passam a coberto; Lei 8.457, arts. 89 a 97, e Código Eleitoral, art. 31, ficam fora com o motivo da D52; RISTJ ganha os arts. 255-A a 255-Z e 255-AA a 255-AE da ER 55/2026 (fora, rito) e `norma:ristj` passa a `compilacao_ate` ER 55/2026 (verificacao-f2-judiciario).
- [ ] Conferir as entidades que a revisão do Judiciário gravou como `coletado`: 3 pessoas e 3 fontes dos ocupantes (STF, TSE, STJ, Corregedor Nacional) e `norma:resolucao-tse-23742-2024` (verificacao-f2-judiciario).
- [ ] Ocupantes em 2026-10-01 da direção do TST, do STM e do Corregedor-Geral Eleitoral, com data de posse em fonte oficial (verificacao-f2-judiciario).
- [ ] Relações de foro do STF para comandantes militares e chefes de missão diplomática permanente (CF, art. 102, I, c) (verificacao-f2-judiciario).
- [ ] ADI 6188 (CLT, art. 702, I, f): trocar a notícia pelo acórdão do STF em `org:tst` (verificacao-f2-judiciario).

- [ ] LRF, art. 7º: resultado do Banco Central transferido ao Tesouro (positivo) ou coberto por ele (negativo); relação `repassa-recursos` entre `org:banco-central` e o Tesouro, conferindo se a Lei 13.820/2019 mudou o regime; até lá, lacuna no quadro de f2-financas-publicas (verificacao-f2-financas-publicas).

## Propostas de vocabulário (para o coordenador decidir)

- `tipo_orgao`: órgão interno de função essencial (corregedorias, ouvidorias, secretarias do MP, da Defensoria e da AGU) e escola institucional (f2-funcoes-essenciais).
- `relacao`: "forma lista" (tríplice, sêxtupla), hoje `indica`; "avoca" (DL 200, art. 170); "secretaria" um colegiado, hoje `auxilia` (f2-executivo, f2-funcoes-essenciais).
- `tipo_norma`: ato da Mesa e ato conjunto, hoje `outro` (f2-legislativo-tcu; a revisão reforçou).
- `relacao`: verbo para escolha livre sem aprovação de outro órgão (Líder do Governo), hoje `indica`, que pressupõe aprovação (verificacao-f2-legislativo-tcu).
- `tipos-orgao.json`: definições de empresa pública, sociedade de economia mista e fundação pública comparadas ao DL 200, art. 5º (f2-executivo).

- `provimento`: ampliar `sorteio` para o sorteio entre oficiais (juízes militares dos Conselhos de Justiça) (f2-judiciario).
- `relacao`: "exerce a função de" para funções acumuladas (Vice-Presidente do STM como Corregedor; Vice-Presidente do STJ como Corregedor-Geral da Justiça Federal), hoje `preside` com provimento `nato` (f2-judiciario).
- `relacao`: "registra" no lugar de `aprecia-para-registro` para a Justiça Eleitoral; objeto "lei eleitoral" para `regulamenta`; `tipo_objeto` "representação" (impugnação, AIJE), hoje `acao-judicial` (f2-eleicoes).

- `relacao`: `supervisiona` ampliado para a supervisão técnica do órgão central de um sistema (Lei 10.180), hoje `coordena`; `publica` ampliado para relatórios; verbo "emite" para quem assina o RGF (f2-financas-publicas).

- Modelo de processo: quórum de presença separado do de votação (Lei 9.868, art. 22; Lei 9.882, art. 8º), hoje `regra: "outro"`; ator "relator" sem cargo; ator genérico "qualquer pessoa" ou "a parte"; `produz` apontando para a decisão e não para o objeto da ação (f2-processos-constitucionais).

- `provimento`: eleição pela assembleia de acionistas e eleição pelo conselho de administração (estatais, Lei 6.404 e Lei 13.303), hoje `nomeacao-livre` e `eleicao-pelos-pares` como inferido; `designacao` ampliado para membros de colegiado designados pelo Presidente por mandato (Comissão de Ética Pública, CNE) (f2-administracao).
- `relacao`: "classifica" (autoridade que atribui grau de sigilo) e "revê" (Comissão Mista de Reavaliação) (f2-administracao).
- Modelo de processo: ator genérico "autoridade competente" no lugar de `org:poder-executivo-federal` em etapas cuja autoridade varia por caso (Leis 8.112, 9.784, LAI) (f2-administracao; ver também o ator genérico de f2-processos-constitucionais).

## Decisões tomadas pelo coordenador

- 2026-11-03: a ANA não aparecer no decreto de estrutura do MIDR não vira aviso. A lei (9.984, art. 3º) dá a vinculação, e a omissão num decreto de estrutura não é contradição entre fontes nem lacuna (D36, D37); fica na nota da relação.

- 2026-11-11: `nomeacao-a-partir-de-lista` passa a dizer "pela autoridade competente" (não só o chefe do Executivo). A coleta usa o termo para corregedores e ouvidores nomeados por procuradores-gerais e defensores-gerais, e o mecanismo é o mesmo; criar outro termo multiplicaria vocabulário sem ganho de leitura (verificacao-f2-funcoes-essenciais).
- 2026-11-11: sem aviso para o ingresso no MPU (CF, art. 129, § 3º, contra LC 75, art. 187) e para a rejeição do DPGF pelo Senado. No primeiro a CF prevalece sem dúvida e os cargos já a seguem; no segundo é silêncio da lei, já anotado no processo. Aviso fica para dúvida real de fonte (D36, D37).
- 2026-11-11: quadro de f2-funcoes-essenciais reclassificado conforme a revisão (LC 75, arts. 82, 115, 148, 181; Lei 8.625, art. 80; LC 80, art. 50 passam a coberto; Título III da LC 80 fica fora pela D51). Regra para as próximas coletas: artigo citado em `estrutura_continua` ou como fonte de relação é coberto, não fora.

- 2026-11-11: o titular afastado continua como ocupante no retrato, com o afastamento em `condicao`; quem exerce no lugar entra com `interino: true`. É a leitura direta da D40 e evita esvaziar cargos durante licenças curtas.

- 2026-11-11: as mesas receptoras ficam `contido_em` a Justiça Eleitoral. O juiz eleitoral as nomeia para cada eleição (Código Eleitoral, arts. 119 e 120), e tirá-las do ramo deixaria um nó solto no mapa só ligado ao juiz; a nota da entidade explica que o art. 12 não as lista.

- 2026-11-11: D52 (órgãos só em estado de guerra ou outra situação excepcional ficam fora do retrato). A relação "exerce a função de" fica para a lista de vocabulário; a revisão do Judiciário a endossou.

- 2026-11-11: `publica` passa a cobrir relatórios que a lei manda divulgar (RREO, RGF); não se cria "emite". O ato é o mesmo (tornar oficial e público), e um verbo a mais só separaria assinatura de divulgação, que o mapa não distingue.
- 2026-11-11: D53 (regra técnica sem órgão, cargo, etapa nem relação é fora do escopo).
- 2026-11-11: a execução da despesa fica com as unidades do Executivo como ator, e o texto diz que os demais Poderes seguem as mesmas etapas. Um conjunto de todas as unidades de todos os Poderes não acrescentaria informação ao desenho das raias, e os números por Poder já estão na aba Dinheiro (D48). O RGF do Judiciário fica ligado ao Poder: cada tribunal emite o seu, como a condição da relação diz, e criar uma relação por tribunal repetiria a mesma regra dezenas de vezes.

## Diário
