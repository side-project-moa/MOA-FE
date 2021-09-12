import styled from 'styled-components';
import CustomButton from '../Buttons/Button';
import LogInInput from './input/LogInInput';

export default function SignIn() {
  const clickHandler = (e: React.MouseEvent) => {};
  return (
    <>
      <EmailWrapper>
        <LogInInput placeholder={'이메일'} />
        <Btn onClick={clickHandler}> 중복확인 </Btn>
      </EmailWrapper>
      <LogInInput placeholder={'닉네임'} />
      <LogInInput placeholder={'비밀번호'} />
      <LogInInput placeholder={'비밀번호 확인'} />

      <CustomButton
        buttonSize={'LARGE'}
        buttonType={'INITIAL'}
        text={'회원가입'}
        onClick={clickHandler}
      />
    </>
  );
}

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
