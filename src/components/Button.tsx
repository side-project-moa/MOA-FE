import styled from 'styled-components';

const CustomButton = ({
 text,
 onClick,
}: {
 text: string | React.ReactNode;
 onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
 return <StyledCreateButton onClick={onClick}>{text}</StyledCreateButton>;
};

export default CustomButton;

const StyledCreateButton = styled.button`
 padding: 1rem;
 background-color: #8ab6d6;
 color: ${({ theme }) => theme.color.white};
 transition: ease-in-out 0.3s;
 width: 340px;

 border-radius: ${({ theme }) => theme.border.radius.S};

 &:hover {
  background-color: #2978b5;
 }
`;
