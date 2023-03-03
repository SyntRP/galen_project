
this.AvailabilityFilter = $page("AvailabilityFilter Page", {

  availability: "span[data-qa-id='availability_selected']",
  // availabilityDay: "li[data-qa-id='is_available_next_7_days']",
  // priceButton: "dt[class='filter-options-title']",
  // amount:"span[class='price']",
  filterAs: function () {
    this.availability.click();
    // this.availabilityDay.click();
    // this.priceButton.click();
    // this.amount.click();
  },
});
