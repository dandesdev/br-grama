---
id: f0-seguridade
escopo: "Fatia 0, lacunas da varredura: seguridade social (saúde, previdência, assistência), CF arts. 40, 194 a 204, 248 a 250; ADCT, art. 122"
status: coletada
depende_de: [f0-cobertura]
iniciada_em: 2026-10-23
concluida_em: 2026-10-23
---

## Entregáveis

- [x] SUS (arts. 198 e 200): `org:sistema-unico-de-saude` (tipo `sistema`), direção única em cada esfera (Ministério da Saúde, secretarias dos arquétipos), conselhos e conferências de saúde (Lei 8.142/1990), competências do art. 200 como relações ou nota, piso constitucional da saúde (art. 198, §§ 2º e 3º; LC 141/2012) como `obj:` do tipo `regra-fiscal`, Fundo Nacional de Saúde (tipo `fundo`) se ajudar.
- [x] Previdência: Regime Geral (art. 201) e o INSS como autarquia (`contido_em` ou vínculo com o Ministério da Previdência Social, conforme SIORG e lei); regime próprio dos servidores (art. 40), com a unidade gestora única (art. 40, § 20) como arquétipo; previdência complementar (art. 202) com o órgão regulador e fiscalizador federal, se a lei o criar.
- [x] Assistência social (arts. 203 e 204): Sistema Único de Assistência Social (Lei 8.742/1993), conselho nacional, fundo nacional.
- [x] Seguridade como conjunto (art. 194) e orçamento da seguridade (art. 165, § 5º, III), se não estiver no ciclo orçamentário: nota ou objeto.
- [x] Arts. 248 a 250 e ADCT, art. 122: classifique e modele só o que estrutura o Estado em 2026-10-01.
- [x] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário

- 2026-10-23 — iniciada; lidos CLAUDE.md, instruções, modelo, protocolo, decisões e o quadro do f0-cobertura (arts. 40, 194 a 204, 248 a 250; ADCT, art. 122)
- 2026-10-23 23:00 — gravado norma:lei-8080-1990, norma:lei-8142-1990, org:sistema-unico-de-saude
- 2026-10-23 23:02 — gravado norma:decreto-7508-2011, norma:decreto-5839-2006, org:arquetipo-estadual-secretaria-de-saude, org:arquetipo-municipal-secretaria-de-saude, rel:ministerio-da-saude-coordena-sus, rel:arquetipo-estadual-secretaria-de-saude-coordena-sus, rel:arquetipo-municipal-secretaria-de-saude-coordena-sus
- 2026-10-23 23:03 — gravado org:conselho-nacional-de-saude, org:arquetipo-estadual-conselho-de-saude, org:arquetipo-municipal-conselho-de-saude, org:conferencias-de-saude, org:comissao-intergestores-tripartite, org:arquetipo-estadual-comissao-intergestores-bipartite
- 2026-10-23 23:05 — gravado norma:lc-141-2012, obj:piso-constitucional-da-saude, obj:fundo-nacional-de-saude, rel:conselho-nacional-de-saude-fiscaliza-fundo-nacional-de-saude, rel:uniao-repassa-recursos-saude-estados, rel:uniao-repassa-recursos-saude-municipios, rel:estados-repassam-recursos-saude-municipios
- 2026-10-23 23:07 — gravado norma:lei-9782-1999, org:anvisa, rel:anvisa-integra-sus; org:anvisa criado aqui (art. 200); f0-administracao-indireta pode referenciar sem recriar
- 2026-10-23 23:07 — gravado rel:conselho-nacional-de-saude-integra-sus, rel:arquetipo-estadual-conselho-de-saude-integra-sus, rel:arquetipo-municipal-conselho-de-saude-integra-sus, rel:conferencias-de-saude-integra-sus, rel:comissao-intergestores-tripartite-integra-sus, rel:arquetipo-estadual-comissao-intergestores-bipartite-integra-sus
- 2026-10-23 23:10 — gravado norma:lei-8213-1991, norma:lei-8029-1990, norma:decreto-10995-2022, org:inss, org:conselho-nacional-de-previdencia-social, org:conselho-de-recursos-da-previdencia-social, rel:crps-julga-recursos-contra-inss, obj:fundo-do-regime-geral-de-previdencia-social
- 2026-10-23 23:12 — gravado norma:lei-9717-1998, norma:ec-103-2019, norma:decreto-10620-2021, org:arquetipo-estadual-unidade-gestora-do-rpps, org:arquetipo-municipal-unidade-gestora-do-rpps, rel:ministerio-da-previdencia-social-regula-rpps-estaduais, rel:ministerio-da-previdencia-social-regula-rpps-municipais
- 2026-10-23 23:14 — gravado norma:lc-109-2001, norma:lc-108-2001, norma:lei-12154-2009, norma:lei-12618-2012, norma:decreto-7808-2012, org:previc, org:conselho-nacional-de-previdencia-complementar, org:funpresp-exe, rel:previc-fiscaliza-funpresp-exe
- 2026-10-23 23:16 — gravado norma:lei-8742-1993, org:sistema-unico-de-assistencia-social, rel:mds-coordena-suas, org:conselho-nacional-de-assistencia-social, org:arquetipo-estadual-conselho-de-assistencia-social, org:arquetipo-municipal-conselho-de-assistencia-social, obj:fundo-nacional-de-assistencia-social, rel:cnas-fiscaliza-fundo-nacional-de-assistencia-social, rel:cnas-integra-suas, rel:arquetipo-estadual-conselho-de-assistencia-social-integra-suas, rel:arquetipo-municipal-conselho-de-assistencia-social-integra-suas, rel:uniao-repassa-recursos-assistencia-social-estados, rel:uniao-repassa-recursos-assistencia-social-municipios, rel:estados-repassam-recursos-assistencia-social-municipios
- 2026-10-23 — art. 194, caput, acrescentado às fontes de org:sistema-unico-de-saude, org:sistema-unico-de-assistencia-social e org:inss (seguridade como conjunto sem nó próprio, como propôs f0-cobertura)
- 2026-10-23 — cobertura por artigo:
  - art. 40: coberto (regime próprio: org:arquetipo-estadual-unidade-gestora-do-rpps e org:arquetipo-municipal-unidade-gestora-do-rpps, §§ 20 e 22; fiscalização pela União em rel:ministerio-da-previdencia-social-regula-rpps-*; previdência complementar dos servidores, §§ 14 a 16, em org:funpresp-exe). Na União não há unidade gestora única: Decreto 10.620/2021 reparte a gestão entre Sipec e INSS até lei própria, centralização suspensa até 31/12/2026 (nota nos arquétipos)
  - art. 194: coberto sem nó próprio (decisão de f0-cobertura): citado em SUS, Suas e INSS; gestão quadripartite (VII) em org:conselho-nacional-de-previdencia-social
  - art. 195: já coberto (tributos); § 2º (orçamento da seguridade) continua em obj:loa (art. 165, § 5º, III); § 10 (repasses ao SUS e à assistência) citado nas relações repassa-recursos e nos fundos
  - arts. 196 e 197: fora (direito à saúde, relevância pública)
  - art. 198: coberto (org:sistema-unico-de-saude, direção única por esfera em rel:*-coordena-sus, secretarias de saúde dos arquétipos, conselhos e conferências, CIT e CIB, obj:piso-constitucional-da-saude, obj:fundo-nacional-de-saude). §§ 4º a 15 (agentes comunitários, pisos salariais da enfermagem) não modelados: regras de pessoal, propostas no relatório
  - art. 199: fora, exceto § 1º (participação complementar privada), citado no SUS
  - art. 200: coberto como nota no SUS e por org:anvisa (I, II, VI, VII) com rel:anvisa-integra-sus
  - art. 201: coberto por org:inss (opera o Regime Geral; sem nó próprio para o regime), CNPS e CRPS
  - art. 202: coberto (org:previc, org:conselho-nacional-de-previdencia-complementar, org:funpresp-exe, rel:previc-fiscaliza-funpresp-exe; LC 108 e 109/2001)
  - art. 203: fora (objetivos; o BPC do inciso V aparece nos detalhes do INSS e do Suas)
  - art. 204: coberto (org:sistema-unico-de-assistencia-social, rel:mds-coordena-suas, CNAS e conselhos dos arquétipos, obj:fundo-nacional-de-assistencia-social, repasses). Parágrafo único (vinculação facultativa de 0,5% da receita estadual) não modelado
  - art. 248: coberto (citado em org:inss)
  - art. 249: coberto (fundos previdenciários nos detalhes e fontes das unidades gestoras dos arquétipos; sem nó próprio)
  - art. 250: coberto (obj:fundo-do-regime-geral-de-previdencia-social, LRF art. 68)
  - ADCT, art. 122: transitório esgotado (transferências da Covid-19 até 31/12/2023); anotado em notas do FNS e do FNAS
- 2026-10-23 — rodado npm run -s cobertura (regera pesquisa/cobertura-cf.md, 201 de 411 citados); dos artigos do escopo só 196, 197 e ADCT 122 seguem sem citação, como esperado
- 2026-10-23 — validação sem erros nos arquivos desta tarefa (os 3 erros vistos durante a coleta eram de normas de outra tarefa: lc-220-2025, lei-15388-2026, lei-9131-1995). Coletada
