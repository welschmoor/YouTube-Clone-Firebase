

import React, {useState} from "react"
import styled from "styled-components"
import { IoMenu, IoNotificationsOutline, IoAppsOutline, IoSettingsOutline, IoSearch, IoMic  } from "react-icons/io5"
import MobileSidebar from "./MobileSidebar"

const Header = ({ hamburgerClick}) => {




  

    return(
        <Wrapper >
            <LogoWrapper>
                <Hamburger onClick={hamburgerClick} />
                <Logo>YouTube</Logo>
            </LogoWrapper>
            <SearchForm action="" >
                <SearchButton > <SearchIcon /> </SearchButton>
                <SearchInput type="text" name="" id="" placeholder="Search"   />
                <IconMic />
            </SearchForm>
            <IconWrapper>
                    <IconNotifications></IconNotifications>
                    <IconApps></IconApps>
                    <IconSettings ></IconSettings>
            </IconWrapper>
           
        </Wrapper>
    )
}



////////////////////////////////////
//          MAINDIV  
const Wrapper = styled.header`

    position: fixed;
    width: 100%;
    display: flex;
    background-color: ${p=>p.theme.navCol};
    display: flex;
    gap: 20px;
    align-items: center;
    color: rgb(238, 238, 238);
    height: 60px;
    display: flex;
    justify-content: space-between;

`
export const Logo = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
`
export const LogoWrapper = styled.div`
    display: flex;
    gap: 20px;

    margin-left: ${p=>p.theme.leftSideMargin};
`

////////////////////////////////////
//          FORM  
const SearchForm = styled.form`
    display: flex;
    align-items: center;
    flex-shrink: 1;
`

const SearchInput = styled.input`
    flex-shrink: 1;
    background-color: hsl(240, 7%, 10%);
    border: none;
    height: 46px;
    border-radius: 3px;
    padding-left: 24px;
    padding-right: 48px;
    box-shadow: ${p=> p.theme.boxShadowLight};
    color: ${p => p.theme.textCol};
    font-size: 20px;

    :focus {
        outline: 2px solid ${p => p.theme.textCol};
    }

`

const SearchButton = styled.button`
    background: none;
    border: none;
    box-shadow: ${p=> p.theme.boxShadowLight};
    cursor: pointer;
    background-color: ${p=> p.theme.secondCol};
    border-radius: 3px;
    height: 46px;
    width: 66px;
    transition: transform 0.07s;

    :active {
        transform: scale(0.93);
    };
`


////////////////////////////////////
//          ICONS  
const IconWrapper = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
`

export const Hamburger = styled(IoMenu)`
    font-size: 1.3rem;
    cursor: pointer;
    min-width: 1.3rem;
    z-index: 10;
`

const IconNotifications = styled(IoNotificationsOutline)`
    font-size: 1.3rem;
    cursor: pointer;
`

const IconApps = styled(IoAppsOutline)`
    font-size: 1.3rem;
    cursor: pointer;
`

const IconSettings = styled(IoSettingsOutline)`
    font-size: 1.3rem;
    cursor: pointer;
`
const SearchIcon = styled(IoSearch)`
    font-size: 1.3rem;
    cursor: pointer;
    color: ${p => p.theme.textCol };
    transform: translate(1px, 2px);
`
const IconMic = styled(IoMic)`
    font-size: 1.3rem;
    cursor: pointer; 
`

export default Header