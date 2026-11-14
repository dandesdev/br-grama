---
id: f2-judiciario
escopo: "Fase 2 (D49): leis de organização do Judiciário da União e regimentos do STF e do STJ"
status: coletada
depende_de: [f0-judiciario, f0-judiciario-complementar]
iniciada_em: 2026-11-11
concluida_em: 2026-11-11
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Normas

- LC 35/1979 (Lei Orgânica da Magistratura Nacional, LOMAN): crie a norma se não existir
- Lei 5.010/1966 (organização da Justiça Federal de primeira instância) e Lei 10.259/2001 (juizados especiais federais)
- Lei 8.457/1992 (organização da Justiça Militar da União)
- CLT, arts. 643 a 735 (organização da Justiça do Trabalho): `norma:decreto-lei-5452-1943`; só esses artigos
- Código Eleitoral, arts. 12 a 41 (órgãos da Justiça Eleitoral): `norma:lei-4737-1965`; só esses artigos (o resto fica com `f2-eleicoes`)
- Lei 11.697/2008 (organização judiciária do DF e dos territórios)
- Regimentos internos do STF (`norma:ristf`) e do STJ: só a estrutura (Plenário, Turmas, Seções, Corte Especial, Presidência, comissões permanentes)

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada norma (seção "Cobertura"; para CLT e Código Eleitoral, só os artigos listados).
- [x] LOMAN: órgãos e regras que valem para todos os tribunais (órgão especial, Conselho da Magistratura onde a lei prevê, escolha de dirigentes dos tribunais); cargos de juiz substituto e juiz titular no nível da lei, agregados; vitaliciamento.
- [x] Justiça Federal, Militar, do Trabalho e Eleitoral: órgãos de primeira instância (varas federais, juizados especiais federais, auditorias militares e Conselhos de Justiça, varas do trabalho, zonas e juízes eleitorais) como `org:` agregados dentro do ramo, com os cargos correspondentes; corregedorias dos tribunais superiores dos ramos.
- [x] STF e STJ: Plenário, Turmas, Seções, Corte Especial e Presidência como órgãos internos; quem julga o quê fica nas relações já existentes (procure em `dados/relacoes/`), só acrescente a fonte regimental quando ela detalhar.
- [x] TJDFT (Lei 11.697): estrutura no nível da lei.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: todos os tribunais (`org:stf`, `org:stj`, `org:tst`, `org:tse`, `org:stm`, `org:trf-1` a `org:trf-6`, `org:trt-1` a `org:trt-24`, `org:tre-*`, `org:tj-df`), `org:juizados-especiais-federais`, `org:turmas-recursais-federais`, `org:juntas-eleitorais`, `org:conselho-da-justica-federal`, `org:csjt`, `org:enfam`, `org:enamat`.
- Em paralelo: `f2-eleicoes` (resto do Código Eleitoral, Lei 9.504, Lei 9.096) e `f2-financas-publicas`.

## Cobertura

Classes conforme a D49 e a D51 (artigo superado sem revogação expressa conta como `fora`, com o motivo). A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar; artigos com letra entram nominalmente. Artigos revogados ou vetados por inteiro não entram na conta (nota abaixo de cada quadro). Cópias das leis em `pesquisa/brutos/planalto-leis/2026-11-11-f2-judiciario/`; RISTF em `pesquisa/brutos/stf/2026-11-11-f2-judiciario/`; RISTJ em `pesquisa/brutos/stj/2026-10-23/`.

### LC 35/1979 (Lei Orgânica da Magistratura Nacional)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 10 | fora | superados pela CF/1988: descrevem os órgãos de 1979 (Conselho Nacional da Magistratura, Tribunal Federal de Recursos) e a composição dos tribunais superiores e eleitorais, hoje nos arts. 92 a 123 da CF |
| art. 11 | coberto | org:zonas-eleitorais (juízes de direito como juízes eleitorais) |
| arts. 12 a 14 | fora | superados: Justiça do Trabalho com juízes classistas e Juntas de Conciliação e Julgamento, extintas pela EC 24/1999 |
| art. 15 | fora | remissão à CF, à lei e aos regimentos |
| art. 16 | coberto | org:arquetipo-estadual-orgao-especial-do-tribunal-de-justica |
| art. 17 | coberto | cargo:juiz-de-direito-substituto, cargo:juiz-de-direito |
| art. 18 | fora | Justiça Militar estadual: superado pelo art. 125, §§ 3º a 5º, da CF (TJMs já no mapa) |
| art. 19 | coberto | org:tj-df |
| art. 20 | coberto | cargo:juiz-de-direito-substituto |
| art. 21 | coberto | rel:desembargadores-elegem-arquetipo-estadual-*, cargo:presidente-de-trf, org:arquetipo-estadual-camaras-do-tribunal-de-justica |
| art. 22 | coberto | vitaliciamento: cargo:juiz-federal-substituto, cargo:juiz-do-trabalho-substituto, cargo:juiz-federal-substituto-da-justica-militar, cargo:juiz-de-direito-substituto e titulares |
| arts. 23 a 26 e 28 a 39 | fora | garantias, prerrogativas e deveres dos magistrados (direitos e deveres individuais); rito da perda do cargo (detalhe de processo, e a perda do cargo do vitalício hoje depende de sentença, CF, art. 95, I) |
| art. 27 | coberto | org:arquetipo-estadual-orgao-especial-do-tribunal-de-justica (reclassificado em f2-fechamento) |
| arts. 40 a 48 | coberto | rel:arquetipo-estadual-orgao-especial-exerce-poder-disciplinar-sobre-juiz-de-direito |
| art. 49 | fora | responsabilidade civil do magistrado (dever individual) |
| arts. 50 a 60 | fora | Conselho Nacional da Magistratura, extinto pela CF/1988 (o controle passou ao CNJ, EC 45/2004) |
| arts. 61 a 77 | fora | vencimentos, férias, licenças, afastamentos e aposentadoria (direitos individuais) |
| art. 78 | coberto | cargos de juiz substituto (concurso com participação da OAB) |
| art. 79 | fora | compromisso e declaração de bens na posse (detalhe) |
| arts. 80 e 81 | coberto | cargo:juiz-de-direito, cargo:juiz-federal (promoção e remoção) |
| arts. 82 e 83 | fora | inscrições e editais de promoção e remoção (detalhe de processo) |
| arts. 84 a 86 | fora | acesso ao TFR, ao STM e aos TRTs: superado pela CF (arts. 94, 107, 115 e 123) |
| art. 87 | fora | acesso aos TJs: regra hoje no art. 93, III, da CF (cargo:desembargador) |
| art. 88 | fora | composição da lista de merecimento (detalhe de processo) |
| arts. 89 e 90 | fora | Tribunal Federal de Recursos, extinto pela CF/1988 (ADCT, art. 27) |
| art. 91 | fora | nomenclatura dos cargos da Justiça do Trabalho superada (presidente de Junta) |
| art. 92 | coberto | cargo:juiz-do-trabalho-substituto |
| art. 93 | fora | convocação de juízes para substituição (detalhe) |
| art. 94 | coberto | cargo:presidente-do-tst, cargo:vice-presidente-do-tst, cargo:presidente-de-trt |
| arts. 95 a 97 | coberto | org:arquetipo-estadual-comarcas |
| art. 98 | fora | pedido de intervenção por falta de recursos: superado pela CF, arts. 34, IV, e 36, I |
| art. 99 | coberto | org:arquetipo-estadual-orgao-especial-do-tribunal-de-justica, rel:arquetipo-estadual-presidente-do-tj-preside-orgao-especial |
| art. 100 | fora | quinto constitucional: regra hoje no art. 94 da CF (cargo:desembargador) |
| art. 101 | coberto | org:arquetipo-estadual-camaras-do-tribunal-de-justica |
| arts. 102 a 105 | coberto | cargos de Presidente, Vice-Presidente e Corregedor do TJ (arquétipo), org:arquetipo-estadual-conselho-da-magistratura e relações |
| arts. 106 e 107 | fora | proposta de alteração do número de juízes (hoje CF, art. 96, II, b) e vedação de convocação (detalhe) |
| arts. 108 a 111 | fora | tribunais de alçada, extintos pela EC 45/2004 (art. 4º) |
| arts. 112 e 113 | fora | justiça de paz temporária, superada pela justiça de paz eletiva do art. 98, II, da CF (org:justica-de-paz) |
| art. 114 | coberto | rel:arquetipo-estadual-vice-presidente-do-tj-substitui-presidente-do-tj |
| arts. 116 a 121 | fora | redistribuição, quórum, convocação de substitutos e pauta (detalhe de processo) |
| art. 122 | coberto | cargo:arquetipo-estadual-presidente-do-tribunal-de-justica, cargo:presidente-do-tse |
| arts. 123 e 124 | fora | prorrogação de mandatos em 1979 (transição esgotada) e vencimentos do convocado |
| art. 125 | coberto | cargos de Presidente e Vice-Presidente do TJ (arquétipo) |
| art. 126 | fora | CJF de 1979, junto ao TFR: superado pela Lei 11.798/2008 (org:conselho-da-justica-federal) |
| arts. 127 a 129 | fora | remissão a outros órgãos disciplinares, impedimento de parentes e vedação de vantagens (detalhe) |
| art. 131 | fora | certidão do processo disciplinar (direito individual) |
| art. 132 | coberto | org:tj-df, org:conselho-da-magistratura-do-tjdft |
| arts. 133 a 143 | fora | instalação do Conselho Nacional da Magistratura, do TFR ampliado e adaptação dos estados em 1979 (transição esgotada) |
| art. 145 | fora | absorção de gratificações em 1979 (transição esgotada) |
| art. 146 | coberto | norma:lc-35-1979 (vigência) |
| art. 147 | fora | cláusula revogatória |

Revogados por inteiro (fora da conta): arts. 115 e 130. Vetado: art. 144. Conta: 144 artigos vigentes; coberto 35, fora 109, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%. Em f2-fechamento (2026-11-14), art. 27 passou a coberto: coberto 36, fora 108.

### Lei nº 5.010/1966 (Justiça Federal de primeira instância)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | coberto | org:varas-federais, cargo:juiz-federal-substituto, cargo:juiz-federal |
| art. 2º | fora | regiões judiciárias de 1966, superadas pelas regiões dos TRFs (CF, art. 107; ADCT, art. 27) |
| art. 3º | coberto | org:varas-federais (uma seção judiciária por estado e no DF) |
| arts. 4º a 9º | fora | CJF de 1966, junto ao TFR: superado pela CF (art. 105, parágrafo único, II) e pela Lei 11.798/2008 |
| art. 10 | fora | competência da Justiça Federal, hoje no art. 109 da CF |
| arts. 11 a 13 | coberto | org:varas-federais; art. 13 também em cargo:juiz-federal |
| art. 14 | coberto | cargo:juiz-federal-substituto |
| art. 15 | coberto | org:varas-federais (competência delegada à Justiça estadual) |
| art. 16 | fora | distribuição dos feitos (detalhe de processo) |
| art. 17 | coberto | org:varas-federais (número de juízes, Anexo I, em estrutura_continua) |
| arts. 18 e 19 | fora | remoção aprovada pelo TFR e nomeação por lista quíntupla do STF: superados (CF, arts. 93 e 96, I, c) |
| art. 20 | coberto | cargo:juiz-federal-substituto |
| arts. 21 a 27 | fora | requisitos, rito do concurso e posse (detalhe; regra atual na CF, art. 93, I) |
| arts. 28 a 34 | fora | vedações, deveres e sanções dos juízes (deveres individuais); remoção proposta pelo TFR (superada) |
| arts. 35 a 44 | fora | serviços auxiliares (secretarias, cargos de servidores, oficiais de justiça): estrutura administrativa abaixo do mapa (D09) |
| arts. 45 a 47 | fora | custas (detalhe de processo) |
| arts. 48 a 53 | fora | vencimentos, férias e regime de juízes e servidores (direitos individuais) |
| arts. 54 a 59 | fora | horários, deveres, diretor do foro designado pelo antigo CJF, boletim e precatórios: superados pelo art. 100 da CF e pela organização dos TRFs, ou detalhe |
| art. 60 | fora | juiz federal no TRE: hoje CF, art. 120, § 1º, II (cargo:juiz-de-tre) |
| arts. 61 a 72 | fora | varas criminais, feriados, súmulas e substituição no TFR, polícia judiciária, inquérito, intervenção da União e nepotismo (detalhe de processo ou superados) |
| arts. 73 a 94 | fora | instalação da Justiça Federal em 1966, criação de cargos e créditos (transição esgotada) |
| art. 95 | coberto | norma:lei-5010-1966 (vigência) |
| art. 96 | fora | cláusula revogatória |

Nenhum artigo revogado por inteiro (o caput do art. 15 tem redação da Lei 13.876/2019). Conta: 96 artigos vigentes; coberto 10, fora 86, parcial 0, lacuna 0; cobertura 100,0%.

### Lei nº 10.259/2001 (Juizados Especiais Federais)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 3º | coberto | org:juizados-especiais-federais |
| art. 4º | fora | medidas cautelares (detalhe de processo) |
| art. 5º | coberto | rel:turmas-recursais-federais-julga-recursos-dos-juizados (só cabe recurso de sentença definitiva) |
| art. 6º | coberto | org:juizados-especiais-federais |
| arts. 7º a 13 | fora | citações, intimações, prazos, representação, perícia e reexame (detalhe de processo) |
| art. 14 | coberto | org:turmas-recursais-federais, org:turma-nacional-de-uniformizacao, cargo:coordenador-dos-juizados-especiais-federais, rel:corregedor-geral-da-justica-federal-preside-turma-nacional-de-uniformizacao |
| arts. 15 e 16 | fora | recurso extraordinário e cumprimento de obrigação de fazer (detalhe de processo) |
| arts. 17 e 18 | coberto | org:juizados-especiais-federais |
| arts. 19 e 20 | fora | prazo de instalação em 2002 (transição esgotada) e foro onde não há vara (detalhe) |
| arts. 21 e 22 | coberto | org:turmas-recursais-federais, org:juizados-especiais-federais, cargo:coordenador-dos-juizados-especiais-federais |
| arts. 23 a 25 | fora | limitação temporária de competência e causas antigas (transição esgotada); programas de informática e cursos (detalhe) |
| art. 26 | coberto | org:juizados-especiais-federais |
| art. 27 | coberto | norma:lei-10259-2001 (vigência) |

Nenhum artigo revogado por inteiro (só os §§ 1º e 2º do art. 21, pela Lei 12.665/2012). Conta: 27 artigos vigentes; coberto 12, fora 15; cobertura 100,0%.

### Lei nº 8.457/1992 (organização da Justiça Militar da União)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º e 2º | coberto | org:corregedoria-da-justica-militar, org:auditorias-da-justica-militar, conselhos de justiça, cargos de juiz |
| arts. 3º a 6º | coberto | org:stm, cargo:presidente-do-stm, cargo:vice-presidente-do-stm |
| arts. 7º e 8º | fora | procedimento e atos do relator (detalhe de processo) |
| arts. 9º e 10 | coberto | cargo:presidente-do-stm, cargo:vice-presidente-do-stm, rel:vice-presidente-do-stm-substitui-presidente-do-stm |
| art. 11 | coberto | org:auditorias-da-justica-militar |
| arts. 12 a 14, 14-A | coberto | org:corregedoria-da-justica-militar, cargo:juiz-corregedor-auxiliar e relações |
| arts. 15 a 30 | coberto | org:auditorias-da-justica-militar, org:conselhos-especiais-de-justica, org:conselhos-permanentes-de-justica, cargo:juiz-militar-dos-conselhos-de-justica, cargo:juiz-federal-da-justica-militar |
| arts. 31 e 32 | fora | substituição dos juízes militares (detalhe) e remissão à LOMAN |
| art. 33 | coberto | cargo:juiz-federal-substituto-da-justica-militar |
| arts. 35 e 36 | coberto | cargo:juiz-federal-da-justica-militar, rel:stm-nomeia-juiz-federal-substituto-da-justica-militar |
| art. 37 | fora | inamovibilidade (garantia individual) |
| arts. 38 e 39 | coberto | cargo:juiz-federal-da-justica-militar (remoção), cargo:juiz-corregedor-auxiliar |
| arts. 40 e 41 | fora | prazo e termo de posse (detalhe) |
| art. 42 | coberto | cargo:juiz-federal-substituto-da-justica-militar (posse perante o Presidente do STM) |
| arts. 43 a 47 | fora | exercício, trânsito e prazos (detalhe) |
| art. 48 | coberto | cargo:juiz-federal-substituto-da-justica-militar (vitaliciamento) |
| arts. 49 a 59 | fora | antiguidade, férias, licenças e aposentadoria (direitos individuais) |
| art. 61 | fora | incompatibilidade por parentesco (detalhe) |
| art. 62 | coberto | cargo:juiz-corregedor-auxiliar, rel:vice-presidente-do-stm-substitui-presidente-do-stm, rel:juiz-corregedor-auxiliar-substitui-ministro-corregedor-da-justica-militar |
| arts. 63 a 66 | fora | convocação de substitutos e redistribuição (detalhe) |
| arts. 67 a 70 | fora | MPM e Defensoria junto à Justiça Militar: remissão (org:mpm, org:dpu) |
| arts. 71, 72, 74 a 76, 78 a 88 | fora | serviços auxiliares e regime disciplinar dos servidores: estrutura administrativa abaixo do mapa (D09) |
| arts. 89 a 97 | fora | órgão só em situação excepcional (D52): Justiça Militar em tempo de guerra, que não funcionava em 2026-10-01 (motivo ajustado em f2-fechamento) |
| arts. 98 a 101 | fora | independência recíproca, vestes, incompatibilidade e fé pública (detalhe) |
| art. 102 | coberto | org:auditorias-da-justica-militar (sedes) |
| art. 103 | fora | defensores da Justiça Militar até a organização da DPU (transição esgotada) |
| art. 103-A | coberto | cargo:juiz-corregedor-auxiliar |
| art. 104 | fora | vigência e cláusula revogatória |

Revogados por inteiro (fora da conta): arts. 34, 60 e 77, pela Lei 13.774/2018. Vetado: art. 73. Conta: 102 artigos vigentes; coberto 39, fora 63; cobertura 100,0%.

### CLT, arts. 643 a 735 (organização da Justiça do Trabalho)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 643 a 646 | coberto | org:justica-do-trabalho, org:varas-do-trabalho (art. 644), cargo:presidente-do-tst (art. 646) |
| arts. 647 a 649 | fora | composição das Juntas com vogais classistas, extinta pela EC 24/1999 |
| arts. 650 a 653 | coberto | org:varas-do-trabalho |
| art. 654 | coberto | cargo:juiz-do-trabalho-substituto, cargo:juiz-do-trabalho |
| art. 655 | fora | posse (detalhe) |
| art. 656 | coberto | cargo:juiz-do-trabalho-substituto |
| arts. 657 a 659 | fora | vencimentos, deveres e atribuições processuais do juiz da vara (deveres individuais e detalhe) |
| arts. 660 a 667 | fora | vogais (classistas) das Juntas, extintos pela EC 24/1999 |
| arts. 668 e 669 | coberto | org:varas-do-trabalho, cargo:juiz-de-direito |
| art. 670 | coberto | cargo:presidente-de-trt (§ 7º); a composição com classistas (caput e demais parágrafos) foi superada pela EC 24/1999 e pela CF, art. 115 |
| arts. 671 a 673 | fora | incompatibilidade, quórum e ordem das sessões dos TRTs (detalhe) |
| art. 674 | fora | divisão em oito regiões (1972), superada pelas leis que criaram os 24 TRTs |
| arts. 676 e 677 | fora | alteração das regiões por ato do Presidente da República (superada pela CF, arts. 96, II, e 113) e competência territorial (detalhe) |
| arts. 678 a 680 | coberto | org:justica-do-trabalho (Pleno e Turmas dos TRTs) |
| arts. 681 a 683 | coberto | cargo:presidente-de-trt |
| arts. 684, 685, 687 a 689 | fora | juízes classistas dos TRTs, extintos pela EC 24/1999 |
| art. 690 | coberto | org:tst |
| art. 693 | coberto | cargo:presidente-do-tst, cargo:vice-presidente-do-tst, cargo:corregedor-geral-da-justica-do-trabalho (§ 1º); a composição de 17 ministros foi superada pela CF, art. 111-A |
| art. 694 | fora | origem dos ministros togados: superado pela CF, art. 111-A |
| arts. 696, 697, 699 a 701 | fora | renúncia de classista, convocação, quórum e sessões do TST (detalhe; classistas extintos) |
| art. 702 | coberto | org:tst |
| arts. 707 e 708 | coberto | cargo:presidente-do-tst, cargo:vice-presidente-do-tst, rel:vice-presidente-do-tst-substitui-presidente-do-tst |
| arts. 710 a 721 | fora | serviços auxiliares (secretarias, distribuidores, cartórios e oficiais de justiça): estrutura administrativa abaixo do mapa (D09) |
| arts. 722, 726 a 733 | fora | penalidades (crimes e penas) |
| art. 734 | fora | revisão de decisões da extinta Câmara de Previdência Social pelo Ministro do Trabalho (superado) |
| art. 735 | fora | dever de prestar informações à Justiça do Trabalho (detalhe) |

Revogados ou suprimidos por inteiro (fora da conta): arts. 675, 686, 691, 692, 695, 698, 703 a 706, 709 (Lei 14.824/2024), 723 a 725. Conta: 79 artigos vigentes; coberto 24, fora 55; cobertura 100,0%.

### Código Eleitoral (Lei nº 4.737/1965), arts. 12 a 41 (órgãos da Justiça Eleitoral)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 12 a 17 | coberto | org:justica-eleitoral, org:tse, org:zonas-eleitorais, cargo:juiz-de-tre, cargo:ministro-do-tse, cargos de Presidente, Vice-Presidente e Corregedor-Geral do TSE, org:corregedoria-geral-eleitoral |
| art. 18 | fora | Procurador-Geral Eleitoral: regulado hoje pela LC 75/1993, arts. 72 a 80 (cargo:procurador-geral-eleitoral) |
| art. 19 | coberto | org:tse |
| arts. 20 e 21 | fora | suspeição e cumprimento das decisões do TSE (detalhe de processo) |
| arts. 22, 23, 23-A | coberto | org:tse, org:corregedoria-geral-eleitoral, org:zonas-eleitorais |
| art. 24 | coberto | cargo:corregedor-geral-eleitoral (inciso IX); as demais atribuições do Procurador-Geral Eleitoral estão hoje na LC 75/1993, arts. 72 a 80 |
| art. 25 | coberto | cargo:juiz-de-tre |
| art. 26 | coberto | cargo:presidente-de-tre, cargo:vice-presidente-de-tre, cargo:corregedor-regional-eleitoral e relações (o Vice-Presidente acumula a Corregedoria pela Res. TSE 23.742/2024, art. 9º; a regra do "terceiro desembargador" não cabe na composição da CF; reclassificado em f2-fechamento) |
| art. 27 | fora | Procurador Regional Eleitoral: regulado hoje pela LC 75/1993, arts. 76 e 77 (cargo:procurador-regional-eleitoral) |
| art. 28 | fora | quórum e suspeição nos TREs (detalhe de processo) |
| arts. 29 e 30 | coberto | org:justica-eleitoral, org:zonas-eleitorais |
| art. 31 | fora | órgão só em situação excepcional (D52): jurisdição sobre Território sem TRE, e não há territórios federais em 2026-10-01 (motivo ajustado em f2-fechamento) |
| arts. 32 a 37 | coberto | cargo:juiz-eleitoral, org:zonas-eleitorais, org:juntas-eleitorais |
| arts. 38 e 39 | fora | escrutinadores e divulgação das nomeações da junta (detalhe de processo) |
| art. 40 | coberto | org:juntas-eleitorais |
| art. 41 | fora | contagem prévia dos votos pelas mesas (detalhe de processo) |

Nenhum artigo revogado por inteiro nesta faixa. Conta: 31 artigos vigentes; coberto 21, parcial 1, fora 9; cobertura 96,8%. Em f2-fechamento (2026-11-14), art. 26 passou a coberto: coberto 22, parcial 0, fora 9; cobertura 100,0%.

### Lei nº 11.697/2008 (organização judiciária do DF e dos Territórios)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 5º | coberto | org:tj-df, org:varas-do-df, cargos de Presidente, Vice-Presidentes e Corregedor do TJDFT e relações de eleição |
| arts. 6º e 7º | fora | substituição de desembargador e impedimento de parentes (detalhe) |
| arts. 8º a 12 | coberto | org:tj-df, org:conselho-especial-do-tjdft, org:conselho-da-magistratura-do-tjdft, org:corregedoria-da-justica-do-df e cargos |
| arts. 13 a 15 | fora | procedimento de julgamento no Tribunal (detalhe de processo) |
| arts. 16 a 25, 25-A, 26 a 28 | coberto | org:varas-do-df, cargo:juiz-de-direito-substituto |
| arts. 30 a 41 | coberto | org:varas-do-df, org:auditoria-militar-do-df |
| arts. 43 a 49 | coberto | org:varas-do-df, cargo:juiz-de-direito-substituto |
| art. 50 | fora | remissão às normas aplicáveis aos magistrados |
| arts. 51 a 56 | coberto | cargo:juiz-de-direito-substituto, cargo:juiz-de-direito, cargo:presidente-do-tjdft, cargo:desembargador, rel:presidente-do-tjdft-nomeia-juiz-de-direito-substituto |
| arts. 57 a 63 | fora | invalidez, antiguidade, férias, ajuda de custo e deveres (direitos e deveres individuais) |
| arts. 64 e 65 | fora | classificação dos serviços auxiliares (D09) |
| art. 66 | coberto | org:corregedoria-da-justica-do-df |
| arts. 67 a 72 | fora | cartórios judiciais e servidores (estrutura administrativa abaixo do mapa, D09) |
| art. 73 | coberto | org:corregedoria-da-justica-do-df |
| arts. 74 e 75 | fora | lista dos serviços notariais e de registro do DF e direitos dos seus empregados (abaixo do mapa, D09) |
| arts. 76 a 80 | fora | regime e provimento dos servidores (D09) |
| arts. 81 e 82 | coberto | org:instituto-de-formacao-do-tjdft, org:ouvidoria-geral-da-justica-do-df |
| arts. 83 a 89 | fora | PROJUS (programa de investimentos, não é órgão), revisão do regimento e criação de cargos e varas por cronograma (transição) |
| art. 90 | coberto | norma:lei-11697-2008 (vigência) |
| art. 91 | fora | cláusula revogatória |

Vetados (fora da conta): arts. 29 e 42. Conta: 90 artigos vigentes; coberto 54, fora 36; cobertura 100,0%.

### RISTF (Regimento Interno do STF, edição atualizada até a ER 58/2022)

Só a estrutura entra (tarefa); a tramitação é `fora` (D49), e quem julga o quê já está nas relações da CF.

| Artigos | Classe | Onde/motivo |
|---|---|---|
| art. 1º | fora | disposição inicial |
| arts. 2º a 14 | coberto | org:stf, org:plenario-do-stf, org:primeira-turma-do-stf, org:segunda-turma-do-stf, org:presidencia-do-stf, cargo:presidente-do-stf, cargo:vice-presidente-do-stf e relações |
| arts. 15 a 20 | fora | posse, antiguidade e deveres dos ministros (detalhe) |
| arts. 21, 21-A, 21-B, 22 a 25 | fora | relator e revisor (detalhe de processo) |
| arts. 26 a 34 | coberto | as quatro comissões permanentes (org:comissao-de-regimento-do-stf e demais) |
| arts. 35 e 36 | fora | licenças e afastamentos (detalhe) |
| art. 37 | coberto | cargo:vice-presidente-do-stf, rel:vice-presidente-do-stf-substitui-presidente-do-stf |
| arts. 38 a 47 | fora | substituição do relator, convocações, polícia do Tribunal e desacato (detalhe) |
| arts. 48 a 53 | fora | atuação da Procuradoria-Geral da República perante o Tribunal (detalhe de processo) |
| arts. 54 a 77, 77-A | fora | registro, distribuição e atos (detalhe de processo) |
| art. 77-B | coberto | rel:stf-julga-adpf (distribuição das ações de controle concentrado) |
| arts. 77-C, 77-D, 78 a 142 | fora | distribuição, atos, prazos, provas e sessões em geral (detalhe de processo) |
| arts. 143 a 150 | coberto | org:plenario-do-stf, org:primeira-turma-do-stf, org:segunda-turma-do-stf |
| arts. 151 a 155 | fora | sessões administrativas e audiências (detalhe) |
| arts. 156 a 172 | fora | reclamação, conflitos e declaração de inconstitucionalidade (detalhe de processo) |
| art. 173 | coberto | rel:stf-julga-adpf (quórum da declaração de inconstitucionalidade) |
| arts. 174 a 230, 230-A, 230-B, 230-C, 231 a 314, 314-A, 315 a 323, 323-A, 323-B, 324, 325, 325-A, 326, 326-A, 327, 328, 328-A, 329 a 343 | fora | processos originários, incidentes e recursos (detalhe de processo; a competência está nas relações do STF baseadas na CF) |
| arts. 345 a 354 | fora | execução e intervenção federal (detalhe; proc:intervencao-federal segue a CF) |
| arts. 354-A, 354-B, 354-C, 354-D, 354-E, 354-F, 354-G | coberto | proc:sumula-vinculante (etapas citam os artigos; reclassificado em f2-fechamento) |
| arts. 354-H, 354-I, 354-J, 354-K, 354-L, 354-M | fora | opinião consultiva ao Tribunal Permanente de Revisão do Mercosul (detalhe) |
| art. 355 | fora | Secretaria do Tribunal (estrutura administrativa, D09) |
| art. 356 | coberto | org:presidencia-do-stf |
| arts. 356-A, 357 a 360 | fora | gabinetes (estrutura administrativa, D09) |
| arts. 361 a 365, 365-A, 366, 367 | fora | emendas regimentais e disposições transitórias |
| art. 368 | coberto | norma:ristf (vigência) |
| art. 369 | fora | cláusula revogatória |

Revogado por inteiro (fora da conta): art. 344 (ER 41/2010). Conta: 398 artigos vigentes; coberto 35, fora 363; cobertura 100,0%. Em f2-fechamento (2026-11-14), arts. 354-A a 354-G passaram a coberto: coberto 42, fora 356. A ER 59/2023 não está na edição consultada (ver diário).

### RISTJ (Regimento Interno do STJ, edição atualizada até a ER 54/2026, mais a ER 55/2026)

| Artigos | Classe | Onde/motivo |
|---|---|---|
| arts. 1º a 3º | coberto | cargo:ministro-do-stj, org:plenario-do-stj, org:corte-especial-do-stj, as três Seções, as seis Turmas, cargos de Presidente, Vice-Presidente, Corregedor Nacional e Corregedor-Geral da Justiça Federal |
| art. 4º | fora | lotação do ministro empossado (detalhe) |
| art. 5º | coberto | org:conselho-de-administracao-do-stj |
| art. 6º | fora | repete a CF, art. 105, parágrafo único, II (org:conselho-da-justica-federal) |
| arts. 7º a 15 | coberto | rel:presidente-de-trf-integra-conselho-da-justica-federal, rel:presidente-do-stj-preside-conselho-da-justica-federal, org:plenario-do-stj, org:corte-especial-do-stj, Seções e Turmas; relações de foro do STJ (art. 11, I) |
| art. 16 | fora | remessa de feitos à Corte Especial (detalhe de processo) |
| arts. 17 e 18 | coberto | cargo:presidente-do-stj, cargo:vice-presidente-do-stj e relações |
| art. 19 | fora | eleição para vaga de Vice-Presidente (detalhe) |
| arts. 20, 21, 21-A, 21-B, 21-C, 21-D, 21-E, 22 a 25 | coberto | cargo:corregedor-nacional-de-justica, org:presidencia-do-stj, cargo:vice-presidente-do-stj, cargo:corregedor-geral-da-justica-federal, Seções e Turmas |
| arts. 26 a 37 | fora | posse, antiguidade, relator e revisor (detalhe) |
| arts. 38 a 46, 46-A, 46-B | coberto | org:conselho-de-administracao-do-stj e as seis comissões permanentes |
| arts. 47 a 49 | fora | CJF: repete a CF e a Lei 11.798/2008 (org:conselho-da-justica-federal) |
| arts. 50 a 53, 55 a 60 | fora | licenças, substituições, convocações, polícia do Tribunal e desacato (detalhe) |
| arts. 61 a 65, 65-A, 65-B | fora | atuação do Ministério Público e da Defensoria perante o Tribunal (detalhe de processo) |
| arts. 66 a 104, 104-A, 105 a 117 | fora | registro, distribuição, atos, prazos, despesas e estatística (detalhe de processo) |
| arts. 121-A, 122 a 129, 129-A, 129-B, 131 a 138 | fora | precedentes, súmula e divulgação da jurisprudência (detalhe) |
| arts. 139, 140, 142 a 170 | fora | provas e sessões em geral (detalhe de processo) |
| arts. 171 a 184 | coberto | org:plenario-do-stj, org:corte-especial-do-stj, Seções, Turmas e org:conselho-de-administracao-do-stj (sessões de cada órgão) |
| arts. 184-A, 184-B, 184-C, 184-D, 184-E, 184-F, 184-G, 184-H, 184-I, 184-J | fora | julgamento virtual (detalhe de processo) |
| arts. 255-A a 255-Z e 255-AA a 255-AE | fora | relevância da questão de direito federal no recurso especial, acrescentada pela ER 55/2026, em vigor em 3/9/2026 (detalhe de processo; acrescentado em f2-fechamento) |
| arts. 185 a 216, 216-A a 216-X, 217 a 243, 243-A, 244 a 251, 253 a 256, 256-A a 256-X, 257, 257-A a 257-F, 258, 259, 263 a 266, 266-A a 266-D, 267 a 271, 271-A a 271-G, 272 a 288, 288-A a 288-G | fora | processos originários, recursos e incidentes (detalhe de processo; a competência está nas relações do STJ baseadas na CF) |
| art. 289 | coberto | org:plenario-do-stj (eleição dos ministros do TSE) |
| arts. 290 a 301, 302-A, 303 a 306, 309 a 315 | fora | disponibilidade, invalidez e cumprimento das decisões (detalhe) |
| arts. 316 a 321 | fora | Secretaria do Tribunal (estrutura administrativa, D09) |
| art. 322 | coberto | org:presidencia-do-stj |
| arts. 323, 325 a 327, 331-A a 331-C | fora | gabinetes e Biblioteca STJ-Enfam (estrutura administrativa, D09) |
| arts. 332 a 343, 343-A | fora | emendas ao regimento e disposições gerais e transitórias |
| art. 344 | coberto | norma:ristj (vigência) |

Revogados por inteiro (fora da conta): arts. 54, 118 a 121, 130, 141, 252, 260 a 262, 302, 307, 308, 324 e 328 a 331. Conta: 426 artigos vigentes; coberto 54, fora 372; cobertura 100,0%. Em f2-fechamento (2026-11-14), entram os 31 artigos da ER 55/2026: 457 artigos vigentes; coberto 54, fora 403; cobertura 100,0%.

## Diário

- 2026-11-11 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), D01 a D51, modelo de dados, protocolo e os quadros de f2-funcoes-essenciais e f2-legislativo-tcu
- 2026-11-11 22:45 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-judiciario/ (Invoke-WebRequest; o curl teve a conexão resetada pelo Planalto): lcp35.htm (última alteração citada: LC 60/1989), l5010.htm (Lei 13.876/2019), l10259.htm (Lei 12.665/2012), l8457.htm (Lei 13.774/2018), del5452compilado.htm (CLT; nos arts. 643 a 735 a mais recente é a Lei 14.824/2024, que revogou o art. 709), l4737compilado.htm (Código Eleitoral; nos arts. 12 a 41 a mais recente é a Lei 14.211/2021, art. 23-A), l11697.htm (Lei 13.850/2019). As cópias de l10259, l11697 e l8457 só diferem das de outubro no script do servidor: nada mudou entre 2026-10-01 e hoje nesses artigos
- 2026-11-11 22:50 — RISTF: a API de atos normativos do STF não resolve (DNS) e o Wayback recusou o download (429); baixada a edição do site do STF em pesquisa/brutos/stf/2026-11-11-f2-judiciario/ristf-stf-arquivo-cms.pdf, "atualizado até a Emenda Regimental n. 58/2022". Falta a ER 59/2023 (18/12/2023), que segundo o Migalhas (7/12/2023, PADM 2) devolveu às Turmas as ações penais contra parlamentares, ministros de Estado e outros e extinguiu o revisor nas ações penais; por isso não acrescentamos o RISTF às relações de foro (quem julga crime comum). RISTJ: edição oficial da BDJur até a ER 54/2026 (bruto já existente em pesquisa/brutos/stj/2026-10-23/)
- 2026-11-11 22:52 — gravado norma:lc-35-1979
- 2026-11-11 22:52 — gravado norma:lei-5010-1966
- 2026-11-11 22:52 — gravado org:arquetipo-estadual-orgao-especial-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado org:arquetipo-estadual-conselho-da-magistratura
- 2026-11-11 22:52 — gravado org:arquetipo-estadual-camaras-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado org:arquetipo-estadual-comarcas
- 2026-11-11 22:52 — gravado cargo:arquetipo-estadual-presidente-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado cargo:arquetipo-estadual-vice-presidente-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado cargo:arquetipo-estadual-corregedor-da-justica
- 2026-11-11 22:52 — gravado rel:desembargadores-elegem-arquetipo-estadual-presidente-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado rel:desembargadores-elegem-arquetipo-estadual-vice-presidente-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado rel:desembargadores-elegem-arquetipo-estadual-corregedor-da-justica
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-vice-presidente-do-tj-substitui-presidente-do-tj
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-presidente-do-tj-preside-orgao-especial
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-corregedor-da-justica-corrige-juiz-de-direito
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-conselho-da-magistratura-exerce-poder-disciplinar-sobre-juiz-de-direito
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-orgao-especial-exerce-poder-disciplinar-sobre-juiz-de-direito
- 2026-11-11 22:54 — gravado cargo:juiz-federal-substituto
- 2026-11-11 22:54 — gravado cargo:juiz-do-trabalho-substituto
- 2026-11-11 22:54 — gravado cargo:juiz-federal-substituto-da-justica-militar
- 2026-11-11 22:54 — gravado cargo:juiz-de-direito-substituto
- 2026-11-11 22:54 — editado cargo:juiz-federal (f2-judiciario: separado o juiz federal substituto (cargo próprio); provimento passou de concurso-publico a promocao; requisitos, resumo e notas reescritos; acrescentadas LOMAN e Lei 5.010)
- 2026-11-11 22:54 — editado cargo:juiz-do-trabalho (f2-judiciario: separado o juiz do trabalho substituto (cargo próprio); provimento passou de concurso-publico a promocao; requisitos, resumo e notas reescritos; acrescentadas CLT, art. 654, § 5º, e LOMAN)
- 2026-11-11 22:54 — editado cargo:juiz-federal-da-justica-militar (f2-judiciario: separado o substituto (cargo próprio); provimento passou de concurso-publico a promocao; requisitos, resumo e notas reescritos; acrescentados arts. 15, 16, 30, 35, 36 e 38 da Lei 8.457/1992)
- 2026-11-11 22:54 — editado cargo:juiz-de-direito (f2-judiciario: separado o juiz de direito substituto (cargo próprio); provimento passou de concurso-publico a variavel (concurso onde não há substitutos; promoção onde há); acrescentadas LOMAN, CLT (arts. 668 e 669) e Lei 11.697/2008)
- 2026-11-11 22:56 — gravado org:varas-federais
- 2026-11-11 22:56 — gravado cargo:coordenador-dos-juizados-especiais-federais
- 2026-11-11 22:56 — gravado rel:juizes-de-trf-elegem-coordenador-dos-juizados-especiais-federais
- 2026-11-11 22:56 — gravado rel:coordenador-dos-juizados-especiais-federais-coordena-juizados-especiais-federais
- 2026-11-11 22:56 — gravado org:corregedoria-geral-da-justica-federal
- 2026-11-11 22:56 — gravado cargo:corregedor-geral-da-justica-federal
- 2026-11-11 22:56 — gravado rel:corregedoria-geral-da-justica-federal-corrige-juiz-de-trf
- 2026-11-11 22:56 — gravado rel:corregedor-geral-da-justica-federal-preside-turma-nacional-de-uniformizacao
- 2026-11-11 22:56 — gravado org:varas-do-trabalho
- 2026-11-11 22:56 — gravado cargo:presidente-do-tst
- 2026-11-11 22:56 — gravado cargo:vice-presidente-do-tst
- 2026-11-11 22:56 — gravado org:corregedoria-geral-da-justica-do-trabalho
- 2026-11-11 22:56 — gravado cargo:corregedor-geral-da-justica-do-trabalho
- 2026-11-11 22:56 — gravado rel:ministros-do-tst-elegem-presidente-do-tst
- 2026-11-11 22:56 — gravado rel:ministros-do-tst-elegem-vice-presidente-do-tst
- 2026-11-11 22:56 — gravado rel:ministros-do-tst-elegem-corregedor-geral-da-justica-do-trabalho
- 2026-11-11 22:56 — gravado rel:vice-presidente-do-tst-substitui-presidente-do-tst
- 2026-11-11 22:56 — gravado rel:presidente-do-tst-preside-csjt
- 2026-11-11 22:56 — gravado rel:corregedoria-geral-da-justica-do-trabalho-corrige-juiz-de-trt
- 2026-11-11 22:56 — gravado cargo:presidente-de-trt
- 2026-11-11 22:56 — gravado rel:juizes-de-trt-elegem-presidente-de-trt
- 2026-11-11 22:56 — gravado rel:presidente-de-trt-integra-csjt
- 2026-11-11 22:56 — gravado cargo:presidente-de-trf
- 2026-11-11 22:56 — gravado rel:juizes-de-trf-elegem-presidente-de-trf
- 2026-11-11 22:56 — gravado rel:presidente-de-trf-integra-conselho-da-justica-federal
- 2026-11-11 22:57 — gravado org:auditorias-da-justica-militar
- 2026-11-11 22:57 — gravado org:conselhos-especiais-de-justica
- 2026-11-11 22:57 — gravado org:conselhos-permanentes-de-justica
- 2026-11-11 22:57 — gravado cargo:juiz-militar-dos-conselhos-de-justica
- 2026-11-11 22:57 — gravado rel:juiz-federal-da-justica-militar-preside-conselhos-especiais-de-justica
- 2026-11-11 22:57 — gravado rel:juiz-federal-da-justica-militar-preside-conselhos-permanentes-de-justica
- 2026-11-11 22:57 — gravado org:corregedoria-da-justica-militar
- 2026-11-11 22:57 — gravado cargo:presidente-do-stm
- 2026-11-11 22:57 — gravado cargo:vice-presidente-do-stm
- 2026-11-11 22:57 — gravado cargo:juiz-corregedor-auxiliar
- 2026-11-11 22:57 — gravado rel:ministros-do-stm-elegem-presidente-do-stm
- 2026-11-11 22:57 — gravado rel:ministros-do-stm-elegem-vice-presidente-do-stm
- 2026-11-11 22:57 — gravado rel:vice-presidente-do-stm-substitui-presidente-do-stm
- 2026-11-11 22:57 — gravado rel:vice-presidente-do-stm-dirige-corregedoria-da-justica-militar
- 2026-11-11 22:57 — gravado rel:stm-elege-juiz-corregedor-auxiliar
- 2026-11-11 22:57 — gravado rel:juiz-corregedor-auxiliar-substitui-vice-presidente-do-stm
- 2026-11-11 22:57 — gravado rel:corregedoria-da-justica-militar-corrige-juiz-federal-da-justica-militar
- 2026-11-11 22:57 — gravado rel:stm-nomeia-juiz-federal-substituto-da-justica-militar
- 2026-11-11 22:57 — editado org:stm (f2-judiciario: acrescentados ao detalhes Turmas, Conselho de Administração e quórum (Lei 8.457/1992, arts. 3º, 4º e 6º, § 4º))
- 2026-11-11 22:57 — editado org:justica-do-trabalho (f2-judiciario: acrescentados ao detalhes a coordenação pelo Presidente do TST e a divisão Pleno/Turmas dos TRTs (CLT, arts. 643 a 646 e 678 a 680))
- 2026-11-11 22:57 — editado org:tst (f2-judiciario: acrescentados ao detalhes o funcionamento em Pleno e Turmas e a competência do Pleno para súmulas e regimento (CLT, arts. 690 e 702))
- 2026-11-11 23:00 — gravado org:zonas-eleitorais
- 2026-11-11 23:00 — gravado org:corregedoria-geral-eleitoral
- 2026-11-11 23:00 — gravado cargo:presidente-do-tse
- 2026-11-11 23:00 — gravado cargo:vice-presidente-do-tse
- 2026-11-11 23:00 — gravado cargo:corregedor-geral-eleitoral
- 2026-11-11 23:00 — gravado rel:ministros-do-tse-elegem-presidente-do-tse
- 2026-11-11 23:00 — gravado rel:ministros-do-tse-elegem-vice-presidente-do-tse
- 2026-11-11 23:00 — gravado rel:ministros-do-tse-elegem-corregedor-geral-eleitoral
- 2026-11-11 23:00 — gravado rel:corregedoria-geral-eleitoral-corrige-justica-eleitoral
- 2026-11-11 23:00 — gravado aviso:corregedor-regional-eleitoral-terceiro-desembargador
- 2026-11-11 23:00 — editado org:justica-eleitoral (f2-judiciario: acrescentadas ao detalhes as competências dos TREs (Código Eleitoral, arts. 12, 29 e 30))
- 2026-11-11 23:00 — editado org:tse (f2-judiciario: acrescentadas ao detalhes as competências do TSE no Código Eleitoral (arts. 12, 13, 16, 19, 22, 23 e 23-A))
- 2026-11-11 23:00 — editado cargo:juiz-de-tre (f2-judiciario: acrescentados ao detalhes o aumento até nove juízes e regras do biênio (Código Eleitoral, arts. 13 a 15 e 25))
- 2026-11-11 23:00 — editado cargo:ministro-do-tse (f2-judiciario: acrescentados os arts. 14 a 16 do Código Eleitoral às fontes e nota sobre o TFR)
- 2026-11-11 23:00 — gravado org:conselho-especial-do-tjdft
- 2026-11-11 23:00 — gravado org:conselho-da-magistratura-do-tjdft
- 2026-11-11 23:00 — gravado org:corregedoria-da-justica-do-df
- 2026-11-11 23:00 — gravado org:ouvidoria-geral-da-justica-do-df
- 2026-11-11 23:00 — gravado org:instituto-de-formacao-do-tjdft
- 2026-11-11 23:00 — gravado org:varas-do-df
- 2026-11-11 23:00 — gravado org:auditoria-militar-do-df
- 2026-11-11 23:00 — gravado cargo:presidente-do-tjdft
- 2026-11-11 23:00 — gravado cargo:primeiro-vice-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:primeiro-vice-presidente-do-tjdft-substitui-presidente-do-tjdft
- 2026-11-11 23:00 — gravado cargo:segundo-vice-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:segundo-vice-presidente-do-tjdft-substitui-presidente-do-tjdft
- 2026-11-11 23:00 — gravado cargo:corregedor-da-justica-do-df
- 2026-11-11 23:00 — gravado rel:tj-df-elege-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:tj-df-elege-primeiro-vice-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:tj-df-elege-segundo-vice-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:tj-df-elege-corregedor-da-justica-do-df
- 2026-11-11 23:00 — gravado rel:presidente-do-tjdft-nomeia-juiz-de-direito-substituto
- 2026-11-11 23:00 — gravado rel:corregedoria-da-justica-do-df-corrige-juiz-de-direito
- 2026-11-11 23:00 — editado org:tj-df (f2-judiciario: acrescentados ao detalhes a composição (48 desembargadores), os órgãos da Justiça do DF e a competência originária (Lei 11.697/2008, arts. 1º, 2º, 4º e 8º; LOMAN, arts. 19 e 132))
- 2026-11-11 23:02 — gravado org:plenario-do-stf
- 2026-11-11 23:02 — gravado org:primeira-turma-do-stf
- 2026-11-11 23:02 — gravado org:segunda-turma-do-stf
- 2026-11-11 23:02 — gravado org:presidencia-do-stf
- 2026-11-11 23:02 — gravado cargo:vice-presidente-do-stf
- 2026-11-11 23:02 — gravado rel:ministros-do-stf-elegem-vice-presidente-do-stf
- 2026-11-11 23:02 — gravado rel:vice-presidente-do-stf-substitui-presidente-do-stf
- 2026-11-11 23:02 — gravado org:comissao-de-regimento-do-stf
- 2026-11-11 23:02 — gravado org:comissao-de-jurisprudencia-do-stf
- 2026-11-11 23:02 — gravado org:comissao-de-documentacao-do-stf
- 2026-11-11 23:02 — gravado org:comissao-de-coordenacao-do-stf
- 2026-11-11 23:02 — gravado org:plenario-do-stj
- 2026-11-11 23:02 — gravado org:corte-especial-do-stj
- 2026-11-11 23:02 — gravado org:primeira-secao-do-stj
- 2026-11-11 23:02 — gravado org:segunda-secao-do-stj
- 2026-11-11 23:02 — gravado org:terceira-secao-do-stj
- 2026-11-11 23:02 — gravado org:primeira-turma-do-stj
- 2026-11-11 23:02 — gravado org:segunda-turma-do-stj
- 2026-11-11 23:02 — gravado org:terceira-turma-do-stj
- 2026-11-11 23:02 — gravado org:quarta-turma-do-stj
- 2026-11-11 23:02 — gravado org:quinta-turma-do-stj
- 2026-11-11 23:02 — gravado org:sexta-turma-do-stj
- 2026-11-11 23:02 — gravado org:presidencia-do-stj
- 2026-11-11 23:02 — gravado org:conselho-de-administracao-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-regimento-interno-do-stj
- 2026-11-11 23:02 — gravado org:comissao-gestora-de-precedentes-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-cooperacao-internacional-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-coordenacao-e-documentacao-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-tecnologia-da-informacao-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-gestao-da-biblioteca-do-stj
- 2026-11-11 23:02 — gravado cargo:presidente-do-stj
- 2026-11-11 23:02 — gravado cargo:vice-presidente-do-stj
- 2026-11-11 23:02 — gravado cargo:corregedor-nacional-de-justica
- 2026-11-11 23:02 — gravado rel:ministros-do-stj-elegem-presidente-do-stj
- 2026-11-11 23:02 — gravado rel:ministros-do-stj-elegem-vice-presidente-do-stj
- 2026-11-11 23:02 — gravado rel:ministros-do-stj-elegem-corregedor-nacional-de-justica
- 2026-11-11 23:02 — gravado rel:vice-presidente-do-stj-substitui-presidente-do-stj
- 2026-11-11 23:02 — gravado rel:presidente-do-stj-preside-corte-especial-do-stj
- 2026-11-11 23:02 — gravado rel:presidente-do-stj-preside-plenario-do-stj
- 2026-11-11 23:02 — gravado rel:presidente-do-stj-preside-conselho-da-justica-federal
- 2026-11-11 23:02 — gravado rel:presidente-do-stj-preside-conselho-de-administracao-do-stj
- 2026-11-11 23:02 — editado rel:stj-julga-governador (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-desembargador (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-conselheiro-do-tce (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-juiz-de-trf (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-juiz-de-trt (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-juiz-de-tre (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-membro-do-mpu (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:20 — corrigidos os resumos de org:primeira-secao-do-stj, org:segunda-secao-do-stj e org:terceira-secao-do-stj (passavam de 200 caracteres; a lista de matérias foi para o detalhes, conferida no RISTJ, art. 9º, §§ 1º a 3º); removida a condicao nula de rel:corregedor-geral-da-justica-federal-preside-turma-nacional-de-uniformizacao; org:varas-do-df passou a citar o art. 25-A da Lei 11.697/2008
- 2026-11-11 23:25 — quadro de cobertura escrito (nove normas); conferido com npm run -s cobertura:leis e por script que procura, para cada linha "coberto", uma entidade que cite o artigo; o art. 79 da LOMAN passou a fora (nenhuma entidade o cita)
- 2026-11-11 23:32 — quadro ajustado à regra 8 das instruções (artigo citado em fontes de relação é coberto): Lei 10.259, art. 5º (rel:turmas-recursais-federais-julga-recursos-dos-juizados), Código Eleitoral, art. 24 (cargo:corregedor-geral-eleitoral), RISTF, arts. 77-B e 173 (rel:stf-julga-adpf)
- 2026-11-11 23:35 — vocabulário (propostas, não editado): (1) ampliar a definição de provimento "sorteio" para incluir o sorteio entre oficiais (juízes militares dos Conselhos de Justiça, Lei 8.457/1992, art. 18), hoje restrita a cidadãos alistados; (2) um tipo de relação para "exerce a função de" (o Vice-Presidente do STM é o Ministro-Corregedor; o Vice-Presidente do STJ é o Corregedor-Geral da Justiça Federal): usamos "preside" e provimento "nato"
- 2026-11-11 23:35 — pontos para o revisor: (a) os juízes titulares (juiz-federal, juiz-do-trabalho, juiz-federal-da-justica-militar, juiz-de-direito) deixaram de representar os substitutos; as relações de foro (TRF julga juiz federal etc.) seguem só nos titulares, e o detalhe do substituto diz que vale também para ele; (b) a ER 59/2023 do RISTF não foi lida: o detalhe do Plenário evita a lista de autoridades julgadas por Turma; (c) não registramos ocupantes (D11) dos novos cargos de direção: a edição do RISTJ lista Presidente e Vice, mas o biênio terminava em agosto de 2026 e não conferimos quem estava no cargo em 2026-10-01; (d) os órgãos da Justiça Militar em tempo de guerra (Lei 8.457, arts. 89 a 97) ficaram fora por não existirem no retrato; (e) aviso:corregedor-regional-eleitoral-terceiro-desembargador depende da Resolução TSE 23.742/2024, que não conseguimos ler
- 2026-11-11 23:36 — validação limpa (npm run -s validar); cobertura conferida com npm run -s cobertura:leis; tarefa coletada
