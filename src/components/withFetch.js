import { useEffect, useState } from 'react'
import unsplash from '../API/unsplash'

export const withFetch = WrappedComponent => props => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchRequest = async () => {
      if (!props.searchTerm) return
      try {
        const response = await unsplash.get('/search/photos?per_page=20', {
          params: { query: props.searchTerm },
        })
        if (response.status !== 200)
          setError('Fetch request error.' + response.status)
        setData(response.data.results)
      } catch (err) {
        setError(err.response.data.error)
        console.log(err.response.data.error)
      }
    }
    fetchRequest()
  }, [props.searchTerm])

  if (error) throw error

  return <WrappedComponent {...props} data={data} />
}
