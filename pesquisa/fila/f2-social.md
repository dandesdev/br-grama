---
id: f2-social
escopo: "Fase 2 (D49): leis do SUS, da assistência social, da educação e da seguridade"
status: coletada
depende_de: [f0-seguridade, f0-educacao]
iniciada_em: 2026-11-11
concluida_em: 2026-11-14
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 8.080/1990 e Lei 8.142/1990 (SUS): `norma:lei-8080-1990`, `norma:lei-8142-1990`
- Lei 8.742/1993 (LOAS): `norma:lei-8742-1993`
- Lei 9.394/1996 (LDB): procure ou crie
- Lei 14.113/2020 (Fundeb): `norma:lei-14113-2020`
- Lei 8.212/1991 e Lei 8.213/1991, só a organização da seguridade e da previdência (órgãos, conselhos, quem paga os benefícios); benefícios em detalhe são `fora`

## Entregáveis

- [x] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [x] SUS: direção em cada esfera (Ministério da Saúde, secretarias estaduais e municipais do arquétipo), comissões intergestores (CIT existe; CIB no arquétipo estadual), conselhos e conferências de saúde (existem; confira composição e periodicidade), consórcios de saúde; competências por esfera (arts. 16 a 18 da Lei 8.080) no `detalhes` (D50).
- [x] Assistência social: Suas, CNAS, conselhos estaduais e municipais, fundos de assistência, comissões intergestores do Suas; BPC (quem concede: INSS) como relação.
- [x] Educação (LDB): sistemas de ensino (federal, estaduais, municipais), Conselho Nacional de Educação (existe) e conselhos estaduais e municipais no arquétipo; incumbências da União, dos estados e dos municípios (arts. 9º a 11) no `detalhes` (D50) ou como relações quando ligarem entidades.
- [x] Fundeb: o fundo como `obj:` (existe `obj:fundeb`; confira), os conselhos de acompanhamento e controle social e a comissão intergovernamental (existe).
- [x] Seguridade: CNPS e conselhos de previdência (existem; confira), INSS como quem concede e paga os benefícios.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:sistema-unico-de-saude`, `org:comissao-intergestores-tripartite`, `org:conselho-nacional-de-saude`, `org:conferencias-de-saude`, `org:sistema-unico-de-assistencia-social`, `org:conselho-nacional-de-assistencia-social`, `org:conselho-nacional-de-educacao`, `org:sistema-federal-de-ensino`, `org:sistema-nacional-de-educacao`, `obj:fundeb`, `org:inss`, `org:conselho-nacional-de-previdencia-social`.
- As métricas e os fluxos (`dados/metricas/`, `dados/fluxos/`) são gerados por script: não os edite.
- Em paralelo: `f2-federacao`.

## Cobertura

Classes conforme a D49, a D53 e a regra 8 das instruções (artigo citado em `fontes`, `campos`, `estrutura_continua` ou como fonte de relação ou etapa conta como coberto; artigo superado sem revogação expressa é fora, D51). A primeira coluna traz só números de artigo, para o `scripts/cobertura-leis.ts` contar. Artigos vetados ou revogados por inteiro não entram na conta. Cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-social/`.

### Lei 8.080/1990 (Lei Orgânica da Saúde)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | norma:lei-8080-1990 (âmbito da lei) |
| arts. 2º e 3º | fora | direito à saúde e seus determinantes (direitos e regras programáticas) |
| art. 4º | coberto | org:sistema-unico-de-saude; rel:consorcios-publicos-integra-sus |
| arts. 5º a 7º | fora | objetivos, campo de atuação e princípios do SUS (regras programáticas; o campo de atuação repete a CF, art. 200, já nas notas do SUS) |
| arts. 8º e 9º | coberto | org:sistema-unico-de-saude; rel:ministerio-da-saude-dirige-sus e as relações dirige das secretarias dos arquétipos; org:arquetipo-estadual-secretaria-de-saude; org:arquetipo-municipal-secretaria-de-saude |
| art. 10 | coberto | rel:consorcios-publicos-integra-sus |
| arts. 12 e 13 | coberto | org:comissoes-intersetoriais-do-conselho-nacional-de-saude; org:conselho-nacional-de-saude |
| art. 14 | coberto | org:comissoes-permanentes-de-integracao-ensino-servico |
| art. 14-A | coberto | org:comissao-intergestores-tripartite; org:arquetipo-estadual-comissao-intergestores-bipartite |
| art. 14-B | coberto | org:conass; org:conasems; rel:conass-integra-comissao-intergestores-tripartite; rel:conasems-integra-comissao-intergestores-tripartite; rel:fundo-nacional-de-saude-repassa-recursos-conass; rel:fundo-nacional-de-saude-repassa-recursos-conasems |
| art. 15 | coberto | org:sistema-unico-de-saude (atribuições comuns nos detalhes, D50) |
| art. 16 | coberto | org:ministerio-da-saude (detalhes, D50); rel:ministerio-da-saude-dirige-sus |
| art. 17 | coberto | org:arquetipo-estadual-secretaria-de-saude |
| art. 18 | coberto | org:arquetipo-municipal-secretaria-de-saude; rel:consorcios-publicos-integra-sus (inciso VII) |
| art. 19 | coberto | org:arquetipo-estadual-secretaria-de-saude (DF) |
| arts. 19-A a 19-H | coberto | org:subsistema-de-atencao-a-saude-indigena; rel:ministerio-da-saude-coordena-subsistema-de-atencao-a-saude-indigena |
| arts. 19-I e 19-J | fora | atendimento e internação domiciliar e direito a acompanhante (direitos e modalidades de atendimento) |
| arts. 19-M a 19-O | fora | conteúdo da assistência terapêutica, definições e protocolos clínicos (regra técnica, D53) |
| art. 19-P | coberto | org:comissao-intergestores-tripartite; org:arquetipo-estadual-comissao-intergestores-bipartite; org:arquetipo-municipal-conselho-de-saude (pactuação do fornecimento) |
| arts. 19-Q e 19-R | coberto | org:conitec; rel:conitec-assessora-ministerio-da-saude; proc:incorporacao-de-tecnologia-no-sus; org:conselho-nacional-de-saude (19-Q, § 1º) |
| art. 19-T | coberto | org:conitec (parágrafo único: exceções recomendadas pela Conitec) |
| art. 19-U | coberto | org:comissao-intergestores-tripartite |
| arts. 19-V e 19-W | fora | campanhas contra a automedicação e produção de fármacos por laboratórios públicos (deveres programáticos, sem órgão novo) |
| arts. 20 a 23 | fora | serviços privados de saúde e capital estrangeiro (regras de mercado) |
| art. 24 | coberto | org:sistema-unico-de-saude (participação complementar privada) |
| art. 25 | fora | preferência às entidades filantrópicas (regra de contratação) |
| art. 26 | coberto | org:ministerio-da-saude; org:conselho-nacional-de-saude (valores pagos aos serviços contratados) |
| arts. 26-A a 26-H | fora | telessaúde (regras de prestação e direitos dos profissionais) |
| arts. 27 e 28 | fora | política de recursos humanos e dedicação integral das chefias (pessoal abaixo da cúpula, D11) |
| art. 30 | coberto | org:comissoes-intersetoriais-do-conselho-nacional-de-saude (comissão nacional das especializações) |
| arts. 31 e 32 | coberto | obj:fundo-nacional-de-saude; org:ministerio-da-saude (art. 31) |
| arts. 33 e 34 | coberto | obj:fundo-nacional-de-saude; rel:conselho-nacional-de-saude-fiscaliza-fundo-nacional-de-saude; org:arquetipo-estadual-conselho-de-saude; org:ministerio-da-saude (auditoria, art. 33, § 4º) |
| art. 35 | coberto | rel:uniao-repassa-recursos-saude-estados; rel:uniao-repassa-recursos-saude-municipios |
| art. 36 | coberto | org:sistema-unico-de-saude (planejamento ascendente) |
| art. 37 | coberto | org:conselho-nacional-de-saude (diretrizes dos planos de saúde) |
| art. 38 | fora | vedação de subvenção a prestador com fins lucrativos (regra de gestão) |
| art. 39 | fora | transição esgotada: imóveis e bases de dados do antigo Inamps (caput e §§ 1º a 4º e 7º vetados) |
| art. 41 | fora | superado: a Fundação das Pioneiras Sociais foi extinta (Lei 8.246/1991, art. 2º) e as ações seguem com o Serviço Social Autônomo Associação das Pioneiras Sociais, supervisionado pelo Ministério da Saúde (Lei 8.246/1991, art. 3º); o INCA é unidade do Ministério da Saúde; a supervisão não cria relação nova |
| art. 43 | fora | gratuidade nos serviços contratados (direito do usuário) |
| art. 45 | coberto | org:sistema-unico-de-saude (hospitais universitários) |
| art. 46 | fora | incentivo à pesquisa e à transferência de tecnologia (regra programática) |
| arts. 47 e 47-A | coberto | org:ministerio-da-saude; org:arquetipo-estadual-secretaria-de-saude e org:arquetipo-municipal-secretaria-de-saude (47-A, § 2º) |
| art. 50 | fora | transição esgotada (convênios do SUDS) |
| art. 52 | fora | crime |
| art. 53-A | fora | definição de atividades de apoio e participação de capital estrangeiro (D53) |
| art. 54 | coberto | norma:lei-8080-1990 (vigência) |
| art. 55 | fora | cláusula revogatória |

Vetados por inteiro (fora da conta): arts. 11, 19-L, 19-S, 29, 40, 42, 44, 48, 49, 51 e 53; o art. 39 tem o caput vetado mas os §§ 5º, 6º e 8º vigoram, e conta. Conta: 78 artigos vigentes; coberto 42, fora 36, parcial 0, lacuna 0; cobertura (coberto + fora) / total = 100,0%.

### Lei 8.142/1990 (participação da comunidade e transferências no SUS)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | org:conselho-nacional-de-saude e os conselhos dos arquétipos; org:conferencias-de-saude; rel:conselho-nacional-de-saude-convoca-conferencias-de-saude; rel:ministro-da-saude-homologa-deliberacoes-do-conselho-nacional-de-saude e as relações homologa dos arquétipos; rel:conass-integra-conselho-nacional-de-saude; rel:conasems-integra-conselho-nacional-de-saude |
| arts. 2º a 4º | coberto | obj:fundo-nacional-de-saude; rel:uniao-repassa-recursos-saude-estados; rel:uniao-repassa-recursos-saude-municipios; rel:consorcios-publicos-integra-sus (art. 3º, § 3º) |
| art. 5º | coberto | org:ministerio-da-saude (condições fixadas por portaria do Ministro) |
| art. 6º | coberto | norma:lei-8142-1990 (vigência) |
| art. 7º | fora | cláusula revogatória |

Conta: 7 artigos vigentes; coberto 6, fora 1, parcial 0, lacuna 0; cobertura = 100,0%.

### Lei 8.742/1993 (Lei Orgânica da Assistência Social)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | fora | definição da assistência social |
| arts. 2º a 4º | fora | objetivos, definição de entidades de assistência e princípios (regras programáticas) |
| arts. 5º e 6º | coberto | org:sistema-unico-de-assistencia-social; rel:arquetipo-estadual-secretaria-de-assistencia-social-coordena-suas; rel:arquetipo-municipal-secretaria-de-assistencia-social-coordena-suas; rel:mds-coordena-suas; org:comissao-intergestores-tripartite-do-suas |
| arts. 6º-A a 6º-C | coberto | org:sistema-unico-de-assistencia-social (proteção básica e especial, Cras e Creas); org:arquetipo-municipal-secretaria-de-assistencia-social (6º-C) |
| arts. 6º-D e 6º-E | fora | instalações dos centros e uso do cofinanciamento em equipes (regra técnica, D53) |
| art. 6º-F | coberto | org:sistema-unico-de-assistencia-social (CadÚnico) |
| art. 7º | coberto | org:conselho-nacional-de-assistencia-social |
| art. 8º | coberto | org:sistema-unico-de-assistencia-social |
| art. 9º | coberto | org:arquetipo-municipal-conselho-de-assistencia-social |
| art. 10 | fora | convênios com entidades de assistência (detalhe de gestão) |
| art. 11 | coberto | rel:mds-coordena-suas; relações coordena das secretarias dos arquétipos |
| art. 12 | coberto | obj:beneficio-de-prestacao-continuada; rel:uniao-repassa-recursos-assistencia-social-estados; rel:uniao-repassa-recursos-assistencia-social-municipios |
| art. 12-A | coberto | rel:uniao-repassa-recursos-assistencia-social-estados; rel:uniao-repassa-recursos-assistencia-social-municipios (IGD-Suas) |
| arts. 13 e 14 | coberto | org:arquetipo-estadual-secretaria-de-assistencia-social; rel:estados-repassam-recursos-assistencia-social-municipios; org:arquetipo-estadual-conselho-de-assistencia-social |
| art. 15 | coberto | org:arquetipo-municipal-secretaria-de-assistencia-social; org:arquetipo-municipal-conselho-de-assistencia-social |
| arts. 16 a 18 | coberto | org:conselho-nacional-de-assistencia-social; conselhos dos arquétipos (contido_em no órgão gestor, art. 16, parágrafo único); cargo:conselheiro-do-cnas; rel:presidente-nomeia-conselheiro-do-cnas; org:conferencias-de-assistencia-social; rel:cnas-convoca-conferencias-de-assistencia-social |
| art. 19 | coberto | rel:mds-coordena-suas; rel:mds-regula-beneficio-de-prestacao-continuada; rel:mds-repassa-recursos-inss; org:conselho-nacional-de-assistencia-social |
| arts. 20 e 21 | coberto | obj:beneficio-de-prestacao-continuada (requisitos em detalhe ficam fora do texto, D53) |
| art. 20-B | fora | critérios de aferição da renda (benefício em detalhe, D53) |
| art. 21-A | coberto | rel:inss-concede-beneficio-de-prestacao-continuada (suspensão pelo órgão concedente) |
| art. 21-B | fora | regularização cadastral do beneficiário (benefício em detalhe) |
| arts. 22 a 26 | fora | definições de benefícios eventuais, serviços, programas e projetos de enfrentamento da pobreza (sem órgão novo) |
| arts. 24-A a 24-C | fora | Paif, Paefi e Peti (serviços e programas, sem órgão novo) |
| arts. 26-A a 26-E | fora | auxílio-inclusão em detalhe (requisitos, valor, acumulação) |
| arts. 26-F e 26-G | coberto | obj:beneficio-de-prestacao-continuada; rel:mds-repassa-recursos-inss; rel:inss-concede-beneficio-de-prestacao-continuada |
| art. 26-H | fora | revisão do auxílio-inclusão em dez anos (regra de avaliação) |
| arts. 27 a 30 | coberto | obj:fundo-nacional-de-assistencia-social; rel:mds-repassa-recursos-inss (art. 29, parágrafo único); repasses da União |
| arts. 30-A a 30-C | coberto | rel:uniao-repassa-recursos-assistencia-social-estados; rel:uniao-repassa-recursos-assistencia-social-municipios; rel:estados-repassam-recursos-assistencia-social-municipios (30-A) |
| art. 31 | fora | atribuição genérica do Ministério Público (já na CF, art. 129) |
| arts. 32 a 34 | fora | transição esgotada (reordenamento de órgãos, extinção do CNSS, papel supletivo transitório da União) |
| art. 35 | coberto | obj:beneficio-de-prestacao-continuada; rel:inss-concede-beneficio-de-prestacao-continuada; org:inss |
| arts. 36 e 37 | fora | sanção a entidades e momento em que o BPC é devido (detalhe) |
| art. 39 | coberto | org:conselho-nacional-de-assistencia-social (proposta ao Executivo de mudança dos limites de renda, por maioria absoluta; reclassificado em verificacao-f2-social) |
| art. 40 | fora | transição esgotada (extinção da renda mensal vitalícia e dos auxílios natalidade e funeral da previdência) |
| arts. 40-A a 40-C | fora | regras de pagamento e consignação de benefícios (detalhe) |
| art. 41 | coberto | norma:lei-8742-1993 (vigência) |
| art. 42 | fora | cláusula revogatória |

Revogados por inteiro (fora da conta): arts. 20-A, 28-A e 38. Conta: 68 artigos vigentes; coberto 34, fora 34, parcial 0, lacuna 0; cobertura = 100,0%.

### Lei 9.394/1996 (Lei de Diretrizes e Bases da Educação)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º a 7º; 4º-A, 5º-A e 7º-A | fora | princípios, direito à educação, deveres do Estado e da família e liberdade de ensino (direitos e deveres) |
| art. 8º | coberto | org:sistema-federal-de-ensino e os sistemas dos arquétipos |
| art. 9º | coberto | org:sistema-federal-de-ensino; rel:mec-coordena-sistema-federal-de-ensino; org:conselho-nacional-de-educacao (§ 1º); rel:presidente-propoe-plano-nacional-de-educacao (inciso I) |
| arts. 10 e 11 | coberto | org:arquetipo-estadual-sistema-de-ensino; org:arquetipo-municipal-sistema-de-ensino; org:arquetipo-estadual-conselho-de-educacao; org:arquetipo-municipal-conselho-de-educacao; org:conselhos-escolares |
| arts. 12 e 13 | fora | incumbências das escolas e dos docentes (abaixo do arquétipo) |
| art. 14 | coberto | org:conselhos-escolares |
| arts. 14-A e 15 | fora | princípios de gestão das redes e autonomia das escolas (regras programáticas) |
| arts. 16 a 18 | coberto | sistemas de ensino; conselhos de educação dos arquétipos (órgãos de educação de cada sistema) |
| art. 19 | fora | categorias administrativas das instituições (definição) |
| arts. 21 a 35; 25-A, 26-A e 26-B; 35-B a 35-D | fora | níveis e etapas da educação básica, currículos e base nacional comum (organização pedagógica, sem órgão novo) |
| arts. 36 a 42; 36-A a 36-D, 42-A e 42-B | fora | ensino médio, educação de jovens e adultos e educação profissional (organização pedagógica) |
| arts. 43 a 45 | fora | finalidades e organização da educação superior |
| art. 46 | coberto | rel:mec-coordena-sistema-federal-de-ensino |
| arts. 47 a 57 | fora | regras acadêmicas, autonomia universitária e financiamento das instituições federais (D53) |
| arts. 58 a 67; 59-A, 60-A, 60-B, 62-A e 62-B | fora | educação especial e bilíngue de surdos, profissionais da educação (regras pedagógicas e de pessoal) |
| art. 68 | fora | fontes dos recursos da educação (D53) |
| arts. 69 a 73 | coberto | obj:piso-constitucional-da-educacao |
| art. 74 | coberto | obj:custo-aluno-qualidade |
| arts. 75 e 76 | coberto | rel:uniao-repassa-complementacao-fundeb (ação supletiva e redistributiva) |
| art. 77 | fora | condições para repasse a escolas comunitárias, confessionais e filantrópicas (sem entidade do mapa) |
| arts. 78 a 86; 78-A, 79-B, 79-C e 81-A | fora | educação indígena, ensino a distância, cursos experimentais, estágio, ensino militar e regras diversas (programas e regras pedagógicas) |
| arts. 87 a 90 | fora | transição esgotada (Década da Educação, adaptação das leis e das creches, questões de transição do regime anterior) |
| art. 90-A | coberto | org:conselhos-escolares |
| art. 91 | coberto | norma:lei-9394-1996 (vigência) |
| art. 92 | fora | cláusula revogatória |

Revogados ou vetados por inteiro (fora da conta): arts. 20 e 35-A (revogados), 79-A e 87-A (vetados). Conta: 117 artigos vigentes; coberto 19, fora 98, parcial 0, lacuna 0; cobertura = 100,0%.

### Lei 14.113/2020 (Fundeb)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º e 2º | coberto | obj:fundeb |
| arts. 3º a 5º | coberto | rel:estados-repassam-recursos-ao-fundeb; rel:municipios-repassam-recursos-ao-fundeb; rel:uniao-repassa-complementacao-fundeb |
| art. 6º | fora | definições de valor anual por aluno (D53) |
| arts. 7º e 8º | coberto | rel:fundeb-repassa-recursos-estados; rel:fundeb-repassa-recursos-municipios; rel:inep-monitora-fundeb (censo, art. 8º) |
| art. 9º | fora | diferenças e ponderações aplicadas no cálculo (D53); a fixação anual está em rel:comissao-intergovernamental-delibera-fundeb |
| arts. 10 e 11 | coberto | rel:fundeb-repassa-recursos-estados; rel:fundeb-repassa-recursos-municipios; obj:fundeb |
| arts. 12 a 15 | coberto | rel:uniao-repassa-complementacao-fundeb |
| art. 16 | coberto | obj:fundeb (estimativas publicadas pelo Executivo federal) |
| arts. 17 a 19 | coberto | org:comissao-intergovernamental-de-financiamento-da-educacao-basica; rel:comissao-intergovernamental-delibera-fundeb |
| arts. 20 e 21 | coberto | rel:fundeb-repassa-recursos-estados; rel:fundeb-repassa-recursos-municipios; obj:fundeb |
| art. 22 | fora | convênio facultativo entre estado e município para transferir alunos e encargos (CF, art. 211, § 4º), sem repasse fixado em lei |
| arts. 23 a 25 | fora | registro contábil, aplicação financeira e prazo de uso dos recursos (regras de gestão, D53) |
| art. 26 | coberto | obj:fundeb (70% para os profissionais) |
| art. 26-A | fora | subvinculação (regra de aplicação, D53) |
| arts. 27 a 29 | fora | subvinculações e vedações de uso (regras de aplicação, D53) |
| arts. 30 a 34 | coberto | rel:tcu-fiscaliza-fundeb; rel:arquetipo-estadual-tce-fiscaliza-fundeb; rel:cgu-controla-internamente-fundeb; obj:fundeb (Ministério Público, art. 32); org:conselho-de-acompanhamento-e-controle-social-do-fundeb; org:arquetipo-estadual-conselho-do-fundeb; org:arquetipo-municipal-conselho-do-fundeb e as três relações fiscaliza |
| art. 35 | fora | redes de conhecimento dos conselheiros (faculdade, sem órgão) |
| art. 36 | coberto | conselhos do Fundeb (registros à disposição) |
| art. 37 | fora | detalhamento dos dados contábeis do Fundeb (D53) |
| arts. 38 e 39 | coberto | rel:ministerio-da-educacao-monitora-fundeb |
| art. 40 | coberto | rel:inep-monitora-fundeb |
| art. 41 | coberto | rel:uniao-repassa-complementacao-fundeb (progressão até 2026) |
| art. 42 | fora | transição esgotada (instalação dos novos conselhos em 2021) |
| arts. 43, 43-A e 43-B | fora | prazo de atualização da lei até 2023 e implantação gradual de indicadores (transição e regra técnica) |
| arts. 44 a 46 | fora | transição esgotada (distribuição do primeiro trimestre de 2021) |
| arts. 47 e 47-A | fora | contas bancárias e uso de recursos extraordinários (regras de gestão, D53) |
| art. 48 | coberto | org:arquetipo-municipal-conselho-do-fundeb; org:arquetipo-municipal-conselho-de-educacao |
| arts. 49 a 52 | fora | diretrizes de qualidade, carreira, apoio da União e efeitos de benefícios fiscais (regras programáticas) |
| art. 53 | fora | cláusula revogatória (a ressalva do art. 12 da Lei 11.494/2007 mantém a comissão, coberta pelo art. 17) |
| art. 54 | coberto | norma:lei-14113-2020 (vigência) |

Nada vetado ou revogado por inteiro. Conta: 58 artigos vigentes; coberto 32, fora 26, parcial 0, lacuna 0; cobertura = 100,0%.

### Lei 8.212/1991 (organização e custeio da seguridade social)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| art. 1º | coberto | org:sistema-unico-de-saude; org:sistema-unico-de-assistencia-social; org:inss (seguridade, sem nó próprio) |
| arts. 2º a 4º | fora | definições de saúde, previdência e assistência social |
| art. 5º | fora | superado: o Sistema Nacional de Seguridade Social nunca teve estrutura própria e o seu órgão superior, o Conselho Nacional da Seguridade Social (arts. 6º e 7º), foi revogado pela MP 2.216-37/2001 (D51) |
| art. 8º | coberto | org:comissao-do-orcamento-da-seguridade-social (decreto de 4/8/1992 sem revogação expressa; se funciona em 2026 segue em aviso:comissao-orcamento-seguridade-social-sem-registro) |
| art. 9º | fora | remete às leis de cada área |
| arts. 10 a 15 | fora | financiamento, segurados e definições (custeio em detalhe, D53) |
| arts. 16 e 19 | coberto | rel:uniao-repassa-recursos-fundo-do-regime-geral-de-previdencia-social |
| arts. 17 e 18 | fora | uso de receitas da seguridade nos encargos previdenciários da União (regra de alocação, D53) |
| arts. 20 a 28 | fora | contribuições: alíquotas, bases e salário de contribuição (tributo em detalhe, D53) |
| arts. 30 a 32; 32-A a 32-C | fora | arrecadação, retenção e obrigações acessórias (detalhe de processo) |
| art. 33 | coberto | rel:receita-federal-arrecada-tributo-contribuicao-sobre-folha-de-salarios; rel:receita-federal-arrecada-tributo-contribuicao-do-trabalhador; rel:receita-federal-arrecada-tributo-contribuicao-sobre-o-lucro; rel:receita-federal-arrecada-tributo-contribuicao-sobre-receita-ou-faturamento |
| arts. 35, 35-A, 37 e 39 | fora | cobrança, multas e dívida ativa das contribuições (detalhe de processo) |
| arts. 42 e 43 | fora | responsabilidade de administradores e recolhimento nas ações trabalhistas (detalhe) |
| art. 45-A | fora | indenização de tempo de contribuição (benefício em detalhe) |
| arts. 47 a 54 | fora | certidão negativa, matrícula, informações municipais, privilégios do crédito e execução fiscal (detalhe de processo) |
| art. 56 | coberto | rel:uniao-repassa-fpe-estados; rel:uniao-repassa-fpm-municipios (regularidade com as contribuições como condição para receber FPE e FPM) |
| arts. 57 a 59 | fora | transição esgotada (débitos de 1991 e 1992, sistema do INSS em 90 dias) |
| arts. 60 a 62 | fora | pagamento pela rede bancária, receitas patrimoniais e contribuição à Fundacentro (regras de gestão) |
| art. 67 | fora | transição até o Cadastro Nacional do Trabalhador |
| arts. 68 e 68-A | fora | dever dos cartórios de informar óbitos e procurações (obrigação acessória) |
| arts. 69 a 74 | fora | revisão de benefícios, perícias e indicadores do INSS (rotina interna) |
| arts. 76, 78, 80, 82 e 83 | fora | recadastramento, auditorias externas, extratos e treinamento no INSS (rotina interna) |
| art. 85 | fora | superado: instalação do Conselho Nacional da Seguridade Social, extinto (D51) |
| art. 85-A | fora | interpretação de tratados previdenciários |
| arts. 87 a 89 | fora | dotações para contribuições, prescrição e restituição (D53) |
| art. 90 | fora | superado: tarefa do Conselho Nacional da Seguridade Social, extinto (D51) |
| arts. 91 e 92 | fora | descontos e multas (detalhe) |
| art. 95 | fora | sanções às empresas (só o § 2º vigora) |
| art. 96 | fora | projeções atuariais anexas à proposta orçamentária (conteúdo do projeto, D53) |
| arts. 97 a 99 | fora | alienação de imóveis e leilões do INSS (gestão patrimonial) |
| arts. 102 e 103 | fora | reajuste de valores e prazo de regulamentação esgotado |
| art. 104 | coberto | norma:lei-8212-1991 (vigência) |
| art. 105 | fora | cláusula revogatória |

Revogados ou vetados por inteiro (fora da conta): arts. 6º, 7º, 29, 34, 36, 38, 40, 41, 44, 45, 46, 55, 63 a 66, 75, 77, 79, 81, 84, 86, 93, 94, 100 e 101. Conta: 86 artigos vigentes; coberto 7, fora 79, parcial 0, lacuna 0; cobertura = 100,0% (arts. 8º e 56 passaram a coberto na rodada final de f2-fechamento).

### Lei 8.213/1991 (planos de benefícios da previdência social)

| Artigos | Classe | Entidades ou motivo |
|---|---|---|
| arts. 1º e 2º | fora | finalidade e princípios da previdência social |
| arts. 3º a 5º | coberto | org:conselho-nacional-de-previdencia-social |
| art. 6º | coberto | org:ouvidoria-geral-da-previdencia-social |
| art. 9º | coberto | org:inss (Regime Geral) |
| arts. 10 a 17 | fora | beneficiários, segurados, dependentes e inscrição (benefício em detalhe) |
| art. 18 | coberto | org:inss (prestações do Regime Geral) |
| arts. 19 a 29; 21-A, 27-A e 29-A a 29-C | fora | acidente do trabalho, carência e cálculo dos benefícios (benefício em detalhe) |
| arts. 31 a 40; 38-A e 38-B | fora | cálculo e reajuste dos benefícios, cadastro do segurado especial (benefício em detalhe) |
| art. 41-A | fora | reajuste dos benefícios (benefício em detalhe) |
| arts. 42 a 63 | fora | aposentadorias e auxílios (benefício em detalhe) |
| arts. 65 a 78; 71-A a 71-C e 73-A | fora | salário-família, salário-maternidade, pensão e auxílio-reclusão (benefício em detalhe) |
| art. 80 | fora | auxílio-reclusão (benefício em detalhe) |
| art. 86 | fora | auxílio-acidente (benefício em detalhe) |
| arts. 88 a 94; 96 a 99 | fora | serviço social, reabilitação profissional e contagem recíproca (benefício em detalhe) |
| arts. 101 a 103; 103-A | fora | perícias, perda da qualidade de segurado e decadência (detalhe) |
| arts. 104 a 117; 110-A e 117-A | fora | prescrição, comprovação, pagamento e descontos (detalhe) |
| arts. 118 a 122 | fora | estabilidade do acidentado, ações regressivas e direito adquirido (detalhe) |
| art. 124 | fora | acumulação de benefícios (detalhe) |
| art. 124-A | coberto | org:inss (processo eletrônico) |
| arts. 124-B a 124-D e 124-G | fora | acesso a dados e segurança da informação do INSS (gestão interna) |
| art. 125 | fora | exigência de fonte de custeio (regra de criação de benefício, D53) |
| art. 125-A | coberto | org:inss |
| art. 126 | coberto | org:conselho-de-recursos-da-previdencia-social; rel:crps-julga-recursos-contra-inss |
| arts. 128 a 131; 129-A | fora | ações judiciais, rito e desistência (detalhe de processo) |
| art. 132 | coberto | org:conselho-nacional-de-previdencia-social (valores-limite) |
| arts. 133 a 138; 135-A | fora | multas, reajustes e transição esgotada (extinção de regimes antigos) |
| arts. 142 e 143 | fora | transição de carência e do trabalhador rural (benefício em detalhe) |
| art. 149 | fora | remete a lei específica (ex-combatentes e ferroviários) |
| art. 151 | fora | transição (lista de doenças sem carência) |
| art. 153 | fora | remete a lei especial o regime facultativo complementar (hoje LC 108 e 109/2001, ver org:previc) |
| art. 154 | fora | prazo de regulamentação esgotado |
| art. 155 | coberto | norma:lei-8213-1991 (vigência) |
| art. 156 | fora | cláusula revogatória |

Revogados ou vetados por inteiro (fora da conta): arts. 7º e 8º (conselhos estaduais e municipais de previdência, revogados pela MP 2.216-37/2001), 30, 41, 64, 71-D, 79, 81 a 85, 87, 95, 100, 123, 124-E, 124-F, 126-A, 127, 139 a 141, 144 a 148, 150 e 152. Conta: 153 artigos vigentes; coberto 11, fora 142, parcial 0, lacuna 0; cobertura = 100,0%.

## Diário
- 2026-11-11 23:41 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), D01 a D53, modelo de dados, protocolo, vocabulários, os quadros de f2-financas-publicas e os diários de f0-seguridade e f0-educacao
- 2026-11-11 23:54 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-social/ (curl --http1.1 com user-agent de navegador): l8080.htm, l8142.htm, l8742.htm, l9394.htm, l14113.htm, l8212cons.htm, l8213cons.htm, mais d7646.htm, d6214.htm e l8246.htm; os sete textos de lei são iguais, depois de tirar as marcas, às cópias de 2026-10-23 (f0-seguridade e f0-educacao). compilacao_ate: Lei 15.471/2026 (8.080), nenhuma marca (8.142), Lei 15.157/2025 (8.742), Lei 15.468/2026 (LDB), LC 227/2026 (Fundeb), Lei 15.371/2026 (8.212), Lei 15.415/2026 e MP 1.355/2026 (8.213); todas com número menor que a Lei 15.484/2026, de 4/8/2026, logo anteriores a 2026-10-01
- 2026-11-11 23:54 — gravado norma:lei-8212-1991, norma:decreto-7646-2011, norma:decreto-6214-2007
- 2026-11-11 23:55 — correção da linha de cópias: a MP 1.355/2026 não se compara pela numeração das leis; é de 4/5/2026 (Planalto), anterior a 2026-10-01, com vigência encerrada, e só mexe no desconto de empréstimos em benefícios (Lei 8.213, art. 115), fora do escopo
- 2026-11-11 23:57 — gravados (SUS, lote 1): org:conitec, rel:conitec-assessora-ministerio-da-saude, proc:incorporacao-de-tecnologia-no-sus, org:subsistema-de-atencao-a-saude-indigena, rel:ministerio-da-saude-coordena-subsistema-de-atencao-a-saude-indigena, org:comissoes-intersetoriais-do-conselho-nacional-de-saude, org:comissoes-permanentes-de-integracao-ensino-servico, org:conass, org:conasems, rel:conass-integra-conselho-nacional-de-saude, rel:conass-integra-comissao-intergestores-tripartite, rel:fundo-nacional-de-saude-repassa-recursos-conass, rel:conasems-integra-conselho-nacional-de-saude, rel:conasems-integra-comissao-intergestores-tripartite, rel:fundo-nacional-de-saude-repassa-recursos-conasems, rel:consorcios-publicos-integra-sus, rel:ministro-da-saude-homologa-deliberacoes-do-conselho-nacional-de-saude, rel:arquetipo-estadual-governador-homologa-deliberacoes-do-conselho-de-saude, rel:arquetipo-municipal-prefeito-homologa-deliberacoes-do-conselho-de-saude, rel:conselho-nacional-de-saude-convoca-conferencias-de-saude
- 2026-11-11 23:58 — editados (SUS, verificacao passou a coletado com nota): org:sistema-unico-de-saude, org:ministerio-da-saude, org:arquetipo-estadual-secretaria-de-saude, org:arquetipo-municipal-secretaria-de-saude, org:comissao-intergestores-tripartite, org:arquetipo-estadual-comissao-intergestores-bipartite, org:arquetipo-municipal-conselho-de-saude, org:conselho-nacional-de-saude, rel:uniao-repassa-recursos-saude-estados, rel:uniao-repassa-recursos-saude-municipios, obj:fundo-nacional-de-saude
- 2026-11-12 00:00 — gravados (assistência social e BPC): norma:resolucao-cnas-33-2012, org:arquetipo-estadual-secretaria-de-assistencia-social, rel:arquetipo-estadual-secretaria-de-assistencia-social-coordena-suas, org:arquetipo-municipal-secretaria-de-assistencia-social, rel:arquetipo-municipal-secretaria-de-assistencia-social-coordena-suas, org:comissao-intergestores-tripartite-do-suas, org:arquetipo-estadual-comissao-intergestores-bipartite-do-suas, rel:comissao-intergestores-tripartite-do-suas-integra-suas, rel:arquetipo-estadual-comissao-intergestores-bipartite-do-suas-integra-suas, org:conferencias-de-assistencia-social, rel:cnas-convoca-conferencias-de-assistencia-social, cargo:conselheiro-do-cnas, rel:presidente-nomeia-conselheiro-do-cnas, obj:beneficio-de-prestacao-continuada, rel:inss-julga-beneficio-de-prestacao-continuada, rel:mds-regula-beneficio-de-prestacao-continuada, rel:mds-repassa-recursos-inss
- 2026-11-12 00:03 — editados (assistência social e seguridade; verificacao passou a coletado com nota): org:arquetipo-estadual-conselho-de-assistencia-social, org:arquetipo-municipal-conselho-de-assistencia-social, org:conselho-nacional-de-assistencia-social, org:sistema-unico-de-assistencia-social, obj:fundo-nacional-de-assistencia-social, rel:uniao-repassa-recursos-assistencia-social-estados, rel:uniao-repassa-recursos-assistencia-social-municipios, org:inss, org:sistema-unico-de-saude, org:conselho-nacional-de-previdencia-social
- 2026-11-12 00:03 — gravados (seguridade): org:ouvidoria-geral-da-previdencia-social, rel:receita-federal-arrecada-tributo-contribuicao-sobre-folha-de-salarios, rel:receita-federal-arrecada-tributo-contribuicao-do-trabalhador, rel:receita-federal-arrecada-tributo-contribuicao-sobre-o-lucro, rel:receita-federal-arrecada-tributo-contribuicao-sobre-receita-ou-faturamento, rel:uniao-repassa-recursos-fundo-do-regime-geral-de-previdencia-social
- 2026-11-12 00:04 — gravados (educação e Fundeb): org:arquetipo-estadual-conselho-de-educacao, rel:arquetipo-estadual-poder-executivo-homologa-conselho-de-educacao, org:arquetipo-municipal-conselho-de-educacao, rel:arquetipo-municipal-poder-executivo-homologa-conselho-de-educacao, org:conselhos-escolares, org:conselho-de-acompanhamento-e-controle-social-do-fundeb, org:arquetipo-estadual-conselho-do-fundeb, org:arquetipo-municipal-conselho-do-fundeb, rel:conselho-de-acompanhamento-e-controle-social-do-fundeb-fiscaliza-fundeb, rel:arquetipo-estadual-conselho-do-fundeb-fiscaliza-fundeb, rel:arquetipo-municipal-conselho-do-fundeb-fiscaliza-fundeb, rel:inep-monitora-fundeb, rel:ministerio-da-educacao-monitora-fundeb, rel:cgu-controla-internamente-fundeb, rel:fundeb-repassa-recursos-estados, rel:fundeb-repassa-recursos-municipios
- 2026-11-12 00:04 — editados (educação e Fundeb; verificacao passou a coletado com nota): obj:fundeb, rel:uniao-repassa-complementacao-fundeb, obj:piso-constitucional-da-educacao, obj:custo-aluno-qualidade, rel:mec-coordena-sistema-federal-de-ensino
- 2026-11-12 00:05 — gravados: fonte:camara-legin-decreto-4-agosto-1992-comissao-orcamento-seguridade, aviso:comissao-orcamento-seguridade-social-sem-registro (Lei 8.212, art. 8º, sem nó)
- 2026-11-12 00:07 — editado org:arquetipo-estadual-secretaria-de-assistencia-social (Lei 8.742, art. 14, nas fontes)
- 2026-11-12 00:09 — quadros de cobertura gravados e conferidos com npm run -s cobertura:leis e com um script que compara cada linha com a lista de artigos vigentes do texto do Planalto (sem falta nem sobra): Lei 8.080 78 artigos (coberto 42, fora 36), Lei 8.142 7 (6, 1), Lei 8.742 68 (33, 35), LDB 117 (19, 98), Lei 14.113 58 (32, 26), Lei 8.212 86 (5, 79, lacuna 2; 97,7%), Lei 8.213 153 (11, 142); todas as outras a 100%
- 2026-11-12 00:09 — revogações nas Leis 8.212 e 8.213 lidas pelas marcas de texto riscado do Planalto; como há tags <strike> sem fechamento, conferi caso a caso os artigos duvidosos: 8.212, arts. 5º, 39, 54, 74 e 92, e 8.213, arts. 6º, 113, 118, 121, 122 e 149 estão vigentes (as notas 'Revogado' ao lado são de versões antigas ou de parágrafos); 8.212, art. 95, só tem o § 2º vigente e conta; 8.213, arts. 71-D e 126-A (MPs que caducaram) não contam
- 2026-11-12 00:09 — conselhos de previdência: CNPS conferido (6 do governo e 9 da sociedade civil, Lei 8.213, art. 3º); os conselhos estaduais e municipais de previdência (Lei 8.213, arts. 7º e 8º; Lei 8.212, art. 77) e o Conselho Nacional da Seguridade Social (Lei 8.212, arts. 6º e 7º) foram revogados pela MP 2.216-37/2001, sem nó
- 2026-11-12 00:09 — lacunas: Lei 8.212, art. 8º (comissão do orçamento da seguridade; aviso:comissao-orcamento-seguridade-social-sem-registro) e art. 56 (regularidade com as contribuições como condição para receber FPE e FPM: deveria entrar na condição de rel:uniao-repassa-fpe-estados e rel:uniao-repassa-fpm-municipios, que não editei porque f2-federacao corre em paralelo; sugestão ao coordenador)
- 2026-11-12 00:09 — fluxos possíveis (D45; não editei dados/fluxos): rel:mds-repassa-recursos-inss (BPC e auxílio-inclusão), rel:uniao-repassa-recursos-fundo-do-regime-geral-de-previdencia-social, rel:fundo-nacional-de-saude-repassa-recursos-conass e -conasems, rel:fundeb-repassa-recursos-estados e -municipios (a base do Tesouro só mostra a complementação da União)
- 2026-11-12 00:09 — vocabulário (propostas): (1) verbo 'concede' (concede, mantém e paga um benefício previsto em lei); usei 'julga' em rel:inss-julga-beneficio-de-prestacao-continuada; (2) tipo_objeto 'beneficio'; usei 'decisao' em obj:beneficio-de-prestacao-continuada; (3) ampliar 'paraestatal' para cobrir associações de gestores reconhecidas por lei (Conass, Conasems); (4) verbo 'representa' para a representação de entes em colegiados (Conass e Conasems na CIT, onde usei 'integra')
- 2026-11-12 00:09 — modelagem: os conselhos estadual e municipal de assistência social passaram do conjunto de secretarias para o órgão gestor criado aqui (Lei 8.742, art. 16, parágrafo único); os conselhos do Fundeb e os conselhos de educação dos arquétipos ficam no sistema de ensino da sua esfera (inferido: LC 220/2025, arts. 15 e 16, III); as comissões intergestores do Suas vêm da NOB-Suas (Resolução CNAS 33/2012), lida na edição do MDS de 2012, sem conferir alterações posteriores
- 2026-11-12 00:09 — pontos para a revisão: (a) NOB-Suas não compilada (arts. 128 a 137) e sem data de DOU; (b) relações homologa do governador e do prefeito sobre os conselhos de saúde e rel:cgu-controla-internamente-fundeb com confiança inferida; (c) Lei 8.080, art. 41, como fora por superação (Fundação das Pioneiras Sociais extinta, Lei 8.246/1991, art. 2º); (d) Lei 8.212, art. 5º, como fora por superação (D51); (e) composição da Conitec pelo Decreto 12.716/2025 e etapas do processo pelo Decreto 7.646/2011, art. 15; (f) vigências deixadas null onde a data de publicação da lei que criou o órgão não foi conferida (Lei 9.836/1999, Lei 12.466/2011, Lei 9.720/1998)
- 2026-11-12 00:09 — entidades novas: 4 normas (lei-8212-1991, decreto-7646-2011, decreto-6214-2007, resolucao-cnas-33-2012), 1 fonte, 1 aviso, 1 processo, 1 cargo, 2 objetos? não: 1 objeto (obj:beneficio-de-prestacao-continuada), 23 órgãos e 39 relações; entidades existentes editadas: 30 (lista nas linhas 'editados' acima)
- 2026-11-14 08:29 — correção da linha anterior de contagem (escrita às pressas): entidades novas 64 (18 órgãos, 37 relações, 4 normas, 1 objeto, 1 cargo, 1 processo, 1 fonte, 1 aviso); existentes editadas 25 (com verificacao coletado e nota). Contagem feita contra o commit 45f970a, anterior ao início da tarefa
- 2026-11-14 08:29 — retomada a pedido do coordenador: relido o diário; os checkpoints 493abf3 e f6f19ad levaram parte dos arquivos desta tarefa; conferidos os 91 ids citados no diário: todos em disco e com verificacao da f2-social, exceto rel:uniao-repassa-fpe-estados e rel:uniao-repassa-fpm-municipios, só citados (são de f2-federacao e não citam a Lei 8.212, art. 56, que segue como lacuna)
- 2026-11-14 08:29 — npm run -s validar sem erros; npm run -s cobertura:leis confere os sete quadros; entregáveis marcados; tarefa coletada
