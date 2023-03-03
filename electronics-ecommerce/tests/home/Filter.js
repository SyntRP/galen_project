
this.Filter = $page("Filter Page", {
  cookies: "button[id='btn-cookie-allow']",
  priceButton: "dt[class='filter-options-title']",
  amount:"span[class='price']",
  filterAs: function () {
    var timeout = 10
    this.cookies.click();
    this.priceButton.click();
    timeout = timeout - 1
    this.amount.click();
  },
});
