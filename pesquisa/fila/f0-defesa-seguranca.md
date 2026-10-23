---
id: f0-defesa-seguranca
escopo: "Fatia 0: Forças Armadas (CF, arts. 142 e 143) e segurança pública (art. 144)"
status: coletada
depende_de: []
iniciada_em: 2026-10-23
concluida_em: 2026-10-23
---

## Entregáveis

- [x] Forças Armadas: complete `org:forcas-armadas` (a f0-executivo pode ter criado um esboço; esta tarefa passa a ser dona dele) e crie `org:marinha`, `org:exercito`, `org:aeronautica`, `contido_em` conforme a LC 97/1999 e a estrutura do Ministério da Defesa. Cargos de comandante de cada Força e o Estado-Maior Conjunto das Forças Armadas, com ocupantes em 2026-10-01 (comandantes contam como dirigentes máximos, D11).
- [x] Relações: comando supremo do Presidente (art. 142), direção pelo Ministro da Defesa, emprego na garantia da lei e da ordem (art. 142 e LC 97/1999, art. 15), serviço militar obrigatório (art. 143) como objeto ou nota.
- [x] Segurança pública (art. 144): `org:policia-federal`, `org:policia-rodoviaria-federal`, `org:policia-ferroviaria-federal` (confira se existe de fato como órgão em 2026-10-01; se só existe no texto da CF, registre isso com fonte), polícias penais (federal e estaduais), os arquétipos estaduais `org:arquetipo-estadual-policia-civil`, `org:arquetipo-estadual-policia-militar` e `org:arquetipo-estadual-corpo-de-bombeiros-militar`, e o municipal `org:arquetipo-municipal-guarda-municipal` (§ 8º). Subordinação de cada um (§ 6º); diretor-geral da PF com ocupante.
- [x] Confira se alguma emenda constitucional alterou o art. 144 até 2026-10-01 (houve proposta de emenda sobre segurança pública em tramitação em 2025). Registre só o que estava promulgado em 2026-10-01.
- [x] Inteligência: `org:abin` e o Sistema Brasileiro de Inteligência (Lei 9.883/1999), `contido_em` conforme a estrutura vigente. Onde houver sigilo ou baixa transparência (D08), abra um `aviso:` dizendo o que não é público.
- [x] Sistema Único de Segurança Pública (Lei 13.675/2018): objeto ou órgão mínimo, só se ajudar a mostrar como os entes se coordenam.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-executivo: `org:ministerio-da-defesa`, `org:ministerio-da-justica-e-seguranca-publica`, `org:gabinete-de-seguranca-institucional`, `org:conselho-de-defesa-nacional`, `org:forcas-armadas` (esboço), `proc:estado-de-defesa`, `proc:estado-de-sitio`
- f0-judiciario: `org:stm`, `org:justica-militar-da-uniao`, tribunais de justiça militar
- Já existem: `cargo:presidente-da-republica`, `ente:<uf>`

## Diário
- 2026-10-23 — iniciada; lidos CLAUDE.md, instruções, modelo, protocolo, decisões e vocabulários
- 2026-10-23 20:04 — gravados os quatro arquétipos (org:arquetipo-estadual-policia-civil, org:arquetipo-estadual-policia-militar, org:arquetipo-estadual-corpo-de-bombeiros-militar, org:arquetipo-municipal-guarda-municipal), só com a CF; leis orgânicas a acrescentar
- 2026-10-23 20:16 — gravadas normas lei-13022-2014, lei-14735-2023, lei-14751-2023, lei-13675-2018, lei-9883-1999, lei-9266-1996, lei-4375-1964, lei-14875-2024, lei-12462-2011, decreto-11816-2023, decreto-11693-2023, resolucao-cn-2-2013; fontes senado-api-processo-pec-18-2025, planalto-quadro-emendas-constitucionais
- 2026-10-23 20:19 — gravados org:forcas-armadas (completado; verificacao volta a coletado), org:marinha, org:exercito, org:aeronautica, org:estado-maior-conjunto-das-forcas-armadas, org:conselho-militar-de-defesa, cargos de comandante (3) e chefe do EMCFA, 4 pessoas + ocupa, relações indica/nomeia/integra (CMD e CDN), preside, assessora, subordina-se ao Ministro da Defesa
- 2026-10-23 20:20 — gravado proc:emprego-das-forcas-armadas-na-glo (LC 97/1999, art. 15)
- 2026-10-23 20:22 — completados os 4 arquétipos (leis orgânicas, contido_em no Executivo estadual para os estaduais, nota da PEC 18/2025); gravados org:arquetipo-estadual-policia-penal, org:policia-federal, org:policia-rodoviaria-federal, org:policia-ferroviaria-federal, org:policia-penal-federal, cargo:diretor-geral-da-policia-federal, pessoa:andrei-augusto-passos-rodrigues + ocupa, rel presidente nomeia DG/PF, subordinações ao governador (4) e ao prefeito, auxilia Exército (PM e CBM)
- 2026-10-23 20:23 — gravados org:abin, cargo:diretor-geral-da-abin, pessoa:luiz-fernando-correa + ocupa, rel senado aprova / presidente nomeia DG ABIN, org:sistema-brasileiro-de-inteligencia + 9 integra, org:ccai + fiscaliza, aviso:abin-atos-e-despesas-sigilosas, org:sistema-unico-de-seguranca-publica + coordenação (preside) + 8 integra
- 2026-10-23 20:24 — corrigido resumo de cargo:comandante-do-exercito ('o Exército')
- 2026-10-23 20:24 — achado para f0-executivo (não editado): as notas de org:conselho-de-defesa-nacional e rel:ministro-de-estado-integra-conselho-de-defesa-nacional dizem que os Comandantes não têm cargo modelado; agora têm (cargo:comandante-da-marinha, -do-exercito, -da-aeronautica, com rel:*-integra-conselho-de-defesa-nacional)
- 2026-10-23 20:24 — vocabulário: faltou 'coordena' (usado 'preside' em rel:mjsp-coordena-susp), um provimento 'indicação e nomeação' para comandantes e chefe do EMCFA (usado nomeacao-livre) e 'força auxiliar e reserva' (usado 'auxilia'); 'outro' como tipo_orgao para Sisbin e Susp (falta 'sistema')
- 2026-10-23 20:24 — conferido: nenhuma EC alterou o art. 144 depois da EC 104/2019 até 2026-10-01; PEC 18/2025 em tramitação no Senado em 2026-10-23; Polícia Ferroviária Federal só existe no texto da CF (sem unidade na Lei 14.600/2023 nem no Decreto 11.348/2023)
- 2026-10-23 20:24 — tarefa coletada; validação sem erros
