import { createGlobalStyle } from "styled-components";
import { Titillium_Web } from "next/font/google";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "300", "700", "900"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 20px;
    font-family: ${titilliumWeb.style.fontFamily}, system-ui;
    font-weight: 400;
  }
`;
