# Registro de decisões

Decisões tomadas no brainstorm inicial (15–16/10/2026). Cada decisão tem um número fixo; se for revista, a original fica riscada com a data e o motivo da mudança.

## Propósito

- **D01** O br-grama é um infográfico web interativo que responde, visualmente e com o mínimo de texto, "como funciona o Estado brasileiro". O público é a população geral.
- **D02** A precisão é relativa a uma data de referência. Todo elemento tem fonte, data e nível de confiança, e nada é apresentado com mais certeza do que tem (ver D15).
- **D03** Mostramos o funcionamento formal (Constituição, leis, normas). O funcionamento real entra só por números (orçamento executado, volumes), sem interpretação política.
- **D04** O critério de completude usa a Constituição como espinha dorsal: todo órgão, cargo, competência e procedimento previsto na CF precisa estar no mapa. Depois aplicamos o mesmo às leis estruturantes. A cobertura é medida em percentual.

## Escopo

- **D05** Estado em sentido amplo: os três Poderes, mais Ministério Público, Defensoria, Advocacia Pública e Tribunais de Contas. Os casos de fronteira também entram: Sistema S, conselhos profissionais, OS/OSCIPs, consórcios públicos, cartórios, partidos, concessionárias e organismos internacionais.
- **D06** A União é modelada com dados reais. Estados e municípios entram como arquétipos ("estado típico", "município típico"), com as atipicidades explícitas e fundamentadas (ex.: TCM da cidade de São Paulo). Os 27 entes estaduais e os 5.570 municípios existem como entidades leves (dados do IBGE) para que as variações possam apontar para eles.
- **D07** Administração indireta: só exemplos relevantes, com aviso de que a lista não é exaustiva e com indicação de onde está a lista completa.
- **D08** Forças Armadas e segurança entram. Sigilo ou baixa transparência, aqui ou em qualquer área, é sinalizado como aviso (D37).
- **D09** Profundidade: descemos até onde houver fonte oficial estruturada (ex.: SIORG, CNJ). Onde ela acaba, o mapa indica "a estrutura continua; fonte: X".
- **D10** Colegiados (conselhos, comitês, comissões) entram, todos os que for possível levantar.

## Pessoas

- **D11** Pessoas são citadas nominalmente só no topo: eleitos, ministros e equivalentes, dirigentes máximos e membros de cortes superiores. Os demais cargos aparecem agregados (ex.: "Deputado Federal × 513").
- **D12** De cada pessoa guardamos nome e partido (quando houver), mais um link para onde há mais informação. Não guardamos remuneração nem foto.
- **D13** Modelo: o **órgão** é um contêiner; o **cargo** é um nó dentro dele e tem descrição curta (ex.: "Chefe de Estado e Chefe de Governo") e detalhes atrás do botão "i"; a **pessoa** é quem ocupa o cargo numa data. As relações ligam preferencialmente cargos.

## Tempo

- **D14** Retrato de 2026, com data de referência **01/10/2026** (proposta: uma data já passada pode ser verificada no DOU e nas fontes). O modelo é versionado (vigência de/até); o histórico entra onde houver dados de qualidade, e onde faltar indicamos o quê e onde falta.

## Fontes e verificação

- **D15** Níveis de confiança: `oficial`, `oficial-contraditorio`, `secundario`, `inferido`, `indisponivel`. As lacunas são preenchidas com fontes secundárias, sempre marcadas visualmente.
- ~~**D16** Contradições oficiais, lacunas e sigilo viram **achados de auditoria**: uma camada própria no mapa, mais uma lista navegável.~~ Revista em 17/10/2026 pela D37: "achado de auditoria" era uma metáfora.
- **D17** Cada fonte registra URL, data de acesso e cópia no Wayback Machine. Cópia local só de dados brutos pequenos.
- **D18** Atualização por revisão manual periódica, feita por um agente quando o mantenedor pedir.
- **D19** Licenças: código sob MIT; dados sob CC-BY 4.0. Textos sempre escritos por nós (não copiamos texto de Wikipedia ou de obras protegidas; fatos são citados com fonte).

## Visualização

- **D20** Web interativa, desktop primeiro, mobile depois.
- **D21** Layout com posições semânticas (Poderes em regiões, esferas em camadas) e linguagem de fluxograma: forma e cor indicam natureza e proximidade. Não usamos grafo de forças livre.
- **D22** Zoom semântico: a visão começa com poucos blocos, e o detalhe aparece ao aproximar.
- **D23** Codificação: cor = Poder; forma = natureza jurídica; tamanho = orçamento ou número de servidores; estilo da linha = tipo de relação.
- **D24** Os processos aparecem em quatro camadas independentes, cada uma ligável e desligável: (a) arestas tipadas; (b) "linhas de metrô"; (c) fluxos quantitativos; (d) ciclos no tempo.
- **D25** Definições, base legal e explicações ficam atrás de um botão "i".
- **D26** Orçamento: valor executado (pago) do último ano fechado; a dotação aparece no "i".
- **D27** A interface sai só em português, mas os textos ficam separáveis para tradução futura (sobreposições em `i18n/<idioma>/`).

## Técnica

- **D28** Fonte da verdade: arquivos JSON, um por entidade, num repositório git, validados por JSON Schema. Um SQLite pode ser gerado no build para consultas, mas é derivado e nunca editado à mão.
- **D29** Site estático gratuito, sem backend. O layout é calculado no build; os dados são divididos em pacotes por escopo e carregados sob demanda; a busca usa um índice pré-gerado.
- **D30** O código e os dados são mantidos por humanos e agentes, então legibilidade vem antes de esperteza.
- **D31** Proposta: Node/TypeScript em tudo (validação, build e web), para que o mantenedor lide com uma linguagem só.

## Depois do piloto (17/10/2026)

- **D32** Os atos, normas, contas e ações sobre os quais os órgãos agem são entidades próprias, os **objetos de competência** (`obj:`), e servem de alvo para relações como "sanciona", "julga as contas" e "controla a constitucionalidade". No mapa eles são visualmente distintos de órgãos e cargos: forma de etiqueta, fundo neutro e rótulo em itálico.
- **D33** Os processos têm uma vista própria **em raias**: uma faixa por ator (Casa legislativa ou Poder) e as etapas da esquerda para a direita. O mapa só destaca os atores ("estações"), com os números das etapas. Isso substitui as "linhas de metrô" desenhadas sobre o mapa (D24 b), que viravam uma teia ilegível quando uma etapa tinha muitos atores.
- **D34** Hierarquia no organograma é `contido_em`, com a fonte em `campos.contido_em`. A relação `integra` não repete o `contido_em`.
- **D35** No mapa, as relações aparecem quando se clica num órgão ou cargo; a opção "Todas" mostra todas de uma vez. Com todas visíveis ao mesmo tempo, o mapa ficava ilegível.
- **D36** Um fato com fonte oficial não é aviso, mesmo que seja notável (ex.: cadeira vaga no STF). Avisos são lacunas, contradições, sigilo e baixa transparência das fontes.
- **D37** Contradições entre fontes oficiais, lacunas, sigilo e fontes desatualizadas continuam sendo apontadas, mas como **avisos** (`aviso:`), não como "achados de auditoria". A expressão era uma metáfora do mantenedor e se confundia com as auditorias reais do TCU e da CGU. O mapa tem a camada "Avisos" e uma lista navegável.
- **D38** As competências dos entes (CF, arts. 21 a 24 e 30) aparecem numa **matriz de competências**, uma terceira vista do site: matérias nas linhas, União, estados e municípios nas colunas, e o tipo de competência (exclusiva, privativa, comum, concorrente, suplementar) na célula. Cada matéria é um objeto de competência. A competência tributária (arts. 145 a 156-B e 195) usa a mesma matriz, numa vista à parte: cada tributo é um objeto `tipo_objeto: "tributo"`.
- **D39** Entidades da administração indireta (autarquias, fundações, empresas públicas, sociedades de economia mista) ficam com `contido_em` no Poder Executivo do seu ente, e não no ministério ou secretaria que as supervisiona: supervisão não é hierarquia (D34). A ligação com o órgão supervisor é a relação `vincula-se`, com a fonte da vinculação (lei ou decreto de estrutura). O Banco Central já seguia essa regra.
- **D40** Quem exerce um cargo sem ser o titular (ex.: o presidente da Assembleia de Roraima governando até a eleição suplementar) recebe `interino: true` na relação `ocupa`, e o site mostra o selo "em exercício". Antes a diferença ficava só no texto de `condicao`, e o interino parecia titular.
- **D41** O processo eleitoral não lista os cargos em disputa. O site os obtém das relações `elege` que partem do eleitorado presente nas etapas de votação, para que o dado não exista em dois lugares.
- **D42** Numa etapa de processo, o ator pode ser `{ ator, orgao_exercicio }` em vez de só o id, para dizer de qual titular de cargo agregado se trata (ex.: Ministro de Estado no Ministério da Defesa, na GLO), como já se faz nas relações.
- **D43** Aviso resolvido não é apagado: recebe `vigencia.ate` com a data da fonte que o resolveu (ex.: a ata do TCU que registra a posse de Jhonatan de Jesus) e sai do retrato, mas fica no histórico.

## Depois da fatia 0 (28/10/2026)

O mantenedor pediu que as decisões daqui em diante sejam tomadas pelo agente coordenador e registradas com o motivo.

- **D44** Fases depois da fatia 0: (1) **números**: orçamento executado e repasses da União (D03, D23, D24 c, D26); (2) **leis estruturantes** (D04); (3) **ciclos no tempo** (D24 d); (4) **profundidade**: SIORG, colegiados e casos de fronteira (D05, D09, D10); (5) **alcance**: mobile e inglês (D20, D27). A versão 1.0 sai ao fim da fase 3. Motivo: os números vêm de uma base oficial estruturada, então são importação e não pesquisa manual, e é o que o público geral entende mais depressa; as leis custam tanto quanto a fatia 0 e não mudam a forma do site. As fases 4 e 5 não têm fim natural e ficam depois da 1.0.
- **D45** Um número medido de uma entidade num período é uma **métrica** (`met:`, em `dados/metricas/`); dinheiro que passa de uma entidade a outra é um **fluxo** (`fluxo:`, em `dados/fluxos/`), sempre preso a uma relação `repassa-recursos`, que dá a base legal. Os dois são gerados por script a partir da fonte oficial e guardam o recorte usado (unidades orçamentárias, ações, modalidades), para que qualquer pessoa refaça a conta. Motivo: o número muda todo ano e a estrutura não; em arquivo separado, ele não se mistura com o órgão nem com o histórico da sua estrutura.
- **D46** O orçamento vem da base "Despesas e Transferências Totais da União" do Tesouro Nacional, que cobre os três Poderes, o MPU e a DPU por unidade orçamentária. O número principal é o **pagamento total do ano** (despesas do próprio ano pagas mais restos a pagar pagos), o que de fato saiu do caixa; a dotação atualizada fica no "i" (D26). Motivo: o Portal da Transparência traz só o Executivo; serve para conferir, não como fonte principal.
- **D47** Recorte do orçamento: o ministério soma as unidades orçamentárias do seu órgão orçamentário, inclusive as das entidades vinculadas (a Anvisa entra no Ministério da Saúde), e a entidade vinculada mostra só a sua unidade. Os "recursos sob supervisão" (unidades 71 a 75: encargos financeiros, dívida, transferências a estados e municípios e operações oficiais de crédito) aparecem à parte no ministério que os supervisiona. Motivo: na lei orçamentária esses recursos são órgãos próprios, e somá-los faria o Ministério da Fazenda parecer gastar quase R$ 2,8 trilhões consigo mesmo. Entidade sem unidade orçamentária própria (secretarias, colegiados, estatais que não dependem do Tesouro, como Caixa e Petrobras) fica sem número.
- **D48** O tamanho por orçamento (D23) e os fluxos quantitativos (D24 c) aparecem em dois lugares: a camada **"Orçamento"** do mapa desenha atrás de cada órgão um círculo com área proporcional ao valor pago, sem mexer no layout; a aba **"Dinheiro"** mostra em barras o gasto por Poder e por órgão e os repasses da União aos estados e municípios. Motivo: as pontas da maior parte dos repasses (a União, os estados e os municípios típicos) não são nós do mapa, e setas grossas sobre o organograma repetiriam a teia ilegível que a D33 resolveu.

## Fora do escopo por enquanto

- Jornada do cidadão ("abri uma empresa", "fiquei doente").
- Canal de correções enviadas por usuários.
- Mobile.
