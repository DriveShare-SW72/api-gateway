import express from 'express'
import httpProxy from 'http-proxy'

// Configurar los servidores de destino
const servers = {
  '/geocoordinates': 'https://backend-localservice.onrender.com/api/v1',
  '/parkings': 'https://backend-localservice.onrender.com/api/v1',
  '/locations': 'https://backend-localservice.onrender.com/api/v1',
  '/schedules': 'https://backend-localservice.onrender.com/api/v1',
  '/driveshare': 'https://driveshare-backend-7imt.onrender.com/api/v1',
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

    console.log(path)

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

const localService = express.Router()

localService.use('/', createProxyMiddleware())

export default localService
