this.Travellers = $page("Travellers Page", {
  selectAdult: "li[data-cy='adults-2']",
  selectChildren: "li[data-cy='children-2']",
  apply: "button[data-cy='travellerApplyBtn']",
  search: "p[data-cy='submit']",

  travellersAs: function () {
    this.selectAdult.click();
    Thread.sleep(2000);
    this.selectChildren.click();
    Thread.sleep(2000);
    this.apply.click();
  },
  searchAs: function () {
    this.search.click();
  },
});
