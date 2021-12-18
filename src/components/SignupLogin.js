
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { SearchButton } from "./Header"

const SignupLogin = ({onClick}) => {
  return (
    <SLWrapper>
      <LoginNavLink to="/login" onClick={onClick} >Log In</LoginNavLink>
      <SignUpBtn><SignUpNavLink to="/signup" onClick={onClick} >Sign Up</SignUpNavLink></SignUpBtn>
    </SLWrapper>
  )
}


const SLWrapper = styled.div`
  box-sizing:border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`

const LoginNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 0.8rem;
  color: ${p=>p.theme.textCol};
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 9px;

  &:hover {
    box-shadow: 0px 0px 0px 1px hsl(240, 7%, 70%);;

  }
`

const SignUpNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 0.8rem;
  color: ${p=>p.theme.textCol};
`

const SignUpBtn = styled(SearchButton)`
  width: 90px;
  &:hover {
    box-shadow: 0px 0px 0px 1px hsl(240, 7%, 70%);
  }
`


export default SignupLogin