import weatherReportView from "../layout/weatherReportView";

const displayController = async () => {
  const weatherReport = await weatherReportView();

  const makeWeatherReport = () => {
    const weatherReportDiv = document.createElement("div");

    weatherReportDiv.classList = `weather-report ${weatherReport.getDayOrNightClass()}`;

    weatherReportDiv.append(
      weatherReport.makeLocationView(),
      weatherReport.makeWeatherView()
    );

    return weatherReportDiv;
  };

  return { makeWeatherReport };
};

export default displayController;
