/* eslint-disable @typescript-eslint/no-misused-promises */
import { ServerRouter } from './models/route'
/* dtos */
import { type RequestHandler } from 'express'
import { pullController } from '../controllers/pull/pull.controller'

class PullRoutes extends ServerRouter {
  constructor () {
    super()
    this.config()
  }

  config (): void {
    this.router.get('/', pullController.createUsers as RequestHandler)
    this.router.get('/login', pullController.login as RequestHandler)
  }
}

const pullRoutes: PullRoutes = new PullRoutes()
export default pullRoutes.router
