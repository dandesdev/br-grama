# Instruções comuns para agentes de pesquisa

Você é um agente de pesquisa do br-grama (raiz: `C:\Users\DELL\apps\brgram`). Hoje é 2026-10-16. A data de referência do retrato é **2026-10-01**.

## Antes de começar

1. Leia `CLAUDE.md`, `docs/modelo-de-dados.md`, `docs/protocolo-pesquisa.md`, `esquema/entidades.schema.json`, `esquema/comum.schema.json` e os vocabulários em `esquema/vocabularios/`.
2. Abra o arquivo da sua tarefa em `pesquisa/fila/<tarefa>.md`. Mude `status` para `em-andamento`, preencha `iniciada_em` e acrescente uma linha ao diário.
3. Para pesquisar na web, carregue as ferramentas com ToolSearch (`select:WebFetch,WebSearch`).

## Como trabalhar

- Grave cada entidade em `dados/<pasta>/<slug>.json` **assim que ela ficar pronta**, e acrescente uma linha ao diário da tarefa (`- AAAA-MM-DD HH:MM — gravado org:...`). Nunca apague linhas do diário.
- Rode `npm run -s validar` na raiz com frequência. Corrija os erros dos **seus** arquivos. Erros de "referência inexistente" para ids de outras tarefas são esperados enquanto elas trabalham em paralelo; ignore-os.
- `verificacao`: `{ "status": "coletado", "em": "2026-10-16", "tarefa": "<id da tarefa>" }`.
- **Nunca invente** fonte, dispositivo, URL, nome, data ou número. Se não achar, use `confianca: "indisponivel"` e crie um `achado:` citando onde você procurou.
- Fontes primárias primeiro (Constituição e leis no planalto.gov.br, regimentos nos sites das casas e tribunais, páginas oficiais). Wikipedia só como pista; cite a fonte primária que ela aponta. Se usar fonte secundária, marque `confianca: "secundario"` no campo ou na entidade.
- O texto compilado do Planalto mostra a redação atual; confirme que nada mudou entre 2026-10-01 e hoje para os dispositivos que você citar.
- Para o campo `arquivo` (Wayback Machine) de normas e fontes: consulte `https://archive.org/wayback/available?url=<url>` e use o snapshot se houver; se não houver, `null`.
- Antes de criar um `fonte:`, verifique se o arquivo já existe em `dados/fontes/`; se existir, reutilize.
- `dispositivo` deve ser preciso: "art. 84, XIV", "art. 66, § 4º", "RICD, art. 24, II".
- Textos em português, com suas palavras, para o público geral: `resumo` com uma frase (até 200 caracteres); `detalhes` com 1 a 3 frases. Não copie textos de terceiros.
- Convenção de ids: slugs em minúsculas sem acento, separados por hífen. Relações: `rel:<slug-de>-<relacao>-<slug-para>` (abrevie se ficar longo demais, mantendo legível). Normas: `norma:<tipo-curto>-<numero>-<ano>` (ex.: `norma:lc-95-1998`, `norma:ec-16-1997`).
- Se um termo que você precisa não existir nos vocabulários, **não edite os vocabulários**: use o termo mais próximo, anote no diário e inclua a proposta no relatório final.
- Não faça commit. Não edite arquivos que pertencem a outras tarefas (veja a tabela abaixo).

## Quem cria o quê (para evitar colisões)

| Tarefa | Cria |
|---|---|
| piloto-estrutura | `ente:uniao`; `norma:ristf` e emendas constitucionais que citar; `org:eleitorado-nacional`, `org:poder-executivo-federal`, `org:poder-legislativo-federal`, `org:poder-judiciario`, `org:presidencia-da-republica`, `org:vice-presidencia-da-republica`, `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:mesa-do-congresso-nacional`, `org:mesa-da-camara-dos-deputados`, `org:mesa-do-senado-federal`, `org:stf`, `org:tcu`; os cargos da sua lista; relações entre essas entidades, **exceto** as do grupo "normas" |
| piloto-processo-lei | `proc:lei-ordinaria`; `norma:ricd`, `norma:risf`, `norma:rccn`, `norma:lindb`, `norma:lc-95-1998`; comissões, plenários, tribunais superiores, PGR, Imprensa Nacional e o que mais o processo exigir; relações do grupo "normas" (propoe, delibera, sanciona, veta, aprecia-veto, promulga, publica) |
| piloto-pessoas | `pessoa:*`, `org:partido-*`, relações `ocupa` |
| piloto-municipal | entes estaduais e municipais, órgãos e cargos `arquetipo-*`, tribunais de contas municipais e dos municípios, variações e normas estaduais/municipais |

Todas podem criar `fonte:*` e `achado:*`. `norma:cf-1988` já existe.

## Ao terminar

1. Rode a validação e garanta que seus arquivos não têm erros (exceto referências a ids que outra tarefa vai criar).
2. Mude o status da tarefa para `coletada`, preencha `concluida_em` e marque os entregáveis concluídos.
3. Relatório final (sua resposta), curto:
   - arquivos criados;
   - pontos incertos e achados abertos;
   - termos de vocabulário que faltaram;
   - **problemas do modelo de dados** que você encontrou: campos que faltaram, que sobraram ou que ficaram ambíguos. O piloto existe para descobrir isso, então seja específico.
