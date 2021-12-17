
import React, { useState } from "react"
import styled from "styled-components"
import { MainWrapper } from "./Home"
import { SearchButton, SearchInput } from "../components/Header"
import { useLogin } from "../hooks/useLogin"
import { Grid, Title, Form, LabelInputGroup, Input, SignUpBtn, Label } from "./Signup"


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
    
      {error && <div>{error}</div>}
      <Grid >
        <Title>Log In Page</Title>
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