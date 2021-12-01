import { useState } from 'react'
import { Form, Input, Segment } from 'semantic-ui-react'

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(search)
  }

  return (
    <Segment >
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>
            Search terms:
            <Input value={search} onChange={e => setSearch(e.target.value)} />
          </label>
        </Form.Field>
      </Form>
    </Segment>
  )
}

export default SearchBar
