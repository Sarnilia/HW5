import { useContext } from 'react'
import CommentItem from '../CommentItem/CommentItem'
import { CommentContext } from '../Comments'

function CommentList() {
  const { comments } = useContext(CommentContext)

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <div className="card mb-3" style={{ width: '300px' }}>
        <div className="d-flex flex-column align-items-center"> Comments:</div>
        <div className="card-body p-1 d-flex flex-column">
          {comments.map((comment) => <CommentItem key={comment.id} {...comment} />)}
        </div>
      </div>
    </div>
  )
}

export default CommentList
