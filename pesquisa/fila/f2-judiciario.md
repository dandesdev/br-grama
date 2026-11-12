---
id: f2-judiciario
escopo: "Fase 2 (D49): leis de organização do Judiciário da União e regimentos do STF e do STJ"
status: em-andamento
depende_de: [f0-judiciario, f0-judiciario-complementar]
iniciada_em: 2026-11-11
concluida_em: null
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Normas

- LC 35/1979 (Lei Orgânica da Magistratura Nacional, LOMAN): crie a norma se não existir
- Lei 5.010/1966 (organização da Justiça Federal de primeira instância) e Lei 10.259/2001 (juizados especiais federais)
- Lei 8.457/1992 (organização da Justiça Militar da União)
- CLT, arts. 643 a 735 (organização da Justiça do Trabalho): `norma:decreto-lei-5452-1943`; só esses artigos
- Código Eleitoral, arts. 12 a 41 (órgãos da Justiça Eleitoral): `norma:lei-4737-1965`; só esses artigos (o resto fica com `f2-eleicoes`)
- Lei 11.697/2008 (organização judiciária do DF e dos territórios)
- Regimentos internos do STF (`norma:ristf`) e do STJ: só a estrutura (Plenário, Turmas, Seções, Corte Especial, Presidência, comissões permanentes)

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada norma (seção "Cobertura"; para CLT e Código Eleitoral, só os artigos listados).
- [ ] LOMAN: órgãos e regras que valem para todos os tribunais (órgão especial, Conselho da Magistratura onde a lei prevê, escolha de dirigentes dos tribunais); cargos de juiz substituto e juiz titular no nível da lei, agregados; vitaliciamento.
- [ ] Justiça Federal, Militar, do Trabalho e Eleitoral: órgãos de primeira instância (varas federais, juizados especiais federais, auditorias militares e Conselhos de Justiça, varas do trabalho, zonas e juízes eleitorais) como `org:` agregados dentro do ramo, com os cargos correspondentes; corregedorias dos tribunais superiores dos ramos.
- [ ] STF e STJ: Plenário, Turmas, Seções, Corte Especial e Presidência como órgãos internos; quem julga o quê fica nas relações já existentes (procure em `dados/relacoes/`), só acrescente a fonte regimental quando ela detalhar.
- [ ] TJDFT (Lei 11.697): estrutura no nível da lei.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: todos os tribunais (`org:stf`, `org:stj`, `org:tst`, `org:tse`, `org:stm`, `org:trf-1` a `org:trf-6`, `org:trt-1` a `org:trt-24`, `org:tre-*`, `org:tj-df`), `org:juizados-especiais-federais`, `org:turmas-recursais-federais`, `org:juntas-eleitorais`, `org:conselho-da-justica-federal`, `org:csjt`, `org:enfam`, `org:enamat`.
- Em paralelo: `f2-eleicoes` (resto do Código Eleitoral, Lei 9.504, Lei 9.096) e `f2-financas-publicas`.

## Cobertura

## Diário

- 2026-11-11 — iniciada; lidos CLAUDE.md, instruções (com a Fase 2), D01 a D51, modelo de dados, protocolo e os quadros de f2-funcoes-essenciais e f2-legislativo-tcu
- 2026-11-11 22:45 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-judiciario/ (Invoke-WebRequest; o curl teve a conexão resetada pelo Planalto): lcp35.htm (última alteração citada: LC 60/1989), l5010.htm (Lei 13.876/2019), l10259.htm (Lei 12.665/2012), l8457.htm (Lei 13.774/2018), del5452compilado.htm (CLT; nos arts. 643 a 735 a mais recente é a Lei 14.824/2024, que revogou o art. 709), l4737compilado.htm (Código Eleitoral; nos arts. 12 a 41 a mais recente é a Lei 14.211/2021, art. 23-A), l11697.htm (Lei 13.850/2019). As cópias de l10259, l11697 e l8457 só diferem das de outubro no script do servidor: nada mudou entre 2026-10-01 e hoje nesses artigos
- 2026-11-11 22:50 — RISTF: a API de atos normativos do STF não resolve (DNS) e o Wayback recusou o download (429); baixada a edição do site do STF em pesquisa/brutos/stf/2026-11-11-f2-judiciario/ristf-stf-arquivo-cms.pdf, "atualizado até a Emenda Regimental n. 58/2022". Falta a ER 59/2023 (18/12/2023), que segundo o Migalhas (7/12/2023, PADM 2) devolveu às Turmas as ações penais contra parlamentares, ministros de Estado e outros e extinguiu o revisor nas ações penais; por isso não acrescentamos o RISTF às relações de foro (quem julga crime comum). RISTJ: edição oficial da BDJur até a ER 54/2026 (bruto já existente em pesquisa/brutos/stj/2026-10-23/)
- 2026-11-11 22:52 — gravado norma:lc-35-1979
- 2026-11-11 22:52 — gravado norma:lei-5010-1966
- 2026-11-11 22:52 — gravado org:arquetipo-estadual-orgao-especial-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado org:arquetipo-estadual-conselho-da-magistratura
- 2026-11-11 22:52 — gravado org:arquetipo-estadual-camaras-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado org:arquetipo-estadual-comarcas
- 2026-11-11 22:52 — gravado cargo:arquetipo-estadual-presidente-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado cargo:arquetipo-estadual-vice-presidente-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado cargo:arquetipo-estadual-corregedor-da-justica
- 2026-11-11 22:52 — gravado rel:desembargadores-elegem-arquetipo-estadual-presidente-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado rel:desembargadores-elegem-arquetipo-estadual-vice-presidente-do-tribunal-de-justica
- 2026-11-11 22:52 — gravado rel:desembargadores-elegem-arquetipo-estadual-corregedor-da-justica
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-vice-presidente-do-tj-substitui-presidente-do-tj
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-presidente-do-tj-preside-orgao-especial
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-corregedor-da-justica-corrige-juiz-de-direito
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-conselho-da-magistratura-exerce-poder-disciplinar-sobre-juiz-de-direito
- 2026-11-11 22:52 — gravado rel:arquetipo-estadual-orgao-especial-exerce-poder-disciplinar-sobre-juiz-de-direito
- 2026-11-11 22:54 — gravado cargo:juiz-federal-substituto
- 2026-11-11 22:54 — gravado cargo:juiz-do-trabalho-substituto
- 2026-11-11 22:54 — gravado cargo:juiz-federal-substituto-da-justica-militar
- 2026-11-11 22:54 — gravado cargo:juiz-de-direito-substituto
- 2026-11-11 22:54 — editado cargo:juiz-federal (f2-judiciario: separado o juiz federal substituto (cargo próprio); provimento passou de concurso-publico a promocao; requisitos, resumo e notas reescritos; acrescentadas LOMAN e Lei 5.010)
- 2026-11-11 22:54 — editado cargo:juiz-do-trabalho (f2-judiciario: separado o juiz do trabalho substituto (cargo próprio); provimento passou de concurso-publico a promocao; requisitos, resumo e notas reescritos; acrescentadas CLT, art. 654, § 5º, e LOMAN)
- 2026-11-11 22:54 — editado cargo:juiz-federal-da-justica-militar (f2-judiciario: separado o substituto (cargo próprio); provimento passou de concurso-publico a promocao; requisitos, resumo e notas reescritos; acrescentados arts. 15, 16, 30, 35, 36 e 38 da Lei 8.457/1992)
- 2026-11-11 22:54 — editado cargo:juiz-de-direito (f2-judiciario: separado o juiz de direito substituto (cargo próprio); provimento passou de concurso-publico a variavel (concurso onde não há substitutos; promoção onde há); acrescentadas LOMAN, CLT (arts. 668 e 669) e Lei 11.697/2008)
- 2026-11-11 22:56 — gravado org:varas-federais
- 2026-11-11 22:56 — gravado cargo:coordenador-dos-juizados-especiais-federais
- 2026-11-11 22:56 — gravado rel:juizes-de-trf-elegem-coordenador-dos-juizados-especiais-federais
- 2026-11-11 22:56 — gravado rel:coordenador-dos-juizados-especiais-federais-coordena-juizados-especiais-federais
- 2026-11-11 22:56 — gravado org:corregedoria-geral-da-justica-federal
- 2026-11-11 22:56 — gravado cargo:corregedor-geral-da-justica-federal
- 2026-11-11 22:56 — gravado rel:corregedoria-geral-da-justica-federal-corrige-juiz-de-trf
- 2026-11-11 22:56 — gravado rel:corregedor-geral-da-justica-federal-preside-turma-nacional-de-uniformizacao
- 2026-11-11 22:56 — gravado org:varas-do-trabalho
- 2026-11-11 22:56 — gravado cargo:presidente-do-tst
- 2026-11-11 22:56 — gravado cargo:vice-presidente-do-tst
- 2026-11-11 22:56 — gravado org:corregedoria-geral-da-justica-do-trabalho
- 2026-11-11 22:56 — gravado cargo:corregedor-geral-da-justica-do-trabalho
- 2026-11-11 22:56 — gravado rel:ministros-do-tst-elegem-presidente-do-tst
- 2026-11-11 22:56 — gravado rel:ministros-do-tst-elegem-vice-presidente-do-tst
- 2026-11-11 22:56 — gravado rel:ministros-do-tst-elegem-corregedor-geral-da-justica-do-trabalho
- 2026-11-11 22:56 — gravado rel:vice-presidente-do-tst-substitui-presidente-do-tst
- 2026-11-11 22:56 — gravado rel:presidente-do-tst-preside-csjt
- 2026-11-11 22:56 — gravado rel:corregedoria-geral-da-justica-do-trabalho-corrige-juiz-de-trt
- 2026-11-11 22:56 — gravado cargo:presidente-de-trt
- 2026-11-11 22:56 — gravado rel:juizes-de-trt-elegem-presidente-de-trt
- 2026-11-11 22:56 — gravado rel:presidente-de-trt-integra-csjt
- 2026-11-11 22:56 — gravado cargo:presidente-de-trf
- 2026-11-11 22:56 — gravado rel:juizes-de-trf-elegem-presidente-de-trf
- 2026-11-11 22:56 — gravado rel:presidente-de-trf-integra-conselho-da-justica-federal
- 2026-11-11 22:57 — gravado org:auditorias-da-justica-militar
- 2026-11-11 22:57 — gravado org:conselhos-especiais-de-justica
- 2026-11-11 22:57 — gravado org:conselhos-permanentes-de-justica
- 2026-11-11 22:57 — gravado cargo:juiz-militar-dos-conselhos-de-justica
- 2026-11-11 22:57 — gravado rel:juiz-federal-da-justica-militar-preside-conselhos-especiais-de-justica
- 2026-11-11 22:57 — gravado rel:juiz-federal-da-justica-militar-preside-conselhos-permanentes-de-justica
- 2026-11-11 22:57 — gravado org:corregedoria-da-justica-militar
- 2026-11-11 22:57 — gravado cargo:presidente-do-stm
- 2026-11-11 22:57 — gravado cargo:vice-presidente-do-stm
- 2026-11-11 22:57 — gravado cargo:juiz-corregedor-auxiliar
- 2026-11-11 22:57 — gravado rel:ministros-do-stm-elegem-presidente-do-stm
- 2026-11-11 22:57 — gravado rel:ministros-do-stm-elegem-vice-presidente-do-stm
- 2026-11-11 22:57 — gravado rel:vice-presidente-do-stm-substitui-presidente-do-stm
- 2026-11-11 22:57 — gravado rel:vice-presidente-do-stm-dirige-corregedoria-da-justica-militar
- 2026-11-11 22:57 — gravado rel:stm-elege-juiz-corregedor-auxiliar
- 2026-11-11 22:57 — gravado rel:juiz-corregedor-auxiliar-substitui-vice-presidente-do-stm
- 2026-11-11 22:57 — gravado rel:corregedoria-da-justica-militar-corrige-juiz-federal-da-justica-militar
- 2026-11-11 22:57 — gravado rel:stm-nomeia-juiz-federal-substituto-da-justica-militar
- 2026-11-11 22:57 — editado org:stm (f2-judiciario: acrescentados ao detalhes Turmas, Conselho de Administração e quórum (Lei 8.457/1992, arts. 3º, 4º e 6º, § 4º))
- 2026-11-11 22:57 — editado org:justica-do-trabalho (f2-judiciario: acrescentados ao detalhes a coordenação pelo Presidente do TST e a divisão Pleno/Turmas dos TRTs (CLT, arts. 643 a 646 e 678 a 680))
- 2026-11-11 22:57 — editado org:tst (f2-judiciario: acrescentados ao detalhes o funcionamento em Pleno e Turmas e a competência do Pleno para súmulas e regimento (CLT, arts. 690 e 702))
- 2026-11-11 23:00 — gravado org:zonas-eleitorais
- 2026-11-11 23:00 — gravado org:corregedoria-geral-eleitoral
- 2026-11-11 23:00 — gravado cargo:presidente-do-tse
- 2026-11-11 23:00 — gravado cargo:vice-presidente-do-tse
- 2026-11-11 23:00 — gravado cargo:corregedor-geral-eleitoral
- 2026-11-11 23:00 — gravado rel:ministros-do-tse-elegem-presidente-do-tse
- 2026-11-11 23:00 — gravado rel:ministros-do-tse-elegem-vice-presidente-do-tse
- 2026-11-11 23:00 — gravado rel:ministros-do-tse-elegem-corregedor-geral-eleitoral
- 2026-11-11 23:00 — gravado rel:corregedoria-geral-eleitoral-corrige-justica-eleitoral
- 2026-11-11 23:00 — gravado aviso:corregedor-regional-eleitoral-terceiro-desembargador
- 2026-11-11 23:00 — editado org:justica-eleitoral (f2-judiciario: acrescentadas ao detalhes as competências dos TREs (Código Eleitoral, arts. 12, 29 e 30))
- 2026-11-11 23:00 — editado org:tse (f2-judiciario: acrescentadas ao detalhes as competências do TSE no Código Eleitoral (arts. 12, 13, 16, 19, 22, 23 e 23-A))
- 2026-11-11 23:00 — editado cargo:juiz-de-tre (f2-judiciario: acrescentados ao detalhes o aumento até nove juízes e regras do biênio (Código Eleitoral, arts. 13 a 15 e 25))
- 2026-11-11 23:00 — editado cargo:ministro-do-tse (f2-judiciario: acrescentados os arts. 14 a 16 do Código Eleitoral às fontes e nota sobre o TFR)
- 2026-11-11 23:00 — gravado org:conselho-especial-do-tjdft
- 2026-11-11 23:00 — gravado org:conselho-da-magistratura-do-tjdft
- 2026-11-11 23:00 — gravado org:corregedoria-da-justica-do-df
- 2026-11-11 23:00 — gravado org:ouvidoria-geral-da-justica-do-df
- 2026-11-11 23:00 — gravado org:instituto-de-formacao-do-tjdft
- 2026-11-11 23:00 — gravado org:varas-do-df
- 2026-11-11 23:00 — gravado org:auditoria-militar-do-df
- 2026-11-11 23:00 — gravado cargo:presidente-do-tjdft
- 2026-11-11 23:00 — gravado cargo:primeiro-vice-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:primeiro-vice-presidente-do-tjdft-substitui-presidente-do-tjdft
- 2026-11-11 23:00 — gravado cargo:segundo-vice-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:segundo-vice-presidente-do-tjdft-substitui-presidente-do-tjdft
- 2026-11-11 23:00 — gravado cargo:corregedor-da-justica-do-df
- 2026-11-11 23:00 — gravado rel:tj-df-elege-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:tj-df-elege-primeiro-vice-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:tj-df-elege-segundo-vice-presidente-do-tjdft
- 2026-11-11 23:00 — gravado rel:tj-df-elege-corregedor-da-justica-do-df
- 2026-11-11 23:00 — gravado rel:presidente-do-tjdft-nomeia-juiz-de-direito-substituto
- 2026-11-11 23:00 — gravado rel:corregedoria-da-justica-do-df-corrige-juiz-de-direito
- 2026-11-11 23:00 — editado org:tj-df (f2-judiciario: acrescentados ao detalhes a composição (48 desembargadores), os órgãos da Justiça do DF e a competência originária (Lei 11.697/2008, arts. 1º, 2º, 4º e 8º; LOMAN, arts. 19 e 132))
- 2026-11-11 23:02 — gravado org:plenario-do-stf
- 2026-11-11 23:02 — gravado org:primeira-turma-do-stf
- 2026-11-11 23:02 — gravado org:segunda-turma-do-stf
- 2026-11-11 23:02 — gravado org:presidencia-do-stf
- 2026-11-11 23:02 — gravado cargo:vice-presidente-do-stf
- 2026-11-11 23:02 — gravado rel:ministros-do-stf-elegem-vice-presidente-do-stf
- 2026-11-11 23:02 — gravado rel:vice-presidente-do-stf-substitui-presidente-do-stf
- 2026-11-11 23:02 — gravado org:comissao-de-regimento-do-stf
- 2026-11-11 23:02 — gravado org:comissao-de-jurisprudencia-do-stf
- 2026-11-11 23:02 — gravado org:comissao-de-documentacao-do-stf
- 2026-11-11 23:02 — gravado org:comissao-de-coordenacao-do-stf
- 2026-11-11 23:02 — gravado org:plenario-do-stj
- 2026-11-11 23:02 — gravado org:corte-especial-do-stj
- 2026-11-11 23:02 — gravado org:primeira-secao-do-stj
- 2026-11-11 23:02 — gravado org:segunda-secao-do-stj
- 2026-11-11 23:02 — gravado org:terceira-secao-do-stj
- 2026-11-11 23:02 — gravado org:primeira-turma-do-stj
- 2026-11-11 23:02 — gravado org:segunda-turma-do-stj
- 2026-11-11 23:02 — gravado org:terceira-turma-do-stj
- 2026-11-11 23:02 — gravado org:quarta-turma-do-stj
- 2026-11-11 23:02 — gravado org:quinta-turma-do-stj
- 2026-11-11 23:02 — gravado org:sexta-turma-do-stj
- 2026-11-11 23:02 — gravado org:presidencia-do-stj
- 2026-11-11 23:02 — gravado org:conselho-de-administracao-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-regimento-interno-do-stj
- 2026-11-11 23:02 — gravado org:comissao-gestora-de-precedentes-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-cooperacao-internacional-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-coordenacao-e-documentacao-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-tecnologia-da-informacao-do-stj
- 2026-11-11 23:02 — gravado org:comissao-de-gestao-da-biblioteca-do-stj
- 2026-11-11 23:02 — gravado cargo:presidente-do-stj
- 2026-11-11 23:02 — gravado cargo:vice-presidente-do-stj
- 2026-11-11 23:02 — gravado cargo:corregedor-nacional-de-justica
- 2026-11-11 23:02 — gravado rel:ministros-do-stj-elegem-presidente-do-stj
- 2026-11-11 23:02 — gravado rel:ministros-do-stj-elegem-vice-presidente-do-stj
- 2026-11-11 23:02 — gravado rel:ministros-do-stj-elegem-corregedor-nacional-de-justica
- 2026-11-11 23:02 — gravado rel:vice-presidente-do-stj-substitui-presidente-do-stj
- 2026-11-11 23:02 — gravado rel:presidente-do-stj-preside-corte-especial-do-stj
- 2026-11-11 23:02 — gravado rel:presidente-do-stj-preside-plenario-do-stj
- 2026-11-11 23:02 — gravado rel:presidente-do-stj-preside-conselho-da-justica-federal
- 2026-11-11 23:02 — gravado rel:presidente-do-stj-preside-conselho-de-administracao-do-stj
- 2026-11-11 23:02 — editado rel:stj-julga-governador (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-desembargador (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-conselheiro-do-tce (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-juiz-de-trf (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-juiz-de-trt (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-juiz-de-tre (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
- 2026-11-11 23:02 — editado rel:stj-julga-membro-do-mpu (f2-judiciario: acrescentado o RISTJ, art. 11, I (julgamento pela Corte Especial))
