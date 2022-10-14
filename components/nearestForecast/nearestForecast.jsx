import { CurrentWeather } from '../currentWeather/currentWeather';
import { ThreeDays } from '../threeDays/threeDays';

export const NearestForecast = ({ isError }) => {
  return (
    <div
      className={`flex flex-col ${
        isError &&
        'justify-center items-center text-[34px] text-center text-red-500'
      } mb-[10px] py-[10px] px-[10px] bg-sky-100 grow rounded-[10px] md:flex-row md:gap-x-[10px]`}
    >
      {isError ? (
        'An error occurred while getting the forecast'
      ) : (
        <>
          <CurrentWeather />
          <ThreeDays />
        </>
      )}
    </div>
  );
};
