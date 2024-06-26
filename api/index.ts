import express from 'express'
import cors from 'cors'
import routerApi from './routes'

// Crear la aplicación Express y usar el middleware del proxy
const app = express()
app.use(cors())
routerApi(app)

// Iniciar el servidor
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
