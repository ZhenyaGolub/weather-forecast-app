import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Cities } from '../components/cities/cities';
import { NearestForecast } from '../components/nearestForecast/nearestForecast';
import { setLoading } from '../store/nearestWeatherForecastLoadingSlice';
import { set } from '../store/nearestWeatherForecastSlice';

import { getUserWeather } from '../utils/getUserWeather';
import { getNearestForecastModel } from '../utils/helpers';

export default function Home() {
  const dispatch = useDispatch();

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getUserWeatherData();
  }, []);

  const getUserWeatherData = async () => {
    try {
      dispatch(setLoading(true));
      const weather = await getUserWeather();
      dispatch(setLoading(false));
      dispatch(set(getNearestForecastModel(weather)));
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Weather Forecast Application</title>
      </Head>
      <Cities />
      <NearestForecast isError={isError} />
    </>
  );
}
