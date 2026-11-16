---
id: f4-fronteira
escopo: "Fase 4 (D05, D63 b): casos de fronteira do Estado como conjuntos no mapa"
status: pendente
depende_de: [f4-siorg]
---

Leia `pesquisa/instrucoes-agentes.md` (todas as seções), `docs/decisoes.md` (D05, D07, D10, D11, D14, D33, D51 a D54, D62 e D63), `docs/modelo-de-dados.md` e `docs/protocolo-pesquisa.md`. Data de referência: 1º/10/2026.

Regras desta tarefa:
- Antes de criar, procure em `dados/` se a entidade já existe (por nome, sigla e assunto); amplie em vez de duplicar.
- Toda afirmação com fonte oficial lida (planalto.gov.br, DOU, sites .gov.br, STF para jurisprudência). Guarde as cópias lidas em `pesquisa/brutos/` numa pasta com a data e o id da tarefa.
- Novo termo de vocabulário só se a D54 permitir; proponha no diário em vez de editar `esquema/`.
- Não edite `esquema/`, `docs/`, `dados/metricas/`, `dados/fluxos/` nem `dados/estruturas/`. Não faça commit nem rode `git checkout`, `git reset` ou `git clean`.
- Rode `npm run -s validar` a cada lote e anote no diário.

## Entregáveis

Um nó `org:` com `tipo_orgao: "conjunto"`, `poder: "nao-estatal"` para cada categoria abaixo que ainda não está no mapa (`consorcios-publicos`, `partidos-politicos`, `oab`, `conass` e `conasems` já estão; partidos e consórcios não entram). Nos detalhes, a lista dos membros com a lei de cada um quando a lista for curta e oficial; se for longa ou sem lista oficial, diga onde ela está (D07). Relações com fonte só quando a lei liga a categoria a um órgão do mapa.

- [ ] Serviços sociais autônomos (Sistema S): Senai, Sesi, Senac, Sesc, Senar, Sest, Senat, Sebrae, Sescoop e os outros que a lei qualifica como serviço social autônomo (ex.: Apex-Brasil, ABDI, Anater); contribuições (CF, art. 240), arrecadação, controle pelo TCU, vínculo com ministério.
- [ ] Conselhos de fiscalização profissional (exceto OAB, que já está): natureza (STF, ADI 1.717), quais existem por lei federal, controle pelo TCU, anuidades.
- [ ] Organizações sociais (Lei 9.637/1998): qualificação, contrato de gestão, quem fiscaliza; ADI 1.923.
- [ ] OSCIPs (Lei 9.790/1999): qualificação pelo Ministério da Justiça e Segurança Pública, termo de parceria. Mencione o marco das OSCs (Lei 13.019/2014) só no que muda a relação com o Estado.
- [ ] Serviços notariais e de registro (CF, art. 236; Lei 8.935/1994): delegação, concurso, fiscalização pelo Judiciário (relação com os tribunais de justiça e com a Corregedoria Nacional do CNJ, se já existirem no mapa).
- [ ] Concessionárias e permissionárias de serviço público (CF, art. 175; Lei 8.987/1995): quem concede, quem regula (as agências que já estão no mapa), quem fiscaliza.
- [ ] Organismos internacionais: um conjunto para as organizações de que o Brasil é membro (ONU, OEA, Mercosul, OMC e outras, com o decreto de promulgação de cada tratado constitutivo lido) e nós próprios só para quem a CF ou tratado promulgado dá jurisdição sobre o Brasil (Corte Interamericana de Direitos Humanos; Tribunal Penal Internacional, CF, art. 5º, § 4º). Relações com o Presidente (celebra tratados, art. 84, VIII) e o Congresso (resolve sobre tratados, art. 49, I) só se ainda não existirem.

## Diário
