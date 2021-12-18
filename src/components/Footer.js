

import styled from "styled-components"


const Footer = () => {
  return(
    <FooterWrapper>
      Footer here
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  padding-left: 80px;
  color: ${p=>p.theme.bgCol};
  margin-top: 50vh;
`

export default Footer