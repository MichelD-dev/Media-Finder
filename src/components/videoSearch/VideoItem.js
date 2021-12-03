import { Image, Segment } from 'semantic-ui-react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      key={video.videoId}
      onClick={() => onVideoSelect(video)}
      className='video-item item'
    >
      <Image
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title.slice(0, 30)}</div>
      </div>
    </div>
  )
}

export default VideoItem
