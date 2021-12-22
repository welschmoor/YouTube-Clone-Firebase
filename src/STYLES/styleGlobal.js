// Global Styles AND Themes

import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`

  :root {
    --queryWidth: 700px;
  }

  * {
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
    color: ${p => p.theme.activeCol};
  }

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 12px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${p => p.theme.scrollbarCol};
  }
`


////////////////////////
//    DARK
export const darkTheme = {
  navCol: "rgb(40, 40, 46)",
  secondCol: "hsl(240, 6.976744186046512%, 23.862745098039216%);",
  thirdCol: "hsl(240, 6.976744186046512%, 33.862745098039216%);",
  fourthCol: "rgb(158, 158, 168)",
  fifthCol: "hsl(240, 6.976744186046512%, 39.862745098039216%);",

  homeBg: "rgb(30, 30, 36)",
  iconCol: "rgb(238, 238, 238)",
  activeCol: "hsl(256, 73%, 80%) !important",
  searchInputBG: "hsl(240, 7%, 10%)",

  inputOutline: "hsl(240, 7%, 30%)",

  light2: "hsl(240, 6.976744186046512%, 27.862745098039216%);",
  bgCol: "#828286;",

  cardCol: "hsl(0, 15.183246073298434%, 37.450980392156865%)",
  textCol: "rgb(238, 238, 238)",
  textShadow: "1px 1px 1px black",
  boxShadowLight: "0px 0px 0px 1px hsl(240, 7%, 30%)",
  buttonBg: "linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%)",
  hideSidebar: "none",
  leftSideMargin: "27px",

  errorCol: "hsl(29, 100%, 50%)",
  commentTimeCol: "hsl(240, 6.976744186046512%, 33.862745098039216%)",

  scrollbarCol: "hsl(240, 6.97%, 23.86%)",
  queryWidth: "var(--queryWidth)",
}


////////////////////////
//    LIGHT
export const lightTheme = {
  navCol: "hsl(35, 18%, 87%)",
  secondCol: "hsl(35, 18%, 90%)",
  thirdCol: "hsl(35, 18%, 77%)",
  fourthCol: "hsl(35, 08%, 31%)",
  fifthCol: "hsl(35, 18%, 65%)",

  iconCol: "#524949",
  homeBg: "hsl(35, 18%, 84%)",
  activeCol: "hsl(256, 43%, 60%) !important",
  searchInputBG: "hsl(35, 18%, 97%)",
  
  inputOutline: "hsl(240, 7%, 30%)",

  light2: "hsl(35, 23%, 76%)",
  bgCol: "#828286;",

  cardCol: "hsl(0, 15.183246073298434%, 37.450980392156865%)",
  textCol: "#524949",
  textShadow: "none",
  boxShadowLight: "0px 0px 0px 1px hsl(240, 7%, 30%)",
  buttonBg: "linear-gradient(180deg, #bbdfbb 0%, #8eb68e 100%)",
  hideSidebar: "none",
  leftSideMargin: "27px",

  scrollbarCol: "hsl(35, 14%, 70%)",
  commentTimeCol: "hsl(35, 6.976744186046512%, 63.862745098039216%)",
  
  errorCol: "hsl(0, 80%, 50%)",
}