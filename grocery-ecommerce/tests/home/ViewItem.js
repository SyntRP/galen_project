
this.ViewItem = $page("ViewItem Page", {
    item: "img[alt='Signature SELECT Rice White En... rain Instant - 42 Oz']",
    // itemClick: "div[data-product-id='5171']",
    viewItemAs: function () {
        //   this.itemHover.hover();
        //   Thread.sleep(3000)
          this.item.click();
          // Thread.sleep(3000)
          // this.item.click();
    },
  });
  