import PhotoList from './PhotoList/PhotoList'
import SearchPhotoForm from './SearchPhotoForm/SearchPhotoForm'

const {
  createContext, useState, useEffect, useContext,
} = require('react')

const PhotoContext = createContext()

function Photos() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/photos')
      .then((responce) => responce.json())
      // eslint-disable-next-line no-unused-vars
      .then((dataFromServer) => setPhotos((prev) => dataFromServer))
  }, [])

  const addPhoto = (newPhoto) => {
    setPhotos((prev) => [...prev, newPhoto])
  }

  const deletePhoto = (id) => {
    setPhotos((prev) => prev.filter((photo) => photo.id !== id))
  }

  const updatePhotos = (newPhotosList) => setPhotos(newPhotosList)

  return (
    <PhotoContext.Provider value={{
      photos, addPhoto, deletePhoto, updatePhotos,
    }}
    >
      <SearchPhotoForm />
      <hr />
      <PhotoList />
    </PhotoContext.Provider>
  )
}

export default Photos

const usePhotosContext = () => useContext(PhotoContext)

export {
  PhotoContext,
  usePhotosContext,
}
