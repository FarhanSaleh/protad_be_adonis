import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Member from 'App/Models/Member'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Member.createMany([
      {
        name: 'Muhammad Farhan Saleh',
        email: 'anak.upload90@gmail.com',
        lastExperience: 'Make Recyeco WebApp',
        batchId: 4,
        quotes: 'lorem ipsum',
        githubAccount: 'https://github.com/FarhanSaleh',
        linkedinAccount: 'https://www.linkedin.com/in/muhammadfarhansaleh',
      },
      {
        name: 'Muhammad Adlim Dzaky Pratama',
        email: 'muhadlim17@gmail.com',
        lastExperience: 'Make Recyeco WebApp',
        batchId: 4,
        quotes: 'lorem ipsum',
        githubAccount: 'https://github.com/adzaky',
        linkedinAccount: 'https://www.linkedin.com/in/adlimdzaky/',
      },
    ])
  }
}
