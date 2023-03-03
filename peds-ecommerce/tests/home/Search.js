const searchWord = readFile("config.json");

this.Search = $page("Search Page", {
  search: "input[type='search']",
  searchButton: "button[type='submit']",
  searchAs: function () {
    this.search.typeText(JSON.parse(searchWord).SearchKeyWord);
    Thread.sleep(10000)
    this.searchButton.click();
  },
});
