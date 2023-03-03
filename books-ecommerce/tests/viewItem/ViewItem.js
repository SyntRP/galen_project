
this.ViewItem = $page("ViewItem Page", {
    selectBook: "a[href='/w/che-guevara-helen-yaffe/1101906443?ean=9780230218208']",
    // itemClick: "div[data-product-id='5171']",
    viewBook: function () {
        //   this.itemHover.hover();
        //   Thread.sleep(3000)
          this.selectBook.click();
    },
  });
  