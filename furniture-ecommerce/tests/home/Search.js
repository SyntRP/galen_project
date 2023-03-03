
this.Search = $page("Search Page", {
  search: "li[class=' level0 nav-2 level-top menu-style-group parent parent']",
  // searchButton: "button[type='submit']",
  searchAs: function () {
    // this.search.hover();
    // Thread.sleep(2000)
    this.search.click();
    Thread.sleep(2000)
    this.search.click();

  },
});
