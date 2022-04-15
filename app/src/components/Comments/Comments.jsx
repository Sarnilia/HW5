import {
  createContext, useContext, useEffect, useState,
} from 'react'
import CommentForm from '../Forms/CommentForm/CommentForm'
import CommentList from './CommentList/CommentList'

const CommentContext = createContext()

function Comments({ id }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/photos/${id}/comments/${id}`)
      .then((response) => response.json())
      .then((dataFromServer) => setComments(dataFromServer))
  }, [])

  const addComment = (newComment) => {
    setComments((prev) => [...prev, newComment])
  }

  return (
    <CommentContext.Provider value={{ comments, addComment }}>
      <div>
        <div>
          <CommentList />
        </div>
        <CommentForm />
      </div>
    </CommentContext.Provider>
  )
}

export default Comments

const useCommentsContext = () => useContext(CommentContext)

export {
  CommentContext,
  useCommentsContext,
}
