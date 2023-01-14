'use strict'

const Product = use("App/Models/Product")
const Logger = use("Logger")
const Helpers = use("Helpers")

class ProductController {
  async index() {
    return await Product.all()
  }

  async store({ request, response }) {
    const data = request.only([
      "name",
      "price",
      "quantity"
    ])

    const photo = request.file('image', {
      types: ['image'], // só aceita imagens
      size: '2mb',  // tamanho máximo
    })

    // verifica se já existe uma imagem com esse nome
    if (photo) {
      const image = await Product.findBy('url_image', photo.clientName)

      if (image) {
        return response.status(400).send({ error: "Imagem com nome duplicado."})
      }

      await photo.move(Helpers.publicPath('products'))
      data.url_image = photo.clientName
    }

    const product = await Product.create(data)

    // grava no Log
    Logger.info('Produto adicionado', {
      data: product.toJSON()
    })

    return product
  }

  async update ({ params, request }) {
    const data = request.only([
      "name",
      "price",
      "quantity"
    ])

    const product = await Product.findOrFail(params.id)

    const photo = request.file('image', {
      types: ['image'], // só aceita imagens
      size: '2mb',  // tamanho máximo
    })

    // verifica se já existe uma imagem com esse nome
    if (photo) {
      const image = await Product.findBy('url_image', photo.clientName)

      if (image) {
        return response.status(400).send({ error: "Imagem com nome duplicado."})
      }

      await photo.move(Helpers.publicPath('products'))
      data.url_image = photo.clientName
    }

    product.merge(data)
    await product.save()
    return product
  }

  async destroy ({ params }) {
    const product = await Product.findOrFail(params.id)
    return await product.delete()
  }
}

module.exports = ProductController
