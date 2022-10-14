import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_CURRENT_LOCATION } from '../utils/constants';

export const initialState = {
  currentLocation: DEFAULT_CURRENT_LOCATION,
};

export const currentLocationSlice = createSlice({
  name: 'currentLocation',
  initialState,
  reducers: {
    change(state, action) {
      state.currentLocation = action.payload;
    },
  },
});

export const { change } = currentLocationSlice.actions;
