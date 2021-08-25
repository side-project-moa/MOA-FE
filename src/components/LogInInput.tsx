import styled from 'styled-components';

interface InputType {
 placeholder: string;
}

export default function LogInInput({ placeholder }: InputType) {
 return <LogInInputWrapper {...{ placeholder }} />;
}

const LogInInputWrapper = styled.input`
 margin-top: 1rem;
 padding: 1rem;
 background-color: #f1f1f1;
 border-radius: 5px;
 border: none;
`;
