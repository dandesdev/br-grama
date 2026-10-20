---
id: f0-defesa-seguranca
escopo: "Fatia 0: Forças Armadas (CF, arts. 142 e 143) e segurança pública (art. 144)"
status: pendente
depende_de: []
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Forças Armadas: complete `org:forcas-armadas` (a f0-executivo pode ter criado um esboço; esta tarefa passa a ser dona dele) e crie `org:marinha`, `org:exercito`, `org:aeronautica`, `contido_em` conforme a LC 97/1999 e a estrutura do Ministério da Defesa. Cargos de comandante de cada Força e o Estado-Maior Conjunto das Forças Armadas, com ocupantes em 2026-10-01 (comandantes contam como dirigentes máximos, D11).
- [ ] Relações: comando supremo do Presidente (art. 142), direção pelo Ministro da Defesa, emprego na garantia da lei e da ordem (art. 142 e LC 97/1999, art. 15), serviço militar obrigatório (art. 143) como objeto ou nota.
- [ ] Segurança pública (art. 144): `org:policia-federal`, `org:policia-rodoviaria-federal`, `org:policia-ferroviaria-federal` (confira se existe de fato como órgão em 2026-10-01; se só existe no texto da CF, registre isso com fonte), polícias penais (federal e estaduais), os arquétipos estaduais `org:arquetipo-estadual-policia-civil`, `org:arquetipo-estadual-policia-militar` e `org:arquetipo-estadual-corpo-de-bombeiros-militar`, e o municipal `org:arquetipo-municipal-guarda-municipal` (§ 8º). Subordinação de cada um (§ 6º); diretor-geral da PF com ocupante.
- [ ] Confira se alguma emenda constitucional alterou o art. 144 até 2026-10-01 (houve proposta de emenda sobre segurança pública em tramitação em 2025). Registre só o que estava promulgado em 2026-10-01.
- [ ] Inteligência: `org:abin` e o Sistema Brasileiro de Inteligência (Lei 9.883/1999), `contido_em` conforme a estrutura vigente. Onde houver sigilo ou baixa transparência (D08), abra um `aviso:` dizendo o que não é público.
- [ ] Sistema Único de Segurança Pública (Lei 13.675/2018): objeto ou órgão mínimo, só se ajudar a mostrar como os entes se coordenam.

## Ids de outras tarefas (podem ser referenciados; não crie)

- f0-executivo: `org:ministerio-da-defesa`, `org:ministerio-da-justica-e-seguranca-publica`, `org:gabinete-de-seguranca-institucional`, `org:conselho-de-defesa-nacional`, `org:forcas-armadas` (esboço), `proc:estado-de-defesa`, `proc:estado-de-sitio`
- f0-judiciario: `org:stm`, `org:justica-militar-da-uniao`, tribunais de justiça militar
- Já existem: `cargo:presidente-da-republica`, `ente:<uf>`

## Diário
