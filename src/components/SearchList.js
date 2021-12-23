import { useEffect, useState, useRef } from "react"
import { useParams } from "react-router"

//styles
import styled from "styled-components"
import { Paragraph as P } from "../STYLES/styleText"
import { IoHeart } from "react-icons/io5"

import VideoThumbnailCardFavorites from "../components/VideoThumbnailCardFavorites"


const SearchList = ({ videos, users, user }) => {
  const [filteredVids, setFilteredVids] = useState([])
  const { query } = useParams()


  useEffect(() => {
    setFilteredVids(videos.filter(e => {
      const videoTitleTrimmed =  e.videoTitle.toLowerCase().trim()
      return videoTitleTrimmed.includes(query)
    }))
  }, [query])


  return (
    <FavGrid>
      {filteredVids.length > 0 && filteredVids.map(e => <VideoThumbnailCardFavorites e={e} key={e.id} />)}
      {filteredVids.length < 1 && <P>No search results for: {query} </P>}
    </FavGrid>
  )
}


const FavGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 40px;
`

export default SearchList