import VideoItem from './VideoItem'
import { v4 } from 'uuid'

const VideoList = ({ videos = [], onVideoSelect }) => {
  const renderedList = videos.map((video, i) => {
    return <VideoItem key={v4()} onVideoSelect={onVideoSelect} video={video} />
  })
  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList
