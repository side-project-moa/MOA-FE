import Login from '../components/Login/Login';
import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { ThemeProvider } from 'styled-components';
import { DefaultTheme } from '@src/config/style/theme';
configure({ adapter: new Adapter() });

describe('Login', () => {
  //  const loginComponent = shallowWithTheme(<Login />,DefaultTheme);
  const { getByPlaceholderText, getAllByAltText, getByText } = render(
    <ThemeProvider theme={DefaultTheme}>
      <Login />
    </ThemeProvider>,
  );

  it('로그인화면에 이메일과 비밀번호를 입력하는 input이 렌더된다.', () => {
    const email = getByPlaceholderText('이메일');
    const password = getByPlaceholderText('비밀번호');

    //expect(loginComponent.find('input').exists()).toBe(true);
  });

//   it('로그인화면에 이메일로 로그인 , 회원가입 버튼이 렌더된다.', () => {
//     const Signin = getByText('회원 가입');
//     const githubLogIn = getAllByAltText('githubLogIn');

//     expect(Signin.length).toBe(1);
//     expect(githubLogIn.length).toBe(1);
  });

  // 이메일을 입력했을때 이메일형식이 아니면 경고를 띄워준다.

  // it('이메일을 입력했을때 이메일형식이 아니면 경고를 띄워준다.', () => {
  //     const emailInput = loginComponent.getByPlaceholderText('이메일');
  //     expect(emailInput.find()).toBe();

  //    });

  // 이메일과 비밀번호를 입력하고 로그인 하기 버튼을 누르면 서버에 post 요청을 보내고 응답이 맞으면 로그인 완료

  // 각 오오스 버튼을 클릭했을때 오오스들이 제공하는 url 로 들어가야한다.

  // it('simulates input change', () => {
  //   const mockedEvent = {
  //     target: {
  //       value: 'hello'
  //     }
  //   };
  //   // 이벤트를 시뮬레이트 합니다. 두번째 파라미터는 이벤트 객체입니다.
  //   component.find('input').simulate('change', mockedEvent);
  //   expect(component.state().name).toBe('hello');
  // });

  // it('simulates form submit', () => {
  //   const mockedEvent = {
  //     preventDefault: () => null // onSubmit 에서 preventDefault 를 호출하게 되므로, 가짜 함수 추가
  //   };
  //   component.find('form').simulate('submit', mockedEvent);
  //   expect(component.state().name).toBe(''); // 등록 하면 값이 공백으로 변하며
  //   expect(changed).toBe('hello');
