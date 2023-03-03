
this.HomePage = $page("Home Page", {
  // searchBox:"div[class='search-area']",
  // search: "input[name='q']",
  // searchButton: "button[type='submit']",
  cookies: "button[id='onetrust-accept-btn-handler']",

  homeAs: function () {
    // this.searchBox.click();
    // this.search.typeText(JSON.parse(searchWord).SearchKeyWord);
    this.cookies.click();
  },
});
