'use strict'

class Audit {
  async handle ({ request, auth }, next) {
    const user = await auth.getUser()

    request.body = {
      ...request.body,
      action_by: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email
      }
    }

    await next()
  }
}

module.exports = Audit
