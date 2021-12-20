

import { ProfileGroup, AvatarIMG, ProfileName, Description } from "../pages/Watch"
import styled from "styled-components"


const CommentSingle = ({ e }) => {
  console.log("e", e)
  return (
    <>
      <ProfileGroup>
        <AvatarIMG src={e.photoURL} />
        <ProfileName>{e.displayName}</ProfileName>
        <Description style={{ fontSize: "0.9rem" }}>{e.comment}</Description>
      </ProfileGroup>
    </>
  )
}



export default CommentSingle