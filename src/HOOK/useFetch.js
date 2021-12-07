import { useCallback, useEffect, useReducer } from 'react'

const initialState = {
  error: null,
  data: [],
  status: 'idle',
  videoData: {
    selectedVideo: null,
    videos: [],
  },
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetching':
      return { status: 'fetching', data: null, error: null }
    case 'done':
      return { ...state, status: 'done', data: action.payload }
    case 'fail':
      return { ...state, status: 'fail', error: action.error }
    default:
      return state
  }
}

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const execute = useCallback(async fetchService => {
    if (!fetchService) return
    dispatch({ type: 'fetching' })
    try {
      const response = await fetchService

      if (response.status !== 200) {
        dispatch({
          type: 'fail',
          error: 'Votre requête a rencontré un problème.',
        })
      }

      dispatch({ type: 'done', payload: response.data.results })

    } catch (err) {
      dispatch({
        type: 'fail',
        error: "La connexion avec le serveur n'a pu être établie.",
      })
    }
  }, [])
useEffect(() => console.log(state.data), [state])
  const onVideoSelect = video => {
    dispatch({ data: { ...state.data, selectedVideo: video } }) //TODO à traiter
  }

  if (state.error) throw state.error

  return { ...state, onVideoSelect, execute }
}

export default useFetch
