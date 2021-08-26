import styled from 'styled-components';

interface InputType {
 placeholder: string;
 onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LogInInput({ placeholder }: InputType) {
 return <LogInInputWrapper {...{ placeholder, onchange }} />;
}

const LogInInputWrapper = styled.input`
 margin-bottom: 0.5rem;
 padding: 1rem;
 width: 340px;
 background-color: #f1f1f1;
 border-radius: 5px;
 border: none;
`;
