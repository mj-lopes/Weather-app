import { createSlice } from "@reduxjs/toolkit";
import { fetchNextDayPrevision } from "./nextDaysPrevision";

const slice = createSlice({
  name: "previsaoDoDia",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    fetchError(state, action) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export default slice.reducer;

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchTodayPrevision = (pos) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&appid=${apiKey}&units=metric&lang=pt_br`,
    );

    if (!resp.ok) throw new Error(resp.message);

    const data = await resp.json();
    dispatch(fetchSuccess(data));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};

export const fetchCityData = (name) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric&lang=pt_br`,
    );
    if (!resp.ok) throw new Error(resp.message);

    const data = await resp.json();

    const location = {
      latitude: data.coord.lat,
      longitude: data.coord.lon,
    };

    dispatch(fetchNextDayPrevision(location));
    dispatch(fetchSuccess(data));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};
