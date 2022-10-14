import { CURRENT_CITY_KEY, DEFAULT_CURRENT_LOCATION } from './constants';
import {
  getUserWeatherForecast,
  getWeatherForecastByCityName,
} from './requests';
import { store } from '../store/store';
import { change } from '../store/currentLocationSlice';

export const getUserWeather = async () => {
  let result;

  const isPermissionRequested = sessionStorage.getItem('isPermissionRequested');

  if (document.readyState === 'complete' && !isPermissionRequested) {
    const gettingUserWeatherResult = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          sessionStorage.setItem('isPermissionRequested', 'true');
          try {
            const response = await getUserWeatherForecast(latitude, longitude);

            sessionStorage.setItem(CURRENT_CITY_KEY, response.city.name);

            store.dispatch(change(response.city.name));

            resolve(response);
          } catch (error) {
            reject(error);
          }
        },
        async () => {
          sessionStorage.setItem('isPermissionRequested', 'true');
          sessionStorage.setItem(CURRENT_CITY_KEY, DEFAULT_CURRENT_LOCATION);
          try {
            const response = await getWeatherForecastByCityName(
              DEFAULT_CURRENT_LOCATION
            );

            resolve(response);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
    result = gettingUserWeatherResult;
  } else {
    const locationWeatherForecast = await new Promise(
      async (resolve, reject) => {
        try {
          const currentLocation = sessionStorage.getItem(CURRENT_CITY_KEY);
          const response = await getWeatherForecastByCityName(currentLocation);
          store.dispatch(change(currentLocation));
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }
    );
    result = locationWeatherForecast;
  }
  return result;
};
