'use strict'

class User {
  get rules () {
    return {
      // validation rules
      name: 'required|min:3',
      username: 'required|min:3',
      email: 'required|email',
      password: 'required',
      type_user_id: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'Informe o nome do usuário',
      'name.min': 'Informe ao menos 3 letras no nome',
      'username.required': 'Informe o username',
      'username.min': 'Informe ao menos 3 letras no username',
      'email.required': 'Informe o e-mail',
      'email.email': 'E-mail inválido',
      'password.required': 'Informe a senha',
      'type_user_id': 'Informe o tipo de usuário'
    }
  }
}

module.exports = User
