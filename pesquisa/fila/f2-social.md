---
id: f2-social
escopo: "Fase 2 (D49): leis do SUS, da assistência social, da educação e da seguridade"
status: pendente
depende_de: [f0-seguridade, f0-educacao]
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 8.080/1990 e Lei 8.142/1990 (SUS): `norma:lei-8080-1990`, `norma:lei-8142-1990`
- Lei 8.742/1993 (LOAS): `norma:lei-8742-1993`
- Lei 9.394/1996 (LDB): procure ou crie
- Lei 14.113/2020 (Fundeb): `norma:lei-14113-2020`
- Lei 8.212/1991 e Lei 8.213/1991, só a organização da seguridade e da previdência (órgãos, conselhos, quem paga os benefícios); benefícios em detalhe são `fora`

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] SUS: direção em cada esfera (Ministério da Saúde, secretarias estaduais e municipais do arquétipo), comissões intergestores (CIT existe; CIB no arquétipo estadual), conselhos e conferências de saúde (existem; confira composição e periodicidade), consórcios de saúde; competências por esfera (arts. 16 a 18 da Lei 8.080) no `detalhes` (D50).
- [ ] Assistência social: Suas, CNAS, conselhos estaduais e municipais, fundos de assistência, comissões intergestores do Suas; BPC (quem concede: INSS) como relação.
- [ ] Educação (LDB): sistemas de ensino (federal, estaduais, municipais), Conselho Nacional de Educação (existe) e conselhos estaduais e municipais no arquétipo; incumbências da União, dos estados e dos municípios (arts. 9º a 11) no `detalhes` (D50) ou como relações quando ligarem entidades.
- [ ] Fundeb: o fundo como `obj:` (existe `obj:fundeb`; confira), os conselhos de acompanhamento e controle social e a comissão intergovernamental (existe).
- [ ] Seguridade: CNPS e conselhos de previdência (existem; confira), INSS como quem concede e paga os benefícios.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:sistema-unico-de-saude`, `org:comissao-intergestores-tripartite`, `org:conselho-nacional-de-saude`, `org:conferencias-de-saude`, `org:sistema-unico-de-assistencia-social`, `org:conselho-nacional-de-assistencia-social`, `org:conselho-nacional-de-educacao`, `org:sistema-federal-de-ensino`, `org:sistema-nacional-de-educacao`, `obj:fundeb`, `org:inss`, `org:conselho-nacional-de-previdencia-social`.
- As métricas e os fluxos (`dados/metricas/`, `dados/fluxos/`) são gerados por script: não os edite.
- Em paralelo: `f2-federacao`.

## Cobertura

## Diário
