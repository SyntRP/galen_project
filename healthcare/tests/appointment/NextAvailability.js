
this.NextAvailability = $page("NextAvailability Page", {
    nextAvailability: "button[data-qa-id='next_slots']",
    // bookingTime: "div[data-qa-id='slot_time']",

    appointmentAs: function () {
      this.nextAvailability.click();
// Thread.sleep(2000)
    //   this.bookingTime.click();

    },
  });
  