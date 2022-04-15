import AddPhotoForm from './AddPhotoForm/AddPhotoForm'

const {
  createContext, useState, useEffect, useContext,
} = require('react')

const PhotoAddContext = createContext()

function PhotoForm() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/photos')
      .then((responce) => responce.json())
      .then((dataFromServer) => setPhotos(dataFromServer))
  }, [])

  const addPhoto = (newPhoto) => {
    setPhotos((prev) => [...prev, newPhoto])
  }

  return (
    <PhotoAddContext.Provider value={{ photos, addPhoto }}>
      <AddPhotoForm />
    </PhotoAddContext.Provider>
  )
}

export default PhotoForm

const useAddPhotosContext = () => useContext(PhotoAddContext)

export {
  PhotoAddContext,
  useAddPhotosContext,
}
