
this.SortOptions = $page("SortOptions Page", {
    option: "option[value='price-desc']",
    sortAs: function () {
      this.option.click();
    },
  });
  