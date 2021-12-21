
import React, { useState } from "react"
import { useLogin } from "../hooks/useLogin"

// styles
import styled from "styled-components"
import { Grid, Form, LabelInputGroup, Input, SignUpBtn, Label } from "./Signup"
import { SearchButton, SearchInput } from "../components/Header"
import { MainWrapper } from "./Home"
import { ParagraphDefault as P, Title, LinkStyled } from "../STYLES/styleText.js"
import ErrorMessage from "../components/ErrorMessage"
import ErrorMessageDummy from "../components/ErrorMessageDummy"


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
    <MainWrapper>

      {error ? <ErrorMessage errorMessage={error}/> : <ErrorMessageDummy /> }
      <Grid >
        <div>
          <Title>Log In Page</Title>
          <LinkStyled to="/signup"><P>Don't have an account yet? Click here to create one!</P></LinkStyled>
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

          <SignUpBtn type="submit" >Log In</SignUpBtn>
        </Form>
      </Grid>
    </MainWrapper>
  )
}


export default Signup