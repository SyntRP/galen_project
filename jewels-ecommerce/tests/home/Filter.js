
this.Filter = $page("Filter Page", {
  priceButton:  "li[data-label='$100 - $200']",
  // amount:"span[class='price']",
  filterAs: function () {
    this.priceButton.click();
    // this.amount.click();
  },
});
