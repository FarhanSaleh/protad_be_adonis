import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Member from 'App/Models/Member'
import MemberValidator from 'App/Validators/MemberValidator'

export default class MembersController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const page = request.input('page', 1)
      const perPage = request.input('per_page', 10)

      const members = await Member.query().preload('batches').paginate(page, perPage)

      return response.status(200).json({
        message: 'success',
        data: members,
      })
    } catch (error) {
      return response.status(404).json({
        message: 'members data not found',
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const member = await Member.query().where('id', params.id).preload('batches').firstOrFail()

      return response.status(200).json({
        message: 'success',
        data: member,
      })
    } catch (error) {
      return response.status(404).json({
        message: 'member data not found',
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const validateData = await request.validate(MemberValidator)

    try {
      const member = await Member.create(validateData)

      return response.status(200).json({
        message: 'success',
        member,
      })
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      })
    }
  }
}
