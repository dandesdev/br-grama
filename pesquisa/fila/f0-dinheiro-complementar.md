---
id: f0-dinheiro-complementar
escopo: "Fatia 0, lacunas da varredura e pendências: dinheiro e regras fiscais, CF arts. 146, 163-A, 166, § 8º, 167, 167-A a 167-G, 239, 240; ADCT, arts. 40, 62, 76 a 76-B, 79 a 82, 92 a 92-B, 132, 138"
status: em-andamento
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: null
---

## Entregáveis

- [ ] Créditos adicionais (art. 166, § 8º; art. 167, V; Lei 4.320/1964) como `obj:` e, se ajudar, etapa no ciclo orçamentário.
- [ ] Calamidade pública nacional (arts. 167-B a 167-G): `obj:` e `proc:` curto.
- [ ] Mecanismo de ajuste fiscal (art. 167-A) e Desvinculação de Receitas (ADCT, arts. 76 a 76-B) como `regra-fiscal`.
- [ ] Simples Nacional (art. 146, parágrafo único; LC 123/2006) com o seu comitê gestor.
- [ ] FAT e BNDES (art. 239; Lei 7.998/1990): `obj:fundo-de-amparo-ao-trabalhador` (tipo `fundo`), `org:bndes` (empresa pública) e o adicional por rotatividade (art. 239, § 4º).
- [ ] Sistema S (art. 240): as entidades como conjunto paraestatal (fronteira, D05) e a contribuição.
- [ ] Fundos de combate à pobreza (ADCT, arts. 79 a 82) e Zona Franca de Manaus (ADCT, arts. 40, 92 a 92-B), se vigentes em 2026-10-01.
- [ ] Pendências de f0-dinheiro: bancadas estaduais como proponentes da emenda de bancada; ADI 8010 (LC 200/2023); presidente do Comitê Gestor do IBS em 2026-10-01; verbo para "propõe a exoneração" (proponha se fizer falta).
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
- 2026-10-23 23:19 — iniciada; lendo instruções, decisões, cobertura e diários de f0-dinheiro
- 2026-10-23 23:25 — gravados norma:lei-4320-1964, obj:credito-adicional, rel:cmo-delibera-credito-adicional, rel:congresso-delibera-credito-adicional, rel:presidente-edita-credito-adicional (cópias das leis em pesquisa/brutos/planalto-leis/2026-10-23-dinheiro/)
- 2026-10-23 23:25 — complementado proc:ciclo-orcamentario (de f0-dinheiro, já verificado): etapa nova creditos-adicionais depois de execucao (volta a execucao), seguintes de execucao com 'quando', nota (3) atualizada; verificacao volta a coletado
- 2026-10-23 23:26 — gravados norma:ec-109-2021, obj:estado-de-calamidade-publica-nacional, rel:presidente-propoe-estado-de-calamidade-publica-nacional, rel:congresso-delibera-estado-de-calamidade-publica-nacional, proc:calamidade-publica-nacional (remete_a proc:decreto-legislativo, ainda não criado por f0-processos-legislativos)
