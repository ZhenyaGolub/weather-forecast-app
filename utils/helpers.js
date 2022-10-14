import moment from 'moment';

export const getNearestForecastModel = (forecast) => ({
  today: forecast.list[0],
  threeDays: forecast.list.filter(
    ({ dt_txt }) =>
      moment(dt_txt, 'YYYY-MM-DD hh:mm:ss').hour() === 12 &&
      !moment(dt_txt.split(' ')[0]).isSame(
        forecast.list[0].dt_txt.split(' ')[0]
      )
  ),
});

export const getFormattedCityName = (cityName) =>
  cityName.slice(0, 1).toUpperCase() + cityName.slice(1);
