---
id: verificacao-f0-processos-legislativos
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-processos-legislativos\""
status: em-andamento
depende_de: [f0-processos-legislativos]
iniciada_em: 2026-10-27
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-processos-legislativos"` conferidas contra a fonte: 4 processos (`proc:crime-de-responsabilidade-do-presidente`, `proc:decreto-legislativo`, `proc:perda-de-mandato-parlamentar`, `proc:resolucao`, etapa por etapa, com os `remete_a` e as variantes), 3 órgãos (Conselho de Comunicação Social, Conselhos de Ética da Câmara e do Senado), 7 cargos (líderes da maioria e da minoria nas duas Casas, membro cidadão do Conselho da República, conselheiro do CCS, chefe de missão diplomática permanente), 30 relações, 3 normas, 5 fontes, 1 objeto e 1 aviso.
- [ ] Termos com definição ampliada depois da coleta (aplique). As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-processos-legislativos"`:
  - `convoca` agora cobre "chama a reunião de um colegiado". Crie `rel:presidente-convoca-conselho-da-republica` e `rel:presidente-convoca-conselho-de-defesa-nacional` (art. 84, XVIII: "convocar e presidir"). As relações `preside` que já existem ficam.
  - `monitora` agora cobre a avaliação de um sistema. Crie a relação do Senado com o Sistema Tributário Nacional (art. 52, XV), com o objeto que faltar (procure antes em `dados/objetos`).
  - ADCT, art. 113: você pode editar a etapa `iniciativa` de `proc:lei-ordinaria` e de `proc:lei-complementar` só para pôr a estimativa de impacto orçamentário em `detalhes`, com a fonte.
- [ ] Pontos do coletor a conferir:
  - `aviso:perda-de-mandato-senado-risf-e-codigo-de-etica`: o RISF (arts. 32 a 35) e o Código de Ética do Senado (Res. 20/1993, redação de 2008) descrevem ritos diferentes; os dois ainda falam em voto secreto, que a EC 76/2013 tirou da CF. Confirme a contradição e o rito seguido.
  - Res. 21/2016 do Senado, citada na ficha da Câmara: não conferida.
  - Casa onde começa o decreto legislativo: só achada a regra dos tratados (Câmara). Estado de defesa, intervenção e concessões não conferidos.
  - Publicação do decreto legislativo e da resolução: nenhuma norma consultada diz quem manda publicar; por isso não há etapa de publicação.
  - Cópias no Wayback: o campo `arquivo` ficou vazio (erro 429). Tente de novo.
  - O Código de Ética da Câmara foi citado como `norma:ricd` (está dentro do Regimento). Confira.
  - Perda de mandato: a declaração pela Mesa (art. 55, III a V) é uma segunda porta de entrada, só explicada nas notas. Confira se as notas dizem isso com clareza; o modelo não muda nesta revisão.
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Decisões do coordenador sobre as propostas da coleta

- `acredita` (art. 84, VII) não entra: os representantes estrangeiros não são nós do mapa. O inciso vai para a lista de descobertos explicada no fechamento.
- Art. 53, § 2º (a Casa resolve sobre a prisão em flagrante) e § 8º (imunidades no estado de sítio): ficam para a lista de descobertos explicada no fechamento.

## Diário
- 2026-10-27 21:17 — iniciada; lidos instruções, modelo, protocolo, decisões e diário da coleta; 54 entidades no escopo
- 2026-10-27 21:40 — verificados norma:lei-8389-1991 e norma:lei-11440-2006 (cópias locais do Planalto)
