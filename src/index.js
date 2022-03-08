import displayController from "./controller/displayController";
// eslint-disable-next-line no-unused-vars
import css from "./style.css";

async function loadCityView() {
  const displayViews = await displayController();

  document.body.appendChild(displayViews.makeWeatherReport());
}

loadCityView();
