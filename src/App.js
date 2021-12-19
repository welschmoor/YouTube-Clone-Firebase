import React, { useState } from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { GlobalStyle, darkTheme } from "./STYLES/style"

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
