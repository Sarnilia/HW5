import PhotoFormExample from '../../../Forms/PhotoForm/PhotoFormExample/PhotoFormExample'
import Modal from '../../../Modal/Modal'
import { usePhotoDetailContext } from '../PhotoDetail'

function PhotoDetailModal() {
  const {
    viewModal, submitHandler, photo, closeModal,
  } = usePhotoDetailContext()

  return (
    <Modal state={viewModal}>
      <PhotoFormExample submitHandler={submitHandler} {...photo} />
      <div className="d-flex flex-column align-items-center mt-3">
        <button onClick={closeModal} type="button" className="btn btn-danger">Close</button>
      </div>
    </Modal>
  )
}

export default PhotoDetailModal
