---
id: verificacao-f2-fechamento
escopo: "Revisão independente do fechamento da fase 2 (partes A e B): entidades com verificacao.tarefa f2-fechamento"
status: em-andamento
depende_de: [f2-fechamento-a, f2-fechamento-b]
---

Siga `pesquisa/instrucoes-verificacao.md`. Confira contra as fontes primárias todas as entidades com `verificacao.tarefa: "f2-fechamento"` (cerca de 215; Grep em `dados/`). Os diários `pesquisa/fila/f2-fechamento-a.md` e `f2-fechamento-b.md` dizem o que cada uma é e de onde veio; as cópias brutas estão em `pesquisa/brutos/*/2026-11-14-f2-fechamento-*`.

Pontos de atenção:
- **Ocupantes** (D11, D14): cada relação `ocupa` precisa de ato oficial que mostre a pessoa no cargo em 2026-10-01. Confira nomes e grafias (PGFN: "Anelize" ou "Anelise"), datas de início (preencha `vigencia.de` quando o ato de nomeação ou posse estiver no DOU ou na página oficial), mandatos que terminam perto da data (Ancine, Anatel e o prazo condicionado ao TCU) e o Ouvidor do Senado (exercício contínuo desde 2023 contra a proibição de recondução do Ato da Mesa 1/2011: veja se o ato foi alterado; se não, abra aviso de contradição, D37). A fonte do STM é uma notícia do TJMG: procure fonte do próprio STM ou do DOU. Corregedor-Geral Eleitoral com posse em 2026-10-01: confirme que a posse foi antes do fim do dia.
- **D54 aplicada**: as 21 relações `forma-lista`, as 7 `classifica`, as `acumula`, as `registra`, os provimentos `eleicao-por-colegio`, os 12 `orgao-interno`, os 4 `politica-publica` e as 4 `supervisiona`: confira se o termo cabe na definição do vocabulário e se nenhuma referência ao id antigo ficou para trás (Grep pelos ids apagados em `dados/`).
- **Processos novos ou mudados**: `proc:nova-eleicao`, a etapa de arquivamento em `proc:lei-ordinaria`, as cinco etapas de revisão de `proc:processo-administrativo-disciplinar-federal` e o Presidente de TRE no julgamento; etapa por etapa, atores, prazos, quórum e dispositivo.
- **Entidades novas**: comissões mistas do FIPA e da CPLP, lideranças do Congresso, cargos do TRE, CNRH (o Decreto 12.504/2025 não o lista entre os colegiados do MIDR), relações do Banco Central com a União (LRF, art. 7º; Lei 13.820/2019), relações de foro no STF, `aviso:libelo-impeachment-presidente-lei-1079-e-risf`.
- **Quadros reclassificados** em f2-legislativo-tcu, f2-eleicoes, f2-judiciario, f2-executivo, f2-administracao e f2-financas-publicas: cada mudança de classe tem entidade que cita o artigo ou motivo que cabe na D49 e nas D51 a D53.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f2-fechamento"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário
