
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
import { useAuthContext } from "../hooks/useAuthContext"
import { useCollection } from "../hooks/useCollection"
import { Link as LinkNeedsStyle, useParams } from "react-router-dom"
import formatDistanceToNow from "date-fns//formatDistanceToNow"
import { firestore } from "../firebase"

// styles
import styled from "styled-components"
import { IoCheckmarkCircleSharp } from "react-icons/io5"




const VideoThumbnailCardFavorites = ({ e }) => {
  const { user } = useAuthContext()
  const { documents } = useCollection('users')
  const [picURL, setPicURL] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [count, setCount] = useState(0)

  let channelPic = null

  useEffect(() => {
    if (documents) {
      channelPic = documents.find(each => each.uid === e.createdBy.id)

      if (channelPic) {
        setPicURL(channelPic.photoURL)
        setDisplayName(channelPic.displayName)
        // number of views
      }
    }
  }, [documents, channelPic])


  return (
    <VTCwrapper>

      <Thumbnail controls>
        <Link to={`/watch/${e.id}`} ><IMG src={e.thumbnailURL} type="video/mp4" /></Link>
      </Thumbnail>

      <ChannelGrid>
        <TitleAndChannelName>
          <Link to={`/watch/${e.id}`} ><VideoTitle>{e.videoTitle}</VideoTitle></Link>
          <ChannelNameAndViews>
            {displayName && <ChannelName>{e.views.toLocaleString()} Views &nbsp;<strong>::</strong>&nbsp; {e.createdAt && formatDistanceToNow(e.createdAt.toDate(), { addSuffix: true })}</ChannelName>}
            <PicAndName>
              {picURL && <AvatarDiv><IMGavatar src={picURL} alt="avatar" /></AvatarDiv>}
              {displayName && <ChannelName>{displayName} <IoCheckmarkCircleSharp /></ChannelName>}
            </PicAndName>
            {displayName && <ChannelName>{e.videoDescription}</ChannelName>}
          </ChannelNameAndViews>
        </TitleAndChannelName>
      </ChannelGrid>

    </VTCwrapper>
  )
}


const PicAndName = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`

const VTCwrapper = styled.div`
  display: flex;
  gap: 20px;
`

const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns:1fr;
  column-gap: 4px;
`

const TitleAndChannelName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const ChannelNameAndViews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

`

const Thumbnail = styled.div`
  min-width: 340px;
  max-width: 340px;
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
  width: 50px;
  height: 50px;

`

const ChannelName = styled.h6`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${p => p.theme.fourthCol};
  display: flex;
  gap: 4px;
`

const Link = styled(LinkNeedsStyle)`
  text-decoration: none;
  color: ${p => p.theme.textCol};
`

export default VideoThumbnailCardFavorites