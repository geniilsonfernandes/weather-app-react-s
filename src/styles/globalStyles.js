import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white100};
    background: ${({ theme }) => theme.colors.black100}
  }
  input{
    font-size: 1.6rem;
  }
  button{
    font-family: 'Poppins', sans-serif;
  }


`;

export default GlobalStyle;
