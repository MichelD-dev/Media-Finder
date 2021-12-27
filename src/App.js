import { useReducer } from 'react'
import { Container } from 'semantic-ui-react'
import { ErrorBoundary } from 'react-error-boundary'
import SearchBar from 'Components/SearchBar/SearchBar'
import ImageContent from 'Components/PictureSearch/ImageContent'
import ErrorDisplay from 'Components/Displays/ErrorDisplay'
import VideoContent from 'Components/VideoSearch/VideoContent'
import CacheProvider from 'Context/CacheProvider'

const styles = { container: { paddingTop: '1rem' } }

const reducer = (state, action) => ({ ...state, ...action })

function App() {
  const [{ searchTerm, category }, dispatch] = useReducer(reducer, {
    searchTerm: '',
    category: '',
  })

  const onSubmit = (searchTerm, category) => {
    dispatch({ searchTerm, category })
  }

  const reset = () => {
    dispatch({ searchTerm: '', category: '' })
  }

  return (
    <Container style={styles.container}>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      <CacheProvider>
        <ErrorBoundary
          // key={searchTerm} //FIXME Pas nécessaire
          FallbackComponent={ErrorDisplay}
          onReset={reset}
          resetKeys={[searchTerm]}
        >
          {category === 'images' && <ImageContent searchTerm={searchTerm} />}
          {category === 'videos' && <VideoContent searchTerm={searchTerm} />}
        </ErrorBoundary>
      </CacheProvider>
    </Container>
  )
}

export default App
