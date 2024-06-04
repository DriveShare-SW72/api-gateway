import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  res.json({ message: 'Welcome to the Local services' })
})

export default router
