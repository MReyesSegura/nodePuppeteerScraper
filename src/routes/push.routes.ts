/* eslint-disable @typescript-eslint/no-misused-promises */
import { ServerRouter } from './models/route'
/* dtos */
import { type RequestHandler } from 'express'
import { pushController } from '../controllers/push/push.controller'

class PullRoutes extends ServerRouter {
  constructor () {
    super()
    this.config()
  }

  config (): void {
    this.router.get('/pushFivetasks', pushController.pushFiveTasks as RequestHandler)
    this.router.get('/pushAllTasks', pushController.pushAllTasks as RequestHandler)
    this.router.get('/pushByNumber', pushController.pushByNumber as RequestHandler)
  }
}

const pullRoutes: PullRoutes = new PullRoutes()
export default pullRoutes.router
