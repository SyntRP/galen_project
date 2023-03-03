this.Payment = $page("Payment Page", {
  Quantity: "select[class='cart-item-quantity']",
  Checkout: "button[title='Checkout Securely']",

  PaymentAs: function () {
    this.Quantity.click();
    Thread.sleep(3000)
    this.Checkout.click();
  },
});
