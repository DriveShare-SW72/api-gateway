import type { Express } from 'express'
import express from 'express'
import protect from './auth/protect.middleware'
import localsRoute from './locals.route'
import offersRoute from './offers.route'
import reservationsRoute from './reservations'
import usersRoute from './users.route'
// import authRouter from './auth/auth.router'

export default function routerApi(app: Express) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use(protect)
  router.use('/offers', offersRoute)
  router.use('/locals', localsRoute)
  router.use('/reservations', reservationsRoute)
  router.post("/example", (req, res) => {
    res.json({
      message: "Welcome to the API"
    })
  })
  app.use("/", usersRoute)
}