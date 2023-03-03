const searchWord = readFile("config.json");

this.Search = $page("Search Page", {
  search: "input[name='q']",
  searchButton: "button[data-qa='srch-inpt-cls-btn']",
  searchAs: function () {
    this.search.typeText(JSON.parse(searchWord).SearchKeyWord);
    this.searchButton.click();
  },
});
