import type { ErrorRequestHandler } from 'express'

const logErrors = function (err, _req, _res, next) {
  console.error(err)
  next(err)
} as ErrorRequestHandler

export { logErrors }
