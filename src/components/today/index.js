import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Today = () => {
  const previsionOnTodaysWeather = useSelector((state) => state);
  console.log(previsionOnTodaysWeather);

  return (
    <PrevisionToday>
      <Date>
        <Title>Hoje</Title>
        <Day>Dom, 2 Nov</Day>
      </Date>
    </PrevisionToday>
  );
};

const PrevisionToday = styled.div`
  max-width: 50vw;
  min-height: 20vh;
  margin: auto;

  background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
    linear-gradient(
      275.77deg,
      rgba(242, 251, 255, 0) 0%,
      rgba(242, 251, 255, 0.12) 100%
    );
  backdrop-filter: blur(20px);

  border-radius: 6px;
`;

const Date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  display: block;
  font-size: 2.5rem;
  padding: 1rem;
  font-weight: bold;
`;

const Day = styled.p`
  padding: 1rem;
  font-size: 1.5rem;
`;
