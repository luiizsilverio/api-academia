'use strict'

class UserController {
  async index() {
    return { result: 'Lista de usuários' }
  }

  async show() {
    return { result: 'Usuário 1'}
  }

  async update () {
    return { result: "Usuário atualizado"}
  }

  async store() {
    return { result: "Usuário incluído" }
  }

  async destroy() {
    return { result: "Usuário excluído" }
  }
}

module.exports = UserController
