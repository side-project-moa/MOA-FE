import { MouseEvent } from 'react';
import styled from 'styled-components';
import CustomButton from './Button';
import LogInInput from './LogInInput';
import Modal from './Modal';

export default function Login() {
 const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {};
 return (
  <Modal>
   <LogInWrapper>
    <LogInInput placeholder={'이메일'} />
    <LogInInput placeholder={'비밀번호'} />
    <CustomButton text={'회원가입'} onClick={clickHandler} />
    <CustomButton text={'회원가입'} onClick={clickHandler} />
   </LogInWrapper>
  </Modal>
 );
}

const LogInWrapper = styled.div`
 display: flex;
 flex-direction: column;
`;
