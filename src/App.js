import React, { useEffect } from "react";

import { Today } from "./components";
import { useDispatch } from "react-redux";
import { fetchData } from "./store/dataFetched";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      dispatch(fetchData({ latitude, longitude }));
    });
  }, [dispatch]);

  return (
    <main>
      <Today />
    </main>
  );
};

export default App;
