import express from 'express'
import cors from 'cors'
import fileRouter from './components/fileParser/fileParser.routes.js'

const app = express()

const PORT = 3000

app.use(express.json())

app.use(cors())

app.use(fileRouter)

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto = ${PORT}`)
})

export default app
