---
id: f0-seguridade
escopo: "Fatia 0, lacunas da varredura: seguridade social (saúde, previdência, assistência), CF arts. 40, 194 a 204, 248 a 250; ADCT, art. 122"
status: pendente
depende_de: [f0-cobertura]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] SUS (arts. 198 e 200): `org:sistema-unico-de-saude` (tipo `sistema`), direção única em cada esfera (Ministério da Saúde, secretarias dos arquétipos), conselhos e conferências de saúde (Lei 8.142/1990), competências do art. 200 como relações ou nota, piso constitucional da saúde (art. 198, §§ 2º e 3º; LC 141/2012) como `obj:` do tipo `regra-fiscal`, Fundo Nacional de Saúde (tipo `fundo`) se ajudar.
- [ ] Previdência: Regime Geral (art. 201) e o INSS como autarquia (`contido_em` ou vínculo com o Ministério da Previdência Social, conforme SIORG e lei); regime próprio dos servidores (art. 40), com a unidade gestora única (art. 40, § 20) como arquétipo; previdência complementar (art. 202) com o órgão regulador e fiscalizador federal, se a lei o criar.
- [ ] Assistência social (arts. 203 e 204): Sistema Único de Assistência Social (Lei 8.742/1993), conselho nacional, fundo nacional.
- [ ] Seguridade como conjunto (art. 194) e orçamento da seguridade (art. 165, § 5º, III), se não estiver no ciclo orçamentário: nota ou objeto.
- [ ] Arts. 248 a 250 e ADCT, art. 122: classifique e modele só o que estrutura o Estado em 2026-10-01.
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
