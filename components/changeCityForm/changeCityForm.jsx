import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { DETAILED_PAGE_URL } from '../../utils/constants';
import { getFormattedCityName } from '../../utils/helpers';

export const ChangeCityForm = ({ getForecast }) => {
  const router = useRouter();

  const [city, setCity] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!Boolean(city.trim()));
  }, [city]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await getForecast(city);
    if (response) {
      router.replace({
        pathname: DETAILED_PAGE_URL,
        query: { city: getFormattedCityName(city) },
      });
    }
  };

  const handleChangeCity = ({ target: { value } }) => {
    if (/^[a-z A-Z]+$/.test(value) || !value) {
      setCity(value);
    }
  };

  return (
    <form
      className="mb-[10px] flex flex-col sm:flex-row"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Budapest"
        value={city}
        className="w-full mb-[5px] py-[10px] px-[20px] text-white bg-blue-200 rounded-[5px] outline-none sm:mb-0 sm:rounded-r-[0]"
        onChange={handleChangeCity}
      />
      <button
        className="py-[6px] text-white font-semibold bg-blue-300 rounded-[5px] uppercase shrink-0 sm:rounded-r-[5px] sm:rounded-l-[0] sm:px-[10px]"
        type="submit"
        disabled={isDisabled}
      >
        Change active city
      </button>
    </form>
  );
};
