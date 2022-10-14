export const getUserWeatherForecast = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const weather = await response.json();

  return weather;
};

export const getWeatherForecastByCityName = async (cityName) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const weather = await response.json();

  return weather;
};
