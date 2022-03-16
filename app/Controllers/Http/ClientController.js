'use strict'

const Client = use("App/Models/Client")

class ClientController {
  async index() {
    return await Client.all()
  }

  async show({ params }) {
    const client = await Client.findOrFail(params.id)
    await client.load('user') // incorpora os dados da tabela relacionada

    // para obter os dados de user:
    //const user = client.getRelated('user')
    return client
  }

  async store({ request }) {
    // request.body retorna todo o corpo da requisição
    // request.only permite especificar os campos do corpo da requisição
    const data = request.only([
      "user_id",
      "address",
      "age",
      "weight"
    ])

    const client = await Client.create(data)
    return client
  }

  async update ({ params, request }) {
    const data = request.only([
      "user_id",
      "address",
      "age",
      "weight"
    ])

    const client = await Client.findOrFail(params.id)
    client.merge(data)
    await client.save()
    return client
  }

  async destroy ({ params }) {
    const client = await Client.findOrFail(params.id)
    return await client.delete()
  }
}

module.exports = ClientController
