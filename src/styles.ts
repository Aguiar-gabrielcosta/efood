import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${(props) => props.theme.terciaryColor};
    color: ${(props) => props.theme.primaryColor};
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }
`
