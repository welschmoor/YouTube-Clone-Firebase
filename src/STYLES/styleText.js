
/*

These are default, styled components for TEXT

Styled paragraphs, titles and so on

*/


import styled from "styled-components"
import { Link } from "react-router-dom"


export const ParagraphDefault = styled.p`
  font-size: 1rem;
  text-align: left;
`

export const Title = styled.h3`
  margin-bottom: 20px;
`

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${p=>p.theme.textCol};
`