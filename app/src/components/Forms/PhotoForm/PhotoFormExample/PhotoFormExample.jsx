import { useEffect, useRef } from 'react'

function PhotoFormExample({
  submitHandler, title = '', description = '', tag = '', url = '',
}) {
  const formRef = useRef(null)

  useEffect(() => {
    formRef.current.elements.title.value = title
    formRef.current.elements.description.value = description
    formRef.current.elements.tag.value = tag
    formRef.current.elements.url.value = url
  }, [])

  return (
    <form ref={formRef} onSubmit={submitHandler} className="d-flex flex-column align-items-center mt-3">
      <div className="mb-3">
        <input name="title" type="text" className="form-control" placeholder="Title" />
      </div>
      <div className="mb-3">
        <input name="description" type="text" className="form-control" placeholder="Decription" />
      </div>
      <div className="mb-3">
        <input name="tag" type="text" className="form-control" placeholder="Tag" />
      </div>
      <div className="mb-3">
        <input name="url" type="text" className="form-control" placeholder="Photo URL" />
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}

export default PhotoFormExample
