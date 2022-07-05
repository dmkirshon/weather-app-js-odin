const searchBarView = () => {
  const makeSearchBarInput = () => {
    const searchBarInput = document.createElement("input");

    searchBarInput.setAttribute("type", "text");
    searchBarInput.setAttribute("placeholder", "Enter a city...");
    searchBarInput.classList = "search-bar-input";

    return searchBarInput;
  };

  const makeSearchBarButton = () => {
    const searchBarButton = document.createElement("button");

    searchBarButton.textContent = "▶️";
    searchBarButton.classList = "search-bar-button";

    return searchBarButton;
  };

  return { makeSearchBarInput, makeSearchBarButton };
};

export default searchBarView;
