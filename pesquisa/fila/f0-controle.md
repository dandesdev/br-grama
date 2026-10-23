---
id: f0-controle
escopo: "Fatia 0: controle externo e interno (CF, arts. 70 a 75) e os 27 tribunais de contas estaduais e do DF"
status: em-andamento
depende_de: []
iniciada_em: 2026-10-22
concluida_em: null
---

## Entregáveis

- [ ] TCU completo (`org:tcu` e `cargo:ministro-do-tcu` já existem e foram revisados; complete sem desfazer): todas as competências do art. 71 que faltam, como relações para objetos ou órgãos (julgar contas dos administradores, registrar admissões e aposentadorias, fazer inspeções e auditorias, aplicar sanções, sustar atos, representar ao Poder competente), sustação de contratos (art. 71, §§ 1º e 2º), eficácia de título executivo (§ 3º)
- [ ] Controle interno (art. 74): o sistema de controle interno de cada Poder e a CGU (`org:cgu`, conforme a Lei 14.600/2023), com `cargo:ministro-da-cgu` só se a lei o tratar como ministro (confira; pode ser `cargo:ministro-de-estado` com a pasta indicada)
- [ ] Denúncia de irregularidades ao TCU por qualquer cidadão, partido, associação ou sindicato (art. 74, § 2º)
- [ ] Os 27 tribunais de contas estaduais e do DF reais (`org:tce-<uf>`; para o DF, `org:tc-df`), com nome oficial, sede e site, e a variação de cada um em relação a `org:arquetipo-estadual-tce`, se houver. A EC 139/2026 alterou o art. 75: registre o efeito dela.
- [ ] Composição dos tribunais de contas estaduais (art. 75, parágrafo único: sete conselheiros) e a forma de escolha (Súmula 653 do STF, como fonte secundária de interpretação, se usada)
- [ ] Objetos de competência necessários (`obj:contas-de-gestao`, `obj:ato-de-admissao-de-pessoal` etc.), com fonte

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-executivo: `org:casa-civil`, ministérios `org:ministerio-*`
- Já existem: `org:arquetipo-estadual-tce`, os tribunais de contas municipais e dos municípios (`org:tcm-*`), `obj:contas-anuais-do-presidente-da-republica`, `obj:contas-anuais-do-prefeito`

## Diário
- 2026-10-22 15:00 — iniciada; lidos instruções, decisões, modelo, protocolo
- 2026-10-22 15:08 — lidos CF arts. 70 a 75 (cópia local) e EC 139/2026 (cópia local emc139.htm); gravado obj:contas-de-gestao
- 2026-10-22 15:22 — gravados obj:ato-de-admissao-de-pessoal, obj:concessao-de-aposentadoria-reforma-e-pensao, obj:ato-administrativo, obj:contrato-administrativo, obj:sancao-de-tribunal-de-contas; rel:tcu-julga-contas-de-gestao, rel:tcu-aprecia-admissao-de-pessoal, rel:tcu-aprecia-aposentadorias-e-pensoes, rel:tcu-aplica-sancoes, rel:tcu-susta-ato-administrativo, rel:congresso-susta-contrato, rel:tcu-decide-sobre-contrato (art. 71, II, III, VIII a X, §§ 1º a 3º). Vocabulário: faltam termos para *apreciar para registro* e *aplicar sanção*; usado julga
- 2026-10-22 15:27 — gravados obj:contas-nacionais-de-empresas-supranacionais, obj:recursos-federais-repassados-por-convenio, rel:tcu-fiscaliza-empresas-supranacionais, rel:tcu-fiscaliza-recursos-repassados (art. 71, V e VI). Art. 71, IV, VII e § 4º já cobertos por rel:tcu-fiscaliza-uniao e rel:tcu-auxilia-congresso (piloto); não dupliquei. Art. 71, XI (representar ao Poder competente): sem termo no vocabulário; não criado, proposto no relatório
- 2026-10-23 09:10 — retomada após renovação da cota (checkpoint 80e6b93). Sites dos 27 TCs baixados em 2026-10-22 (pesquisa/brutos/tces/2026-10-22/). Gravados, com nome, sede e site conferidos na página inicial de cada tribunal: org:tce-al, tce-am, tce-ap, tce-ba, tc-df, tce-es, tce-go, tce-ma, tce-mg, tce-pb, tce-pe, tce-pi, tce-pr, tce-rn, tce-ro, tce-se, tce-sp, e as fontes fonte:<id>-portal de cada um (arquivo do Wayback ainda null: API do Wayback devolveu 429). Faltam AC, CE, MS, MT, PA, RJ, RR, RS, SC, TO (site bloqueado, vazio ou sem nome/endereço na página inicial)
- 2026-10-23 09:40 — retomada (checkpoint 8dd57b7). Gravados org:tce-ce, tce-ms, tce-rj, tce-rr, tce-sc, tce-to e fontes; nome, sede e site conferidos na página inicial e numa página interna de cada site (Apresentação, Institucional, Atribuições/Localização, Contato, Contatos; cópias em pesquisa/brutos/tces/2026-10-22/). RR: sede Boa Vista deduzida do endereço da Ouvidoria na mesma página (nota no arquivo). SC: nome completo só nos títulos da Lei Orgânica e do Regimento ligados na página inicial. Faltam AC, MT, PA, RS
- 2026-10-23 15:40 — gravados org:tce-ac, tce-mt, tce-pa, tce-rs e fontes; com isso os 27 tribunais (26 TCEs + org:tc-df) estão em disco. MT: site rejeita acesso automatizado e monta o rodapé por JS; endereço tirado de fonte:tce-mt-carta-de-servicos-2019 (publicação do próprio TCE-MT, lida na cópia do Wayback; texto em brutos). AC: cidade no link do mapa da página Contatos. Variações: as já existentes (BA, GO, PA com TCM; capitais SP e RJ; CE e MA históricos) cobrem as diferenças em relação ao arquétipo; nenhuma nova encontrada
- 2026-10-23 15:55 — gravados fonte:stf-sumula-653 (enunciado lido no portal do STF; cópia em pesquisa/brutos/stf/2026-10-23/) e cargo:arquetipo-estadual-conselheiro-do-tce (7 vagas; 4 Assembleia, 2 técnicas e 1 livre do Governador; provimento_casos com confiança secundario pela Súmula). LC 152/2015, art. 2º, V, conferido no Planalto. Vocabulário: falta provimento para nomeação com aprovação do Legislativo estadual; usado nomeacao-livre
- 2026-10-23 16:20 — composição do TCU em 2026-10-01 (não havia no piloto): gravados fonte:tcu-autoridades, fonte:tcu-curriculos-ministros, 5 fontes de notícias de posse (Pacheco 30/9/2026, Odair Cunha 20/5/2026, Jhonatan 15/3/2023, Anastasia 3/2/2022, Jorge Oliveira 31/12/2020); pessoas vital-do-rego, jorge-oliveira, walton-alencar-rodrigues, benjamin-zymler, augusto-nardes, antonio-anastasia, jhonatan-de-jesus, odair-cunha, rodrigo-pacheco, cada uma com rel:<pessoa>-ocupa-ministro-do-tcu. Aroldo Cedraz e Bruno Dantas saíram antes de 2026-10-01 (cópia do Wayback de 16/2/2026 ainda os lista; despedida de Dantas em 2/9/2026). Datas de posse de Vital (2014) e Zymler (2001) só com o ano (incerta)
- 2026-10-23 16:45 — gravado proc:denuncia-ao-tcu (art. 74, § 2º; Lei 8.443/1992, arts. 53 a 55). norma:lei-8443-1992 já existia (criada pela f0-funcoes-essenciais): reutilizada, meu rascunho descartado. org:mp-junto-ao-tcu também já existe (f0-funcoes-essenciais); não criei
- 2026-10-23 17:00 — gravados fonte:tcu-noticia-eleicao-presidencia-2025, fonte:tcu-noticia-reeleicao-presidencia-2026, cargo:presidente-do-tcu (Lei 8.443, art. 69), rel:vital-do-rego-ocupa-presidente-do-tcu (2025-01-01 a 2026-12-31), cargo:ministro-substituto-do-tcu (CF art. 73, § 4º; Lei 8.443, arts. 63, 77 a 79) e rel:ministro-substituto-substitui-ministro-do-tcu
