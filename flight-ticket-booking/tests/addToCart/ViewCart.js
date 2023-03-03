
this.ViewCart = $page("ViewCart Page", {

    viewCart: "li[class='nav-item rhf-cart']",
  
  
    addToCartAs: function () {

      this.viewCart.click();
  
      
  
    },
  });
  