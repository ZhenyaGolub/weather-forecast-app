import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { getWeatherForecastByCityName } from '../../utils/requests';
import { setLoading } from '../../store/nearestWeatherForecastLoadingSlice';

import { set } from '../../store/nearestWeatherForecastSlice';
import { change } from '../../store/currentLocationSlice';

import {
  getFormattedCityName,
  getNearestForecastModel,
} from '../../utils/helpers';
import { CURRENT_CITY_KEY } from '../../utils/constants';

import styles from './city.module.scss';

export const City = ({ name }) => {
  const dispatch = useDispatch();

  const changeActiveLocation = async (cityName) => {
    try {
      dispatch(setLoading(true));
      const response = await getWeatherForecastByCityName(cityName);
      dispatch(setLoading(false));
      if ((response.cod = '200')) {
        dispatch(set(getNearestForecastModel(response)));
        const formattedCityName = getFormattedCityName(cityName);

        dispatch(change(formattedCityName));

        sessionStorage.setItem(CURRENT_CITY_KEY, formattedCityName);
      }
    } catch (error) {}
  };

  return (
    <div
      className={classNames(
        styles[name],
        'w-full py-[10px] px-[10px] flex justify-center items-center h-[60px] bg-no-repeat bg-cover text-white text-[45px] rounded-[10px] font-semibold cursor-pointer md:h-[160px] md:text-[40px] lg:h-[200px] xl:h-[240px]'
      )}
      onClick={changeActiveLocation.bind(this, name)}
    >
      {name.toUpperCase()}
    </div>
  );
};
