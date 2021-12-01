import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import { withFetch } from './withFetch'

const VideoContent = ({category, data, onVideoSelect}) => {
    if (category !== 'videos') return null
  return (
    <div className='ui container'>
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
        {  data.selectedVideo && <VideoDetail video={data.selectedVideo} />}
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={(data.selectedVideo, data.videos)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const FetchedVideoContent = withFetch(VideoContent)

export default FetchedVideoContent
