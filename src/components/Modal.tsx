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
 background-color: gray;
 justify-content: center;
 align-items: center;
`;

const ModalCover = styled.div`
 border-radius: 15px;
 background-color: white;
 padding: 1rem;
`;
