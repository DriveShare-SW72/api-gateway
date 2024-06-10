import express from 'express'
import httpProxy from 'http-proxy'
import cors from 'cors'
import routerApi from './routes'

// Configurar los servidores de destino
const servers = {
  '/api/v1/geocoordinates': 'https://backend-localservice.onrender.com',
  '/api/v1/parkings': 'https://backend-localservice.onrender.com',
  '/api/v1/locations': 'https://backend-localservice.onrender.com',
  '/api/v1/schedules': 'https://backend-localservice.onrender.com',

  '/api/v1/driveshare': 'https://driveshare-backend-7imt.onrender.com/api/v1',
  // Agrega más rutas y servidores según tus necesidades
}

// Crear el middleware del proxy
const createProxyMiddleware = (): express.RequestHandler => {
  const proxy = httpProxy.createProxyServer({
    changeOrigin: true, // Agregar esta línea para cambiar el origen de la solicitud
    secure: false,
  })

  return (req, res, next) => {
    const { path } = req

    for (const [route, target] of Object.entries(servers)) {
      if (path.startsWith(route)) {
        console.log(`Proxying request for ${path} to ${target}`)
        return proxy.web(req, res, { target })
      }
    }

    // Si la ruta no coincide con ninguna de las rutas configuradas, pasar al siguiente middleware
    next()
  }
}

// Crear la aplicación Express y usar el middleware del proxy
const app = express()
routerApi(app)
app.use(cors())
app.use(createProxyMiddleware())

// Iniciar el servidor
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
