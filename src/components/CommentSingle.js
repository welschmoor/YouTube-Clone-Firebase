

import { ProfileGroup, AvatarIMG, ProfileName, Description } from "../pages/Watch"
import styled from "styled-components"
import formatDistanceToNow from "date-fns//formatDistanceToNow"


const CommentSingle = ({ e }) => {

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