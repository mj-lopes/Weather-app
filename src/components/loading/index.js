import React from "react";
import styled, { keyframes } from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <img src="/asserts/svgs/01.svg" alt="" />
    </Container>
  );
};

const animeLoading = keyframes`
  0% {    
     transform: rotate(0deg);
  }
  100% {    
     transform: rotate(360deg);
  }
`;

const Container = styled.div`
  margin: auto;

  & img {
    animation: ${animeLoading} 3s linear infinite;
  }
`;
