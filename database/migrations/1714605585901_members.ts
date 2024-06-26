import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'members'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 50).notNullable()
      table.string('email', 255).notNullable()
      table.string('last_experience', 255).nullable()
      table.integer('batch_id').unsigned().references('id').inTable('batches')
      table.text('quotes').nullable()
      table.string('github_account', 255).nullable
      table.string('linkedin_account', 255).nullable

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
