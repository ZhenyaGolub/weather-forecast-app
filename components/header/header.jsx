import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../container/container';
import { Icon } from '../icon/icon';

import {
  CURRENT_CITY_KEY,
  DEFAULT_CURRENT_LOCATION,
  DETAILED_PAGE_URL,
  MAIN_PAGE_URL,
} from '../../utils/constants';

export const Header = () => {
  const activeLocation = useSelector(
    ({ currentLocation: { currentLocation } }) => currentLocation
  );

  const [queryCity, setqueryCity] = useState(DEFAULT_CURRENT_LOCATION);

  useEffect(() => {
    setqueryCity(
      sessionStorage.getItem(CURRENT_CITY_KEY) || DEFAULT_CURRENT_LOCATION
    );
  }, [activeLocation]);

  return (
    <header className="bg-yellow-400">
      <Container>
        <div className="py-[7px] flex justify-between items-center">
          <div className="flex items-center">
            <Link href={MAIN_PAGE_URL}>
              <a className="sm:mr-[20px]">
                <Icon name="home" className="fill-white w-[45px]" />
              </a>
            </Link>
            <Link
              href={{
                pathname: DETAILED_PAGE_URL,
                query: {
                  city: queryCity,
                },
              }}
            >
              <a>
                <Icon name="detailed" className="fill-white w-[55px]" />
              </a>
            </Link>
          </div>
          <div className="px-[15px] py-[5px] bg-white flex items-center rounded-[15px] xl:px-[30px] xl:py-[10px]">
            <div className="mr-[5px] text-gray-500 font-medium xl:text-[20px]">
              Location:
            </div>
            <div className="font-medium text-gray-500 underline xl:text-[20px]">
              {activeLocation}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
