import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "localizacao",
  initialState: {
    lat: null,
    lon: null,
  },
  reducers: {
    setLocation(state, action) {
      state.lat = action.payload.latitude;
      state.lon = action.payload.longitude;
    },
  },
});

export default slice.reducer;
export const { setLocation } = slice.actions;
