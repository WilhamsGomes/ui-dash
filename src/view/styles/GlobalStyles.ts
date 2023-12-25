import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    *::after{
        box-sizing: border-box;
    }
    *::before{
        box-sizing: border-box;
    }
    *:focus{
        outline:0;
    }

    body{              
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme.colors.baseProduct1};
        color: ${(props) => props.theme.colors.baseFont1};
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
    button{
        cursor: pointer;
    }

    /* ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
    } */

   
`;
