
this.ShoppingCart = $page("ShoppingCart Page", {

    shoppingCart: "button[id='continueShopping']",
  
  
    addToCartAs: function () {
    
      this.shoppingCart.click();
  
      
  
    },
  });
  