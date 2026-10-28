---
id: f0-sugestoes-revisoes
escopo: "Fatia 0, fechamento: sugestões pequenas deixadas pelas revisões das coletas de lacunas (fundos, conselhos, legislativo, federação)"
status: em-andamento
depende_de: [f0-fechamento]
iniciada_em: 2026-10-27
concluida_em: null
---

## Entregáveis

Cada item é pequeno. Antes de criar, procure em `dados/` se já existe. Se a fonte oficial não for achada, não invente: anote no diário (ou abra `aviso:` se for lacuna da fonte).

Fundos (relação `gere`, "administra um fundo"):
- [ ] Ministério da Saúde gere o Fundo Nacional de Saúde; MDS gere o Fundo Nacional de Assistência Social; INSS gere o Fundo do Regime Geral de Previdência Social. Só crie se a norma disser que o órgão administra ou gere o fundo (o texto hoje só está nos detalhes das entidades). Use os ids existentes dos fundos e órgãos.
- [ ] CF, art. 165, § 5º, III (orçamento da seguridade social): acrescente como fonte onde couber no INSS ou no fundo do RGPS, só em `fontes` ou `notas`.

Dinheiro:
- [ ] Relação: o Ministro do Trabalho nomeia os membros do Codefat (Lei 7.998/1990, art. 18, § 4º), com `orgao_exercicio` na pasta do Trabalho (D42 não se aplica, é relação: use o campo `orgao_exercicio` da relação). Use o cargo dos membros se existir; senão, a relação pode ir para o órgão com a condição explicando.
- [ ] Normas: Lei 8.706/1993 (Sest/Senat) e MP 2.168-40/2001 (Sescoop), ligadas a `org:sistema-s` por `fontes` ou `notas`.
- [ ] Aviso de lacuna: o conselho consultivo e de acompanhamento do fundo de combate à pobreza perdeu a regulamentação (artigos revogados pelo Decreto 10.223/2020), embora a LC 111/2001 o preveja. Confira antes de abrir.

Educação:
- [ ] Normas: Lei 11.494/2007 (Fundeb anterior, cria a comissão intergovernamental) se alguma entidade a cita no texto e ainda não está cadastrada.

Legislativo:
- [ ] Relações `preside` que ainda descrevem a convocação de colegiado no texto (procure `convoca` na `condicao` ou `notas` de relações `preside`): ajuste só o texto, porque a convocação agora tem relação própria (`convoca`).
- [ ] `proc:crime-de-responsabilidade-do-presidente`: diga nos detalhes da etapa final que em 2016 a inabilitação foi votada separada da perda do cargo, se a fonte oficial (Resolução do Senado de 2016 ou notícia do Senado) sustentar.

Federação:
- [ ] Constituição da Bahia: confira se ainda dá ao TCM a representação para intervenção nos incisos I a III do art. 35. Se sim, abra `aviso:` de contradição (o STF julgou inconstitucional regra igual do Pará na ADI 2.631), ligado a `proc:intervencao-estadual`.
- [ ] Regime de urgência do prefeito em `proc:lei-municipal`: acrescente como `regime` se as leis orgânicas de SP e do Rio (já em brutos) o preverem, com prazo e efeito.

- [ ] Para cada item, diga no diário se ficou coberto; o que não couber vira proposta no relatório.

## Ids de outras tarefas (podem ser referenciados; não crie)

- Use Grep em `dados/` para achar ids existentes. Os fundos, o INSS, o Codefat, `org:sistema-s`, os Conselhos e os processos citados já existem.
- D40 (relação `ocupa` com `interino: true`) e D42 (ator de etapa `{ ator, orgao_exercicio }`) já valem.

## Diário

- 2026-10-27 22:06 — iniciada; lidos CLAUDE.md, decisoes (até D42), modelo-de-dados, protocolo e instruções
