import express from 'express'
import cors from 'cors'
import fileRouter from './components/fileParser/fileParser.routes.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { notFoundHandler } from './middlewares/notFoundHandler.js'

const app = express()

const PORT = 5000

app.use(express.json())

app.use(cors())

app.use('/files', fileRouter)

// error handlers
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto = ${PORT}`)
})

export default app
