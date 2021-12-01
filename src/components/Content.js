import { Grid, Segment } from 'semantic-ui-react'
import ImageCard from './ImageCard'
import { withFetch } from './withFetch'

const Content = ({ data }) => {
  return (
    <Grid
      stackable
      centered
      columns={4}
      style={{
        margin: '5rem 0',
      }}
    >
      {data.map(item => (
        <Grid.Column key={item.id}>
          <ImageCard image={item} />
        </Grid.Column>
      ))}
    </Grid>

    //   const ImgList = data.map(image => {
    //     return <ImageCard key={image.id} image={image} />
    //   })
    //   // console.log(images)
    //   return <div className='image-list'>{ImgList}</div>
  )
}

const FetchedContent = withFetch(Content)

export default FetchedContent
