const Comments = require('../Models/commentsModel')

const turnFormatComments = require('../services/formatComments')

// ========================= GET ==========================
const commentsList = async (req, res) => {
  try {
    const comments = await Comments.find()
    const commentsFormated = turnFormatComments(comments)

    res.json(commentsFormated)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar comentarios' })
  }
}

// ========================= POST =========================
const createComment = async (req, res) => {
  try {
    const newComment = new Comments(req.body)
    const savedComment = await newComment.save()

    res.status(201).json(savedComment)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar um comentario' })
  }
}

// ========================= Update - PUT =======================
const updateComment = async (req, res) => {
  try {
    const id = req.params._id
    const newData = req.body
    const commentUpdated = await Comments.findOneAndUpdate(
      { _id: id },
      newData,
      { new: true }
    )

    if (commentUpdated) {
      res.json(commentUpdated)
    } else {
      res.status(404).json({ error: 'Comentario não encontrado' })
    }
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar comentario' })
  }
}

// ========================= Update - Patch =======================

const patchComment = async (req, res) => {
  try {
    const id = req.params._id
    const { comentario } = req.body
    const comment = await Comments.findOne({ _id: id })

    if (!comment) {
      return res.status(404).json({ error: 'Comentario não encontrado!' })
    }
    comment.comentario = comentario

    const commentUpdated = await comment.save()
    res.json(commentUpdated)
  } catch (error) {
    res.status(400).json({ error: 'erro ao atualizar comentario' })
  }
}

// ========================= Delete =======================
const deleteComment = async (req, res) => {
  try {
    const id = req.params._id
    const commentDeleted = await Comments.findOneAndDelete({ _id: id })

    if (commentDeleted) {
      res.json({ message: 'Comentario excluido com sucesso.' })
    } else {
      res.status(404).json({ error: 'Comentario nao encontrado.' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir comentario' })
  }
}

module.exports = {
  createComment,
  commentsList,
  updateComment,
  patchComment,
  deleteComment
}
