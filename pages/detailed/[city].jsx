import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ChangeCityForm } from '../../components/changeCityForm/changeCityForm';
import { FiveDays } from '../../components/fiveDays/fiveDays';

import { change } from '../../store/currentLocationSlice';
import {
  setFiveDaysForecast,
  setIsLoading,
} from '../../store/fiveDaysWeatherForecast';
import { CURRENT_CITY_KEY } from '../../utils/constants';
import { getFormattedCityName } from '../../utils/helpers';
import { getWeatherForecastByCityName } from '../../utils/requests';

const Detailed = () => {
  const dispatch = useDispatch();
  const {
    query: { city },
  } = useRouter();

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (city) {
      getForecast(city);
    }
  }, [city]);

  const getForecast = async (cityName) => {
    try {
      dispatch(setIsLoading(true));
      const response = await getWeatherForecastByCityName(
        getFormattedCityName(cityName)
      );
      dispatch(setIsLoading(false));
      if ((response.cod = '200')) {
        dispatch(setFiveDaysForecast(response.list));
        sessionStorage.setItem(
          CURRENT_CITY_KEY,
          getFormattedCityName(cityName)
        );

        dispatch(change(getFormattedCityName(cityName)));
      }

      if (response.message !== 0) {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="h-full mt-[10px] flex flex-col md:mt-[20px]">
      <ChangeCityForm getForecast={getForecast} />
      <FiveDays isError={isError} />
    </div>
  );
};

export default Detailed;
