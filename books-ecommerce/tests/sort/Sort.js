
this.Sort = $page("Sort Page", {
    select: "span[id='sortProducts1-button-label']",
    sortAs: function () {
      this.select.click();
    },
  });
  