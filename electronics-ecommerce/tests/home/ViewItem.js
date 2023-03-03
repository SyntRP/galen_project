
this.ViewItem = $page("ViewItem Page", {
    itemAddToCart: "button[data-sku-id='6468484']",
    // itemView: "div[data-sku-id='6468484']",
    // itemClick: "div[data-product-id='5171']",
    viewItemAs: function () {
        //   this.itemHover.hover();
        //   Thread.sleep(3000)
          this.itemAddToCart.click();
          // Thread.sleep(4000)
          // this.itemView.click();
      
    },
  });
  