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
  }

  body {
    font-family: 'Open-sans', helvetica;
    color: var(--main-black);
    background: var(--main-white);
  }

`

export default GlobalStyles