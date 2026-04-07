import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    }

    html {
        height: 100vh;
        overflow: hidden;
    }

    body {
        min-height: 100vh;
        background: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.neutral};
        font-family: ${({theme}) => theme.font};
        width: auto;
        height: 100%;
    }
`;
