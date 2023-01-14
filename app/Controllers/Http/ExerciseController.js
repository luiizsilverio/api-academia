'use strict'

const fs = use("fs");
const path = use("path");
const crypto = use("crypto");

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

    if (photo) {
      // cria um nome de arquivo com hash
      const pasta = Helpers.publicPath('exercises');
      const hash = crypto.randomBytes(6).toString('hex')
      const fileName = `${hash}-${photo.clientName}`;

      await photo.move(pasta, { name: fileName });

      if (!photo.moved()) {
        return response.status(500).send({
          message: "Erro na imagem",
          error: photo.error().message
        });
      }

      data.url_image = fileName;
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

    if (photo) {
      const pasta = Helpers.publicPath('exercises');
      const oldPhoto = exercise.url_image;

      // apaga a imagem anterior
      if (oldPhoto) {
        const file = path.resolve(pasta, oldPhoto);
        fs.rmSync(file, {force: true});
      }

      // cria um nome de arquivo com hash
      const hash = crypto.randomBytes(6).toString('hex')
      const fileName = `${hash}-${photo.clientName}`;

      // renomeia e copia o arquivo de imagem para a pasta public/products
      await photo.move(pasta, { name: fileName });

      if (!photo.moved()) {
        return response.status(500).send({
          message: "Erro na imagem",
          error: photo.error().message
        });
      }

      data.url_image = fileName;
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
