import { useEffect, useRef, useState } from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import unsplash from '../API/unsplash'
import youtube from '../API/youtube'

export const withFetch = WrappedComponent => props => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [videoData, setVideoData] = useState({
    selectedVideo: null,
    videos: [],
  })
  const isMountedVal = useRef(1)

  let category = ''
  if (props.category === 'images') category = unsplash
  if (props.category === 'videos') category = youtube

  useEffect(() => {
    isMountedVal.current = 1
    setIsLoading(true)
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
        if (response.status !== 200) {
          isMountedVal.current &&
            setError('Votre requête a rencontré un problème.')
        }
        if (isMountedVal.current) {
          category === youtube
            ? isMountedVal.current &&
              setVideoData({
                videos: response.data.items,
                selectedVideo: response.data.items[0],
              })
            : isMountedVal.current && setData(response.data.results)

          setIsLoading(false)
        }
      } catch (err) {
        isMountedVal.current &&
          setError("La connexion avec le serveur n'a pu être établie.")
      }
    }

    fetchRequest()
    return () => (isMountedVal.current = 0)
  }, [category, props.searchTerm])

  const onVideoSelect = video => {
    setVideoData({ selectedVideo: video })
  }

  if (error) throw error

  return isLoading ? (
    <Dimmer as={Segment} active inverted>
      <Loader size='big' style={{ opacity: '.8' }}>
        Veuillez patienter...
      </Loader>
    </Dimmer>
  ) : (
    <WrappedComponent
      {...props}
      category={props.category}
      onVideoSelect={onVideoSelect}
      data={props.category === 'videos' ? videoData : data}
    />
  )
}