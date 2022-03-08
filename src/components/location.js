const location = (jsonAPI) => {
  const city = jsonAPI.name;
  const { country } = jsonAPI.sys;
  const localTimezone = jsonAPI.timezone;
  const timeUTC = jsonAPI.dt;
  const sunriseUTC = jsonAPI.sys.sunrise;
  const sunsetUTC = jsonAPI.sys.sunset;
  const timeZoneOffset = new Date().getTimezoneOffset() * 60;

  const getCity = () => city;
  const getCountry = () => country;
  const getLocalTime = () =>
    new Date((timeUTC + localTimezone) * 1000).toUTCString().replace("GMT", "");
  const getTimezone = () => localTimezone;
  const getSunriseLocalTime = () =>
    new Date(
      (sunriseUTC + timeZoneOffset + localTimezone) * 1000
    ).toLocaleTimeString();
  const getSunsetLocalTime = () =>
    new Date(
      (sunsetUTC + timeZoneOffset + localTimezone) * 1000
    ).toLocaleTimeString();
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
