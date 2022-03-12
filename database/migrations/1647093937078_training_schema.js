'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrainingSchema extends Schema {
  up () {
    this.create('trainings', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('obs', 200)

      table.integer('client_id')
        .unsigned()
        .references('id')
        .inTable('clients')
        .notNullable()
        .onDelete('CASCADE')

      table.timestamps()
    })
  }

  down () {
    this.drop('trainings')
  }
}

module.exports = TrainingSchema
