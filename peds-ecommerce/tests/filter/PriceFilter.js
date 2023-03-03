
this.PriceFilter = $page("PriceFilter Page", {
  priceButton: "input[data-term_name='&#8377;2,001.0 - &#8377;4,000.0']",
    filterAs: function () {
  
      this.priceButton.click();
  
    },
  });
  