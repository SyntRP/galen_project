
this.ContinueView = $page("ContinueView Page", {
    continueView:"button[class='buttonPrimary buttonBig  lato-black button']",
    viewPriceAs: function () {
      this.continueView.click();
    },
  });
  