export function errorHandler (error, req, res, next) {
  error.status = error.status || 500
  res.status(error.status).json({
    success: false,
    message: error.message
  })
}
