import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  PRIMARY: "#117EFF",
  SECONDARY: "#FAF3C0",
  TERTIARY: "#23232C",
  TEXT: "#3E4157",
  BACKGROUND: "#F9F9F9",
};

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
body, button,input {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-style: normal;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Nunito Sans', sans-serif;

  #__next {
    width: 100%;
  }

  p {
    margin: unset;
  }

  hr {
    margin-bottom: 0;
  }
}


input, textarea, button {
  font-family: 'Montserrat', sans-serif;
}

.diagram-component {
  height: 100vh;
  border: solid 1px black;
  background-color: white;
}

.react-flow__controls-zoomin{
  border-top-left-radius:24px;
  border-bottom-left-radius:24px;
}

.react-flow__controls-interactive{
  border-top-right-radius:24px;
  border-bottom-right-radius:24px;
}
.react-flow__controls{
  border-radius: 50%;
  width: 233px;

}

.react-flow__controls-button{
  height: 36px;
  width: 100%;

}


.stroke{
  stroke: 10px;
}

`;
