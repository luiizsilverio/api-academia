'use strict'

const Exercise = use("App/Models/Exercise")

class ExerciseController {
  async index() {
    return await Exercise.all()
  }

  async show({ params }) {
    const exercise = await Exercise.findOrFail(params.id)
    // await client.load('user') // incorpora os dados da tabela relacionada
    return exercise
  }

  async store({ request }) {
    // request.body retorna todo o corpo da requisição
    // request.only permite especificar os campos do corpo da requisição
    const data = request.only([
      "name",
      "obs",
      "series",
      "waiting_time"
    ])

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
