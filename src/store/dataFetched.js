import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "dadosApi",
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

export const fetchData = (pos) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${pos.latitude}&lon=${pos.longitude}&exclude={hourly}&appid=${apiKey}
`,
    );
    const data = await resp.json();
    dispatch(fetchSuccess(data));
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};
