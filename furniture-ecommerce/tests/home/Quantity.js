const quantity = readFile("config.json");

this.Quantity = $page("Quantity Page", {
  // cookies: "i[onclick='closeWACard()']",
  AddToWishlist: "span[class='fa fa-heart-o']",
  // quantityDecrease: "button[class='reduced items']",
  // AddToCart: "button[title='Add to Cart']",


  quantityAs: function () {
    // this.cookies.click();
    // Thread.sleep(3000);
    this.AddToWishlist.hover();
    Thread.sleep(3000);
    this.AddToWishlist.click();
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
