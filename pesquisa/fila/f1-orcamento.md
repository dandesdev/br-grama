---
id: f1-orcamento
escopo: "Fase 1 (D44): orçamento executado da União em 2025 por Poder, órgão e unidade orçamentária, e valores pagos pelas relações repassa-recursos (D45 a D48)"
status: coletada
depende_de: [f0-fechamento]
iniciada_em: 2026-10-28
concluida_em: 2026-10-28
---

## Entregáveis

- [x] Decisões D44 (fases) a D48 (camada e aba) em `docs/decisoes.md`; modelo em `docs/modelo-de-dados.md`.
- [x] Tipos `metrica` (`met:`) e `fluxo` (`fluxo:`) no esquema e na validação.
- [x] Importador `scripts/importar/tesouro-despesas.ts` (baixar, conferir, gerar) e resumo bruto em `pesquisa/brutos/tesouro-transparente/`.
- [x] Fontes `fonte:tesouro-despesas-transferencias-uniao` e `fonte:portal-transparencia-orcamento-despesa`, com cópia no Wayback.
- [x] 143 métricas de orçamento de 2025 e 18 fluxos.
- [x] Site: seção "Orçamento" no painel de órgãos e entes, valor nas relações de repasse, camada "Orçamento" no mapa e aba "Dinheiro".
- [ ] Revisão independente: `verificacao-f1-orcamento`.

## Diário

- 2026-10-28 coordenador: a base do Portal da Transparência só tem o Executivo; a do Tesouro ("Despesas e Transferências Totais da União") tem todos os Poderes por unidade orçamentária, mês, ação e modalidade, com dotação, empenho, liquidação, pagamento e restos a pagar pagos. Escolhida a do Tesouro (D46).
- 2026-10-28 coordenador: conferência com o Portal (etapa conferir): nas unidades usadas como recorte próprio, os pagamentos do ano coincidem, salvo INSS (+3,5% no Tesouro) e Anvisa (+1,4%). No Executivo inteiro o Tesouro tem R$ 91 bi a mais, quase tudo em sentenças judiciais (71103) e no Fundo do RGPS (33904). Registrado nas notas da fonte.
- 2026-10-28 coordenador: a planilha põe os "recursos sob supervisão" (71xxx a 75xxx) dentro do ministério supervisor; separados em `sob_supervisao` (D47). A reserva de contingência (90000), que a planilha põe na Fazenda, fica fora do ministério.
- 2026-10-28 coordenador: sem fluxo em 2025 para o FEFC (não houve eleição), os impostos residuais (não existem) e o FNDR (começa em 2029); duodécimos não são despesa do Executivo, ficam sem fluxo. Compensações financeiras de mineração e de recursos hídricos (unidades 73118 e 73119) não têm relação no mapa; ficam para quando a relação for criada.
- 2026-10-28 coordenador: o navegador do preview do T3 trava com a página aberta (também sem a camada); a conferência visual foi feita num Chrome headless por CDP (scratch), com captura de tela da camada e da aba.
