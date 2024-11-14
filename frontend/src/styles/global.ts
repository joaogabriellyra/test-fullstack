import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  }
  
  body, input, button, span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h2, h3 {
    color: #52525b;
    font-weight: bold;
  }
  
  span {
    color: #71717a;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fb923c;
  }
`
