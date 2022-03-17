<table>
  <tr>
    <td style="background: 'white'">
      <img src="https://github.com/luiizsilverio/adonis/blob/main/app/images/adonis-logo.jpg" />
    </td>
    <td><h1>API-ACADEMIA</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre a Aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
API desenvolvida em __AdonisJS__ que implementa um CRUD com banco de dados __MySQL__.<br />
Permite a inclusão de usuários, clientes, exercícios, treinos e produtos, além de alteração, exclusão e consulta.<br />
Possui autenticação JWT, upload de imagens, geração de Log, controle de permissões (Roles e Permissions) e middlewares.<br />
Desenvolvido durante o curso [Criando uma REST API com adonis.js: do básico ao avançado](https://www.udemy.com/course/criando-rest-api-com-adonisjs-do-basico-ao-avancado), do prof. Augusto Gehrke.<br />

### Rotas da aplicação

| Método | Caminho da Rota | Descrição |
|---|---|---|
| POST | /sessions | Geração do Token | 
| PUT | /sessions | Refresh Token |
| GET | /users | Lista de usuários |
| GET | /users/:id | Dados do usuário |
| POST | /users | Inclusão de usuário |
| PUT | /users/:id | Alteração do usuário |
| DELETE | /users/:id | Exclusão do usuário |
| GET | /clients | Lista de clientes |
| GET | /clients/:id | Dados do cliente |
| POST | /clients | Inclusão de cliente |
| PUT | /clients/:id | Alteração do cliente |
| DELETE | /clients/:id | Exclusão do cliente |
| GET | /exercises | Lista de exercícios |
| GET | /exercises/:id | Dados do exercício |
| POST | /exercises | Inclusão de exercício |
| PUT | /exercises/:id | Alteração do exercício |
| DELETE | /exercises/:id | Exclusão do exercício |
| GET | /trainings | Lista de treinamentos |
| GET | /trainings/:id | Dados do treinamento |
| POST | /trainings | Inclusão de treinamento |
| PUT | /trainings/:id | Alteração do treinamento |
| DELETE | /trainings/:id | Exclusão do treinamento |
| GET | /products | Lista de produtos |
| POST | /products | Inclusão de produto (imagem) |
| GET | /permissions | Lista de permissões |
| GET | /permissions/:id | Dados da permissão |
| POST | /permissions | Inclusão de permissão |
| PUT | /permissions/:id | Alteração da permissão |
| DELETE | /permissions/:id | Exclusão da permissão |
| GET | /roles | Lista de papéis |
| GET | /roles/:id | Dados do papel |
| POST | /roles | Inclusão de papel |
| PUT | /roles/:id | Alteração do papel |
| DELETE | /roles/:id | Exclusão do papel |


## :hammer_and_wrench: Tecnologias
* __AdonisJS__
* __MySQL__

## :car: Iniciando a aplicação
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/api-academia.git

# Execute yarn para instalar as dependências (ou npm install)
$ yarn

# Para iniciar a aplicação
$ yarn dev

# Abra http://localhost:3333 no navegador
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
