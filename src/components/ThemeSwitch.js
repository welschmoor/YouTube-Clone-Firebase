import styled from "styled-components"

const ThemeSwitch = ({ setDarkMode }) => {
  return (
    <SwitchLabel>
      <CheckBoxInput type="checkbox" onClick={() => setDarkMode(p => !p)} />
      <SliderSpan></SliderSpan>
    </SwitchLabel>
  )
}

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
  /* background-color: red;  */
`

const SliderSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${p => p.theme.thirdCol};
  transition: 0.2s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
`

const CheckBoxInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${SliderSpan}:before {
    transform: translateX(36px);
  }
  &:checked + ${SliderSpan} {
    background-color: ${p => p.theme.thirdCol};
  }
`

export default ThemeSwitch