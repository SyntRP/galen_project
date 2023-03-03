
this.Sort = $page("Sort Page", {
    select: "span[data-qa-id='sort_by_selected']",
    sortAs: function () {
      this.select.click();

    },
  });
  