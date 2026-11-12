---
id: f2-fechamento
escopo: "Fase 2, fechamento: pendências pequenas acumuladas nas coletas e revisões, propostas de vocabulário e o relatório final de cobertura das leis"
status: pendente
depende_de: [f2-executivo, f2-funcoes-essenciais, f2-legislativo-tcu, f2-judiciario, f2-eleicoes, f2-financas-publicas, f2-processos-constitucionais, f2-administracao, f2-defesa-seguranca, f2-social, f2-federacao]
---

Lista mantida pelo coordenador. Cada item diz de onde veio.

## Pendências

- [ ] `rel:cgu-representa-a-tcu` (Lei 14.600, art. 49, § 2º): falta a relação da CGU com o TCU (verificacao-f2-executivo).
- [ ] Conselho Nacional de Recursos Hídricos (Lei 14.600, art. 61; Lei 9.433/1997, arts. 34 a 36 e 45): colegiado presidido pelo Ministro da Integração (f2-executivo, lacuna).
- [ ] Decreto-Lei 200, art. 178 (lacuna) e arts. 30, 31 e 68 (parciais) (f2-executivo).
- [ ] Wayback: `arquivo` null nas normas criadas na fase 2 (o Wayback respondeu 429 em 28/10 e 3/11); tentar de novo.
- [ ] Ocupantes em 2026-10-01 dos cargos de chefia criados na fase 2 (PGT, PGJM, PGJ do MPDFT, PGU, Consultor-Geral da União, PGFN, PGF, diretores das agências, Líder do Governo, Ouvidores e Corregedores das Casas), só a cúpula (D11).
- [ ] MP 2.229-43/2001 (carreira de Procurador Federal) e lista atual das consultorias jurídicas dos ministérios (f2-funcoes-essenciais).

## Propostas de vocabulário (para o coordenador decidir)

- `tipo_orgao`: órgão interno de função essencial (corregedorias, ouvidorias, secretarias do MP, da Defensoria e da AGU) e escola institucional (f2-funcoes-essenciais).
- `relacao`: "forma lista" (tríplice, sêxtupla), hoje `indica`; "avoca" (DL 200, art. 170); "secretaria" um colegiado, hoje `auxilia` (f2-executivo, f2-funcoes-essenciais).
- `tipo_norma`: ato da Mesa e ato conjunto, hoje `outro` (f2-legislativo-tcu).
- `tipos-orgao.json`: definições de empresa pública, sociedade de economia mista e fundação pública comparadas ao DL 200, art. 5º (f2-executivo).

## Decisões tomadas pelo coordenador

- 2026-11-03: a ANA não aparecer no decreto de estrutura do MIDR não vira aviso. A lei (9.984, art. 3º) dá a vinculação, e a omissão num decreto de estrutura não é contradição entre fontes nem lacuna (D36, D37); fica na nota da relação.

- 2026-11-11: `nomeacao-a-partir-de-lista` passa a dizer "pela autoridade competente" (não só o chefe do Executivo). A coleta usa o termo para corregedores e ouvidores nomeados por procuradores-gerais e defensores-gerais, e o mecanismo é o mesmo; criar outro termo multiplicaria vocabulário sem ganho de leitura (verificacao-f2-funcoes-essenciais).
- 2026-11-11: sem aviso para o ingresso no MPU (CF, art. 129, § 3º, contra LC 75, art. 187) e para a rejeição do DPGF pelo Senado. No primeiro a CF prevalece sem dúvida e os cargos já a seguem; no segundo é silêncio da lei, já anotado no processo. Aviso fica para dúvida real de fonte (D36, D37).
- 2026-11-11: quadro de f2-funcoes-essenciais reclassificado conforme a revisão (LC 75, arts. 82, 115, 148, 181; Lei 8.625, art. 80; LC 80, art. 50 passam a coberto; Título III da LC 80 fica fora pela D51). Regra para as próximas coletas: artigo citado em `estrutura_continua` ou como fonte de relação é coberto, não fora.

## Diário
