'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TypeSchema extends Schema {
  up () {
    this.create('type_users', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('type_users')
  }
}

module.exports = TypeSchema
