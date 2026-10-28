---
id: f2-funcoes-essenciais
escopo: "Fase 2 (D49): leis orgânicas do MPU, da Defensoria e da AGU"
status: coletada
depende_de: [f0-funcoes-essenciais]
iniciada_em: 2026-10-28
concluida_em: 2026-10-28
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- LC 75/1993 (Estatuto do Ministério Público da União): `norma:lc-75-1993`
- Lei 8.625/1993 (Lei Orgânica Nacional do Ministério Público, para os MPs estaduais do arquétipo): `norma:lei-8625-1993`
- LC 80/1994 (Defensoria Pública da União e normas gerais das Defensorias dos estados): `norma:lc-80-1994`
- LC 73/1993 (Lei Orgânica da Advocacia-Geral da União) e Lei 10.480/2002 (Procuradoria-Geral Federal): `norma:lc-73-1993`; a 10.480, crie se não existir

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura" abaixo).
- [x] MPU: órgãos de cada ramo previstos na LC 75 (Procurador-Geral da República e Conselho de Assessoramento Superior do MPU; em cada ramo: Procurador-Geral, Colégio de Procuradores, Conselho Superior, Câmaras de Coordenação e Revisão, Corregedoria; no MPF, o Procurador Federal dos Direitos do Cidadão). Use as entidades existentes (`org:mpf`, `org:mpt`, `org:mpm`, `org:mpdft`, `org:ministerio-publico-da-uniao`, `org:ministerio-publico-eleitoral`) como contêineres. Cargos da carreira de cada ramo, agregados (ex.: Subprocurador-Geral da República, Procurador Regional da República, Procurador da República), com provimento e requisitos.
- [x] Escolha dos procuradores-gerais dos ramos (lista, nomeação, mandato) e do PGJ do MPDFT: relações e, se a lei descrever uma sequência, processo.
- [x] MP estadual (arquétipo, Lei 8.625): órgãos de administração (Procurador-Geral de Justiça, Colégio de Procuradores, Conselho Superior, Corregedoria) e de execução, onde faltarem no arquétipo estadual (`org:arquetipo-estadual-*`).
- [x] DPU (LC 80): Defensor Público-Geral Federal e Subdefensor, Conselho Superior, Corregedoria-Geral; escolha do DPGF; carreira (categorias). Defensoria estadual do arquétipo: órgãos previstos nas normas gerais.
- [x] AGU (LC 73, Lei 10.480): órgãos de direção superior (Advogado-Geral da União, Procuradoria-Geral da União, Consultoria-Geral da União, Conselho Superior da AGU, Corregedoria-Geral), Procuradoria-Geral Federal e a relação da PGFN com a AGU (`org:pgfn` existe); carreiras (Advogado da União, Procurador Federal, Procurador da Fazenda Nacional) agregadas.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar. Já existem, entre outros: `org:agu`, `org:pgfn`, `org:dpu`, `org:cnmp`, `org:mp-junto-ao-tcu`; os cargos de Procurador-Geral da República e de Advogado-Geral da União (confira os ids exatos com Grep em `dados/cargos/`).
- Em paralelo: `f2-legislativo-tcu` (Câmara, Senado, Congresso, TCU) e `f2-executivo` (ministérios, agências). Não edite entidades dessas áreas.

## Cobertura

Classes conforme a D49. A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar. Artigos vetados ou revogados por inteiro não entram na conta (ficam na nota abaixo de cada quadro). Cópias em `pesquisa/brutos/planalto-leis/2026-10-28-f2-funcoes-essenciais/`.

### LC 75/1993 (Estatuto do Ministério Público da União)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º a 10 | coberto | org:ministerio-publico-da-uniao (definição, princípios, funções, instrumentos e controle externo da atividade policial) |
| arts. 11 a 15 | coberto | cargo:procurador-federal-dos-direitos-do-cidadao |
| art. 16 | fora | remete a lei futura o procedimento da defesa dos direitos do cidadão (detalhe de processo) |
| arts. 17 a 21 | fora | garantias, prerrogativas e honras dos membros (direitos e deveres individuais) |
| arts. 22 a 24 | coberto | org:ministerio-publico-da-uniao (autonomia, orçamento, fiscalização, quatro ramos; estrutura_continua) |
| arts. 25 a 27 | coberto | cargo:procurador-geral-da-republica, cargo:vice-procurador-geral-da-republica, rel:procurador-geral-da-republica-designa-vice-procurador-geral-da-republica, rel:vice-procurador-geral-da-republica-substitui-procurador-geral-da-republica, rel:procurador-geral-da-republica-nomeia-procurador-geral-do-trabalho |
| arts. 28 a 31 | coberto | org:conselho-de-assessoramento-superior-do-mpu, rel:procurador-geral-da-republica-preside-conselho-de-assessoramento-superior-do-mpu |
| arts. 32 a 34 | coberto | org:ministerio-publico-da-uniao (carreiras independentes) |
| arts. 35 e 36 | coberto | org:secretaria-do-mpu |
| arts. 37 a 39 | coberto | org:mpf |
| arts. 40 a 42 | coberto | cargo:procurador-federal-dos-direitos-do-cidadao, rel:procurador-geral-da-republica-designa-procurador-federal-dos-direitos-do-cidadao, rel:conselho-superior-do-mpf-aprova-indicacao-procurador-federal-dos-direitos-do-cidadao |
| arts. 43 e 44 | coberto | org:mpf e órgãos com contido_em nele; cargos da carreira do MPF |
| arts. 45 a 51 | coberto | cargo:procurador-geral-da-republica; art. 51 também em org:conselho-superior-do-mpf |
| arts. 52 e 53 | coberto | org:colegio-de-procuradores-da-republica, rel:colegio-de-procuradores-da-republica-indica-ministro-do-stj, rel:colegio-de-procuradores-da-republica-indica-juiz-de-trf |
| arts. 54 a 57 | coberto | org:conselho-superior-do-mpf e suas relações (preside, indica e exonera corregedor, aprova PFDC, aprova destituição do Procurador Regional Eleitoral) |
| arts. 58 a 62 | coberto | org:camaras-de-coordenacao-e-revisao-do-mpf |
| arts. 63 a 65 | coberto | org:corregedoria-do-mpf, cargo:corregedor-geral-do-mpf, rel:corregedoria-do-mpf-corrige-mpf |
| arts. 66 e 67 | coberto | cargo:subprocurador-geral-da-republica |
| arts. 68 e 69 | coberto | cargo:procurador-regional-da-republica |
| arts. 70 e 71 | coberto | cargo:procurador-da-republica |
| arts. 72 a 80 | coberto | org:ministerio-publico-eleitoral, cargo:procurador-geral-eleitoral, cargo:procurador-regional-eleitoral (f0); rel:procurador-geral-eleitoral-exonera-procurador-regional-eleitoral |
| art. 81 | coberto | org:mpf (unidades de lotação) |
| art. 82 | fora | estrutura das unidades por regulamento (abaixo da lei, fase 4, D49); registrada em estrutura_continua de org:mpf |
| arts. 83 a 86 | coberto | org:mpt e órgãos com contido_em nele |
| arts. 87 a 92 | coberto | cargo:procurador-geral-do-trabalho, proc:escolha-do-procurador-geral-do-trabalho e relações de nomeação e exoneração |
| arts. 93 e 94 | coberto | org:colegio-de-procuradores-do-trabalho e relações (lista tríplice, listas para TST e TRTs) |
| arts. 95 a 98 | coberto | org:conselho-superior-do-mpt e relações |
| arts. 99 a 103 | coberto | org:camara-de-coordenacao-e-revisao-do-mpt |
| arts. 104 a 106 | coberto | org:corregedoria-do-mpt, cargo:corregedor-geral-do-mpt |
| arts. 107 a 109 | coberto | cargo:subprocurador-geral-do-trabalho |
| arts. 110 e 111 | coberto | cargo:procurador-regional-do-trabalho |
| arts. 112 e 113 | coberto | cargo:procurador-do-trabalho |
| art. 114 | coberto | org:mpt (unidades de lotação) |
| art. 115 | fora | estrutura das unidades por regulamento (fase 4, D49); em estrutura_continua de org:mpt |
| arts. 116 a 119 | coberto | org:mpm e órgãos com contido_em nele; cargos da carreira do MPM |
| arts. 120 a 125 | coberto | cargo:procurador-geral-da-justica-militar, proc:escolha-do-procurador-geral-da-justica-militar e relações |
| arts. 126 e 127 | coberto | org:colegio-de-procuradores-da-justica-militar |
| arts. 128 a 131 | coberto | org:conselho-superior-do-mpm e relações |
| arts. 132 a 136 | coberto | org:camara-de-coordenacao-e-revisao-do-mpm |
| arts. 137 a 139 | coberto | org:corregedoria-do-mpm, cargo:corregedor-geral-do-mpm |
| arts. 140 a 142 | coberto | cargo:subprocurador-geral-da-justica-militar |
| arts. 143 e 144 | coberto | cargo:procurador-da-justica-militar |
| arts. 145 e 146 | coberto | cargo:promotor-da-justica-militar |
| art. 147 | coberto | org:mpm (unidades de lotação) |
| art. 148 | fora | estrutura das unidades por regulamento (fase 4, D49); em estrutura_continua de org:mpm |
| arts. 149 a 154 | coberto | org:mpdft, cargo:procurador-distrital-dos-direitos-do-cidadao e órgãos com contido_em no MPDFT |
| arts. 155 a 160 | coberto | cargo:procurador-geral-de-justica-do-mpdft, proc:escolha-do-procurador-geral-de-justica-do-mpdft, rel:presidente-nomeia-procurador-geral-de-justica-do-mpdft, rel:senado-exonera-procurador-geral-de-justica-do-mpdft |
| arts. 161 e 162 | coberto | org:colegio-de-procuradores-e-promotores-de-justica-do-mpdft e relações (listas para TJDFT e STJ) |
| arts. 163 a 166 | coberto | org:conselho-superior-do-mpdft e relações |
| arts. 167 a 171 | coberto | org:camaras-de-coordenacao-e-revisao-do-mpdft |
| arts. 172 a 174 | coberto | org:corregedoria-do-mpdft, cargo:corregedor-geral-do-mpdft |
| arts. 175 a 177 | coberto | cargo:procurador-de-justica-do-mpdft |
| art. 178 | coberto | cargo:promotor-de-justica-do-mpdft |
| art. 179 | coberto | cargo:promotor-de-justica-adjunto-do-mpdft |
| art. 180 | coberto | org:mpdft (unidades de lotação) |
| art. 181 | fora | estrutura da Procuradoria-Geral de Justiça por regulamento (fase 4, D49); em estrutura_continua de org:mpdft |
| arts. 182 a 198 | coberto | cargos iniciais das quatro carreiras (provimento, concurso, posse, estágio probatório): cargo:procurador-da-republica, cargo:procurador-do-trabalho, cargo:promotor-da-justica-militar, cargo:promotor-de-justica-adjunto-do-mpdft |
| arts. 199 e 200 | coberto | cargos de promoção das quatro carreiras (provimento_nota) |
| arts. 201 e 202 | fora | impedimentos à promoção e lista de antiguidade (detalhe de processo); o caput do art. 202 foi vetado, valem os parágrafos |
| arts. 203 a 205 | fora | afastamentos e reintegração (direitos dos membros) |
| art. 208 | coberto | proc:processo-disciplinar-de-membro-do-mpu (demissão só por decisão judicial) |
| arts. 209 a 218 | fora | inamovibilidade, remoção e designações para ofícios (direitos dos membros e detalhe de lotação) |
| arts. 220 a 225 | fora | férias, licenças e vencimentos (direitos dos membros) |
| arts. 227 a 235 | fora | vantagens, descontos, aposentadoria e pensão (direitos dos membros) |
| arts. 236 a 238 | fora | deveres, vedações, impedimentos e suspeições (deveres individuais) |
| arts. 239 a 243 | coberto | proc:processo-disciplinar-de-membro-do-mpu (sanções e quem as aplica) |
| arts. 244 e 245 | fora | prazos de prescrição das faltas (detalhe de processo) |
| arts. 246 a 265 | coberto | proc:processo-disciplinar-de-membro-do-mpu (sindicância, inquérito, processo administrativo, revisão) |
| arts. 268 a 274 | fora | criação e transformação de cargos em 1993 (transição esgotada) |
| art. 275 | coberto | cargo:promotor-de-justica-adjunto-do-mpdft (antigo promotor de justiça substituto) |
| arts. 276 a 282 | fora | regras de transição esgotadas (primeiras eleições e promoções, opções de regime e de carreira) |
| art. 283 | coberto | org:escola-superior-do-mpu (criada pela Lei 9.628/1998) |
| art. 284 | fora | estagiários (sem órgão nem cargo) |
| arts. 286 a 290 | fora | despesas, aplicação subsidiária do regime dos servidores e regras de transição |
| art. 293 | fora | vedação de nepotismo (dever individual) |
| art. 294 | coberto | norma:lc-75-1993 (vigência) |
| art. 295 | fora | cláusula revogatória |

Vetados por inteiro (fora da conta): arts. 206, 207, 219, 226, 266, 267, 285, 291 e 292. Conta: 286 artigos vigentes; coberto 219, fora 67, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

### Lei 8.625/1993 (Lei Orgânica Nacional do Ministério Público)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º a 8º | coberto | org:arquetipo-estadual-ministerio-publico (definição, lei orgânica estadual, autonomia, orçamento, órgãos) |
| arts. 9º a 11 | coberto | cargo:arquetipo-estadual-procurador-geral-de-justica, proc:escolha-do-procurador-geral-de-justica |
| arts. 12 e 13 | coberto | org:arquetipo-estadual-colegio-de-procuradores-de-justica e relações (elege e destitui corregedor, propõe destituição do PGJ, julga recursos) |
| arts. 14 e 15 | coberto | org:arquetipo-estadual-conselho-superior-do-ministerio-publico e relações (listas sêxtuplas) |
| arts. 16 a 18 | coberto | org:arquetipo-estadual-corregedoria-geral-do-ministerio-publico, cargo:arquetipo-estadual-corregedor-geral-do-ministerio-publico |
| arts. 19 a 22 | coberto | org:arquetipo-estadual-procuradorias-de-justica |
| arts. 23 e 24 | coberto | org:arquetipo-estadual-promotorias-de-justica |
| arts. 25 a 27 | coberto | org:arquetipo-estadual-ministerio-publico (funções e instrumentos) |
| art. 29 | coberto | cargo:arquetipo-estadual-procurador-geral-de-justica |
| art. 30 | coberto | org:arquetipo-estadual-conselho-superior-do-ministerio-publico |
| arts. 31 e 32 | coberto | cargo:arquetipo-estadual-membro-do-ministerio-publico |
| art. 33 | coberto | org:arquetipo-estadual-centros-de-apoio-operacional |
| art. 34 | coberto | org:arquetipo-estadual-ministerio-publico (comissão de concurso, órgão auxiliar transitório) |
| art. 35 | coberto | org:arquetipo-estadual-centro-de-estudos-e-aperfeicoamento-funcional |
| arts. 36 e 37 | coberto | org:arquetipo-estadual-ministerio-publico (apoio administrativo e estagiários) |
| arts. 38 a 58 | fora | garantias, prerrogativas, deveres, vedações, vencimentos, licenças, aposentadoria e pensão dos membros (direitos e deveres individuais) |
| arts. 59 a 61 | coberto | cargo:arquetipo-estadual-membro-do-ministerio-publico (ingresso, vitaliciamento, promoção) |
| art. 62 | coberto | org:arquetipo-estadual-conselho-superior-do-ministerio-publico (editais de remoção e promoção) |
| arts. 63 a 68 | fora | editais, permuta, substituição, reintegração, reversão e aproveitamento (direitos dos membros e detalhe de processo) |
| arts. 69 e 70 | fora | adequação de vencimentos e gratificação eleitoral (remuneração) |
| art. 72 | fora | vedação de nepotismo (dever individual) |
| art. 73 | coberto | cargo:arquetipo-estadual-membro-do-ministerio-publico (promotor eleitoral) |
| art. 74 | coberto | org:arquetipo-estadual-conselho-superior-do-ministerio-publico, rel:arquetipo-estadual-conselho-superior-do-ministerio-publico-indica-ministro-do-stj |
| art. 75 | fora | afastamento da carreira (direito individual) |
| art. 76 | fora | prazo de um ano para propor cargos (transição esgotada) |
| arts. 77 a 79 | fora | teto remuneratório e regras sobre proventos e pensões (remuneração) |
| art. 80 | fora | aplicação subsidiária da LC 75/1993 (regra de interpretação, sem órgão nem etapa) |
| art. 81 | fora | prazo de 120 dias para os estados se adaptarem (transição esgotada) |
| art. 82 | fora | data comemorativa |
| art. 83 | coberto | norma:lei-8625-1993 (vigência) |
| art. 84 | fora | cláusula revogatória |

Vetados por inteiro (fora da conta): arts. 28 e 71. Conta: 82 artigos vigentes; coberto 43, fora 39, parcial 0, lacuna 0; cobertura = 100,0%.

### LC 80/1994 (Defensoria Pública da União e normas gerais das Defensorias)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º a 4º e 3º-A | coberto | org:dpu (definição, abrangência, princípios, objetivos, funções) |
| art. 4º-A | fora | direitos dos assistidos (direitos individuais) |
| art. 5º | coberto | org:dpu e órgãos com contido_em nela |
| arts. 6º a 8º | coberto | cargo:defensor-publico-geral-federal (f0), cargo:subdefensor-publico-geral-federal, proc:escolha-do-defensor-publico-geral-federal, rel:subdefensor-publico-geral-federal-substitui-defensor-publico-geral-federal |
| arts. 9º e 10 | coberto | org:conselho-superior-da-dpu e relações (preside, indica Subdefensor e Corregedor-Geral, destitui Corregedor-Geral) |
| arts. 11 a 13 | coberto | org:corregedoria-geral-da-dpu, cargo:corregedor-geral-da-dpu, rel:presidente-nomeia-corregedor-geral-da-dpu |
| arts. 14 a 17 e 15-A | coberto | org:unidades-da-dpu-nos-estados |
| arts. 18 a 33 e 26-A | coberto | cargo:defensor-publico-federal (categorias, atuação, ingresso, nomeação, lotação, promoção); art. 23 também em cargo:defensor-publico-geral-federal |
| arts. 34 a 39 | fora | inamovibilidade, remoção e remuneração (direitos dos membros) |
| arts. 41, 42 e 42-A | fora | férias e afastamentos (direitos dos membros) |
| art. 43 | coberto | cargo:defensor-publico-federal (garantias) |
| arts. 44 a 48 | fora | prerrogativas, deveres, proibições e impedimentos (direitos e deveres individuais) |
| art. 49 | coberto | org:corregedoria-geral-da-dpu, rel:corregedoria-geral-da-dpu-corrige-dpu (correições) |
| arts. 50 e 51 | fora | infrações disciplinares e revisão do processo disciplinar (sanções; detalhe de processo) |
| arts. 52 a 84, 86 a 96 e 87-A | fora | Título III, Defensoria do DF e dos Territórios organizada e mantida pela União: sem objeto atual, porque a EC 69/2012 passou a Defensoria do DF ao próprio DF e não há Territórios (regra esgotada); ver pontos incertos no relatório |
| arts. 97, 97-A, 97-B e 98 | coberto | org:arquetipo-estadual-defensoria-publica (normas gerais, autonomia, orçamento, órgãos) |
| arts. 99 e 100 | coberto | cargo:arquetipo-estadual-defensor-publico-geral (f0), cargo:arquetipo-estadual-subdefensor-publico-geral, proc:escolha-do-defensor-publico-geral-do-estado |
| arts. 101 e 102 | coberto | org:arquetipo-estadual-conselho-superior-da-defensoria-publica e relações |
| arts. 103 a 105 | coberto | org:arquetipo-estadual-corregedoria-geral-da-defensoria-publica, cargo:arquetipo-estadual-corregedor-geral-da-defensoria-publica |
| arts. 105-A, 105-B e 105-C | coberto | org:arquetipo-estadual-ouvidoria-geral-da-defensoria-publica, cargo:arquetipo-estadual-ouvidor-geral-da-defensoria-publica |
| arts. 106, 106-A e 107 | coberto | org:arquetipo-estadual-defensoria-publica (atuação, descentralização, núcleos) |
| art. 108 | coberto | cargo:arquetipo-estadual-defensor-publico |
| art. 109 | coberto | org:arquetipo-estadual-defensoria-publica (órgãos auxiliares) |
| arts. 110 a 117 e 112-A | coberto | cargo:arquetipo-estadual-defensor-publico (carreira, ingresso, nomeação, promoção) |
| arts. 118 a 126 e 126-A | fora | inamovibilidade, remoção, remuneração, férias e afastamentos (direitos dos membros) |
| art. 127 | coberto | cargo:arquetipo-estadual-defensor-publico (garantias) |
| arts. 128 a 132 | fora | prerrogativas, deveres, proibições e impedimentos (direitos e deveres individuais) |
| arts. 133 a 135 | coberto | rel:arquetipo-estadual-corregedoria-geral-da-defensoria-publica-corrige-defensoria-publica |
| art. 136 | fora | regime jurídico aplicável aos defensores (direitos e deveres individuais) |
| arts. 137 a 142 | fora | opções, transformação de cargos e prazo de adaptação (transição esgotada) |
| arts. 143 a 146 | fora | comissão de concurso, apoio administrativo, estagiários e Defensoria de Ofício da Justiça Militar (detalhes e transição esgotada) |
| art. 147 | coberto | cargo:subdefensor-publico-geral-federal (criação dos cargos de natureza especial) |
| art. 148 | coberto | norma:lc-80-1994 (vigência) |
| art. 149 | fora | cláusula revogatória |

Revogados por inteiro (fora da conta): arts. 40 e 85. Conta: 161 artigos vigentes (147 numerados mais 14 com letra); coberto 72, fora 89, parcial 0, lacuna 0; cobertura = 100,0%.

### LC 73/1993 (Lei Orgânica da Advocacia-Geral da União)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º a 4º | coberto | org:agu, cargo:advogado-geral-da-uniao |
| arts. 5º e 6º | coberto | org:corregedoria-geral-da-agu, rel:corregedoria-geral-da-agu-corrige-agu |
| arts. 7º e 8º | coberto | org:conselho-superior-da-agu, rel:advogado-geral-da-uniao-preside-conselho-superior-da-agu |
| art. 9º | coberto | org:procuradoria-geral-da-uniao, cargo:procurador-geral-da-uniao, rel:procuradoria-geral-da-uniao-representa-judicialmente-uniao |
| art. 10 | coberto | org:consultoria-geral-da-uniao, cargo:consultor-geral-da-uniao, rel:consultoria-geral-da-uniao-auxilia-advogado-geral-da-uniao |
| art. 11 | coberto | org:consultorias-juridicas-dos-ministerios, rel:consultorias-juridicas-dos-ministerios-assessora-ministro-de-estado |
| arts. 12 e 13 | coberto | org:pgfn, cargo:procurador-geral-da-fazenda-nacional, cargo:procurador-da-fazenda-nacional |
| arts. 15 a 18 | coberto | org:agu (gabinete, controle interno, órgãos vinculados), org:procuradoria-geral-federal |
| arts. 20 a 25 | coberto | cargo:advogado-da-uniao, cargo:procurador-da-fazenda-nacional, org:conselho-superior-da-agu (carreira de Assistente Jurídico transformada pela Lei 10.549/2002, art. 11) |
| arts. 26 a 31 | fora | direitos, deveres, proibições e impedimentos dos membros (direitos e deveres individuais) |
| arts. 32 a 34 | coberto | org:corregedoria-geral-da-agu, cargo:corregedor-geral-da-agu |
| arts. 35 a 38 | fora | citações, intimações e notificações da União (detalhe de processo) |
| arts. 39 a 41 | coberto | cargo:advogado-geral-da-uniao, org:consultoria-geral-da-uniao (pareceres) |
| art. 42 | coberto | org:consultorias-juridicas-dos-ministerios |
| art. 43 | coberto | org:agu, cargo:advogado-geral-da-uniao (súmula) |
| art. 44 | fora | coletânea dos pareceres (detalhe de publicação) |
| arts. 45 a 47 | coberto | cargo:advogado-geral-da-uniao (regimento, convocação e requisição de servidores) |
| art. 48 | coberto | org:agu (quadro próprio) |
| art. 49 | coberto | cargos de direção da AGU e relações indica/nomeia (PGU, Consultor-Geral, Corregedor-Geral, PGFN, consultores jurídicos) |
| arts. 50 a 52 | fora | aplicação de deveres a dirigentes, nepotismo e identificação funcional (deveres individuais e detalhe) |
| art. 53 | fora | extinção do cargo de Consultor-Geral da República (transição esgotada) |
| art. 54 | coberto | cargo:advogado-geral-da-uniao (criação do cargo) |
| art. 55 | coberto | requisitos de cargo:procurador-geral-da-uniao, cargo:consultor-geral-da-uniao, cargo:corregedor-geral-da-agu e cargo:procurador-geral-da-fazenda-nacional |
| art. 56 | fora | extinção de cargos em comissão antigos (transição esgotada) |
| art. 57 | coberto | cargo:advogado-geral-da-uniao (secretários-gerais de Contencioso e de Consultoria) |
| art. 58 | coberto | org:consultorias-juridicas-dos-ministerios (requisitos do consultor jurídico) |
| arts. 61 a 64, 66, 67 e 69 | fora | opções, criação e absorção de cargos e regras provisórias de 1993 (transição esgotada) |
| art. 72 | coberto | norma:lc-73-1993 (vigência) |
| art. 73 | fora | cláusula revogatória |

Vetados por inteiro (fora da conta): arts. 14, 19, 59, 60, 65, 68, 70 e 71. Conta: 65 artigos vigentes; coberto 41, fora 24, parcial 0, lacuna 0; cobertura = 100,0%.

### Lei 10.480/2002 (Procuradoria-Geral Federal)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º, 1º-A, 1º-B, 1º-C, 1º-D, 2º, 2º-A, 3º, 3º-A, 4º, 5º e 6º | fora | quadro de pessoal, gratificações e proventos dos servidores administrativos da AGU (direitos remuneratórios) |
| arts. 9º a 12 | coberto | org:procuradoria-geral-federal, cargo:procurador-geral-federal, cargo:procurador-federal, rel:advogado-geral-da-uniao-indica-procurador-geral-federal, rel:presidente-nomeia-procurador-geral-federal |
| art. 13 | fora | apoio da AGU na implantação da PGF (transição esgotada) |
| arts. 14 e 15 | coberto | org:procuradoria-geral-federal (atos do Advogado-Geral; exclusão da Procuradoria-Geral do Banco Central) |
| art. 17 | fora | cria cargo em comissão de diretor do Centro de Estudos e transforma cargos (abaixo da cúpula, D11) |
| art. 18 | coberto | norma:lei-10480-2002 (vigência) |
| art. 19 | fora | revoga dispositivos da Lei 9.028/1995 |

Revogados por inteiro (fora da conta): arts. 7º e 8º (Lei 14.204/2021). Vetado: art. 16. Conta: 22 artigos vigentes; coberto 7, fora 15, parcial 0, lacuna 0; cobertura = 100,0%.

## Diário

- 2026-10-28 08:36 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), D01 a D50, modelo de dados, protocolo e vocabulários
- 2026-10-28 08:47 — gravado org:conselho-de-assessoramento-superior-do-mpu
- 2026-10-28 08:47 — gravado org:secretaria-do-mpu
- 2026-10-28 08:47 — gravado cargo:vice-procurador-geral-da-republica
- 2026-10-28 08:47 — gravado rel:procurador-geral-da-republica-designa-vice-procurador-geral-da-republica
- 2026-10-28 08:47 — gravado rel:vice-procurador-geral-da-republica-substitui-procurador-geral-da-republica
- 2026-10-28 08:47 — gravado rel:procurador-geral-da-republica-preside-conselho-de-assessoramento-superior-do-mpu
- 2026-10-28 08:49 — gravado org:colegio-de-procuradores-da-republica
- 2026-10-28 08:49 — gravado org:conselho-superior-do-mpf
- 2026-10-28 08:49 — gravado org:camaras-de-coordenacao-e-revisao-do-mpf
- 2026-10-28 08:49 — gravado org:corregedoria-do-mpf
- 2026-10-28 08:49 — gravado cargo:corregedor-geral-do-mpf
- 2026-10-28 08:49 — gravado cargo:procurador-federal-dos-direitos-do-cidadao
- 2026-10-28 08:49 — gravado cargo:subprocurador-geral-da-republica
- 2026-10-28 08:49 — gravado cargo:procurador-regional-da-republica
- 2026-10-28 08:49 — gravado cargo:procurador-da-republica
- 2026-10-28 08:49 — gravado rel:procurador-geral-da-republica-preside-colegio-de-procuradores-da-republica
- 2026-10-28 08:49 — gravado rel:procurador-geral-da-republica-preside-conselho-superior-do-mpf
- 2026-10-28 08:49 — gravado rel:conselho-superior-do-mpf-indica-corregedor-geral-do-mpf
- 2026-10-28 08:49 — gravado rel:procurador-geral-da-republica-nomeia-corregedor-geral-do-mpf
- 2026-10-28 08:49 — gravado rel:conselho-superior-do-mpf-exonera-corregedor-geral-do-mpf
- 2026-10-28 08:49 — gravado rel:corregedoria-do-mpf-corrige-mpf
- 2026-10-28 08:49 — gravado rel:procurador-geral-da-republica-designa-procurador-federal-dos-direitos-do-cidadao
- 2026-10-28 08:49 — gravado rel:conselho-superior-do-mpf-aprova-indicacao-procurador-federal-dos-direitos-do-cidadao
- 2026-10-28 08:49 — gravado rel:colegio-de-procuradores-da-republica-indica-ministro-do-stj
- 2026-10-28 08:49 — gravado rel:colegio-de-procuradores-da-republica-indica-juiz-de-trf
- 2026-10-28 08:49 — gravado rel:conselho-superior-do-mpf-aprova-exoneracao-procurador-regional-eleitoral
- 2026-10-28 08:49 — gravado rel:procurador-geral-eleitoral-exonera-procurador-regional-eleitoral
- 2026-10-28 08:51 — gravado cargo:procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado org:colegio-de-procuradores-do-trabalho
- 2026-10-28 08:51 — gravado org:conselho-superior-do-mpt
- 2026-10-28 08:51 — gravado org:camara-de-coordenacao-e-revisao-do-mpt
- 2026-10-28 08:51 — gravado org:corregedoria-do-mpt
- 2026-10-28 08:51 — gravado cargo:corregedor-geral-do-mpt
- 2026-10-28 08:51 — gravado cargo:subprocurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado cargo:procurador-regional-do-trabalho
- 2026-10-28 08:51 — gravado cargo:procurador-do-trabalho
- 2026-10-28 08:51 — gravado rel:colegio-de-procuradores-do-trabalho-indica-procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado rel:procurador-geral-da-republica-nomeia-procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado rel:conselho-superior-do-mpt-propoe-exoneracao-procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado rel:procurador-geral-da-republica-exonera-procurador-geral-do-trabalho
- 2026-10-28 08:51 — gravado rel:procurador-geral-do-trabalho-preside-colegio-de-procuradores-do-trabalho
- 2026-10-28 08:51 — gravado rel:procurador-geral-do-trabalho-preside-conselho-superior-do-mpt
- 2026-10-28 08:51 — gravado rel:conselho-superior-do-mpt-indica-corregedor-geral-do-mpt
- 2026-10-28 08:51 — gravado rel:procurador-geral-do-trabalho-nomeia-corregedor-geral-do-mpt
- 2026-10-28 08:51 — gravado rel:conselho-superior-do-mpt-exonera-corregedor-geral-do-mpt
- 2026-10-28 08:51 — gravado rel:corregedoria-do-mpt-corrige-mpt
- 2026-10-28 08:51 — gravado rel:colegio-de-procuradores-do-trabalho-indica-ministro-do-tst
- 2026-10-28 08:51 — gravado rel:colegio-de-procuradores-do-trabalho-indica-juiz-de-trt
- 2026-10-28 08:52 — gravado cargo:procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado org:colegio-de-procuradores-da-justica-militar
- 2026-10-28 08:52 — gravado org:conselho-superior-do-mpm
- 2026-10-28 08:52 — gravado org:camara-de-coordenacao-e-revisao-do-mpm
- 2026-10-28 08:52 — gravado org:corregedoria-do-mpm
- 2026-10-28 08:52 — gravado cargo:corregedor-geral-do-mpm
- 2026-10-28 08:52 — gravado cargo:subprocurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado cargo:procurador-da-justica-militar
- 2026-10-28 08:52 — gravado cargo:promotor-da-justica-militar
- 2026-10-28 08:52 — gravado rel:colegio-de-procuradores-da-justica-militar-indica-procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-republica-nomeia-procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado rel:conselho-superior-do-mpm-propoe-exoneracao-procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-republica-exonera-procurador-geral-da-justica-militar
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-justica-militar-preside-colegio-de-procuradores-da-justica-militar
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-justica-militar-preside-conselho-superior-do-mpm
- 2026-10-28 08:52 — gravado rel:conselho-superior-do-mpm-indica-corregedor-geral-do-mpm
- 2026-10-28 08:52 — gravado rel:procurador-geral-da-justica-militar-nomeia-corregedor-geral-do-mpm
- 2026-10-28 08:52 — gravado rel:conselho-superior-do-mpm-exonera-corregedor-geral-do-mpm
- 2026-10-28 08:52 — gravado rel:corregedoria-do-mpm-corrige-mpm
- 2026-10-28 08:53 — gravado cargo:procurador-geral-de-justica-do-mpdft
- 2026-10-28 08:53 — gravado org:colegio-de-procuradores-e-promotores-de-justica-do-mpdft
- 2026-10-28 08:53 — gravado org:conselho-superior-do-mpdft
- 2026-10-28 08:53 — gravado org:camaras-de-coordenacao-e-revisao-do-mpdft
- 2026-10-28 08:53 — gravado org:corregedoria-do-mpdft
- 2026-10-28 08:53 — gravado cargo:corregedor-geral-do-mpdft
- 2026-10-28 08:53 — gravado cargo:procurador-distrital-dos-direitos-do-cidadao
- 2026-10-28 08:53 — gravado cargo:procurador-de-justica-do-mpdft
- 2026-10-28 08:53 — gravado cargo:promotor-de-justica-do-mpdft
- 2026-10-28 08:53 — gravado cargo:promotor-de-justica-adjunto-do-mpdft
- 2026-10-28 08:53 — gravado rel:colegio-de-procuradores-e-promotores-de-justica-do-mpdft-indica-procurador-geral-de-justica-do-mpdft
- 2026-10-28 08:53 — gravado rel:presidente-nomeia-procurador-geral-de-justica-do-mpdft
- 2026-10-28 08:53 — gravado rel:senado-exonera-procurador-geral-de-justica-do-mpdft
- 2026-10-28 08:53 — gravado rel:procurador-geral-de-justica-do-mpdft-preside-colegio-de-procuradores-e-promotores-de-justica-do-mpdft
- 2026-10-28 08:53 — gravado rel:procurador-geral-de-justica-do-mpdft-preside-conselho-superior-do-mpdft
- 2026-10-28 08:53 — gravado rel:conselho-superior-do-mpdft-indica-corregedor-geral-do-mpdft
- 2026-10-28 08:53 — gravado rel:procurador-geral-de-justica-do-mpdft-nomeia-corregedor-geral-do-mpdft
- 2026-10-28 08:53 — gravado rel:conselho-superior-do-mpdft-exonera-corregedor-geral-do-mpdft
- 2026-10-28 08:53 — gravado rel:corregedoria-do-mpdft-corrige-mpdft
- 2026-10-28 08:53 — gravado rel:procurador-geral-de-justica-do-mpdft-designa-procurador-distrital-dos-direitos-do-cidadao
- 2026-10-28 08:53 — gravado rel:conselho-superior-do-mpdft-aprova-indicacao-procurador-distrital-dos-direitos-do-cidadao
- 2026-10-28 08:53 — gravado rel:colegio-de-procuradores-e-promotores-de-justica-do-mpdft-indica-desembargador
- 2026-10-28 08:53 — gravado rel:colegio-de-procuradores-e-promotores-de-justica-do-mpdft-indica-ministro-do-stj
- 2026-10-28 08:54 — editado org:ministerio-publico-da-uniao
- 2026-10-28 08:54 — editado org:mpf
- 2026-10-28 08:54 — editado org:mpt
- 2026-10-28 08:54 — editado org:mpm
- 2026-10-28 08:54 — editado org:mpdft
- 2026-10-28 08:54 — gravado proc:escolha-do-procurador-geral-do-trabalho
- 2026-10-28 08:54 — gravado proc:escolha-do-procurador-geral-da-justica-militar
- 2026-10-28 08:54 — gravado proc:escolha-do-procurador-geral-de-justica-do-mpdft
- 2026-10-28 08:55 — gravado org:arquetipo-estadual-colegio-de-procuradores-de-justica
- 2026-10-28 08:55 — gravado org:arquetipo-estadual-conselho-superior-do-ministerio-publico
- 2026-10-28 08:55 — gravado org:arquetipo-estadual-corregedoria-geral-do-ministerio-publico
- 2026-10-28 08:55 — gravado cargo:arquetipo-estadual-corregedor-geral-do-ministerio-publico
- 2026-10-28 08:55 — gravado org:arquetipo-estadual-procuradorias-de-justica
- 2026-10-28 08:55 — gravado org:arquetipo-estadual-promotorias-de-justica
- 2026-10-28 08:55 — gravado org:arquetipo-estadual-centros-de-apoio-operacional
- 2026-10-28 08:55 — gravado org:arquetipo-estadual-centro-de-estudos-e-aperfeicoamento-funcional
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-procurador-geral-de-justica-preside-colegio-de-procuradores-de-justica
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-procurador-geral-de-justica-preside-conselho-superior-do-ministerio-publico
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-colegio-de-procuradores-de-justica-elege-corregedor-geral-do-ministerio-publico
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-colegio-de-procuradores-de-justica-exonera-corregedor-geral-do-ministerio-publico
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-colegio-de-procuradores-de-justica-propoe-exoneracao-procurador-geral-de-justica
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-colegio-de-procuradores-de-justica-julga-recursos-contra-conselho-superior-do-ministerio-publico
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-corregedoria-geral-do-ministerio-publico-corrige-ministerio-publico
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-conselho-superior-do-ministerio-publico-indica-desembargador
- 2026-10-28 08:55 — gravado rel:arquetipo-estadual-conselho-superior-do-ministerio-publico-indica-ministro-do-stj
- 2026-10-28 08:56 — editado org:arquetipo-estadual-ministerio-publico
- 2026-10-28 08:56 — editado cargo:arquetipo-estadual-procurador-geral-de-justica
- 2026-10-28 08:56 — editado cargo:arquetipo-estadual-membro-do-ministerio-publico
- 2026-10-28 08:58 — gravado cargo:subdefensor-publico-geral-federal
- 2026-10-28 08:58 — gravado org:conselho-superior-da-dpu
- 2026-10-28 08:58 — gravado org:corregedoria-geral-da-dpu
- 2026-10-28 08:58 — gravado cargo:corregedor-geral-da-dpu
- 2026-10-28 08:58 — gravado org:unidades-da-dpu-nos-estados
- 2026-10-28 08:58 — gravado rel:defensor-publico-geral-federal-preside-conselho-superior-da-dpu
- 2026-10-28 08:58 — gravado rel:conselho-superior-da-dpu-indica-subdefensor-publico-geral-federal
- 2026-10-28 08:58 — gravado rel:presidente-nomeia-subdefensor-publico-geral-federal
- 2026-10-28 08:58 — gravado rel:subdefensor-publico-geral-federal-substitui-defensor-publico-geral-federal
- 2026-10-28 08:58 — gravado rel:conselho-superior-da-dpu-indica-corregedor-geral-da-dpu
- 2026-10-28 08:58 — gravado rel:presidente-nomeia-corregedor-geral-da-dpu
- 2026-10-28 08:58 — gravado rel:conselho-superior-da-dpu-exonera-corregedor-geral-da-dpu
- 2026-10-28 08:58 — gravado rel:corregedoria-geral-da-dpu-corrige-dpu
- 2026-10-28 08:58 — gravado cargo:arquetipo-estadual-subdefensor-publico-geral
- 2026-10-28 08:58 — gravado org:arquetipo-estadual-conselho-superior-da-defensoria-publica
- 2026-10-28 08:58 — gravado org:arquetipo-estadual-corregedoria-geral-da-defensoria-publica
- 2026-10-28 08:58 — gravado cargo:arquetipo-estadual-corregedor-geral-da-defensoria-publica
- 2026-10-28 08:58 — gravado org:arquetipo-estadual-ouvidoria-geral-da-defensoria-publica
- 2026-10-28 08:58 — gravado cargo:arquetipo-estadual-ouvidor-geral-da-defensoria-publica
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-defensor-publico-geral-preside-conselho-superior-da-defensoria-publica
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-defensor-publico-geral-nomeia-subdefensor-publico-geral
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-subdefensor-publico-geral-substitui-defensor-publico-geral
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-conselho-superior-da-defensoria-publica-indica-corregedor-geral
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-defensor-publico-geral-nomeia-corregedor-geral-da-defensoria-publica
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-conselho-superior-da-defensoria-publica-exonera-corregedor-geral
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-conselho-superior-da-defensoria-publica-elege-ouvidor-geral
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-defensor-publico-geral-nomeia-ouvidor-geral-da-defensoria-publica
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-corregedoria-geral-da-defensoria-publica-corrige-defensoria-publica
- 2026-10-28 08:58 — gravado rel:arquetipo-estadual-ouvidoria-geral-da-defensoria-publica-representa-a-corregedoria-geral
- 2026-10-28 08:59 — editado org:dpu
- 2026-10-28 08:59 — editado cargo:defensor-publico-federal
- 2026-10-28 08:59 — editado org:arquetipo-estadual-defensoria-publica
- 2026-10-28 08:59 — editado cargo:arquetipo-estadual-defensor-publico
- 2026-10-28 08:59 — gravado proc:escolha-do-procurador-geral-de-justica
- 2026-10-28 08:59 — gravado proc:escolha-do-defensor-publico-geral-do-estado
- 2026-10-28 08:59 — gravado proc:escolha-do-defensor-publico-geral-federal
- 2026-10-28 09:01 — gravado norma:lei-10480-2002
- 2026-10-28 09:01 — gravado norma:lei-10549-2002
- 2026-10-28 09:01 — gravado org:procuradoria-geral-da-uniao
- 2026-10-28 09:01 — gravado cargo:procurador-geral-da-uniao
- 2026-10-28 09:01 — gravado org:consultoria-geral-da-uniao
- 2026-10-28 09:01 — gravado cargo:consultor-geral-da-uniao
- 2026-10-28 09:01 — gravado org:conselho-superior-da-agu
- 2026-10-28 09:01 — gravado org:corregedoria-geral-da-agu
- 2026-10-28 09:01 — gravado cargo:corregedor-geral-da-agu
- 2026-10-28 09:01 — gravado org:consultorias-juridicas-dos-ministerios
- 2026-10-28 09:01 — gravado org:procuradoria-geral-federal
- 2026-10-28 09:01 — gravado cargo:procurador-geral-federal
- 2026-10-28 09:01 — gravado cargo:procurador-geral-da-fazenda-nacional
- 2026-10-28 09:01 — gravado cargo:advogado-da-uniao
- 2026-10-28 09:01 — gravado cargo:procurador-da-fazenda-nacional
- 2026-10-28 09:01 — gravado cargo:procurador-federal
- 2026-10-28 09:01 — gravado rel:advogado-geral-da-uniao-indica-procurador-geral-da-uniao
- 2026-10-28 09:01 — gravado rel:presidente-nomeia-procurador-geral-da-uniao
- 2026-10-28 09:01 — gravado rel:advogado-geral-da-uniao-indica-consultor-geral-da-uniao
- 2026-10-28 09:01 — gravado rel:presidente-nomeia-consultor-geral-da-uniao
- 2026-10-28 09:01 — gravado rel:advogado-geral-da-uniao-indica-corregedor-geral-da-agu
- 2026-10-28 09:01 — gravado rel:presidente-nomeia-corregedor-geral-da-agu
- 2026-10-28 09:01 — gravado rel:advogado-geral-da-uniao-indica-procurador-geral-federal
- 2026-10-28 09:01 — gravado rel:presidente-nomeia-procurador-geral-federal
- 2026-10-28 09:01 — gravado rel:ministro-de-estado-indica-procurador-geral-da-fazenda-nacional
- 2026-10-28 09:01 — gravado rel:presidente-nomeia-procurador-geral-da-fazenda-nacional
- 2026-10-28 09:01 — gravado rel:advogado-geral-da-uniao-preside-conselho-superior-da-agu
- 2026-10-28 09:01 — gravado rel:corregedoria-geral-da-agu-corrige-agu
- 2026-10-28 09:01 — gravado rel:procuradoria-geral-da-uniao-representa-judicialmente-uniao
- 2026-10-28 09:01 — gravado rel:consultoria-geral-da-uniao-auxilia-advogado-geral-da-uniao
- 2026-10-28 09:01 — gravado rel:consultorias-juridicas-dos-ministerios-assessora-ministro-de-estado
- 2026-10-28 09:02 — editado org:agu
- 2026-10-28 09:02 — editado cargo:advogado-geral-da-uniao
- 2026-10-28 09:02 — editado org:pgfn
- 2026-10-28 09:02 — editado cargo:membro-da-advocacia-geral-da-uniao
- 2026-10-28 09:02 — editado cargo:membro-do-ministerio-publico-da-uniao
- 2026-10-28 09:02 — editado cargo:procurador-geral-da-republica
- 2026-10-28 09:06 — editado org:ministerio-publico-da-uniao
- 2026-10-28 09:06 — editado org:dpu
- 2026-10-28 09:06 — editado org:unidades-da-dpu-nos-estados
- 2026-10-28 09:06 — editado cargo:defensor-publico-federal
- 2026-10-28 09:06 — editado org:arquetipo-estadual-defensoria-publica
- 2026-10-28 09:06 — editado cargo:arquetipo-estadual-defensor-publico
- 2026-10-28 09:07 — gravado norma:lei-9628-1998
- 2026-10-28 09:07 — gravado org:escola-superior-do-mpu
- 2026-10-28 09:07 — gravado proc:processo-disciplinar-de-membro-do-mpu
- 2026-10-28 09:40 — cópias locais em pesquisa/brutos/planalto-leis/2026-10-28-f2-funcoes-essenciais/ (baixadas com Invoke-WebRequest; o curl ficou sem resposta do Planalto, inclusive com --http1.1): lcp75.htm, l8625.htm, lcp80.htm, lcp73.htm, l10480.htm, mais l10549.htm, l9628.htm e emc140.htm
- 2026-10-28 09:40 — compilacao_ate conferida nas cópias de hoje: LC 75/1993 sem marcas de alteração (só "Vide ADI 3806/5052" e ADIN 994-0); Lei 8.625/1993 sem marcas (só "Vide ADIN 2854/1274"); LC 80/1994 até a LC 132/2009 (redação) e remissão à Lei 14.941/2024 (art. 4º, XXI), igual ao registro de 2026-10-22; LC 73/1993 com marcas até a Lei 9.469/1997 (remissões) e Decreto 6.120/2007 (regulamento); Lei 10.480/2002 até a Lei 15.141/2025 (arts. 1º-C e 1º-D). Nenhuma alteração entre 2026-10-01 e hoje
- 2026-10-28 09:40 — EC 140/2026 (cópia emc140.htm) altera o art. 40 só nos §§ 4º e 5º-A; o art. 40, § 1º, II (compulsória), citado nos cargos de carreira, não mudou. EC 141 altera só o art. 7º (diário de f0-competencias)
- 2026-10-28 09:40 — atenção para quem revisar: o texto do Planalto marca redação revogada de dois jeitos (<strike> e span com text-decoration:line-through); a Lei 10.480/2002 tem arts. 7º e 8º revogados pela Lei 14.204/2021 só com o segundo formato
- 2026-10-28 09:40 — vocabulário: sem termo de tipo_orgao para órgão interno do MP, da Defensoria e da AGU (corregedorias, secretaria, escola, ouvidoria, centro de estudos): usei 'outro'; sem termo de relação para 'forma lista tríplice/sêxtupla': usei 'indica' (colégios e conselhos para PG, corregedor e vagas do quinto); escolha do Ouvidor-Geral pelo Conselho Superior: usei 'elege'
- 2026-10-28 09:40 — fora do mapa: não criei pessoas para os novos cargos de chefia (PGT, PGJM, PGJ do MPDFT, PGU, Consultor-Geral, PGFN, PGF, corregedores); não procurei quem os ocupava em 2026-10-01
- 2026-10-28 09:40 — Lei 10.549/2002, art. 11: a carreira de Assistente Jurídico da AGU (LC 73/1993, art. 20, III) foi transformada em Advogado da União; criada norma:lei-10549-2002. Lei 9.628/1998 cria a Escola Superior do MPU (LC 75, art. 283); criada norma:lei-9628-1998 com arquivo null (Wayback respondeu 429)
- 2026-10-28 09:55 — quadros de cobertura gravados (LC 75: 286 artigos vigentes; Lei 8.625: 82; LC 80: 161; LC 73: 65; Lei 10.480: 22; todos 100% coberto + fora, sem parcial nem lacuna); npm run -s validar sem erros; tarefa coletada
