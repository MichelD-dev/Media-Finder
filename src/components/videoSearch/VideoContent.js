import useFetch from 'HOOK/useFetch'
import { Container, Grid } from 'semantic-ui-react'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const VideoContent = ({ searchTerm, category }) => {
  const { videoData, onVideoSelect } = useFetch({ searchTerm, category })

  if (category !== 'videos') return null
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            {videoData.selectedVideo && (
              <VideoDetail video={videoData.selectedVideo} />
            )}
          </Grid.Column>
          <Grid.Column>
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={(videoData.selectedVideo, videoData.videos)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default VideoContent
