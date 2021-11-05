import React from "react";
import styled from "styled-components";

export const Informer = () => {
  return (
    <Container>
      <h1>
        Esse aplicativo precisa ter acesso a sua localização para funcionar 🔅
      </h1>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: 700px;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 750px) {
    font-size: 2rem;
    max-width: 300px;
  }
`;
