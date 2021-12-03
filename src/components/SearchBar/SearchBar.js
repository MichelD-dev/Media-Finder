import { useRef, useState, useEffect } from 'react'
import { Button, Form, Input, Message, Segment } from 'semantic-ui-react'

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('')
  const [inputError, setInputError] = useState('')
  const searchRef = useRef()

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  const handleSubmit = (e, category) => {
    e.preventDefault()
    if (search === '') {
      searchRef.current.focus()
      return setInputError('Veuillez remplir le champ de recherche')
    }
    setInputError('')
    onSubmit(search, category)
  }

  return (
    <Segment>
      <Form error>
        <Form.Field>
          <label>
            Votre recherche:
            <Input
              ref={searchRef}
              value={search}
              onChange={e => {
                setSearch(e.target.value)
                setInputError('')
              }}
            />
            {inputError && (
              <Message
                error
                content='Veuillez remplir le champ de recherche.'
              />
            )}
          </label>
        </Form.Field>
        <Form.Field>
          <Button.Group>
            <Button type='submit' onClick={e => handleSubmit(e, 'images')}>
              Images
            </Button>
            <Button.Or text='ou' />
            <Button
              type='button'
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
