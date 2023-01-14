'use strict'

const Exercise = use("App/Models/Exercise")
const Helpers = use("Helpers")

class ExerciseController {
  async index({ request }) {
    console.log(request.body.action_by)
    // console.log(request.input('action_by'))
    return await Exercise.all()
  }

  async show({ params }) {
    const exercise = await Exercise.findOrFail(params.id)
    // await client.load('user') // incorpora os dados da tabela relacionada
    return exercise
  }

  async store({ request, response }) {
    // request.body retorna todo o corpo da requisição
    // request.only permite especificar os campos do corpo da requisição
    const data = request.only([
      "name",
      "obs",
      "series",
      "waiting_time"
    ])

    const photo = request.file('image', {
      types: ['image'], // só aceita imagens
      size: '2mb',  // tamanho máximo
    })

    // verifica se já existe uma imagem com esse nome
    if (photo) {
      const image = await Exercise.findBy('url_image', photo.clientName)

      if (image) {
        return response.status(400).send({ error: "Imagem com nome duplicado."})
      }

      await photo.move(Helpers.publicPath('exercises'))
      data.url_image = photo.clientName
    }

    // console.log(request.body.action_by)
    const exercise = await Exercise.create(data)
    return exercise
  }

  async update({ params, request }) {
    const data = request.only([
      "name",
      "obs",
      "series",
      "waiting_time"
    ])

    const exercise = await Exercise.findOrFail(params.id)

    const photo = request.file('image', {
      types: ['image'], // só aceita imagens
      size: '2mb',  // tamanho máximo
    })

    // verifica se já existe uma imagem com esse nome
    if (photo) {
      const image = await Exercise.findBy('url_image', photo.clientName)

      if (image) {
        return response.status(400).send({ error: "Imagem com nome duplicado."})
      }

      await photo.move(Helpers.publicPath('exercises'))
      data.url_image = photo.clientName
    }

    exercise.merge(data)
    await exercise.save()
    return exercise
  }

  async destroy({ params }) {
    const exercise = await Exercise.findOrFail(params.id)
    return exercise.delete()
  }
}

module.exports = ExerciseController
