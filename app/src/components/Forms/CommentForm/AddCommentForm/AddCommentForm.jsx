import { useNavigate } from 'react-router-dom'
import { useAddCommentContext } from '../CommentForm'
import CommentFormExample from '../CommentFormExample/CommentFormExample'

function AddCommentForm({ id }) {
  const navigate = useNavigate()
  const { addComment } = useAddCommentContext()

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    const response = await fetch(`http://localhost:3001/api/v1/photos/${id}/comments/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 201) {
      const commentFromServer = await response.json()
      addComment(commentFromServer)
      e.target.reset()
    } else {
      alert('Wrong data')
    }
  }

  return (
    <>
      <CommentFormExample submitHandler={submitHandler} />
      <div className="d-flex flex-column align-items-center mt-3 mb-3">
        <button onClick={() => { navigate(-1) }} type="button" className="btn btn-danger">Back</button>
      </div>
    </>
  )
}

export default AddCommentForm
