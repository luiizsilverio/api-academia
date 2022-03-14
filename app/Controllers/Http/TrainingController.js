'use strict'

const Training = use("App/Models/Training")

class TrainingController {
  async index() {
    return await Training.all()
  }

  async show({ params }) {
    const training = await Training.findOrFail(params.id)
    return training
  }

  async store({ request }) {
    // request.body retorna todo o corpo da requisição
    // request.only permite especificar os campos do corpo da requisição
    const { exercises, ...data } = request.only([
      "client_id",
      "name",
      "obs",
      "exercises"  // array
    ])

    const training = await Training.create(data)

    if (exercises) {
      await training.exercises().attach(exercises)
    }

    await training.load('exercises')
    return training
  }

  async update({ params, request }) {
    const { exercises, ...data } = request.only([
      "client_id",
      "name",
      "obs",
      "exercises"  // array
    ])


    const training = await Training.findOrFail(params.id)
    training.merge(data)
    await training.save()

    if (exercises) {
      await training.exercises().sync(exercises)
    }

    await training.load('exercises')
    return training
  }

  async destroy({ params }) {
    const training = await Training.findOrFail(params.id)
    return training.delete()
  }
}

module.exports = TrainingController
