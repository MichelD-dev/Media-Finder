import SearchBar from './components/SearchBar/SearchBar'
import { Container } from 'semantic-ui-react'
import FetchedContent from './components/pictureSearch/Content'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import FetchedVideoContent from './components/videoSearch/VideoContent'
import ErrorDisplay from './components/errorDisplay/ErrorDisplay.js'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  const onSubmit = (term, category) => {
    setSearchTerm(term)
    setCategory(category)
  }

  const reset = () => {
    setSearchTerm()
    setCategory()
  }

  const test = Math.random()
  return (
    <Container style={{ marginTop: '1rem' }}>
      <SearchBar onSubmit={onSubmit}></SearchBar>
      <ErrorBoundary
        key={`category_${test}`}
        FallbackComponent={ErrorDisplay}
        onReset={reset}
        resetKeys={[searchTerm]}
      >
        {category === 'images' && (
          <FetchedContent searchTerm={searchTerm} category={category} />
        )}

        {category === 'videos' && (
          <FetchedVideoContent searchTerm={searchTerm} category={category} />
        )}
      </ErrorBoundary>
    </Container>
  )
}

export default App
