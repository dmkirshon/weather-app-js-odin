import location from "./location";
import weather from "./weather";
import weatherAPI from "./weatherAPI";

const weatherReport = async () => {
  const weatherReportData = await weatherAPI().fetchWeatherData();
  const locationData = location(weatherReportData);
  const weatherData = weather(weatherReportData);

  const getLocationData = () => locationData;
  const getWeatherData = () => weatherData;

  return {
    getLocationData,
    getWeatherData,
  };
};

export default weatherReport;
