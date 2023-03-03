this.Payment = $page("Payment Page", {
  GoToCart: "a[href='/cart']",

  PaymentAs: function () {
    this.GoToCart.click();
  },
});
