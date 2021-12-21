
/*

These are default, styled components for TEXT

Styled paragraphs, titles and so on

*/


import styled from "styled-components"
import { Link } from "react-router-dom"


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