import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --main: #f15025;
  }

  body {
    font-family: 'Open-sans', helvetica;
    color: white;
    background: var(--main);
  }

`

export default GlobalStyles