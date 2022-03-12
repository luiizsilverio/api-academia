'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExerciseTrainingSchema extends Schema {
  up () {
    this.create('exercise_training', (table) => {
      table.increments()

      table.integer('exercise_id')
        .unsigned()
        .references('id')
        .inTable('exercises')
        .notNullable()
        .onDelete('CASCADE')

      table.integer('training_id')
        .unsigned()
        .references('id')
        .inTable('trainings')
        .notNullable()
        .onDelete('CASCADE')

      table.timestamps()
    })
  }

  down () {
    this.drop('exercise_training')
  }
}

module.exports = ExerciseTrainingSchema
