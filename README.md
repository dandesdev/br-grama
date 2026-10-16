# br-grama

Como funciona o Estado brasileiro, em um mapa interativo: órgãos, cargos, relações e processos, cada um com base legal e nível de confiança.

Em construção. Documentação:

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
