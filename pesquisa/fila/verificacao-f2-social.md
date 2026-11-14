---
id: verificacao-f2-social
escopo: "Revisão independente da coleta f2-social (Leis 8.080, 8.142, 8.742, 9.394, 14.113, 8.212 e 8.213)"
status: pendente
depende_de: [f2-social]
---

Siga `pesquisa/instrucoes-verificacao.md`. Confira contra as fontes primárias (cópias em `pesquisa/brutos/planalto-leis/` da tarefa f2-social e o Planalto) todas as entidades com `verificacao.tarefa: "f2-social"`: as 64 criadas e as 25 existentes que a coleta editou (a nota em `verificacao.notas` diz o que mudou). Confira também o quadro de cobertura de `pesquisa/fila/f2-social.md`: diga se cada linha "fora" cabe na D49, no item 8 das instruções de fase 2 e nas D51 a D53; nas Leis 8.212 e 8.213, confira a lista de artigos vigentes (o Planalto deixa marcas de texto riscado sem fechar).

Pontos de atenção:
- NOB-Suas 2012 lida na edição do MDS, sem texto compilado: procure a resolução do CNAS e as alterações dos dispositivos usados (CIT e CIB do Suas);
- relações `inferido` (governador e prefeito homologam os conselhos de saúde; CGU no controle interno do Fundeb) e `contido_em` inferidos (conselhos do Fundeb e de educação nos arquétipos);
- Lei 8.080, art. 41, e Lei 8.212, art. 5º, como fora por superação (D51);
- `aviso:comissao-orcamento-seguridade-social-sem-registro` (Lei 8.212, art. 8º): diga se o aviso cabe (D36, D37);
- vigências `null` (Leis 9.836/1999, 12.466/2011 e 9.720/1998): preencha com a data de publicação ou de vigência que a lei disser;
- Conass e Conasems: reconhecimento em lei (Lei 8.080, art. 14-B) e o tipo de órgão;
- D54 criou a relação `concede` e o tipo de objeto `beneficio`: troque `rel:inss-julga-beneficio-de-prestacao-continuada` por uma relação `concede` (novo id, apague o antigo e corrija as referências) e o `tipo_objeto` do BPC para `beneficio`;
- composição e periodicidade dos conselhos e conferências de saúde e de assistência social contra a lei.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f2-social"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário
