import React, { useState } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import MobileSidebar from "./components/MobileSidebar"
import Footer from "./components/Footer"

import Watch from "./pages/Watch"
import Home from "./pages/Home"
import About from "./pages/About"
import Favorites from "./pages/Favorites"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import CreateNewVideo from "./pages/CreateNewVideo"


const GlobalStyle = createGlobalStyle`
  *  {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
  }

  html, body {
    font-size: 125%;
    font-family: Arial, Helvetica, sans-serif;
    color: ${p => p.theme.textCol};
    text-shadow: ${p => p.theme.textShadow};

    background-color: ${p => p.theme.navCol};

    
  }

  ::placeholder {
    color: ${p => p.theme.textCol};
    text-shadow: ${p => p.theme.textShadow};
    font-size: 0.8rem;
  }

  ::-moz-placeholder { 
    color: hsl(120, 11%, 72%);
    text-shadow: 1px 1px 1px black;
    opacity:  1;
  }

  .hidden {
    display: none;
  }

  .active {
    color: #baa6f1;
  }



  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${p => p.theme.secondCol};
  }

  
`



const darkTheme = {
  navCol: "rgb(40, 40, 46);",
  secondCol: "hsl(240, 6.976744186046512%, 23.862745098039216%);",
  thirdCol: "hsl(240, 6.976744186046512%, 33.862745098039216%);",
  fourthCol: "rgb(158, 158, 168)",

  light2: "hsl(240, 6.976744186046512%, 27.862745098039216%);",
  bgCol: "#828286;",

  cardCol: "hsl(0, 15.183246073298434%, 37.450980392156865%)",
  textCol: "rgb(238, 238, 238)",
  textShadow: "1px 1px 1px black",
  boxShadowLight: "0px 0px 0px 1px hsl(240, 7%, 30%)",
  buttonBg: "linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%)",
  hideSidebar: "none",
  leftSideMargin: "27px",

  activeCol: "#baa6f1",
}


function App() {
  const [sideBarOpen, SetSideBarOpen] = useState(false)
  const { user, authIsReady } = useAuthContext()

  const hamburgerClick = () => {
    console.log("clicked")
    SetSideBarOpen(p => !p)
  }

  return (
    <BrowserRouter >
      <ThemeProvider theme={darkTheme} >

        <GlobalStyle />
        <Wrapper >
          <Header hamburgerClick={hamburgerClick} />
          <Main >
            <Sidebar />
            {authIsReady && (
              <Routes>
                <Route path="/" element={<Home />} exact={true} />
                <Route path="/about" element={<About />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
                <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                <Route path="/create" element={user ? <CreateNewVideo /> : <Navigate to="/" />} />
                <Route path="/watch/:id" element={<Watch />} />

              </Routes>
            )}

          </Main>
          <Footer />
        </Wrapper >
        <MobileSidebar sideBarOpen={sideBarOpen} hamburgerClick={hamburgerClick} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

const Wrapper = styled.div`
 

`

const Main = styled.main`

 
`


export default App
