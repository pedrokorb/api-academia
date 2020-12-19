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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { status: 'API Online!' }
})

Route.post('/sessions', 'SessionController.create')
Route.put('/sessions', 'SessionController.refreshToken')

Route.resource('users', 'UserController').apiOnly().validator(new Map([
  [['users.store'], ['User']], [['users.update'],['User']]
])).middleware('auth:jwt')
Route.resource('clients', 'ClientController').apiOnly().middleware('auth:jwt')
Route.resource('exercises', 'ExerciseController').apiOnly().middleware('auth:jwt')
Route.resource('trainings', 'TrainingController').apiOnly().middleware('auth:jwt')
