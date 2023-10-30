require('dotenv').config()

const dataBase = process.env.DATABASE_URL

const mongoose = require('mongoose')
mongoose
  .connect(`${dataBase}`)
  .then(() => {
    console.log('Conectamos ao mongoDB!')
  })
  .catch(err => console.log(err))

