import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Batch from 'App/Models/Batch'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Batch.createMany([
      { title: 'Fiery Hidrogen' },
      { title: 'Apollo' },
      { title: 'Voyager' },
      { title: 'Rover' },
      { title: 'Astrosphere' },
    ])
  }
}
