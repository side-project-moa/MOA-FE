import styled from 'styled-components';

type CustomButtonType = {
  text: string | React.ReactNode;
  buttonType: 'INITIAL' | 'DISABLED';
  buttonSize: 'LARGE' | 'SMALL';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const CustomButton = ({
  text,
  buttonType,
  buttonSize,
  onClick,
}: CustomButtonType) => {
  return (
    <StyledCreateButton {...{ buttonSize, buttonType, onClick }}>
      {text}
    </StyledCreateButton>
  );
};

export default CustomButton;

type buttonType = Pick<CustomButtonType, 'buttonSize' | 'buttonType'>;

const StyledCreateButton = styled.button<buttonType>`
  padding: ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'LARGE':
        return '1rem';
      case 'SMALL':
        return `0.5rem`;
    }
  }};
  background-color: ${({ theme, buttonType }) => {
    switch (buttonType) {
      case 'INITIAL':
        return theme.color.default;
      case 'DISABLED':
        return theme.color.gray;
    }
  }};

  color: ${({ theme, buttonType }) => {
    switch (buttonType) {
      case 'INITIAL':
        return theme.color.white;
      case 'DISABLED':
        return theme.color.disableGray;
    }
  }};

  font-weight: 600;
  width: ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'LARGE':
        return '340px';
      case 'SMALL':
        return `240px`;
    }
  }};
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.border.radius.S};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  display: inline-block;
  outline: none;
  border: none;
  box-shadow: 2px 2px 4px #c8d0e7, -1px -1px 3px #fff;

  &:active {
    box-shadow: inset 1px 1px 3px #c8d0e7, inset -1px -1px 3px #fff;
  }

  &:hover {
    opacity: 0.8;
  }
`;
