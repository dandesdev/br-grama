---
id: f0-educacao
escopo: "Fatia 0, lacunas da varredura: educação, CF arts. 211 a 214; ADCT, arts. 60 e 60-A"
status: pendente
depende_de: [f0-cobertura]
iniciada_em: null
concluida_em: null
---

## Entregáveis

- [ ] Sistemas de ensino em regime de colaboração (art. 211): federal, estadual e municipal (tipo `sistema`), com as prioridades de atuação de cada ente (§§ 2º e 3º).
- [ ] Piso constitucional da educação (art. 212) como `obj:` do tipo `regra-fiscal`; o salário-educação já existe como tributo (`obj:tributo-salario-educacao`): ligue, sem recriar.
- [ ] Fundeb (art. 212-A; Lei 14.113/2020) como `obj:` do tipo `fundo`, com os repasses e a complementação da União.
- [ ] Plano Nacional de Educação (art. 214): a lei vigente em 2026-10-01 (confira se o PNE de 2014 foi prorrogado ou substituído) como `obj:` e norma.
- [ ] Conselho Nacional de Educação (Lei 9.131/1995) como colegiado do Ministério da Educação, se ajudar a mostrar quem decide.
- [ ] Para cada artigo do escopo, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes antes de criar (não use find em `dados/entes`). Referencie sem recriar: ministérios (`org:ministerio-*`), `org:congresso-nacional`, `org:camara-dos-deputados`, `org:senado-federal`, `org:stf`, `org:stj`, `org:tst`, `org:cnj`, `org:trf-1` a `org:trf-6`, `org:tj-<uf>`, arquétipos estaduais e municipais (`org:arquetipo-estadual-*`, `org:arquetipo-municipal-*`, `cargo:arquetipo-*`), `ente:uniao`, `ente:arquetipo-estadual`, `ente:arquetipo-municipal`, `proc:lei-ordinaria`, `proc:lei-complementar`, `proc:lei-estadual`.
- O quadro e as propostas da varredura estão em `pesquisa/fila/f0-cobertura.md` (seção "Propostas de tarefa"): ids ali são propostas, e as normas listadas como "fontes prováveis" precisam ser conferidas antes do uso.

## Diário
