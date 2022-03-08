import location from "./location";
import weather from "./weather";
import weatherAPI from "./weatherAPI";

const weatherReport = async () => {
  const weatherReportAPI = weatherAPI();
  let weatherReportData = await weatherReportAPI.fetchWeatherData();

  const getLocationData = () => location(weatherReportData);
  const getWeatherData = () => weather(weatherReportData);
  const fetchNewReportData = async (newLocation) => {
    weatherReportData = await weatherReportAPI.fetchWeatherData(newLocation);
  };

  return {
    getLocationData,
    getWeatherData,
    fetchNewReportData,
  };
};

export default weatherReport;
