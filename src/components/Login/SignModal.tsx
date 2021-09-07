import { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import Login from './Login';
import SignIn from './SignIn';
export default function SignModal() {
  const [isLogin, setLogin] = useState(true);

  return (
    <Modal>
      <LogInWrapper>
        <LogInTitle>MOA에 오신것을 환영합니다.</LogInTitle>
        {isLogin ? <Login {...{ setLogin }} /> : <SignIn />}
      </LogInWrapper>
    </Modal>
  );
}

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
