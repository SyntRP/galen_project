
this.Sort = $page("Sort Page", {
    select: "select[id='sorter']",
    option: "option[value='price-ASC']",
    sortAs: function () {
      this.select.click();
      Thread.sleep(5000);
      this.option.click();
    },
  });
  