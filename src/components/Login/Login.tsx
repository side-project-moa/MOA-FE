import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../Buttons/Button';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import LogInInput from './input/LogInInput';

import OAuthButton from '../Buttons/OAuthButton';

const verifiedEmail = (text: string) => {
  const emailRule =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return emailRule.test(text);
};

const verifiedPassword = (text: string) => {
  const passwordRule = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/i;
  return passwordRule.test(text);
};

type inputStatType = {
  isCorrect: boolean;
  value: string;
};
type LogInStateType = {
  email: inputStatType;
  password: inputStatType;
};

type LogInPropsType = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Login({ setLogin }: LogInPropsType) {
  const initialLogInState = {
    email: {
      isCorrect: false,
      value: '',
    },
    password: {
      isCorrect: false,
      value: '',
    },
  };

  const [LogInState, setLogInState] =
    useState<LogInStateType>(initialLogInState);

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setLogin(false);
  };
  const handleLogInClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(LogInState);
  };

  const handleGitLogInClick = (e: MouseEvent<HTMLButtonElement>) => {
    window.location.href =
      'https://github.com/login/oauth/authorize?client_id=7f8c268c407297518728&redirect_url=http://localhost:3000/git-oauth';
  };

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogInState((state) => ({
      ...state,
      email: {
        isCorrect: verifiedEmail(e.target.value),
        value: e.target.value,
      },
    }));
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogInState((state) => ({
      ...state,
      password: {
        isCorrect: verifiedPassword(e.target.value),
        value: e.target.value,
      },
    }));
  };

  return (
    <>
      <LogInInput
        placeholder={'이메일'}
        onChange={handleEmailInputChange}
        isCorrect={LogInState.email.isCorrect}
        value={LogInState.email.value}
      />
      <LogInInput
        placeholder={'비밀번호'}
        onChange={handlePasswordInputChange}
        isCorrect={LogInState.password.isCorrect}
        value={LogInState.password.value}
      />

      <CustomButton
        buttonSize={'LARGE'}
        buttonType={'INITIAL'}
        text={'로그인'}
        onClick={handleLogInClick}
      />
      {/* <CustomButton
        buttonSize={'LARGE'}
        buttonType={'INITIAL'}
        text={'회원가입'}
        onClick={clickHandler}
      /> */}

      <LogInSubTitle>SNS 계정 간편 로그인</LogInSubTitle>

      <LoginButtons>
        <OAuthButton
          iconColor={'#ffff'}
          color={'#272E33'}
          icon={<FaGithub />}
          onClick={handleGitLogInClick}
        />
        <OAuthButton
          iconColor={'#272E33'}
          color={'#F9E000'}
          icon={<RiKakaoTalkFill />}
          onClick={clickHandler}
        />
      </LoginButtons>
    </>
  );
}

const LogInSubTitle = styled.span`
  display: block;
  margin-top: 0.5rem;
`;

const LoginButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;
