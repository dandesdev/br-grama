---
id: f5-i18n-interface
escopo: "Fase 5 (D66): interface em inglês, troca de idioma, junção das sobreposições no build e vocabulários"
status: pendente
depende_de: []
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

- [ ] `web/src/i18n.ts`: idioma atual (`?lang=en` > escolha guardada no navegador > português), função `t(texto, variaveis?)` que recebe o texto em português (com `{nome}` para variáveis) e devolve a tradução de `interface.json` ou o próprio texto; troca de idioma recarrega a página com `?lang=`.
- [ ] Todos os textos fixos da interface passam por `t()`: `web/index.html` (via atributos `data-t` aplicados no carregamento, ou gerados por código), `main.ts`, `painel.ts`, `mapa.ts`, `fluxo.ts`, `matriz.ts`, `dinheiro.ts`, `calendario.ts`, `sobre.ts`, `dados.ts` (nomes de tipos, grupos). Datas e números no formato do idioma (`en-GB`) quando em inglês. `<html lang>` muda.
- [ ] Botão de idioma na barra ("EN" em português, "PT" em inglês), visível também no celular (D65).
- [ ] `i18n/en/interface.json` com todas as chaves usadas (um script em `scripts/i18n-chaves.ts` que acha as chamadas `t("...")` e lista as que faltam), e `i18n/en/vocabularios.json` com nome e definição traduzidos de `esquema/vocabularios/relacoes.json`, `tipos-orgao.json` e `gerais.json` (mesma estrutura, só os campos `nome` e `definicao`), e os nomes das regiões do mapa se forem texto.
- [ ] `scripts/build-dados.ts` gera `web/public/dados/en.json` juntando `i18n/en/` (interface, vocabulários e `entidades/*.json` que existirem; outros agentes estão escrevendo os de entidades agora) e avisa ids inexistentes. No site, em inglês, `dados.ts` carrega `en.json` e troca nome, resumo e ação das etapas e os vocabulários; o painel mostra uma linha "Details and legal sources are in Portuguese." acima dos detalhes.
- [ ] Conferir no navegador em português (nada muda) e em inglês, no desktop e no celular, com `node C:/Users/DELL/scratch-brgram/scr/cdp.mjs <url> <passos.js> [png]` (variável `MOBILE=390x844` para celular; sirva com `npm run -s build:dados && npx vite build && npx vite preview --port 4319 --strictPort` e pare o servidor no fim com PowerShell `Get-NetTCPConnection -LocalPort 4319 -State Listen | % { Stop-Process -Id $_.OwningProcess -Force -Confirm:$false }`). `npx tsc --noEmit` sem erro.

## Diário
