import { createContext, useReducer } from 'react'

export const CacheContext = createContext()

const cacheReducer = (state, action) => {
  const ttl = 1000 * 60 * 60
  const expire = Date.now() + ttl

  switch (action.type) {
    case 'ADD_IMAGES':
      return { ...state, [action.searchTerm]: { data: action.data, expire } }
    case 'ADD_VIDEOS':
      return {
        ...state,
        [action.searchTerm]: {
          data: action.data,
          selectedVideo: action.selectedVideo,
          expire,
        },
      }
    default:
      throw new Error(`L'action ${action.type} est non supportée`)
  }
}

export default function CacheProvider(props) {
  const [cache, dispatch] = useReducer(cacheReducer, {})

  return <CacheContext.Provider value={[cache, dispatch]} {...props} />
}
