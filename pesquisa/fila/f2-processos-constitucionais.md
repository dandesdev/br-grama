---
id: f2-processos-constitucionais
escopo: "Fase 2 (D49): leis do controle concentrado, da súmula vinculante, dos remédios constitucionais e do impeachment"
status: em-andamento
depende_de: [f0-controle-constitucionalidade]
iniciada_em: 2026-11-11
concluida_em: null
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- Lei 9.868/1999 (ADI, ADC e ADO) e Lei 9.882/1999 (ADPF): `norma:lei-9882-1999`; a 9.868, procure
- Lei 11.417/2006 (súmula vinculante): `norma:lei-11417-2006`
- Lei 12.016/2009 (mandado de segurança), Lei 13.300/2016 (mandado de injunção), Lei 9.507/1997 (habeas data): crie as que faltarem
- Lei 8.038/1990 (processos nos tribunais superiores: ação penal originária, reclamação)
- Lei 1.079/1950 (crimes de responsabilidade e o processo de impeachment): `norma:lei-1079-1950`

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] Etapas que faltam nos processos de controle de constitucionalidade e de súmula vinculante já existentes (Grep em `dados/processos/`), com prazo e quórum da lei.
- [ ] Processos novos onde a lei descreve a sequência: mandado de segurança, mandado de injunção, reclamação constitucional, ação penal originária no STF e no STJ.
- [ ] Impeachment (Lei 1.079): confira as etapas de `proc:` de impeachment existentes contra a lei (o STF, na ADPF 378, ajustou o rito; a fonte `fonte:stf-adpf-378`, se existir, deve ser usada) e o processo para ministros do STF e o PGR julgados pelo Senado (arts. 39 a 73).

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `proc:adi`, `proc:adpf`, `proc:sumula-vinculante`, `proc:impeachment` (confira os ids), `obj:` das ações e das decisões.
- Em paralelo: `f2-administracao` e `f2-defesa-seguranca`.

## Cobertura

## Diário

- 2026-11-11 — iniciada; lidos CLAUDE.md, decisões, modelo de dados, protocolo e instruções (fase 2)
- 2026-11-11 23:20 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-processos-constitucionais/ (Invoke-WebRequest com TLS 1.2; o curl teve a conexão resetada): l9868.htm (última alteração: Lei 12.063/2009), l9882.htm (sem alteração; "Vide" ADI 2.231 e ADPF 774), l11417.htm (sem alteração), l12016.htm (Lei 13.676/2018, art. 16; "Vide" ADI 4296), l13300.htm (sem alteração), l9507.htm (sem alteração), l8038.htm (Lei 14.836/2024, art. 41-A), l1079.htm (LC 227/2026; "Vide" ADPFs 1259 e 1260). Nada entre 2026-10-01 e hoje
- 2026-11-11 23:25 — processos existentes: não há proc: de ADI, ADC, ADO, ADPF nem súmula vinculante (Grep em dados/processos/); serão criados. Impeachment: proc:crime-de-responsabilidade-do-presidente. Não existia fonte:stf-adpf-378; páginas da ADPF 378 baixadas do portal do STF (incidente 4899156) em pesquisa/brutos/stf/2026-11-11-f2-processos-constitucionais/
- 2026-11-11 23:30 — gravados norma:lei-8038-1990 e fonte:stf-adpf-378
- 2026-11-11 23:45 — gravado proc:adi (Lei 9.868, arts. 2º a 12 e 22 a 28; cautelar como etapa opcional; regime rito-abreviado do art. 12)
- 2026-11-11 23:55 — gravados proc:adc (Lei 9.868, arts. 13 a 28; legitimados do art. 13 superados pela EC 45/2004) e proc:ado (arts. 12-A a 12-H; vigência pela Lei 12.063/2009, baixada em l12063.htm)
- 2026-11-12 00:05 — gravado proc:adpf (Lei 9.882, arts. 1º a 13; representação ao PGR como etapa facultativa; quórum de presença de 2/3, sem quórum de votação na lei)
- 2026-11-12 00:15 — gravado proc:sumula-vinculante (Lei 11.417, arts. 2º a 7º e 10; RISTF, arts. 354-A a 354-G, edição até a ER 58/2022; regime repercussao-geral do art. 354-E)
- 2026-11-12 00:25 — gravado proc:reclamacao (CPC, arts. 988 a 993; Lei 11.417, arts. 7º a 9º; Lei 9.882, art. 13; os arts. 13 a 18 da Lei 8.038 foram revogados pelo CPC, art. 1.072, IV)
- 2026-11-12 00:35 — gravado fonte:stf-adi-4296 (decisão de 9/6/2021: inconstitucionais o art. 7º, § 2º, e o art. 22, § 2º, da Lei 12.016; abas salvas em pesquisa/brutos/stf/2026-11-11-f2-processos-constitucionais/)
- 2026-11-12 00:50 — gravado proc:mandado-de-seguranca (Lei 12.016, arts. 1º a 26; regimes competencia-originaria e coletivo; suspensão de segurança com a Lei 8.038, art. 25; recurso remete a proc:caminho-de-um-processo)
- 2026-11-12 01:00 — gravado proc:mandado-de-injuncao (Lei 13.300, arts. 2º a 14; regime coletivo; etapa de decurso do prazo fixado para a norma)
- 2026-11-12 01:10 — gravado proc:habeas-data (Lei 9.507, arts. 1º a 4º e 7º a 21; fase administrativa no detalhe da primeira etapa; regime competencia-originaria)
- 2026-11-12 01:25 — gravado proc:acao-penal-originaria (Lei 8.038, arts. 1º a 12, 40 e 41-A; LC 75, arts. 46 a 48 para o PGR e subprocuradores; Corte Especial do STJ pelo RISTJ, art. 11, I; no STF o ator é org:stf por causa da ER 59/2023 não conferida). Em proc:reclamacao e proc:mandado-de-injuncao, etapa do MP ganhou cargo:subprocurador-geral-da-republica (LC 75, art. 47, § 1º)
