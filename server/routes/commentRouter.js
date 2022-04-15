const express = require('express')
const { getComments, postComment } = require('../controllers/commentsController')

const commentRouter = express.Router()

commentRouter.route('/:id')
    .get(getComments)
    .post(postComment)
    
module.exports = {
    commentRouter,
}