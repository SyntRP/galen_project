const searchWord = readFile("config.json");

this.Search = $page("Search Page", {
  search: "input[id='gh-search-input']",
  searchButton: "button[title='submit search']",
  searchAs: function () {
    this.search.typeText(JSON.parse(searchWord).SearchKeyWord);
    this.searchButton.click();
  },
});
