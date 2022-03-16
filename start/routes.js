'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/', () => {
  return { status: 'Academia-API Online' }
})

// Route.get('/users', 'UserController.index')
// Route.get('/users/:id', 'UserController.show')
// Route.post('/users', 'UserController.store')
// Route.put('/users/:id', 'UserController.update')
// Route.delete('/users/:id', 'UserController.destroy')

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')

Route.resource('users', 'UserController')
  .apiOnly()
  .validator(new Map([
    ['users.store', 'User'],
    ['users.update', 'User']
  ]))
  .middleware(['auth:jwt', 'is:manager'])

Route.resource('clients', 'ClientController')
  .apiOnly()
  .middleware('auth:jwt')

Route.resource('exercises', 'ExerciseController')
  .apiOnly()
  .middleware(['auth:jwt', 'can:ger_exercises', 'audit'])

Route.resource('trainings', 'TrainingController')
  .apiOnly()
  .middleware(['auth:jwt', 'is:manager'])

Route.resource('permissions', 'PermissionController')
  .apiOnly()
  .middleware(['auth:jwt', 'is:manager'])

Route.resource('roles', 'RoleController')
  .apiOnly()
  .middleware(['auth:jwt', 'is:manager'])
