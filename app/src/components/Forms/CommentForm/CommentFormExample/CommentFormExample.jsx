import { useEffect, useRef } from 'react'

function CommentFormExample({
  submitHandler, comment = '',
}) {
  const formRef = useRef(null)

  useEffect(() => {
    formRef.current.elements.comment.value = comment
  }, [])

  return (
    <form ref={formRef} onSubmit={submitHandler} className="d-flex flex-column align-items-center">
      <div className="mb-3">
        <input name="comment" type="text" className="form-control" placeholder="Your comment" />
      </div>
      <button type="submit" className="btn btn-primary mb-3">Post</button>
    </form>
  )
}

export default CommentFormExample
