
this.BookAppoinment = $page("BookAppoinment Page", {
  bookAppoinment: "button[data-qa-id='book_button']",

  appointmentAs: function () {
    this.bookAppoinment.click();
  },
});
