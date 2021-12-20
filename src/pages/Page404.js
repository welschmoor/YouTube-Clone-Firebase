
import { MainWrapper as Wrapper404 } from "./Home"
import styled from "styled-components"


const Page404 = () => {
  return(
    <MainWrapper>404 page not found. The URL you have entered does not exists.</MainWrapper>
  )
}

const MainWrapper = styled(Wrapper404)`
  font-size: 1rem;
`

export default Page404