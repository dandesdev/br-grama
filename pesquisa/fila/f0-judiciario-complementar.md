---
id: f0-judiciario-complementar
escopo: "Fatia 0, lacunas da varredura e pendências: organização judiciária complementar, precatórios e funções essenciais, CF arts. 5º, XXXVIII; 98; 100; 105; 108; 111-A; 129, VII; 130; ADCT, arts. 87, 101 a 105, 107-A"
status: pendente
depende_de: [f0-cobertura]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Tribunal do júri (art. 5º, XXXVIII), juizados especiais e turmas recursais (art. 98, I; Leis 9.099/1995, 10.259/2001, 12.153/2009) e justiça de paz (art. 98, II), com cargos agregados quando couber.
- [ ] Órgãos que hoje só aparecem no texto: ENFAM e Conselho da Justiça Federal (art. 105, parágrafo único), ENAMAT e CSJT (art. 111-A, § 2º).
- [ ] Competências que faltam: TRF julga recursos dos juízes federais e julga juízes federais e membros do MPU (art. 108); STJ julga conselheiros dos tribunais de contas estaduais e membros do MPU que oficiam perante tribunais, incluindo os Procuradores Regionais Eleitorais (art. 105, I, a). Sem nó único para os TRFs: decida (conjunto ou relação por TRF) e justifique.
- [ ] Precatórios (art. 100; ADCT, arts. 101 a 105 e 107-A): `obj:precatorio` e `proc:pagamento-de-precatorio`, com o regime especial vigente em 2026-10-01.
- [ ] Controle externo da atividade policial pelo MP (art. 129, VII) e MPs de contas estaduais (art. 130).
- [ ] Pendências do Judiciário: quem nomeia o quinto constitucional do TJDFT; alterações do RISTJ depois da ER 47/2024; `rel:stm-julga-recursos-da-justica-militar-da-uniao` deve citar também a lei de organização da Justiça Militar.
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
