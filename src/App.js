import SearchBar from './components/SearchBar'
import { Container } from 'semantic-ui-react'
import FetchedContent from './components/Content'
import { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import FetchedVideoContent from './components/VideoContent'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('')

  const onSubmit = (term, category) => {
    setSearchTerm(term)
    setCategory(category)
  }

  const ErrorDisplay = ({error}) => <p style={{color: 'red'}}>{error}</p>//FIXME

  return (
    <Container style={{ marginTop: '1rem' }}>
      <ErrorBoundary FallbackComponent={ErrorDisplay}>
        <SearchBar onSubmit={onSubmit} />
        {/* <FetchedContent searchTerm={searchTerm} category={category} /> */}
        <FetchedVideoContent searchTerm={searchTerm} category={category} />
      </ErrorBoundary>
    </Container>
  )
}

export default App
