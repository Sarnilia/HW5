import AddCommentForm from './AddCommentForm/AddCommentForm'

const {
  createContext, useState, useEffect, useContext,
} = require('react')

const CommentAddContext = createContext()

function CommentForm({ id }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/photos/${id}/comments/${id}`)
      .then((responce) => responce.json())
      .then((dataFromServer) => setComments(dataFromServer))
  }, [])

  const addComment = (newCommemt) => {
    setComments((prev) => [...prev, newCommemt])
  }

  return (
    <CommentAddContext.Provider value={{ comments, addComment }}>
      <AddCommentForm />
    </CommentAddContext.Provider>
  )
}

export default CommentForm

const useAddCommentContext = () => useContext(CommentAddContext)

export {
  CommentAddContext,
  useAddCommentContext,
}
