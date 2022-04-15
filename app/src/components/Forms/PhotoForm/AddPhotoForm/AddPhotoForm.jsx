import { useNavigate } from 'react-router-dom'
import { useAddPhotosContext } from '../PhotoForm'
import PhotoFormExample from '../PhotoFormExample/PhotoFormExample'

function AddPhotoForm() {
  const navigate = useNavigate()
  const { addPhoto } = useAddPhotosContext()

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    const response = await fetch('http://localhost:3001/api/v1/photos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 201) {
      const photoFromServer = await response.json()
      addPhoto(photoFromServer)
      e.target.reset()
    } else {
      alert('Wrong data')
    }
  }

  return (
    <>
      <PhotoFormExample submitHandler={submitHandler} />
      <div className="d-flex flex-column align-items-center mt-3 mb-3">
        <button onClick={() => { navigate('..') }} type="button" className="btn btn-danger">Back</button>
      </div>
    </>
  )
}

export default AddPhotoForm
