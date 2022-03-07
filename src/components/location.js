const location = (jsonAPI) => {
  const city = jsonAPI.name;
  const { country } = jsonAPI.sys;
  const { timezone } = jsonAPI;
  const timeUTC = jsonAPI.dt;
  const sunriseUTC = jsonAPI.sys.sunrise;
  const sunsetUTC = jsonAPI.sys.sunset;

  const getCity = () => city;
  const getCountry = () => country;
  const getLocalTime = () => timeUTC + timezone;
  const getTimezone = () => timezone;
  const getSunriseLocalTime = () => sunriseUTC + timezone;
  const getSunsetLocalTime = () => sunsetUTC + timezone;
  // Use new Date(weatherAPIJson.sys.sunset * 1000) to convert from unix time

  const isDayTime = () => {
    if (timeUTC > sunriseUTC && timeUTC < sunsetUTC) {
      return true;
    }
    return false;
  };

  return {
    getCity,
    getCountry,
    getLocalTime,
    getTimezone,
    getSunriseLocalTime,
    getSunsetLocalTime,
    isDayTime,
  };
};

export default location;
