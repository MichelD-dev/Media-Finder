import ErrorDisplay from 'Components/Displays/ErrorDisplay'
import useFetchVideos from 'Hooks/useFetchVideos'
import { Loader } from 'semantic-ui-react'
import VideoGrid from './VideoGrid'

const styles = {
  dimmer: {
    marginTop: '150px',
    height: '75%',
  },
  h3: { color: '#999' },
  loader: { marginTop: '30%' },
}

const VideoContent = ({ searchTerm }) => {
  const { data, selectedVideo, onVideoSelect, status } =
    useFetchVideos(searchTerm)

  if (status === 'fetching') {
    return (
      <Loader active inline='centered' size='large' style={styles.loader}>
        Chargement...
      </Loader>
    )
  }

  if (status === 'fail') {
    return <ErrorDisplay />
  }

  if (data)
    return (
      <VideoGrid
        selectedVideo={selectedVideo}
        onVideoSelect={onVideoSelect}
        data={data}
      />
    )
}

export default VideoContent
