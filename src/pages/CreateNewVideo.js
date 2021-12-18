
import { useState } from "react"
import styled from "styled-components"
import { MainWrapper } from "./Home"
import { Grid, Title, Form, LabelInputGroup, Input, SignUpBtn, Label } from "./Signup"


const CreateNewVideo = () => {
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [uploadDate, setUploadDate] = useState('')
  const [category, setCategory] = useState('')

  return (
    <MainWrapper>CreateNewVideo Page</MainWrapper>
  )
}


export default CreateNewVideo