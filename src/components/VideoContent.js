import { Container, Grid } from 'semantic-ui-react'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import { withFetch } from './withFetch'

const VideoContent = ({ category, data, onVideoSelect }) => {
  if (category !== 'videos') return null
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            {data.selectedVideo && <VideoDetail video={data.selectedVideo} />}
          </Grid.Column>
          <Grid.Column>
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={(data.selectedVideo, data.videos)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

const FetchedVideoContent = withFetch(VideoContent)

export default FetchedVideoContent
