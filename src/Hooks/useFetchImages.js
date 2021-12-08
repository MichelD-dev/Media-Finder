import useFetch from './useFetch'
import { useCache } from 'Context/CacheConsumer'
import { useEffect } from 'react'
import unsplash from 'API/unsplash'

const useFetchImages = searchTerm => {
  const [cache, dispatch] = useCache()
  const { data, status, execute, setData } = useFetch()

  useEffect(() => {
    if (!searchTerm) return
    else if (
      cache[searchTerm]?.data.data.results &&
      Date.now() < cache[searchTerm]?.expire
    )
      setData(cache[searchTerm].data.data.results)
    else
      execute(
        unsplash(searchTerm).then(data => {
          dispatch({ type: 'ADD_IMAGES', searchTerm, data })

          return data
        })
      )
  }, [cache, dispatch, execute, searchTerm, setData])

  return { data, status }
}

export default useFetchImages
