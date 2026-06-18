import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    :root{
        --main-color: #d3ad7f;
        --white: #fff;
        --black: #13131a;
        --bg: #010103;
        --border: 0.1rem solid rgba(255, 255, 255, 0.3);
        font-size: 10px;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        text-transform: capitalize;
        transition: 0.2s linear;
        font-family: "Roboto", sans-serif;
    }

    section{
        margin: 0 auto;
        max-width: 1200px;
        padding: 3rem 5rem;
    }
`