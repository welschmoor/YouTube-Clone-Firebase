

import VideoCard from "../components/VideoCard"
import { useCollection } from "../hooks/useCollection"
import { MainWrapper } from "./Home"


const Watch = () => {
  const { documents, error } = useCollection('videos')


  return (
    <MainWrapper>
      {documents && documents.map(e => {
        return (
          <VideoCard e={e} key={e.id} />

        )
      })}



    </MainWrapper>
  )
}



export default Watch