import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: "Gilroy-ExtraBold";
  src: url("/fonts/Gilroy-ExtraBold.otf");
}

@font-face {
  font-family: "OpenSans-Regular";
  src: url("/fonts/OpenSans-Regular.ttf");
}
@font-face {
  font-family: "OpenSans-LightItalic";
  src: url("/fonts/OpenSans-LightItalic.ttf");
}
@font-face {
  font-family: "BebasNeueBold";
  src: url("/fonts/bebas-neue-bold.otf");
}
@font-face {
  font-family: "Montserrat-Bold";
  src: url("/fonts/Montserrat-Bold.otf");
}
@font-face {
  font-family: "OpenSans-ExtraBold";
  src: url("/fonts/OpenSans-ExtraBold.ttf");
}

*{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline:0;
    }
    body{
        background: #FFF;
        color: #070707;
        -webkit-font-smoothing: antialiased;

    }
    body, input, button {
        font-size:18;
        font-family: "OpenSans-Regular", serif;
    }
    button{
        cursor: pointer;
    }    

`;
