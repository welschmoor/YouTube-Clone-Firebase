

import React from 'react'
import { IoHome, IoBookmarks, IoInformationCircle } from 'react-icons/io5'
import styled from 'styled-components'
import { NavLink as NavLinkNeedsStyling } from "react-router-dom"

const Sidebar = () => {
  return (
    < >
      <Wrapper>

        <Nav>
          <NavUL>

            <NavLI>
              <NavLink exact to="/">
                <IconHome />
                <p>Home</p>
              </NavLink>
            </NavLI>

            <NavLI>
              <NavLink to="/favorites">
                <IconFavorites />
                <p>Favorites</p>
              </NavLink>
            </NavLI>

            <NavLI>
              <NavLink to="/about">
                <IconInfo />
                <p>About</p>
              </NavLink>
            </NavLI>

          </NavUL>
        </Nav>

      </Wrapper>

    </>
  )
}



const Wrapper = styled.aside`
  margin-top: 60px;
 
  background-color: ${p => p.theme.navCol};
  min-height: 1440px;
  height: 100%;
  width: 80px;
  position: fixed;

  
`

const Nav = styled.nav`

  p {
    font-size: 0.75rem;
  }
`

const NavUL = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 34px;
    list-style: none;
    margin-top: 16px;
`

const NavLI = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: white;
    text-decoration: none;


`

const NavLink = styled(NavLinkNeedsStyling)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
`

/////////////////////////////////////////
//      ICONS

export const IconHome = styled(IoHome)``
export const IconFavorites = styled(IoBookmarks)`

`
export const IconInfo = styled(IoInformationCircle)`
  font-size: 1.6rem;
`


export default Sidebar