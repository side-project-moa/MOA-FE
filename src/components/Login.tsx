import { ChangeEvent, MouseEvent } from 'react';
import styled from 'styled-components';
import CustomButton from './Button';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import LogInInput from './LogInInput';
import Modal from './Modal';
import OAuthButton from './OAuthButton';

export default function Login() {
 const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {};
 const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {};
 return (
  <Modal>
   <LogInWrapper>
    <LogInTitle>MOA에 오신것을 환영합니다.</LogInTitle>
    <LogInInput placeholder={'이메일'} onchange={changeHandler} />
    <LogInInput placeholder={'비밀번호'} onchange={changeHandler} />

    <CustomButton text={'로그인'} onClick={clickHandler} />
    <CustomButton text={'회원가입'} onClick={clickHandler} />
    <LogInSubTitle>SNS 계정 간편 로그인</LogInSubTitle>
    <LoginButtons>
     <OAuthButton
      iconColor={'#ffff'}
      color={'#272E33'}
      icon={<FaGithub />}
      onClick={clickHandler}
     />
     <OAuthButton
      iconColor={'#272E33'}
      color={'#F9E000'}
      icon={<RiKakaoTalkFill />}
      onClick={clickHandler}
     />
    </LoginButtons>
   </LogInWrapper>
  </Modal>
 );
}

const LogInSubTitle = styled.span`
 display: block;
 margin-top: 0.5rem;
`;

const LoginButtons = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-around;
`;
const LogInTitle = styled.span`
 display: block;
 margin-bottom: 2rem;
 font-size: 1.4rem;
 font-weight: 700;
`;

const LogInWrapper = styled.div`
 display: flex;
 padding: 1rem;
 flex-direction: column;
 width: 540px;
 height: 540px;
 justify-content: space-evenly;
 align-items: center;
`;
