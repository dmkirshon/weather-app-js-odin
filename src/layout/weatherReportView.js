import weatherReport from "../components/weatherReport";

const weatherReportView = async () => {
  const currentWeatherReport = await weatherReport();
  let locationData = currentWeatherReport.getLocationData();
  let weatherData = currentWeatherReport.getWeatherData();

  const getDayOrNightClass = () => {
    if (locationData.isDayTime()) {
      return "";
    }
    return "night-dark-mode";
  };

  const makeLocationView = () => {
    const locationInfoDiv = document.createElement("div");
    const cityDiv = document.createElement("div");
    const timeDiv = document.createElement("div");
    const sunriseSunsetDiv = document.createElement("div");

    locationInfoDiv.classList = "weather-report-location-info";
    cityDiv.classList = "weather-report-city";
    timeDiv.classList = "weather-report-time";
    sunriseSunsetDiv.classList = "weather-report-sunrise-sunset";

    const currentCity = locationData.getCity();
    const currentCountry = locationData.getCountry();
    const currentTime = locationData.getLocalTime();
    const currentSunrise = locationData.getSunriseLocalTime();
    const currentSunset = locationData.getSunsetLocalTime();

    cityDiv.textContent = `${currentCity}, ${currentCountry}`;
    timeDiv.textContent = `${currentTime}`;
    sunriseSunsetDiv.textContent = `Sunrise: ${currentSunrise}\nSunset: ${currentSunset}`;

    locationInfoDiv.append(timeDiv, cityDiv, sunriseSunsetDiv);

    return locationInfoDiv;
  };

  const makeWeatherView = () => {
    const weatherInfoDiv = document.createElement("div");
    const weatherDescriptionDiv = document.createElement("div");
    const weatherIconImage = document.createElement("img");
    const weatherTempsDiv = document.createElement("div");
    const weatherMoreInfoDiv = document.createElement("div");

    weatherInfoDiv.classList = "weather-report-weather-info";
    weatherDescriptionDiv.classList = "weather-report-weather-description";
    weatherIconImage.classList = "weather-report-weather-icon";
    weatherTempsDiv.classList = "weather-report-weather-temps";
    weatherMoreInfoDiv.classList = "weather-report-more-info";

    const weatherDescription = weatherData.getWeatherDescription();
    const weatherIcon = weatherData.getWeatherIcon();
    const temp = weatherData.getTempCelsius();
    const humidity = weatherData.getHumidityPercentage();
    const tempMin = weatherData.getTempMinCelsius();
    const tempMax = weatherData.getTempMaxCelsius();
    const windSpeed = weatherData.getWindSpeed();

    weatherIconImage.src = weatherIcon;
    weatherDescriptionDiv.append(weatherDescription, weatherIconImage);

    weatherTempsDiv.textContent = `${temp}\u2103\n H/L:${tempMax}/${tempMin}`;
    weatherMoreInfoDiv.textContent = `Humidity: ${humidity}% Wind: ${windSpeed}m/s`;

    weatherInfoDiv.append(
      weatherDescriptionDiv,
      weatherTempsDiv,
      weatherMoreInfoDiv
    );

    return weatherInfoDiv;
  };

  const updateWeatherReportViewsToNewLocation = async (newLocation) => {
    await currentWeatherReport.fetchNewReportData(newLocation);
    locationData = currentWeatherReport.getLocationData();
    weatherData = currentWeatherReport.getWeatherData();

    const currentCity = locationData.getCity();
    const currentCountry = locationData.getCountry();
    const currentTime = locationData.getLocalTime();
    const currentSunrise = locationData.getSunriseLocalTime();
    const currentSunset = locationData.getSunsetLocalTime();

    const weatherDescription = weatherData.getWeatherDescription();
    const weatherIcon = weatherData.getWeatherIcon();
    const temp = weatherData.getTempCelsius();
    const humidity = weatherData.getHumidityPercentage();
    const tempMin = weatherData.getTempMinCelsius();
    const tempMax = weatherData.getTempMaxCelsius();
    const windSpeed = weatherData.getWindSpeed();

    const cityDiv = document.querySelector(".weather-report-city");
    const timeDiv = document.querySelector(".weather-report-time");
    const sunriseSunsetDiv = document.querySelector(
      ".weather-report-sunrise-sunset"
    );

    cityDiv.textContent = `${currentCity}, ${currentCountry}`;
    timeDiv.textContent = `${currentTime}`;
    sunriseSunsetDiv.textContent = `Sunrise: ${currentSunrise}\nSunset: ${currentSunset}`;

    const weatherIconImage = document.querySelector(
      ".weather-report-weather-icon"
    );
    const weatherDescriptionDiv = document.querySelector(
      ".weather-report-weather-description"
    );
    const weatherTempsDiv = document.querySelector(
      ".weather-report-weather-temps"
    );
    const weatherMoreInfoDiv = document.querySelector(
      ".weather-report-more-info"
    );

    weatherIconImage.src = weatherIcon;
    weatherDescriptionDiv.replaceChildren(weatherDescription, weatherIconImage);

    weatherTempsDiv.textContent = `${temp}\u2103\n H/L:${tempMax}/${tempMin}`;
    weatherMoreInfoDiv.textContent = `Humidity: ${humidity}% Wind: ${windSpeed}m/s`;
  };

  return {
    makeLocationView,
    makeWeatherView,
    getDayOrNightClass,
    updateWeatherReportViewsToNewLocation,
  };
};

export default weatherReportView;
