
import { useState } from "react"
import styled from "styled-components"
import { storage, timestamp, firestore } from "../firebase"
import { useNavigate } from "react-router-dom"

import { MainWrapper as MainWrapperStyle } from "./Home"
import { Grid, Form as FormToStyle, LabelInputGroup as LabelInputGroupUnstyled, Input, SignUpBtn, Label } from "./Signup"
import { useAuthContext } from "../hooks/useAuthContext"
import { useFirestore } from "../hooks/useFirestore"


const CreateNewVideo = () => {

  const { addDocument, response } = useFirestore('videos')
  const [videoTitle, setVideoTitle] = useState('')
  const [videoDescription, setVideoDescription] = useState('')
  const [file, setFile] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)
  const [fileError, setFileError] = useState(null)


  const [error, setError] = useState(null)
  const [category, setCategory] = useState('')
  const { user } = useAuthContext()

  const navigate = useNavigate()

  const submitHandler = async e => {
    e.preventDefault()

    if (!videoTitle || !videoDescription || !file) {
      setError("Fill out all fields of the form!")
      console.log("If you see this message, it means either the file, title or video description do not exist")
      return
    }

    const createdBy = {
      photoURL: user.photoURL,
      displayName: user.displayName,
      id: user.uid,
    }

    const newVideo = {
      videoTitle,
      videoDescription,
      file,
      comments: [],
      views: 0,
      likes: 0,
      createdBy: createdBy,
    }

    console.log("newVideo", newVideo)
    try {

      // this is for storing the video in Firebase Storage.
      const uploadPath = `videos/${file.name}`
      const videoResponse = await storage.ref(uploadPath).put(file)
      const videoUrl = await videoResponse.ref.getDownloadURL()

      console.log("thumbnail: ",thumbnail)


      const uploadPath2 = `thumbnails/${thumbnail.name}`
      const thumbnailResponse = await storage.ref(uploadPath2).put(thumbnail)
      const thumbnailUrl = await thumbnailResponse.ref.getDownloadURL()

      await firestore.collection('videos').doc(user.uid).set({
        videoTitle,
        videoDescription,
        videoURL: videoUrl,
        thumbnailURL: thumbnailUrl,
        comments: [],
        views: 0,
        likes: 0,
        createdBy: createdBy,
      })

      navigate('/')
      console.log("Video Submitted")
    }
    catch (error) {
      console.log("SubmitVideoError:", error)
      setError(error.message)
    }
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
    if (!file.type.includes("video/mp4")) {
      setFileError('Only .mp4 allowed!')
      return
    }
    if (file.size > 10000000) {
      setFileError('max file size: 10 MB')
      return
    }

    setFile(file)
  }


  const thumbnailInputHandler = (e) => {
    setThumbnail(null)
    setFileError(null)
    let file = e.target.files[0]
    console.log(file)

    if (!file) {
      setFileError('Please, select a thumbnail')
      return
    }
    if (!file.type.includes("image/jpeg")) {
      setFileError('Only .jpg allowed!')
      return
    }
    if (file.size > 1000000) {
      setFileError('max file size: 1 MB')
      return
    }

    setThumbnail(file)
  }



  
  return (
    <MainWrapper>
      {fileError && <div>{fileError}</div>}
      {error && <div>{error}</div>}
      <Title>Upload a New Video!</Title>
      <ContentWrapper>
        <Form name="upload-video-form" onSubmit={submitHandler} >
          <LabelInputGroup>
            <Label htmlFor="video-title">Video Title</Label>
            <Input type="text" name="video-title" id="video-title" required onChange={(e) => setVideoTitle(e.target.value)} value={videoTitle} />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="video-description">Description</Label>
            <Input type="text" name="video-description" id="video-description" required onChange={(e) => setVideoDescription(e.target.value)} value={videoDescription} />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="videofile">Choose You Video</Label>
            <Input type="file" name="videofile" id="videofile" onChange={fileInputHandler} required />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="thumbnail">Choose Thumbnail</Label>
            <Input type="file" name="thumbnail" id="thumbnail" onChange={thumbnailInputHandler} required />
          </LabelInputGroup>
          <LabelInputGroup>
            <SignUpBtn>Upload Video</SignUpBtn>
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