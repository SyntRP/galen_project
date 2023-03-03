const searchWord = readFile("config.json");

this.Search = $page("Search Page", {
  search: "input[name='search']",
  searchButton: "button[class='pre-search-btn ripple']",
  // closeModel:"button[data-var='closeBtn']",

  searchAs: function () {
  
    this.search.typeText(JSON.parse(searchWord).SearchKeyWord);
    Thread.sleep(4000)
    this.searchButton.click(); 
    // this.closeModel.click();

  },
});
