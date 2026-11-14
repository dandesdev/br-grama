---
id: f3-fechamento
escopo: "Fase 3, fechamento: listas da OAB no quinto constitucional, cópias no Wayback que faltam, pendências pequenas antes da versão 1.0"
status: em-andamento
depende_de: []
---

## Itens

1. **Quinto constitucional, OAB** (lacuna achada em verificacao-f2-fechamento): a OAB forma lista sêxtupla de advogados para os TRFs, os TJs (inclusive o TJDFT), os TRTs, o STJ e o TST (CF, arts. 94, 104, parágrafo único, II, e 111-A, I; Lei 8.906/1994, art. 54, XIII, e art. 58, XIV, para quem na OAB forma a lista). Crie as relações `forma-lista` (D54) da OAB (Conselho Federal ou seccional, conforme o tribunal; procure os órgãos da OAB em `dados/orgaos/`) para os cargos de juiz e ministro desses tribunais, no padrão das relações do Ministério Público que já existem (Grep "forma-lista-juiz-de-trf"). Não crie seccionais uma a uma: use o órgão ou arquétipo que já existir, ou um conjunto (D51) se for preciso.
2. **Wayback**: preencher `arquivo` nas normas e fontes com `arquivo: null` (Grep em `dados/normas` e `dados/fontes`). API de disponibilidade primeiro; Save Page Now um pedido por vez, com pausa de vários minutos; confira que a cópia gravada é da página certa (não a página inicial do Planalto); se der 429 ou 520 duas vezes seguidas, pare e anote.
3. Releia `pesquisa/fila/f2-fechamento.md` e os diários das tarefas f3 e, se achar pendência pequena sem dono, faça e anote.

Entidades criadas ou mudadas: `verificacao: { status: "coletado", tarefa: "f3-fechamento", em, notas }`.

## Diário
- 2026-11-14 10:03 — iniciada; lidos CLAUDE.md, decisoes, modelo-de-dados, protocolo
- 2026-11-14 10:07 — item 1: gravados norma:provimento-cfoab-102-2004 (página oficial do CFOAB; Wayback de 19/1/2026 com os mesmos artigos), org:conselhos-seccionais-da-oab (conjunto, D51) e 7 relações forma-lista: Conselho Federal → ministro do STJ, ministro do TST, juiz de TRF (1ª a 5ª Regiões), juiz de TRT (8ª, 10ª, 11ª, 14ª); seccionais → desembargador (TJs e TJDFT), juiz de TRT (um só estado), juiz de TRF (6ª Região). Divisão pelo Provimento 102/2004, art. 1º, §§ 1º e 2º. org:oab: nota interna atualizada. Validação limpa
