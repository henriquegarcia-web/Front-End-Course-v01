import styled, { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    list-style: none;
  }

  // ------ SCROLL BAR

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    z-index: 1000;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
`

export default GlobalStyle
