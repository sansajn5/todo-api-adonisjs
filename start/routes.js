'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/
const Database = use('Database')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.get('/', async () => {
  return await Database.table('users').select('*')
})

Route.group(() => {
  Route.post('auth/sign-up', 'UserController.register')
}).prefix('/api/v0')
