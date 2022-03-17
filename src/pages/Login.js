
import React, { useState } from "react"
import { useLogin } from "../hooks/useLogin"

// styles
import styled from "styled-components"
import { Form, LabelInputGroup, Input, SignUpBtn, Label } from "./Signup"
import { SearchButton, SearchInput } from "../components/Header"
import { MainWrapper } from "./Home"
import { Paragraph as P, Title, LinkStyled, SignInHighlightSpan } from "../STYLES/styleText.js"
import ErrorMessage from "../components/ErrorMessage"
import ErrorMessageDummy from "../components/ErrorMessageDummy"
import { SignUpInWrapper, SignUpInGrid } from "../STYLES/styleWrappers.js"
import { IoKey } from "react-icons/io5"


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const { login, isPending, error } = useLogin()


  const submitHandler = e => {
    e.preventDefault()
    console.log("login submitted")
    login(email, password)
  }


  return (
    <SignUpInWrapper>

      {error ? <ErrorMessage errorMessage={error} /> : <ErrorMessageDummy />}
      <SignUpInGrid >
        <div>
          <Title>Log In Page</Title>
          <LinkStyled to="/signup"><P>Don't have an account yet?<br /> Click <SignInHighlightSpan>here</SignInHighlightSpan> to create one!</P></LinkStyled>
          <KeyIcon />
        </div>
        <Form name="loginform" onSubmit={submitHandler} >
          <LabelInputGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} value={email} />
          </LabelInputGroup>
          <LabelInputGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} value={password} />
          </LabelInputGroup>

          <SignUpBtn type="submit" disabled={isPending} >{isPending ? "Logging in..." : "Log In"}</SignUpBtn>
        </Form>
      </SignUpInGrid>
    </SignUpInWrapper>
  )
}


const KeyIcon = styled(IoKey)`
  font-size: 17rem;
  color: ${p => p.theme.secondCol};

  @media (max-width: 700px ) {
    display: none;
  }

  display: flex;
  justify-content: center;
`


export default Signup