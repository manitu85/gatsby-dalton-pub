import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --main-white: #fff;
    --main-black: #101010;
    --main-orange: #f15025;

    --font-primary: 'Kaushan Script', cursive;
    --font-secondary:'Lobster Two', cursive;
    --font-display: 'Lakki Reddy', cursive;
  }

  body {
    font-family: 'Open-sans', helvetica;
    color: ${({ theme }) => theme.colors.primaryLight};
    background: ${({ theme }) => theme.colors.primaryDark};
  }

`

export default GlobalStyles