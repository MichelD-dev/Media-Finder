import ImageCard from './ImageCard'
import { withFetch } from './withFetch'
import './Content.css'

const Content = ({ category, data }) => {
  if (category !== 'images') return null
  const ImgList = data.map(image => {
    return <ImageCard key={image.id} image={image} />
  })

  return <div className='image-list'>{ImgList}</div>
}

const FetchedContent = withFetch(Content)

export default FetchedContent
