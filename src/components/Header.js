

import React, { useState } from "react"
import { Link as NeedStylingNavLink, useNavigate } from "react-router-dom"

// styles
import styled from "styled-components"
import { Logo } from "../STYLES/styleText"
import { YouTubeIcon } from "../STYLES/styleIcons"
import { IoMenuSharp, IoNotificationsOutline, IoAppsOutline, IoSettingsOutline, IoSearch, IoMic } from "react-icons/io5"

import LogoComponent from "./LogoComponent"


const Header = ({ hamburgerClick, settingsHandler }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }

  return (
    <Wrapper >
      <LogoWrapper>
        <Hamburger onClick={hamburgerClick} />
        <LogoComponent />
      </LogoWrapper>
      <SearchForm onSubmit={submitHandler} name="searchform">
        <SearchButton name="search_button" aria-label="search_button" > <SearchIcon /> </SearchButton>
        <SearchInput type="text" name="searchinput" id="" placeholder="Search" required onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
        <IconMic />
      </SearchForm>
      <IconWrapper>
        <IconNotifications></IconNotifications>
        <IconApps></IconApps>
        <SettingsBtn onClick={settingsHandler}><IconSettings></IconSettings></SettingsBtn>
      </IconWrapper>

    </Wrapper>
  )
}



////////////////////////////////////
//          MAINDIV  
const Wrapper = styled.header`
  z-index: 10;
  position: fixed;
  width: 100%;
  display: flex;
  background-color: ${p => p.theme.navCol};
  display: flex;
  gap: 20px;
  align-items: center;
  color: ${p => p.theme.iconCol};
  height: 60px;
  display: flex;
  justify-content: space-between;
  /* box-shadow: -0.3px -0.3px 0 0.1px ${p => p.theme.textCol} inset; */

`

export const LogoWrapper = styled.div`
  display: flex;
  gap: 20px;

  margin-left: ${p => p.theme.leftSideMargin};
`

////////////////////////////////////
//          FORM  
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  flex-shrink: 1;
`

export const SearchInput = styled.input`
  flex-shrink: 1;
  background-color: ${p => p.theme.searchInputBG};
  border: none;
  height: 46px;
  border-radius: 3px;
  padding-left: 24px;
  padding-right: 48px;
  box-shadow: ${p => p.theme.boxShadowLight};
  color: ${p => p.theme.textCol};
  font-size: 20px;

  :focus {
      outline: 2px solid ${p => p.theme.textCol};
  }

  ::placeholder {
    color: ${p => p.theme.fourthCol};
    text-shadow: none;
  }

  @media (max-width: 800px ) {
    display: none;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover, 
  :-webkit-autofill:focus, 
  :-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0px 100px ${p => p.theme.navCol} inset, 0 1px 1px 0px hsla(0, 0%, 100%, .15), inset 0 2px 2px hsla(0, 0%, 0%, 0.1) !important;
    -webkit-text-fill-color: ${p => p.theme.textCol} !important;
    border-radius: 3px;
    font-size: 1rem;
    box-shadow: ${p => p.theme.boxShadowLight};
    border: 1px solid black;
    height: 47px;
  }  
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  box-shadow: ${p => p.theme.boxShadowLight};
  cursor: pointer;
  background-color: ${p => p.theme.secondCol};
  border-radius: 3px;
  height: 46px;
  width: 66px;
  transition: transform 0.07s;

  :active {
    transform: scale(0.93);
  };
`

const Link = styled(NeedStylingNavLink)`
  text-decoration: none;
  color: white;
`


////////////////////////////////////
//          ICONS  
const IconWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
    
`

export const Hamburger = styled(IoMenuSharp)`
  font-size: 1.3rem;
  cursor: pointer;
  min-width: 1.3rem;
  z-index: 5;
  transition: 0.2s;

`

const IconNotifications = styled(IoNotificationsOutline)`
  font-size: 1.3rem;
  cursor: pointer;
`

const IconApps = styled(IoAppsOutline)`
  font-size: 1.3rem;
  cursor: pointer;
`

const SettingsBtn = styled.button`
  color: white;
  font-size: 1.3rem;
  border: none;
  background: none;
`

const IconSettings = styled(IoSettingsOutline)`
  font-size: 1.3rem;
  cursor: pointer;
  color: ${p => p.theme.iconCol};
`

const SearchIcon = styled(IoSearch)`
  font-size: 1.3rem;
  cursor: pointer;
  color: ${p => p.theme.textCol};
  transform: translate(1px, 2px);
`
const IconMic = styled(IoMic)`
  font-size: 1.3rem;
  cursor: pointer; 
  
  @media (max-width: 800px ) {
  display: none;
  }
`

export default Header