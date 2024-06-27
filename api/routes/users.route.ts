import express from 'express'
import { createProxyMiddleware, fixRequestBody } from 'http-proxy-middleware'

// const API_TARGET_URL = 'http://18.216.92.116:8002'
const API_TARGET_URL = process.env.AUTH_BASE_URL;

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