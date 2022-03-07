const weather = (jsonAPI) => {
  const KELVIN_TO_CELSIUS = -273.15;

  const weatherDescription = jsonAPI.weather.description;
  const weatherIconValue = jsonAPI.weather.icon;
  const currentTempCelsius = jsonAPI.main.temp + KELVIN_TO_CELSIUS;
  const currentHumidity = jsonAPI.main.humidity;
  const tempMinCelsius = jsonAPI.main.temp_min + KELVIN_TO_CELSIUS;
  const tempMaxCelsius = jsonAPI.main.temp_max + KELVIN_TO_CELSIUS;
  const windSpeed = jsonAPI.wind.speed;

  const getWeatherDescription = () => weatherDescription;
  const getWeatherIcon = (size = 2) =>
    `http://openweathermap.org/img/wn/${weatherIconValue}@${size}x.png`;
  const getCurrentTempCelsius = () => currentTempCelsius;
  const getCurrentHumidity = () => currentHumidity;
  const getTempMinCelsius = () => tempMinCelsius;
  const getTempMaxCelsius = () => tempMaxCelsius;
  const getWindSpeed = () => windSpeed;

  return {
    getWeatherDescription,
    getWeatherIcon,
    getCurrentTempCelsius,
    getCurrentHumidity,
    getTempMinCelsius,
    getTempMaxCelsius,
    getWindSpeed,
  };
};

export default weather;
