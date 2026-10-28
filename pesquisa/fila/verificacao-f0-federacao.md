---
id: verificacao-f0-federacao
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-federacao\""
status: em-andamento
depende_de: [f0-federacao]
iniciada_em: 2026-10-27
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-federacao"` conferidas contra a fonte: 6 órgãos (Sudam, Sudene, Sudeco, cartórios, órgãos de trânsito dos arquétipos), 16 relações, 14 normas, 7 fontes, 3 objetos, 1 aviso, 2 variações e 3 processos (`proc:intervencao-estadual`, `proc:alteracao-territorial-de-estados`, `proc:lei-municipal`, etapa por etapa, com os `remete_a`).
- [ ] Termo criado depois da coleta (aplique): `tipo_objeto: "receita"` em `obj:compensacao-financeira-recursos-naturais` (hoje `fundo`, `inferido`; o STF trata o royalty como receita patrimonial originária, ADI 4.606). As entidades que você criar recebem `verificacao.status: "coletado"`, com `tarefa: "verificacao-f0-federacao"`.
- [ ] Pontos do coletor a conferir:
  - intervenção estadual: quem representa em cada inciso do art. 35 (Câmara Municipal nos incisos I a III? PGJ ao TJ no IV) e a base de cada um; Súmula 637 e ADIs 336, 2.631 e 7.369; BA e PA com o TCM
  - royalties do petróleo: liminar da ADI 4.917 (18/3/2013) suspendendo a Lei 12.734/2012; estado do julgamento em 2026-10-01
  - simetria do processo legislativo municipal (RE 590.829, Tema 223; Tema 917) e as leis orgânicas de SP e do Rio usadas (compiladas só até 2008 e 2009: há versão mais nova?)
  - superintendências pela D39: `contido_em` no Poder Executivo federal (`inferido`) e `vincula-se` ao Ministério da Integração (LCs 124, 125 e 129; Decreto 12.504/2025)
  - `aviso:pr-carreira-especial-de-advogado-do-estado-situacao` (lacuna): procure fonte oficial do Paraná sobre a carreira em extinção
  - datas incertas: Lei 10.257/2001, CTB e efeitos da EC 69/2012
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
- 2026-10-27 — iniciada; lidos instruções, docs, diário de f0-federacao; 52 entidades no escopo
- 2026-10-27 21:20 — proc:intervencao-estadual verificado (CF arts. 35 e 36; Lei 8.625/1993, arts. 25, II, e 29, II; STF art. 35; CEs de SP, BA, PA, GO lidas nas cópias locais). Pontos: Câmara representa nos incisos I a III (ADI 614 MC, ADI 2.631; GO art. 61, § 1º, I; PA art. 85, I, com a parte do TCM derrubada); BA ainda dá ao TCM (art. 65, § 1º, I; art. 95, II, a), sem decisão do STF na página; PGJ no IV (Lei 8.625, art. 29, II). Súmula 637, ADIs 336, 2.631 e 7.369 conferidas. Correções: (1) etapa execucao dizia que no PA o interventor presta contas ao governador e aos órgãos de fiscalização; o PA (art. 85, § 5º, EC 18/2001) manda relatório à Assembleia, via governador, com parecer do TCM; (2) assembleia-aprecia: GO também prevê suspender (art. 11, III); (3) representacao-ao-tj: acrescentado que no descumprimento de ordem judicial o pedido pode vir da parte (Pet 1.256) e que em GO o TJ requisita direto (art. 61, § 1º, II)
- 2026-10-27 21:21 — 7 fontes verificadas contra as cópias locais do STF (arts. 18, 20, 35, 132, 182, 236 e ADI 4.917). Correções: fonte:stf-constituicao-e-o-supremo-art-132, a nota dizia que a página do ADCT 69 não trouxe julgados; a cópia é um erro 404. fonte:stf-adi-4917: resumo diz 'liminar monocrática' e 'mérito não julgado'; notas acrescentam que a liminar foi ad referendum (sem referendo registrado) e que o texto dela atribui os arts. 42-B e 42-C à Lei 9.478, quando são da Lei 12.351/2010 (voto da relatora, 7/5/2026). Ponto ADI 4.917 resolvido: liminar de 18/3/2013 em vigor e mérito pendente em 2026-10-01 (vista devolvida em 10/9/2026)
- 2026-10-27 21:21 — proc:alteracao-territorial-de-estados verificado sem correções (CF arts. 18, § 3º, 48, caput e VI, 49, XV; Lei 9.709/1998, arts. 3º, 4º, 7º a 10 e 15; ADI 2.650; ADCT arts. 13 e 14)
