import { useEffect, useState } from 'react'
import unsplash from '../API/unsplash'
import youtube from '../API/youtube'

export const withFetch = WrappedComponent => props => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [videoData, setVideoData] = useState({
    selectedVideo: null,
    videos: [],
  })

  const category =
    (props.category === 'images' && unsplash) ||
    (props.category === 'videos' && youtube)

  useEffect(() => {
    const fetchRequest = async () => {
      if (!props.searchTerm) return
      try {
        const response = await category.get('', {
          // params: { query: props.searchTerm },
          params: {
            q: props.searchTerm,
          },
        })
        if (response.status !== 200)
          setError('Fetch request error.' + response.status)
        setVideoData({
          videos: response.data.items,
          selectedVideo: response.data.items[0],
        })
      } catch (err) {
        setError(err.response.data.error)
        console.log(err.response.data.error)
      }
      // try {
      //   const response = await category.get('', {
      //     params: { query: props.searchTerm },
      //   })
      //   if (response.status !== 200)
      //     setError('Fetch request error.' + response.status)
      //   setData(response.data.results)
      // } catch (err) {
      //   setError(err.response.data.error)
      //   console.log(err.response.data.error)
      // }
    }
    // fetchRequest()
    fetchRequest()
  }, [category, props.searchTerm])

  const onVideoSelect = video => {
    setVideoData({ selectedVideo: video })
  }

  if (error) throw error

  // return <WrappedComponent {...props} data={data} />
  return <WrappedComponent {...props} onVideoSelect={onVideoSelect} data={videoData} />
}
