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
