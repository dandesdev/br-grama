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

## Fora do escopo por enquanto

- Jornada do cidadão ("abri uma empresa", "fiquei doente").
- Canal de correções enviadas por usuários.
- Mobile.
