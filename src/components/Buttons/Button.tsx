import { media } from '@src/config/utils/util';
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
  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'LARGE':
        return 'padding : 1rem; width: 340px;';
      case 'SMALL':
        return `padding : 0.5rem 3rem;`;
    }
  }};
${media.mobile} {
  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'LARGE':
        return 'padding : 1rem 6rem; width: auto;';
      case 'SMALL':
        return `padding : 0.5rem 2rem;`;
    }
  }};
}
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
  white-space: nowrap;
  font-size: 1.2rem;
  ${media.mobile} {
    font-size: 1rem;
  }
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
