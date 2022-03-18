

import { useParams } from "react-router"
import styled from "styled-components"
import { MainWrapper as AboutWrapper } from "./Home"


const Channel = () => {
  const { cid } = useParams()

  return (
    <MainWrapper>
      <Title>{cid}'s channel</Title>
      <P>
        &nbsp;&nbsp; For me YouTube has one of the better user experiences out of all websites on the internet, maybe even the best. Everything is quick to reach, great colors, especially the dark mode is very pleasant to the eye; it has a brown tint to it, which is very rare in design. I chose a bluish tint (for no particular reason).
      </P>
      <P>
        &nbsp;&nbsp; For this reason I decided to try to create something similar to learn from it. But have I failed or succeeded, you will be the judge.
      </P>
      <P> &nbsp;&nbsp; This website was made using React and Firebase. The styling was done using styled components. The routing using React Router V6.
        Very little was copied from the original, I've chosen my own colors, fonts and icons. The color of the scrollbar was handled better than the original (they use the background-color of the body for the scrollbar, which is a bit ugly. For the bg color of the scrollbar I've used the same color as the main navbar. )
      </P>
    </MainWrapper>
  )
}


const MainWrapper = styled(AboutWrapper)`
  display: flex;
  flex-direction: column;
  
  gap: 10px;
`

const Title = styled.h4`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`

const P = styled.p`
  font-size: 1rem;
  text-align: left;
`

export default Channel