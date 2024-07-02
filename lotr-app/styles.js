import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Alegreya Sans SC';
    src: url("/fonts/Alegreya_Sans_SC/AlegreyaSansSC-Black.ttf") format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Alegreya Sans SC', system-ui;
  }
`;
