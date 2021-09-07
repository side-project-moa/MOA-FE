import styled from 'styled-components';

export default function Modal({
  children,
}: {
  children?: JSX.Element | JSX.Element[];
}) {
  return (
    <ModalWrapper>
      <ModalCover>{children}</ModalCover>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: fixed;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
`;

const ModalCover = styled.div`
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

  animation: srr 0.3s ease-in-out;
  border-radius: 15px;
  background-color: white;
  padding: 1rem;
  -webkit-box-shadow: 0px 0px 23px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 23px 10px rgba(0, 0, 0, 0.2);
`;
