const { db } = require("../DataBase/DataBase")

const postComment = (req, res) => {
    const {id} = req.params

    const dataFromClient = req.body
    if(!Object.values(dataFromClient).every((value) => !!value)) return res.sendStatus(400)
    
    const newComment = {
        ...dataFromClient,
        id: +id
    }

    db.comments.push(newComment)

    return res.status(201).json(newComment)
}

const getComments = (req, res) => {
    const {id} = req.params

    const commentsForClient = db.comments.filter((comment) => comment.id === +id)

    if (commentsForClient) {
        return res.json(commentsForClient)
    }

    return res.status(404)
}

module.exports = {
    postComment,
    getComments,
}