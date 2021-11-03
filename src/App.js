import React, { useEffect } from "react";

import { Today } from "./components";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/dataFetched";
import styled from "styled-components";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch(fetchData({ latitude, longitude }));
    });
  }, [dispatch]);

  return (
    <Container>
      <Today />
    </Container>
  );
};

const Container = styled.main`
  width: 100vw;
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
