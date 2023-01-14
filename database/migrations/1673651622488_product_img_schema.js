'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductImgSchema extends Schema {
  up () {
    this.table('products', (table) => {
      // alter table
      table.string('url_image', 50)
    })
  }

  down () {
    this.table('products', (table) => {
      // reverse alternations
      table.dropColumn('url_image')
    })
  }
}

module.exports = ProductImgSchema
