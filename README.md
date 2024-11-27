## API de Gestão de Clientes, Animais e Consultas

Esta é uma API simples desenvolvida com **Node.js** e **Express** para gerenciar informações de clientes, animais e consultas veterinárias. A API oferece endpoints para realizar operações básicas de CRUD (Create, Read, Update, Delete) em uma lista de clientes, animais e consultas.

## Funcionalidades

A API permite as seguintes operações:

### Clientes
- **Listar Clientes (GET /clientes)**: Retorna todos os clientes cadastrados.
- **Cadastrar Novo Cliente (POST /clientes)**: Permite o cadastro de um novo cliente.
- **Atualizar Cliente (PUT /clientes/:id)**: Atualiza completamente os dados de um cliente existente.
- **Atualizar Parcialmente Cliente (PATCH /clientes/:id)**: Atualiza parcialmente os dados de um cliente.
- **Deletar Cliente (DELETE /clientes/:id)**: Remove um cliente existente.

### Animais
- **Listar Animais (GET /animais)**: Retorna todos os animais cadastrados.
- **Cadastrar Novo Animal (POST /animais)**: Permite o cadastro de um novo animal.
- **Atualizar Animal (PUT /animais/:id)**: Atualiza completamente os dados de um animal existente.
- **Atualizar Parcialmente Animal (PATCH /animais/:id)**: Atualiza parcialmente os dados de um animal.
- **Deletar Animal (DELETE /animais/:id)**: Remove um animal existente.

### Consultas
- **Listar Consultas (GET /consultas)**: Retorna todas as consultas cadastradas.
- **Cadastrar Nova Consulta (POST /consultas)**: Permite o cadastro de uma nova consulta.
- **Atualizar Consulta (PUT /consultas/:id)**: Atualiza completamente os dados de uma consulta existente.
- **Atualizar Parcialmente Consulta (PATCH /consultas/:id)**: Atualiza parcialmente os dados de uma consulta.
- **Deletar Consulta (DELETE /consultas/:id)**: Remove uma consulta existente.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixar a versão mais recente em [https://nodejs.org/](https://nodejs.org/).

- **Body-Parser**: A API utiliza o **body-parser** para processar o corpo das requisições. Certifique-se de instalar as dependências corretamente (veja a seção de instalação).

## Instalação

1. Clone o repositório para o seu computador:

   ```bash
   git clone https://github.com/LuisMoura18/api_node_petshop/blob/main/server.js
   ```

## Desenvolvido por: 

Luis Andre Moura.

Orientador: Hudson Neves
https://github.com/HudsonNeves
