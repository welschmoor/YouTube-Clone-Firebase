
import styled from "styled-components"
import { IoLogOut } from "react-icons/io5"

const Profile = ({ logout, src, username }) => {
  return (
    <ProfileMainDiv>
      <ProfilePicAndName>

        <IMG src={src} alt="avatar" />
     

        <Name>Logged in as {username}</Name>
      </ProfilePicAndName>
      <LogOutBtn onClick={logout} ><LogOutIcon /> <LogOutTitle>Log Out</LogOutTitle></LogOutBtn>
      <Separator> </Separator>
    </ProfileMainDiv>
  )
}

const ProfileMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  
`

const ProfilePicAndName = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 10px 0px; 
  margin-top: 30px;
`

const IMG = styled.img`
  position: absolute;
  top: 60px;
  left: 203px;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  box-shadow: 0px 0px 0px 8px ${p => p.theme.navCol};
  
`


const Name = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  padding-left: ${p => p.theme.leftSideMargin};
  color: ${p => p.theme.bgCol};
  font-style: italic;
  margin-right: 46px;
`

const LogOutIcon = styled(IoLogOut)`
  font-size: 1.5rem;
`

const LogOutBtn = styled.button`
  padding-left: ${p => p.theme.leftSideMargin};
  border: none;
  background: none;
  cursor: pointer;
  color: ${p => p.theme.textCol};
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  
  &:hover {
    background-color: ${p => p.theme.light2};
  }
`

const LogOutTitle = styled.h3`
  font-size: 1rem;
`

const Separator = styled.div`
  padding: 1px 20px;
  background-color: ${p => p.theme.light2};
`

export default Profile