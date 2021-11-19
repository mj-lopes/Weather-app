import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

export const Error = ({ errorMessage }) => {
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  if (timer >= 0) {
    return (
      <Container>
        <p>Ocorreu um error: {errorMessage}.</p>
      </Container>
    );
  } else {
    return null;
  }
};
const animation = keyframes`
  0%, 100% {
    transform: translateY(-150px);
  }
  10% {
    transform: translateY(6px);
  }
  15%, 80% {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  width: 280px;
  padding: 1rem;
  z-index: 100;

  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;

  text-align: center;
  font-size: 1rem;

  background: #ff000080;
  backdrop-filter: blur(20px);

  border: 3px solid #ff000060;
  border-radius: 4px;

  animation: ${animation} 10s forwards;
`;
