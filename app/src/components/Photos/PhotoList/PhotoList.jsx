import { useContext } from 'react'
import PhotoItem from '../PhotoItem/PhotoItem'
import { PhotoContext } from '../Photos'

function PhotoList() {
  const { photos } = useContext(PhotoContext)

  return (
    <div className="d-flex flex-column-reverse align-items-center">
      {photos.map((photo) => <PhotoItem key={photo.id} {...photo} />)}
    </div>
  )
}

export default PhotoList
