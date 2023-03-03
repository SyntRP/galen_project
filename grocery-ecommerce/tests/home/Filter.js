
this.Filter = $page("Filter Page", {
  // cookies: "button[id='btn-cookie-allow']",
  brand: "label[for='facet-brand-Signature-SELECT']",
  // amount: "label[for='facet-price-$5-to-$9.99']",
  sort: "button[id='sortDropdown']",
  // amount:"span[class='price']",
  filterAs: function () {
    // var timeout = 10
    // this.cookies.click();
    this.brand.click();
    Thread.sleep(5000)
    // timeout = timeout - 1
    // this.amount.click();
    // Thread.sleep(5000)
    this.sort.click();
  },
});
