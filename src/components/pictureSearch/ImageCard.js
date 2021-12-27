import { useLayoutEffect, useRef, useState } from 'react'
import { Image } from 'semantic-ui-react'

const ImageCard = ({ image }) => {
  const [{ spans }, setState] = useState({ spans: 0 })
  const imageRef = useRef()

  useLayoutEffect(() => {
    const setSpans = () => {
      const height = imageRef.current.clientHeight
      const spans = Math.ceil(height / 10)
      setState({ spans })
    }
    imageRef.current.addEventListener('load', setSpans)
    return () => window.addEventListener('load', setSpans)
  }, [])

  return (
    <Image style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} alt={image.description} src={image.urls.regular} />
    </Image>
  )
}

export default ImageCard
