import { media } from '@src/config/utils/util';
import { useEffect, useState } from 'react';
import { TiTimes } from 'react-icons/ti';
import styled from 'styled-components';

export default function Modal({
  setPopup,
  children,
}: {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
  children?: JSX.Element | JSX.Element[];
}) {
  const [isOpen, setOpen] = useState(true);
  const handleClickOutside = (e: React.MouseEvent) => {
    setOpen(false);
  };
  useEffect(() => {
    if (isOpen === false) setTimeout(() => setPopup(false), 300);
  }, [isOpen, setPopup]);

  return (
    <ModalWrapper onMouseDown={handleClickOutside}>
      <ModalCover onMouseDown={(e) => e.stopPropagation()} {...{ isOpen }}>
        <ModalClose onClick={handleClickOutside} />
        {children}
      </ModalCover>
    </ModalWrapper>
  );
}
const ModalClose = styled(TiTimes)`
  display: none;
  position: absolute;
  top: 15px;
  right: 10px;
  font-size: 2rem;
  color: ${({ theme }) => theme.color.default};
  ${media.mobile} {
    display: block;
  }
`;
const ModalWrapper = styled.div`
  display: flex;
  z-index: 2;
  height: 100vh;
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const ModalCover = styled.div<{ isOpen: boolean }>`
  @keyframes modalUp {
    from {
      transform: translateY(-100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes modalDown {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-200px);
      opacity: 0;
    }
  }
  ${media.mobile} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
  position: relative;
  animation: ${({ isOpen }) =>
    isOpen ? `modalUp 0.3s ease-in-out` : `modalDown 0.6s ease-in-out`};
  border-radius: 15px;
  background-color: white;
  padding: 1rem;

  -webkit-box-shadow: 0px 0px 23px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 23px 10px rgba(0, 0, 0, 0.2);
`;
