import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { NextDay } from "..";

export const NextDays = () => {
  const nextDays = useSelector((state) => state.nextDaysPrevision.data?.daily);

  if (!nextDays) return null;

  const slideConfigs = {
    arrows: false,
    slidesToShow: 4,
    infinite: false,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <Container>
      <Tittle>Próximos Dias</Tittle>
      <List>
        <Slider {...slideConfigs}>
          {nextDays.map((dia) => (
            <li key={`dt - ${dia.dt}`}>
              <NextDay dados={dia} />
            </li>
          ))}
        </Slider>
      </List>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

const List = styled.ul`
  margin-top: 1rem;
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
