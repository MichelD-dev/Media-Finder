import SearchBar from './components/SearchBar'
import { Container } from 'semantic-ui-react'
import FetchedContent from './components/Content'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import FetchedVideoContent from './components/VideoContent'
import ErrorDisplay from './components/ErrorDisplay.js'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  const onSubmit = (term, category) => {
    setSearchTerm(term)
    setCategory(category)
  }

  return (
    <Container style={{ marginTop: '1rem' }}>
      <ErrorBoundary key={category} FallbackComponent={ErrorDisplay}>
        <SearchBar onSubmit={onSubmit}></SearchBar>
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
