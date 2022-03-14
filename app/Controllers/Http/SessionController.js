'use strict'

class SessionController {
  async create ({ request, auth }) {
    const {username, password} = request.body //.all
    return await auth.withRefreshToken().attempt(username, password)
  }

  async refreshToken({ request, auth }) {
    const refreshToken = request.input('refresh_token')
    return await auth.newRefreshToken().generateForRefreshToken(refreshToken, true)
  }
}

module.exports = SessionController
