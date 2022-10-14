import { createSlice } from '@reduxjs/toolkit';

export const initialState = { list: [], isLoading: false };

export const fiveDaysWeatherForecastSlice = createSlice({
  name: 'fiveDaysWeatherForecast',
  initialState,
  reducers: {
    setFiveDaysForecast(state, action) {
      state.list = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setFiveDaysForecast, setIsLoading } =
  fiveDaysWeatherForecastSlice.actions;
