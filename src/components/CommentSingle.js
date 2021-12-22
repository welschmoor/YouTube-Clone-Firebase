

import { ProfileGroup, AvatarIMG as AIMG, ProfileName, Description } from "../STYLES/styleProfile"
import styled from "styled-components"
import formatDistanceToNow from "date-fns//formatDistanceToNow"


const CommentSingle = ({ e }) => {

  return (
    <>
      <ProfileGroup>
        <AvatarIMG src={e.photoURL} />
        <NameAndTime>
          <ProfileName>{e.displayName}</ProfileName>
        </NameAndTime>
        <Description style={{ fontSize: "0.9rem" }}>{e.comment}</Description>
        <Time>{formatDistanceToNow(e.createAt.toDate(), { addSuffix: true })}</Time>
      </ProfileGroup>
    </>
  )
}


const AvatarIMG = styled(AIMG)`
  height: 60px;
  width: 60px;
`

const NameAndTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`

const Time = styled.p`
  font-size: 0.8rem !important;
  color:  ${p => p.theme.commentTimeCol};
  width: 110px;

`


export default CommentSingle