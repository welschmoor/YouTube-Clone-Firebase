
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"



export const GlobalStyle = createGlobalStyle`

  *  {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
  }

  html, body {
    font-size: 125%;
    font-family: Arial, Helvetica, sans-serif;
    color: ${p => p.theme.textCol};
    text-shadow: ${p => p.theme.textShadow};

    background-color: ${p => p.theme.navCol};
  }

  ::placeholder {
    color: ${p => p.theme.textCol};
    text-shadow: ${p => p.theme.textShadow};
    font-size: 0.8rem;
  }

  ::-moz-placeholder { 
    color: hsl(120, 11%, 72%);
    text-shadow: 1px 1px 1px black;
    opacity:  1;
  }

  .hidden {
    display: none;
  }

  .active {
    color: #baa6f1;
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${p => p.theme.secondCol};
  }
`



export const darkTheme = {
  navCol: "rgb(40, 40, 46);",
  secondCol: "hsl(240, 6.976744186046512%, 23.862745098039216%);",
  thirdCol: "hsl(240, 6.976744186046512%, 33.862745098039216%);",
  fourthCol: "rgb(158, 158, 168)",

  light2: "hsl(240, 6.976744186046512%, 27.862745098039216%);",
  bgCol: "#828286;",

  cardCol: "hsl(0, 15.183246073298434%, 37.450980392156865%)",
  textCol: "rgb(238, 238, 238)",
  textShadow: "1px 1px 1px black",
  boxShadowLight: "0px 0px 0px 1px hsl(240, 7%, 30%)",
  buttonBg: "linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%)",
  hideSidebar: "none",
  leftSideMargin: "27px",

  activeCol: "#baa6f1",
}
