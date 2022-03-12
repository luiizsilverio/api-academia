'use strict'

const Database = use('Database')

class TypeUserSeeder {
  async run () {
    await Database.table('type_users').insert({ name: 'Administrador' }),
    await Database.table('type_users').insert({ name: 'Colaborador' }),
    await Database.table('type_users').insert({ name: 'Cliente' })
  }
}

module.exports = TypeUserSeeder
