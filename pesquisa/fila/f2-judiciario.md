---
id: f2-judiciario
escopo: "Fase 2 (D49): leis de organização do Judiciário da União e regimentos do STF e do STJ"
status: pendente
depende_de: [f0-judiciario, f0-judiciario-complementar]
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
