import Login from '@src/components/Login/Login';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/style/gloabalStyle';
import { DefaultTheme } from './config/style/theme';

export default function App() {
 return (
  <ThemeProvider theme={DefaultTheme}>
   <GlobalStyle />
   <Login />
  </ThemeProvider>
 );
}
