import { useEffect, useRef, useState } from 'react'
import { Image } from 'semantic-ui-react'

const ImageCard = ({ image }) => {
  const [state, setState] = useState({ spans: 0 })
  const imageRef = useRef()

  useEffect(() => {
    imageRef.current.addEventListener('load', setSpans)
  }, [])

  const setSpans = () => {
    const height = imageRef.current.clientHeight
    const spans = Math.ceil(height / 10)
    setState({ spans })
  }

  return (
    <Image style={{ gridRowEnd: `span ${state.spans}` }}>
      <img ref={imageRef} alt={image.description} src={image.urls.regular} />
    </Image>
  )
}

export default ImageCard
