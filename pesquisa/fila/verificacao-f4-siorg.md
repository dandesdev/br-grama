---
id: verificacao-f4-siorg
escopo: "Revisão das estruturas importadas do SIORG (D62)"
status: pendente
depende_de: [f4-siorg]
---

Siga `pesquisa/instrucoes-verificacao.md`. As estruturas `est:*` saíram de `scripts/importar/siorg.ts` (resumo em `pesquisa/brutos/siorg/2026-11-14/`). Não edite `dados/estruturas/` à mão: anote no diário e o coordenador muda o script.

1. **Mapeamento**: as 91 raízes do objeto `RAIZES` no script. Para cada uma, diga se o código SIORG é mesmo o órgão do mapa (nome, sigla, natureza). Procure órgãos do mapa do Executivo federal que têm código SIORG e ficaram de fora (ex.: Ouvidoria-Geral da Previdência, Polícia Penal Federal, Núcleo de Segurança e Credenciamento, Inspetoria-Geral das PMs e bombeiros) e proponha o código.
2. **Conteúdo**: para uma amostra de pelo menos 10 órgãos (5 ministérios, 2 unidades internas, 2 agências, 1 autarquia), compare a árvore com o decreto de estrutura regimental vigente em 2026-10-01 (Planalto) e com a consulta da API do SIORG para a unidade (`/doc/unidade-organizacional/<codigo>/estrutura`). Diga o que falta ou sobra, e se alguma mudança entre 1º/10 e 14/11/2026 aparece.
3. **Unidades que já são órgãos do mapa**: proponha o campo `mapa` para unidades da árvore que correspondem a órgãos do mapa (ex.: secretarias, conselhos), além das raízes.
4. **Vinculadas**: confira, por amostra, que as entidades vinculadas listadas são as do decreto de estrutura do ministério.

Ao terminar, status `verificada` e relatório no diário com as correções propostas para o script. Se tudo conferir, diga "conferido", e o coordenador gera de novo com a nota de verificação.

## Diário
