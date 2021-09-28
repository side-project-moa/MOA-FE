import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/style/gloabalStyle';
import { DefaultTheme } from './config/style/theme';
import Router from './Router';

export type FilterPlaceholder = '모임 방식' | '카테고리' | '단기/정기';

export default function App() {
  const testData: IFilterData = {
    placeholder: '모임 방식',
    options: ['모임 방식 전체', '온라인', '오프라인', '온/오프라인'],
  };
  return (
    <RecoilRoot>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}
