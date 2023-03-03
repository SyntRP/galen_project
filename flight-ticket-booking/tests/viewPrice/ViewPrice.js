this.ViewPrice = $page("ViewPrice Page", {
  viewPrice:"button[class='ViewFareBtn  text-uppercase ']",
  viewPriceAs: function () {
    this.viewPrice.click();
  },
});
