
// This is how to implement a favorites list
// most of the time was spent finding a bug, which turned out to be { state, useState } instead of [ state, ...] lol

import { useEffect, useState, useRef } from "react"

//styles
import styled from "styled-components"
import { Paragraph as P } from "../STYLES/styleText"
import { IoHeart } from "react-icons/io5"

import VideoThumbnailCardFavorites from "../components/VideoThumbnailCardFavorites"

// users is the collection of all users, user is Auth
const FavoritesList = ({ videos, users, user }) => {
  const [favorites, setFavorites] = useState([]) // videos filtered (array of only IDs)

  const [filteredVids, setFilteredVids] = useState([])

  useEffect(() => {
    const favs = users.find(e => e.id === user.uid).favorites
    setFavorites(favs)
    setFilteredVids(videos.filter(e => favs.includes(e.id)))
  }, [users, favorites])


  return (
    <FavGrid>
      {filteredVids.length > 0 && filteredVids.map(e => <VideoThumbnailCardFavorites e={e} key={e.id} />)}
      {filteredVids.length < 1 && <P>You have no favorites! Click on the heart <HeartIcon /> symbol under the video to save it!</P>}
    </FavGrid>
  )
}


const FavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 40px;
`

const HeartIcon = styled(IoHeart)`
  transform: translateY(3px);
`

export default FavoritesList