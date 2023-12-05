import type { Request, Response } from 'express'


import { pushService } from './services/push.service'

import { appErrorResponseHandler, appSuccessResponseHandler } from '../../application/handlers/response'

import type { AppControllerResponse } from '../../application/models/app.response'

class PushController {
  public async pushFiveTasks (req: Request, res: Response): Promise<AppControllerResponse> {
    const data = req.query.data?.toString() ?? ''
    try {
      const response = await pushService.pushFiveTasks(data)
      const result = appSuccessResponseHandler('success', response)
      return res.status(200).json(result)
    } catch (error) {
      console.log(error)
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  public async pushAllTasks (req: Request, res: Response): Promise<AppControllerResponse> {
    const data = req.query.data?.toString() ?? ''

    try {
      const response = await pushService.pushAllTasks(data)
      const result = appSuccessResponseHandler('success', response)
      return res.status(200).json(result)
    } catch (error) {
      console.log(error)  
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }
  
    
  public async pushByNumber (req: Request, res: Response): Promise<AppControllerResponse> {
    const data = req.query.data?.toString() ?? ''

    try {
      const response = await pushService.pushByNumber(data)
      const result = appSuccessResponseHandler('success', response)
      return res.status(200).json(result)
    } catch (error) {
      console.log(error)  
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  
}

export const pushController: PushController = new PushController()
