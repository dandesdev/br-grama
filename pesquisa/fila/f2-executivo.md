---
id: f2-executivo
escopo: "Fase 2 (D49): Lei 14.600/2023 (Presidência e ministérios), Decreto-Lei 200/1967 e leis das agências reguladoras"
status: coletada
depende_de: [f0-executivo, f0-administracao-indireta]
iniciada_em: 2026-10-28
concluida_em: 2026-10-28
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 14.600/2023 (organização da Presidência e dos ministérios), texto compilado vigente em 2026-10-01: `norma:lei-14600-2023`
- Decreto-Lei 200/1967 (organização da administração federal; administração indireta; supervisão ministerial): `norma:decreto-lei-200-1967`
- Lei 9.986/2000 (recursos humanos das agências reguladoras) e Lei 13.848/2019 (lei geral das agências reguladoras): crie as normas se não existirem

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [x] Lei 14.600: para cada ministério e órgão da Presidência, as áreas de competência em `detalhes` (D50), com o artigo e os incisos nas fontes; os órgãos que a lei cria fora dos ministérios (ex.: conselhos ligados à Presidência) e as relações da lei que ligam órgãos entre si. Os ministérios já existem; edite-os (item 7 da seção "Fase 2").
- [x] Decreto-Lei 200: conceitos de autarquia, empresa pública, sociedade de economia mista e fundação pública (confira se os termos em `esquema/vocabularios/tipos-orgao.json` dizem o mesmo; se não, proponha no relatório, não edite), supervisão ministerial (`vincula-se`, D39) e o que mais o decreto-lei estrutura e ainda está em vigor.
- [x] Agências reguladoras federais (a Lei 13.848, art. 2º, lista as agências): as que faltam no mapa (procure ANEEL, Anatel, ANS, ANA, ANTT, ANTAQ, ANAC e Ancine; ANP, ANM e Anvisa já existem), cada uma com `contido_em` no Poder Executivo federal e `vincula-se` ao ministério (D39), com a lei de criação. Diretoria colegiada (diretor-presidente e diretores, agregados), mandato, escolha (indicação do Presidente e aprovação do Senado, Lei 9.986) e a relação com o Senado.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: todos os ministérios, `org:presidencia-da-republica`, `org:casa-civil`, `org:anp`, `org:anm`, `org:anvisa`, `cargo:ministro-de-estado`, `cargo:presidente-da-republica`.
- Em paralelo: `f2-funcoes-essenciais` (MPU, DPU, AGU) e `f2-legislativo-tcu`. Não edite a AGU nem entidades do Legislativo.
- A revisão da fase 1 (`verificacao-f1-orcamento`) roda ao mesmo tempo, mas não edita `dados/`. As métricas em `dados/metricas/` são geradas por script: não as edite.

## Cobertura

Cópias em `pesquisa/brutos/planalto-leis/2026-10-28-f2-executivo/` (baixadas em 2026-10-28). Última alteração incorporada: Lei 14.600/2023 até a Lei 15.352/2026 (25/2/2026); Lei 13.848/2019 até a Lei 15.352/2026; Lei 9.986/2000 até a Lei 14.724/2023; Decreto-Lei 200/1967 até a Lei 9.636/1998. Nenhuma das quatro mudou entre 2026-10-01 e 2026-10-28.

### Lei 14.600/2023

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | § 3º (vinculação das entidades por ato do Executivo) nas relações `vincula-se` das agências; §§ 1º e 2º remetem aos decretos de estrutura, que estão em `estrutura_continua` dos ministérios |
| art. 2º | coberto | org:presidencia-da-republica e os órgãos dos incisos e parágrafos (Casa Civil, Secretaria-Geral, SRI, Secom, Gabinete Pessoal, GSI, conselhos, Assessoria Especial, Conselho da República, Conselho de Defesa Nacional) |
| arts. 3º a 8º | coberto | detalhes (D50) de org:casa-civil, org:secretaria-geral-da-presidencia, org:secretaria-de-relacoes-institucionais, org:secretaria-de-comunicacao-social, org:gabinete-pessoal-do-presidente, org:gabinete-de-seguranca-institucional; rel:casa-civil-assessora-presidente, rel:sri-assessora-presidente, rel:gabinete-pessoal-assessora-presidente, rel:gsi-assessora-presidente, rel:casa-civil-controla-internamente-presidencia, rel:casa-civil-controla-internamente-vice-presidencia, rel:sri-auxilia-cdess |
| arts. 9º a 13 | coberto | org:conselho-de-governo, org:conselho-de-desenvolvimento-economico-social-sustentavel, org:cnpe, org:conselho-do-programa-de-parcerias-de-investimentos, org:consea; relações `assessora` de cada um com o Presidente; rel:presidente-preside-conselho-de-governo, rel:ministro-de-estado-integra-conselho-de-governo, rel:ministro-de-estado-preside-cnpe |
| art. 14 | coberto | rel:advogado-geral-da-uniao-assessora-presidente (já citava; a AGU fica com f2-funcoes-essenciais) |
| art. 15 | coberto | org:assessoria-especial-do-presidente, rel:assessoria-especial-assessora-presidente |
| art. 16 | coberto | org:conselho-da-republica, org:conselho-de-defesa-nacional (já citavam) |
| arts. 17 e 18 | coberto | os 32 ministérios (inclusive a CGU) e cargo:ministro-de-estado |
| arts. 19 a 30 | coberto | detalhes dos ministérios com as áreas de competência (D50) e os incisos nas fontes |
| art. 30-A | coberto | org:ministerio-do-empreendedorismo |
| arts. 31 a 49 | coberto | detalhes dos ministérios e da CGU; rel:mre-assessora-presidente (art. 44, I); rel:cgu-representa-a-agu, rel:cgu-representa-a-receita-federal, rel:cgu-representa-a-policia-federal, rel:cgu-representa-a-mjsp, rel:cgu-representa-a-mpf (art. 49, § 2º); relações anteriores (SUS, Susp, FNAS, Sistema S, CGU) já citavam |
| art. 50 | coberto | cargo:ministro-de-estado (estrutura mínima dos ministérios), org:ministerio-da-fazenda (§ 5º, consultoria jurídica pela PGFN) |
| arts. 51 a 53 | coberto | vigência dos ministérios criados ou transformados em 2023 (com norma:mp-1154-2023), da SRI e da Secom |
| art. 54 | coberto | cargo:ministro-de-estado (inciso II, cargos de Ministro de Estado); os cargos em comissão e funções do inciso I são detalhe de pessoal |
| art. 55 | fora | alocação e denominação de cargos comissionados por ato do Executivo: não cria órgão, cargo nem etapa |
| arts. 56 e 57 | fora | requisição e cessão de servidores: regime de pessoal |
| arts. 58 e 59 | coberto | org:funai, org:secretaria-nacional-de-politicas-penais (já citavam) |
| art. 60 | coberto | rel:ana-vincula-se-ministerio-da-integracao (nova redação do art. 3º da Lei 9.984/2000) |
| art. 61 | lacuna | Conselho Nacional de Recursos Hídricos, presidido pelo Ministro da Integração (nova redação da Lei 9.433/1997, arts. 36 e 45): colegiado ainda fora do mapa |
| arts. 62 a 64 | fora | alteram outras leis em detalhes que não criam órgão, cargo nem etapa: rateio da compensação financeira (Lei 8.001/1990), cargos CCE-18 (Lei 14.204/2021) e informação sobre saneamento (Lei 11.445/2007) |
| art. 65 | coberto | org:conselho-do-programa-de-parcerias-de-investimentos (composição por ato do Executivo) |
| arts. 66 e 67 | fora | supervisão da Anater (serviço social autônomo não incluído, D07) e contratação temporária (regime de pessoal) |
| art. 68 | coberto | org:cmn (nova redação da Lei 9.069/1995, art. 8º) |
| art. 69 | fora | conselho deliberativo da Apex-Brasil (serviço social autônomo não incluído, D07) |
| arts. 70 a 77 | fora | transição de 2023 esgotada: transferência de competências, acervo e pessoal, estruturas regimentais provisórias, medidas transitórias de ministros e de segurança |
| art. 78 | fora | revogações |
| art. 79 | coberto | norma:lei-14600-2023 (vigência) |

Conta: 80 artigos vigentes (arts. 1º a 79 e 30-A; nenhum artigo inteiro vetado). Coberto 61, fora 18, lacuna 1, parcial 0. Cobertura (coberto + fora) / total = 79/80 = 98,8%.

### Decreto-Lei 200/1967

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º e 2º | coberto | org:poder-executivo-federal |
| art. 3º | fora | superado: a organização dos órgãos por decreto segue hoje a CF de 1988 (arts. 61, § 1º, II, e, e 84, VI, a), sem revogação expressa no texto do Planalto |
| arts. 4º e 5º | coberto | org:poder-executivo-federal (administração direta e indireta e os quatro tipos de entidade); campos.contido_em das entidades da indireta (art. 4º, II) |
| arts. 6º a 18 | fora | princípios e diretrizes gerais (planejamento, coordenação, descentralização, delegação, controle, orçamento-programa): não criam órgão, cargo nem etapa |
| arts. 19 e 20 | coberto | cargo:ministro-de-estado; relações `vincula-se` das agências criadas nesta tarefa (art. 19) |
| arts. 21 a 24 | fora | superados: órgãos centrais dos ministérios de 1967 (Secretaria-Geral, Inspetoria-Geral de Finanças); a estrutura mínima atual está na Lei 14.600/2023, art. 50 |
| arts. 25 a 28 | coberto | cargo:ministro-de-estado (supervisão ministerial); relações `vincula-se` (art. 26) |
| art. 29 | fora | superado: assistência direta ao ministro hoje na Lei 14.600/2023, art. 50 |
| arts. 30 e 31 | parcial | sistemas de atividades auxiliares (pessoal, orçamento, administração financeira, contabilidade e auditoria, serviços gerais): o MGI coordena os sistemas estruturadores (Lei 14.600, art. 32, V) e a CGU o controle interno, mas os sistemas não têm entidade e nenhuma entidade cita o DL 200 |
| arts. 32 a 39 | fora | superados: Presidência e ministérios de 1967, hoje na Lei 14.600/2023 (o Planalto remete com "vide") |
| arts. 40 a 44 | fora | superados: Conselho de Segurança Nacional e Serviço Nacional de Informações (hoje CF, art. 91, e Lei 9.883/1999) |
| arts. 45 a 57 | fora | superados: Forças Armadas e ministérios militares de 1967 (hoje CF, art. 142, e LC 97/1999) |
| arts. 59 a 67 | fora | superados: ministérios militares de 1967 |
| art. 68 | parcial | contas anuais do Presidente com parecer prévio do TCU: no mapa pela CF (arts. 71, I, e 84, XXIV), sem citar o DL 200; as entidades são do Legislativo e do TCU, que esta tarefa não edita |
| arts. 69 a 93 | fora | normas de administração financeira e de contabilidade (ordenador de despesa, tomada de contas, suprimento de fundos): detalhes de processo que não criam órgão, cargo nem etapa |
| arts. 94 a 124 | fora | pessoal civil, DASP e assessoramento superior: regime de servidores e órgãos extintos |
| arts. 145 a 150 | fora | transição esgotada: reforma administrativa de 1967 |
| arts. 152 a 154 | fora | transição esgotada: reforma administrativa de 1967 |
| arts. 155 a 167 | fora | superados: medidas de coordenação setorial de 1967 (ciência e tecnologia, saúde, abastecimento, transportes, comunicações) e colegiados extintos |
| art. 170 | coberto | org:poder-executivo-federal (avocação pelo Presidente) |
| arts. 171 a 177 | fora | territórios federais (sem território hoje), órgãos autônomos, assinatura e agrupamento de atos, prazos e respostas a consultas e colegiados com representação de classe: detalhes que não criam órgão, cargo nem etapa |
| art. 178 | lacuna | o Executivo pode dissolver ou incorporar entidades deficitárias, inativas ou que façam o que a iniciativa privada já atende: competência sem relação no mapa |
| arts. 179 a 182 | fora | superados ou de pessoal: atribuições do antigo Ministério do Planejamento (Lei 4.320), cargos em comissão de 1968, regime CLT nas estatais |
| art. 183 | coberto | org:sistema-s (fiscalização do Estado sobre entidades que recebem contribuições parafiscais) |
| arts. 184 a 188 | fora | superados ou detalhes de 1967 (aumento de pessoal, siderurgia, Taxa de Marinha Mercante, Codebrás, segurança nacional) |
| art. 189 | coberto | rel:banco-do-brasil-vincula-se-ministerio-da-fazenda, rel:caixa-economica-federal-vincula-se-ministerio-da-fazenda (inciso I); os demais incisos tratam de bancos extintos ou vinculados a pastas extintas |
| arts. 190 e 191 | fora | Ipea e financiamento de projetos: entidades não incluídas (D07) |
| art. 198 | fora | estrutura própria do Itamaraty: remete a ato do Executivo |
| arts. 199 a 213 | fora | transição esgotada: criação e mudança de nome de ministérios e cargos em 1967 |
| art. 214 | coberto | norma:decreto-lei-200-1967 (vigência) |
| art. 215 | fora | revogação genérica |
| arts. 58, 125 a 144, 151, 168, 169 e 192 a 197 | revogado | revogados expressamente no texto do Planalto; não entram na conta |

Conta: 215 artigos, 30 revogados expressamente; 185 vigentes no texto do Planalto. Coberto 14, parcial 3, lacuna 1, fora 167. Cobertura = 181/185 = 97,8%. Ressalva: a maior parte do "fora" são artigos superados por leis posteriores sem revogação expressa marcada no Planalto (Presidência, ministérios e Forças Armadas de 1967); a D49 não tem classe própria para isso, e os contamos como fora, no sentido de transição esgotada. Se forem excluídos da conta como não vigentes, o percentual muda pouco.

### Lei 13.848/2019

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | fora | objeto da lei e lista das leis alteradas |
| art. 2º | coberto | org:agencias-reguladoras-federais, as doze agências e rel:aneel-integra-agencias-reguladoras-federais (e as outras onze `integra`) |
| art. 3º | coberto | o conjunto e as agências (natureza especial); relações `vincula-se` |
| arts. 4º e 5º | fora | princípios de proporcionalidade e de motivação das decisões: não criam órgão, cargo nem etapa |
| arts. 6º a 12 | coberto | proc:ato-normativo-de-agencia-reguladora, obj:ato-normativo-de-agencia-reguladora, rel:agencias-reguladoras-federais-edita-ato-normativo, cargo:dirigente-de-agencia-reguladora (arts. 7º e 8º) |
| art. 13 | fora | prazos de decisão remetidos à legislação e ao regimento de cada agência |
| arts. 14 e 15 | coberto | rel:congresso-fiscaliza-agencias-reguladoras-federais, rel:agencias-reguladoras-federais-presta-contas-a-tcu |
| art. 16 | fora | plano de comunicação: detalhe que não cria órgão, cargo nem etapa |
| arts. 17 a 21 | coberto | org:agencias-reguladoras-federais (plano estratégico, plano de gestão anual, agenda regulatória); rel:agencias-reguladoras-federais-presta-contas-a-tcu (art. 18, § 3º) |
| arts. 22 a 24 | coberto | cargo:ouvidor-de-agencia-reguladora, rel:presidente-indica-ouvidor-de-agencia-reguladora, rel:senado-aprova-indicacao-ouvidor-de-agencia-reguladora, rel:presidente-nomeia-ouvidor-de-agencia-reguladora |
| arts. 25 a 28 | coberto | rel:agencias-reguladoras-federais-auxilia-cade |
| art. 29 | coberto | obj:ato-normativo-de-agencia-reguladora (atos conjuntos), org:agencias-reguladoras-federais |
| art. 30 | fora | comitês facultativos de intercâmbio entre agências, sem composição definida em lei |
| arts. 31 a 35 | coberto | org:agencias-reguladoras-federais (cooperação com defesa do consumidor e meio ambiente; delegação a agências estaduais e municipais) |
| arts. 36 e 37 | coberto | org:aneel, org:anatel |
| art. 38 | coberto | org:anp |
| art. 39 | coberto | org:anvisa |
| arts. 40 e 41 | coberto | org:ans, org:ana |
| art. 42 | coberto | cargo:dirigente-de-agencia-reguladora (nova redação da Lei 9.986/2000) |
| arts. 43 a 45 | coberto | org:antt, org:antaq, org:ancine, org:anac |
| arts. 47 a 49 | fora | transição esgotada (ouvidorias em 120 dias; mandatos em curso em 2019) e detalhe de rito no Cade (art. 48) |
| art. 50 | coberto | aviso:mandato-conselho-diretor-anpd (regra de transição reaplicada à ANPD pela Lei 15.352/2026, art. 17) |
| art. 51 | coberto | org:cade |
| art. 52 | fora | revogações |
| art. 53 | coberto | norma:lei-13848-2019 (vigência) |
| art. 46 | vetado | não entra na conta |

Conta: 52 artigos vigentes (53 menos o art. 46, vetado). Coberto 42, fora 10. Cobertura = 52/52 = 100%.

### Lei 9.986/2000

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 2º e 3º | fora | cargos comissionados internos das agências (direção, gerência, assessoria e assistência) e livre nomeação pela diretoria: quadro de pessoal; os dirigentes estão em cargo:dirigente-de-agencia-reguladora |
| arts. 4º a 6º | coberto | cargo:dirigente-de-agencia-reguladora, rel:presidente-indica-dirigente-de-agencia-reguladora, rel:senado-aprova-indicacao-dirigente-de-agencia-reguladora, rel:presidente-nomeia-dirigente-de-agencia-reguladora |
| arts. 8º, 8º-A e 8º-B | coberto | cargo:dirigente-de-agencia-reguladora (quarentena, vedações de indicação e de conduta) |
| arts. 9º e 10 | coberto | cargo:dirigente-de-agencia-reguladora (perda do mandato), rel:presidente-designa-dirigente-de-agencia-reguladora (lista de substituição) |
| art. 11 | coberto | cargo:ouvidor-de-agencia-reguladora |
| arts. 14, 16, 18, 19, 22, 23, 25, 26, 28, 29 e 31 | fora | quadros de pessoal, requisição de servidores, regulamentos internos e transição dos quadros: regime de pessoal |
| art. 36 | fora | alterou a Lei 9.472/1997 (mandato), redação depois substituída pela Lei 13.848/2019 |
| art. 37 | fora | modalidades de compra das agências: detalhe que não cria órgão, cargo nem etapa |
| art. 38 | coberto | norma:lei-9986-2000 (vigência) |
| art. 39 | fora | revogações |
| arts. 1º, 7º, 12, 13, 15, 17, 20, 21, 24, 27, 30 e 32 a 34 | revogado | não entram na conta (o art. 32 tem o caput revogado pela Lei 14.724/2023 e o parágrafo único sem marca, que sem o caput não tem efeito) |
| art. 35 | vetado | não entra na conta |

Conta: 26 artigos vigentes (41 com 8º-A e 8º-B, menos 14 revogados e 1 vetado). Coberto 10, fora 16. Cobertura = 26/26 = 100%.

## Diário
- 2026-10-28 08:37 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), D01 a D50, modelo de dados, protocolo e vocabulários
- 2026-10-28 08:55 — cópias baixadas em pesquisa/brutos/planalto-leis/2026-10-28-f2-executivo/ (Lei 14.600, DL 200, Lei 9.986, Lei 13.848, leis de criação das agências e decretos de estrutura dos ministérios supervisores); curl falhou (conexão resetada), baixado com Invoke-WebRequest
- 2026-10-28 08:48 — gravado norma:mp-1154-2023 (para datar a criação dos ministérios de 2023)
- 2026-10-28 08:49 — gravado norma:lei-14816-2024
- 2026-10-28 08:51 — editados os 31 ministérios do art. 17 (exceto a CGU): detalhes com as áreas de competência da Lei 14.600 (D50), incisos nas fontes e, quando criados em 2023, vigencia.de pela MP 1.154/2023 (arts. 51 a 53) ou pela MP 1.187/2023 (MEMP)
- 2026-10-28 08:53 — gravado org:gabinete-pessoal-do-presidente
- 2026-10-28 08:53 — gravado org:assessoria-especial-do-presidente
- 2026-10-28 08:53 — gravado org:conselho-de-governo
- 2026-10-28 08:53 — gravado org:conselho-de-desenvolvimento-economico-social-sustentavel
- 2026-10-28 08:53 — gravado org:cnpe
- 2026-10-28 08:53 — gravado org:conselho-do-programa-de-parcerias-de-investimentos
- 2026-10-28 08:53 — gravado org:consea
- 2026-10-28 08:53 — gravado rel:casa-civil-assessora-presidente
- 2026-10-28 08:53 — gravado rel:sri-assessora-presidente
- 2026-10-28 08:53 — gravado rel:gabinete-pessoal-assessora-presidente
- 2026-10-28 08:53 — gravado rel:gsi-assessora-presidente
- 2026-10-28 08:53 — gravado rel:assessoria-especial-assessora-presidente
- 2026-10-28 08:53 — gravado rel:conselho-de-governo-assessora-presidente
- 2026-10-28 08:53 — gravado rel:cdess-assessora-presidente
- 2026-10-28 08:53 — gravado rel:cnpe-assessora-presidente
- 2026-10-28 08:53 — gravado rel:cppi-assessora-presidente
- 2026-10-28 08:53 — gravado rel:consea-assessora-presidente
- 2026-10-28 08:53 — gravado rel:presidente-preside-conselho-de-governo
- 2026-10-28 08:53 — gravado rel:ministro-de-estado-integra-conselho-de-governo
- 2026-10-28 08:53 — gravado rel:ministro-de-estado-preside-cnpe
- 2026-10-28 08:53 — gravado rel:sri-auxilia-cdess
- 2026-10-28 08:53 — gravado rel:casa-civil-controla-internamente-presidencia
- 2026-10-28 08:53 — gravado rel:casa-civil-controla-internamente-vice-presidencia
- 2026-10-28 08:54 — editados org:casa-civil, org:secretaria-geral-da-presidencia, org:secretaria-de-relacoes-institucionais, org:secretaria-de-comunicacao-social, org:gabinete-de-seguranca-institucional e org:cgu: detalhes com as competências (arts. 3º a 8º e 49) e incisos nas fontes; vigência da Secom (art. 53, I) e nota da SRI (art. 52, I)
- 2026-10-28 08:54 — gravado rel:cgu-representa-a-agu
- 2026-10-28 08:54 — gravado rel:cgu-representa-a-receita-federal
- 2026-10-28 08:54 — gravado rel:cgu-representa-a-policia-federal
- 2026-10-28 08:54 — gravado rel:cgu-representa-a-mjsp
- 2026-10-28 08:54 — gravado rel:cgu-representa-a-mpf
- 2026-10-28 08:54 — gravado rel:mre-assessora-presidente
- 2026-10-28 08:54 — editados org:poder-executivo-federal (DL 200, arts. 1º, 2º, 4º e 170) e cargo:ministro-de-estado (supervisão ministerial, DL 200, arts. 19, 20, 25 e 26; estrutura mínima, Lei 14.600, art. 50; art. 54, II)
- 2026-10-28 08:57 — gravado norma:lei-9427-1996
- 2026-10-28 08:57 — gravado norma:lei-9472-1997
- 2026-10-28 08:57 — gravado norma:lei-9961-2000
- 2026-10-28 08:57 — gravado norma:lei-9984-2000
- 2026-10-28 08:57 — gravado norma:lei-10233-2001
- 2026-10-28 08:57 — gravado norma:mp-2228-1-2001
- 2026-10-28 08:57 — gravado norma:lei-11182-2005
- 2026-10-28 08:57 — gravado norma:lei-13709-2018
- 2026-10-28 08:59 — gravado org:agencias-reguladoras-federais (conjunto das 12 agências da Lei 13.848, art. 2º)
- 2026-10-28 08:59 — gravado org:aneel
- 2026-10-28 08:59 — gravado rel:aneel-vincula-se-ministerio-de-minas-e-energia
- 2026-10-28 08:59 — gravado org:anatel
- 2026-10-28 08:59 — gravado rel:anatel-vincula-se-ministerio-das-comunicacoes
- 2026-10-28 08:59 — gravado org:ans
- 2026-10-28 08:59 — gravado rel:ans-vincula-se-ministerio-da-saude
- 2026-10-28 08:59 — gravado org:ana
- 2026-10-28 08:59 — gravado rel:ana-vincula-se-ministerio-da-integracao
- 2026-10-28 08:59 — gravado org:antt
- 2026-10-28 08:59 — gravado rel:antt-vincula-se-ministerio-dos-transportes
- 2026-10-28 08:59 — gravado org:antaq
- 2026-10-28 08:59 — gravado rel:antaq-vincula-se-ministerio-de-portos-e-aeroportos
- 2026-10-28 08:59 — gravado org:ancine
- 2026-10-28 08:59 — gravado rel:ancine-vincula-se-ministerio-da-cultura
- 2026-10-28 08:59 — gravado org:anac
- 2026-10-28 08:59 — gravado rel:anac-vincula-se-ministerio-de-portos-e-aeroportos
- 2026-10-28 08:59 — gravado org:anpd
- 2026-10-28 08:59 — gravado rel:anpd-vincula-se-ministerio-da-justica-e-seguranca-publica
- 2026-10-28 08:59 — gravado rel:aneel-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:anp-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:anatel-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:anvisa-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:ans-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:ana-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:antaq-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:antt-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:ancine-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:anac-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:anm-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado rel:anpd-integra-agencias-reguladoras-federais
- 2026-10-28 08:59 — gravado aviso:mandato-conselho-diretor-anpd (LGPD 55-D, § 3º, quatro anos, x Lei 9.986, art. 6º, cinco anos)
- 2026-10-28 09:00 — gravado norma:lei-15352-2026
- 2026-10-28 09:01 — gravado cargo:dirigente-de-agencia-reguladora (agregado, 59 vagas)
- 2026-10-28 09:01 — gravado cargo:ouvidor-de-agencia-reguladora (agregado, 12 vagas)
- 2026-10-28 09:01 — gravado rel:presidente-indica-dirigente-de-agencia-reguladora
- 2026-10-28 09:01 — gravado rel:senado-aprova-indicacao-dirigente-de-agencia-reguladora
- 2026-10-28 09:01 — gravado rel:presidente-nomeia-dirigente-de-agencia-reguladora
- 2026-10-28 09:01 — gravado rel:presidente-indica-ouvidor-de-agencia-reguladora
- 2026-10-28 09:01 — gravado rel:senado-aprova-indicacao-ouvidor-de-agencia-reguladora
- 2026-10-28 09:01 — gravado rel:presidente-nomeia-ouvidor-de-agencia-reguladora
- 2026-10-28 09:01 — gravado rel:presidente-designa-dirigente-de-agencia-reguladora
- 2026-10-28 09:02 — gravado obj:ato-normativo-de-agencia-reguladora
- 2026-10-28 09:02 — gravado rel:agencias-reguladoras-federais-edita-ato-normativo
- 2026-10-28 09:02 — gravado proc:ato-normativo-de-agencia-reguladora
- 2026-10-28 09:02 — gravado rel:congresso-fiscaliza-agencias-reguladoras-federais
- 2026-10-28 09:02 — gravado rel:agencias-reguladoras-federais-presta-contas-a-tcu
- 2026-10-28 09:02 — gravado rel:agencias-reguladoras-federais-auxilia-cade
- 2026-10-28 09:03 — editado org:cade: Lei 13.848/2019, art. 51, nas fontes e nos detalhes
- 2026-10-28 09:03 — editadas as normas da tarefa (lei-14600-2023, lei-13848-2019, lei-9986-2000, decreto-lei-200-1967): acesso, compilação reconferida em 2026-10-28 (nenhuma mudança entre 2026-10-01 e hoje) e caminho da cópia bruta
- 2026-10-28 09:05 — editados: org:poder-executivo-federal (DL 200, art. 5º), cargo:ministro-de-estado (DL 200, arts. 25 a 28), rel:banco-do-brasil-vincula-se-ministerio-da-fazenda e rel:caixa-economica-federal-vincula-se-ministerio-da-fazenda (DL 200, art. 189, I), org:cmn (Lei 14.600, art. 68); cláusulas de vigência nas fontes das normas da tarefa
- 2026-10-28 09:05 — editados org:anp (Lei 13.848, art. 38) e org:anvisa (art. 39); art. 42 da Lei 13.848 nas fontes do cargo de dirigente; art. 50 no aviso da ANPD
- 2026-10-28 09:06 — editado org:sistema-s: DL 200, art. 183, nas fontes
- 2026-10-28 09:08 — quadros de cobertura gravados: Lei 14.600 98,8% (1 lacuna: CNRH, art. 61); DL 200 97,8% (3 parciais, 1 lacuna); Lei 13.848 100%; Lei 9.986 100%
- 2026-10-28 09:08 — nota: a linha das 08:55 sobre as cópias tem horário errado (foi escrita por volta das 08:40, antes das gravações das 08:48)
- 2026-10-28 09:08 — Wayback (archive.org/wayback/available) devolveu 429 em todas as tentativas do dia; arquivo ficou null nas normas novas
- 2026-10-28 09:09 — coletada; validação sem erros nos arquivos da tarefa
- 2026-10-28 09:09 — vocabulário: faltou verbo para "avocar" (DL 200, art. 170; ficou só em detalhes) e para "secretariar" um colegiado (usei auxilia, como em rel:gsi-auxilia-conselho-de-defesa-nacional); "supervisiona" só vale para o Judiciário, então a supervisão ministerial ficou em vincula-se (D39). tipos-orgao: ver relatório (empresa pública, sociedade de economia mista e fundação pública diferem do DL 200, art. 5º)
