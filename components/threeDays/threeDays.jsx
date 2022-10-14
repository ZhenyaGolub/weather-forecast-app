import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { Loader } from '../loader/loader';

export const ThreeDays = () => {
  const weatherData = useSelector(
    ({
      nearestWeatherForecast: {
        data: { threeDays },
      },
    }) => threeDays
  );

  const isLoading = useSelector(
    ({ nearestWeatherForecastLoading: { isLoading } }) => isLoading
  );

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.5,
      },
    },
  };

  const containerItem = {
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0, scale: 0 },
  };

  if (isLoading) {
    return <Loader />;
  }

  if (weatherData.length) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-x-[10px] grow"
      >
        {weatherData.map(({ dt_txt, weather, main: { feels_like } }, index) => {
          if (index === 0 || index === 1 || index === 2) {
            return (
              <motion.div
                variants={containerItem}
                custom={index}
                className="w-4/12 py-[10px] px-[10px] flex flex-col justify-center items-center bg-white rounded-[10px]"
                key={index}
              >
                <div className="text-[10px] font-extralight md:text-[15px]">
                  {dt_txt.split(' ')[0]}
                </div>
                <Image
                  src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                  alt="Погода"
                  width="100%"
                  height="100%"
                />
                <div className="text-[12px] font-semibold md:text-[20px]">
                  {Math.round(feels_like)}°C
                </div>
              </motion.div>
            );
          }
        })}
      </motion.div>
    );
  }
};
