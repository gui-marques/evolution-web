import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;


}

body {
background: #01A9DB;
color: #FFF;
-webkit-font-smoothing: antialiased;
border: 0;
margin: 0;
 padding: 0;
}
body, input, button {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;

}
h1,h2,h3,h4,h5,h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;

}


ul {
  list-style: none;
  padding: 0;

}


`;
