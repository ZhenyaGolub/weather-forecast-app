import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { Loader } from '../loader/loader';

export const FiveDays = ({ isError }) => {
  const { list, isLoading } = useSelector(
    ({ fiveDaysWeatherForecast }) => fiveDaysWeatherForecast
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
    return (
      <div className="mb-[10px] h-full w-full flex justify-center items-center bg-sky-100">
        <Loader />
      </div>
    );
  } else if (isError) {
    return (
      <div className="mb-[10px] h-full w-full flex justify-center items-center bg-sky-100 text-center text-red-500">
        Make sure you enter an existing city
      </div>
    );
  } else {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-[10px] grid grid-cols-2 gap-[10px] py-[10px] px-[10px] bg-sky-100 grow rounded-[10px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xxl:grid-cols-7"
      >
        {list &&
          list.map(({ dt_txt, weather, main: { feels_like } }, index) => (
            <motion.div
              variants={containerItem}
              custom={index}
              key={index}
              className="flex flex-col justify-center py-[10px] px-[10px] bg-white rounded-[10px]"
            >
              <div className="flex justify-between text-[10px]">
                <div>{dt_txt.split(' ')[0]}</div>
                <div>{dt_txt.split(' ')[1]}</div>
              </div>
              <div className="flex justify-center">
                <Image
                  height="100%"
                  width="100%"
                  src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                  alt="Погода"
                />
              </div>
              <div className="text-center font-semibold">
                {Math.round(feels_like)}°C
              </div>
            </motion.div>
          ))}
      </motion.div>
    );
  }
};
