import express from 'express'
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware'

const API_TARGET_URL = 'http://18.118.137.254:8080/api/v1'

const router = express.Router()

router.use(
  '/',
  createProxyMiddleware({
    target: API_TARGET_URL,
    secure: false,
    changeOrigin: true,
    logger: console,
    on: {
      proxyReq: fixRequestBody,
    },
  }),
)

export default router
