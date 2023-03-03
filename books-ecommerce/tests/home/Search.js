const searchWord = readFile("config.json");

this.Search = $page("Search Page", {
  search: "input[placeholder='Search by Title, Author, Keyword or ISBN']",
  searchButton: "button[class='btn btn-outline-secondary rhf-search-btn']",
  searchAs: function () {
    this.search.typeText(JSON.parse(searchWord).SearchKeyWord);
    this.searchButton.click();
  },
});
