import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { Today, NextDays, Map } from "./components";
import { fetchNextDayPrevision } from "./store/nextDaysPrevision";
import { fetchTodayPrevision } from "./store/todayPrevision";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch(fetchNextDayPrevision({ latitude, longitude }));
      dispatch(fetchTodayPrevision({ latitude, longitude }));
    });
  }, [dispatch]);

  return (
    <Container>
      <Today />
      <NextDays />
      <Map />
    </Container>
  );
};

const Container = styled.main`
  min-height: 100vh;
  padding-top: 2rem;
  background: radial-gradient(
    circle at 50% 50%,
    #18bbdd,
    #00b4de,
    #00addf,
    #00a6df,
    #009fde,
    #1197dc
  );
`;

export default App;
