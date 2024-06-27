import { HttpStatusCode } from 'axios'
import http from './utils/request'
import router from '../offers.route'

export default async function protect(req, res, next) {
  try {
    const response = await http({
      method: 'get',
      url: '/validate',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        Cookie: req.headers.cookie,
      }
    })

    next()
  } catch (error) {
    return res.status(HttpStatusCode.Unauthorized).json({
      error: error,
      messsage: 'No tienes permisos para acceder a esta ruta',
    })
  }
}