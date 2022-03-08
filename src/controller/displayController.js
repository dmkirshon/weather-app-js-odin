import weatherReportView from "../layout/weatherReportView";
import searchBarView from "../layout/searchBarView";

const displayController = async () => {
  const weatherReport = await weatherReportView();
  const searchBar = searchBarView();

  const makeWeatherReport = () => {
    const weatherReportDiv = document.createElement("div");

    weatherReportDiv.classList = `weather-report ${weatherReport.getDayOrNightClass()}`;

    weatherReportDiv.append(
      weatherReport.makeLocationView(),
      weatherReport.makeWeatherView()
    );

    return weatherReportDiv;
  };

  const makeSearchBar = () => {
    const searchBarDiv = document.createElement("div");

    searchBarDiv.classList = "search-bar";

    const searchBarInput = searchBar.makeSearchBarInput();
    const searchBarButton = searchBar.makeSearchBarButton();

    // eslint-disable-next-line no-use-before-define
    searchBarButton.addEventListener("click", searchForCity);

    searchBarDiv.append(searchBarInput, searchBarButton);

    return searchBarDiv;
  };

  async function searchForCity() {
    const searchBarEntry = document.querySelector(".search-bar-input");

    const searchBarEntryValue = searchBarEntry.value;
    searchBarEntry.value = "";
    searchBarEntry.setCustomValidity("");
    try {
      await weatherReport.updateWeatherReportViewsToNewLocation(
        searchBarEntryValue
      );
    } catch (err) {
      searchBarEntry.setCustomValidity(
        "Search must be in the form of 'City', 'City, State' or 'City, Country'."
      );
      searchBarEntry.reportValidity();
    }

    const weatherReportDiv = document.querySelector(".weather-report");
    weatherReportDiv.classList = `weather-report ${weatherReport.getDayOrNightClass()}`;
  }

  return { makeWeatherReport, makeSearchBar };
};

export default displayController;
