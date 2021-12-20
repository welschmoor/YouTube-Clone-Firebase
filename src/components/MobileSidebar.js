
import React from "react"
import styled from "styled-components"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

import { Hamburger, LogoWrapper, Logo } from "./Header"
import { IconFavorites, IconHome, CreateNewIcon } from "./Sidebar"
import { Separator } from "./Profile"


import SignupLogin from "./SignupLogin"
import Profile from "./Profile.js"

import { NavLink as NavLinkToStyle, Navigate } from "react-router-dom"



const MobileSidebar = ({ sideBarOpen, hamburgerClick }) => {
  const { logout, isPending, error } = useLogout()
  const { user, authIsReady } = useAuthContext()

  //{ sideBarOpen ? <ModalPlane /> : null }
  return (
    < >
      {sideBarOpen ? <SidebarPlane onClick={hamburgerClick} /> : null}
      <MobileWrapper style={{ "left": sideBarOpen ? "0" : "-100%" }}>
        <LogoWrapper>
          <Hamburger onClick={hamburgerClick} />
          <Logo>YouTube</Logo>
        </LogoWrapper>

        {user && <Profile logout={logout} src={user.photoURL} username={user.displayName} />}


        {!user && <SignupLogin onClick={hamburgerClick} />}
        <NAV>
          <UL>
            <LI> <NavLink to="/">  <IconHome /> <IconTitle>Home</IconTitle>  </NavLink>  </LI>
            <LI>  <NavLink to="/favorites"> <IconFavorites /> <IconTitle>Favorites</IconTitle> </NavLink> </LI>
            <Separator style={{ margin: "30px 0px", }} />
            {user && <LI> <NavLink to="/create"> <CreateNewIcon /> <IconTitle>Upload Video</IconTitle> </NavLink> </LI>}

          </UL>
        </NAV>
      </MobileWrapper>
    </>
  )
}


const MobileWrapper = styled.aside`
  padding-top: 17px;
  z-index: 12;
  position: fixed;
  background-color: ${p => p.theme.navCol};
  width: 240px;
  top: 0;
  left: 0;
  transition: 0.25s;
  min-height: 1440px;
  height: 100vh;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.336);
`

const NAV = styled.nav`
  margin-top: 30px;

`

const UL = styled.ul`
  display: flex;
  flex-direction: column;


  list-style: none;
`

const LI = styled.li`
  padding: 0px 0px;
  padding-left: 0;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  
  :hover {
    background-color: ${p => p.theme.light2};
  }
`

const NavLink = styled(NavLinkToStyle)`
  display: flex;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  color: white;
  padding: 10px 0px;
  width: 100%;
  padding-left: ${p => p.theme.leftSideMargin};

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