---
id: f2-eleicoes
escopo: "Fase 2 (D49): Código Eleitoral, Lei das Eleições, Lei dos Partidos, Lei das Inelegibilidades e Lei 9.709/1998"
status: pendente
depende_de: [f0-eleicoes]
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 4.737/1965 (Código Eleitoral), exceto arts. 12 a 41 (ficam com `f2-judiciario`): `norma:lei-4737-1965`
- Lei 9.504/1997 (Lei das Eleições): `norma:lei-9504-1997`
- Lei 9.096/1995 (Lei dos Partidos Políticos): `norma:lei-9096-1995`
- LC 64/1990 (inelegibilidades): crie se não existir
- Lei 9.709/1998 (plebiscito, referendo e iniciativa popular): `norma:lei-9709-1998`

Propaganda, crimes eleitorais, prestação de contas em detalhe e regras de urna são, em geral, `fora` (detalhe de processo). Interessam os órgãos, os cargos, as etapas dos processos eleitorais e os procedimentos que criam decisões (registro de candidatura, impugnação, ação de investigação judicial eleitoral, diplomação, recursos).

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] Etapas que faltam em `proc:eleicao-geral` e `proc:eleicao-municipal` (convenções, registro de candidatura, impugnação, propaganda como período, votação, apuração, diplomação); prazos com dispositivo.
- [ ] Processos novos, se a lei descrever a sequência: registro de candidatura e impugnação (LC 64, arts. 3º a 16), ação de investigação judicial eleitoral (LC 64, art. 22), registro de partido no TSE (Lei 9.096), plebiscito e referendo (Lei 9.709).
- [ ] Partidos (Lei 9.096): órgãos de direção como conceito no `detalhes` de `org:partidos-politicos`; fundações partidárias, Fundo Partidário (`rel:tse-repassa-fundo-partidario-partidos` existe) e as relações de controle do TSE sobre os partidos (registro, contas).
- [ ] Federações partidárias (Lei 9.096, art. 11-A): as federações em vigor em 2026-10-01 já estão em `dados/orgaos/federacao-*`; confira as fontes e acrescente a lei.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:tse`, `org:tre-*`, `org:juntas-eleitorais`, `org:eleitorado-nacional`, `org:partidos-politicos`, `proc:eleicao-geral`, `proc:eleicao-municipal`, `obj:diploma-eleitoral`.
- Em paralelo: `f2-judiciario` (órgãos da Justiça Eleitoral, Código Eleitoral arts. 12 a 41) e `f2-financas-publicas`.

## Cobertura

## Diário
