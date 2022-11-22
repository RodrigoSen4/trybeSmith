# Bem vindo ao repositório do projeto Trybesmith!

Neste projeto, desenvolvi uma loja de itens medievais, no formato de uma API, utilizando Typescript.

Foi desenvolvido todas as camadas da aplicação (Models, Service e Controllers) por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: CRUD (Create, Read, Update e Delete).

# Orientações

<details>
  <summary><strong>🐳 Rodando no Docker ou Localmente</strong></summary><br />
  
  ## Com Docker
 
  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Verifique se a porta 3306 nao está sendo usada na sua maquina, ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container `trybesmith` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybesmith bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências com `npm install`

   ⚠ Atenção ⚠ Caso você esteja usando macOS e ao executar o `docker-compose up -d` se depare com o seguinte erro:

  ~~~bash
  The Compose file './docker-compose.yml' is invalid because:
  Unsupported config option for services.db: 'platform'
  Unsupported config option for services.node: 'platform'
  ~~~

> Foram encontradas 2 possíveis soluções para este problema:
> 1. Você pode adicionar manualmente a option `platform: linux/amd64` no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.
> 2. Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha `export DOCKER_DEFAULT_PLATFORM=linux/amd64`, essa é uma solução global.
> As soluções foram com base [nesta fonte](https://stackoverflow.com/a/69636473).

---
  
  ## Sem Docker
  
  > Instale as dependências com `npm install`
  
  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

</details>

<details>
  <summary><strong>🎲 Diagrama Entidade Relacionamento do projeto</strong></summary><br />

  O banco de dados do projeto segue a estrutura abaixo:

  <img src="images/diagram-der.png" width="200px" >
</details>







# Endpoints API

Para ver de fato a API funcionando use os endpoints abaixo, para usa-los utilize a extensao THUNDER CLIENT no vscode


<details>
  <summary><strong>Endpoint para o cadastro de produtos</strong></summary><br />

  O endpoint é acessível através do caminho (`/products`);
  Os produtos enviados são salvos na tabela `Products` do banco de dados;
  - O endpoint deve receber a seguinte estrutura:
```json
  {
    "name": "Long Sword",
    "amount": "200 coins"
  }
```
  ✨ **Dica:** Lembre-se de colocar o metodo POST no THUNDER CLIENT
</details>

<details>
  <summary><strong>Endpoint para listar produtos cadastrados</strong></summary><br />

  O endpoint é acessível através do caminho (`/products`);
  ✨ **Dica:** Lembre-se de colocar o metodo GET no THUNDER CLIENT
</details>

