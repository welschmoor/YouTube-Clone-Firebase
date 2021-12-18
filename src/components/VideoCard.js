
// Rating,
// thumbs down up button
// number of views
// length
// title, upload data
// thumbnail,
// comments 

import styled from "styled-components"


const VideoCard = ({ e }) => {
  return (
    <div>

      <Video controls>
        <source src={e.videoURL} type="video/mp4" />
        {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
        Your browser does not support HTML video.
      </Video>
      {e.videoTitle}
    </div>
  )
}

const Video = styled.video`
  width: 300px;
  display: block;
`


export default VideoCard