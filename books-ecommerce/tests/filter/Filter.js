
this.Filter = $page("Filter Page", {
  // cookies: "button[aria-label='Close']",
  productType: "span[data-target='#sidebar-section-0']",
  subjects: "span[data-target='#sidebar-section-1']",
  priceButton1: "span[data-target='#sidebar-section-2']",
  filterAs: function () {

    // this.cookies.click();
    // Thread.sleep(3000)
    this.productType.click();
    Thread.sleep(3000)
    this.subjects.click();
    Thread.sleep(3000)
    this.priceButton1.click();

  },
});
