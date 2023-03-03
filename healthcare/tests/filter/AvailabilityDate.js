
this.AvailabilityDate = $page("AvailabilityDate Page", {

    availabilityDay: "li[data-qa-id='is_available_next_7_days']",
 
    filterAs: function () {
      this.availabilityDay.click();

    },
  });
  