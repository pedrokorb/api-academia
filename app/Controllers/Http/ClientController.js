'use strict'

const Client = use('App/Models/Client')
class ClientController {
  async index () {
    return await Client.all()
  }

  async show ({ params }) {
    const client = await Client.findOrFail(params.id)
    await client.load('user')
    return client
  }

  async store ({ request }) {
    const data = request.only([
      "user_id", 
      "address", 
      "age", 
      "weight",
    ])

    const client = await Client.create(data)
    return client
  }

  async update ({  params, request }) {
    const client = await Client.findOrFail(params.id)
    const data = request.only([
      "user_id", 
      "address", 
      "age", 
      "weight",
    ])

    client.merge(data)
    await client.save()
    
    return client 
  }

  async destroy ({ params }) {
    const client = await Client.findOrFail(params.id)

    return await client.delete()
  }
}

module.exports = ClientController
