---
id: verificacao-f2-administracao
escopo: "Revisão independente da coleta f2-administracao (Leis 8.112/1990, 9.784/1999, 12.527/2011, 13.303/2016, 12.813/2013 e decretos da Comissão de Ética Pública)"
status: em-andamento
depende_de: [f2-administracao]
iniciada_em: 2026-11-11
concluida_em: null
---

Siga `pesquisa/instrucoes-verificacao.md`. Confira contra as fontes primárias (cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-administracao/` e o Planalto) todas as entidades com `verificacao.tarefa: "f2-administracao"`: as 49 criadas e as 2 existentes que a coleta editou (`org:cgu`, `norma:lei-13303-2016`). Confira também o quadro de cobertura de `pesquisa/fila/f2-administracao.md` (as cinco leis saíram com 100%): diga se cada linha "fora" cabe na D49, no item 8 das instruções de fase 2, na D51 e na D53.

Pontos de atenção:
- leituras nossas marcadas `inferido`: autoridade imediatamente inferior ao Presidente no art. 141, II, da Lei 8.112 (Ministro de Estado); ratificação das classificações ultrassecretas dos Comandantes pelo Ministro da Defesa e dos chefes de missão pelo Ministro das Relações Exteriores (LAI, art. 27, § 2º; Decreto 7.724/2012); vigência da Lei 12.813, da LAI e da Lei 6.404 calculadas;
- composição da Comissão Mista de Reavaliação de Informações (Decreto 11.489/2023 e alterações até 2026-10-01);
- Comissão de Ética Pública: número de membros, mandato e quem designa (Decreto de 26/5/1999 e Decreto 6.029/2007);
- Decreto 11.123/2022 (delegação do poder disciplinar aos Ministros) contra o texto vigente em 2026-10-01;
- `org:empresas-estatais-federais` como conjunto (D51) e os órgãos obrigatórios da Lei 13.303 nos `detalhes`; requisitos do art. 17 e a ADI 7.331 (procure o acórdão no portal do STF, não só a notícia);
- etapas com `org:poder-executivo-federal` como ator genérico: diga se alguma etapa tem ator definido na lei que deveria aparecer;
- prazos de `proc:pedido-de-acesso-a-informacao` (arts. 10 a 20), de `proc:processo-administrativo-federal` e de `proc:processo-administrativo-disciplinar-federal` (arts. 143 a 182), cada um contra o dispositivo;
- art. 141 da Lei 8.112: a coleta deixou de fora o Presidente do TCU e os presidentes de TRE; diga se a fonte resolve.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f2-administracao"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário

- 2026-11-11 — iniciada; lidos CLAUDE.md, decisões (D11, D36, D37, D49 a D53), modelo de dados, protocolo, instruções de verificação e de fase 2, e a tarefa f2-administracao; 51 entidades no escopo (grep por "f2-administracao" em dados/)
