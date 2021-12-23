
/*

These are default, styled components for TEXT

Styled paragraphs, titles and so on

*/


import styled from "styled-components"
import { Link } from "react-router-dom"

// Text of the main Logo, used in: Footer, Header, MobileSidebar
export const Logo = styled.h2`
  font-size: 1.1rem;
  font-weight: 400;

  color: ${p => p.theme.iconCol};
`

export const Paragraph = styled.p`
  font-size: 1rem;
  text-align: left;
`

export const Title = styled.h3`
  font-size: 1.46rem;
  margin-bottom: 20px;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${p=>p.theme.textCol};
`

/////////////////////////////////////////////
//    SIGN IN / UP Text

export const SignInHighlightSpan = styled.span`
  text-decoration: underline;
  color: #00c4fa;
`