
this.Filter = $page("Filter Page", {
  Men: "a[aria-label='Filter for Men']",
  Color: "button[aria-label='Filter for Grey']",
  sort: "button[aria-label='Sort By']",

  filterAs: function () {
    this.Men.click();
    Thread.sleep(4000);
    this.Color.click();
    Thread.sleep(4000);
    this.sort.click();
  },
});
