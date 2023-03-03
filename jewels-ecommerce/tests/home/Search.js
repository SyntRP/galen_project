const searchWord = readFile("config.json");

this.Search = $page("Search Page", {
  search: "input[name='q']",
  searchButton: "button[type='submit']",
  searchAs: function () {
    this.search.typeText(JSON.parse(searchWord).SearchKeyWord);
    this.searchButton.click();
  },
});
