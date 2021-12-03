import SearchBar from 'Components/SearchBar/SearchBar'
import { Container } from 'semantic-ui-react'
import FetchedContent from 'Components/PictureSearch/Content'
import { useReducer } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import FetchedVideoContent from 'Components/VideoSearch/VideoContent'
import ErrorDisplay from 'Components/ErrorDisplay/ErrorDisplay.js'
import { v4 as uuidv4 } from 'uuid'

const reducer = (state, action) => ({ ...state, ...action })

function App() {
  const [state, dispatch] = useReducer(reducer, {
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
        resetKeys={[state.searchTerm]}
      >
        {state.category === 'images' && (
          <FetchedContent
            searchTerm={state.searchTerm}
            category={state.category}
          />
        )}

        {state.category === 'videos' && (
          <FetchedVideoContent
            searchTerm={state.searchTerm}
            category={state.category}
          />
        )}
      </ErrorBoundary>
    </Container>
  )
}

export default App
