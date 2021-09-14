import { media } from '@src/config/utils/util';
import { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import CustomButton from '../Buttons/Button';
import Login from '../Login/Login';
import SignIn from '../Login/SignIn';
import Logo from '../Logo/Logo';
import Modal from '../Modal';

export default function Header() {
  const [isPopup, setPopup] = useState(false);
  const [isLogin, setLogin] = useState(true);

  const handleLoginButton = (e: React.MouseEvent) => {
    setPopup(true);
  };

  const handleSetLogin = (e: MouseEvent<HTMLButtonElement>) => {
    setLogin(true);
  };

  const handleSetSignUp = (e: MouseEvent<HTMLButtonElement>) => {
    setLogin(false);
  };
  return (
    <HeaderWrapper>
      <Logo />
      <CustomButton
        buttonSize={'SMALL'}
        buttonType={'INITIAL'}
        onClick={handleLoginButton}
        text={'로그인 / 회원가입'}
      />

      {isPopup && (
        <Modal setPopup={setPopup}>
          <LogInHeaderWrapper>
            <LogInTitle>
              <Logo /> 에 오신것을 환영합니다.
            </LogInTitle>
            <LogInAndSignUp {...{ isLogin }}>
              <button onClick={handleSetLogin}>Log In</button> <div></div>
              <button onClick={handleSetSignUp}>Sign Up</button>
            </LogInAndSignUp>
          </LogInHeaderWrapper>
          <LogInWrapper>
            {isLogin ? <Login {...{ setLogin }} /> : <SignIn />}
          </LogInWrapper>
        </Modal>
      )}
    </HeaderWrapper>
  );
}

const LogInHeaderWrapper = styled.div`
  display: flex;
  padding: 0 4rem;
  padding-top: 3rem;
  flex-direction: column;
  width: 540px;
  justify-content: space-evenly;
  align-items: center;
  ${media.mobile} {
    width: 100%;
    border-radius: 0;
    padding: 0 2rem;
    padding-top: 3rem;
  }
`;

type LogInSignUpType = {
  isLogin: boolean;
};

const LogInAndSignUp = styled.div<LogInSignUpType>`
  position: relative;
  display: flex;
  background-color: #f1f1f1;
  border-radius: 10px;
  button {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    background-color: transparent;
    width: 120px;
    z-index: 2;
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      padding-right: 0.3rem;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  div {
    top: -5%;
    transform: ${({ isLogin }) =>
      isLogin ? `translateX(0px)` : `translateX(110px)`};
    position: absolute;
    width: 130px;
    height: 110%;
    border-radius: 10px;
    background-color: #feb66c;
    opacity: 0.6;
    transition: 0.3s ease-in-out;
    z-index: 1;
  }
  margin-bottom: 1rem;
`;

const HeaderWrapper = styled.div`
  padding: 2rem 5%;
  ${({ theme }) => theme.style.flexSpaceBetween}
`;

const LogInTitle = styled.span`
  display: block;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.XL};
  ${media.mobile}{
    font-size: ${({ theme }) => theme.fontSize.L};
  }
  font-weight: 700;
`;

const LogInWrapper = styled.div`
  display: flex;
  padding: 0rem 4rem;
  padding-bottom: 2rem;
  flex-direction: column;
  width: 540px;
  height: 400px;
  ${media.mobile} {
    width: 100%;
    border-radius: 0;
    padding: 0rem 2rem;
  }
  justify-content: space-evenly;
  align-items: center;
`;
