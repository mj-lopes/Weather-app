import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { NextDay } from "..";

export const NextDays = () => {
  const nextDays = useSelector((state) => state.nextDaysPrevision.data?.daily);

  if (!nextDays) return null;

  return (
    <Container>
      <Tittle>Próximos Dias</Tittle>
      <List>
        {nextDays.map((dia) => (
          <li key={`dt - ${dia.dt}`}>
            <NextDay dados={dia} />
          </li>
        ))}
      </List>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

const List = styled.ul`
  display: flex;
  gap: 1rem;
  padding-left: 1rem;
  margin-top: 1rem;

  overflow-x: hidden;
`;

const Tittle = styled.h2`
  padding-left: 1rem;

  font-size: 2rem;

  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 60px;
    margin-top: 4px;

    background: #ffc700;
    border-radius: 4px;

    transition: 0.3s;
  }

  ${Container}:hover &::after {
    width: 120px;
  }
`;
