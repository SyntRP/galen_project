
this.HomePage = $page("Home Page", {
  searchBox:"a[class='us-link']",


  homeAs: function () {
    this.searchBox.click();
  },
});
