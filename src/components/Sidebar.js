

import React from 'react'
import { IoHome, IoBookmarks } from 'react-icons/io5'
import styled from 'styled-components'


const Sidebar = () => {
  return (
    < >
      <Wrapper>

        <Nav>
          <NavUL>
            <NavLI>
              <IconHome />
              <p>Home</p>
            </NavLI>
            <NavLI>
              <IconFavorites />
              <p>Favorites</p>
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
`

/////////////////////////////////////////
//      ICONS

export const IconHome = styled(IoHome)``
export const IconFavorites = styled(IoBookmarks)``



export default Sidebar