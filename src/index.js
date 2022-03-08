import displayController from "./controller/displayController";
// eslint-disable-next-line no-unused-vars
import css from "./style.css";

async function loadWeatherPage() {
  const displayViews = await displayController();
  const weatherReport = displayViews.makeWeatherReport();
  const searchBar = displayViews.makeSearchBar();

  document.body.appendChild(weatherReport);
  document.body.appendChild(searchBar);
}

loadWeatherPage();
