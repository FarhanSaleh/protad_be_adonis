import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Batch from './Batch'

export default class Member extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public lastExperience: string

  @column()
  public batchId: number

  @column()
  public quotes: string

  @column()
  public githubAccount: string

  @column()
  public linkedinAccount: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Batch)
  public batches: BelongsTo<typeof Batch>
}
