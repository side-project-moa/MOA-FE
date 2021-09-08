import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/style/gloabalStyle';
import { DefaultTheme } from './config/style/theme';
import Header from './components/Header/Header';

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Header />
      </ThemeProvider>
    </RecoilRoot>
  );
}
