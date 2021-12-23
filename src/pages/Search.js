


import { useParams } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useCollection } from "../hooks/useCollection"

// styles
import styled from "styled-components"
import { MainWrapper } from "../STYLES/styleWrappers"
import SearchList from "../components/SearchList"



const Search = () => {
  const { user } = useAuthContext()
  const { documents: users } = useCollection('users')
  const { documents: videos } = useCollection('videos')

  const { query } = useParams()


  return (
    <MainWrapper>
      {users && videos && <SearchList users={users} videos={videos} user={user} />}
    </MainWrapper>
  )
}


export default Search