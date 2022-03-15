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
    const { permissions, roles, ...data } = request.only([
      "name",
      "username",
      "email",
      "password",
      "type_user_id",
      "permissions",
      "roles"
    ])

    const user = await User.create(data)

    if (permissions) {
      await user.permissions().attach(permissions)
    }
    if (roles) {
      await user.roles().attach(roles)
    }

    await user.loadMany(['roles', 'permissions'])
    return user
  }

  async update ({ params, request }) {
    const user = await User.findOrFail(params.id)

    const { permissions, roles, ...data } = request.only([
      "name",
      "username",
      "email",
      "password",
      "type_user_id",
      "permissions",
      "roles"
    ])

    user.merge(data) // substitui os dados
    await user.save()

    if (permissions) {
      await user.permissions().sync(permissions)
    }
    if (roles) {
      await user.roles().sync(roles)
    }

    await user.loadMany(['roles', 'permissions'])
    return user
  }

  async destroy ({ params }) {
    const user = await User.findOrFail(params.id)
    return await user.delete()
  }
}

module.exports = UserController
