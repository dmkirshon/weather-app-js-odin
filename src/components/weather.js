const weather = (jsonAPI) => {
  const KELVIN_TO_CELSIUS = -273.15;

  const weatherDescription = jsonAPI.weather[0].description;
  const weatherIconValue = jsonAPI.weather[0].icon;
  const tempCelsius = Math.round(jsonAPI.main.temp + KELVIN_TO_CELSIUS);
  const percentHumidity = jsonAPI.main.humidity;
  const tempMinCelsius = Math.round(jsonAPI.main.temp_min + KELVIN_TO_CELSIUS);
  const tempMaxCelsius = Math.round(jsonAPI.main.temp_max + KELVIN_TO_CELSIUS);
  const windSpeed = jsonAPI.wind.speed;

  const getWeatherDescription = () => weatherDescription;
  const getWeatherIcon = (size = 2) =>
    `http://openweathermap.org/img/wn/${weatherIconValue}@${size}x.png`;
  const getTempCelsius = () => tempCelsius;
  const getHumidityPercentage = () => percentHumidity;
  const getTempMinCelsius = () => tempMinCelsius;
  const getTempMaxCelsius = () => tempMaxCelsius;
  const getWindSpeed = () => windSpeed;

  return {
    getWeatherDescription,
    getWeatherIcon,
    getTempCelsius,
    getHumidityPercentage,
    getTempMinCelsius,
    getTempMaxCelsius,
    getWindSpeed,
  };
};

export default weather;
