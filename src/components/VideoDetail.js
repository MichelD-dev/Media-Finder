import React from 'react'
import { Segment } from 'semantic-ui-react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className='ui embed'>
        <iframe title='video player' src={videoSrc} />
      </div>
      <Segment>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </Segment>
    </div>
  )
}

export default VideoDetail
