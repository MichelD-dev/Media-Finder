import { useEffect, useRef, useState } from 'react'
import { Button, Form, Input, Segment } from 'semantic-ui-react'

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('')
  const searchRef = useRef()

  useEffect(() => searchRef.current.focus(), [])

  const handleSubmit = (e, category) => {
    e.preventDefault()
    onSubmit(search, category)
  }

  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>
            Search terms:
            <Input
              ref={searchRef}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <Button.Group>
            <Button type='button' onClick={e => handleSubmit(e, 'images')}>
              Images
            </Button>
            <Button.Or text='' />
            <Button type='button' onClick={''} positive>
              Vidéos
            </Button>
          </Button.Group>
        </Form.Field>
      </Form>
    </Segment>
  )
}

export default SearchBar
