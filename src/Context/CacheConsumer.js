import { useContext } from 'react'
import { CacheContext } from './CacheProvider'

export function useCache() {
  const context = useContext(CacheContext)
  if (context === undefined)
    throw new Error('useCache doit être utilisé avec CacheProvider')

  return context
}
