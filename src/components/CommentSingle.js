

import { ProfileGroup, AvatarIMG, ProfileName, Description } from "../pages/Watch"
import styled from "styled-components"


const CommentSingle = ({ e }) => {
  console.log("e", e)
  return (
    <>
      <ProfileGroup>
        <AvatarIMG src={e.photoURL} />
        <ProfileName>{e.displayName}</ProfileName>
        <Description>{e.comment}</Description>
      </ProfileGroup>
    </>
  )
}


export default CommentSingle