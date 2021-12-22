

import React from 'react'
import { IoHome, IoBookmarks, IoInformationCircle, IoAddCircle } from 'react-icons/io5'
import styled from 'styled-components'
import { NavLink as NavLinkNeedsStyling } from "react-router-dom"

const Sidebar = () => {

  return (
    < >
      <Wrapper>

        <Nav>
          <NavUL>

            <NavLI>
              <NavLink to="/">
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
  /* box-shadow: -0.3px -1.3px 0 0.1px ${p => p.theme.textCol} inset; */

  @media (max-width: 700px ) {
    display: none;
  }
  
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

    .active & {
    color: ${p => p.theme.activeCol};
  }
`

const NavLink = styled(NavLinkNeedsStyling)`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${p => p.theme.iconCol};
  .active & {
    color: ${p => p.theme.activeCol};
  }
`

/////////////////////////////////////////
//      ICONS

export const IconHome = styled(IoHome)`
  font-size: 1.25rem;
  color: inherit;


`
export const CreateNewIcon = styled(IoAddCircle)`
  font-size: 1.25rem;
  color: ${p => p.theme.iconCol};
  color: inherit;
`
export const IconFavorites = styled(IoBookmarks)`
  font-size: 1.25rem;
  color: ${p => p.theme.iconCol};
  color: inherit;
`
export const IconInfo = styled(IoInformationCircle)`
  font-size: 1.6rem;
  color: ${p => p.theme.iconCol};
  color: inherit;
`


export default Sidebar