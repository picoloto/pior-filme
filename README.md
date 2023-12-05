# PiorFilme

Projeto Front End Angular cujo objetivo é listar os vencedores da categoria Pior Filme do Golden Raspberry Awards.

### Especificações técnicas

- Angular 17.0.5
- Node 21.3.0
- NPM 10.2.4

### Como rodar o projeto

- Clonar o repositório
- Rodar o comando `npm install` para instalar as dependências
- Rodar o comando `ng serve` para iniciar o projeto
- Acesse o endereço `http://localhost:4200/

### Como testar o projeto

- Rodar o comando `npm run test` para rodar e acompanhar os testes.
- Rodar o comando `npm run test-coverage` para rodar os testes e verificar a cobertura
  - A cobertura ficará disponível no arquivo `coverage/index.html`

### Arquitetura

Esse projeto usa o padrão **MVC** de arquitetura, contando com uma camada de serviço (`service`), uma camada de domínio (`model`) e uma camada de apresentação (`module`) que foi dividida em módulos (funcionalidades) para facilitar uma possível escalabilidade do projeto.

Também foi criada uma camada chamada de compartilhamento (`shared`) que fica responsável por armazenar os recursos (componentes, enums...) reutilizáveis.

Para ajudar na escalabilidade, foi criado um componente de `Filtro por ano`, que pode ser reutilizado em várias telas, como foi o caso do `Dashboard` e da `Listagem de filmes`.

Para economizar tempo em estilização, foi utilizada a biblioteca de Material Design, onde utilizo alguns componentes, como, por exemplo, `Table` e `Input`.

### Estrutura de arquivos

```
├── src
│   ├── app
│   │   ├── model
│   │   ├── module
│   │   │   ├── dashboard
│   │   │   └── movie-list
│   │   ├── service
│   │   │   └── movie
│   │   ├── shared
│   │   │   ├── components
│   │   │   ├── enums
│   │   │   ├── environment
│   │   │   └── mocks
```
