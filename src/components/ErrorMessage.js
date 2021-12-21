
import styled from "styled-components"
import { IoWarningOutline } from "react-icons/io5"

const ErrorMessage = ({ errorMessage }) => {
  return (
    <ErrorWrapper>
      <IoWarningOutline /> {errorMessage} <IoWarningOutline />
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  font-size: 1rem;
  color: ${p=>p.theme.errorCol};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  animation: appear 0.5s;

  @keyframes appear {
    from {
      transform: translateY(-200px);
    }
    to {
      transform: translateY(0px);
    }
  }
`

export default ErrorMessage