const location = (jsonAPI) => {
  const city = jsonAPI.name;
  const { country } = jsonAPI.sys;
  const { timezone } = jsonAPI;
  const timeUTC = jsonAPI.dt;
  const sunriseUTC = jsonAPI.sys.sunrise;
  const sunsetUTC = jsonAPI.sys.sunset;

  const getCity = () => city;
  const getCountry = () => country;
  const getLocalTime = () => new Date((timeUTC + timezone) * 1000);
  const getTimezone = () => timezone;
  const getSunriseLocalTime = () => new Date((sunriseUTC + timezone) * 1000);
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
