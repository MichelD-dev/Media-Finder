import useFetch from './useFetch'
import { useEffect } from 'react'
import unsplash from 'API/unsplash'

const useFetchImages = searchTerm => {
  const { data, error, status, execute } = useFetch()

  useEffect(() => {
    if (!searchTerm) return

    execute(unsplash(searchTerm))
    
  }, [execute, searchTerm])

  return { data, error, status }
}

export default useFetchImages
