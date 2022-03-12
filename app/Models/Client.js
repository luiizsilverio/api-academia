'use strict'

const Model = use('Model')

class Client extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  trainings() {
    return this.hasMany('App/Models/Training')
  }

}

module.exports = Client
