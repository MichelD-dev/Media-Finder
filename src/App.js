import SearchBar from 'Components/SearchBar/SearchBar'
import { Container } from 'semantic-ui-react'
import ImageContent from 'Components/PictureSearch/ImageContent'
import { useReducer } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorDisplay from 'Components/ErrorDisplay/ErrorDisplay.js'
import VideoContent from 'Components/VideoSearch/VideoContent'

const reducer = (state, action) => ({ ...state, ...action })

function App() {
  const [{ searchTerm, category }, dispatch] = useReducer(reducer, {
    searchTerm: '',
    category: '',
  })

  const onSubmit = (term, category) => {
    dispatch({ searchTerm: term, category })
  }

  const reset = () => {
    dispatch({ searchTerm: '', category: '' })
  }

  return (
    <Container style={{ paddingTop: '1rem' }}>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      <ErrorBoundary
        key={searchTerm}
        FallbackComponent={ErrorDisplay}
        onReset={reset}
        resetKeys={[searchTerm]}
      >
        {category === 'images' && (
          <ImageContent searchTerm={searchTerm} category={category} />
        )}

        {category === 'videos' && (
          <VideoContent searchTerm={searchTerm} category={category} />
        )}
      </ErrorBoundary>
    </Container>
  )
}

export default App
