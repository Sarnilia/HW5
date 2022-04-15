const express = require('express')
const { getPhotos, postPhoto, getCurrentPhoto, editPhoto, deletePhoto } = require('../controllers/photosController')


const photosRouter = express.Router()

photosRouter.route('/')
    .get(getPhotos)
    .post(postPhoto)

photosRouter.route('/:id')
    .get(getCurrentPhoto)
    .patch(editPhoto)
    .delete(deletePhoto)
    
module.exports = {
    photosRouter,
}