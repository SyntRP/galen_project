
this.PriceSort = $page("PriceSort Page", {
    Priceselect: "li[data-qa-id='experience_years']",
    sortAs: function () {
      this.Priceselect.click();

    },
  });
  