import styled from 'styled-components';

const CustomButton = ({
 text,
 onClick,
}: {
 text: string;
 onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
 return <StyledCreateButton onClick={onClick}>{text}</StyledCreateButton>;
};

export default CustomButton;

const StyledCreateButton = styled.button`
 border: none; 
 padding :1rem;
 background-color: ${({ theme }) => theme.color.darkGray};
 color: ${({ theme }) => theme.color.purple};
 font-weight: ${({ theme }) => theme.fontWeight.bold2};
 width: 15rem;
 border-radius: ${({ theme }) => theme.border.radius.S};
 margin-left: 1rem;
 &:hover {
  background-color: ${({ theme }) => theme.color.whiteMint};
 }
`;
 