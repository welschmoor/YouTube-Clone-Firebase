
import React from "react"
import styled from "styled-components"

import { Hamburger, LogoWrapper, Logo } from "./Header"
import { IconFavorites, IconHome } from "./Sidebar"




const MobileSidebar = ({ sideBarOpen, hamburgerClick }) => {


  //{ sideBarOpen ? <ModalPlane /> : null }
  return (
    < >
      {sideBarOpen ? <SidebarPlane onClick={hamburgerClick} /> : null}
      <MobileWrapper style={{ "left": sideBarOpen ? "0" : "-100%" }}>
        <LogoWrapper>
          <Hamburger onClick={hamburgerClick} />
          <Logo>YouTube</Logo>
        </LogoWrapper>

        <NAV>
          <UL>
            <LI> <IconHome /> <IconTitle>Home</IconTitle> </LI>
            <LI> <IconFavorites /> <IconTitle>Favorites</IconTitle> </LI>

          </UL>
        </NAV>
      </MobileWrapper>
    </>
  )
}


const MobileWrapper = styled.aside`
  padding-top: 17px;
  z-index: 6;
  position: fixed;
  background-color: ${p => p.theme.navCol};
  width: 240px;
  top: 0;
  left: 0;
  transition: 0.3s;
  min-height: 1440px;
  height: 100vh;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.336);
  
`


const NAV = styled.nav`
  margin-top: 80px;

`

const UL = styled.ul`
  display: flex;
  flex-direction: column;


  list-style: none;
`

const LI = styled.li`
  padding: 10px 0px;
  padding-left: ${p => p.theme.leftSideMargin};
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  
  :hover {
    background-color: ${p => p.theme.light2};
  }
`

const IconTitle = styled.h3`
  font-size: 1rem;
`

const SidebarPlane = styled.div`
   position: fixed;
   background-color: rgba(0, 0, 0, 0.5);
   left: 50%;
   top: 50%;
   width: 100%;
   height: 100%;
   transform: translate(-50%, -50%);
   z-index: 1;
`

export default MobileSidebar