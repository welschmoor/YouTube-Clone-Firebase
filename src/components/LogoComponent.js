import styled from "styled-components"
import { Logo } from "../STYLES/styleText"
// import { YouTubeIcon } from "../STYLES/styleIcons"
import { ImPlay } from "react-icons/im"
import { Link as NeedStylingNavLink } from "react-router-dom"



const LogoComponent = () => {
  return (

    <Link to="/">
      <LogoFiller />
      <YouTubeIcon>

      </YouTubeIcon><Logo>YouTube</Logo>
    </Link>

  )
}


const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  position: relative;
`

const YouTubeIcon = styled(ImPlay)`
  color: red;
  font-size: 1.4rem;
  position: relative;

`

const LogoFiller = styled.div`
  position: absolute;
  background-color: white;
  padding: 6px;
  top: 7px;
  left: 10px;
`

const Link = styled(NeedStylingNavLink)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 3px;
  position: relative;
`


export default LogoComponent

