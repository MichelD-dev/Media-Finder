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

  let category = ''
  if (props.category === 'images') category = unsplash
  if (props.category === 'videos') category = youtube

  useEffect(() => {
    const fetchRequest = async () => {
      if (!props.searchTerm) return
      try {
        const response = await category.get(
          '',
          category === youtube
            ? {
                params: {
                  q: props.searchTerm,
                },
              }
            : {
                params: { query: props.searchTerm },
              }
        )
        if (response.status !== 200)
          setError('Votre requête a rencontré un problème.')
        category === youtube
          ? setVideoData({
              videos: response.data.items,
              selectedVideo: response.data.items[0],
            })
          : setData(response.data.results)
      } catch (err) {
        setError('La connexion avec le serveur n\'a pu être établie.')
      }
    }

    fetchRequest()
  }, [category, props.searchTerm])

  const onVideoSelect = video => {
    setVideoData({ selectedVideo: video })
  }

  if (error) throw error

  return (
    <WrappedComponent
      {...props}
      category={props.category}
      onVideoSelect={onVideoSelect}
      data={props.category === 'videos' ? videoData : data}
    />
  )
}
