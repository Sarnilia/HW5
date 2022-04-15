import { Link } from 'react-router-dom'
import { usePhotosContext } from '../Photos'

function PhotoItem({
  id, url, description, title,
}) {
  const { deletePhoto } = usePhotosContext()
  const deleteThisPhoto = () => deletePhoto(id)

  const deleteHandler = async (e) => {
    const entries = e.target.dataset.action
    console.log(entries)
    const response = await fetch(`http://localhost:3001/api/v1/photos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: entries }),
    })
    if (response.status === 200) {
      deleteThisPhoto(entries)
    } else {
      alert('Wrong data')
    }
  }

  return (
    <div className="card mb-3" style={{ width: '300px' }}>

      <Link to={`/photos/${id}`}>
        <img src={url} className="card-img-top" alt={url} />
      </Link>
      <div className="card-body p-1 d-flex flex-column">
        <div className="card p-1" style={{ textAlign: 'left' }}>{title}</div>
        <div className="card p-1 mb-2" style={{ textAlign: 'left' }}>{description}</div>
        <button data-action={`${id}`} onClick={deleteHandler} type="button" className="btn btn-danger">Delete</button>
      </div>
    </div>
  )
}

export default PhotoItem
