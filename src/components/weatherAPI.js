const weatherAPI = () => {
  const weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";
  const weatherAPIKey = "&APPID=208b21302d488c8d05b182f275223ef7";
  const defaultLocation = "san jose";

  async function fetchWeatherData(weatherLocation = defaultLocation) {
    const weatherAPIResponse = await fetch(
      weatherURL + weatherLocation + weatherAPIKey
    );

    const weatherAPIJson = await weatherAPIResponse.json();

    return weatherAPIJson;
  }

  return { fetchWeatherData };
};

export default weatherAPI;
