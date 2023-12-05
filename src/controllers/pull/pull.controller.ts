import type { Request, Response } from 'express'


import { pullService } from './services/pull.service'

import { appErrorResponseHandler, appSuccessResponseHandler } from '../../application/handlers/response'

import type { AppControllerResponse } from '../../application/models/app.response'

class PullController {
  public async createUsers (req: Request, res: Response): Promise<AppControllerResponse> {
    const user = req.body.user

    try {
      const response = await pullService.createUsers(user)
      const result = appSuccessResponseHandler('success', response)
      return res.status(200).json(result)
    } catch (error) {
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  public async login (req: Request, res: Response): Promise<AppControllerResponse> {
    const body = req.body

    try {
      const response = await pullService.login(body)
      const result = appSuccessResponseHandler('success', response)
      return res.status(200).json(result)
    } catch (error) {
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  
}

export const pullController: PullController = new PullController()
