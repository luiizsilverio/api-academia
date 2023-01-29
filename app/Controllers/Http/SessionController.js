'use strict'

const decode = require('jwt-decode');

class SessionController {
  async create ({ request, auth }) {
    const {username, password} = request.body //.all
    const response = await auth.withRefreshToken().attempt(username, password)
    const { uid } = decode(response.token);
    return { ...response, uid }
  }

  async refreshToken({ request, auth }) {
    const refreshToken = request.input('refresh_token')
    return await auth.newRefreshToken().generateForRefreshToken(refreshToken, true)
  }
}

module.exports = SessionController
