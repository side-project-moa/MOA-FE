import { media } from '@src/config/utils/util';
import styled from 'styled-components';

export default function Logo() {
  return <LogoWrapper>MOA</LogoWrapper>;
}

const LogoWrapper = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.default};
  ${media.mobile} {
    font-size: 1.5rem;
  }
`;
