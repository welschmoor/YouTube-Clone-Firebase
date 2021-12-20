import React from "react"
import styled from "styled-components"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"



const SettingsModal = ({ settingsOpen, setSettingsOpen, settingsHandler }) => {
  const { logout, isPending, error } = useLogout()
  const { user, authIsReady } = useAuthContext()


  // <SettingsWrapper style={{ "right": settingsOpen ? "20px" : "-100%" }}>
  return (
    < >
      {settingsOpen ? <SidebarPlane onClick={settingsHandler} /> : null}
      <SettingsWrapper style={{ "right": settingsOpen ? "20px" : "-100%" }}>


      </SettingsWrapper>
    </>
  )
}


const SettingsWrapper = styled.aside`
  padding-top: 17px;
  z-index: 11;
  position: fixed;
  background-color: ${p => p.theme.navCol};
  width: 240px;
  top: 10%;
  right: 0;
  transition: 0.25s;
  min-height: 440px;
  height: 50vh;
  box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.336);
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
export default SettingsModal