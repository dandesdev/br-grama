---
id: f5-i18n-interface
escopo: "Fase 5 (D66): interface em inglês, troca de idioma, junção das sobreposições no build e vocabulários"
status: concluida
depende_de: []
iniciada_em: 2026-11-16
concluida_em: 2026-11-16
---

Leia `CLAUDE.md`, `docs/decisoes.md` (D11, D27, D51, D63, D65 e D66) e `docs/modelo-de-dados.md`.

Formato das sobreposições (D66): `i18n/en/entidades/<pasta>.json`, um objeto `{ "<id>": { "nome": "...", "resumo": "...", "etapas": { "<id da etapa>": "<ação em inglês>" } } }`, com as chaves na ordem dos arquivos de `dados/<pasta>/` (ordem alfabética do id). `etapas` só em processos. Traduza o sentido, em frases curtas e claras para um leitor estrangeiro sem formação jurídica; não acrescente informação que o original não tem; mantenha números, artigos e siglas. Se o texto em português parecer errado, não corrija: anote no diário.

## Glossário (use sempre estes termos)

| Português | Inglês |
|---|---|
| União / estados / Distrito Federal / municípios | Federal Government (the Union, quando o texto fala do ente) / states / Federal District / municipalities |
| Poder Executivo / Legislativo / Judiciário | Executive / Legislative / Judicial Branch |
| Presidente da República | President of the Republic |
| Ministério / Ministro de Estado | Ministry / Minister of State |
| Secretaria / Secretário | Secretariat / Secretary |
| Congresso Nacional / Câmara dos Deputados / Senado Federal | National Congress / Chamber of Deputies / Federal Senate |
| Assembleia Legislativa / Câmara Municipal | State Legislative Assembly / Municipal Council |
| Supremo Tribunal Federal / Superior Tribunal de Justiça | Federal Supreme Court / Superior Court of Justice |
| Tribunal Superior Eleitoral / do Trabalho / Superior Tribunal Militar | Superior Electoral Court / Superior Labour Court / Superior Military Court |
| Tribunal Regional Federal / Tribunal de Justiça | Federal Regional Court / State Court of Justice |
| Conselho Nacional de Justiça / do Ministério Público | National Council of Justice / National Council of the Public Prosecution Service |
| Ministério Público (da União, Federal, estadual) | Public Prosecution Service (of the Union, Federal, state) |
| Procurador-Geral da República | Prosecutor General of the Republic |
| Advocacia-Geral da União | Office of the Attorney General of the Union |
| Defensoria Pública | Public Defender's Office |
| Tribunal de Contas da União | Federal Court of Accounts |
| Controladoria-Geral da União | Office of the Comptroller General |
| autarquia / fundação pública / empresa pública / sociedade de economia mista | autonomous agency (autarquia) / public foundation / state-owned company / mixed-capital company |
| agência reguladora | regulatory agency |
| conselho / comitê / comissão / colegiado | council / committee / commission / collegiate body |
| medida provisória / lei complementar / emenda constitucional | provisional measure / complementary law / constitutional amendment |
| decreto legislativo / resolução | legislative decree / resolution |
| sanção / veto / promulgação | assent (sanction) / veto / promulgation |
| quórum / maioria absoluta / maioria simples | quorum / absolute majority / simple majority |
| mandato / posse / nomeação | term of office / taking office / appointment |
| intervenção federal / estado de defesa / estado de sítio | federal intervention / state of defence / state of siege |

Siglas e nomes próprios de leis ficam como estão (STF, Lei 8.112/1990). Quando o órgão tem nome oficial em inglês no próprio site (ex.: o STF usa "Federal Supreme Court"), use esse. Inglês americano ou britânico: britânico (labour, defence), de forma consistente.

## Entregáveis

- [x] `web/src/i18n.ts`: idioma atual (`?lang=en` > escolha guardada no navegador > português), função `t(texto, variaveis?)` que recebe o texto em português (com `{nome}` para variáveis) e devolve a tradução de `interface.json` ou o próprio texto; troca de idioma recarrega a página com `?lang=`.
- [x] Todos os textos fixos da interface passam por `t()`: `web/index.html` (via atributos `data-t` aplicados no carregamento, ou gerados por código), `main.ts`, `painel.ts`, `mapa.ts`, `fluxo.ts`, `matriz.ts`, `dinheiro.ts`, `calendario.ts`, `sobre.ts`, `dados.ts` (nomes de tipos, grupos). Datas e números no formato do idioma (`en-GB`) quando em inglês. `<html lang>` muda.
- [x] Botão de idioma na barra ("EN" em português, "PT" em inglês), visível também no celular (D65).
- [x] `i18n/en/interface.json` com todas as chaves usadas (um script em `scripts/i18n-chaves.ts` que acha as chamadas `t("...")` e lista as que faltam), e `i18n/en/vocabularios.json` com nome e definição traduzidos de `esquema/vocabularios/relacoes.json`, `tipos-orgao.json` e `gerais.json` (mesma estrutura, só os campos `nome` e `definicao`), e os nomes das regiões do mapa se forem texto.
- [x] `scripts/build-dados.ts` gera `web/public/dados/en.json` juntando `i18n/en/` (interface, vocabulários e `entidades/*.json` que existirem; outros agentes estão escrevendo os de entidades agora) e avisa ids inexistentes. No site, em inglês, `dados.ts` carrega `en.json` e troca nome, resumo e ação das etapas e os vocabulários; o painel mostra uma linha "Details and legal sources are in Portuguese." acima dos detalhes.
- [x] Conferir no navegador em português (nada muda) e em inglês, no desktop e no celular, com `node C:/Users/DELL/scratch-brgram/scr/cdp.mjs <url> <passos.js> [png]` (variável `MOBILE=390x844` para celular; sirva com `npm run -s build:dados && npx vite build && npx vite preview --port 4319 --strictPort` e pare o servidor no fim com PowerShell `Get-NetTCPConnection -LocalPort 4319 -State Listen | % { Stop-Process -Id $_.OwningProcess -Force -Confirm:$false }`). `npx tsc --noEmit` sem erro.

## Diário
- 2026-11-16 — iniciada; lidos CLAUDE.md, decisões (D11, D27, D51, D63, D65, D66), o código de `web/src/`, `web/index.html` e `scripts/build-dados.ts`.
- 2026-11-16 — linha de base do português: build do commit 1d02f45c servido na porta 4319; gravado o HTML de 17 estados (legenda; STF; Presidente da República; Deputado Federal com os 513 ocupantes; Ministério da Saúde com a árvore do SIORG; processo da lei ordinária, com rótulos do fluxo e das estações do mapa; etapa 1; avisos; orçamento com rótulos do mapa; Competências; Dinheiro; Calendário; Sobre; busca "saude" e "conselho nacional de saude" com títulos das regiões; verbos das arestas, filtros e lista de processos), no desktop e no celular (390x844), e uma cópia do build para comparar pixels.
- 2026-11-16 — `web/src/i18n.ts`: idioma = `?lang=` > escolha guardada (`localStorage`, chave `br-grama:idioma`) > português; carrega `dados/en.json` com await no topo do módulo (antes de qualquer texto); `t(texto, variaveis)` com `{nome}`; `trocarIdioma()` guarda a escolha e recarrega com `?lang=`; `traduzirHtml()` aplica `data-t` (texto) e `data-t-attr` (atributos) de `index.html`. Se `en.json` não carregar, o site fica todo em português (idioma, números e `<html lang>`).
- 2026-11-16 — `index.html`: marcados com `data-t`/`data-t-attr` o título, a prévia, a busca, os filtros, as abas e os rótulos de acessibilidade; os textos soltos (Todas, Avisos, Orçamento e a frase da prévia) foram embrulhados em `<span>`. Botão `#idioma` ("EN" em português, "PT" em inglês) antes do botão de tema, na barra do desktop e do celular (`estilo.css`: `#idioma`, `.aviso-idioma`).
- 2026-11-16 — `t()` em `main.ts`, `painel.ts`, `mapa.ts` (regiões e "exceção a"), `fluxo.ts` (raias), `matriz.ts`, `dinheiro.ts` (os destinos dos repasses viraram chaves internas), `calendario.ts` (meses em inglês, períodos "{de} a {ate}"), `sobre.ts` e `dados.ts` (grupos de relação, tipos). Plurais por chaves separadas. Em inglês: números e valores em en-GB ("R$ 251.8 billion", curto "R$ 251.8 bn", "tn", "m"), datas dd/mm/aaaa (mesmo formato do en-GB), ordenação por nome com a localidade do idioma, `<html lang="en">`.
- 2026-11-16 — `dados.ts`: `carregar()` aplica o `en.json` ao grafo antes de montar `Dados` (nome, resumo e ação das etapas; nome e definição dos termos); o nome original fica em `nome_pt`, e a busca e o filtro da matriz acham pelo nome em inglês ou em português. Em inglês as arestas do mapa mostram o nome do termo (`dados.nomeDe`); em português continua o valor com espaços, como antes. O painel mostra "Details and legal sources are in Portuguese." acima do botão "i" de cada ficha, logo abaixo do título da etapa, na legenda e na lista de avisos; a aba Sobre ganha, só em inglês, um parágrafo dizendo o que ficou em português.
- 2026-11-16 — `scripts/i18n-chaves.ts` (`npm run i18n:chaves`, opção `--json` para listar as que faltam prontas para colar): acha `t("...")` em `web/src/*.ts` e `data-t`/`data-t-attr` em `index.html`, compara com `i18n/en/interface.json`, lista as que faltam, as que sobram e as traduções com variáveis diferentes do original; sai com erro se faltar chave. Resultado: 275 chaves, tudo certo.
- 2026-11-16 — gravados `i18n/en/interface.json` (275 chaves) e `i18n/en/vocabularios.json` (221 termos: 67 relações, 31 tipos de órgão, 123 dos vocabulários gerais; mesma estrutura do grafo, só `nome` e `definicao`), em inglês britânico e com o glossário da tarefa. Os nomes das regiões do mapa estão no código e passam por `t()`.
- 2026-11-16 — `scripts/build-dados.ts`: `juntarTraducoes()` gera `web/public/dados/<idioma>.json` para cada pasta de `i18n/` (interface, vocabulários e os `entidades/*.json` que existirem), só com nome, resumo e etapas; avisa id inexistente, etapa inexistente, termo inexistente e arquivo que não é JSON (pula o arquivo); o mesmo id em dois arquivos é juntado. Testado com dois arquivos temporários (JSON quebrado; id e etapa inexistentes), apagados em seguida. Com os quatro arquivos dos outros agentes como estavam: 1208 entidades, os 1017 nós do mapa com nome em inglês.
- 2026-11-16 — conferido no navegador. Português: o HTML dos 17 estados ficou idêntico à linha de base, no desktop e no celular (descontados os atributos `data-t`, os `<span>` novos e o botão EN); o PNG do Cytoscape (mapa inteiro, mapa com STF selecionado, mapa e fluxo da lei ordinária, fluxo da eleição geral, camadas orçamento + avisos + todas as relações) tem o mesmo hash do build anterior, no desktop e no celular. Inglês (`?lang=en`): as seis abas no desktop e no celular, filtros abertos no celular, fichas de órgão, cargo, processo e etapa, avisos e orçamento; nenhuma exceção no console; capturas em `C:/Users/DELL/scratch-brgram/f5-i18n/shots/`. Troca: o botão EN leva a `?lang=en` e guarda "en"; sem `?lang` a página abre em inglês; `?lang=pt` vence a escolha guardada; o botão PT leva a `?lang=pt` e guarda "pt". Com um `en.json` sem entidades, a interface fica em inglês e os nomes em português.
- 2026-11-16 — `npx tsc --noEmit` sem erro; `npm run -s validar` sem erro.
- 2026-11-16 — ficam em português, além do que a D66 manda (detalhes, notas, fontes, normas, pessoas, avisos), por não serem nome ou resumo de nó nem ação de etapa: as variantes (regimes) dos processos; o nome e a condição das relações (os repasses da aba Dinheiro e a ficha de uma relação aparecem em português); as condições ("quando") nas setas do fluxo; os textos de prazo, quórum e mandato (início, limite, recondução), requisitos e casos de provimento; as unidades do SIORG; a gravidade dos avisos. Relações e variantes podem ganhar sobreposição no mesmo formato, se o mantenedor quiser.
- 2026-11-16 — pendências: (1) a tradução da interface e dos vocabulários ainda não passou pela revisão por amostra da D66; (2) o layout é calculado com os nomes em português, e um nome em inglês mais longo pode quebrar em mais linhas que a caixa do nó (não vi transbordo nas vistas conferidas, mas não olhei os 1017 nós); (3) no celular o botão EN tira cerca de 50 px da busca.
- 2026-11-16 — português que parece errado, não corrigido para o site não mudar: (a) a região dos objetos de competência tem como título o id cru "objetos" (falta a chave em `NOMES_REGIAO`, `mapa.ts`); em inglês sai "Objects of competence"; (b) cargo com mandato de 1 ano mostra "1 anos" (ex.: Presidente do TCU); em inglês sai "1 year"; (c) a definição de `nomeacao-com-aprovacao-do-senado` cita o campo interno `provimento_nota` (a tradução repete); (d) a etiqueta "Fonte de "contido_em"" mostra o nome do campo, nas duas línguas.
