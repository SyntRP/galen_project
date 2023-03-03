
this.Filter = $page("Filter Page", {
  Brands: "a[href='https://www.soulandtables.ae/brands-soul-and-tables']",
  // priceButton: "button[title='Price']",
  filterAs: function () {
    this.Brands.click();
    // Thread.sleep(3000)
    // this.priceButton.click();
  },
});
