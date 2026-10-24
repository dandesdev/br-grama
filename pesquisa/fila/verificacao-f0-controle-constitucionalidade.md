---
id: verificacao-f0-controle-constitucionalidade
escopo: "Revisão: entidades com verificacao.tarefa = \"f0-controle-constitucionalidade\""
status: em-andamento
depende_de: [f0-controle-constitucionalidade]
iniciada_em: 2026-10-24
concluida_em: null
---

## Entregáveis

- [ ] Todas as entidades com `"tarefa": "f0-controle-constitucionalidade"` conferidas contra a fonte: 1 órgão (conjunto das confederações e entidades de classe), 58 relações, 7 normas e 10 objetos. Inclui `obj:adi-e-adc`, que foi ampliado para ADI, ADO e ADC e voltou a `coletado`.
- [ ] Mudança do coordenador a conferir: as relações de quem pode levar uma ação ao Judiciário passaram de `propoe` para o termo novo `ajuiza` (ids renomeados: `rel:*-ajuiza-adi-e-adc`, `rel:*-ajuiza-adpf`, `rel:eleitorado-ajuiza-acao-popular`, `rel:partidos-politicos-ajuiza-mandado-de-seguranca`). As propostas de súmula vinculante continuam `propoe`. Confira se alguma relação ficou com o verbo errado.
- [ ] Pontos do coletor a conferir:
  - ADO dentro de `obj:adi-e-adc` (art. 103, caput e § 2º; Lei 9.868, art. 12-A): a decisão está explicada?
  - legitimados da ADC: a Lei 9.868, art. 13, ainda lista quatro; vale a CF desde a EC 45/2004. Está registrado assim?
  - súmula vinculante: os 21 proponentes da Lei 11.417, art. 3º; "Tribunais Militares" representados só pelo STM; o município como proponente incidental
  - Mesas das Assembleias e da Câmara Legislativa representadas pela própria Casa, "por meio da sua Mesa"
  - quóruns: ADI (seis votos, com oito ministros presentes), súmula (dois terços), reserva de plenário (maioria absoluta); ADPF sem quórum em lei (art. 8º, § 1º, vetado): confira o RISTF
  - competências dos remédios constitucionais no STF, no STJ e na Justiça Federal (arts. 102, 105, 108, 109) e a falta delas na Justiça Eleitoral e na do Trabalho (art. 121; art. 114, IV): estão certas e completas para o que foi modelado?
  - vigência da Lei 11.417/2006 (cálculo nosso, incerta) e da Lei 4.717/1965 (sem cláusula de vigência)
  - controle difuso: "o juiz de primeiro grau decide sozinho" está marcado como leitura nossa?
- [ ] Os resumos dizem o que a norma diz, em palavras simples, sem ampliar nem restringir

## Diário
- 2026-10-24 — iniciada; lidas instruções de verificação, CLAUDE.md, modelo, protocolo, decisões e diário da coleta; escopo: 76 entidades (1 órgão, 58 relações, 7 normas, 10 objetos)
- 2026-10-24 16:47 — verificado e corrigido obj:adi-e-adc: resumo dizia que a ADO aponta "a falta de norma"; ficou "a falta de medida", porque a ADO cobre também providência administrativa (Lei 9.868, art. 12-B, I). Detalhes ganharam que a ADC só trata de lei ou ato federal (CF, art. 102, I, a); fontes + Lei 9.868, arts. 12-B e 13. Pontos do coletor: a decisão sobre a ADO está explicada nas notas; a nota sobre o art. 13 (quatro legitimados) e a prevalência da CF desde a EC 45/2004 está registrada e confere (o art. 13 traz "Vide artigo 103 da CF")
- 2026-10-24 16:47 — verificadas sem mudança as 8 relações ajuiza ADI/ADO/ADC (presidente, mesa-do-senado, mesa-da-camara, arquetipo-estadual-assembleia-legislativa, camara-legislativa-do-df, arquetipo-estadual-governador, partidos-politicos, confederacoes-sindicais-e-entidades-de-classe): verbo ajuiza correto; notas de vigência conferidas na redação original do art. 103, IV e V, e no antigo § 4º (EC 3/1993, revogado pela EC 45/2004). Mesa da Assembleia e da CLDF: não há nó de Mesa (Glob em dados/orgaos), a condição "Por meio da sua Mesa" está correta
- 2026-10-24 16:47 — verificado rel:stf-julga-adi-e-adc sem mudança (quórum: oito presentes, seis votos, arts. 22 e 23; dois terços para modular, art. 27)
- 2026-10-24 16:47 — fora do escopo (anotar ao coordenador): rel:pgr-ajuiza-adi-e-adc tem condição "Pode propor as duas ações", agora são três (ADI, ADO, ADC); cosmético
- 2026-10-24 16:48 — verificado obj:adpf sem mudança (CF, art. 102, § 1º; Lei 9.882, arts. 1º, 2º, 4º, § 1º, e 10, § 3º)
- 2026-10-24 16:48 — verificadas sem mudança as 10 relações ajuiza ADPF (os 9 legitimados do art. 103 e o PGR com a representação do art. 2º, § 1º); verbo ajuiza correto
- 2026-10-24 16:48 — verificado e corrigido rel:stf-julga-adpf. Ponto do coletor (RISTF): baixado o RISTF consolidado oficial (PDF da página do STF, até a ER 59/2023; cópia só em pasta temporária, não guardada em brutos). Ele não tem regra de votação própria para a ADPF; só a cita na distribuição por prevenção (art. 77-B). A representação de inconstitucionalidade pede oito presentes (art. 143, parágrafo único) e seis votos (art. 173). Estava: quórum com só a presença de dois terços e nota "não pesquisamos o RISTF"; ficou: + maioria absoluta da CF, art. 97 (seis votos) para declarar inconstitucionalidade, fontes + CF art. 97 e RISTF arts. 77-B, 143 e 173, notas dizem que aplicar o art. 173 à ADPF é leitura nossa. regra continua "outro"
- 2026-10-24 16:49 — verificadas sem mudança 20 das 21 relações propoe súmula vinculante (os 10 legitimados da ADI pelo art. 103-A, § 2º, e os 11 da Lei 11.417, art. 3º, VI, XI e § 1º); verbo propoe correto em todas (proposta de súmula não é ação, não vira ajuiza). Ponto do coletor: os 21 proponentes batem com a lei; o município como proponente incidental (art. 3º, § 1º) está certo
- 2026-10-24 16:49 — verificado rel:stm-propoe-sumula-vinculante e acrescentada nota: a lei fala em "Tribunais Militares" sem dizer se inclui os TJMs estaduais (CF, art. 125, § 3º); não há nó de tribunal militar estadual (Glob em dados/orgaos). Ponto continua aberto (interpretação da lei), sem aviso: não há fonte oficial contraditória
- 2026-10-24 16:49 — verificados sem mudança rel:stf-edita-sumula-vinculante (dois terços) e obj:sumula-vinculante
- 2026-10-24 16:49 — verificada norma:lei-11417-2006; vigência mantida 2007-03-20 incerta; nota passou a citar a LC 95, art. 8º, § 1º (conferido no Planalto, cópia só em pasta temporária), e a LC 95 entrou nas fontes
