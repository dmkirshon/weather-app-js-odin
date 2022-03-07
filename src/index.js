import displayController from "./controller/displayController";

async function loadCityView() {
  const reportViewDisplay = await displayController();

  document.body.appendChild(reportViewDisplay);
}

loadCityView();
