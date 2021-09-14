import { verifiedEmail, verifiedPassword } from '@src/config/utils/util';
import { useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../Buttons/Button';
import LogInInput from './input/LogInInput';
import PasswordInput from './input/PasswordInput';

export default function SignIn() {
  type inputType = {
    isCorrect: boolean;
    value: string;
  };
  const initialState = {
    isCorrect: true,
    value: '',
  };
  const [isUniqueEmail, setUniqueEmail] = useState(true);
  //const [isConfirmationPassword, setUniqueEmail] = useState(true);

  const [email, setEmail] = useState<inputType>(initialState);
  const [nickname, setNickname] = useState<inputType>(initialState);
  const [password, setPassword] = useState<inputType>(initialState);
  const [confirmationPassword, setConfirmationPassword] =
    useState<inputType>(initialState);

  const clickHandler = (e: React.MouseEvent) => {
    if (email.isCorrect) {
    }
  };
  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({
      isCorrect: verifiedEmail(e.target.value),
      value: e.target.value,
    });
  };
  const handleNicknameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNickname({
      isCorrect: verifiedEmail(e.target.value),
      value: e.target.value,
    });
  };
  const handlePasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPassword({
      isCorrect: verifiedPassword(e.target.value),
      value: e.target.value,
    });
  };
  const verifiedConfirm = (text: string, password: string) => password === text;

  const handleConfirmPasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmationPassword({
      isCorrect: verifiedConfirm(e.target.value, password.value),
      value: e.target.value,
    });
  };

  return (
    <>
      <EmailWrapper>
        <LogInInput
          placeholder={'이메일'}
          onChange={handleEmailInputChange}
          isCorrect={email.isCorrect}
          value={email.value}
        />
        <Btn onClick={clickHandler}> 중복확인 </Btn>
      </EmailWrapper>
      {!isUniqueEmail && (
        <EmailWarning>이미 존재하는 이메일 입니다!</EmailWarning>
      )}
      <LogInInput
        placeholder={'닉네임'}
        onChange={handleNicknameInputChange}
        isCorrect={nickname.isCorrect}
        value={nickname.value}
      />
      <PasswordInput
        placeholder={'비밀번호'}
        onChange={handlePasswordInputChange}
        isCorrect={password.isCorrect}
        value={password.value}
      />
      <PasswordInput
        placeholder={'비밀번호 확인'}
        onChange={handleConfirmPasswordInputChange}
        isCorrect={confirmationPassword.isCorrect}
        value={confirmationPassword.value}
      />
      {!confirmationPassword.isCorrect && (
        <EmailWarning>비밀번호가 일치하지 않습니다.</EmailWarning>
      )}
      <CustomButton
        buttonSize={'LARGE'}
        buttonType={'INITIAL'}
        text={'회원가입'}
        onClick={clickHandler}
      />
    </>
  );
}

const EmailWarning = styled.div`
  color: #ff4848;
  font-size: 1rem;
  text-align: start;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled.button`
  color: white;
  width: 8rem;
  height: 2.5rem;
  background-color: #ff4848;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.border.radius.S};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-left: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.color.darkYellow};
  }
`;
