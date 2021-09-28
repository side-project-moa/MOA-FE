import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';

import { CgPlayPauseO, CgPlayPauseR } from 'react-icons/cg';
import qs from 'qs';
import useAxios from '@src/hook/useAxios';

export default function OAuth() {
  const location = useLocation();
  const history = useHistory();
  const res = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const url = 'git-oauth?code=' + res.code;
  const { isSuccess, data } = useAxios(true, url, 'get');

  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      localStorage.setItem('token', data.token);
      history.push('/');
    }
  });

  return (
    <Div>
      <Center></Center>
      <Circle></Circle>
      <Circle></Circle>
      <Line />
      <Fill />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  font-size: 3rem;
  div {
    position: absolute;
    z-index: -1;
    transform-origin: 50% 50%;
    &:nth-child(2) {
      animation-delay: 1.5s;
    }
  }
`;

const Line = styled(CgPlayPauseR)`
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  animation-delay: 10s;
  position: absolute;
  color: ${({ theme }) => theme.color.disableGray};
  animation: opacity infinite 6s ease-in-out 3s;
`;
const Fill = styled(CgPlayPauseO)`
  @keyframes opacity {
    0% {
      opacity: 1;
    }

    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  position: absolute;
  color: ${({ theme }) => theme.color.disableGray};
  animation: opacity infinite 6s ease-in;
`;

const Center = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.default};
`;

const Circle = styled.div`
  @keyframes scale {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0.2;
    }
  }
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: scale infinite 3s ease-in;
  background-color: ${({ theme }) => theme.color.default};
`;
