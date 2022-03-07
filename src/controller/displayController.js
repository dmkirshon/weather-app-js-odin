import weatherReportView from "../layout/weatherReportView";

const displayController = async () => {
  const weatherReport = await weatherReportView();

  const weatherReportDiv = document.createElement("div");

  weatherReportDiv.append(
    weatherReport.makeLocationView(),
    weatherReport.makeWeatherView()
  );

  weatherReportDiv.style.backgroundColor =
    weatherReport.getDayOrNightClass()[1];
  weatherReportDiv.style.color = weatherReport.getDayOrNightClass()[0];

  return weatherReportDiv;
};

export default displayController;
