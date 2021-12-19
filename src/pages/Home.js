

import React from "react"
import styled from "styled-components"
import { useCollection } from "../hooks/useCollection"
import VideoThumbnailCard from "../components/VideoThumbnailCard"

const Home = () => {
  const { documents, error } = useCollection('videos')


  return (
    <MainWrapper>
      {documents && documents.map(e => {
        return (
          <VideoThumbnailCard e={e} key={e.id} />

        )
      })}

 

    </MainWrapper>
  )
}

export const MainWrapper = styled.div`
  padding: 80px 20px 20px 100px;
  background-color: rgb(30, 30, 36);
`


export default Home