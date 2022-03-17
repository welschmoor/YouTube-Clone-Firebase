
import React, { useState } from "react"
import { useSignup } from "../hooks/useSignup"


// styles
import styled from "styled-components"
import { SearchButton, SearchInput } from "../components/Header"
import { MainWrapper } from "./Home"
import avatarDefault from "../static/avatarDefault.jpg"
import { IoPeople } from "react-icons/io5"
import { SignUpInGrid, SignUpInWrapper } from "../STYLES/styleWrappers"
import { Paragraph as P, Title, LinkStyled, SignInHighlightSpan } from "../STYLES/styleText.js"

import ErrorMessage from "../components/ErrorMessage"
import ErrorMessageDummy from "../components/ErrorMessageDummy"


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [avatarError, setAvatarError] = useState(null)
  const { signup, isPending, error } = useSignup()


  const displayNameHandler = (e) => {
    setDisplayName(p => {
      if (p.length > 10) {
        return p.slice(0, 10)
      }
      return e.target.value
    })
  }

  // AVATAR Picture handler. If too big, error.
  const fileInputHandler = (e) => {
    setAvatar(null)
    setAvatarError(null)
    let file = e.target.files[0]

    if (!file) {

      // setAvatarError('Please, select a file')
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
    signup(email.trim(), password.trim(), displayName.trim(), avatar)
    console.log("submitted")
  }


  return (
    <SignUpInWrapper>
      {/* {avatarError && <ErrorMessage errorMessage={avatarError} />} */}
      {error ? <ErrorMessage errorMessage={error || avatarError} /> : <ErrorMessageDummy />}
      <SignUpInGrid >
        <div>
          <Title>Sign Up!</Title>
          <LinkStyled to="/login"><P>Already have an account? Click <SignInHighlightSpan>here</SignInHighlightSpan> to sign in</P></LinkStyled>
          <SignUpIcon />
        </div>
        <Form name="signupform" onSubmit={submitHandler} >
          <LabelInputGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} value={email} placeholder="can be fake, no confirmation" />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} value={password} placeholder="at least 6 characters long" />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="displayname">Display Name</Label>
            <Input type="text" name="displayname" id="displayname" required onChange={e => setDisplayName(e.target.value.slice(0, 10))} value={displayName} placeholder="maximum 10 characters long" />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="file">Upload Avatar Picture <GreySpan>(not required)</GreySpan></Label>
            <FileLabel htmlFor="file"><span>Click here to choose .jpg</span>
              <Input type="file" name="avatar" id="file" avatar onChange={fileInputHandler} style={{ display: "none" }} />
            </FileLabel>
          </LabelInputGroup>
          <SignUpBtn disabled={isPending}>{isPending ? "Please wait!" : "Sign Up!"}</SignUpBtn>
        </Form>
      </SignUpInGrid>
    </SignUpInWrapper>
  )
}


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
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
  
  @media (max-width: 800px ) {
      display: block;
  }

`

const FileLabel = styled.label`

  cursor: pointer;
  display: flex;
  align-items: center
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

  :-webkit-autofill,
  :-webkit-autofill:hover, 
  :-webkit-autofill:focus, 
  :-webkit-autofill:active{
    -webkit-box-shadow: 0 0 10px 100px ${p => p.theme.navCol} inset, 0 1px 1px 0px hsla(0, 0%, 100%, .15), inset 0 2px 2px hsla(0, 0%, 0%, 0.1) !important;
    -webkit-text-fill-color: hsl(240, 17%, 80%) !important;
    border-radius: 3px;
    font-size: 1rem;
    box-shadow: ${p => p.theme.boxShadowLight};
    color: red;
  }  

  width: 100%;
  max-width: 400px;
  font-size: 1rem;
  padding: 10px 20px;
  background-color: ${p => p.theme.navCol};
  
  span {
    color: ${p => p.theme.fourthCol};
    text-shadow: none;
    font-size: 0.8rem;
    transform: translateY(4px);
  }

`

const GreySpan = styled.span`
  color: ${p => p.theme.commentTimeCol};
  text-shadow: none;

  transform: translateY(4px);

`

export const SignUpBtn = styled(SearchButton)`
  width: 100%;
  max-width: 400px;
  color: ${p => p.theme.textCol};
  font-size: 1rem;
  margin-top: 20px;
`

const SignUpIcon = styled(IoPeople)`
  font-size: 17rem;
  color: ${p => p.theme.secondCol};

  @media (max-width: 700px ) {
    display: none;
  }

  display: flex;
  justify-content: center;
`




export default Signup