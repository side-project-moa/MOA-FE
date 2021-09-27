import { ChangeEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../Buttons/Button';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import LogInInput from './input/LogInInput';

import OAuthButton from '../Buttons/OAuthButton';
import { verifyEmail, verifyPassword } from '@src/config/utils/util';
import PasswordInput from './input/PasswordInput';

type inputStateType = {
  isCorrect: boolean;
  value: string;
};
type LogInStateType = {
  email: inputStateType;
  password: inputStateType;
};

type LogInPropsType = {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Login({ setLogin }: LogInPropsType) {
  const initialLogInState = {
    email: {
      isCorrect: true,
      value: '',
    },
    password: {
      isCorrect: true,
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
        isCorrect: verifyEmail(e.target.value),
        value: e.target.value,
      },
    }));
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogInState((state) => ({
      ...state,
      password: {
        isCorrect: verifyPassword(e.target.value),
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
      <PasswordInput
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
