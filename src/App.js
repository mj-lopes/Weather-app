import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  Today,
  NextDays,
  Map,
  Loading,
  Informer,
  Search,
  Error,
  BackgroundAnimation,
} from "./components";
import { fetchNextDayPrevision } from "./store/nextDaysPrevision";
import { fetchTodayPrevision } from "./store/todayPrevision";

const App = () => {
  const dispatch = useDispatch();

  // Verifica se está carregando
  const loadingTodayPrevision = useSelector(
    ({ todayPrevision }) => todayPrevision.loading,
  );
  const loadingNextDaysPrevision = useSelector(
    ({ nextDaysPrevision }) => nextDaysPrevision.loading,
  );
  const isLoading = loadingTodayPrevision || loadingNextDaysPrevision;

  // Verifica se existe os dados puxados
  const dataToday = useSelector(({ todayPrevision }) => todayPrevision.data);
  const dataNextDays = useSelector(
    ({ nextDaysPrevision }) => nextDaysPrevision.data,
  );
  const hasDataFetched = dataToday && dataNextDays;

  // Verifica se existe algum erro
  const errorTodayInfo = useSelector(
    ({ todayPrevision }) => todayPrevision.error,
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch(fetchNextDayPrevision({ latitude, longitude }));
      dispatch(fetchTodayPrevision({ latitude, longitude }));
    });
  }, [dispatch]);

  if (!isLoading && !hasDataFetched) {
    return (
      <Container>
        <Informer />
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  function hasError() {
    if (errorTodayInfo) return <Error errorMessage={errorTodayInfo} />;
    return null;
  }

  return (
    <Container>
      <BackgroundAnimation />
      {hasError()}
      <Search />
      <Today />
      <NextDays />
      <Map />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  z-index: -10;
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
