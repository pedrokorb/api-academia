'use strict'

const User = use('App/Models/User');
class UserController {
  async index () {
    return await User.all()
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)
    await user.load('typeUser') // para buscar o relacionamento user -> typeUser na tabela e trazer na resposta
    return user
  }

  async store ({ request }) {
    const data = request.only([
      "name", 
      "username", 
      "email", 
      "password",
      "type_user_id"
    ])

    const user = await User.create(data)
    return user
  }

  async update ({  params, request }) {
    const user = await User.findOrFail(params.id)
    const data = request.only([
      "name", 
      "username", 
      "email", 
      "password",
      "type_user_id"
    ])

    user.merge(data)
    await user.save()
    
    return user 
  }

  async destroy ({ params }) {
    const user = await User.findOrFail(params.id)

    return await user.delete()
  }
}

module.exports = UserController
