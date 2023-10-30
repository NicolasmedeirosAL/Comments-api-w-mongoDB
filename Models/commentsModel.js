const mongoose = require('mongoose')

const commentsSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  comentario: { type: String, required: true },
  data: { type: Date, default: Date.now }
})

const Comments = mongoose.model('Comments', commentsSchema)

module.exports = Comments
