this.Payment = $page("Payment Page", {
  CheckItem: "label[for='razorpay']",

  PaymentAs: function () {
    this.CheckItem.click();
  },
});
