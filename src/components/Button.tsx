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
  background-color: ${({ theme }) => theme.color.default};
  color: ${({ theme }) => theme.color.white};
  width: 340px;
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.border.radius.S};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkYellow};
  }
`;
