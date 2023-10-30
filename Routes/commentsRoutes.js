const express = require('express')
const router = express.Router()
const commentsController = require('../Controller/commentsController')

// =======================GET============================
router.get('/comments/', commentsController.commentsList)
// =======================Post============================
router.post('/comments/newcomment', commentsController.createComment)
// =======================Put / Patch============================
router.patch('/comments/updatecomment/:_id', commentsController.updateComment)

// =======================Delete============================
router.delete('/comments/deletecomment/:_id', commentsController.deleteComment)

module.exports = router
