this.Sort = $page("Sort Page", {
  select: "div[class='nice-select sorter-options']",
  sortAs: function () {
    this.select.click();
  },
});
