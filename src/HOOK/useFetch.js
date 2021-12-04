import { useEffect, useReducer, useRef } from 'react'
import unsplash from 'API/unsplash'
import youtube from 'API/youtube'

const initialState = {
  error: null,
  data: [],
  isLoading: false,
  videoData: {
    selectedVideo: null,
    videos: [],
  },
}

const reducer = (state, action) => ({ ...state, ...action })

const useFetch = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const isMountedVal = useRef(1)

  let category = ''
  if (props.category === 'images') category = unsplash
  if (props.category === 'videos') category = youtube

  useEffect(() => {
    isMountedVal.current = 1
    dispatch({ isLoading: true })
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
            dispatch({ error: 'Votre requête a rencontré un problème.' })
        }
        if (isMountedVal.current) {
          category === youtube
            ? isMountedVal.current &&
              dispatch({
                videoData: {
                  videos: response.data.items,
                  selectedVideo: response.data.items[0],
                },
              })
            : isMountedVal.current && dispatch({ data: response.data.results })

          dispatch({ isLoading: false })
        }
      } catch (err) {
        isMountedVal.current &&
          dispatch({
            error: "La connexion avec le serveur n'a pu être établie.",
          })
      }
    }

    fetchRequest()
    return () => (isMountedVal.current = 0)
  }, [category, props.searchTerm])

  const onVideoSelect = video => {
    dispatch({ videoData: { ...state.videoData, selectedVideo: video } })
  }

  if (state.error) throw state.error

  return { ...state, onVideoSelect }
}

export default useFetch
