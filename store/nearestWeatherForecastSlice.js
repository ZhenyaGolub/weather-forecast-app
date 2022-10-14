import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: { today: null, threeDays: [] },
};

export const nearestWeatherForecastSlice = createSlice({
  name: 'nearestWeatherForecast',
  initialState,
  reducers: {
    set(state, action) {
      state.data = action.payload;
    },
  },
});

export const { set } = nearestWeatherForecastSlice.actions;
