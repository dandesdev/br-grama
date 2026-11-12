---
id: f2-administracao
escopo: "Fase 2 (D49): regime dos servidores, processo administrativo, acesso à informação, estatais e conflito de interesses"
status: em-andamento
depende_de: [f0-executivo, f0-administracao-indireta]
iniciada_em: 2026-11-11
concluida_em: null
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 8.112/1990 (regime jurídico dos servidores civis da União): crie se não existir
- Lei 9.784/1999 (processo administrativo federal)
- Lei 12.527/2011 (Lei de Acesso à Informação)
- Lei 13.303/2016 (estatuto das empresas estatais)
- Lei 12.813/2013 (conflito de interesses) e a Comissão de Ética Pública (Decreto de 26/5/1999 e Decreto 6.029/2007, só no que a lei remete)

Direitos, deveres e penalidades dos servidores são `fora`; interessam formas de provimento e vacância, quem nomeia, quem julga o processo disciplinar, órgãos e colegiados criados, e procedimentos com etapas.

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] Lei 8.112: formas de provimento (art. 8º) e de vacância (art. 33): compare com o vocabulário `provimento` em `esquema/vocabularios/gerais.json`; não edite, proponha termos no relatório. Processo administrativo disciplinar (arts. 143 a 182) como `proc:`, com quem instaura, a comissão e quem julga (art. 141).
- [ ] Lei 9.784: processo administrativo como `proc:` (instauração, instrução, decisão, recurso em até três instâncias), com prazos.
- [ ] LAI: classificação de informação (quem classifica em cada grau, art. 27), Comissão Mista de Reavaliação de Informações, recurso à CGU; pedido de acesso como `proc:` com prazos (arts. 10 a 20). Sigilo é tema de aviso (D08, D37) só quando houver lacuna real de fonte.
- [ ] Lei 13.303: órgãos obrigatórios das estatais (conselho de administração, diretoria, conselho fiscal, comitê de auditoria) como conceito no `detalhes` dos tipos ou das estatais existentes; requisitos de dirigentes.
- [ ] Lei 12.813 e Comissão de Ética Pública: o órgão, quem a integra e quem nomeia.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:cgu`, `org:casa-civil`, as estatais (`org:caixa-economica-federal`, `org:banco-do-brasil`, `org:petrobras`, `org:correios`, `org:bndes`).
- Em paralelo: `f2-processos-constitucionais` e `f2-defesa-seguranca`.

## Cobertura

## Diário

- 2026-11-11 — iniciada; lidas as instruções, D08, D11, D14, D36, D37, D49 a D51, modelo de dados e protocolo
- 2026-11-11 23:22 — gravado norma:lei-8112-1990
- 2026-11-11 23:22 — gravado norma:lei-9784-1999
- 2026-11-11 23:22 — gravado norma:lei-12527-2011
- 2026-11-11 23:22 — gravado norma:lei-12813-2013
- 2026-11-11 23:22 — gravado norma:decreto-26-05-1999-comissao-de-etica-publica
- 2026-11-11 23:22 — gravado norma:decreto-6029-2007
- 2026-11-11 23:22 — gravado norma:decreto-7724-2012
- 2026-11-11 23:23 — gravado org:comissao-de-etica-publica
- 2026-11-11 23:23 — gravado cargo:membro-da-comissao-de-etica-publica
- 2026-11-11 23:23 — gravado rel:presidente-nomeia-membro-da-comissao-de-etica-publica
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-assessora-presidente
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-assessora-ministro-de-estado
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-fiscaliza-ministro-de-estado
- 2026-11-11 23:23 — gravado org:sistema-de-gestao-da-etica-do-poder-executivo-federal
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-coordena-sistema-de-gestao-da-etica
- 2026-11-11 23:23 — gravado rel:comissao-de-etica-publica-integra-sistema-de-gestao-da-etica
- 2026-11-11 23:23 — gravado rel:cgu-fiscaliza-conflito-de-interesses-agentes-do-executivo
