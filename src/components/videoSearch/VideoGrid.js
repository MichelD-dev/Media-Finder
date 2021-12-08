import { Container, Grid } from 'semantic-ui-react'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const VideoGrid = ({ selectedVideo, onVideoSelect, data }) => {
  return (
    <Container>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column computer={11} tablet={9}>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </Grid.Column>
          <Grid.Column>
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={(selectedVideo, data)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default VideoGrid
