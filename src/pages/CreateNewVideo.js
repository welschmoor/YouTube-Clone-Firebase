
import { useState } from "react"
import styled from "styled-components"
import { MainWrapper as MainWrapperStyle } from "./Home"
import { Grid, Form as FormToStyle, LabelInputGroup as LabelInputGroupUnstyled, Input, SignUpBtn, Label } from "./Signup"


const CreateNewVideo = () => {
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [file, setFile] = useState(null)
  const [fileError, setFileError] = useState(null)
  const [category, setCategory] = useState('')


  const submitHandler = e => {
    e.preventDefault()


  }


  const fileInputHandler = (e) => {
    setFile(null)
    setFileError(null)
    let file = e.target.files[0]
    console.log(file)

    if (!file) {
      setFileError('Please, select a file')
      return
    }
    if (!file.type.includes("video")) {
      setFileError('Only .mp4 allowed!')
      return
    }
    if (file.size > 10000000) {
      setFileError('max file size: 10mb')
      return
    }

    setFile(file)
  }

  return (
    <MainWrapper>
      <Title>Upload a New Video!</Title>
      <ContentWrapper>
        <Form name="upload-video-form" >
          <LabelInputGroup>
            <Label htmlFor="video-title">Video Title</Label>
            <Input type="text" name="video-title" id="video-title" required onChange={(e) => setVideoTitle(e.target.value)} value={videoTitle} />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="video-description">Description</Label>
            <Input type="text" name="video-description" id="video-description" required onChange={(e) => setVideoDescription(e.target.value)} value={videoDescription} />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="avatar">Upload Avatar Picture</Label>
            <Input type="file" name="avatar" id="file" avatar onChange={fileInputHandler} />
          </LabelInputGroup>
        </Form>
        
      </ContentWrapper>
    </MainWrapper>
  )
}


const MainWrapper = styled(MainWrapperStyle)`

`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Form = styled(FormToStyle)`
  display: flex;
  justify-content: center;
`

const LabelInputGroup = styled(LabelInputGroupUnstyled)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const Title = styled.h4`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

`

export default CreateNewVideo