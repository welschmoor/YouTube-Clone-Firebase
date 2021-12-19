
// Rating,
// thumbs down up button
// number of views
// length
// title, upload data
// thumbnail,
// comments 

import styled from "styled-components"
import { useAuthContext } from "../hooks/useAuthContext"
import { Link, useParams } from "react-router-dom"



const VideoThumbnailCard = ({ e }) => {
 
  
  const { user } = useAuthContext()
  const { id } = useParams()

  return (
    <div>

      <Thumbnail controls>
        <Link to={`/watch/${e.id}`} ><IMG src={e.thumbnailURL} type="video/mp4" /></Link>

      </Thumbnail>
      <VideoTitle>{e.videoTitle}</VideoTitle>
    </div>
  )
}

const Thumbnail = styled.div`
  width: 360px;
  display: block;
  cursor: pointer;
`

const VideoTitle = styled.h6`
  font-size: 1rem;
  cursor: pointer;
`

const IMG = styled.img`
  width: 100%;
`

export default VideoThumbnailCard