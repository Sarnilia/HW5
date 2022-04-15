import { Link, useNavigate } from 'react-router-dom'
import { usePhotoDetailContext } from '../PhotoDetail'

function PhotoDetailCard() {
  const navigate = useNavigate()

  const { photo, openModal } = usePhotoDetailContext()

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="card mb-3" style={{ width: '300px' }}>
          <img src={photo.url} className="card-img-top mb-2" alt={photo.url} />
          <div className="card-body p-1 d-flex flex-column">
            <div className="card p-1" style={{ textAlign: 'left' }}>{photo.title}</div>
            <div className="card p-1" style={{ textAlign: 'left' }}>{photo.description}</div>
            <div className="card mb-3 p-1" style={{ textAlign: 'left' }}>
              #
              {photo.tag}
            </div>
            <button onClick={openModal} type="button" className="btn btn-primary">Edit</button>
          </div>
        </div>
        <button onClick={() => { navigate('..') }} type="button" className="btn btn-danger">Back</button>
      </div>
      <Link to={`/photos/${photo.id}/comments/${photo.id}`}>
        <div className="d-flex flex-column align-items-center mt-3">
          <button type="button" className="btn btn-success">Comments</button>
        </div>
      </Link>

    </>
  )
}

export default PhotoDetailCard
