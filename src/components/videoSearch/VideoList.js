import VideoItem from './VideoItem'

const VideoList = ({ videos=[], onVideoSelect }) => {
  const renderedList = videos.map((video, i) => {
    return (
      <VideoItem
        key={`${video.id.kind}_${i}`}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    )
  })
  return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList
