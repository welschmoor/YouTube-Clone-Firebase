
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { SearchButton } from "./Header"

const SignupLogin = ({onClick}) => {
  return (
    <SLWrapper>
      <LoginNavLink to="/login" onClick={onClick} >Log In</LoginNavLink>
      <SignUpNavLink to="/signup" onClick={onClick} ><SignUpBtn>Sign Up</SignUpBtn></SignUpNavLink>
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
  padding-bottom: 14px;
  padding-top: 14px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 3px;

  &:hover {
    box-shadow: 0px 0px 0px 1px hsl(240, 7%, 70%);;

  }
`

const SignUpNavLink = styled(NavLink)`
  text-decoration: none;
`

const SignUpBtn = styled(SearchButton)`
  font-size: 0.8rem;
  color: ${p=>p.theme.textCol};
  width: 90px;
  &:hover {
    box-shadow: 0px 0px 0px 1px hsl(240, 7%, 70%);
  }
`


export default SignupLogin