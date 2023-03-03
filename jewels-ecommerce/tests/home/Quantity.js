
this.Quantity = $page("Quantity Page", {
  iframe:"iframe[id='webklipper-publisher-widget-container-notification-frame']",
  close:"a[id='webklipper-publisher-widget-container-notification-close-div']",
  MetalColor: "span[title='18 KT White Gold']",
  AddToCart: "button[title='Add To Cart']",


  closeAs: function () {
    this.close.click();
    Thread.sleep(3000)
  },
  quantityAs: function () {
    
    this.MetalColor.click();
    Thread.sleep(3000)
    this.AddToCart.click();
  }
});
