import useFetch from './useFetch'
import { useEffect } from 'react'
import youtube from 'API/youtube'

const useFetchVideos = searchTerm => {
  const { videoData, data, error, status, execute } = useFetch()

  useEffect(() => {
    if (!searchTerm) return

    execute(youtube(searchTerm))
    
  }, [execute, searchTerm])

  return { videoData, data, error, status }
}

export default useFetchVideos
