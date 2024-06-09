import express from 'express'

const localService = express.Router()

localService.get('/', (_req, res) => {
  res.json({ message: 'Welcome to the Local services' })
})

export default localService
