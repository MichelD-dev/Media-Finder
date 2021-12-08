import { useCallback, useReducer } from 'react'

const initialState = {
  error: null,
  data: [],
  status: 'idle',
  selectedVideo: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCHING':
      return { status: 'fetching', data: [], error: null }
    case 'DONE':
      return { ...state, status: 'done', data: action.payload }
    case 'SELECTED':
      return { ...state, status: 'selected', selectedVideo: action.payload }
    case 'FAIL':
      return { ...state, status: 'fail', error: action.error }
    case 'IDLE':
      return { error: null, data: [], status: 'idle', selectedVideo: null }
    default:
      throw new Error(`L'action ${action.type} n'est pas reconnue`)
  }
}

const useFetch = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { data, selectedVideo, status } = state

  const execute = useCallback(async fetchService => {
    if (!fetchService) return
    dispatch({ type: 'FETCHING' })

    try {
      const response = await fetchService

      if (response.status !== 200) {
        dispatch({
          type: 'FAIL',
          error: `Votre requête a rencontré un
 problème.`,
        })
      }

      dispatch({
        type: 'DONE',
        payload: response.data.results || response.data.items,
      })

      if (response.data.items) {
        dispatch({
          type: 'SELECTED',
          payload: response.data.items[0],
        })
      }
    } catch (err) {
      dispatch({
        type: 'FAIL',
        error: `La connexion avec le serveur
 n'a pu être établie.`,
      })
    }
  }, [])

  const setData = useCallback(
    data => {
      dispatch({ type: 'DONE', payload: data })
    },
    [dispatch]
  )

  const onVideoSelect = video => {
    dispatch({
      type: 'SELECTED',
      payload: video,
    })
  }

  if (state.error) throw state.error

  return { data, selectedVideo, status, onVideoSelect, execute, setData }
}

export default useFetch
