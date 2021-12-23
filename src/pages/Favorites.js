import { useState, useEffect, useRef } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useCollection } from "../hooks/useCollection"

// styles
import styled from "styled-components"
import { SignUpInWrapper, MainWrapper } from "../STYLES/styleWrappers"
import { Paragraph as P, Title } from "../STYLES/styleText"
import { LinkStyled, SignInHighlightSpan } from "../STYLES/styleText"

import FavoritesList from "../components/FavoritesList"


const Favorites = () => {
  const { user } = useAuthContext()
  const { documents: users } = useCollection('users')
  const { documents: videos } = useCollection('videos')


  return (
    <MainWrapper>
      {!user && <Title style={{ fontSize: "1.2rem" }}>Favorites Page</Title>}
      {user && <Title style={{ fontSize: "1.2rem" }}>Your Favorites</Title>}
      
      {user && (
        users && videos && <FavoritesList users={users} videos={videos} user={user} />
      )}

      {!user && (
        <P><LinkStyled to="/login">You need to be <SignInHighlightSpan>logged in</SignInHighlightSpan> to see your favorites!</LinkStyled></P>
      )}
    </MainWrapper>
  )
}


export default Favorites