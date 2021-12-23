
// Rating,
// thumbs down up button
// number of views
// length
// title, upload data
// thumbnail,
// comments 

import { useRef } from "react"
import styled from "styled-components"


const VideoCard = ({ e, viewsClickHandler }) => {

  const preventDblClickRef = useRef(false)

  /// to Video add preload="none" attribute so no data is wasted on preload
  return (
    <div>

      <Video controls onClick={viewsClickHandler} preload="none" >
        <source src={e.videoURL} type="video/mp4" onClick={viewsClickHandler} />
        {/* <source src="mov_bbb.ogg" type="video/ogg" /> */}
        Your browser does not support HTML video.
      </Video>

    </div>
  )
}


const Video = styled.video`
  z-index: -1;
  min-width: 400px;
  width: 100%;
  display: block;

`


export default VideoCard