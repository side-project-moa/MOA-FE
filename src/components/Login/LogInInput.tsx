import { useEffect } from 'react';
import styled from 'styled-components';

interface InputType {
 placeholder: string;
 onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
 value?: string;
 isCorrect: boolean;
}

export default function LogInInput({
 placeholder,
 onChange,
 value,
 isCorrect,
}: InputType) {
if (placeholder === '비밀번호') return <LogInInputWrapper type="password" {...{ isCorrect, placeholder, onChange, value }} />;
 return <LogInInputWrapper {...{ isCorrect, placeholder, onChange, value }} />;
}

type LogInInputType = Pick<InputType, 'isCorrect'>;

const LogInInputWrapper = styled.input<LogInInputType>`
 margin-bottom: 0.5rem;
 padding: 1rem;
 font-size: 1.2rem;
 width: 340px;
 border: none;
 ${({ isCorrect }) => {
  return !isCorrect
   ? `border: none; border-bottom: 3px #f1f1f1 solid;`
   : `border: none; border-bottom: 3px #2978b5 solid;
 background: rgba(223, 46, 46,0.1);`;
 }}

 transition: 0.3s ease-in-out;

 background-color: #f1f1f1;
 border-radius: 5px;
`;
