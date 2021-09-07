import styled from 'styled-components';

type OAuthButtonType = {
  iconColor: string;
  color: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function OAuthButton({
  iconColor,
  icon,
  onClick,
  color,
}: OAuthButtonType) {
  return (
    <StyledCreateButton {...{ iconColor, color, onClick }}>
      {icon}
    </StyledCreateButton>
  );
}

type StyleTypeButton = Pick<OAuthButtonType, 'color' | 'iconColor'>;

const StyledCreateButton = styled.button<StyleTypeButton>`
  ${({ theme }) => theme.style.flexCenter};
  height: 5rem;
  width: 5rem;
  font-size: 4rem;
  background-color: ${({ color }) => color};
  color: ${({ iconColor }) => iconColor};
  font-weight: ${({ theme }) => theme.fontWeight.bold2};
  border-radius: ${({ theme }) => theme.border.radius.S};
`;
