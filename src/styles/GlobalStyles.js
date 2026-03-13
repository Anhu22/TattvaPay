import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background:#ffffff;
    color:#111;
    line-height:1.6;
  }

  section{
    padding:80px 10%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight:700;
  }

  button{
    cursor:pointer;
    border:none;
    font-family:inherit;
  }

  a {
    color:#333;
    text-decoration:none;
  }
`;

export default GlobalStyles;