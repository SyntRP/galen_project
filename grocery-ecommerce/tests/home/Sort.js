
this.Sort = $page("Sort Page", {
    select: "a[aria-label='Most Popular 3 of 3']",
    // option: "option[value='price-ASC']",
    sortAs: function () {
      this.select.click();
      // Thread.sleep(5000);
      // this.option.click();
    },
  });
  