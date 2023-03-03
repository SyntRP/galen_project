this.BookingTime = $page("BookingTime Page", {
  bookingTime: "div[data-qa-id='slot_time']",

  appointmentAs: function () {
    this.bookingTime.click();
  },
});
