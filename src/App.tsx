import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/style/gloabalStyle';
import { DefaultTheme } from './config/style/theme';
import Router from './Router';

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}
