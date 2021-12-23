import { Link as LinkNeedsStyling } from "react-router-dom"

import styled from "styled-components"
import { WatchSeparator } from "../STYLES/styleSeparators"
import { Logo, Paragraph } from "../STYLES/styleText"
import LogoComponent from "./LogoComponent"

const Footer = () => {
  return (
    <FooterWrapper>
      <WatchSeparator />
      <LogoFlex>
        <LogoComponent />
      </LogoFlex>

      <ContentWrapper>

        <FooterNav>
          <NavTitle>Links</NavTitle>
          <UL>
            <LI>
              <Link to="/">home</Link>
            </LI>
            <LI>
              <Link to="/favorites">favorites</Link>
            </LI>
            <LI>
              <Link to="/about">about</Link>
            </LI>
          </UL>
        </FooterNav>

        <FooterNav>
          <NavTitle>More Links</NavTitle>
          <UL>
            <LI>
              <Link to="/">Memory</Link>
            </LI>
            <LI>
              <Link to="/favorites">Copyright</Link>
            </LI>
            <LI>
              <Link to="/about">Data Protection</Link>
            </LI>
          </UL>
        </FooterNav>

      </ContentWrapper>
      <Copyright>Fullstack app by me :-) </Copyright>
    </FooterWrapper>
  )
}

const Copyright = styled.p`
  color: ${p => p.theme.commentTimeCol};
  font-size: 0.9rem;
  margin-bottom: 20px;
  margin-top: 20px;
`

const FooterWrapper = styled.footer`
  padding-left: 80px;
  color: ${p => p.theme.bgCol};
  margin-top: 100vh;

  @media (max-width: 800px) {
    padding-left: 0;
  }
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 0;
`

const FooterNav = styled.nav`

`

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const LI = styled.li`
  list-style: none;
`

const LogoFlex = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 8px;
`

const P = styled(Paragraph)`
  display: flex;
  align-items: center;
  gap: 4px;
  transform: translateY(1px);
`

const NavTitle = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 20px;
  color: ${p => p.theme.fourthCol};
`

const Link = styled(LinkNeedsStyling)`
  text-decoration: none;
  color: ${p => p.theme.bgCol};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.65rem;

  :hover {
    border-bottom: 2px solid ${p => p.theme.bgCol};
  }
`



export default Footer