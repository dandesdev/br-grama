# Instruções comuns para agentes de coleta

Você é um agente de **coleta** do br-grama (raiz: `C:\Users\DELL\apps\brgram`). A data de referência do retrato é **2026-10-01**. Depois de você, outro agente vai conferir tudo contra as fontes (revisão); escreva pensando nisso: cada afirmação precisa de um dispositivo que a sustente.

## Antes de começar

1. Leia `CLAUDE.md`, `docs/decisoes.md`, `docs/modelo-de-dados.md` (esquema v1) e `docs/protocolo-pesquisa.md`, além dos vocabulários em `esquema/vocabularios/`.
2. Veja exemplos reais de cada tipo em `dados/`. O piloto já foi revisado e serve de modelo, por exemplo:
   - `dados/cargos/ministro-do-stf.json`
   - `dados/relacoes/congresso-julga-contas-presidente.json`
   - `dados/processos/lei-ordinaria.json`
3. Abra sua tarefa em `pesquisa/fila/<tarefa>.md`. Mude `status` para `em-andamento`, preencha `iniciada_em` e escreva a primeira linha do diário.
4. Para a web, carregue as ferramentas com ToolSearch (`select:WebFetch,WebSearch`).

## Regra mais importante: gravar sempre

**Grave cada entidade em `dados/` assim que ela ficar pronta** e acrescente uma linha ao diário (`- AAAA-MM-DD HH:MM — gravado org:...`) antes de pesquisar a próxima. A cota pode acabar a qualquer momento, e o que não estiver em disco se perde. A primeira entidade deve ser gravada nos primeiros minutos.

## Como trabalhar

- Rode `npm run -s validar` na raiz com frequência e corrija os erros dos **seus** arquivos. Referências a ids que outra tarefa em paralelo vai criar são esperadas; a tabela "Ids de outras tarefas" de cada tarefa diz quais.
- `verificacao`: `{ "status": "coletado", "em": "<data de hoje>", "tarefa": "<id da tarefa>" }`.
- **Nunca invente** fonte, dispositivo, URL, nome, data ou número. Se não encontrar, use `confianca: "indisponivel"` e crie um `aviso:` dizendo onde procurou (`onde_procuramos`).
- Avisos (D37) servem só para lacunas, contradições entre fontes oficiais, sigilo e fontes desatualizadas. Um fato com fonte não é aviso (D36).
- **Fontes:** primárias primeiro (Constituição e leis no planalto.gov.br, regimentos e páginas oficiais). Wikipedia serve só como pista. Fonte não oficial leva `confianca: "secundario"` na entidade ou no campo (`campos`).
- **Data:** o texto compilado do Planalto mostra a redação atual; confirme que nada mudou entre 2026-10-01 e hoje nos dispositivos que você citar. Existem as EC 140 e 141, de 16/10/2026, posteriores à data de referência.
- **Wayback:** preencha `arquivo` de normas e fontes com `https://archive.org/wayback/available?url=<url>`; se não houver cópia, `null`.
- **Antes de criar** qualquer `fonte:` ou `norma:`, veja se o arquivo já existe; se existir, reutilize.
- **Dispositivo preciso:** "art. 84, XIV", "art. 66, § 4º", "RICD, art. 24, II".
- **Textos:** em português, escritos por você, para o público geral. `resumo` com uma frase de até 200 caracteres; `detalhes` com 1 a 3 frases.
- **Ids:** slugs sem acento, separados por hífen. Relações: `rel:<de>-<relacao>-<para>`, abreviando com legibilidade. Normas: `norma:<tipo>-<numero>-<ano>` (ex.: `norma:lc-95-1998`).
- **Organograma:** use `contido_em` com a fonte em `campos.contido_em`. Não crie relação `integra` que repita o `contido_em` (D34).
- **Objetos de competência** (`obj:`) são o alvo de relações sobre atos, normas e contas (D32). Ex.: "Presidente sanciona `obj:lei-ordinaria`".
- **Vocabulário:** se faltar um termo, **não edite** os vocabulários; use o mais próximo, anote no diário e proponha no relatório final.
- Não faça commit. Não edite arquivos de outras tarefas; se achar erro neles, anote no diário.

## Ao terminar

1. Rode a validação: seus arquivos não podem ter erro.
2. Mude o status da tarefa para `coletada`, preencha `concluida_em` e marque os entregáveis.
3. Relatório final (sua resposta), curto:
   - arquivos criados;
   - pontos incertos e avisos abertos;
   - termos de vocabulário que faltaram;
   - problemas do modelo de dados.

## Fase 2: leis estruturantes (D49, D50)

Cada tarefa da fase 2 cobre um conjunto de leis. Para cada lei:

1. **Cópia local.** Baixe o texto compilado do Planalto (ou da Casa/tribunal, para regimentos) para `pesquisa/brutos/planalto-leis/2026-10-28-<tarefa>/` (um arquivo por lei, como veio). Anote no diário a última alteração incorporada ("compilacao_ate") e confira se houve mudança entre 2026-10-01 e hoje.
2. **Norma.** Use a `norma:` existente (procure em `dados/normas/`); se não existir, crie.
3. **Quadro de cobertura** na própria tarefa, seção "Cobertura", uma tabela por lei: `| Artigos | Classe | Entidades ou motivo |`. Classes: `coberto` (há entidade que cita o artigo em `fontes` ou `campos`), `parcial`, `lacuna` (deveria estar e não está; diga o que falta) e `fora` (direitos e deveres individuais, crimes e penas, transição esgotada, detalhe de processo que não cria órgão, cargo nem etapa; diga qual motivo). Artigos vizinhos com a mesma classe podem ir numa linha (ex.: "arts. 10 a 19"). Termine com a conta: total de artigos vigentes e percentual (coberto + fora) / total.
4. **Entidades.** Crie o que a lei prevê e o mapa não tem: órgãos e colegiados internos (`contido_em` no órgão da tarefa), cargos de direção e de carreira no nível da lei (agregados, D11: sem pessoas abaixo da cúpula), relações com outras entidades (nomeia, supervisiona, integra, julga...) e processos que a lei descreve como sequência de atos. Ocupantes só da cúpula (D11) e só se a fonte oficial disser quem estava no cargo em 2026-10-01.
5. **Competências em incisos** (D50): vão no `detalhes` do órgão, com o artigo em `fontes`. Relação só quando o inciso liga o órgão a outra entidade do mapa.
6. Reaproveite o que existe: antes de criar, procure com Grep em `dados/` pelo nome e pela sigla. Se uma entidade existente já representa o que a lei prevê, só acrescente a lei às `fontes` dela (pode editar entidades existentes para isso; anote no diário).
7. Ao editar uma entidade existente, mude `verificacao` para `{ "status": "coletado", "em": "<hoje>", "tarefa": "<sua tarefa>", "notas": "<o que mudou>" }`, para que a revisão confira a mudança.
