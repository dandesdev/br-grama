---
id: f2-defesa-seguranca
escopo: "Fase 2 (D49): Forças Armadas, inteligência, Susp e leis orgânicas das polícias"
status: em-andamento
depende_de: [f0-defesa-seguranca]
iniciada_em: 2026-11-11
concluida_em: null
---

Leia `pesquisa/instrucoes-agentes.md`, inclusive a seção "Fase 2".

## Leis

- LC 97/1999 (organização, preparo e emprego das Forças Armadas): `norma:lc-97-1999`
- Lei 9.883/1999 (Sistema Brasileiro de Inteligência e ABIN)
- Lei 13.675/2018 (Sistema Único de Segurança Pública)
- Lei 14.735/2023 (Lei Orgânica Nacional das Polícias Civis) e Lei 14.751/2023 (Lei Orgânica Nacional das polícias militares e dos corpos de bombeiros militares), para o arquétipo estadual
- Lei 9.266/1996 e Lei 9.654/1998 (carreiras da Polícia Federal e da PRF), só no que estrutura cargos

## Entregáveis

- [ ] Cópias locais e quadro de cobertura de cada lei (seção "Cobertura").
- [ ] LC 97: confira o que já está (43 citações em `dados/`) e cubra o que falta: comandantes das Forças (escolha e nomeação), Estado-Maior Conjunto, emprego na garantia da lei e da ordem (`proc:` de GLO existe), atribuições subsidiárias.
- [ ] Sisbin: órgãos integrantes e o órgão central (ABIN, `org:abin`), o controle externo pelo Congresso (`org:ccai`), e o que a lei diz sobre o diretor-geral da ABIN (aprovação pelo Senado).
- [ ] Susp: órgãos integrantes, conselhos de segurança pública (nacional, estaduais e municipais) como colegiados, e o Plano e a Política Nacional como `obj:`.
- [ ] Arquétipo estadual: polícia civil (delegado-geral, órgãos previstos na lei orgânica nacional), polícia militar e corpo de bombeiros (comandante-geral, escolha), onde faltarem; cargos agregados.
- [ ] Carreiras da PF e da PRF no nível da lei (cargos agregados), se ainda não existirem.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Procure com Grep em `dados/` antes de criar: `org:forcas-armadas`, `org:marinha`, `org:exercito`, `org:aeronautica`, `org:estado-maior-conjunto-das-forcas-armadas`, `org:abin`, `org:sistema-brasileiro-de-inteligencia`, `org:sistema-unico-de-seguranca-publica`, `org:policia-federal`, `org:policia-rodoviaria-federal`, os órgãos de segurança do arquétipo estadual.
- Em paralelo: `f2-processos-constitucionais` e `f2-administracao`.

## Cobertura

## Diário

- 2026-11-11 23:33 — iniciada; lidos CLAUDE.md, decisoes (D08, D11, D14, D36, D37, D49 a D52), modelo, protocolo, instrucoes-agentes
- 2026-11-11 23:35 — cópias locais em pesquisa/brutos/planalto-leis/2026-11-11-f2-defesa-seguranca/ (Planalto por HTTP/1.1 com user-agent de navegador): lcp97.htm (compilacao_ate LC 136/2010), l9883.htm (MP 2.216-37/2001), l13675.htm (Lei 14.899/2024), l14735.htm e l14751.htm (sem alterações; partes vetadas promulgadas anotadas no texto), l9266.htm (Lei 13.034/2014), l9654.htm (Lei 14.875/2024). Fora os scripts do servidor, lcp97 é igual à cópia de 2026-10-20 e as demais (menos l9654, nova) iguais às de 2026-10-23; nenhuma alteração posterior a 2026-10-01
- 2026-11-11 23:38 — gravado norma:lei-9654-1998
- 2026-11-11 23:43 — gravadas norma:decreto-9489-2018, norma:decreto-10822-2021, norma:decreto-8793-2016, norma:decreto-12853-2026 (Creden; o Decreto 9.819/2019 foi revogado), norma:decreto-12996-2026, norma:decreto-12997-2026, norma:decreto-12998-2026 (conselhos nacionais de 8/6/2026), norma:decreto-12725-2025 e norma:decreto-legislativo-175-2025 (PND, END e LBDN); cópias dos decretos na pasta de brutos da tarefa (menos o 12.725, grande)
- 2026-11-11 23:44 — gravados obj:politica-nacional-de-inteligencia, rel:presidente-edita-politica-nacional-de-inteligencia, rel:ccai-assessora-presidente-politica-nacional-de-inteligencia, org:creden (Decreto 12.853/2026), rel:ministro-chefe-do-gsi-preside-creden, rel:creden-monitora-politica-nacional-de-inteligencia, cargo:diretor-adjunto-da-abin, rel:diretor-adjunto-da-abin-substitui-diretor-geral-da-abin, rel:orgaos-setoriais-de-controle-interno-controla-internamente-abin (inferido)
- 2026-11-11 23:44 — editado org:abin (detalhes: supervisão da Creden, dados do Sisbin, comunicação; fontes Lei 9.883 arts. 5º, 7º e 10)
