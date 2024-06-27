import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import routerApi from './routes'

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',')

// Crear la aplicación Express y usar el middleware del proxy
const app = express()
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)
    
    if(allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true)
    }
    
    callback(new Error('Not allowed by CORS'))
  },
  credentials: true
}))
app.use(cookieParser())

routerApi(app)

// Iniciar el servidor
const port = Number(process.env.PORT) || 4000
const host = process.env.HOST || '127.0.0.1'
app.listen(port, host, () => {
  console.log(`Server started on ${host}:${port}`)
})