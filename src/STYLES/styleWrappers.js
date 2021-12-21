
// These are Main Wrappers (main div elements)
import styled from "styled-components"



/////////////////////////////////////////////
//    SIGN IN / UP Wrappers and Grids
export const SignUpInWrapper = styled.div`
  padding: 64px 20px 20px 100px;
  background-color: ${p => p.theme.homeBg};

  @media (max-width: 700px ) {
    padding: 64px 20px 20px 20px;
  }

`

export const SignUpInGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`