# br-grama

Como funciona o Estado brasileiro, em um mapa interativo: órgãos, cargos, relações e processos, cada um com base legal e nível de confiança.

Versão 1.0: retrato do Estado em 1º/10/2026, com a Constituição, as leis estruturantes e os regimentos, o orçamento executado da União de 2023 a 2025 e o calendário dos ciclos (D44, D59). Depois da 1.0: a estrutura interna dos órgãos federais pelo SIORG, os colegiados nacionais e os casos de fronteira (D62 a D64), a versão para celular (D65) e a interface em inglês, com `?lang=en` (D66). Documentação:

- [Decisões de escopo e design](docs/decisoes.md)
- [Modelo de dados](docs/modelo-de-dados.md)
- [Protocolo de pesquisa](docs/protocolo-pesquisa.md)

## Como rodar

Requer Node 22 ou mais recente.

```sh
npm install
npm run validar   # confere esquema, vocabulários e referências de dados/
npm run dev       # gera web/public/dados/grafo.json e abre o site local
npm run build     # validação + dados + site estático em dist/
```

## Estrutura

| Pasta | Conteúdo |
|---|---|
| `dados/` | Fonte da verdade: uma entidade por arquivo JSON |
| `esquema/` | JSON Schema e vocabulários controlados |
| `pesquisa/` | Fila de tarefas de pesquisa, diários e dados brutos |
| `scripts/` | Validação e build dos dados (layout pré-calculado) |
| `web/` | Site (Vite + Cytoscape) |
| `docs/` | Decisões, modelo de dados e protocolo de pesquisa |
