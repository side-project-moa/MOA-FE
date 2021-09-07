import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import SignModal from './components/Login/SignModal';
import GlobalStyle from './config/style/gloabalStyle';
import { DefaultTheme } from './config/style/theme';

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <SignModal />
      </ThemeProvider>
    </RecoilRoot>
  );
}
