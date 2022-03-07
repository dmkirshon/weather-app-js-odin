import weatherReport from "../components/weatherReport";

const weatherReportView = async () => {
  const currentWeatherReport = await weatherReport();

  const getDayOrNightClass = () => {
    if (currentWeatherReport.getLocationData().isDayTime()) {
      return ["black", "white"];
    }

    return ["white", "black"];
  };

  const makeLocationView = () => {
    const locationInfoDiv = document.createElement("div");
    const cityDiv = document.createElement("div");
    const timeDiv = document.createElement("div");
    const sunriseSunsetDiv = document.createElement("div");

    const locationData = currentWeatherReport.getLocationData();
    const currentCity = locationData.getCity();
    const currentCountry = locationData.getCountry();
    const currentTime = locationData.getLocalTime();
    const currentSunrise = locationData.getSunriseLocalTime();
    const currentSunset = locationData.getSunsetLocalTime();

    cityDiv.textContent = `${currentCity}, ${currentCountry}`;
    timeDiv.textContent = `${currentTime}`;
    sunriseSunsetDiv.textContent = `Sunrise: ${currentSunrise} Sunset:${currentSunset}`;

    locationInfoDiv.append(cityDiv, timeDiv, sunriseSunsetDiv);

    return locationInfoDiv;
  };

  const makeWeatherView = () => {
    const weatherInfoDiv = document.createElement("div");
    const weatherDescriptionDiv = document.createElement("div");
    const weatherIconImage = document.createElement("img");
    const weatherTempsDiv = document.createElement("div");
    const weatherMoreInfoDiv = document.createElement("div");

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

    weatherTempsDiv.textContent = `${temp}\u2103\n H${tempMin}/L${tempMax}`;
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
