const { db } = require("../DataBase/DataBase")


const getPhotos = (req, res) => {

    const filter = req.query.filter && JSON.parse(req.query.filter)
    let dataForClient = db.photos.map(({tag, ...rest}) => rest)

    if (filter) {
        if (filter.search) {
            const searchRegExp = new RegExp(filter.search, 'i')
            dataForClient = dataForClient.filter((photo) => searchRegExp.test(photo.title))
        }
    }

    res.json(dataForClient)
}

const getCurrentPhoto = (req, res) => {
    const {id} = req.params

    const dataForClient = db.photos.find((photo) => photo.id === +id)

    if (dataForClient) {
        return res.json(dataForClient)
    }

    return res.status(404)
}

const postPhoto = (req, res) => {
    const dataFromClient = req.body

    if(!Object.values(dataFromClient).every((value) => !!value)) return res.sendStatus(400)
 
    const newPhoto = {
        ...dataFromClient,
        id: Date.now()
    }
 
    db.photos.push(newPhoto)
 
    return res.status(201).json(newPhoto)
 }

 const editPhoto = (req, res) => {
    const { id } = req.params
  
    const currentPhotoIndex = db.photos.findIndex((photo) => photo.id === +id)
  
    if (currentPhotoIndex === -1) return res.sendStatus(404)
  
    if (!Object.values(req.body).every((value) => !!value)) return res.sendStatus(400)
  
    db.photos[currentPhotoIndex] = {
      ...db.photos[currentPhotoIndex],
      ...req.body,
    }
  
    return res.json(db.photos[currentPhotoIndex])
  }
  const deletePhoto = (req, res) => {
    const {action} = req.body
    const currentPhotoIndex = db.photos.findIndex((photo) => photo.id == action)

    if (action > -1) {
        db.photos.splice(currentPhotoIndex, 1)
        return res.sendStatus(200)
    }

    return res.sendStatus(404)
}

module.exports = {
    getPhotos,
    getCurrentPhoto,
    postPhoto,
    editPhoto,
    deletePhoto,
}