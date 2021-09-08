import { useEffect, useState } from 'react';
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
    if (e.target !== e.currentTarget) return;
    setOpen(false);
    console.log('clicked outside');
  };
  useEffect(() => {
    if (isOpen === false) setTimeout(() => setPopup(false), 300);
  }, [isOpen]);

  return (
    <ModalWrapper onClick={handleClickOutside}>
      <ModalCover onClick={(e) => e.stopPropagation()} {...{ isOpen }}>
        {children}
      </ModalCover>
    </ModalWrapper>
  );
}

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
  @keyframes srr {
    from {
      transform: translateY(-100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes suu {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-200px);
      opacity: 0;
    }
  }

  animation: ${({ isOpen }) =>
    isOpen ? `srr 0.3s ease-in-out` : `suu 0.6s ease-in-out`};
  border-radius: 15px;
  background-color: white;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 23px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 23px 10px rgba(0, 0, 0, 0.2);
`;
