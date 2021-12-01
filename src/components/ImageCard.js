import { Card } from 'semantic-ui-react'

const ImageCard = ({image}) => {
  return <Card image={image.urls.regular} />
}

export default ImageCard
