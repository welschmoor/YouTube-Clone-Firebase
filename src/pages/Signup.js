
import React, { useState } from "react"
import styled from "styled-components"
import { MainWrapper } from "./Home"
import { SearchButton, SearchInput } from "../components/Header"
import { useSignup } from "../hooks/useSignup"


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [avatarError, setAvatarError] = useState(null)
  const { signup, isPending, error } = useSignup()


  const fileInputHandler = (e) => {
    setAvatar(null)
    setAvatarError(null)
    let file = e.target.files[0]

    if (!file) {
      setAvatarError('Please, select a file')
      return
    }
    if (!file.type.includes("image")) {
      setAvatarError('Only .jpg and .png allowed!')
      return
    }
    if (file.size > 1000000) {
      setAvatarError('max file size: 1mb')
      return
    }

    setAvatar(file)
  }

  const submitHandler = e => {
    e.preventDefault()
    signup(email, password, displayName, avatar)
    console.log("submitted")
  }


  return (
    <MainWrapper>
      {avatarError && <div>{avatarError}</div>}
      {error && <div>{error}</div>}
      <Grid >
        <Title>Sign Up!</Title>
        <Form name="signupform" onSubmit={submitHandler} >
          <LabelInputGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="displayname">Display Name</Label>
            <Input type="text" name="displayname" id="displayname" required onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="avatar">Upload Avatar Picture</Label>
            <Input type="file" name="avatar" id="file" avatar onChange={fileInputHandler} />
          </LabelInputGroup>
          <SignUpBtn>Sign Up!</SignUpBtn>
        </Form>
      </Grid>
    </MainWrapper>
  )
}


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;


`

export const Title = styled.h3`
  
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`

export const LabelInputGroup = styled.div`
  width: 100%;
`

export const Label = styled.p`
  font-size: 0.9rem;
  margin-bottom: 7px;
`

export const Input = styled(SearchInput)`
  width: 100%;
  max-width: 400px;
  font-size: 1rem;
  padding: 10px 20px;
  background-color: ${p => p.theme.navCol};
`

export const SignUpBtn = styled(SearchButton)`
  width: 100%;
  max-width: 400px;
  color: ${p => p.theme.textCol};
  font-size: 1rem;
`

export default Signup