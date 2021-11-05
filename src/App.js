import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Today, NextDays, Map, Loading } from "./components";
import { fetchNextDayPrevision } from "./store/nextDaysPrevision";
import { fetchTodayPrevision } from "./store/todayPrevision";

const App = () => {
  const dispatch = useDispatch();
  const loadingTodayPrevision = useSelector(
    ({ todayPrevision }) => todayPrevision.loading,
  );
  const loadingNextDaysPrevision = useSelector(
    ({ nextDaysPrevision }) => nextDaysPrevision.loading,
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch(fetchNextDayPrevision({ latitude, longitude }));
      dispatch(fetchTodayPrevision({ latitude, longitude }));
    });
  }, [dispatch]);

  if (loadingTodayPrevision || loadingNextDaysPrevision) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <Today />
      <NextDays />
      <Map />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
