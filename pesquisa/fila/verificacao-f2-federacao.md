---
id: verificacao-f2-federacao
escopo: "Revisão independente da coleta f2-federacao (Lei 11.107/2005, LC 140/2011, Lei 13.089/2015, LC 62/1989, LC 63/1990, LC 214/2025 e LC 227/2026 no que toca ao CGIBS e à repartição do IBS)"
status: pendente
depende_de: [f2-federacao]
---

Siga `pesquisa/instrucoes-verificacao.md`. Confira contra as fontes primárias (cópias em `pesquisa/brutos/planalto-leis/2026-11-11-f2-federacao/`, `pesquisa/brutos/senado/2026-11-11-f2-federacao/`, `pesquisa/brutos/stf/2026-11-12-f2-federacao/` e o Planalto) todas as entidades com `verificacao.tarefa: "f2-federacao"`: as 69 criadas e as 24 existentes que a coleta editou. Confira também o quadro de cobertura de `pesquisa/fila/f2-federacao.md` e as faixas escolhidas na LC 214 e na LC 227.

Pontos de atenção:
- vigência de cada regra do IBS e do CGIBS em 2026-10-01 (estrutura desde 14/1/2026; composição provisória do Conselho Superior até 31/3/2027; distribuição a partir de 2027); confira cada data em `vigencia` contra o dispositivo;
- `rel:estados-repassam-ibs-municipios` (CF) e `rel:comite-gestor-do-ibs-repassa-ibs-municipios` (LC 227) descrevem o mesmo dinheiro: diga se uma deve sair ou se as duas ficam com notas que expliquem;
- critérios do FPE e a ADI 5.069 (validade até 30/6/2027; datas intermediárias divergentes entre Senado e STF): procure a decisão no portal do STF;
- `obj:fpm` sem o percentual da reserva do interior (Decreto-Lei 1.881/1981): leia e complete;
- comissões tripartites e bipartite sem `contido_em`: procure as portarias do MMA;
- `rel:arquetipo-estadual-ministerio-publico-monitora-pdui` (a lei não diz qual MP);
- provimentos dos cargos do CGIBS: a D54 criou `eleicao-por-colegio` (Diretor-Executivo, diretores, corregedor, auditor; representantes municipais eleitos pelos prefeitos) e o tipo de órgão `orgao-interno` (unidades internas do CGIBS): aplique onde couber, tirando o `inferido` quando a fonte for direta;
- Lei 8.212, art. 56 (adimplência como condição para receber FPE e FPM): acrescente à condição de `rel:uniao-repassa-fpe-estados` e `rel:uniao-repassa-fpm-municipios`, apontado pela f2-social;
- processos novos (criação de consórcio, elaboração do PDUI, instituição de região metropolitana, apuração do índice do ICMS municipal, orçamento do CGIBS): etapa por etapa, atores, prazos e dispositivo.

Ao terminar, marque as entidades conferidas como `verificado` (com `tarefa: "verificacao-f2-federacao"`), corrija o que estiver errado com fonte, mude o status desta tarefa para `verificada` e escreva o relatório no diário.

## Diário
