import express from 'express'
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware'

const API_TARGET_URL = 'https://backend-userservice-fa3y.onrender.com'

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
