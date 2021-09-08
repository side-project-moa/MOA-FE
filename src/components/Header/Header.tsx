import { useState } from 'react';
import styled from 'styled-components';
import Login from '../Login/Login';
import SignIn from '../Login/SignIn';
import Logo from '../Logo/Logo';
import Modal from '../Modal';

export default function Header() {
  const [isPopup, setPopup] = useState(false);
  const [isLogin, setLogin] = useState(true);

  const handleLoginButton = () => {
    setPopup(true);
  };
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderLoginButton onClick={handleLoginButton}>
        로그인/회원가입
      </HeaderLoginButton>
      {isPopup && (
        <Modal setPopup={setPopup}>
          <LogInWrapper>
            <LogInTitle>MOA에 오신것을 환영합니다.</LogInTitle>
            {isLogin ? <Login {...{ setLogin }} /> : <SignIn />}
          </LogInWrapper>
        </Modal>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  padding: 2rem 10rem;
  ${({ theme }) => theme.style.flexSpaceBetween}
`;

const HeaderLoginButton = styled.button``;

const LogInTitle = styled.span`
  display: block;
  margin-bottom: 2rem;
  font-size: 1.4rem;
  font-weight: 700;
`;

const LogInWrapper = styled.div`
  display: flex;
  padding: 1rem 4rem;
  flex-direction: column;
  width: 540px;
  height: 540px;
  justify-content: space-evenly;
  align-items: center;
`;
