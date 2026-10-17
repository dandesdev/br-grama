---
id: piloto-pessoas
escopo: "Piloto: ocupantes dos cargos de cúpula na data de referência (2026-10-01) e seus partidos"
status: coletada
depende_de: []
iniciada_em: 2026-10-16
concluida_em: 2026-10-16
---

## Entregáveis

Para cada cargo abaixo, a pessoa que o ocupava em 2026-10-01, com relação `ocupa` (vigência = início do exercício até null, se ainda ocupava) e filiação partidária vigente na data:
- [x] cargo:presidente-da-republica
- [x] cargo:vice-presidente-da-republica
- [x] cargo:presidente-da-camara-dos-deputados
- [x] cargo:presidente-do-senado-federal
- [x] cargo:presidente-do-stf
- [x] cargo:ministro-do-stf: os 11 ministros (em 2026-10-01 eram 10; vaga de Barroso aberta, ver achado:stf-vaga-de-barroso-nao-preenchida) (sem partido; ministros do STF não têm filiação partidária)
- [x] partidos envolvidos: org:partido-<sigla-minuscula> (tipo partido-politico, poder nao-estatal)

Atenção a mudanças próximas da data de referência (aposentadorias, posses, trocas de partido). Registre um achado se houver divergência entre fontes oficiais.

## Diário
- 2026-10-16 07:03 — iniciada; lidos CLAUDE.md, modelo de dados, protocolo, esquemas e vocabulários
- 2026-10-16 07:16 — pesquisa feita (STF composição desde 18/10/2025 com 10 ministros; Planalto; APIs Câmara/Senado; TSE consulta_cand_2026; TSE partidos via Wayback). Interrupção por cota antes de gravar; nada estava em dados/.
- 2026-10-16 12:04 — retomada; dados confirmados gravados de uma vez a partir das notas da pesquisa:
- 2026-10-16 12:04 — gravadas 23 fontes: fonte:stf-composicao-plenaria-desde-2025-10-18 fonte:stf-o-stf fonte:stf-pasta-ministro-edson-fachin fonte:stf-pasta-ministro-gilmar-mendes fonte:stf-pasta-ministro-carmen-lucia fonte:stf-pasta-ministro-dias-toffoli fonte:stf-pasta-ministro-luiz-fux fonte:stf-pasta-ministro-alexandre-de-moraes fonte:stf-pasta-ministro-nunes-marques fonte:stf-pasta-ministro-andre-mendonca fonte:stf-pasta-ministro-cristiano-zanin fonte:stf-pasta-ministro-flavio-dino fonte:planalto-biografia-presidente fonte:planalto-biografia-vice-presidente fonte:planalto-agenda-presidente-2026-10-01 fonte:agencia-senado-posse-lula-alckmin-2023 fonte:camara-api-mesa-legislatura-57 fonte:camara-api-historico-deputado-hugo-motta fonte:senado-api-mesa-senado fonte:senado-api-senador-davi-alcolumbre fonte:senado-msf-7-2026 fonte:tse-consulta-cand-2026 fonte:tse-partidos-registrados 
- 2026-10-16 12:04 — gravados partidos: org:partido-pt org:partido-psb org:partido-republicanos org:partido-uniao 
- 2026-10-16 12:04 — gravado pessoa:luiz-inacio-lula-da-silva
- 2026-10-16 12:04 — gravado pessoa:geraldo-alckmin
- 2026-10-16 12:04 — gravado pessoa:hugo-motta
- 2026-10-16 12:04 — gravado pessoa:davi-alcolumbre
- 2026-10-16 12:04 — gravado pessoa:edson-fachin
- 2026-10-16 12:04 — gravado pessoa:gilmar-mendes
- 2026-10-16 12:04 — gravado pessoa:carmen-lucia
- 2026-10-16 12:04 — gravado pessoa:dias-toffoli
- 2026-10-16 12:04 — gravado pessoa:luiz-fux
- 2026-10-16 12:04 — gravado pessoa:alexandre-de-moraes
- 2026-10-16 12:04 — gravado pessoa:nunes-marques
- 2026-10-16 12:04 — gravado pessoa:andre-mendonca
- 2026-10-16 12:04 — gravado pessoa:cristiano-zanin
- 2026-10-16 12:04 — gravado pessoa:flavio-dino
- 2026-10-16 12:04 — gravado rel:lula-ocupa-presidente-da-republica
- 2026-10-16 12:04 — gravado rel:geraldo-alckmin-ocupa-vice-presidente-da-republica
- 2026-10-16 12:04 — gravado rel:hugo-motta-ocupa-presidente-da-camara
- 2026-10-16 12:04 — gravado rel:hugo-motta-ocupa-deputado-federal
- 2026-10-16 12:04 — gravado rel:davi-alcolumbre-ocupa-presidente-do-senado
- 2026-10-16 12:04 — gravado rel:davi-alcolumbre-ocupa-senador
- 2026-10-16 12:04 — gravado rel:edson-fachin-ocupa-presidente-do-stf
- 2026-10-16 12:04 — gravado rel:edson-fachin-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:gilmar-mendes-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:carmen-lucia-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:dias-toffoli-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:luiz-fux-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:alexandre-de-moraes-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:nunes-marques-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:andre-mendonca-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:cristiano-zanin-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado rel:flavio-dino-ocupa-ministro-do-stf
- 2026-10-16 12:04 — gravado achado:stf-vaga-de-barroso-nao-preenchida
- 2026-10-16 12:04 — gravado achado:filiacao-lula-alckmin-data-de-inicio
- 2026-10-16 12:04 — vocabulário: tipo_achado não tem termo para cargo vago; usado 'lacuna' em achado:stf-vaga-de-barroso-nao-preenchida (proposta: 'cargo-vago')
- 2026-10-16 12:04 — não copiados para brutos: CSVs do TSE e detalhe de deputado da Câmara (contêm CPF e outros dados pessoais)
- 2026-10-16 12:05 — fonte:senado-msf-7-2026 recebeu cópia no Wayback (save); a captura de stf-composicao falhou (HTTP 520), arquivo segue null; outras 10 fontes sem snapshot ficaram com arquivo null
- 2026-10-16 12:05 — validação: sem erros de esquema nos meus arquivos; só referências a cargos da piloto-estrutura ainda inexistentes. Tarefa coletada.
