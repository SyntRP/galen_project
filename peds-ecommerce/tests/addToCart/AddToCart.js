
this.AddToCart = $page("AddToCart Page", {

  addToCart: "button[class ='single_add_to_cart_button button alt added']",


  addToCartAs: function () {
  
    this.addToCart.click();
    Thread.sleep(1000)
    

    

  },
});
