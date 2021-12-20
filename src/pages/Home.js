

import React from "react"
import styled from "styled-components"
import { useCollection } from "../hooks/useCollection"
import VideoThumbnailCard from "../components/VideoThumbnailCard"

const Home = () => {
  const { documents, error } = useCollection('videos')


  return (
    <MainWrapper>
      <HomeGrid >
        {documents && documents.map(e => {
          return (
            <VideoThumbnailCard e={e} key={e.id} />
          )
        })}
      </HomeGrid>
    </MainWrapper>
  )
}

export const MainWrapper = styled.div`
  padding: 80px 20px 20px 100px;
  background-color: ${p=>p.theme.homeBg};

  @media (max-width: 700px ) {
    padding: 80px 20px 20px 20px;
  }

`

const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 60px;

  @media (max-width: 1158px ) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px ) {
    grid-template-columns: 1fr;
  }
`


export default Home