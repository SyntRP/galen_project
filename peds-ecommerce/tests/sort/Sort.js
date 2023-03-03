
this.Sort = $page("Sort Page", {
    select: "select[aria-label='Shop order']",
    sortAs: function () {
      this.select.click();
    },
  });
  