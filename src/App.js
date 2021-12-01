import SearchBar from './components/SearchBar'
import { Container } from 'semantic-ui-react'
import FetchedContent from './components/Content'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

  const onSubmit = term => {
    setSearchTerm(term)
  }

const ErrorDisplay = error => <p>{error}</p>

  return (
    <Container style={{ marginTop: '1rem' }}>
      <SearchBar onSubmit={onSubmit} />
      <ErrorBoundary FallbackComponent={ErrorDisplay}>
      <FetchedContent searchTerm={searchTerm} />
      </ErrorBoundary>
    </Container>
  )
}

export default App
