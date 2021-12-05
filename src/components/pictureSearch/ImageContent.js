import ImageCard from './ImageCard'
import useFetch from 'HOOK/useFetch'
import './ImageContent.css'
import { Dimmer, Segment } from 'semantic-ui-react'
import { useReducer } from 'react'

const ImageContent = ({ category, searchTerm }) => {
  const { data } = useFetch({ searchTerm, category })
  const [active, toggleActive] = useReducer(val => !val, true)

  const reset = () => {
    toggleActive()
  }

  if (category !== 'images') return null

  const ImgList = data.map(image => {
    return <ImageCard key={image.id} image={image} />
  })

  if (!searchTerm)
    return (
      <Dimmer.Dimmable blurring dimmed={active}>
        <Dimmer
          inverted
          page
          active={active}
          onClickOutside={reset}
          style={{ marginTop: '150px', height: '75%' }}
        >
          <Segment basic>
            <h3 style={{ color: '#999' }}>Pas d'images</h3>
          </Segment>
        </Dimmer>
      </Dimmer.Dimmable>
    )

  return <div className='image-list'>{ImgList}</div>
}

export default ImageContent