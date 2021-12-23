import React, { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

// styles
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { GlobalStyle, darkTheme, lightTheme } from "./STYLES/styleGlobal"


import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainContent from "./components/MainContent"
import MobileSidebar from "./components/MobileSidebar"
import Footer from "./components/Footer"
import SettingsModal from "./components/SettingsModal"

import Watch from "./pages/Watch"
import Home from "./pages/Home"
import About from "./pages/About"
import Favorites from "./pages/Favorites"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import CreateNewVideo from "./pages/CreateNewVideo"
import Page404 from "./pages/Page404"
import Search from "./pages/Search"


function App() {
  const [sideBarOpen, SetSideBarOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const { user, authIsReady } = useAuthContext()


  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("YouTubeCloneDarkMode")) {
      return localStorage.getItem("YouTubeCloneDarkMode") === "false"
    }
    return true
  })

  const darkModeHandler = () => {
    setDarkMode(p => !p)
    localStorage.setItem("YouTubeCloneDarkMode", JSON.stringify(darkMode))
  }

  const hamburgerClick = () => {
    SetSideBarOpen(p => !p)
  }

  const settingsHandler = () => {
    console.log('settings clicked')
    setSettingsOpen(p => !p)
  }

  return (
    <BrowserRouter >
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >

        <GlobalStyle />
        <Wrapper >
          <Header hamburgerClick={hamburgerClick} settingsHandler={settingsHandler} />
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
                <Route path="/search/:query" element={<Search />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            )}
          </Main>
          <Footer />
        </Wrapper >
        <MobileSidebar sideBarOpen={sideBarOpen} hamburgerClick={hamburgerClick} />
        <SettingsModal settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} settingsHandler={settingsHandler} darkModeHandler={darkModeHandler} darkMode={darkMode} />
      </ThemeProvider>
    </BrowserRouter>
  )
}


const Wrapper = styled.div`
 

`

const Main = styled.main`

 
`


export default App
