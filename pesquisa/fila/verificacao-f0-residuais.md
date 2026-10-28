---
id: verificacao-f0-residuais
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-residuais\""
status: em-andamento
depende_de: [f0-residuais]
iniciada_em: 2026-10-27
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-residuais"` conferidas contra a fonte: 2 processos (`proc:extradicao`, etapa por etapa e com o regime de prisão cautelar; `proc:eleicao-municipal`, só a etapa `posse`, que a coleta mudou), 5 objetos, 21 relações `julga` (STF, art. 102, I, e, j, m, n; STJ, art. 105, I, e, g; TRFs, art. 108, I, b; Justiça do Trabalho, art. 114, IV; Justiça Eleitoral; TJ típico, art. 125, § 1º), 3 normas (Leis 15.230/2025, 14.291/2022 e 13.445/2017), 3 fontes e 1 aviso (`aviso:posse-jhonatan-de-jesus-tcu-data`).
- [ ] Edições autorizadas fora do escopo:
  - `obj:extradicao`: confira se o texto aponta para `proc:extradicao` (o processo já tem `produz: obj:extradicao`) e ajuste só as notas se precisar.
  - `proc:eleicao-geral`, etapa `posse`: acrescente nos detalhes a posse dos deputados estaduais (CF, art. 27, § 1º; a coleta achou a Constituição de SP, art. 9º, § 2º, e art. 43, como exemplo).
  - Crie `norma:decreto-12543-2025` (nome atual da Diretoria de Inteligência Penal) se a coleta a citou em `norma:decreto-11693-2023` e a fonte abrir.
- [ ] Pontos do coletor a conferir:
  - Extradição: a Lei 13.445/2017 diz só "órgão competente do Poder Executivo" para a entrega; o coletor pôs o Ministério da Justiça como ator inferido (autoridade central pela estrutura do MJSP). Leia o Decreto 9.199/2017 (regulamento da Lei de Migração) e confirme ou corrija. Se o ator for cargo agregado, use D42.
  - Justiça Eleitoral: as relações de MS e HC vêm do Código Eleitoral; confira os dispositivos e a vigência. O art. 121, § 4º, V, é o recurso ao TSE contra decisão que denega; veja se as relações dizem isso sem ampliar.
  - TJ típico: a competência do art. 125, § 1º, vem da Constituição do estado; a Constituição de SP é só exemplo. Confira se `restrita_a` ou a condição deixa isso claro.
  - `rel:stf-julga-execucao-de-sentenca`: usa `julga` para "processa a execução" (decisão do coordenador); confira se a condição explica.
  - Jhonatan de Jesus: a coleta achou duas fontes para 15/3/2023, mas a ata da 1ª Câmara de 14/3 o mostra presente. Veja se dá para fechar a data; senão, o aviso continua.
  - Normas novas sem cópia no Wayback (429) e leis lidas só por WebFetch: tente as cópias.
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
- 2026-10-27 22:23 — iniciada; lidos instrucoes-verificacao, CLAUDE.md, decisoes (D01-D42), modelo-de-dados, protocolo e o diário de f0-residuais; escopo: 35 entidades com tarefa f0-residuais
- 2026-10-27 22:28 — verificados os 5 objetos. Corrigidos: obj:revisao-criminal-e-acao-rescisoria (detalhes diziam só "prova nova de inocência"; CPP, art. 621, III, também admite prova de circunstância que reduz a pena; prazo da rescisória passou a "em regra em até dois anos do trânsito em julgado", CPC, art. 975); obj:execucao-de-sentenca (nota interna: execução penal segue a LEP, não o CPP). Sem mudança: litigio-com-estado-estrangeiro, acao-de-interesse-da-magistratura, conflito-de-atribuicoes (CF conferida no cf.htm local)
- 2026-10-27 22:28 — verificadas as 6 relações julga do STF e do STJ (art. 102, I, e, j, m, n; art. 105, I, e, g; cf.htm local). Corrigida rel:stf-julga-execucao-de-sentenca: a condição ("Nas causas de sua competência originária; pode delegar...") não explicava o uso de julga; passou a "O STF processa a execução (o cumprimento) das sentenças nas causas de sua competência originária; pode delegar a prática de atos processuais."
- 2026-10-27 22:28 — verificadas as 6 relações rel:trf-1..6-julga-revisao-criminal-e-acao-rescisoria (art. 108, I, b; TRF-6 desde 2022-01-03, como o órgão). Sem correção
- 2026-10-27 22:29 — verificadas as 3 relações rel:justica-do-trabalho-julga-mandado-de-seguranca/-habeas-corpus/-habeas-data (art. 114, IV, EC 45/2004). Sem correção
- 2026-10-27 22:30 — verificadas rel:justica-eleitoral-julga-mandado-de-seguranca e -habeas-corpus (CF, art. 121, § 4º, V; Código Eleitoral, arts. 22, I, e, 29, I, e, 35, III, na cópia local). O recurso ao TSE é descrito só para a decisão do TRE que nega o pedido, sem ampliar. Correção: a RSF 132/1984 (API do Senado, doc. 564621, cópia em brutos/senado-dados-abertos/2026-10-27-verificacao-residuais/rsf-132-1984.json) suspendeu a locução "ou mandado de segurança" do art. 22, I, e, e não a parte do Presidente e dos Ministros, como diziam as notas. Em -mandado-de-seguranca saiu "o TSE, contra atos dos TREs" e o dispositivo art. 22, I, e; em -habeas-corpus só a nota foi corrigida
- 2026-10-27 22:31 — verificadas as 4 relações rel:arquetipo-estadual-tj-julga-mandado-de-seguranca/-habeas-data/-habeas-corpus/-mandado-de-injuncao (CF, art. 125, § 1º; Constituição de SP, art. 74, III a V, cópia local da Alesp). Ponto do coletor resolvido: a condição começa por "a Constituição do estado indicar" e apresenta SP como exemplo (fonte com nota "exemplo de Constituição estadual"); restrita_a não é necessário. Correção pequena: dispositivo da Constituição de SP afinado por relação (III para MS e HD, IV para HC, V para MI). Sugestão: a Constituição de SP, art. 74, IX, dá ao TJ os conflitos de atribuição entre autoridades administrativas e judiciárias do próprio estado, caso que o art. 105, I, g, da CF não leva ao STJ (não criei relação)
- 2026-10-27 22:33 — Planalto: curl deu falha (exit 56, também com --http1.1); a API de legislação do Senado e o Wayback responderam. Cópias do Wayback em pesquisa/brutos/planalto-leis/2026-10-27-verificacao-residuais/ (l13445, l14291, l15230, d9199, d12543); fichas do Senado em pesquisa/brutos/senado-dados-abertos/2026-10-27-verificacao-residuais/
- 2026-10-27 22:33 — verificadas norma:lei-15230-2025, norma:lei-14291-2022 e norma:lei-13445-2017: textos conferidos nas cópias do Wayback, DOU pela ficha do Senado, sem alteração posterior nos dispositivos usados; arquivo (Wayback) preenchido nas três (estava null por 429), redacao_conferida_em acrescentado, nota da 13.445 reescrita com o Decreto 9.199/2017
- 2026-10-27 22:33 — criadas norma:decreto-9199-2017 (regulamento da Lei de Migração; arts. 262, 269, 271 e 275 nomeiam o MJSP na extradição) e norma:decreto-12543-2025 (autorizada pela tarefa; vigência 30/7/2025, incerta, pela LC 95; o Decreto 13.131/2026 revogou parte do art. 3º, mas o texto compilado do Decreto 11.348 com alterações até o 13.131 mantém a Diretoria de Inteligência Penal e o art. 36). Ambas como coletado/verificacao-f0-residuais. Validação sem erros
