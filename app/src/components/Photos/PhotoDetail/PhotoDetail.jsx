import { createContext, useContext, useMemo } from 'react'
import usePhotoDetail from './hooks/usePhotoDetail'
import usePhotoDetailModal from './hooks/usePhotoDetailModal'
import PhotoDetailCard from './PhotoDetailCard/PhotoDetailCard'
import PhotoDetailModal from './PhotoDetailModal/PhotoDetailModal'

const PhotoDetailContext = createContext()

function PhotoDetail() {
  const { viewModal, openModal, closeModal } = usePhotoDetailModal()
  const { photo, submitHandler } = usePhotoDetail(closeModal)

  const sharedValues = useMemo(() => ({
    viewModal, openModal, closeModal, photo, submitHandler,
  }), [photo, viewModal])

  return (
    <PhotoDetailContext.Provider value={sharedValues}>
      <div>
        <PhotoDetailCard />
        <PhotoDetailModal />
      </div>
    </PhotoDetailContext.Provider>
  )
}

export default PhotoDetail

export const usePhotoDetailContext = () => useContext(PhotoDetailContext)
