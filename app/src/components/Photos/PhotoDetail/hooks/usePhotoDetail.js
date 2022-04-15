import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

function usePhotoDetail(closeModal) {
  const { photosId } = useParams()

  const controller = useRef(new AbortController())

  const [photo, setPhoto] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/photos/${photosId}`, { signal: controller.current.signal })
      .then((response) => response.json())
      .then((dataFromServer) => setPhoto(dataFromServer))

    return () => { controller.current.abort() }
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = Object.fromEntries(new FormData(e.target).entries())

    const response = await fetch(`http://localhost:3001/api/v1/photos/${photo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.status === 200) {
      const upadtedPhotoFromServer = await response.json()
      setPhoto(upadtedPhotoFromServer)
      closeModal()
    } else {
      alert('Wrong data')
    }
  }

  return {
    photo,
    submitHandler,
  }
}

export default usePhotoDetail
