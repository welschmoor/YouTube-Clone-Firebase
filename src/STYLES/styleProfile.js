
import styled from "styled-components"



///////////////////////////////////////
//    Profile and description
export const ProfileGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const AvatarIMG = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;

`

export const ProfileName = styled.h6`
  font-size: 1rem;
  
`

export const Description = styled.p`
  font-size: 0.8rem;
  color: ${p => p.theme.fourthCol};
  border-left: 1px solid ${p => p.theme.thirdCol};
  padding: 20px;
  padding-right: 0px;
  margin-left: 3px;
`