import SearchBar from 'Components/SearchBar/SearchBar'
import { Container } from 'semantic-ui-react'
import FetchedContent from 'Components/PictureSearch/Content'
import { useReducer } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorDisplay from 'Components/ErrorDisplay/ErrorDisplay.js'
import { v4 as uuidv4 } from 'uuid'
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
        key={uuidv4()}
        FallbackComponent={ErrorDisplay}
        onReset={reset}
        resetKeys={[searchTerm]}
      >
        {category === 'images' && (
          <FetchedContent searchTerm={searchTerm} category={category} />
        )}

<<<<<<< HEAD
        {category === 'videos' && (
          <VideoContent searchTerm={searchTerm} category={category} />
=======
        {state.category === 'videos' && (
          <VideoContent
            searchTerm={state.searchTerm}
            category={state.category}
          />
>>>>>>> 89c14afe1e62338bf143e072a2dfa4b6efe8a25d
        )}
      </ErrorBoundary>
    </Container>
  )
}

export default App
