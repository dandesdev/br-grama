---
id: verificacao-f0-dinheiro-complementar
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-dinheiro-complementar\""
status: pendente
depende_de: [f0-dinheiro-complementar]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-dinheiro-complementar"` conferidas contra a fonte: 2 processos (`proc:calamidade-publica-nacional` e `proc:ciclo-orcamentario`, etapa por etapa, com o `remete_a` novo da etapa `decretacao`), 6 órgãos (bancadas estaduais, BNDES, Codefat, Comitê Gestor do Simples Nacional, Sistema S, Suframa), 16 objetos, 18 relações, 17 normas, 2 fontes, 1 cargo (`cargo:presidente-do-cgibs`), 1 pessoa e 1 aviso. Inclui as entidades de f0-dinheiro que a coleta reabriu (`obj:tributo-ibs`, `obj:regime-fiscal-sustentavel`, `obj:emenda-de-bancada-ao-orcamento`).
- [ ] Termos criados depois da coleta (aplique). As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-dinheiro-complementar"`:
  - relação `gere` (administra um fundo): troque `rel:codefat-delibera-fat` por `gere` se a Lei 7.998/1990 disser "gerir" (renomeie o arquivo e o id). Veja se cabe `gere` para o fundo de combate à pobreza, hoje só com `relativo_a`.
  - relação `propoe-exoneracao`: aplique em `rel:cmn-propoe-exoneracao-presidente-do-banco-central` (hoje `propoe`; é de verificacao-f0-dinheiro, mas pode editar só o campo `relacao`).
  - `tipo_objeto: "regime-tributario"`: aplique em `obj:simples-nacional` e `obj:zona-franca-de-manaus`, se o texto da norma sustentar.
- [ ] Pontos do coletor a conferir:
  - `aviso:contribuicao-adicional-por-rotatividade-sem-lei`: nenhuma lei criou a contribuição do art. 239, § 4º (a única pista foi o PLS 173/2015, arquivado em 21/12/2018). Confirme.
  - `rel:uniao-competencia-tributo-contribuicoes-ao-sistema-s` está `inferido`: procure base que a sustente.
  - ADI 8010 (regime fiscal sustentável): sem decisão até 2026-10-01; uma notícia não oficial fala de liminar em 5/10/2026, depois da data de referência. O portal do STF não abriu: confirme.
  - Mandato do presidente do CGIBS termina em 31/3/2027, menos que os 2 anos da LC 227/2026, art. 16; a portaria cita a LC 214/2025. Confira a base da nomeação e o prazo.
  - `rel:fat-repassa-recursos-bndes` tem o fundo (`obj:`) como `de`, porque a lei não diz quem repassa. Se a norma disser, troque o `de`.
  - `org:sistema-s` como `paraestatal`, `nao-estatal`: confira contra o vocabulário (o precedente para grupos é `conjunto`, usado nos cartórios).
  - Não pesquisados: estatuto atual do BNDES (o decreto antigo foi revogado), Sest/Senat/Sescoop (Lei 8.706/1993), o conselho consultivo do fundo de combate à pobreza e o fundo de sustentabilidade do Amazonas (ADCT, art. 92-B, § 2º). Pesquise o que couber.
  - Art. 167: só os incisos III e V estão cobertos; as demais vedações ficam como detalhe.
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
