
/*
  Watch is the page for each individual video
*/

/// !!! this is an example of how to make a counter update on mount
/// took me a lot of time to figure it out, you need both a ref and an extra useState


import { firestore } from "../firebase"
import { useState, useEffect, useRef } from "react"
import { useCollection } from "../hooks/useCollection"
import { useAuthContext } from "../hooks/useAuthContext"

// styles
import styled from "styled-components"
import { MainWrapper } from "./Home"
import { useParams } from "react-router-dom"
import { IoMdThumbsUp, IoMdThumbsDown } from "react-icons/io"
import { IoHeart } from "react-icons/io5"
import { ProfileGroup, AvatarIMG, ProfileName, Description } from "../STYLES/styleProfile"

import Comments from "../components/Comments"
import VideoCard from "../components/VideoCard"


const Watch = () => {
  const { user } = useAuthContext()
  const { documents, error } = useCollection('videos')
  const { documents: users } = useCollection('users')
  const [videoInQ, setVideoInQ] = useState(null)
  const [previousFavorites, setPreviousFavorites] = useState(null)
  const [favClicked, setFavClicked] = useState(false)

  const [views, setViews] = useState(videoInQ?.views)
  const { id } = useParams()

  const preventDblClickRef = useRef(false)  // update likes
  const preventDblClickRef2 = useRef(false) // update views
  const preventDblClickRef3 = useRef(false) // update favorites


  /// relevant code for updating views?
  useEffect(() => {
    const updateViewsFirestore = async () => {
      await firestore.collection('videos').doc(id).update({ views: Number(Number(videoInQ.views) + 1) })
    }

    if (documents) {
      setVideoInQ(documents.find(e => id === e.id))
    }

    if (videoInQ) {
      if (preventDblClickRef2.current) return
      updateViewsFirestore()
      setViews(videoInQ.views + 1)
      preventDblClickRef2.current = true
    }
  }, [documents, views, videoInQ?.views])


  // update num of likes on click
  const thumbsUpClickHandler = () => {
    if (preventDblClickRef.current) return

    firestore.collection('videos').doc(id).update({ likes: Number(Number(videoInQ.likes) + 1) })
    preventDblClickRef.current = true
  }


  // catch favorites that the user already has
  useEffect(() => {
    if (!user) return

    setPreviousFavorites(users?.find(e => e.uid === user.uid).favorites)
  }, [users, id, user])

  // if id of a video is in favorite list, then set icon to "clicked"
  useEffect(() => {
    if (previousFavorites) {
      if (previousFavorites.includes(id)) {
        setFavClicked(true)
      }
    }
  }, [previousFavorites])


  // const previousFavoritesConst = users?.find(e => e.uid === user.uid).favorites // old code
  const favoritesHandler = async () => {
    if (!user) return
    
    setFavClicked(p => !p)
    if (!favClicked && !previousFavorites.includes(id)) {
      await firestore.collection('users').doc(user.uid).update({ favorites: [id, ...previousFavorites] })
    }
    else {  // else remove the video from favorites on click
      const filterToRemoveThisVideo = previousFavorites.filter(e => e !== id)
      await firestore.collection('users').doc(user.uid).update({ favorites: [...filterToRemoveThisVideo] })
    }
  }

  return (
    <MainWrapper>
      <WatchWrapperGrid>
        <LeftCol>
          {videoInQ && <VideoCard e={videoInQ} />}
          {videoInQ && <VideoTitle>{videoInQ.videoTitle}</VideoTitle>}
          <ViewsAndThumbs>

            {videoInQ && <VideoViews>{videoInQ.views} Views &nbsp;<strong>::</strong>&nbsp; {String(videoInQ.createdAt.toDate()).slice(4, 15)}</VideoViews>}
            <LikesAndFavs>

              <LikesGroup>
                {!preventDblClickRef.current && <ThumbsUpIcon onClick={thumbsUpClickHandler} />}
                {preventDblClickRef.current && <ThumbsUpIconClicked onClick={thumbsUpClickHandler} />}
                {videoInQ && <VideoViews>{videoInQ.likes} Likes &nbsp;</VideoViews>}
              </LikesGroup>

              <FavoritesGroup>
                {!favClicked && <HeartIcon onClick={favoritesHandler} />}
                {favClicked && <HeartIconClicked onClick={favoritesHandler} />}
                <VideoViews>Add to Favorites &nbsp;</VideoViews>
              </FavoritesGroup>

            </LikesAndFavs>

          </ViewsAndThumbs>
          <WatchSeparator />
          <ProfileGroup>
            {videoInQ && <AvatarIMG src={videoInQ.createdBy.photoURL} />}
            {videoInQ && <ProfileName>{videoInQ.createdBy.displayName}</ProfileName>}
            {videoInQ && <Description>{videoInQ.videoDescription}</Description>}
          </ProfileGroup>
          <WatchSeparator />

          {videoInQ && <Comments videoID={id} videoInQ={videoInQ} />}

        </LeftCol>
      </WatchWrapperGrid>
    </MainWrapper>
  )
}


const WatchSeparator = styled.div`
  width: 100%;
  padding: 0.1px 0px;
  background-color: ${p => p.theme.thirdCol};
`

const WatchWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 180px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const ViewsAndThumbs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`

const VideoTitle = styled.h6`
  font-size: 1rem;

`

const VideoViews = styled.h6`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${p => p.theme.fourthCol};
  display: flex;
  gap: 4px;
`


/////////////////////
//    LIKES

const LikesAndFavs = styled.div`
  display: flex;
  gap: 12px;
`

const LikesGroup = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

const LikesNumber = styled(VideoViews)`

`


/////////////////////
//    Favorites

const FavoritesGroup = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`

const HeartIcon = styled(IoHeart)`
  color: ${p => p.theme.thirdCol};
  cursor: pointer;
  transform: translateY(-2px);
`
const HeartIconClicked = styled(IoHeart)`
  color: ${p => p.theme.textCol};
  cursor: pointer;
  transform: translateY(-2px);
`


/////////////////////
//    ICONS

const ThumbsUpIcon = styled(IoMdThumbsUp)`
  transform: translateY(-4px);
  
  color: ${p => p.theme.thirdCol};
  cursor: pointer;
`

const ThumbsUpIconClicked = styled(IoMdThumbsUp)`
  transform: translateY(-4px);
  
  color: ${p => p.theme.textCol};
  cursor: pointer;
`

export default Watch










/////////////////////////////////
// Old Code


// const [picURL, setPicURL] = useState('')
// const [displayName, setDisplayName] = useState('')
// // this is to make sure the profile pic is the same as the uploader
// let channelPic = null
// useEffect(() => {
//   if (documents) {
//     channelPic = documents.find(each => each.uid === e.createdBy.id)
//     console.log("channelPic", channelPic)
//     if (channelPic) {
//       setPicURL(channelPic.photoURL)
//       setDisplayName(channelPic.displayName)
//     }
//   }
// }, [documents, channelPic])
