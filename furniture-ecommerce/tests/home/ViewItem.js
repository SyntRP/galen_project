
this.ViewItem = $page("ViewItem Page", {
    itemHover: "img[src='https://www.theelectriconline.com/media/catalog/product/cache/d2f8401748018e74907eb31e170668dc/4/1/41obhnivntl._sl1500__1.jpg']",
    // itemClick: "div[data-product-id='5171']",
    viewItemAs: function () {
        //   this.itemHover.hover();
        //   Thread.sleep(3000)
          this.itemHover.click();
    },
  });
  