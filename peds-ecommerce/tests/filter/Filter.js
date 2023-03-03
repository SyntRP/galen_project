this.Filter = $page("Filter Page", {
  category: "input[data-term_name='Dry Dog Food']",
  // priceButton: "input[data-term_name='&#8377;2,001.0 - &#8377;4,000.0']",
  filterAs: function () {
    this.category.click();
    Thread.sleep(6000);
    // this.priceButton.click();
  },
});
