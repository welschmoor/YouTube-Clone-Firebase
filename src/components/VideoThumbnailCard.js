
// Rating,
// thumbs down up button
// number of views
// length
// title, upload data
// thumbnail,
// comments 






// TODO !!!!!!!!!!!!!!

/// rewrite useFirestore hook to accomodate delete, update etc
/// to do: add view counter
/// add time posted, add checkmark of approved channel, 
/// make grey text lighter 
import { useEffect, useState } from "react"
import styled from "styled-components"
import { useAuthContext } from "../hooks/useAuthContext"
import { useCollection } from "../hooks/useCollection"
import { Link as LinkNeedsStyle, useParams } from "react-router-dom"



const VideoThumbnailCard = ({ e }) => {
  const { user } = useAuthContext()
  const { documents } = useCollection('users')
  const [picURL, setPicURL] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [count, setCount] = useState(0)

  console.log("documents", documents)
  let channelPic = null

  useEffect(() => {
    if (documents) {
      channelPic = documents.find(each => each.uid === e.id)
      console.log("channelPic", channelPic)
      setPicURL(channelPic.photoURL)
      setDisplayName(channelPic.displayName)
    }

  }, [documents, channelPic])

  return (
    <VTCwrapper>

      <Thumbnail controls>
        <Link to={`/watch/${e.id}`} ><IMG src={e.thumbnailURL} type="video/mp4" /></Link>
      </Thumbnail>

      <ChannelGrid>
        {picURL && <AvatarDiv><IMGavatar src={picURL} alt="avatar" /></AvatarDiv>}
        <TitleAndChannelName>
          <Link to={`/watch/${e.id}`} ><VideoTitle>{e.videoTitle}</VideoTitle></Link>
          <ChannelNameAndViews>
            {displayName && <ChannelName>{displayName}</ChannelName>}
            {displayName && <ChannelName>1.450.000 Views &nbsp;<strong>::</strong>&nbsp; 2 months ago</ChannelName>}
          </ChannelNameAndViews>
        </TitleAndChannelName>
      </ChannelGrid>

    </VTCwrapper>
  )
}

const VTCwrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  column-gap: 4px;
`

const TitleAndChannelName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const ChannelNameAndViews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

`

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

const IMGavatar = styled.img`
  width: 100%;
  border-radius: 50%;
`

const AvatarDiv = styled.div`
  width: 60px;
  height: 60px;

`

const ChannelName = styled.h6`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${p => p.theme.fourthCol};
`

const Link = styled(LinkNeedsStyle)`
  text-decoration: none;
  color: ${p => p.theme.textCol};
`
export default VideoThumbnailCard