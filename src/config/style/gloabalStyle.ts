import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
${reset};

* {
    box-sizing: border-box;
}
body{
    width: 100%;
}

button {
    border: none;
    cursor: pointer;
    outline: none;
    border: none;
}

a{
    color: inherit;
    text-decoration: none;
}
li{
    display: block;
    text-align: left;
}
ul{
    padding: 0;
    margin: 0;
}
input {
    outline: none;
}
`;

export default GlobalStyle;
