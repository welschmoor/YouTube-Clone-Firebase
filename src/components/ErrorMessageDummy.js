
import styled from "styled-components"

const ErrorMessageDummy = () => {
  return (
    <ErrorWrapper>
       &nbsp; &nbsp; &nbsp;
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  font-size: 1rem;
  color: hsl(29, 100%, 50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  animation: appear 0.5s;
  transition: all 0.5s;

  @keyframes appear {
    from {
      transform: translateY(-200px);
    }
    to {
      transform: translateY(0px);
    }
  }
`

export default ErrorMessageDummy