'use strict'

const User = use('App/Models/User')

class UserController {
  async index() {
    return await User.all()
  }

  async show({ params }) {
    const user = await User.findOrFail(params.id)
    await user.load('typeUser') // incorpora os dados da tabela relacionada
    return user
  }

  async store({ request }) {
    // request.body retorna todo o corpo da requisição
    // const data = request.body

    // request.only permite especificar os campos do corpo da requisição
    const data = request.only([
      "name",
      "username",
      "email",
      "password",
      "type_user_id"
    ])

    const user = await User.create(data)
    return user
  }

  async update ({ params, request }) {
    const user = await User.findOrFail(params.id)

    const data = request.only([
      "name",
      "username",
      "email",
      "password",
      "type_user_id"
    ])

    user.merge(data) // substitui os dados
    await user.save()
    return user
  }

  async destroy ({ params }) {
    const user = await User.findOrFail(params.id)
    return await user.delete()
  }
}

module.exports = UserController
