import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { Loader } from '../loader/loader';

export const CurrentWeather = () => {
  const weatherData = useSelector(
    ({
      nearestWeatherForecast: {
        data: { today },
      },
      currentLocation: { currentLocation },
    }) => ({
      today,
      currentLocation,
    })
  );

  const isLoading = useSelector(
    ({ nearestWeatherForecastLoading: { isLoading } }) => isLoading
  );

  if (isLoading) {
    return (
      <div className="mb-[10px] flex flex-col justify-center items-center py-[10px] px-[10px] md:w-2/6 md:mb-0">
        <Loader />
      </div>
    );
  }

  if (weatherData.today) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-[10px] flex flex-col justify-center items-center py-[10px] px-[10px] bg-white rounded-[10px] md:w-2/6 md:mb-0"
      >
        <div className="self-start font-semibold md:self-center md:text-[20px] xl:text-[25px]">
          {weatherData?.currentLocation}
        </div>
        <div className="self-start font-extralight md:self-center md:text-[18px]">
          {weatherData?.today?.dt_txt?.split(' ')[0]}
        </div>
        <Image
          src={`http://openweathermap.org/img/wn/${weatherData?.today?.weather[0]?.icon}@2x.png`}
          width={150}
          height={150}
          alt="Погода"
        />
        <div className="font-semibold text-[25px]">
          {Math.round(weatherData?.today?.main?.feels_like)}°C
        </div>
      </motion.div>
    );
  }
};
