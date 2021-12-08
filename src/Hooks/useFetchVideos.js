import useFetch from './useFetch'
import { useCache } from 'Context/CacheConsumer'
import { useEffect } from 'react'
import youtube from 'API/youtube'

const useFetchVideos = searchTerm => {
  const [cache, dispatch] = useCache()
  const { onVideoSelect, data, selectedVideo, status, execute, setData } =
    useFetch()

  useEffect(() => {
    if (!searchTerm) return
    else if (
      cache[searchTerm]?.data.data.items &&
      Date.now() < cache[searchTerm]?.expire
    )
      setData(cache[searchTerm].data.data.items)
    else
      execute(
        youtube(searchTerm).then(data => {
          dispatch({ type: 'ADD_VIDEOS', searchTerm, data, selectedVideo })

          return data
        })
      )
  }, [cache, dispatch, execute, searchTerm, selectedVideo, setData])

  return { onVideoSelect, data, selectedVideo, status }
}

export default useFetchVideos
