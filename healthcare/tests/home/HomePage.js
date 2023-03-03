
// const searchLocation = readFile("config.json");
const searchDoctor = readFile("config.json");

this.HomePage = $page("Home Page", {
  searchLocation:"input[data-qa-id='omni-searchbox-locality']",
  search: "input[data-input-box-id='omni-searchbox-keyword']",

  homeAs: function () {
    this.searchLocation.clear();
    Thread.sleep(2000)
    this.searchLocation.typeText("Coimbatore");
    Thread.sleep(2000)
    this.searchLocation.click();
    Thread.sleep(2000)
    this.search.typeText(JSON.parse(searchDoctor).searchDoctor);
    Thread.sleep(2000)
  },

});
