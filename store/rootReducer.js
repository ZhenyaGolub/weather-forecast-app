import { currentLocationSlice } from './currentLocationSlice';
import { nearestWeatherForecastSlice } from './nearestWeatherForecastSlice';
import { nearestWeatherForecastLoadingSlice } from './nearestWeatherForecastLoadingSlice';
import { fiveDaysWeatherForecastSlice } from './fiveDaysWeatherForecast';

export const rootReducer = {
  nearestWeatherForecast: nearestWeatherForecastSlice.reducer,
  currentLocation: currentLocationSlice.reducer,
  nearestWeatherForecastLoading: nearestWeatherForecastLoadingSlice.reducer,
  fiveDaysWeatherForecast: fiveDaysWeatherForecastSlice.reducer,
};
