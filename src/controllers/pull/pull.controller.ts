import type { Request, Response } from 'express'


import { pullService } from './services/pull.service'

import { appErrorResponseHandler } from '../../application/handlers/response'


class PullController {
  public async pullFiveTasks (req: Request, res: Response): Promise<any> {

    try {
      const response = await pullService.pullFiveTasks()
      const data = JSON.stringify(response)
      res.redirect(`/api/push/pushFiveTasks?data=${data}`)
    } catch (error) {
      console.log(error)
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  public async pullAllTasks (req: Request, res: Response): Promise<any> {

    try {
      const response = await pullService.pullAllTasks()
      const data = JSON.stringify(response)
      res.redirect(`/api/push/pushAllTasks?data=${data}`)
    } catch (error) {
      console.log(error)
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  public async pullByNumber (req: Request, res: Response): Promise<any> {
    const number = parseInt(req.query.number?.toString() ?? '')
    try {
      const response = await pullService.pullByNumber(number)
      const data = JSON.stringify(response)
      res.redirect(`/api/push/pushByNumber?data=${data}`)
    } catch (error) {
      console.log(error)
      const { statusCode } = appErrorResponseHandler(error)
      return res.status(statusCode).json(error)
    }
  }

  
}

export const pullController: PullController = new PullController()
