import express from 'express'
import cors from 'cors'

const app = express()

const PORT = 3000

app.use(express.json())

app.use(cors())

app.use('/', (req, res) => {
  return res.json('hola buenas')
})

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto = ${PORT}`)
})

export default app
