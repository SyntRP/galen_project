this.CheckOut = $page("CheckOut Page", {
  checkOut: "a[class='action viewcart']",
  // CheckItem: "a[class='action showcart']",
  

  checkOutAs: function () {
    this.checkOut.click();
    // Thread.sleep(3000)
    // this.CheckItem.click();
  },
});
