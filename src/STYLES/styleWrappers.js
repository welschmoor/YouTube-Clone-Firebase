
// These are Main Wrappers (main div elements)
import styled from "styled-components"


export const SignUpInWrapper = styled.div`
  padding: 64px 20px 20px 100px;
  background-color: ${p => p.theme.homeBg};

  @media (max-width: 700px ) {
    padding: 64px 20px 20px 20px;
  }

`