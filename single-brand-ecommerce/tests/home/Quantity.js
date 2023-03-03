const quantity = readFile("config.json");

this.Quantity = $page("Quantity Page", {
  size: "input[aria-label='UK 8.5']",
  // quantityIncrease: "button[class='increase items']",
  // quantityDecrease: "button[class='reduced items']",
  // AddToCart: "button[title='Add to Cart']",


  quantityAs: function () {
    this.size.click();
    // Thread.sleep(3000);
    // this.quantityInput.typeText(JSON.parse(quantity).quantity);
    // Thread.sleep(3000);
    // this.quantityIncrease.click();
    // Thread.sleep(3000);
    // this.quantityIncrease.click();
    // Thread.sleep(3000);
    // this.quantityDecrease.click();
    // Thread.sleep(3000);
    // this.quantityDecrease.click();
    // Thread.sleep(3000);
    // this.quantityDecrease.click();
    // Thread.sleep(1000);
    // this.AddToCart.click();

    

  },
});
