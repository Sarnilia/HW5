import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePhotosContext } from '../Photos'

function SearchPhotoForm() {
  const [searchInput, setSearchInput] = useState('')
  const isMount = useRef(false)
  const { updatePhotos } = usePhotosContext()
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const parsedQuery = JSON.parse(searchParams.get('filter'))

    isMount.current = true

    if (parsedQuery && parsedQuery.search) {
      setSearchInput(parsedQuery.search)
    }
  }, [])

  useEffect(() => {
    if (isMount.current) {
      const filter = {
        search: searchInput,
      }

      const prepareFilterForURL = encodeURIComponent(JSON.stringify(filter))

      const query = `filter=${prepareFilterForURL}`

      setSearchParams(query)

      fetch(`http://localhost:3001/api/v1/photos/?${query}`)
        .then((responce) => responce.json())
        .then((data) => {
          // eslint-disable-next-line no-unused-vars
          updatePhotos((rev) => data)
        })
    }
  }, [searchInput])

  const changeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <form className="d-flex flex-column align-items-center">
      <div>
        <input name="title" type="text" className="form-control" placeholder="Find title" value={searchInput} onChange={changeHandler} />
      </div>
    </form>
  )
}

export default SearchPhotoForm
