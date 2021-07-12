import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  
  html {
    @media(max-width: 1080px){
		  font-size: 93.75%;
    }

    @media(max-width: 720px){
		  font-size: 87.5%;
    } 
  }

  body {
    background: var(--background);
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
  }


  :root {
    --background: ${props => props.theme.colors.background};
    --white: ${props => props.theme.colors.white};
    --black: ${props => props.theme.colors.black};
    --grayLight: ${props => props.theme.colors.grayLight};
    --grayMedium: ${props => props.theme.colors.grayMedium};
    --primary: ${props => props.theme.colors.primary};
    --darkGreen: ${props => props.theme.colors.darkGreen};
  }

`
