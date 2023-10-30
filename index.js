const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 4000

const bd = require('./Database/commentsDatabase')
const routes = require('./Routes/commentsRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', routes)

app.listen(port, () => {
  console.log(`servidor iniciado com sucesso na porta ${port}`)
})
