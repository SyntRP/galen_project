this.CheckOut = $page("CheckOut Page", {
  checkOut: "a[class='action checkout']",
//   CheckItem: "div[class='title']",

  checkOutAs: function () {
    this.checkOut.click();
    // Thread.sleep(3000)
    // this.CheckItem.click();
  },
});
