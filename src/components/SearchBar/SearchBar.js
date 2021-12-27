import { useRef, useEffect, useReducer } from 'react'
import { Button, Form, Input, Message, Segment } from 'semantic-ui-react'

const reducer = (state, action) => ({ ...state, ...action })

const SearchBar = ({ onSubmit }) => {
  const [{ search, inputError }, dispatch] = useReducer(reducer, {
    search: '',
    inputError: '',
  })
  const searchRef = useRef()

  useEffect(() => {
    searchRef.current.focus()
  }, [])

  const handleSubmit = (e, category) => {
    e.preventDefault()
    if (search === '') {
      searchRef.current.focus()
      return dispatch({ inputError: 'Veuillez remplir le champ de recherche' })
    }
    dispatch({ inputError: '' })
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
                dispatch({ search: e.target.value })
                dispatch({ inputError: '' })
              }}
            />
            {inputError && (
              <Message
                error
                content={inputError}
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
