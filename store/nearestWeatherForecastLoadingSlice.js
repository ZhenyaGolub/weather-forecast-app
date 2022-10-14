import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isLoading: false,
};

export const nearestWeatherForecastLoadingSlice = createSlice({
  name: 'nearestWeatherForecastLoading',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = nearestWeatherForecastLoadingSlice.actions;
