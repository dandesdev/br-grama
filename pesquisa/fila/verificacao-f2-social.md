---
id: verificacao-f2-social
escopo: "Revisão independente da coleta f2-social (Leis 8.080, 8.142, 8.742, 9.394, 14.113, 8.212 e 8.213)"
status: verificada
depende_de: [f2-social]
iniciada_em: 2026-11-14
concluida_em: 2026-11-14
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
- 2026-11-14 — iniciada; lidos CLAUDE.md, D36, D37, D49 a D54, modelo de dados, protocolo, instruções de verificação e da fase 2, quadro e diário da f2-social; 89 entidades com verificacao.tarefa f2-social (lista em C:/Users/DELL/scratch-brgram/rev-so/lista.txt)
- 2026-11-14 — textos convertidos em C:/Users/DELL/scratch-brgram/rev-so/ (marcas de texto riscado como ⟦⟧); baixados do Planalto (HTTP/1.1, user-agent de navegador) os Decretos 5.839/2006, 7.508/2011 e 12.716/2025 e as Leis 9.836/1999, 12.466/2011, 9.720/1998 e 15.120/2025
- 2026-11-14 — corrigidos org:conferencias-de-assistencia-social e rel:cnas-convoca-conferencias-de-assistencia-social: diziam que o CNAS convoca extraordinariamente por maioria absoluta; isso era da redação original do art. 18, VI, da Lei 8.742, trocada pela Lei 9.720/1998 (só convocação ordinária a cada quatro anos); quórum tirado da relação
- 2026-11-14 — SUS verificado (22 sem mudança): org:sistema-unico-de-saude, org:ministerio-da-saude, as secretarias de saúde dos arquétipos, CIT, CIB, conselho municipal de saúde, CNS (48 membros, mandato de 3 anos, eleição a cada 3 anos: Decreto 5.839/2006, arts. 3º, 4º e 7º), as relações convoca, homologa do Ministro, integra de Conass e Conasems no CNS e na CIT, consórcios no SUS, comissões intersetoriais e de integração ensino-serviço, Conitec assessora o MS, MS coordena o subsistema indígena, FNS e os dois repasses da saúde
- 2026-11-14 — SUS corrigido: org:conitec (composição tinha 16 membros; faltava o Núcleo de Avaliação de Tecnologias em Saúde da Rebrats, Decreto 7.646/2011, art. 7º, IX, red. Decreto 12.716/2025); proc:incorporacao-de-tecnologia-no-sus (exemplos de requerentes sem fonte saíram; impacto orçamentário e iniciativa do MS ou da Conitec nos protocolos, art. 15, § 1º, VII, e § 1º-A); org:subsistema-de-atencao-a-saude-indigena ("média e alta complexidade" não está na lei, art. 19-G, §§ 2º e 3º; vigência 1999-09-24, DOU da Lei 9.836); org:conass e org:conasems ("associação" sem fonte, trocado por "entidade"; natureza privada como leitura nossa); FNS repassa ao Conass e ao Conasems com vigência 2011-08-25 (DOU da Lei 12.466); governador e prefeito homologam: confiança inferida mantida, nota sobre o modelo federal (o Decreto 5.839, art. 1º, dá a homologação ao Ministro, não ao Presidente)
- 2026-11-14 — D54 aplicada: criada rel:inss-concede-beneficio-de-prestacao-continuada (relação 'concede'; recurso do indeferimento à Junta de Recursos do CRPS com fonte, Decreto 6.214/2007, Anexo, art. 36, § 1º) e apagado o arquivo inss-julga-beneficio-de-prestacao-continuada; não havia referência em dados/, src/ nem scripts/; referências trocadas no quadro de cobertura de f2-social (linhas dos arts. 21-A, 26-F e 26-G e 35 da Lei 8.742; o diário de f2-social não foi mexido); obj:beneficio-de-prestacao-continuada com tipo_objeto 'beneficio' e sem o campo inferido; rel:mds-regula-beneficio-de-prestacao-continuada verificado
- 2026-11-14 — NOB-Suas: não achei texto compilado, data de DOU nem resolução que altere os arts. 128 a 137 (MDS, Wayback, busca na web); conferidas contra a edição de 2012 a CIT e a CIB do Suas (composição 5+5+5 e 6+6, nomeação por ato do Ministro e do Secretário estadual) e as duas relações integra; aberto aviso:nob-suas-sem-texto-compilado (baixa-transparencia, baixa), no modelo de aviso:risf-rccn-compilacao-ate-julho-2025; norma:resolucao-cnas-33-2012 verificada com vigência ainda null
- 2026-11-14 — assistência social verificada: CNAS, conselheiro e nomeação, secretarias e conselhos dos arquétipos, relações coordena, repasses da União; corrigidos org:sistema-unico-de-assistencia-social ("entidades beneficentes" trocado pelas entidades ligadas ao Suas, art. 6º-B; CadÚnico "poderá" ser exigido e aceita inscrição eletrônica, art. 6º-F, §§ 1º e 2º, red. Lei 14.601/2023), obj:fundo-nacional-de-assistencia-social (fonte do art. 19, VII, para os relatórios trimestrais) e rel:mds-repassa-recursos-inss (vigência 1998-12-01, DOU da Lei 9.720)
- 2026-11-14 — seguridade verificada: org:inss, CNPS (6 + 9, mandato de 2 anos da sociedade civil, Lei 8.213, art. 3º), as quatro relações arrecada da Receita (Lei 8.212, arts. 11, parágrafo único, e 33), norma:lei-8212-1991, norma:decreto-6214-2007, norma:decreto-7646-2011 (o Decreto 12.929/2026 só incluiu o art. 15, § 1º-C, imunoterapia); corrigidos org:ouvidoria-geral-da-previdencia-social (resumo dizia "denúncias" e "coordena as ouvidorias"; o Decreto 11.356/2023, Anexo I, art. 10, II e III, diz "reclamações, elogios e sugestões" e "comitê técnico das ouvidorias") e rel:uniao-repassa-recursos-fundo-do-regime-geral-de-previdencia-social (vigência 1991 anterior ao fundo de destino, criado pela LRF em 2000: agora 2000-05-05; o repasse mensal do art. 19 da Lei 8.212 vai ao orçamento da seguridade inteiro, e a condição passou a dizer isso)
- 2026-11-14 — Lei 8.212, art. 8º: a página de dados da norma da Câmara diz "Não consta revogação expressa" do decreto de 4/8/1992; fonte e aviso atualizados e verificados. O aviso cabe (D37, lacuna: não há registro público da designação dos membros nem de reuniões); não é fato com fonte (D36). Ponto para o coordenador: como lei e decreto seguem no texto, a comissão existe formalmente (D03) e poderia ganhar nó de colegiado (art. 8º passaria a coberto), com o aviso apontando para ele
- 2026-11-14 — listas de artigos vigentes das Leis 8.212 e 8.213 refeitas por script (C:/Users/DELL/scratch-brgram/rev-so/arts.py), lendo o HTML do Planalto parágrafo a parágrafo e fechando o riscado no fim de cada parágrafo: 8.212 com 112 artigos, 26 revogados ou vetados, 86 vigentes; 8.213 com 183, 30 revogados, vetados ou de MP caduca, 153 vigentes; as duas listas de "fora da conta" do quadro de f2-social batem uma a uma; os casos duvidosos (8.212, arts. 5º, 39, 54, 74, 92 e 95, § 2º) conferem
- 2026-11-14 — educação e Fundeb verificados: conselho estadual de educação, conselhos escolares (LDB, art. 14, §§ 1º a 3º, e art. 90-A), MEC coordena o sistema federal, os três conselhos do Fundeb e as três relações fiscaliza (composição conferida com a Lei 14.113, art. 34, I, II, IV e § 1º), Inep e MEC monitoram, os dois repasses do Fundeb, a complementação da União, obj:fundeb, piso e CAQ; CGU no controle interno com confiança inferida mantida (art. 30, I, não nomeia o órgão); contido_em inferido dos conselhos do Fundeb e de educação nos sistemas de ensino mantido (LDB, arts. 16, III, 17, IV, e 18, III, põem os órgãos de educação de cada ente no seu sistema; a LC 220, art. 16, III, só os põe no SNE)
- 2026-11-14 — educação corrigida: org:arquetipo-municipal-conselho-de-educacao ("só existe onde o município mantém sistema próprio" sem fonte; trocado pelo "quando houver" da Lei 14.113, art. 34, § 1º, I); org:conselho-de-acompanhamento-e-controle-social-do-fundeb ("em especial a complementação da União" é do inciso do TCU, art. 30, III; acrescidos mandato de 4 anos sem recondução e reunião ao menos trimestral, art. 34, §§ 9º e 12); as duas relações homologa do Executivo sobre os conselhos de educação com vigência 2025-11-03 (DOU da LC 220/2025)
- 2026-11-14 — quadro de cobertura: Lei 8.742, art. 39 (CNAS propõe ao Executivo, por maioria absoluta, mudar os limites de renda do BPC e dos benefícios eventuais) passou de fora para coberto, com o artigo nos detalhes e nas fontes de org:conselho-nacional-de-assistencia-social (liga o CNAS ao Executivo; não é regra técnica da D53); conta da Lei 8.742: coberto 34, fora 34, 100%; npm run -s cobertura:leis roda limpo
- 2026-11-14 — textos do Planalto baixados de novo hoje (Leis 8.080, 8.142, 8.742, 9.394, 14.113, 8.212 e 8.213): iguais, palavra por palavra, às cópias de 2026-11-11; nenhuma alteração depois de 2026-10-01
- 2026-11-14 — npm run -s validar sem erros (os avisos que aparecem são de entidades de outras tarefas: secretaria-federal-de-controle-interno e secretaria-do-tesouro-nacional citam ids inexistentes); tarefa verificada

## Relatório

**Conferidas:** as 89 entidades com verificacao.tarefa f2-social (88 arquivos mais o que foi substituído); todas verificadas, nenhuma pendente. Corrigidas: 14 por erro de conteúdo ou de fonte, 9 só com vigência preenchida, nota ou atualização (inclusive o aviso e a fonte do art. 8º da Lei 8.212) e 2 pela D54. Criados: rel:inss-concede-beneficio-de-prestacao-continuada (substitui a relação 'julga', apagada) e aviso:nob-suas-sem-texto-compilado.

**Correções de conteúdo:**
- org:conferencias-de-assistencia-social e rel:cnas-convoca-conferencias-de-assistencia-social: a convocação extraordinária por maioria absoluta é da redação original do art. 18, VI, da Lei 8.742, trocada pela Lei 9.720/1998; saiu o quórum da relação.
- org:conitec: faltava o representante do Núcleo de Avaliação de Tecnologias em Saúde da Rebrats; são 17 membros por comitê (Decreto 7.646/2011, art. 7º, I a X).
- proc:incorporacao-de-tecnologia-no-sus: exemplos de requerentes sem fonte; entraram o impacto orçamentário e a iniciativa do MS ou da Conitec (art. 15, § 1º, VII, e § 1º-A).
- org:subsistema-de-atencao-a-saude-indigena: "média e alta complexidade" não está na lei (art. 19-G, §§ 2º e 3º).
- org:conass e org:conasems: "associação" sem fonte.
- org:sistema-unico-de-assistencia-social: "entidades beneficentes" (art. 6º-B) e CadÚnico que "poderá" ser exigido (art. 6º-F, § 2º, red. Lei 14.601/2023).
- org:ouvidoria-geral-da-previdencia-social: "denúncias" e coordenação das ouvidorias (Decreto 11.356/2023, Anexo I, art. 10).
- rel:uniao-repassa-recursos-fundo-do-regime-geral-de-previdencia-social: vigência anterior ao fundo (LRF, 2000); o repasse do art. 19 da Lei 8.212 vai ao orçamento da seguridade inteiro.
- org:arquetipo-municipal-conselho-de-educacao: "só existe onde há sistema próprio" sem fonte.
- org:conselho-de-acompanhamento-e-controle-social-do-fundeb: "em especial a complementação da União" vem do inciso do TCU (art. 30, III).
- obj:fundo-nacional-de-assistencia-social: faltava o art. 19, VII, nas fontes. org:conselho-nacional-de-assistencia-social: faltava o art. 39 da Lei 8.742.

**D54:** rel:inss-concede-beneficio-de-prestacao-continuada com 'concede'; obj:beneficio-de-prestacao-continuada com tipo_objeto 'beneficio'.

**Vigências preenchidas:** Lei 9.836/1999 = 1999-09-24 (subsistema indígena); Lei 12.466/2011 = 2011-08-25 (FNS repassa ao Conass e ao Conasems); Lei 9.720/1998 = 1998-12-01 (MDS repassa ao INSS); LC 220/2025 = 2025-11-03 (homologação dos conselhos de educação); fundo do RGPS = 2000-05-05.

**Pontos para o coordenador decidir:**
1. Lei 8.212, art. 8º: o aviso cabe (D37, lacuna). Mas lei e decreto de 4/8/1992 estão no texto sem revogação expressa (Câmara), então a comissão existe formalmente (D03) e poderia ganhar nó de colegiado; o art. 8º passaria a coberto e o aviso afetaria o nó.
2. NOB-Suas: não há texto compilado nem data de DOU; aviso aberto. A CIT e a CIB do Suas ficaram verificadas contra a edição de 2012, como o RISF e o RCCN no aviso de compilação deles.
3. Homologação pelo governador e pelo prefeito (inferida): na União, o decreto dá a homologação ao Ministro, não ao Presidente. Se for preferível seguir esse modelo, a relação nos arquétipos iria para o secretário de saúde. Mantive o chefe do Executivo, com confiança inferida e nota.
4. Inconsistência menor: Lei 14.113, art. 32 (Ministério Público), está coberto por obj:fundeb, enquanto Lei 8.742, art. 31 (MP zela pelos direitos), está como fora. Convém usar o mesmo critério nos dois.
5. Proposta para docs/ (não editei): nenhuma.

**Linhas "fora" do quadro de f2-social:** todas cabem na D49, no item 8 e nas D51 a D53, exceto:
- Lei 8.742, art. 39: era fora (D53), mas liga o CNAS ao Executivo; reclassifiquei como coberto.
- Lei 8.080, art. 41 (superado): a classe cabe, mas o motivo está incompleto. A Fundação das Pioneiras Sociais foi extinta, mas suas ações seguem com a Associação das Pioneiras Sociais, supervisionada pelo MS por outra lei (Lei 8.246/1991, art. 3º), e o INCA é unidade do MS. Sugiro citar isso no motivo.
- Lei 8.212, art. 5º (superado): a classe cabe, mas "nunca teve estrutura própria" não tem fonte. Sugiro: "o único órgão do sistema, o Conselho Nacional da Seguridade Social (arts. 6º e 7º), foi revogado pela MP 2.216-37/2001".

**Listas de artigos vigentes das Leis 8.212 e 8.213:** refeitas por script que fecha o riscado no fim de cada parágrafo do HTML. Batem uma a uma com o quadro: 86 e 153 artigos vigentes.
