
this.PriceFilter = $page("PriceFilter Page", {
    priceButton: "a[href='/s/che+guevara/_/N-5']",
    filterAs: function () {
  
      this.priceButton.click();
  
    },
  });
  