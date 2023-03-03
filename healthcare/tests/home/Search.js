
this.Search = $page("Search Page", {
  searchButton: "div[data-qa-id='omni-suggestion-main']",
  // searchButton: html/body/,

  searchAs: function () {
    this.searchButton.click()


  },
});
