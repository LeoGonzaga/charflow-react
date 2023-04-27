import { createGlobalStyle } from 'styled-components';

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
  overflow-y: hidden;
  overflow-x: hidden;

}
body{
  font-family: 'Montserrat', sans-serif;
  background-color: #292a2d;

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



.modalOverlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(18, 18, 18, 0.7);
  z-index: 101 !important;
}

.tooltip-font{
font-size: 10px !important;
border: 1px solid #898990 !important;
background: #292a2d !important;
padding: 6px !important;
}

.__react_component_tooltip::before,
.__react_component_tooltip::after {
  content: none !important;
}

.szh-menu__item:hover{
 color: #000 !important;
}
`;
