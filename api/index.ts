import express from 'express'
import cors from 'cors'
import routerApi from './routes'
import { logErrors } from './middlewares/error.handler'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

routerApi(app)

app.use(logErrors)

app.listen(port, () => console.log('Sever started on port', port))
