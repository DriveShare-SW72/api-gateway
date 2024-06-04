import express from 'express'
import type { Express } from 'express'
import usersRoute from './users.route'
import offersRoute from './offers.route'
import localsRoute from './locals.route'

export default function routerApi(app: Express) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/users', usersRoute)
  router.use('/offers', offersRoute)
  router.use('/locals', localsRoute)
}
