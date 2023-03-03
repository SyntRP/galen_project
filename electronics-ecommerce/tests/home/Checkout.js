this.CheckOut = $page("CheckOut Page", {
  BenefitPopup: "button[class='c-button c-button-primary c-button-md btn-lg']",
  Quantity: "select[class='tb-select']",
  Option: "option[value='3']",
  CheckOut: "button[data-track='Checkout - Top']",

  checkOutAs: function () {
    this.BenefitPopup.click();
    Thread.sleep(6000)
    this.Quantity.click();
    Thread.sleep(3000)
    this.Option.click();
    Thread.sleep(3000)
    this.CheckOut.click();
  },
});
