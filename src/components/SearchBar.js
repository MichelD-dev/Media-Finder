import { useEffect, useRef, useState } from 'react'
import { Button, Form, Input, Segment } from 'semantic-ui-react'

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const searchRef = useRef()

  useEffect(() => searchRef.current.focus(), [])

  const handleSubmit = (e, category) => {
    e.preventDefault()
    if (!search) {
      searchRef.current.focus() //FIXME
      setError('Veuillez remplir le champ de recherche')
    }
    onSubmit(search, category)
  }
  if (error) throw error

  return (
    <Segment>
      <Form>
        <Form.Field>
          <label>
            Votre recherche:
            <Input
              ref={searchRef}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </label>
        </Form.Field>
        <Form.Field>
          <Button.Group>
            <Button type='submit' onClick={e => handleSubmit(e, 'images')}>
              Images
            </Button>
            <Button.Or text='ou' />
            <Button
              type='submit'
              onClick={e => handleSubmit(e, 'videos')}
              positive
            >
              Vidéos
            </Button>
          </Button.Group>
        </Form.Field>
      </Form>
    </Segment>
  )
}

export default SearchBar
