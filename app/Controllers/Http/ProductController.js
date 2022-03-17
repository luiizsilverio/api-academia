'use strict'

const Product = use("App/Models/Product")
const Logger = use("Logger")

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

    console.log(data)

    const product = await Product.create(data)

    // grava no Log
    Logger.info('Produto adicionado', {
      data: product.toJSON()
    })

    return product
  }


}

module.exports = ProductController
