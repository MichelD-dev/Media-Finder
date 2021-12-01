import { Grid, Segment } from 'semantic-ui-react'
import ImageCard from './ImageCard'
import { withFetch } from './withFetch'
import './Content.css'

const Content = ({ data }) => {
  const ImgList = data.map(image => {
    return <ImageCard key={image.id} image={image} />
  })

  return <div className='image-list'>{ImgList}</div>

  // <Grid
  //   stackable
  //   centered
  //   columns={4}
  //   style={{
  //     margin: '5rem 0',
  //   }}
  // >
  //   {data.map(item => (
  //     <Grid.Column key={item.id}>
  //       <ImageCard image={item} />
  //     </Grid.Column>
  //   ))}
  // </Grid>
}

const FetchedContent = withFetch(Content)

export default FetchedContent
