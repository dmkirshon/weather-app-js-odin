import weatherReport from "../components/weatherReport";

const weatherReportView = async () => {
  const currentWeatherReport = await weatherReport();

  const getDayOrNightClass = () => {
    if (currentWeatherReport.getLocationData().isDayTime()) {
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

    const locationData = currentWeatherReport.getLocationData();
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

    const weatherData = currentWeatherReport.getWeatherData();
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

  return { makeLocationView, makeWeatherView, getDayOrNightClass };
};

export default weatherReportView;
