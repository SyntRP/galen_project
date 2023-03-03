
this.ViewItem = $page("ViewItem Page", {
  Item: "a[aria-label='Nike Air Max 95 Unlocked By You']",
    // itemClick: "div[data-product-id='5171']",
    viewItemAs: function () {
        //   this.itemHover.hover();
        //   Thread.sleep(3000)
          this.Item.click();
    },
  });
  